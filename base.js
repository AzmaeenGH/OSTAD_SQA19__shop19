import {Browser, Builder, By} from 'selenium-webdriver';

class Base{
    constructor() {
        this.driver = new Builder().forBrowser(Browser.FIREFOX).build();


        // locators
        // this.userName = By.id("user-name");
        this.userName = By.xpath("//input[@id='user-name']");
        this.userPassword = By.id("password");
        this.loginBtn = By.id("login-button");
        this.addCart = By.id("add-to-cart-sauce-labs-backpack");

        
    }


    // sign in function
    // async signIn(){
    //     await this.driver.findElement(this.userName).sendKeys("standard-user")
    //     await this.driver.findElement(this.password).sendKeys("secret-sauce")
    //     await this.driver.findElement(this.loginBtn).click();

        
    // }

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
    async addCartMethod(){
        await this.driver.findElement(this.addCart).click();
    }

    //browser open
    async browserOpen(url){
        console.log("brower open")
        await this.driver.get(url);
        await this.driver.manage().window().maximize();
    }
    // brower close
    async browserClose(){
        console.log("brower close")
        await this.driver.quit();
    }
}

const pages = new Base();

await pages.browserOpen('https://www.saucedemo.com');
// await pages.signIn();
await pages.userNameMethod("standard_user");
await pages.passwordMethod("secret_sauce");
await pages.loginButton();
await pages.addCartMethod()

// Keep the script alive for 60 seconds (60000 ms)
await pages.driver.sleep(60000); 

// do some action
await pages.browserClose();

