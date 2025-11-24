import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  readonly usernameInput;
  readonly passwordInput;

  constructor(page: Page) {
    this.page = page;

    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');

  }

async fillUsername(username: string) {
  await this.usernameInput.fill(username);
}

async fillPassword(password: string) {
  await this.passwordInput.fill(password);
}
}
