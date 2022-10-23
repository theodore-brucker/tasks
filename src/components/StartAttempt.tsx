/* eslint-disable indent */
import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [numberAttempts, setNumberAttempts] = useState<number>(4);
    const [quizInProgress, setQuizInProgress] = useState<boolean>(false);

    //Decrements number of attempts
    function decrementNumberAttempts(): void {
        const lesserAttempts = numberAttempts - 1;
        setNumberAttempts(lesserAttempts);
    }

    //Increments number of attempts
    function incrementNumberAttempts(): void {
        const greaterAttempts = numberAttempts + 1;
        setNumberAttempts(greaterAttempts);
    }

    //Starts quiz progress and decrements attempts only if attempts are greater than zero
    function startQuizProgress(): void {
        numberAttempts <= 0
            ? setQuizInProgress(false)
            : !quizInProgress
            ? (setQuizInProgress(true), decrementNumberAttempts())
            : setQuizInProgress(true);
    }

    function stopQuizProgress(): void {
        setQuizInProgress(false);
    }

    return (
        <div>
            <Button
                onClick={startQuizProgress}
                disabled={quizInProgress || numberAttempts == 0}
            >
                Start Quiz
            </Button>
            <Button onClick={stopQuizProgress} disabled={!quizInProgress}>
                Stop Quiz
            </Button>
            <Button onClick={incrementNumberAttempts} disabled={quizInProgress}>
                Mulligan
            </Button>
            {numberAttempts} {quizInProgress && <div> Quiz Running! </div>}
        </div>
    );
}
