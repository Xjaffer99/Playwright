import { test, expect } from '@playwright/test';

test('Hit the url', async ({ page }) => {
  await page.goto('https://www.thecrazycouponscc.com/us/');
  await page.close();
  
});


test('Verify All Sliders ', async ({ page }) => {
  await page.goto('https://www.thecrazycoupons.com/us/');
  await page.locator('xpath=//li[2]//div[1]//div[1]//a[1]//img[1]').click();
  await page.goto('https://www.cheapoair.com/flights/affiliates/independenceday?irclickid=0utx6M0qgxyPW7xXt4VF2RVFUkFxrpQ:YTW1wU0&irgwc=1&FpAffiliate=imra&FpSub=1374783_3487246_&utm_source=AFN&utm_medium=imra&utm_campaign=independenceday');
 await page.waitForTimeout(2000); 
  //const pageTitle = await page.title();
 // expect(pageTitle).toBe('Crazy Coupons - Deals, Discounts, Coupon Codes, & Promo Codes July 2023');
 await expect(page).toHaveTitle("Save on Independence Day Travel Deals!");
  await page.close();
  
});