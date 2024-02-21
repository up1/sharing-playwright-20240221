// @ts-check
const { test, expect } = require('@playwright/test');

test('Hello @mock', async ({ page }) => {
  // Arrange  
  // Mock api = GET https://demo-backend-nodejs.vercel.app/
  await page.route('https://demo-backend-nodejs.vercel.app/', async route => {
    const response = {
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ message: 'My Hello' }),
    };
    await route.fulfill(response);
  });

  await page.goto('https://demo-frontend-reactjs.vercel.app/');

  // Expect a title "to contain" a substring.

  await expect(page.getByTestId('message_text')).toHaveText('Call REST API');

  const helloText = page.getByTestId('hello_text');
  await expect(helloText).toHaveText('My Hello');
});

test('Hello @real', async ({ page }) => {
  await page.goto('https://demo-frontend-reactjs.vercel.app/');

  // Expect a title "to contain" a substring.

  await expect(page.getByTestId('message_text')).toHaveText('Call REST API');

  const helloText = page.getByTestId('hello_text');
  await expect(helloText).toHaveText('Hello World!');
});


