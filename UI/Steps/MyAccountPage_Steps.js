import { Given, When, Then } from 'cucumber';
import Utils from '../../Utils/Utils.js';
import * as Constants from './../../Utils/Constants.js';
import { expect } from 'chai';
import MyAccountPage from '../PageObjects/MyAccountPage.js';

Given(/^I Verify Customer Name on Header$/, function () {
    let customerNameonHeader = MyAccountPage.getCustomerNameOnHeader();
    expect(customerNameonHeader).to.equal("Test Name");
});

Given(/^I Verify My Account Page is Displayed$/, function () {
    let customerNameonHeader = MyAccountPage.getCustomerNameOnHeader();
    expect(customerNameonHeader).to.equal("Test Name");
});

Given(/^I Click on Logout$/, function () {
    MyAccountPage.clickSignoutButton();
});

Given(/^I Click Woman Category Tab$/, function () {
    MyAccountPage.clickWomanCategoryTab();
});