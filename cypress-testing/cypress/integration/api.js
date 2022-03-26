describe("tasks", () => {
  it("returns default tasks", () => {
    cy.visit("/");

    cy.contains("Todo App - Dockerize Me");
    cy.contains(".btn-outline-light", "Add Task");
  });
});
