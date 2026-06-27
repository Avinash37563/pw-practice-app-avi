import {test} from '@playwright/test'

test.beforeEach('Hook 1: Navigation to Form Options', async({page})=>{
    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click();
    await page.getByText('Form Layout').click();

})
test('Locator syntax Rule', async({page})=>{
// locator by tag name
     page.locator('input').first().click()
    //locator by Id name
     await page.locator('#inputEmail1').click()
    //locator by classname
     page.locator('.shape-rectangle')
    //locator by attribute
     page.locator('[placeholder="Email"]')
     //locator by classname full
     page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')
     //combined with different  selectors
     page.locator('input[placeholder="Email"][nbinput]')
    // by xpath ( but not recomended)
    page.locator('//*[@id="Email"]')
    // partial text match
    page.locator(':text("Using")')
    // full  text match
    page.locator(':text-is("Using the Grid")')

})
test('user facing locators' , async({page})=>{

    await page.getByRole('textbox',{name:'Email'}).first().click()
    await page.getByRole('button',{name:"Sign in"}).first().click()
    await page.getByLabel('Email').first().click()
    await page.getByPlaceholder('Jane Doe').click()
    await page.getByText('Using the Grid').click()
    await page.getByTestId('SignIn').click()
    await page.getByTitle('IoT Dashboard').click()

})
test('locating child elements ' , async({page})=>{

    await page.locator('nb-card nb-radio :text-is("Option 1")').click()
    await page.locator('nb-card').locator(' nb-radio').locator(':text-is("Option 2")').click()

    await page.locator('nb-card').getByRole('button', {name:'Sign In'}).first().click()
    //await page.locator('nb-vard').nth(3).getByRole('button').click()

})
