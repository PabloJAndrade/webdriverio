import loginLocators from '../locatorsPages/loginLocators'
import RemoveCreditCardLocators from '../locatorsPages/removecreditcardLocators'
import GeneralPage from './general.page'

class LoginPage {
    public async flowLogin() {
        await waitForBeTrue(loginLocators.menuButton);
        await loginLocators.menuButton.click();
        
        await waitForBeTrue(loginLocators.accountHeader, 'Entre na sua conta');
        await loginLocators.enterAccountButton.click();
        
        await waitForBeTrue(loginLocators.accountLoginHeader, 'Entrar ou criar conta');
        await loginLocators.userName.addValue('MobileAutomationTesteEcommecer@mailslurp.net');
        await loginLocators.password.addValue('Fcx123Teste@');
        await loginLocators.loginButton.click();
        
        // await waitForBeTrue(loginLocators.userNameHeader);
        await loginLocators.homeButton.click();
        await GeneralPage.waitForAppToOpen(2000);
 
    }
    public async flowLoginCheckoutCc() {
        await waitForBeTrue(loginLocators.menuButton);
        await loginLocators.menuButton.click();
        
        await waitForBeTrue(loginLocators.accountHeader, 'Entre na sua conta');
        await loginLocators.enterAccountButton.click();
        
        await waitForBeTrue(loginLocators.accountLoginHeader, 'Entrar ou criar conta');
        await loginLocators.userName.addValue('checkoutcc@mailto.plus');
        await loginLocators.password.addValue('Fcx123Teste@');
        await loginLocators.loginButton.click();
        
        // await waitForBeTrue(loginLocators.userNameHeader);
        await loginLocators.homeButton.click();
        await GeneralPage.waitForAppToOpen(2000);
 
    }

    public async flowLogout() {
        await waitForBeTrue(loginLocators.menuButton);
        await loginLocators.menuButton.click();
        
        await waitForBeTrue(RemoveCreditCardLocators.myAccountOption);
        await RemoveCreditCardLocators.myAccountOption.click();
        
        await GeneralPage.scrollToEnd(1, 10);
        
        await waitForBeTrue(loginLocators.logoutButton);
        await loginLocators.logoutButton.click();
        
        await waitForBeTrue(loginLocators.logoutConfirmButton);
        await loginLocators.logoutConfirmButton.click();
    }
}

export default new LoginPage();

async function waitForBeTrue(locator: any, textToCheck = '') {
    await locator.waitForDisplayed({ timeout: 50000 });
    
    if (textToCheck) {
        const text = await locator.getText();
        expect(text).toContain(textToCheck);
    }
}
