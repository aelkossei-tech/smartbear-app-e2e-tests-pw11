import { Page, expect } from '@playwright/test'; 

export class ScreenshotUtils {
    
    static async takeScreenshot(page: Page, isFullPage = true) {

        await expect(page).toHaveScreenshot({ fullPage: isFullPage });
    }
}