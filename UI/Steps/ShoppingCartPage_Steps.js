import { Given, When, Then } from 'cucumber';
import Utils from '../../Utils/Utils.js';
import * as Constants from './../../Utils/Constants.js';
import { expect } from 'chai';
import ShoppingCartPage from '../PageObjects/ShoppingCartPage.js';

Given(/^I Click Proceed to Checkout Button On Shopping Cart Page$/, function () {
    ShoppingCartPage.clickProceedToCheckoutButton();
});