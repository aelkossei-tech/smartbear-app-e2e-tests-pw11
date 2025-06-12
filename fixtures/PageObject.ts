import { test as base, expect } from '@playwright/test';
import { BasePage } from '../pages/BasePage';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { OrderData } from '../test-data/OrderData';

type PageObject = {
  basePage: BasePage,
  loginPage: LoginPage,
  homePage: HomePage, 
  orderData: {
    productInfo: {
      product: string, 
      quantity: number
    }, 

    addressInfo: {
      customerName: string, 
      street: string, 
      city: string, 
      state: string, 
      ZIP: number
    }, 

    paymentInfo: {
      cardType: string, 
      cardNumber: string, 
      expirationDate: string
    }
  }
}

export const test = base.extend<PageObject>({
  basePage: async({ page }, use) => {
    await page.goto('');
    const basePage = new BasePage(page);
    // actions
    await use(basePage);
  },

  loginPage: async({ page }, use) =>{
    await page.goto('');
    const loginPage = new LoginPage(page);

    await use(loginPage);
  },

  homePage: async({ page }, use) =>{
    await page.goto('');
    const homePage = new HomePage(page);

    await use(homePage);
  },

  orderData: async({}, use) => {
    const orderData = OrderData.newOrder; 

    await use(orderData); 
  }
});

export { expect };