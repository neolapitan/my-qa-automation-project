import { LoginPage } from "../test modules/login-page.cy"
import { Navbar } from "../test modules/navbar.cy"
import { LayoutOne } from "../test modules/layout-one.cy"
import { should } from "chai"
import { LayoutTwo } from "../test modules/layout-two.cy"

const loginPage = new LoginPage()
const navbar = new Navbar()
const layoutOne = new LayoutOne()
const layoutTwo = new LayoutTwo()

describe('test-practice', () => {
  beforeEach(() => {
    cy.visit("https://trytestingthis.netlify.app/")
  }) 

  context('navbar', ()=>{
    it('Check if Home and Contact Buttons Work', () => {
      navbar.clickHomeButton()
      navbar.clickContactButton()
    })
  })

  context('layout-1', () => {
    it('Test if Login is OK', () => {
      loginPage.enterUsername('test')
      loginPage.enterPassword('test')
      loginPage.clickLogin()
      loginPage.homeRedirect()
      
    })

    it('Test Sample Alert Button', () => {
      layoutOne.pressSampleAlert()
    })

    it('Check if Sample Photo Does Not Exist', () => {
      layoutOne.checkSamplePhoto()
    })

    it('Test "Double Click" Button', () => {
      layoutOne.pressDblClickBtn()
    })

    it("The Pizza Image Should be Dragged Inside the Box", () => {
      layoutOne.dragPizzaImage()
    })
  })

  context('layout-2', () => {
    it('User can Enter First Name and Last Name', () => {
      layoutTwo.enterFirstName('John')
      layoutTwo.enterLastName('Doe')
    })

    it('Pick Male Gender', () => {
      layoutTwo.pickGender()
    })

    it('Pick Option 2 in Single Option', () => {
      layoutTwo.pickSingleOption()
    })

    it('Pick Option 3 in Multiple Options', () => {
      layoutTwo.pickMultipleOptions()
    })

    it('Pick Option 1 in Applicable Options', () => {
      layoutTwo.pickApplicableOptions()
    })

    it('Type Chocolate in the Text Box', () => {
      layoutTwo.typeMessage('Chocolate')
    })

    it('Black as Favorite Color', () => {
      layoutTwo.selectBlue('#000000')
    })

    it("Enter Christmas Day", () => {
      layoutTwo.typeXmasDate('2023-12-25')
    })

    it('Set 25 as Value in the Slider', () => {
      layoutTwo.setSliderVal(25)
    })

    it('Attach a Sample JPEG File', () => {
      layoutTwo.attachFile()
    })

    it('Enter 2 as Quantity Value', () => {
      layoutTwo.enterQuantity('2')
    })

    it('Enter a Long Message', () => {
      layoutTwo.enterLongMessage('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt lacinia risus non rhoncus. Aenean mattis consectetur libero, id malesuada enim tincidunt id. Duis consequat tortor id sem elementum convallis. Etiam hendrerit, orci eget aliquet lobortis, augue erat porttitor nibh, et ultricies turpis nunc quis risus. Donec aliquet eu tortor consequat vehicula.')
    })

    it('Click Submit Button', () => {
      layoutTwo.clickSubmit()
    })
  })
})

