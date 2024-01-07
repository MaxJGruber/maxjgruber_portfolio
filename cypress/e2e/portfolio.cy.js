describe("Home", () => {
  it("says my name! (renders the page)", () => {
    cy.visit("/");
    cy.get("#home span").contains("Maximilian Gruber");
  });

  it("has 8 navigation links", () => {
    cy.get("nav a").should("have.length", 7);
  });
});

describe("Changing Languages", () => {
  it("switches all text content to French", () => {
    cy.visit("/");
    cy.get(`[alt="French Flag"]`).click();
    cy.get("#home p").contains("Coucou, moi c'est Max!");
    cy.get("nav a").contains("Me contacter");
  });

  it("switches all text content to German", () => {
    cy.get(`[alt="German Flag"]`).click();
    cy.get("#home p").contains("Hallo, ich bin Max!");
    cy.get("nav a").contains("Kontakt");
  });

  it("makes state persist to German after reload", () => {
    cy.reload();
    cy.get("#home p").contains("Hallo, ich bin Max!");
    cy.get("nav a").contains("Kontakt");
  });

  it("switches all text content back to English", () => {
    cy.get(`[alt="UK Flag"]`).click();
    cy.get("#home p").contains("Hi, I'm Max!");
    cy.get("nav a").contains("Contact Me");
  });
});

describe("Links", () => {
  it("has a valid link to my GitHub account", () => {
    cy.contains("Resources").click();
    cy.contains("My GitHub")
      .should("have.attr", "href")
      .and("include", "https://github.com/MaxJGruber");
  });

  it("has a valid link to my LinkedIn account", () => {
    cy.contains("My LinkedIn")
      .should("have.attr", "href")
      .and("include", "https://www.linkedin.com/in/maximilian-j-gruber/");
  });

  it("has the right path for the English CV", () => {
    cy.contains("My CV (English)")
      .should("have.attr", "href")
      .and(
        "include",
        "https://max-gruber-cvs.s3.eu-west-3.amazonaws.com/Max-Gruber-CV.pdf"
      );
  });

  it("has the right path for the French CV", () => {
    cy.contains("My CV (French)")
      .should("have.attr", "href")
      .and(
        "include",
        "https://max-gruber-cvs.s3.eu-west-3.amazonaws.com/Max-Gruber-CV-FR.pdf"
      );
  });

  it("has the right path for the certificate", () => {
    cy.contains("My Certificate")
      .should("have.attr", "href")
      .and(
        "include",
        "https://max-gruber-cvs.s3.eu-west-3.amazonaws.com/IRONHACK_CERTIFICATE.pdf"
      );
  });
});

describe("Blog section", () => {
  it("renders all Medium blog posts", () => {
    cy.get(".post").should("have.length", 3);
  });
});

describe("Form", () => {
  before(() => {
    cy.get("nav a").contains("Contact Me").click();
  });

  context("sending a message though the form", () => {
    it("sends a negative response if the form is incomplete", () => {
      cy.get("input#first_name").type("Max");
      cy.get("input#last_name").type("Gruber");
      cy.contains("Submit").click();
      cy.get("#notification p").contains("Oh no! Something went wrong...");
      cy.reload();
    });

    it("sends a successful response if all required fields are there", () => {
      cy.get("input#first_name").type("Max");
      cy.get("input#last_name").type("Gruber");
      cy.get("input#email").type("maxjgruber@gmail.com");
      cy.get("textarea#message").type("CYPRESS TEST MESSAGE");
      cy.contains("Submit").click();
      cy.get("#notification p").contains("Successfully sent!");
      cy.reload();
    });

    it("sends a successful response if all fields are there", () => {
      cy.get("input#first_name").type("Max");
      cy.get("input#last_name").type("Gruber");
      cy.get("input#email").type("maxjgruber@gmail.com");
      cy.get("input#phone").type("0698202959");
      cy.get("input#subject").type("CYPRESS TEST");
      cy.get("textarea#message").type("CYPRESS TEST MESSAGE");
      cy.contains("Submit").click();
      cy.get("#notification p").contains("Successfully sent!");
    });
  });
});
