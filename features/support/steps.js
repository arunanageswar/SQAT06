const { Given, When, Then } = require('cucumber')
const chai = require('chai')
const should = chai.should()

"use strict";


Given('I go to figure1 register page', function(callback) {
  this.browser
    .init()
    .url('https://app.figure1.com/account/register').then(function() {
      callback();
    })
})
When('I Enter Invalid credentials on signup page fields', function(callback) {
  this.browser
  .waitForVisible('.register-page__username-input', 2000)
  .setValue('.register-page__username-input', 'aru')
  .setValue('.register-page__email-input', 'aru@abc.com')
  .setValue('.register-page__password-input', 'aru12')
  .setValue('.register-page__confirm-password-input', 'aru12')
  .selectByIndex('.register-page__specialties-list,index', 2)
  .selectByIndex('.register-page__specialties-other-list', 6 )
  .scroll('.box')
  .click('.box')
  .click('.register-page__submit-button')
  .then(function() {
    callback();
  }).catch(function(error){
  callback(error);
})
})
Then('I should see Unsuccessful result', function(callback){
  this.browser
  .waitForVisible('.invalid-field', 2000)
  .getText('.invalid-field').then(function(result){
   result.should.equal("Username must be at least 4 characters long (accepts letters, numbers and dashes)"); 
   callback();
  }).catch(function(error){
    callback(error);
    })
})


Given('I am at figure1 register page', function(callback) {
  this.browser
    .init()
    .url('https://app.figure1.com/account/register').then(function() {
      callback();
    })
})
When('I Enter valid credentials at all fields', function(callback) {
  this.browser
  .waitForVisible('.register-page__username-input', 2000)
  .setValue('.register-page__username-input', this.user)
  .setValue('.register-page__email-input',this.user+ '@gmail.com')
  .setValue('.register-page__password-input', 'aru12')
  .setValue('.register-page__confirm-password-input', 'aru12')
  .selectByIndex('.register-page__specialties-list,index', 2)
  .selectByIndex('.register-page__specialties-other-list', 6 )
  .scroll('.box')
  .click('.box')
  .click('.register-page__submit-button')
  .then(function() {
    callback();
  }).catch(function(error){
  callback(error);
  })
})
Then('I should see Successful result', function(callback){
  this.browser
  .waitForVisible('#header-home', 5000)
  .isVisible('#header-home').then(function(result){
   callback();
  }).catch(function(error){
    callback(error);
 })
})
