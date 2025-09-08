import { test } from '@playwright/test';
import { LoginPage } from './login-pom';

test('login via POM', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('tomsmith', 'SuperSecretPassword!');
  await login.expectSuccess();
});
