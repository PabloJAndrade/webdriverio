import RemoveCreditCardLocators from '../locatorsPages/removecreditcardLocators'
import loginLocators from '../locatorsPages/loginLocators'
import { removeCreditCardLocators, GeneralPage } from '.'
class RemoveCreditCard {

public async deletCards() {
    await loginLocators.menuButton.click()
    await loginLocators.menuButton.click()
    await RemoveCreditCardLocators.myAccountOption.click()
    await loginLocators.userNameHeader.isDisplayed()
    await RemoveCreditCardLocators.paymentOption.click()
    await GeneralPage.waitForAppToOpen(2000);
    await RemoveCreditCardLocators.deletCreditCard1.click()
    await GeneralPage.waitForAppToOpen(3000);
    await removeCreditCardLocators.confirmDeletion.click()
    await GeneralPage.waitForAppToOpen(3000);
    }

}


// Exportando uma instância da classe
export default new RemoveCreditCard()