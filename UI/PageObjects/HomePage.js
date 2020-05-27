
class HomePage {

    get signinButton() { return $('.header_user_info') }

    clickLoginButton() {
        this.signinButton.click();
    }
}

export default new HomePage();