/// <reference types="cypress" />

let devices;

before(() => {
  cy.fixture('mobileDevices').then((d) => { devices = d; });
});

describe('POST /objects', () => {
  it('creates new objects from fixture', () => {
    devices.forEach((device) => {
      cy.request({
        method: 'POST',
        url: '/objects',
        body: device,
        failOnStatusCode: false
      }).then((resp) => {
        expect([200, 201]).to.include(resp.status);
        expect(resp.body).to.have.property('id');

        if (resp.body.data !== null && resp.body.data !== undefined) {
        expect(resp.body.data).to.be.an('object');
        }

      });
    });
  });
});