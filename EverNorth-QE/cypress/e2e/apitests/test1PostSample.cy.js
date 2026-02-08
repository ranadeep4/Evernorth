/// <reference types="cypress" />

describe("POST SUITE", () => {
    // http://localhost:5002/api/members : GET : return all the members

    // GET      /members        get all members
    // GET      /members/1      get member with id=1
    // POST     /members        add new members in PFMembers.json
    // PUT      /members/1      POST an existing member into PFMembers.json
    // DELETE	/members/1      DELETE an existing member into PFMembers.json

    before(function () {
        Cypress.config("baseUrl", "http://localhost:5002")
    })
    it("Get Members", () => {
        cy.request({
            url: "/api/members",
            method: "GET",
            auth: {
                username: "admin",
                password: "admin",
            },
        }).its("body").then((body) => {
            expect(body).to.have.length(26)
            cy.log(JSON.stringify(body));
        });
    });
    it("Post Member", () => {
        const newMember = {
            "name": "John Doe",
            "gender": "Male"
        };
        cy.request({
            url: "/api/members",
            method: "POST",
            auth: {
                username: "admin",
                password: "admin",
            },
            body: newMember,
        }).its("body").then((body) => {
            expect(body).to.include(newMember);
            // debugger;
            expect(body).to.have.property("id");
            cy.log(JSON.stringify(body));
        });
    });

});
