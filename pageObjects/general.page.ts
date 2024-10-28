import {$} from '@wdio/globals'

/**
 * The reason why we need this is because the Appium's
 * uiautomator2 driver does not have a built-in method to
 * scroll to the end of the page. The `scrollToEnd` method
 * does not work as expected. This method is a workaround
 * to scroll to the end of the page.
 */
class GeneralPage {
    get goBackArrow() {
        return $('android=new UiSelector().className("com.horcrux.svg.GroupView").instance(0)');
    }
    public async scrollToEnd(maxScrolls: number = 2, steps: number = 10) {
        await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(${maxScrolls}, ${steps})`);
    }
    public async  waitForAppToOpen(time = 10000) {
        await driver.pause(time);
    }
}

export default new GeneralPage()
