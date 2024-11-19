// Comando para validar mensajes de error
Cypress.Commands.add('validateErrorMessages', (messages) => {
    messages.forEach(message => {
        cy.get('p').contains(message);
    });
});


// Comando para llenar el formulario
Cypress.Commands.add('fillContactForm', (name, email, phone, subject, message) => {
    cy.get('input[placeholder="Name"]').clear().type(name);
    cy.get('input[placeholder="Email"]').clear().type(email);
    cy.get('input[placeholder="Phone"]').clear().type(phone);
    cy.get('input[placeholder="Subject"]').clear().type(subject);
    cy.get('[data-testid="ContactDescription"]').clear().type(message);
});

