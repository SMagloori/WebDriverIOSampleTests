
class PaymentPage {

    get payByWire() { return $('[title="Pay by bank wire"]') }
    get iConfirmMyOrderButton() { return $('#cart_navigation span') }
    
    selectPayByWireOption() {
        this.payByWire.waitForDisplayed({ timeout: 3000 });
        this.payByWire.click();
    }

    clickIConfirmMyOrderButton() {
        this.iConfirmMyOrderButton.waitForDisplayed({ timeout: 3000 });
        this.iConfirmMyOrderButton.click();
    }
}

export default new PaymentPage();