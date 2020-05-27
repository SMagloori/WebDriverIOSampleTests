import Utils from '../../Utils/Utils.js';
import * as Constants from '../../Utils/Constants.js';

class SigninPage {

    get userRegisterEmailIDField() { return $('[name="email_create"]') }
    get createAccountButton() { return $('button#SubmitCreate > span') }
    get registeredEmailAddressTextField() { return $('input#email') }
    get registeredUserPasswordTextField() { return $('input#passwd') }
    get signinButton() { return $('button#SubmitLogin > span') }

    populateEmailField() {
        let emailID = "TestEmail+" + Utils.GetRandonString(5) + "@gmail.com";
        this.userRegisterEmailIDField.waitForDisplayed({ timeout: 3000 });
        this.userRegisterEmailIDField.setValue(emailID);
    }

    clickCreateAccountButton() {
        this.createAccountButton.waitForClickable({ timeout: 3000 });
        this.createAccountButton.click();
    }

    populateRegisterEmailField() {
        this.registeredEmailAddressTextField.waitForDisplayed({ timeout: 3000 });
        this.registeredEmailAddressTextField.setValue(Constants.existingUserName);
    }

    populateCustomerPassword() {
        this.registeredUserPasswordTextField.setValue(Constants.existingUserPassword);
    }

    clickSignInButton() {
        this.signinButton.click();
    }
}

export default new SigninPage();