import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.thecrazycoupons.com/us/');
//  await page1.goto('https://www.thecrazycoupons.com/us/stores/baby-aspen/out/?id=51758');
 // await page1.goto('https://www.babyaspen.com/products/1st-birthday-photo-banner-topper-shark-party?irclickid=Q7UTxox0KxyPW6vSiK0Vt3rWUkFxr7x3YTW1wU0&irgwc=1&utm_source=affiliate');
  await page.goto('https://www.thecrazycoupons.com/us/seasonal-deals/fathers-day/?t=all&c=all&s=all');
//  await page2.goto('https://www.thecrazycoupons.com/us/stores/one-travel-com/out/?id=65268');
//  await page2.goto('https://www.onetravel.com/affiliates/flights/fathersday?utm_source=AFN&utm_medium=LS&utm_campaign=fathersday&CAID=41254&FpAffiliate=LinkShare&FpSub=BS6N_SDyfm0-vvyfyihY4bzuN_JmXnHjtw&LSNSUBSITE=Omitted_BS6N%2FSDyfm0');
  await page.goto('https://www.thecrazycoupons.com/us/');
  await page.goto('https://www.thecrazycoupons.com/us/categories/clothing-and-accessories/');
  await page.goto('https://www.thecrazycoupons.com/us/categories/clothing-and-accessories/?t=all&s=all');
});