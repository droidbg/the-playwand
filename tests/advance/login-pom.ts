// pages/LoginPage.ts
// import { Page, expect } from '@playwright/test';

// export class LoginPage {
 
//   constructor(private page: Page) { }
//   private username = this.page.locator('#username');
//   private password = this.page.locator('#password');
//   private submit   = this.page.locator('button[type="submit"]');
//   private flash    = this.page.locator('.flash');

//   async goto() {
//     await this.page.goto('https://the-internet.herokuapp.com/login');
//   }
//   async login(name: string, pass: string) {
//     await this.username.fill(name);
//     await this.password.fill(pass);
//     await this.submit.click();
//   }
//   async expectSuccess() { await expect(this.flash).toHaveClass(/success/); }
//   async expectError()   { await expect(this.flash).toHaveClass(/error/); }
// }


// npx playwright test