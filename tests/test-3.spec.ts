import { test, expect } from '@playwright/test';

test('get started link', async ({ page }) => {
  await page.goto('https://www.thecrazycoupons.com/us/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});