import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<number>(0);
    const [isDisabled, setDisabled] = useState<boolean>(false);

    function UseAttempt() {
        setAttemptsLeft(attemptsLeft - 1);
        CheckDisabled();
    }

    function CheckDisabled() {
        if (attemptsLeft <= 1) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }

    function GainAttempts() {
        setAttemptsLeft(attemptsLeft + attemptsRequested);
        if (attemptsLeft > 0) {
            CheckDisabled();
        }
    }

    function AddAttempts() {
        return (
            <div>
                <Form.Group controlId="numAttemptsGained">
                    <Form.Control
                        type="number"
                        value={attemptsRequested}
                        onInput={(event: React.ChangeEvent<HTMLInputElement>) =>
                            setAttemptsRequested(event.target.valueAsNumber)
                        }
                    />
                </Form.Group>
                <Button onClick={GainAttempts}>gain</Button>
            </div>
        );
    }
    return (
        <div>
            Uses: {attemptsLeft}
            <Button disabled={isDisabled} onClick={UseAttempt}>
                use
            </Button>
            ;<AddAttempts></AddAttempts>
        </div>
    );
}
