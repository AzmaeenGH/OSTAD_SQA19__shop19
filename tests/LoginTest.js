import {LoginPage} from "../pages/LoginPage.js";


const pages = new LoginPage();

await pages.browserOpen('https://www.saucedemo.com');
await pages.userNameMethod("standard_user");
await pages.passwordMethod("secret_sauce");
await pages.loginButton();

await pages.driver.sleep(60000); 

await pages.browserClose();
