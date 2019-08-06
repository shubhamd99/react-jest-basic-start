// import { add, total } from './App';
import { total } from './App';


// Mock - fake function in jest fro testing
const add = jest.fn(() => 3);

// Unit Test
// It only tests one thing

test('First Test', () => {
    expect(true).toBeTruthy();
});

test('add', () => {
    const value = add(1,2);
    // assertion
    expect(value).toBe(3);

    // check how many times it was called
    expect(add).toHaveBeenCalledTimes(1);

    // check the parameters / arguments
    expect(add).toHaveBeenCalledWith(1, 2);
});


// Integration Test
// It tests more than one

test('total', () => {
    expect(total(5, 20)).toBe("$25");
});