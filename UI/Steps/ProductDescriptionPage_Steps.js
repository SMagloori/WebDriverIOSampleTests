import { Given, When, Then } from 'cucumber';
import Utils from '../../Utils/Utils.js';
import * as Constants from './../../Utils/Constants.js';
import { expect } from 'chai';
import ProductDescriptionPage from '../PageObjects/ProductDescriptionPage';

Given(/^I Verify Product Description Page is Displayed$/, function () {
    let productNameOnPDP = ProductDescriptionPage.getProductNameOnPage();
    expect(productNameOnPDP).to.equal("Faded Short Sleeve T-shirts");
});

Given(/^I Add Product to Kart$/, function () {
    ProductDescriptionPage.clickAddToCartButton();
});

Given(/^I Click Proceed to Checkout Button On Product Description Page$/, function () {
    ProductDescriptionPage.clickProceedToCheckoutButton();
});