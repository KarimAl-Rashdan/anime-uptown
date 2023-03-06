describe('Main Page', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://api.jikan.moe/v4/anime", {fixture: "featuredAnime"})
    cy.visit("http://localhost:3000/")
  })
  it("should display an error for a 500 status code" , () => {
    cy
    .intercept("GET", "https://api.jikan.moe/v4/anime", {statusCode: 500})
    .visit("http://localhost:3000/")
    .contains("An error occured: Status 500. Please try again!")
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
    .get("nav > div").should("contain", "My Anime List")
    .get("nav > div").should("contain", "Favorites")
    .get("nav > div").should("contain", "Want a recommendation?")
  })
  it("should navigate to links", () => {
    cy
    .get("nav").find(".hamburger").click()
    .get(".expanded > ul > .myAnimeList").click()
    cy.url().should("eq", "http://localhost:3000/myanimelist")
    cy.get("nav").should("not.have.class", "expanded")
    cy
    .get("nav").find(".hamburger").click()
    .get(".expanded > ul > .favorites").click()
    cy.url().should("eq", "http://localhost:3000/favorites")
    cy.get("nav").should("not.have.class", "expanded")
    cy
    .get("nav").find(".hamburger").click()
    .get(".expanded > ul > .question").click()
    cy.url().should("eq", "http://localhost:3000/question")
    cy.get("nav").should("not.have.class", "expanded")
  })
  it("should have a header and descriptor", () => {
    cy.get(".mainpage > header > h1").contains("Welcome to Anime Uptown!!!")
    cy.get(".mainpage > header > p").contains("The perfect place to find recommendations of new anime to watch, update your Anime List, and keep track of your favorites ^-^")
  })
  it("should display featured anime", () => {
    cy.get(".allCards").children().should("have.length", 3)
    cy.get(".animeCard > img").first().should("have.attr", "src", "https://cdn.myanimelist.net/images/anime/1439/93480.jpg")
    cy.get(".animeCard > .title").first().contains("Cowboy Bebop: Tengoku no Tobira")
    cy.get(".animeCard > .rating").first().contains("594 Rating")
    cy.get(".animeCard > img").last().should("have.attr", "src", "https://cdn.myanimelist.net/images/anime/4/19644.jpg")
    cy.get(".animeCard > .title").last().contains("Cowboy Bebop")
    cy.get(".animeCard > .rating").last().contains("43 Rating")
  })
  it("should update favorite and saved icons when clicked", () => {
    cy.get(".iconContainer > .saveBtn > img").first().should("have.class", "unCheckedSave")
    cy.get(".iconContainer > .saveBtn > img").first().click()
    cy.get(".iconContainer > .saveBtn > img").first().should("have.class", "checkedSave")
    cy.get(".iconContainer > .likeBtn > img").first().should("have.class", "unCheckedFavorite")
    cy.get(".iconContainer > .likeBtn > img").first().click()
    cy.get(".iconContainer > .likeBtn > img").first().should("have.class", "checkedFavorite")
  })
  it("should navigate to error page when url does not match route", () => {
    cy.intercept("GET", "https://api.jikan.moe/v4/anime", {fixture: "featuredAnime"})
    cy.visit("http://localhost:3000/msd")
    cy.get(".errorPageWrapper > h1").should("contain", "Something went wrong - 404 Page Not Found")
  })
})