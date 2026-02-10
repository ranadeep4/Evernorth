/// <reference types="cypress" />

let createdIds = [];


  let devices;
  let negativePayloads;
  before(() => {
    cy.fixture('mobileDevices').then((d) => { devices = d; });
    cy.fixture('negativePayloads').then((n) => { negativePayloads = n; });
  });

  it('GET /objects - retrieves all objects', () => {
    cy.request('/objects').then((resp) => {
      expect(resp.status).to.eq(200);
      expect(resp.body).to.be.an('array');
      resp.body.forEach((obj) => {
        expect(obj).to.have.property('id').and.to.be.a('string');
        expect(obj).to.have.property('name').and.to.be.a('string');
        if ('data' in obj) {
          expect(obj.data === null || typeof obj.data === 'object').to.be.true;
        }
      });
    });
  });

  it('POST /objects - creates new objects from fixture', () => {
    devices.forEach((device) => {
      cy.request({
        method: 'POST',
        url: '/objects',
        body: device,
        failOnStatusCode: false
      }).then((resp) => {
        expect([200, 201]).to.include(resp.status);
        expect(resp.body).to.have.property('id');
        expect(resp.body).to.have.property('name').and.to.eq(device.name);
        createdIds.push(resp.body.id);
      });
    });
  });

  it('GET /objects/{id} - retrieves single object', () => {
    if (!createdIds.length) return;
    createdIds.forEach((id) => {
      cy.request(`/objects/${id}`).then((resp) => {
        expect(resp.status).to.eq(200);
        expect(resp.body).to.have.property('id').and.to.eq(id);
        expect(resp.body).to.have.property('name').and.to.be.a('string');
        if ('data' in resp.body) {
          expect(resp.body.data === null || typeof resp.body.data === 'object').to.be.true;
        }
      });
    });
  });

  it('PUT /objects/{id} - fully updates object', () => {
    if (!createdIds.length) return;
    const updated = {
      name: 'Updated MacBook',
      data: { price: 1499, color: 'Silver', year: 2025 }
    };
    const id = createdIds[0];
    cy.request({
      method: 'PUT',
      url: `/objects/${id}`,
      body: updated,
      failOnStatusCode: false
    }).then((resp) => {
      expect(resp.status).to.eq(200);
      expect(resp.body).to.have.property('name').and.to.eq(updated.name);
      if ('data' in resp.body) {
        expect(resp.body.data).to.have.property('price');
        expect(resp.body.data).to.have.property('color');
        expect(resp.body.data).to.have.property('year');
      }
    });
  });

  it('PATCH /objects/{id} - partially updates object', () => {
    if (!createdIds.length) return;
    const id = createdIds[0];
    const partial = negativePayloads.partialUpdatePayload;
    cy.request({
      method: 'PATCH',
      url: `/objects/${id}`,
      body: partial,
      failOnStatusCode: false
    }).then((resp) => {
      expect(resp.status).to.eq(200);
      expect(resp.body).to.have.property('name').and.to.eq(partial.name);
      if ('data' in resp.body) {
        expect(resp.body.data === null || typeof resp.body.data === 'object').to.be.true;
      }
    });
  });

  it('DELETE /objects/{id} - deletes object', () => {
    if (!createdIds.length) return;
    const id = createdIds[0];
    cy.request({
      method: 'DELETE',
      url: `/objects/${id}`,
      failOnStatusCode: false
    }).then((resp) => {
      expect([200, 204]).to.include(resp.status);
    });
  });

  it('POST /objects - negative: invalid object', () => {
    cy.request({
      method: 'POST',
      url: '/objects',
      body: negativePayloads.invalidObject,
      failOnStatusCode: false
    }).then((resp) => {
      expect(resp.body).to.not.have.property('id');
      expect([400, 422, 500, 200, 201]).to.include(resp.status);
    });
  });

