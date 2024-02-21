// @ts-check
const { test, expect } = require('@playwright/test');

test('ผู้ใช้งานทำการค้นหาคำว่าหวย แล้วจะต้องเจอผลการค้นหาตาม req', async ({ page }) => {
  await page.goto('https://www.google.com/');

  // Type into search box.
  const seachField = await page.locator('#APjFqb');
  await seachField.fill('หวย');
  await seachField.press('Enter');

  // Assert "ผลการค้นหาประมาณ 101,000,000 รายการ (0.36 วินาที)"
  // Assert text in id=result-stats
  await expect(page.locator('#result-stats')).toHaveText(/ผลการค้นหาประมาณ/);
  await expect(page.locator('#result-stats')).toHaveText(/รายการ/);
  await expect(page.locator('#result-stats')).toHaveText(/วินาที/);

  // Assert with regular expression ผลการค้นหาประมาณ 101,000,000 รายการ (0.36 วินาที)
  await expect(page.locator('#result-stats'))
  .toHaveText(/ผลการค้นหาประมาณ \d{1,3},\d{3},\d{3} รายการ \(\d{1,2}\.\d{1,2} วินาที\)/);


  
});

