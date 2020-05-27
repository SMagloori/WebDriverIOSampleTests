import { Given, When, Then } from 'cucumber';
import Utils from '../../Utils/Utils.js';
import * as Constants from './../../Utils/Constants.js';
import { expect } from 'chai';
import WomanCategoryPage from '../PageObjects/WomanCategoryPage.js';

Given(/^I Select Product with name Faded Short Sleeve T-shirts$/, function () {
    WomanCategoryPage.clickProductToBuy();
});