import { $ } from '@wdio/globals';
class RemoveCreditCardLocators {get myAccountOption () {
    return $('android=new UiSelector().text("Minha conta")');
}
get paymentOption () {
    return $('android=new UiSelector().text("Pagamento")');
}
get deletCreditCard1 () {
    return $('android=new UiSelector().className("com.horcrux.svg.SvgView").instance(3)');
}
get deletCreditCard2 () {
    return $('android=new UiSelector().className("android.view.View").instance(1)');
}
get confirmDeletion () {
    return $('android=new UiSelector().resourceId("confirm-delete-address")');
}
get cardListBlank () {
    return $('android=new UiSelector().text("Nenhum cartão disponível")')
}
get cardName() {
    return $('android= new UiSelector().text("TesteCard")')
}
get offerName () {
    return $('android=new UiSelector().text("ofertas relâmpago")')
}
}
export default new RemoveCreditCardLocators()