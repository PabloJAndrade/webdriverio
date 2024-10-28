import addressLocators from "../locatorsPages/addressLocators";
import GeneralPage from "./general.page";

class addAddressflow {
    public async flowAddAddressCheckout(cep: string) {
        await addressLocators.addAddress.click()
        await addressLocators.typeCep.setValue(cep)
        await driver.pressKeyCode(66)
        await addressLocators.withOutNumber.click()
        await addressLocators.nameRecipient.setValue('Teste')
        await GeneralPage.scrollToEnd(1,10)
        await addressLocators.saveAddress.click()
    }

    public async flowAddAddressMenu(cep: string) {
        await addressLocators.addAddressMenu.click()
        await addressLocators.typeCep.setValue(cep)
        await driver.pressKeyCode(66)
        await addressLocators.withOutNumber.click()
        await GeneralPage.scrollToEnd(1,10)
        await addressLocators.nameRecipient.setValue('Teste')
        await GeneralPage.scrollToEnd(1,10)
        await addressLocators.saveAddress.click()
        await GeneralPage.waitForAppToOpen(2000)

    }
    public async flowEditAddress(cep: string) {
        await addressLocators.kebabMenu2Option.click()
        await GeneralPage.waitForAppToOpen(500)
        await addressLocators.editOptionAddress.click()
        await GeneralPage.waitForAppToOpen(500)
        await addressLocators.typeCep.setValue(cep)
        await driver.pressKeyCode(66)
        await addressLocators.withOutNumber.click()
        await GeneralPage.scrollToEnd(1,10)
        await addressLocators.nameRecipient.setValue('TesteEditado')
        await addressLocators.saveAddress.click()
        await GeneralPage.goBackArrow.click()


    }
    public async flowFullfillAddressWithNotAllFields(cep: string) {
        await addressLocators.addAddressMenu.click()
        await addressLocators.typeCep.setValue(cep)
        await driver.pressKeyCode(66)
        await GeneralPage.waitForAppToOpen(1000)
        await GeneralPage.scrollToEnd(1,10)
        await addressLocators.saveAddress.click()
        await expect(addressLocators.warningInvalidFields).toBePresent()
        await GeneralPage.waitForAppToOpen(2500)


    }
    public async flowExcludeAddress() {
        await GeneralPage.waitForAppToOpen(700)
        await addressLocators.kebabMenu2Option.click()
        await GeneralPage.waitForAppToOpen(700)
        await addressLocators.deleteOptionAddress.click()
        await GeneralPage.waitForAppToOpen(700)
        await addressLocators.confirmationDelete.click()
        await GeneralPage.waitForAppToOpen(2000)

    }
    public async flowChangesDefaultAddress() {
        await GeneralPage.waitForAppToOpen(700)
        await addressLocators.kebabMenu2Option.click()
        await GeneralPage.waitForAppToOpen(700)
        await addressLocators.makeAddressDefault.click()
        await GeneralPage.waitForAppToOpen(2000)

    }
}
export default new addAddressflow()