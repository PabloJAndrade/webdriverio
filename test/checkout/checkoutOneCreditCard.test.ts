import { searchFlow, loginPage, addToCart, checkoutOrderCreditCard, RemoveCreditCard,checkoutLocators, GeneralPage } from '../../pageobjects';
import AddNewCreditCard from '../../pageobjects/addNewCreditCard.page'
import { getNextCreditCard } from '../../scripts/creditCardManager';

// import { getNextCreditCard, CreditCard } from '../../scripts/creditCardData'; // Importando a interface e a função

describe('Checkout with Credit Card', () => {
  const card = getNextCreditCard();

    
  it('Deve realizar o um novo cadastro de cartão de credito para o fluxo de checkout', async () => {
    await loginPage.flowLogin()
    await AddNewCreditCard.flowAddNewCardThroughMenu(card);
  })
  it('Deve realizar o checkout com opção de entrega e pagamento por cartão de crédito', async () => {
    await searchFlow.flowSearch('Joelho simples')
    await addToCart.flowAddToCart()
    await checkoutLocators.typeDelivery.click()
    await checkoutOrderCreditCard.flowCheckoutWithCreditCard(card.cvv)
  })

  it('Deve realizar o checkout com opção de retirada e pagamento por cartão de crédito', async () => {
    await searchFlow.flowSearch('Joelho simples')
    await addToCart.flowAddToCart()
    await checkoutLocators.typeDelivery2Mall.click()
    await checkoutLocators.selectAddress.click()
    await checkoutLocators.saveAddressSelect.click() 
    await GeneralPage.waitForAppToOpen(2000);  

    await checkoutOrderCreditCard.flowCheckoutWithCreditCard(card.cvv)
    await RemoveCreditCard.deletCards()

  })


})