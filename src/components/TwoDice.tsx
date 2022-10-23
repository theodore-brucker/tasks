import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [dieL, changeDieL] = useState<number>(1);
    const [dieR, changeDieR] = useState<number>(2);

    function rollL(): void {
        changeDieL(d6());
    }

    function rollR(): void {
        changeDieR(d6());
    }

    return (
        <div>
            <span data-testid={"left-die"}>{dieL}</span>
            <Button onClick={rollL}>Roll Left</Button>
            <Button onClick={rollR}>Roll Right</Button>
            <span data-testid={"right-die"}>{dieR}</span>
            {dieL == dieR ? (
                dieL == 1 ? (
                    <div> You Lose </div>
                ) : (
                    <div> You Win </div>
                )
            ) : (
                <div> Keep Rolling! </div>
            )}
        </div>
    );
}
