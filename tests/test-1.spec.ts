import { test, expect } from '@playwright/test';

test('Hit the url', async ({ page }) => {
  await page.goto('https://www.thecrazycoupons.com/us/');
  await page.close();
  
});


test('Verify All Sliders ', async ({ page }) => {
  await page.goto('https://www.thecrazycoupons.com/us/');
  await page.locator('xpath=//li[1]//div[1]//div[1]//a[1]//img[1]').click();
 await page.locator('xpath=//li[2]//div[1]//div[1]//a[1]//img[1]').click();
 await page.locator('xpath=//li[3]//div[1]//div[1]//a[1]//img[1]').click();
 await page.locator('xpath=//li[4]//div[1]//div[1]//a[1]//img[1]').click();
 await page.locator('xpath=//li[5]//div[1]//div[1]//a[1]//img[1]').click();
 await page.locator('xpath=//li[6]//div[1]//div[1]//a[1]//img[1]').click();
 await page.locator('xpath=//li[7]//div[1]//div[1]//a[1]//img[1]').click();
 await page.locator('xpath=//li[8]//div[1]//div[1]//a[1]//img[1]').click();
 await page.locator('xpath=//li[9]//div[1]//div[1]//a[1]//img[1]').click();
 await page.locator('xpath=//li[10]//div[1]//div[1]//a[1]//img[1]').click();
 await page.close();

});

test('Sliding the sliders', async ({ page }) => {
    await page.goto('https://www.thecrazycoupons.com/us/');
    await page.locator('xpath=/html[1]/body[1]/div[1]/main[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/button[1]').click();
    await page.waitForTimeout(1000);
    await page.locator('xpath=/html[1]/body[1]/div[1]/main[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/button[2]').click();
    await page.waitForTimeout(1000);
    await page.locator('xpath=/html[1]/body[1]/div[1]/main[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/button[2]').click();
    await page.waitForTimeout(1000);
    await page.locator('xpath=/html[1]/body[1]/div[1]/main[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/button[2]').click();
    await page.waitForTimeout(1000);
  
    await page.close();
    
  });



test('View All Stores', async ({ page }) => {
    await page.goto('https://www.thecrazycoupons.com/us/');
  await page.locator('xpath=/html[1]/body[1]/div[1]/header[1]/div[1]/nav[1]/div[1]/div[2]/ul[1]/li[1]/div[1]/a[1]').click();
  await page.waitForTimeout(1000);
  await page.locator('xpath=/html[1]/body[1]/div[1]/header[1]/div[1]/nav[1]/div[1]/div[2]/ul[1]/li[1]/div[1]/ul[1]/li[13]/a[1]').click();
  await page.waitForTimeout(2000);
  await page.waitForTimeout(1000);
  const scrollPixels = 5000;
        await page.waitForTimeout(3000); // Replace with the number of pixels you want to scroll
        await page.evaluate((scrollPixels) => {
          window.scrollBy(5000, scrollPixels);
        }, scrollPixels);
        await page.close();
    });


test('View All Categories', async ({ page }) => {
      await page.goto('https://www.thecrazycoupons.com/us/');
    await page.locator('xpath=/html[1]/body[1]/div[1]/header[1]/div[1]/nav[1]/div[1]/div[2]/ul[1]/li[2]/div[1]/a[1]').click();
    await page.waitForTimeout(1000);
    await page.locator('xpath=/html[1]/body[1]/div[1]/header[1]/div[1]/nav[1]/div[1]/div[2]/ul[1]/li[2]/div[1]/ul[1]/li[13]/a[1]').click();
    await page.waitForTimeout(5000);
    const scrollPixels = 5000;
        await page.waitForTimeout(5000); // Replace with the number of pixels you want to scroll
        await page.evaluate((scrollPixels) => {
          window.scrollBy(5000, scrollPixels);
        }, scrollPixels);
        await page.close();
      });
      

test('View All Seasonal Deals', async ({ page }) => {
        await page.goto('https://www.thecrazycoupons.com/us/');
      
        await page.locator('xpath=/html[1]/body[1]/div[1]/header[1]/div[1]/nav[1]/div[1]/div[2]/ul[1]/li[3]/div[1]/a[1]').click();
        await page.waitForTimeout(1000);
        await page.locator('xpath=/html[1]/body[1]/div[1]/header[1]/div[1]/nav[1]/div[1]/div[2]/ul[1]/li[3]/div[1]/ul[1]/li[4]/a[1]').click();
        await page.waitForTimeout(5000);
      
        const scrollPixels = 5000;
        await page.waitForTimeout(3000); // Replace with the number of pixels you want to scroll
        await page.evaluate((scrollPixels) => {
          window.scrollBy(5000, scrollPixels);
        }, scrollPixels);
        await page.close();
      });
      
test('View All Blogs', async ({ page }) => {
        await page.goto('https://www.thecrazycoupons.com/us/');
        await page.locator('xpath=/html[1]/body[1]/div[1]/header[1]/div[1]/nav[1]/div[1]/div[2]/ul[1]/li[4]/a[1]').click();
        await page.waitForTimeout(2000);
        const scrollPixels = 5000;
        await page.waitForTimeout(3000); // Replace with the number of pixels you want to scroll
        await page.evaluate((scrollPixels) => {
          window.scrollBy(5000, scrollPixels);
        }, scrollPixels);
        await page.close();
      });
 

