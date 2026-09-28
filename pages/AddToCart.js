import {By} from 'selenium-webdriver';
import {LoginPage} from "./LoginPage.js";

class AddToCart extends LoginPage{
    constructor() {
        super(); // This is to call the parent class constructor as well
        
        this.addCart = By.id("add-to-cart-sauce-labs-backpack");
        this.shoppingCart = By.xpath("//a[@data-test='shopping-cart-link']");
    }

    async addCartMethod(){
        await this.driver.findElement(this.addCart).click();
    }
    async shoppingCartMethod(){
        await this.driver.findElement(this.shoppingCart).click();
    }
}

export {AddToCart};