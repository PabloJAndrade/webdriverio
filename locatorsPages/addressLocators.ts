import {$} from '@wdio/globals';

class addressLocators {
    get addAddress () { //Botão no fluxo de checkout
        return $('android=new UiSelector().className("com.horcrux.svg.PathView").instance(3)')
        }
    get addAddressMenu () {
        return $('android=new UiSelector().text("Adicionar novo endereço")')
    }
    get typeCep () {
        return $('android=new UiSelector().resourceId("zip-code")')
        }
    get withOutNumber () {
        return $('android=new UiSelector().text("Sem número")')
        }
    get houseNumber () {
        return $('android=new UiSelector().resourceId("number-address")')
        }
    get nameRecipient () {
        return $('android=new UiSelector().resourceId("recipient-name")')
        }
    get saveAddress () {
        return $('android=new UiSelector().resourceId("save-address")')
        }
    get warningInvalidFields () {
        return $('android=new UiSelector().className("com.horcrux.svg.SvgView").instance(4)')
        }
    get warningErrorAddAddress () {
        return $('android=new UiSelector().text("Erro ao adicionar endereço")')
        }
    get kebabMenu2Option () {
        return  $('android=new UiSelector().className("android.view.ViewGroup").instance(58)')
    }
    get kebabMenu3Option () {
        return  $('android=new UiSelector().className("android.view.ViewGroup").instance(67)')
    }
    get editOptionAddress () {
        return $('android=new UiSelector().text("Editar endereço")')
    }
    get deleteOptionAddress () {
        return $('android=new UiSelector().text("Excluir endereço")')
    }
    get confirmationDelete () {
        return $('android=new UiSelector().text("Excluir endereço")')
    }
    get makeAddressDefault () {
        return $('android=new UiSelector().text("Tornar endereço padrão")')
    }

}
export default new addressLocators();