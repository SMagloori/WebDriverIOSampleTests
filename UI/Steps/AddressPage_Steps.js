import { Given, When, Then } from 'cucumber';
import Utils from '../../Utils/Utils.js';
import * as Constants from './../../Utils/Constants.js';
import { expect } from 'chai';
import AddressPage from '../PageObjects/AddressPage.js';

Given(/^I Click Proceed to Checkout Button On Addresses Page$/, function () {
    AddressPage.clickProceedToCheckoutButton();
});