import cypress from "cypress"
import { getAllJSDocTagsOfKind, isExpressionWithTypeArguments } from "typescript"
import 'cypress-file-upload'

export class LayoutTwo{
    layoutTwo_firstNameLoc = '#fname'
    layoutTwo_lastNameLoc = '#lname'
    layoutTwo_genderRadioBtn = '#male'
    layoutTwo_singleOptLoc = '#option'
    layoutTwo_multOptLoc = '#owc > [value="option 3"]'
    layoutTwo_appliOptLoc = '[name="option1"]'
    layoutTwo_textBoxLoc = '[list="datalists"]'
    layoutTwo_selectColorLoc = '#favcolor'
    layoutTwo_dateLoc = '#day'
    layoutTwo_sliderLoc = '#a'
    layoutTwo_attachFileloc = '#myfile'
    layoutTwo_enterQuantityloc = '#quantity'
    layoutTwo_textAreaLoc = 'textarea'
    layoutTwo_submitBtnLoc = '.btn'

    enterFirstName(fname: string){
        cy.get(this.layoutTwo_firstNameLoc)
            .type(fname)
            .should('have.value', fname)
    }
    enterLastName(lname: string){
        cy.get(this.layoutTwo_lastNameLoc)
            .type(lname)
            .should('have.value', lname)
    }
    pickGender(){
        cy.get(this.layoutTwo_genderRadioBtn)
            .check()
            .should('be.checked')    
    }
    pickSingleOption(){
        cy.get(this.layoutTwo_singleOptLoc)
            .select('option 2')
            .should('contain', 'Option 2')
    }
    pickMultipleOptions(){
        cy.get(this.layoutTwo_multOptLoc)
            .click()
            .should('have.value', 'option 3')
    }
    pickApplicableOptions(){
        cy.get(this.layoutTwo_appliOptLoc)
            .check()
            .should('be.checked')
    }
    typeMessage(message: string){
        cy.get(this.layoutTwo_textBoxLoc)
            .type(message)
        //check Chocolate if it's in the predictive text
        cy.get('[list="datalists"]')
            .should('have.value', 'Chocolate')
    }
    selectBlue(color: string){
        cy.get(this.layoutTwo_selectColorLoc).as('inputFavColor')
        const favColorVal = color
        cy.get('@inputFavColor')
            .type(color)
            .should('have.value', color)
    }
    typeXmasDate(date: string){
        cy.get(this.layoutTwo_dateLoc).as('inputXmasDate')
        const xmasDate = date
        cy.get('@inputXmasDate')
            .type(xmasDate)
            .should('have.value', xmasDate)
    }
    setSliderVal(slider: number){
        cy.get(this.layoutTwo_sliderLoc).as('slider')
        const sliderVal = slider
        cy.get('@slider')
            .invoke('val', sliderVal)
            .should('have.value', sliderVal)
    }
    attachFile(){
        cy.fixture('example.json').then(fileContent => {
            cy.get(this.layoutTwo_attachFileloc).attachFile({
              fileContent: fileContent,
              fileName: 'example.jpg',
              mimeType: 'image/jpeg'
            });
        });
        cy.get(this.layoutTwo_attachFileloc).as('attachFile')
        cy.get('@attachFile')
            .should('have.prop', 'files').and('have.length', 1)
        cy.get('@attachFile')
            .should('prop', 'files').its('0.name').should('equal', 'example.jpg')
    }
    enterQuantity(quantity: string){
        cy.get(this.layoutTwo_enterQuantityloc)
            .type(quantity)
            .should('have.value', quantity)
    }
    enterLongMessage(longText: string){
        cy.get(this.layoutTwo_textAreaLoc).clear()
        cy.get(this.layoutTwo_textAreaLoc)
            .type(longText)
            .should('have.value', longText)
    }
    clickSubmit(){
        //intercepts that window.open function from opening a new tab/window opening as Cypress doesn't support multiple tabs
        cy.window().then((win) => {
            cy.stub(win, 'open').as('redirectToOtherWindow');
        });
        //click the 'submit' button, the window.open function will initiate that will redirect you to another window
        cy.get(this.layoutTwo_submitBtnLoc).click();
        // Assert that upon clicking the 'submit' button, the window.open function was triggered will be intercepted by the previous function
        cy.get('@redirectToOtherWindow').should('be.called');    
    }
}