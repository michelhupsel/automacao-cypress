import Login from '../support/pages/login/pagina-login'

describe('Página de login', () => {

    beforeEach(() => {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    })

    it('Preencher os campos do login corretamente para realizar login', () => {
        // cy.login('carowl', '12345678')
        Login.acessarPaginaDeLogin();
        Login.preencherFormulario();
        Login.realizarLogin();
    })
})