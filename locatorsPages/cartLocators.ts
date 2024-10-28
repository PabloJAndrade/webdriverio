import {$} from '@wdio/globals';
class CartLocators {
    get addToCart () {
        return $('android=new UiSelector().resourceId("add-cart-button")')
    }

    get closeOrderButton () {
        return $('android=new UiSelector().resourceId("close-order-button")')
    }
    
}

export default new CartLocators()