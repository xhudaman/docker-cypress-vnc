describe("tasks", () => {
  beforeEach(() => {
    cy.resetData();
  });

  it("has the navbar and its contents", () => {
    cy.visit("/");
    cy.contains("Todo App - Dockerize Me");
    cy.contains(".btn-outline-light", "Add Task");
  });

  it("returns default tasks", () => {
    cy.visit("/");

    cy.contains(1)
      .parent("tr")
      .within(() => {
        cy.get("td").contains(
          ".btn-outline-secondary",
          "Dockerize a React app"
        );

        cy.get("td").contains(".badge", "True");

        cy.get("td").contains(".btn-outline-danger", "Del");
      });

    cy.contains(2)
      .parent("tr")
      .within(() => {
        cy.get("td").contains(
          ".btn-outline-secondary",
          "Dockerize a Node/Express app"
        );

        cy.get("td").contains(".badge", "True");

        cy.get("td").contains(".btn-outline-danger", "Del");
      });
  });

  it("successfully adds a task", () => {
    let taskName = "Test adding a task";
    cy.visit("/");

    cy.get("button")
      .contains("Add Task")
      .click();

    cy.get(".form-control").type(taskName);

    cy.get("button")
      .contains("Submit")
      .click();

    cy.contains(".btn-outline-secondary", taskName);
    cy.get("tr:last").contains(".badge", "False");
  });
});
