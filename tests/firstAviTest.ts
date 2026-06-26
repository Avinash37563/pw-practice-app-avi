import {test} from '@playwright/test'

test.beforeEach('Hook 1: Navigation to Form Options', async({page})=>{
await page.goto('http://localhost:4200/')

await page.getByText('Forms').click();

})

test('the  first test' , async({page}) =>{

await page.getByText('Form Layout').click();

})

test('Naviagte to pick the date' , async({page}) =>{

await page.getByText('Datepicker').click();

})
