describe('test booker', {testIsolation:false}, () => {
  it('should visit the page and check the home', () => {
    cy.visit('https://automationintesting.online/');
    cy.title().should('eq', 'Restful-booker-platform demo');
  })

  it('should test information page', () => {
     /* testea la descripción del hotel */
    cy.get('.col-sm-10 > p').contains('Welcome to Shady Meadows, a delightful Bed & Breakfast nestled in the hills on Newingtonfordburyshire. A place so beautiful you will never want to leave. All our rooms have comfortable beds and we provide breakfast from the locally sourced supermarket. It is a delightful place.').should('be.visible');
    /* testea la informmación del hotel */
    cy.get('.fa-home').should('be.visible');
    cy.get('p').contains('Shady Meadows B&B').should('be.visible');
    cy.get('p').contains('The Old Farmhouse, Shady Street, Newfordburyshire, NE1 410S').should('be.visible');
    cy.get('.fa-phone').should('be.visible');
    cy.get('p').contains('012345678901').should('be.visible');
    cy.get('p').contains('fake@fakeemail.com').should('be.visible');
    cy.get('.fa-envelope').should('be.visible');
  })

  it('should test exist at least one image', () => {
    /* Testea que exista al menos una imagen */
    cy.get('img').should('be.visible');
    /* Testea que existan dos imagenes en específico */
    cy.get('img[src="/images/rbp-logo.jpg"]').should('be.visible');
    cy.get('img[src="/images/room2.jpg"]').should('be.visible');
  });
})