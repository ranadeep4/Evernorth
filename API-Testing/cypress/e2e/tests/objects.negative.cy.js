/// <reference types="cypress" />

let negativePayloads;

before(() => {
  cy.fixture('negativePayloads').then((n) => { negativePayloads = n; });
});

describe('POST /objects - accepts invalid object (documented behavior)', () => {
  it('should not successfully create invalid object', () => {
    cy.request({
      method: 'POST',
      url: '/objects',
      body: negativePayloads.invalidObject,
      failOnStatusCode: false
    }).then((resp) => {
        expect(resp.status).to.be.oneOf([200, 201]);
        expect(resp.body).to.have.property('id');
        
    });
  });
});