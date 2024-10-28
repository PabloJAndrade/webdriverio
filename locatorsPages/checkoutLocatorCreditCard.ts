import { $ } from "@wdio/globals";

class checkoutLocatorCreditCard {
  get paymentTypeCreditCard() {
    return $('android=new UiSelector().text("TESTECARD")');
  }
  get paymentType2CreditCard() {
    return $('android=new UiSelector().text("Dois cartões de crédito")');
  }
  get cardOne () {
    return $('android=new UiSelector().text("Primeiro Cartão")');
  }
  get cardTwo () {
    return $('android=new UiSelector().text("Segundo Cartão")');
  }
  get selectFirstCard () {
    return $('android=new UiSelector().className("android.view.ViewGroup").instance(11)');
  }
  get selectCardTwo () {
    return $('android=new UiSelector().text("TESTE CARD DOIS")');
  }
  get cardOneCvv () {
    return $('android=new UiSelector().text("CVV").instance(0)')
  }
  get cardTwoCvv () {
    return $('android=new UiSelector().text("CVV").instance(1)')
  }
  get valueCardTwo() {
    return $('android=new UiSelector().text("R$ 0,00")');
  }
  get newCreditCard() {
    return $('android=new UiSelector().text("Adicionar novo cartão")');
  }
  get newCardHeaderButton() {
    return $('android=new UiSelector().text("Novo Cartão")');
  }
  get newCreditCardMenu() {
    return $('android=new UiSelector().text("Adicionar cartão")');
  }
  get cardNumber() {
    return $('android=new UiSelector().resourceId("card-number-field")');
  }
  get nameCardOwner() {
    return $('android=new UiSelector().resourceId("card-name-field")');
  }
  get expirationDate() {
    return $('android=new UiSelector().resourceId("card-due-date-field")');
  }
  get cardCVV() {
    return $('android=new UiSelector().resourceId("card-cvv-field")');
  }
  get cardOwnerCPF() {
    return $('android=new UiSelector().text("Ex: 123.456.789-00")');
  }
  get cardOwnerPhone() {
    return $('android=new UiSelector().text("Ex: (99) 99999-9999")');
  }
  get saveCreditCard() {
    return $('android=new UiSelector().text("Adicionar Novo Cartão")');
  }
  get cvv() {
    return $('android=new UiSelector().text("123")');
  }
}

export default new checkoutLocatorCreditCard();
