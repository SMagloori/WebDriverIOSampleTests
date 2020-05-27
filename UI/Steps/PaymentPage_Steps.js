import { Given, When, Then } from 'cucumber';
import Utils from '../../Utils/Utils.js';
import * as Constants from './../../Utils/Constants.js';
import { expect } from 'chai';
import PaymentPage from '../PageObjects/PaymentPage.js';

Given(/^I Select Pay By Wire Option on Payment Page$/, function () {
    PaymentPage.selectPayByWireOption();
});

Given(/^I Click I Confirm My Order Button On Payment Page$/, function () {
    PaymentPage.clickIConfirmMyOrderButton();
});