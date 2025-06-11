import { test, expect } from './../../fixtures/PageObject.ts';
import { ScreenshotUtils } from '../../utils/ScreenshotUtils.ts';
import { ValidLoginData, InvalidLoginData } from '../../test-data/LoginData.ts'

test.describe('SmartBear App Login Page visual verification', () => {
    // Visual Regression Testing 
    test('Login Page Visual Regression', async ({ loginPage }) => {
        await expect(loginPage.loginForm).toBeVisible();
        await ScreenshotUtils.takeScreenshot(loginPage.page);
    });
    // Snapshot Testing  
    test('SmartBear App Login Page snapshot verification', async ({ loginPage }) => {
        await expect(loginPage.loginForm).toMatchAriaSnapshot(`
    - paragraph
    - text: "Username:"
    - textbox "Username:"
    - text: "Password:"
    - textbox "Password:"
    - button "Login"
    - paragraph: "In order to log in Orders sample use the following information:"
    - paragraph: Username - Tester Password - test
         `);
    });
}); 