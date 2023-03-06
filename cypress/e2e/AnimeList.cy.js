describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/myanimelist')
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
    .get("nav > div").should("contain", "My Anime List")
    .get("nav > div").should("contain", "Favorites")
    .get("nav > div").should("contain", "Want a recommendation?")
  })
  it("should have a header and descriptor", () => {
    cy.get(".animeListContainer > h1").contains("My Anime List")
    cy.get(".animeListContainer > p").contains("Keep track of the animes you have watched!")
  })
  it("should add anime titles to list", () => {
    cy.get(".animeListContainer > ol").eq(0)
    cy
    .visit("http://localhost:3000/")
    .get(".iconContainer > .saveBtn > img").first().should("have.class", "unCheckedSave")
    cy.get(".iconContainer > .saveBtn > img").first().click()
    cy.get(".iconContainer > .saveBtn > img").first().should("have.class", "checkedSave")
    cy
    .get("nav").find(".hamburger").click()
    .get(".expanded > ul > .myAnimeList").click()
    cy.get(".animeListContainer > ol").should("contain", "Cowboy Bebop: Tengoku no Tobira")
  })
})