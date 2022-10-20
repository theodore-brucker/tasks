import { check } from "prettier";

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const temp: number[] = [];

    if (numbers.length == 1) {
        temp.splice(0, 0, numbers[0]);
        temp.splice(1, 0, numbers[0]);
    } else if (numbers.length >= 2) {
        temp.splice(0, 0, numbers[0]);
        temp.splice(1, 0, numbers[numbers.length - 1]);
    }
    return temp;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((number: number): number => number * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    // eslint-disable-next-line use-isnan
    const nums = numbers.map(Number);
    const answer = nums.map((val: number): number => (isNaN(val) ? 0 : val));
    return answer;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const removeD = amounts.map((val: string): string =>
        val[0] == "$" ? val.slice(1, val.length) : val
    );
    const nums = removeD.map(Number);
    const answer = nums.map((val: number): number => (isNaN(val) ? 0 : val));
    return answer;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const toUpper = messages.map((val: string): string =>
        val[val.length - 1] == "!" ? val.toUpperCase() : val
    );

    const removeQ = toUpper.filter(
        (val: string): boolean => !val.endsWith("?")
    );

    return removeQ;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const checkSize = words.filter(
        (val: string): boolean => !(val.length >= 4)
    );
    return checkSize.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const checkColor = colors.filter(
        (val: string): boolean =>
            val === "red" || val === "blue" || val === "green"
    );

    let check = false;
    if (checkColor.length == colors.length) {
        check = true;
    }
    return check;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce((cur: number, num: number) => cur + num, 0);

    return sum;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    return [];
}
