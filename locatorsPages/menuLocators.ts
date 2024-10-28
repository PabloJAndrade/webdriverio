import {$} from '@wdio/globals';
class menuLocators {
    get menuOptionAddress() {
        return $('android=new UiSelector().text("Meus endereços")');
    } 
}
export default new menuLocators()