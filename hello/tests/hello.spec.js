// @ts-check
const { test, expect } = require('@playwright/test');

test('Hello XXX', async ({ page }) => {
  await page.goto('https://demo-frontend-reactjs.vercel.app/');

  // Expect a title "to contain" a substring.

  await expect(page.getByTestId('message_text')).toHaveText('Call REST API');
  await expect(page.getByTestId('hello_text')).toHaveText('Hello World!');
});
