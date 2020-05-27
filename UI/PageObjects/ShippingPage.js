
class ShippingPage {

    get proceedToCheckoutButton() { return $('.standard-checkout span') }
    get tAndCCheckBox() { return $('label') }
    
    selectTandCCheckBox() {
        this.tAndCCheckBox.waitForDisplayed({ timeout: 3000 });
        this.tAndCCheckBox.click();
    }

    clickProceedToCheckoutButton() {
        this.proceedToCheckoutButton.click();
    }

}

export default new ShippingPage();