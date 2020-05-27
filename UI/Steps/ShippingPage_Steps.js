import { Given, When, Then } from 'cucumber';
import Utils from '../../Utils/Utils.js';
import * as Constants from './../../Utils/Constants.js';
import { expect } from 'chai';
import ShippingPage from '../PageObjects/ShippingPage.js';

Given(/^I Click on Terms and Conditions CheckBox On Shipping Page$/, function () {
    ShippingPage.selectTandCCheckBox();
});

Given(/^I Click Proceed to Checkout Button On Shipping Page$/, function () {
    ShippingPage.clickProceedToCheckoutButton();
});