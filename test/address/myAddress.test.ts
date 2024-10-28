import { searchFlow, loginPage, addToCart, GeneralPage, addAddressflow, loginLocators, RemoveCreditCardLocators, menuLocators } from '../../pageobjects';

describe('Add new address', () => {
  beforeEach(async function() {
    await driver.executeScript('mobile: activateApp', [{appId: 'com.appfc'}, { autoGrantPermissions: true }]);
    await loginPage.flowLogin();
      });
    it('Deve ser capaz de cadastrar um novo endereço pelo fluxo de checkout', async () => {
      // Comando para esperar que o app esteja totalmente aberto
      await GeneralPage.waitForAppToOpen();
      await searchFlow.flowSearchProd('Joelho simples')
      await addToCart.flowAddToCart()
      await GeneralPage.waitForAppToOpen();
      await addAddressflow.flowAddAddressCheckout('52111040')
      await GeneralPage.goBackArrow.click()

      });
      it('Deve ser capaz de cadastrar um novo endereço pelo menu principal', async () => {
          await GeneralPage.waitForAppToOpen();
          await loginLocators.menuButton.click()
          await GeneralPage.waitForAppToOpen(500);
          await RemoveCreditCardLocators.myAccountOption.click()
          await GeneralPage.waitForAppToOpen(500);
          await menuLocators.menuOptionAddress.click()
          await addAddressflow.flowAddAddressMenu('52120020')
      })
      it('Deve ser capaz de editar um endereço', async () => {
        await GeneralPage.waitForAppToOpen();
        await loginLocators.menuButton.click()
        await GeneralPage.waitForAppToOpen(500);
        await RemoveCreditCardLocators.myAccountOption.click()
        await GeneralPage.waitForAppToOpen(500);
        await menuLocators.menuOptionAddress.click()
        await addAddressflow.flowEditAddress('52120021')

      })
      it('Deve ser capaz de remover um endereço', async () => {
        await GeneralPage.waitForAppToOpen();
        await loginLocators.menuButton.click()
        await GeneralPage.waitForAppToOpen(500);
        await RemoveCreditCardLocators.myAccountOption.click()
        await GeneralPage.waitForAppToOpen(500);
        await menuLocators.menuOptionAddress.click()
        await addAddressflow.flowExcludeAddress()
        await GeneralPage.waitForAppToOpen(500);
      })
      it('Deve impedir o usuário de cadastrar um endereço sem preencher os campos obrigatorios', async () => {
        await GeneralPage.waitForAppToOpen();
          await loginLocators.menuButton.click()
          await GeneralPage.waitForAppToOpen(500);
          await RemoveCreditCardLocators.myAccountOption.click()
          await GeneralPage.waitForAppToOpen(500);
          await menuLocators.menuOptionAddress.click()
          await addAddressflow.flowFullfillAddressWithNotAllFields('52110040')
      })
      it('Deve permitir alteração do endereço padrão', async () => {
        await GeneralPage.waitForAppToOpen();
        await loginLocators.menuButton.click()
        await GeneralPage.waitForAppToOpen(500);
        await RemoveCreditCardLocators.myAccountOption.click()
        await GeneralPage.waitForAppToOpen(500);
        await menuLocators.menuOptionAddress.click()
        await addAddressflow.flowChangesDefaultAddress()
        await GeneralPage.waitForAppToOpen(500);
      })
      afterEach(async function() {
        await loginPage.flowLogout();
        await driver.executeScript('mobile: terminateApp', [{ appId: 'com.appfc' }]);
      });
  })
 