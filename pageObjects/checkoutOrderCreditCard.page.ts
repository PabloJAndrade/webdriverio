import { GeneralPage } from '.';
import checkoutLocators from '../locatorsPages/checkoutLocators';
import checkoutLocatorCreditCard from '../locatorsPages/checkoutLocatorCreditCard';

class CheckoutOrderCreditCard {
  public async flowCheckoutWithCreditCard(cvv: string) {
    await GeneralPage.scrollToEnd(2, 10)
    await checkoutLocatorCreditCard.paymentTypeCreditCard.click()

    await GeneralPage.scrollToEnd(2, 10)
    await checkoutLocatorCreditCard.cvv.setValue(cvv)

    await checkoutLocators.confirmOrder.click()

    await driver.back()
    await GeneralPage.waitForAppToOpen(2000)
    await driver.back()
  }
  
  public async flowCheckoutWith2CreditCard() {
    
    await GeneralPage.scrollToEnd()
    await checkoutLocatorCreditCard.paymentType2CreditCard.click()
    await GeneralPage.scrollToEnd()
    
    await checkoutLocatorCreditCard.cardOne.click()
    await checkoutLocatorCreditCard.selectFirstCard.click()
    await GeneralPage.waitForAppToOpen(2000)
    await GeneralPage.scrollToEnd(1, 10)

    await checkoutLocatorCreditCard.cardTwo.click()
    await checkoutLocatorCreditCard.selectFirstCard.click()

    await GeneralPage.scrollToEnd(1, 4)
    await checkoutLocatorCreditCard.valueCardTwo.click()
    await driver.execute('mobile: type', { text: '100' })
    await driver.hideKeyboard()
    await checkoutLocatorCreditCard.cardTwoCvv.click();
    await driver.execute('mobile: type', { text: '934' })
    await driver.hideKeyboard()

    await checkoutLocatorCreditCard.cardTwoCvv.click();
    await driver.execute('mobile: type', { text: '586' })
    await driver.hideKeyboard()
    await checkoutLocators.confirmOrder.click()
    await GeneralPage.waitForAppToOpen(2000)
    await driver.back()



  }
}
export default new CheckoutOrderCreditCard()
