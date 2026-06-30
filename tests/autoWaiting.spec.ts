import {expect, test} from '@playwright/test'
import { timeout } from 'rxjs-compat/operator/timeout';

test.beforeEach('AJAX URL Operation', async({page},testInfo)=>{
    await page.goto('http://uitestingplayground.com/ajax')
    await page.getByText('Button Triggering AJAX Request').click();
   testInfo.setTimeout(testInfo.timeout +2000)

})

test('Click the Ajax Button', async({page})=>{

const successButton = page.locator('.bg-success')

//await successButton.click()

//const ajaxText = await successButton.textContent()
//await successButton.waitFor({state: 'attached'})
//const ajaxText = await successButton.allTextContents()


expect(successButton).toHaveText('Data loaded with AJAX get request.', {timeout: 20000})
})

test('Alternative waits', async({page})=>{

const successButton = page.locator('.bg-success')

//wait for elements

await page.waitForSelector('.bg-success')

//wait for particular response

await page.waitForResponse('http://uitestingplayground.com/ajaxdata')

//wait for netwrok call

await page.waitForLoadState('networkidle')

//wait for URL

await page.waitForURL('http://uitestingplayground.com/ajax')

//await successButton.click()

//const ajaxText = await successButton.textContent()
//await successButton.waitFor({state: 'attached'})
//const ajaxText = await successButton.allTextContents()


//expect(successButton).toHaveText('Data loaded with AJAX get request.', {timeout: 20000})
})
test('Timeout exploration', async({page})=>{
//test.setTimeout(10000)
test.slow()

const successButton = page.locator('.bg-success')
 await successButton.click()

})