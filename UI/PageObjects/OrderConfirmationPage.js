
class OrderConfirmationPage {

    get orderConfirmationHedding() { return $('div#center_column > .page-heading') }
    get orderCompleteText() { return $('div#center_column .dark') }
    
    getOrderConfirmationHeddingText() {
        this.orderConfirmationHedding.waitForDisplayed({ timeout: 3000 });
        return this.orderConfirmationHedding.getText();
    }

    getOrderCompleteText() {
        return this.orderCompleteText.getText();
    }

}

export default new OrderConfirmationPage();