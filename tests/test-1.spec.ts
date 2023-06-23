import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=the+crazy+coupon&oq=the+crazy+coupon&aqs=chrome..69i57.6121j0j2&sourceid=chrome&ie=UTF-8');
 
  await page.getByRole('link', { name: 'Crazy Coupons - Deals, Discounts, Coupon Codes, & Promo ... thecrazycoupons.com https://www.thecrazycoupons.com › ...' }).click();
}
)