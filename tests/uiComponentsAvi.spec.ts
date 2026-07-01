import {test, expect} from '@playwright/test'

test.beforeEach('Navigation to the application', async({page})=>{
await page.goto('http://localhost:4200/')

})

test.describe('Open the Form Layout Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.getByText('Forms').click();
    await page.getByText('Form Layout').click();
  });

  test('Input Fields', async ({ page }) => {
    const emailInput = page
      .locator('nb-card', { hasText: 'Using the Grid' })
      .getByRole('textbox', { name: 'Email' });

    await emailInput.fill('test@FileList.com');
    await emailInput.clear();
    await emailInput.pressSequentially('test2@FileList.com', { delay: 500 });

    const inputValue = await emailInput.inputValue();
    expect(inputValue).toEqual('test2@FileList.com');

    await expect(emailInput).toHaveValue('test2@FileList.com');
  });
});