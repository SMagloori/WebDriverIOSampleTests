import { Given, When, Then } from 'cucumber';
import Utils from '../../Utils/Utils.js';
import * as Constants from './../../Utils/Constants.js';
import { expect } from 'chai';
import SigninPage from '../PageObjects/SigninPage.js';


Given(/^I Populate Email Address Field$/, function () {
    SigninPage.populateEmailField();
});

Given(/^I Populate Registered Customer Credentials$/, function () {
    SigninPage.populateRegisterEmailField();
    SigninPage.populateCustomerPassword();
});

Given(/^I Click Signin Button$/, function () {
    SigninPage.clickSignInButton();
});

Given(/^I Click Create an Account Button$/, function () {
    SigninPage.clickCreateAccountButton();
});