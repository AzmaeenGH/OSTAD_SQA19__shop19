import { AddToCart } from "../pages/AddToCart.js"; 


const pages = new AddToCart();

await pages.browserOpen('https://www.saucedemo.com');
await pages.userNameMethod("standard_user");
await pages.passwordMethod("secret_sauce");
await pages.loginButton();

await pages.addCartMethod()
await pages.shoppingCartMethod()

await pages.driver.sleep(60000); 
// await pages.browserClose();
