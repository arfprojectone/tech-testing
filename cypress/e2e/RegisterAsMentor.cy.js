describe('Register as Mentor Feature', () => {

    // Data test
    const mentorName = 'Arif Mentor Test'
    const mentorEmail = 'tes5@test.com'
    const mentorWhatsApp = '62812000000001'
    const mentorCompany = 'PT Testing'
    const pin = 'A123123123'
    const confirmationPin = pin

    it('Register as Mentor Successful', () => {
        cy.visit('https://job-portal-user-dev-skx7zw44dq-et.a.run.app/mentoring')

        cy.contains('a', 'Menjadi mentor')
          .should('be.visible')
          .click()

        cy.contains('button', 'Apply as Mentor')
          .should('be.visible')
          .click()

        cy.contains('span', 'Daftar dengan Email')
          .should('be.visible')
          .click()

        cy.wait(2000)
        cy.get('#mentor-onboarding_fullName')
          .should('exist')
          .should('be.visible')
          .as('inputMentorName')
        cy.get('@inputMentorName').type(mentorName)

        cy.get('#mentor-onboarding_email')
          .should('exist')
          .should('be.visible')
          .as('inputMentorEmail')
        cy.get('@inputMentorEmail').type(mentorEmail)

        cy.get('#mentor-onboarding_whatsapp')
          .should('exist')
          .should('be.visible')
          .as('inputMentorWhatApp')
        cy.get('@inputMentorWhatApp').type(mentorWhatsApp)

        cy.get('#mentor-onboarding_linkedInUrl')
          .should('exist')
          .should('be.visible')
          .as('inputLinkenidMentor')
        cy.get('@inputLinkenidMentor').type('https://www.linkedin.com/in/ariftest/')

        cy.get('#mentor-onboarding_instagramUrl')
          .should('exist')
          .should('be.visible')
          .as('inputInstagramMentor')
        cy.get('@inputInstagramMentor').type('https://www.instagram.com/ariftest/')

        cy.get('#mentor-onboarding_invitationCode')
          .should('exist')
          .should('be.visible')
          .as('inputInvitationCode')
        cy.get('@inputInvitationCode').type('1230001')

        cy.wait(2000)
        cy.contains('button', 'Selanjutnya')
          .should('be.visible')
          .should('not.be.disabled')
          .click();
        
        cy.wait(2000)
        cy.contains('h1', 'Karir')
          .should('be.visible')
          .click()

        cy.get('.ant-select-selector')
          .should('be.visible')
          .click();

        cy.wait(2000)
        cy.contains('IT & Engineering').click()

        cy.contains('span', 'Android Developer')
          .click()

        cy.contains('button', 'Selanjutnya')
          .should('be.visible')
          .should('not.be.disabled')
          .click();

        cy.wait(2000)
        cy.get('#companyName')
          .type(`${mentorCompany}{enter}`)
        
        cy.get('#rc_select_8, #rc_select_4')
          .type('Teknologi{enter}')
        
        cy.get('#roleLevel')
          .type('C Level{enter}')
        
        cy.get('#roleName')
          .type('CTO{enter}')
        
        cy.get('#startDate')
          .type('102024{enter}')

        // cy.get('#endDate')
        //   .type('012025{enter}')

        cy.get('.ant-checkbox-wrapper')
          .click()

        cy.contains('button', 'Selanjutnya')
          .should('be.visible')
          .should('not.be.disabled')
          .click();

        cy.wait(2000)
        cy.get('#institution')
          .type('Indonesia')

        cy.wait(1000)
        cy.get('#institution')
          .type('{enter}')

        cy.get('#major')
          .type('Technology{enter}')
        
        cy.get('#startDate')
          .type('102015{enter}')

        cy.get('#endDate')
          .type('102018{enter}')

        cy.contains('button', 'Selanjutnya')
          .should('be.visible')
          .should('not.be.disabled')
          .click();

        cy.wait(2000)
        cy.get('#aboutMe')
          .should('be.visible')
          .type(`Hai saya ${mentorName}`)

        cy.contains('button', 'Selanjutnya')
          .should('be.visible')
          .should('not.be.disabled')
          .click()

        cy.get('.ant-checkbox-wrapper')
          .click()

        cy.contains('button', 'Next')
          .should('be.visible')
          .should('not.be.disabled')
          .click()

        cy.wait(2000)
        cy.get('#password')
          .type(pin)

        cy.get('#confirmPassword')
          .type(confirmationPin)

        cy.get('.ant-checkbox-input')
          .click()

        cy.contains('button', 'Selesai')
          .should('be.visible')
          .should('not.be.disabled')
          .click()

        cy.get('article.flex > :nth-child(1) > .flex')
          .should('be.visible')
    })
})