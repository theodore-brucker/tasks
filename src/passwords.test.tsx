import { PasswordTest } from "./passwords";

describe("Password tests", () => {
    test("Testing for successful password with special character before number", () => {
        const password = "a?1aaaaaaaaaaaaa";
        expect(PasswordTest(password)).toEqual(true);
    });
    test("Testing for successful password with number before special character", () => {
        const password = "a1?aaaaaaaaaaaaa";
        expect(PasswordTest(password)).toEqual(true);
    });
    test("Testing for successful password with number and special character at the end", () => {
        const password = "aaaaaaaaaaaaaa1?";
        expect(PasswordTest(password)).toEqual(true);
    });
    test("Testing for only one letter and one special character", () => {
        const password = "a11111111111111?";
        expect(PasswordTest(password)).toEqual(true);
    });
    test("Testing for too short password", () => {
        const password = "aa";
        expect(PasswordTest(password)).toEqual(false);
    });
    test("Testing for non-number first", () => {
        const password = "1aaaaaaaaaaaaaaa";
        expect(PasswordTest(password)).toEqual(false);
    });
    test("Testing for non-number first", () => {
        const password = "?aaaaaaaaaaaaaaa";
        expect(PasswordTest(password)).toEqual(false);
    });
    test("Testing for empty password", () => {
        const password = "";
        expect(PasswordTest(password)).toEqual(false);
    });
});
