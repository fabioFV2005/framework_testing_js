// we can import the functions we want to test
// 
import { test_addition, test_substraction } from "./01-app.js";

export const expected = (expectedResult) => {
    return {
        toBe(result) {
            if (result !== expectedResult) {
                console.error(`The result of the addition is not correct, expected ${expectedResult} but got ${result}`);
            } else {
                console.log('The test passed successfully');
            }
        },
        toEqual(result) {
            if (result !== expectedResult) {
                console.error(`The result is not equal to expected result, the test failed, expected ${expectedResult} but got ${result}`);
            } else {
                console.log('The test passed successfully');
            }
        }
    }
}
// expected(test_addition(2, 3)).toBe(5);
// expected(test_substraction(5, 2)).toBe(3);
// expected(test_addition(2, 3)).toEqual(5);