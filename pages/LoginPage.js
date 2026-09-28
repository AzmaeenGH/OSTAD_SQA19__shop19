import {By} from 'selenium-webdriver';
import {Base} from "./Base/base.js"

class LoginPage extends Base{
    constructor() {
        super(); // This is to call the parent class constructor as well
        
        // locators
        this.userName = By.xpath("//input[@id='user-name']");
        this.userPassword = By.id("password");
        this.loginBtn = By.id("login-button");
    }

    // username
    async userNameMethod(user){
        await this.driver.findElement(this.userName).sendKeys(user)
    }
    // password
    async passwordMethod(pass){
        await this.driver.findElement(this.userPassword).sendKeys(pass)
    }
    // login button
    async loginButton(){
        await this.driver.findElement(this.loginBtn).click();
    }    
}

const pages = new LoginPage();

await pages.browserOpen('https://www.saucedemo.com');

await pages.userNameMethod("standard_user");
await pages.passwordMethod("secret_sauce");
await pages.loginButton();

await pages.driver.sleep(60000); 

// await pages.browserClose();

export {LoginPage};