import { $ } from '@wdio/globals';

class SearchLocators {
    
    get searchButton() {
        return $('android=new UiSelector().text("Pesquisar na Ferreira Costa")')
    }
    get typeSearch () {
        return $('android=new UiSelector().text("Pesquisar na Ferreira Costa")')
    }

    get firstResult () {
        return $('android=new UiSelector().className("android.view.ViewGroup").instance(36)')
    }
    get firstResultProd () {
        return $('android=new UiSelector().className("android.widget.ImageView").instance(0)')
    }
    get headerSearch () {
        return $('android=new UiSelector().className("android.view.ViewGroup").instance(28)')
    }
}
export default new SearchLocators()