import {fakeUser} from '../../support/utils';


describe('Register an account, fill personal details and place an order', () => {
  
  it('Visits the website', () => {
    cy.server();
    cy.visit('/');
  });
  
  it('Registers an account and fills in personal details', () => {
    cy.get('[href="/auth"]').click();
    
    cy.get('input[name="email"]').type(fakeUser.email).should('have.value', fakeUser.email);
    cy.get('input[name="password"]').type(fakeUser.password);
    cy.get('input[name="passwordConfirm"]').type(fakeUser.password);
    
    cy.get('.teal').should('have.text', 'Register account').click();
    
    cy.get('div.text').should('have.text', 'Tell us about you').click();
    cy.get('[data-test=details]').should('have.text', 'My Details').click();
    
    cy.get('input[name="firstName"]').type(fakeUser.firstName);
    cy.get('input[name="lastName"]').type(fakeUser.lastName);
    cy.get('input[name="gender"]').check('female', { force: true });
    
    cy.get('input[name="phoneNumber"]').type('07506272144');
    cy.get('div.ui.selection.dropdown').click().contains('Spain').click();
   
    cy.get('input[name="postcode"]').type('se280pb');
    cy.get('textarea[name="address"]').type(fakeUser.address);
    cy.get('input[name="city"]').type(fakeUser.city);
    cy.get('input[name="county"]').type(fakeUser.county);
    cy.get('input[name="newsletter"]').check({force:true});
    cy.get('button.ui.teal.large.button').click();
  });
  
  it('Places an order', () => {
    cy.get('[href="/shop"]').should('have.text', 'Shop').click();
  
    cy.get('[data-test=bakewell]').should('have.text', 'Add to basket!').click();
    cy.get('[data-test=strudel]').should('have.text', 'Add to basket!').click();
    cy.get('[data-test=raspberryWhiteChoc]').should('have.text', 'Add to basket!').click();
    
    cy.get('[data-test=basket]').click();
  
    cy.get('[data-test=plusbakewell]').should('have.text', '+').click();
    cy.get('[data-test=plusbakewell]').should('have.text', '+').click();
    
    cy.get('[data-test=plusstrudel]').should('have.text', '+').click();
    cy.get('[data-test=plusstrudel]').should('have.text', '+').click();
    cy.get('[data-test=plusstrudel]').should('have.text', '+').click();
    
    cy.get('[data-test=plusraspberryWhiteChoc]').should('have.text', '+').click();
    cy.get('[data-test=plusraspberryWhiteChoc]').should('have.text', '+').click();
    cy.get('[data-test=plusraspberryWhiteChoc]').should('have.text', '+').click();
    cy.get('[data-test=plusraspberryWhiteChoc]').should('have.text', '+').click();
  
    cy.get('[data-test=minusstrudel]').should('have.text', '-').click();
    cy.get('[data-test=minusraspberryWhiteChoc]').should('have.text', '-').click();
    cy.get('[data-test=minusraspberryWhiteChoc]').should('have.text', '-').click();
  
    cy.get('[href="/checkout"]').should('have.text', ' to checkout... ').click();
  
    cy.get('input[name="country"]').type(fakeUser.county);
    cy.get('input[name="city"]').type(fakeUser.city);
    cy.get('textarea[name="address"]').type(fakeUser.address);
    cy.get('input[name="postcode"]').type('se280pb');
    
    cy.get('[data-test=next]').should('have.text', 'Next').click();
  
    cy.get('textarea[name="deliveryInstructions"]').type(fakeUser.paragraph);
  
    cy.get('[data-test=next]').should('have.text', 'Next').click();
    
    cy.get('[data-test=removeraspberryWhiteChoc]').click();
  
    cy.get('[type="submit"]').should('have.text', 'Place the order').click();
  })
  
});
