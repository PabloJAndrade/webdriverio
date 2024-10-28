import { searchFlow, loginPage, addToCart,GeneralPage, checkoutOrderPix } from '../../pageobjects';

describe('Checkout with delivery', () => {
  beforeEach(async function() {
        await loginPage.flowLogin();
      });
    it('Deve realizar o checkout com opção de entrega e pagamento por pix', async () => {
      // Comando para esperar que o app esteja totalmente aberto
      await GeneralPage.waitForAppToOpen();
      await searchFlow.flowSearch('Joelho simples')
      await addToCart.flowAddToCart()
      await checkoutOrderPix.flowCheckoutWithPix()
      expect($('android=new UiSelector().text("Oba! Já recebemos seu pedido!")')).toBeDisplayed()


      });
  
    it('Deve realizar o checkout com opção de retirada e pagamento por pix', async () => {
        await GeneralPage.waitForAppToOpen();
        await searchFlow.flowSearch('Joelho simples')
        await addToCart.flowAddToCart()
        await checkoutOrderPix.flowCheckoutWithPixOrderInMall()
        expect($('android=new UiSelector().text("Oba! Já recebemos seu pedido!")')).toBeDisplayed()

      })
      afterEach(async function() {
        await driver.executeScript('mobile: clearApp', [{ appId: 'com.appfc.stag' }]);
        await driver.executeScript('mobile: activateApp', [{appId: 'com.appfc.stag'}, { autoGrantPermissions: true }]);
      });
  })
 