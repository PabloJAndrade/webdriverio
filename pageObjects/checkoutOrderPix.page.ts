import {$} from '@wdio/globals'
import { GeneralPage } from './index.ts'
import checkoutLocators from '../locatorsPages/checkoutLocators.ts'


class checkoutOrderPix {
   
    
    public async flowCheckoutWithPix() {
        await checkoutLocators.typeDelivery.click();
        await GeneralPage.scrollToEnd(2,10)
        const element = await $('android=new UiSelector().className("android.view.ViewGroup").instance(36)')
        await element.click()
        await checkoutLocators.paymentTypePix.click();
        await GeneralPage.scrollToEnd(2,10)
        await checkoutLocators.confirmOrder.click();
        await checkoutLocators.confirmOrder2.click();
    }
    public async flowCheckoutWithPixOrderInMall() {
        await checkoutLocators.typeDelivery2Mall.click()
        await checkoutLocators.selectAddress.click()
        await checkoutLocators.saveAddressSelect.click() 
        await GeneralPage.scrollToEnd(2,10)
        const element = await $('android=new UiSelector().className("android.view.ViewGroup").instance(36)')
        await element.click()
        await checkoutLocators.paymentTypePix.click()
        await GeneralPage.scrollToEnd(2,10)
        await checkoutLocators.confirmOrder.click()
        await checkoutLocators.confirmOrder2.click()
    }
   
}

export default new checkoutOrderPix()