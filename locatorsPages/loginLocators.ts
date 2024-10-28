import {$} from '@wdio/globals';

class LoginLocators {
    get userName() {
        return $('android=new UiSelector().resourceId("input-email-login")');
    }

    get password() {
        return $('android=new UiSelector().resourceId("input-password-login")');
    }

    get loginButton() {
        return $('android=new UiSelector().resourceId("button-login")');
    }

    get menuButton() {
        return $('//android.view.View[@resource-id="menu-id"]');
    }

    get enterAccountButton() {
        return $('android=new UiSelector().text("Entrar")');
    }

    get homeButton() {
        return $('android=new UiSelector().resourceId("root-id")');
    }

    get accountHeader() {
        return $('android=new UiSelector().text("Entre na sua conta")');
    }

    get accountLoginHeader() {
        return $('android=new UiSelector().text("Entrar ou criar conta")');
    }

    get userNameHeader() {
        return $('android=new UiSelector().text("Teste Mobile Automation")');
    }
    get logoutButton() {
        return $('android=new UiSelector().text("Sair da conta")');
    }
    get logoutConfirmButton() {
        return $('android=new UiSelector().text("Sim, desejo sair.")');
    }
    get permissionAllow() {
        return $('android=new UiSelector().text("Permitir")');
    }

    get allowLocation () {
        return $('android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_allow_foreground_only_button")')
    }
}

export default new LoginLocators();
