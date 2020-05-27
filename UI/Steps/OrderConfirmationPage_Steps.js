import { Given, When, Then } from 'cucumber';
import Utils from '../../Utils/Utils.js';
import * as Constants from './../../Utils/Constants.js';
import { expect } from 'chai';
import OrderConfirmationPage from '../PageObjects/OrderConfirmationPage.js';

Given(/^I Verify that Order Confirmation Page is Displayed$/, function () {
    let OrderConfirmationPageHeadText = OrderConfirmationPage.getOrderConfirmationHeddingText();
    expect(OrderConfirmationPageHeadText).to.equal("ORDER CONFIRMATION");
});

Given(/^I Verify that Order is Complete Text is Displayed$/, function () {
    let OrderCompleteText = OrderConfirmationPage.getOrderCompleteText();
    expect(OrderCompleteText).to.equal("Your order on My Store is complete.");
});