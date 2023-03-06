describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/favorites')
    cy.intercept("GET", "https://api.jikan.moe/v4/anime", {fixture: "featuredAnime"})
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
    cy.get(".favoriteListContainer > h1").contains("Favorites")
  })
  it("should add anime titles to list", () => {
    cy.get(".favoriteListContainer > ol").eq(0)
    cy
    .visit("http://localhost:3000/")
    .get(".iconContainer > .likeBtn > img").first().should("have.class", "unCheckedFavorite")
    cy.get(".iconContainer > .likeBtn > img").first().click()
    cy.get(".iconContainer > .likeBtn > img").first().should("have.class", "checkedFavorite")
    cy
    .get("nav").find(".hamburger").click()
    .get(".expanded > ul > .favorites").click()
    cy.get(".favoriteListContainer > ol").should("contain", "Cowboy Bebop: Tengoku no Tobira")
  })
})