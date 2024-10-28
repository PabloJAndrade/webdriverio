import SearchLocators from '../locatorsPages/searchLocators'
import { GeneralPage } from '.'
class searchFlow {

    public async flowSearch(search: string) {
        await SearchLocators.searchButton.isDisplayed()
        await SearchLocators.searchButton.click()
        await SearchLocators.typeSearch.isDisplayed()
        await SearchLocators.typeSearch.setValue(search)
        await driver.pause(800)
        await driver.pressKeyCode(66);
        await GeneralPage.waitForAppToOpen(500);
        await SearchLocators.headerSearch.isDisplayed()
        await SearchLocators.firstResult.click()        
    }
    public async flowSearchProd(search: string) {
        await SearchLocators.searchButton.isDisplayed()
        await SearchLocators.searchButton.click()
        await GeneralPage.waitForAppToOpen(500);
        await SearchLocators.typeSearch.isDisplayed()
        await SearchLocators.typeSearch.setValue(search)
        await driver.pause(800)
        await driver.pressKeyCode(66);
        await GeneralPage.waitForAppToOpen(500);
        await SearchLocators.headerSearch.isDisplayed()
        await SearchLocators.firstResultProd.click()
    }
}

export default new searchFlow();