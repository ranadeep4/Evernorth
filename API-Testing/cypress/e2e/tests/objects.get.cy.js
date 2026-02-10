/// <reference types="cypress" />

let devices;
let createdIds = [];

before(() => {
  cy.fixture('mobileDevices').then((d) => { devices = d; });
});

describe('GET /objects', () => {
  it('retrieves all objects', () => {
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

  it('retrieves single object after creation', () => {
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
    cy.wrap(createdIds).each((id) => {
      cy.request(`/objects/${id}`).then((resp) => {
        expect(resp.status).to.eq(200);
        expect(resp.body).to.have.property('id').and.to.eq(id);
        expect(resp.body).to.have.property('name');
        if ('data' in resp.body) {
          expect(resp.body.data === null || typeof resp.body.data === 'object').to.be.true;
        }
      });
    });
  });
});