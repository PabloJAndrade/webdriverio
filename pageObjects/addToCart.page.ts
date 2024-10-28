import CartLocators from '../LocatorsPages/cartLocators'
class addToCart {
    
    public async flowAddToCart() {
        await CartLocators.addToCart.click()
        await CartLocators.closeOrderButton.click()
    }
}

export default new addToCart()