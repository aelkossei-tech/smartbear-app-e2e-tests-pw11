import { ValidLoginData, InvalidLoginData } from '../../test-data/LoginData';
import { test, expect } from './../../fixtures/PageObject'; 

    
test.describe('', () => {
  
    // Functional Testing --> trying to see if things work 
    test('SmartBear App Login Page successful login', async({ loginPage }) => {
        await loginPage.login(ValidLoginData.username, ValidLoginData.password);
        await expect(loginPage.loginInfo).toBeVisible();
        await expect(loginPage.loginInfo).toContainText('Welcome, Tester!');
        await loginPage.wait(3000);  
    }); 

    InvalidLoginData.forEach(user => {
        test(`SmartBear App Login Page invalid login with ${user.case}`, async({ loginPage }) => {
            await loginPage.login(user.username, user.password);
            await expect(loginPage.loginInfo).not.toBeVisible();
            await expect(loginPage.errorMessage).toBeVisible();
            await expect(loginPage.errorMessage).toHaveText('Invalid Login or Password.');
        }); 
    }); 
}); 
  