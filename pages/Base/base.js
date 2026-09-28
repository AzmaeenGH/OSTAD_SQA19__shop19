import {Browser, Builder, By} from 'selenium-webdriver';

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

export {Base};