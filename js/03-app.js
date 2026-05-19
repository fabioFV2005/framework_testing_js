// in this case, we are testing async functions, for what?
// we need to use async/await to test the functions, and we need to use try/catch to handle the errors

// we can import the functions we want to test
import { test_addition, test_substraction } from "./01-app.js";
import { expected } from "./02-app.js";

async function test_async_addition(value1, value2) {
    return Promise.resolve(test_addition(value1, value2));
}


async function test(message, callback) {
    try {
        await callback();
        console.log('The test passed succesfully');
    } catch (error) {
        console.error(`The test failed with error: ${error}`);
    }
}

test('should add two numbers correctly', async () => {
    const result = await test_async_addition(10, 20);
    const expectedResult = 30;
    expected(expectedResult).toBe(result);
})