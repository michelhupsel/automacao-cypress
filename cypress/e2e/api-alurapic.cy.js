describe('API Alurapic', () => {
    //     it('Dados da API', () => {
    //         cy.request({
    //             method: 'POST',
    //             url: 'https://3076-cypress-alurapic-front.vercel.app/user/login',
    //             body: Cypress.env()
    //         }).then((res) => {
    //             expect(res.status).to.be.equal(200)
    //             expect(res.body).is.not.empty
    //             expect(res.body).to.have.property('id')
    //             expect(res.body.id).to.be.equal(4)
    //         })
    //     })
    //   })

    it('Fotos do usuário', () => {
        const tempoEsperado = Math.random() * 50;

        cy.request({
            method: 'GET',
            url: 'https://alurapic-api.onrender.com/carowl/photos'
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body[0]).to.have.property('description')
            expect(res.body[0].description).to.be.equal('porquinho')
            expect(res.duration).to.be.lte(tempoEsperado)
        })
    })
})