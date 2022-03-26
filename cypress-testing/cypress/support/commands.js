Cypress.Commands.add("resetData", () => {
  let apiUrl = Cypress.env("apiUrl");
  cy.request({ url: `${apiUrl}/tasks`, method: "GET" })
    .its("body")
    .then(({ tasks }) => {
      tasks.forEach((item, i) => {
        if (item.id !== 1 && item.id !== 2) {
          cy.request({ url: `${apiUrl}/tasks/${item.id}`, method: "DELETE" });
        }
      });
    });
});
