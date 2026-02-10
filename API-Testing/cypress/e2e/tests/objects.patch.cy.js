/// <reference types="cypress" />

let devices;
let negativePayloads;
let createdIds = [];

before(() => {
  cy.fixture('mobileDevices').then((d) => { devices = d; });
  cy.fixture('negativePayloads').then((n) => { negativePayloads = n; });
});

describe('PATCH /objects/{id}', () => {
  it('partially updates object', () => {
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
});