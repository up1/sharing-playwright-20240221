// @ts-check
const { test, expect } = require('@playwright/test');

test('ผู้ใช้งานทำการค้นหาคำว่าหวย แล้วจะต้องเจอผลการค้นหาตาม req', async ({ page }) => {
  await page.goto('https://www.google.com/');

  // Type into search box.
  const seachField = await page.locator('#APjFqb');
  await seachField.fill('หวย');
  await seachField.press('Enter');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright2/);
});

