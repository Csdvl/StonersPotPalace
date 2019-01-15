import { contactForm } from '../Selectors/selectors';
import {fakeUser} from '../../support/utils';


const {
  header, subHeader, firstNameLabel, firstNameInput, lastNameLabel, lastNameInput, emailLabel, emailInput, phoneNumberLabel, phoneNumberInput, subjectLabel, subjectInput, messageLabel, messageInput,
  methodLabel, methodInput, button
} = contactForm;


describe('Contact Form Test', () => {
  
  const headerContent = 'Contact Form';
  const subHeaderContent= 'Send us your thoughts on anything and we\'ll do our best to answer';
  const firstNameContent = 'First Name';
  const lastNameContent = 'Last Name';
  const emailContent = 'E-mail address';
  const phoneNumberContent = 'Phone Number';
  const subjectContent = 'Subject';
  const messageContent = 'Message';
  const methodContent = 'Preferred method of contact';
  const buttonContent = 'Submit Information';
  
  context('Un Authenthicated', () => {
    before(() => {
      cy.visit('/contact')
    });
    it('fills the contact UNAUTH form', () => {
      cy.url().should('include', '/contact');
      cy.cav('.huge.inverted > .ui.header', 'Our shops');
      
      //  Contact Form
      cy.cav(header, headerContent);
      cy.cav(subHeader, subHeaderContent);
      //  First Name
      cy.cav(firstNameLabel, firstNameContent);
      cy.tvav(firstNameInput, fakeUser.firstName);
      //  Last Name
      cy.cav(lastNameLabel, lastNameContent);
      cy.tvav(lastNameInput, fakeUser.lastName);
      //  Email
      cy.cav(emailLabel, emailContent);
      cy.tvav(emailInput, fakeUser.email);
      //  Phone Number
      cy.cav(phoneNumberLabel, phoneNumberContent);
      cy.tvav(phoneNumberInput, '07506272144');
      //  Subject
      cy.cav(subjectLabel, subjectContent);
      cy.tvav(subjectInput, fakeUser.word);
      //  Message
      cy.cav(messageLabel, messageContent);
      cy.tvav(messageInput, fakeUser.paragraph);
      //  Method
      cy.cav(methodLabel, methodContent);
      cy.get(methodInput).click();
      cy.get('span.text').contains('E-mail').and('be.visible').click();
      //  Button
      cy.cav(button, buttonContent).click();
    });
  });
});
