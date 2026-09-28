import {Browser, Builder} from 'selenium-webdriver';

class Base{
    constructor() {
        this.driver = new Builder().forBrowser(Browser.FIREFOX).build();
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
// await pages.browserOpen('https://npmjs.com/packages/selenium-webdriver');
// do some action
await pages.browserClose();








// // 2. Keep the script alive for 6000 seconds (60000 ms)
// await pages.driver.sleep(6000000); 
