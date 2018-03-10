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
When('I Enter Invalid Username', function(callback) {
  this.browser
  .waitForVisible('.register-page__username-input', 2000)
  .setValue('.register-page__username-input', 'aru')
  .setValue('.register-page__email-input', 'aru@abc.com')
  .setValue('.register-page__password-input', 'sqat06')
  .setValue('.register-page__confirm-password-input', 'sqat06')
  .selectByIndex('.register-page__specialties-list,index', 1)
  .selectByIndex('.register-page__specialties-other-list', 8 )
  .scroll('.box')
  .click('.box')
  .click('.register-page__submit-button')
  .then(function() {
    callback();
  }).catch(function(error){
  callback(error);
})
})
Then('I should see result username invalid', function(callback){
  this.browser
  .waitForVisible('.invalid-field', 2000)
  .getText('.invalid-field').then(function(result){
   result.should.equal("Username must be at least 4 characters long (accepts letters, numbers and dashes)"); 
   callback();
  }).catch(function(error){
    callback(error);
    browser.end();
  })
})


Given('I am at figure1 register page', function(callback) {
  this.browser
    .init()
    .url('https://app.figure1.com/account/register').then(function() {
      callback();
    })
})
When('I Enter Username, emailid, password, repeat password, select other fields', function(callback) {
  this.browser
  .waitForVisible('.register-page__username-input', 2000)
  .setValue('.register-page__username-input', this.randomUsers())
  .setValue('.register-page__email-input',this.randomUsers()+ '@gmail.com')
  .setValue('.register-page__password-input', 'sqat06')
  .setValue('.register-page__confirm-password-input', 'sqat06')
  .selectByIndex('.register-page__specialties-list,index', 1)
  .selectByIndex('.register-page__specialties-other-list', 8 )
  .scroll('.box')
  .click('.box')
 // .click('.register-page__submit-button')
  .then(function() {
    callback();
  }).catch(function(error){
  callback(error);
})
})
//Then('I should see Successful result', function(callback){
  //this.browser
  //.waitForVisible('#header-home', 2000)
  //.getText('#header-home').then(function(result){
   //result.should.equal("); 
   //callback();
  //}).catch(function(error){
    //callback(error);
  //})
//})