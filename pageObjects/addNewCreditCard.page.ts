import  RemoveCreditCardLocators  from '../locatorsPages/removecreditcardLocators.ts'
import loginLocators from '../locatorsPages/loginLocators.ts'
import checkoutLocatorCreditCard from '../locatorsPages/checkoutLocatorCreditCard.ts'
import { GeneralPage } from '.'
import { getNextCreditCard } from '../scripts/creditCardManager';

const card = getNextCreditCard();

class AddNewCreditCard {
     async fillTextFieldAndPressEnter(value: string) {
      await driver.execute('mobile: type', { text: value });
      await driver.pressKeyCode(66); 
    }

  public async flowAddNewCardThroughMenu(card: { number: string, expiry: string, cvv: string }) {

  await loginLocators.menuButton.click();
  await RemoveCreditCardLocators.myAccountOption.click();
  await RemoveCreditCardLocators.paymentOption.click();
  await checkoutLocatorCreditCard.newCreditCardMenu.click();
  await checkoutLocatorCreditCard.cardNumber.click();
  await this.fillTextFieldAndPressEnter(card.number);

  await this.fillTextFieldAndPressEnter('TesteCard');

  await this.fillTextFieldAndPressEnter(card.expiry);

  await this.fillTextFieldAndPressEnter(card.cvv);
  await this.fillTextFieldAndPressEnter( '18635086007');
  await this.fillTextFieldAndPressEnter('81983637148');
  


    await GeneralPage.scrollToEnd(1, 10);

    await checkoutLocatorCreditCard.saveCreditCard.click();  
    await GeneralPage.waitForAppToOpen(2500);  
    await loginLocators.homeButton.click();
    }
    public async flowAdd2NewCard() {

    await loginLocators.menuButton.click();
    await RemoveCreditCardLocators.myAccountOption.click();
    await RemoveCreditCardLocators.paymentOption.click();
    await checkoutLocatorCreditCard.newCreditCardMenu.click();
    await checkoutLocatorCreditCard.cardNumber.click();

    await this.fillTextFieldAndPressEnter(card.number);
  
    await this.fillTextFieldAndPressEnter('TesteCard');
  
    await this.fillTextFieldAndPressEnter(card.expiry);
  
    await this.fillTextFieldAndPressEnter(card.cvv);
    await this.fillTextFieldAndPressEnter( '18635086007');
    await this.fillTextFieldAndPressEnter('81983637148');

    await GeneralPage.scrollToEnd(1, 10);

    await checkoutLocatorCreditCard.saveCreditCard.click();  
    await GeneralPage.waitForAppToOpen(3000);  

    await checkoutLocatorCreditCard.newCardHeaderButton.click();
 
      // Preenche os campos do cartão
    await checkoutLocatorCreditCard.cardNumber.click();

    await this.fillTextFieldAndPressEnter(card.number);
    
    await this.fillTextFieldAndPressEnter('TesteCardDois');
    
    await this.fillTextFieldAndPressEnter(card.expiry);
    
    await this.fillTextFieldAndPressEnter(card.cvv);
    await this.fillTextFieldAndPressEnter( '18635086007');
    await this.fillTextFieldAndPressEnter('81983637148');
  
    await GeneralPage.scrollToEnd(1, 10);
  
    await checkoutLocatorCreditCard.saveCreditCard.click();  
    await GeneralPage.waitForAppToOpen(2500);  
    await loginLocators.homeButton.click();
  }
}
export default new AddNewCreditCard();