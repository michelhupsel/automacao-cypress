const el = require('./elements').ELEMENTS;

class Login {
    acessarPaginaDeLogin() {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home');
      }

    preencherFormulario() {
        cy.get('[data-test="loginUserName"]').type('carowl');
        cy.get('[data-test="loginPassword"]').type('12345678');
        // cy.login('carowl', '12345678')
    }

    realizarLogin(){
        cy.get('[data-test="loginBtn"]').click();
    }
}

export default new Login();