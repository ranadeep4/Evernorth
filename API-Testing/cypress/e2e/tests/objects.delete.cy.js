/// <reference types="cypress" />

let devices;
let createdIds = [];

before(() => {
  cy.fixture('mobileDevices').then((d) => { devices = d; });
});

describe('DELETE /objects/{id}', () => {
  it('deletes object', () => {
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
    cy.request({
      method: 'DELETE',
      url: `/objects/${id}`,
      failOnStatusCode: false
    }).then((resp) => {
      expect([200, 204]).to.include(resp.status);
    });
  });
});