describe('template spec', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://api.jikan.moe/v4/genres/anime", {fixture: "questions"})
    cy.visit('http://localhost:3000/question')

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
    .get("nav > div").should("contain", "MyAnimeList")
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

    // cy.get(".genreOptions > button").first().click()
    // cy.url("http://localhost:3000/1")
    // .visit("http://localhost:3000/")
    // .get(".iconContainer > .likeBtn > img").first().should("have.class", "unCheckedFavorite")
    // cy.get(".iconContainer > .likeBtn > img").first().click()
    // cy.get(".iconContainer > .likeBtn > img").first().should("have.class", "checkedFavorite")
    // cy
    // .get("nav").find(".hamburger").click()
    // .get(".expanded > ul > .favorites").click()
    // cy.get(".favoriteListContainer > ol").should("contain", "Cowboy Bebop: Tengoku no Tobira")
  })
  it("should navigate to recommendations page", () => {
    cy.intercept("GET", "https://api.jikan.moe/v4/anime?rating=r17&genres=1", {fixture: "recommendations"})
    cy.get(".genreOptions > button").first().click()

    // cy.get(".recommendationContainer > .recommendationWrapper > .allRecommendations")
    cy.url().should("eq", "http://localhost:3000/1")
    cy.get(".allRecommendations").children().eq(3)

  })
})