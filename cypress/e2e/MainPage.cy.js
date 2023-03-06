describe('Main Page', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://api.jikan.moe/v4/anime", {fixture: "featuredAnime"})
    cy.visit("http://localhost:3000/")
  })
  it('should display a logo', () => {
    cy.get('.logo').should("be.visible")
  })
  it("should have a NavBar that toggles", () => {
    cy
    .get("nav").should("not.have.class", "expanded")
    .find(".hamburger")
    .click()
    .get("nav > div").should("have.class", "expanded")
    .get("nav > div").should("contain", "MyAnimeList")
    .get("nav > div").should("contain", "Favorites")
    .get("nav > div").should("contain", "Want a recommendation?")

    // .contains("MyAnimeList").click()
  })
  it("should have a header and descriptor", () => {
    cy.get(".mainpage > h1").contains("Welcome to Anime Uptown!!!")
    cy.get(".mainpage > p").contains("The perfect place to find recommendations of new anime to watch, update your Anime List, and keep track of your favorites ^-^")
  })
})