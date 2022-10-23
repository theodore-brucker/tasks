import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    //Holidays
    type Holiday = "🎃" | "🎄" | "🌲" | "🦃" | "🐰";

    //Transitions by alphabet
    const alphabeticalTransitions: Record<Holiday, Holiday> = {
        "🌲": "🎄",
        "🎄": "🐰",
        "🐰": "🎃",
        "🎃": "🦃",
        "🦃": "🌲"
    };

    //Transitions by date
    const dateTransitions: Record<Holiday, Holiday> = {
        "🐰": "🌲",
        "🌲": "🎃",
        "🎃": "🦃",
        "🦃": "🎄",
        "🎄": "🐰"
    };

    //State
    const [holiday, setHoliday] = useState<Holiday>("🌲");

    //Next by date
    function nextByDate(): void {
        setHoliday(dateTransitions[holiday]);
    }

    //Next in alphabet
    function nextByAlphabet(): void {
        setHoliday(alphabeticalTransitions[holiday]);
    }

    return (
        <div>
            <div>Holiday: {holiday}</div>
            <Button onClick={nextByDate}>Advance by Year</Button>
            <Button onClick={nextByAlphabet}>Advance by Alphabet</Button>
        </div>
    );
}
