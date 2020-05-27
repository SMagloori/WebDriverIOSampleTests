class ShoppingCartPage {

    get proceedToCheckoutButton() { return $('div#center_column  a[title="Proceed to checkout"] > span') }

    clickProceedToCheckoutButton() {
        this.proceedToCheckoutButton.waitForDisplayed({ timeout: 3000 });
        this.proceedToCheckoutButton.click();
    }
}

export default new ShoppingCartPage();