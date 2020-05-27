
class AddressPage {

    get proceedToCheckoutButton() { return $('div#center_column > form[method="post"]  button > span') }

    clickProceedToCheckoutButton() {
        this.proceedToCheckoutButton.waitForDisplayed({ timeout: 3000 });
        this.proceedToCheckoutButton.click();
    }

}

export default new AddressPage();