// Advanced Selectors, Locators, Interactions & Assertions

import { test, expect } from '@playwright/test';
 
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


// 1. getByRole (accessible, stable)
// test('signup button by ARIA role', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   const signupBtn = page.getByRole('link', { name: /get started/i });

 
//   await expect(signupBtn).toBeVisible();
//   await signupBtn.click();
//   await expect(page).toHaveURL(/docs\/intro/);
// });

//  2. Scoping & chaining with locator
// test('chained locators within a section', async ({ page }) => {
//   await page.goto('https://demo.playwright.dev/todomvc');
//   const todoApp = page.locator('.todoapp');               // scope
//   const input = todoApp.getByPlaceholder('What needs to be done?');
//   await input.fill('Buy milk');
//   await input.press('Enter');

//   const list = todoApp.locator('.todo-list li');
//   await expect(list).toHaveCount(1);
//   await expect(list.first()).toContainText('Buy milk');
// });

// 3. hasText

// test('pick the row with specific text then click its button', async ({ page }) => {
//   await page.goto('https://demo.playwright.dev/todomvc');
//    await delay(1000);
//   const todoApp = page.locator('.todoapp');
//   const input = todoApp.getByPlaceholder('What needs to be done?');
//   await input.fill('Pay bills');
//   await input.press('Enter');
//   await input.fill('Buy bread');
//   await input.press('Enter');

//   const row = todoApp.locator('.todo-list li', { hasText: 'Pay bills' });
//   await row.hover(); // 👈 this makes the delete button visible
// await row.locator('button.destroy').click();
// //   await row.locator('button.destroy').click({ force: true }); // hidden until hover
//   await expect(todoApp.locator('.todo-list li')).toHaveCount(1);
// });
