import {$} from '@wdio/globals';
class checkoutLocators {
     get typeDelivery () {
        return $('android=new UiSelector().resourceId("Rápida")') 
    }
    get typeDelivery2Mall () {
        return $('android=new UiSelector().text("Retirar na loja")')
    }
    get paymentTypePix () {
        return $('android=new UiSelector().text("Pix")')
    }

    get confirmOrder () {
        return $('android=new UiSelector().text("Finalizar pedido")')
    }
    get confirmOrder2 () {
        return $('android=new UiSelector().text("Sim, finalizar pedido")')
    }

    get selectAddress () {
        return $('android=new UiSelector().className("android.view.ViewGroup").instance(11)')
    }
    get saveAddressSelect () {
        return $('android=new UiSelector().className("android.view.ViewGroup").instance(30)')
    }
    
    
    
    
    
    
    
   
    
}

export default new checkoutLocators();