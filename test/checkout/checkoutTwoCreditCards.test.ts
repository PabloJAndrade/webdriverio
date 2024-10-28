import { searchFlow, loginPage, addToCart, checkoutOrderCreditCard, checkoutLocators } from '../../pageobjects';
// import { getNextCreditCard, CreditCard } from '../../scripts/creditCardData'; // Importando a interface e a função

describe('Checkout with Credit Card', () => {
  beforeEach(async function() {
    await loginPage.flowLoginCheckoutCc();
  });

  it('Deve realizar o checkout com opção de entrega e pagamento por cartão de crédito', async () => {
    await searchFlow.flowSearch('Joelho Simples')
    await addToCart.flowAddToCart()
    await checkoutLocators.typeDelivery.click()
    await checkoutOrderCreditCard.flowCheckoutWith2CreditCard()
  })


})