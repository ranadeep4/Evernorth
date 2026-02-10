/// <reference types="cypress" />

let devices;
let createdIds = [];

before(() => {
  cy.fixture('mobileDevices').then((d) => { devices = d; });
});

describe('PUT /objects/{id}', () => {
  it('fully updates object', () => {
    devices.forEach((device) => {
      cy.request({
        method: 'POST',
        url: '/objects',
        body: device,
        failOnStatusCode: false
      }).then((resp) => {
        if ([200, 201].includes(resp.status)) {
          createdIds.push(resp.body.id);
        }
      });
    });
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
});