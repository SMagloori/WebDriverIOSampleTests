
class MyAccountPage {

    get signoutButton() { return $('a[title="Log me out"]') }
    get customerUserName() { return $('a[title="View my customer account"] > span') }
    get womanCategoryTab() { return $('a[title="Women"]') }

    getCustomerNameOnHeader() {
        return this.customerUserName.getText();
    }

    clickSignoutButton() {
        this.signoutButton.waitForDisplayed({ timeout: 3000 });
        this.signoutButton.click();
    }

    clickWomanCategoryTab() {
        this.womanCategoryTab.click();
    }

}

export default new MyAccountPage();