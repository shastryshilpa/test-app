import { test, expect } from '@playwright/test';

test.describe('EPAM — Services -> Client Work', () => {
  test('navigate to Client Work from Services and verify heading', async ({ page }) => {
    // 1) Navigate to EPAM homepage
    await page.goto('https://www.epam.com/', { waitUntil: 'domcontentloaded' });
    await page.waitForLoadState('networkidle');

    // 2) Click the "Services" menu item in the header
    const services = page.locator('header a:has-text("Services"), a:has-text("Services")').first();
    await services.waitFor({ state: 'visible', timeout: 15000 });
    await services.click();
    await page.waitForLoadState('networkidle');

    // 3) Click the "Explore Our Client Work" link
    const explore = page.locator('a:has-text("Explore Our Client Work"), a:has-text("Explore our client work")').first();
    await explore.waitFor({ state: 'visible', timeout: 15000 });
    await explore.click();

    // 4) Verify that "Client Work" text is visible on the page
    const clientWorkLocator = page.locator('text=/Client Work/i').first();
    await expect(clientWorkLocator).toBeVisible({ timeout: 10000 });
  });
});
