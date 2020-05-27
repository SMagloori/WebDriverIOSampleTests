
class WomanCategoryPage {

    get productFadedShortSleeveT() { return $('h5 > a[title="Faded Short Sleeve T-shirts"]') }

    clickProductToBuy() {
        this.productFadedShortSleeveT.waitForDisplayed({ timeout: 3000 });
        this.productFadedShortSleeveT.click();
    }
}

export default new WomanCategoryPage();