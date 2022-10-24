export function PasswordTest(password: string): boolean {
    const pwTest = RegExp(/[a-zA-Z].*(\d.*[^a-zA-Z0-9].*|[^a-zA-Z0-9].*\d.*)/);
    const passes = pwTest.test(password);

    return passes && password.length == 16;
}
