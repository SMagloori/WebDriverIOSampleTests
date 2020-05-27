import { Given, When, Then } from 'cucumber';
import Utils from '../../Utils/Utils.js';
import * as Constants from './../../Utils/Constants.js';
import { expect } from 'chai';
import HomePage from '../PageObjects/HomePage.js';


Given(/^I Naviate to Home Page$/, function () {
    browser.url(Constants.BaseURL);
});

Given(/^I Click SignIn Button$/, function () {
    HomePage.clickLoginButton();
});