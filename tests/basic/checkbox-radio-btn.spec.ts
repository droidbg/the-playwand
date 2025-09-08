// import { test, expect } from '@playwright/test';

// test('checkbox and radio', async ({ page }) => {
//   await page.goto('https://www.w3schools.com/html/tryit.asp?filename=tryhtml_input_radio');
//   const frame = page.frameLocator('#iframeResult');

//   await frame.locator('input[value="male"]').check();
//   await frame.locator('input[value="female"]').check();
//   await expect(frame.locator('input[value="female"]')).toBeChecked();
// });


// Concepts

// Use check() to tick a box or select radio.
// frameLocator() → needed because page is inside an iframe.

// Assertions: toBeChecked() verifies state.