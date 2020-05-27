
class ProductDescriptionPage {

    get productName() { return $('h1') }
    get addToCartButton() { return $('p#add_to_cart  span') }
    get proceedToCheckoutButton() { return $('a[title="Proceed to checkout"] > span') }

    getProductNameOnPage() {
        this.productName.waitForDisplayed({ timeout: 3000 });
        return this.productName.getText();
    }

    clickAddToCartButton() {
        this.addToCartButton.click();
    }

    clickProceedToCheckoutButton() {
        this.proceedToCheckoutButton.waitForDisplayed({ timeout: 3000 });
        this.proceedToCheckoutButton.click();
    }
}

export default new ProductDescriptionPage();