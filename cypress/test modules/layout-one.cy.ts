export class LayoutOne{
    layoutone_sampleAlertLoc = '.pop-up-alert > button'
    layoutone_sampleAlertMessageLoc = '.pop-up-alert > #demo'
    layoutone_sampleAlertMessage = 'You Pressed the OK Button!'
    layoutone_samplePhotoLoc = '.fakeimg'
    layoutone_dblClickBtnLoc = '[ondblclick="myFunction()"]'
    layoutone_pizzaImgLoc = '#drag1'
    layoutone_pizzaBoxLoc = '#div1'

    pressSampleAlert(){
        cy.get(this.layoutone_sampleAlertLoc)
            .click()
        cy.get(this.layoutone_sampleAlertMessageLoc)
            .contains(this.layoutone_sampleAlertMessage)
            .should('exist')
    }
    checkSamplePhoto(){
        cy.get(this.layoutone_samplePhotoLoc)
            .should('not.have.attr', 'src')
    }
    pressDblClickBtn(){
        cy.get(this.layoutone_dblClickBtnLoc)
            .dblclick()
    }
    dragPizzaImage(){
        //when dragging an element, we need to use datatransfer property
        const dataTransfer = new DataTransfer()
        //get an element and drag it to something
        cy.get(this.layoutone_pizzaImgLoc).trigger('dragstart', {
            dataTransfer
        })
        //this is where we drop the element
        cy.get(this.layoutone_pizzaBoxLoc).trigger('drop', {
            dataTransfer
        })
    }
}