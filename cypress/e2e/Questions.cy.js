describe('template spec', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://api.jikan.moe/v4/genres/anime", {fixture: "questions"})
    cy.visit('http://localhost:3000/question')

  })
  it("should display an error for a 500 status code" , () => {
    cy
    .intercept("GET", "https://api.jikan.moe/v4/genres/anime", {statusCode: 500})
    .visit("http://localhost:3000/question")
    .contains("An error occured: Status 500. Please try again!")
  })
  it('should have a logo', () => {
    cy.get('.logo').should("be.visible")
  })
  it("should have a navbar with functional links", () => {
    cy
    .get("nav").should("not.have.class", "expanded")
    .find(".hamburger")
    .click()
    .get("nav > div").should("have.class", "expanded")
    .get("nav > div").should("contain", "My Anime List")
    .get("nav > div").should("contain", "Favorites")
    .get("nav > div").should("contain", "Want a recommendation?")
  })
  it("should have a header", () => {
    cy.get(".questionWrapper > h1").contains("What are you in the mood for?")
  })
  it("should list genre options", () => {
    cy.get(".genreOptions > button").contains("Action")
    cy.get(".genreOptions > button").contains("Adventure")
    cy.get(".genreOptions > button").contains("Avant Garde")
  })
  it("should navigate to recommendations page", () => {
    cy.intercept("GET", "https://api.jikan.moe/v4/anime?rating=r17&genres=1", {fixture: "recommendations"})
    cy.get(".genreOptions > button").first().click()
    cy.url().should("eq", "http://localhost:3000/1")
    cy.get(".recommendationContainer > h1").contains("Recommendations")
    cy.get(".allRecommendations").children().should("have.length", 3)
  })
  it("should show a message if there are no recommendations", () => {
    cy.intercept("GET", "https://api.jikan.moe/v4/anime?rating=r17&genres=1", {fixture: "noRecommendations"})
    cy.get(".genreOptions > button").first().click()
    cy.url().should("eq", "http://localhost:3000/1")
    cy.get(".recommendationContainer > div > h2").contains("No Recommendations for this Category")
  })
  it("should navigate to error page when url does not match route", () => {
    cy.intercept("GET", "https://api.jikan.moe/v4/genres/anime", {fixture: "questions"})
    cy.visit("http://localhost:3000/questione")
    cy.get(".errorPageWrapper > h1").should("contain", "Something went wrong - 404 Page Not Found")
  })
  it("should display an error for a 500 status code for Recommendations" , () => {
    cy
    .intercept("GET", "https://api.jikan.moe/v4/anime?rating=r17&genres=1", {statusCode: 500})
    .visit("http://localhost:3000/1")
    .contains("An error occured: Status 500. Please try again!")
  })
})