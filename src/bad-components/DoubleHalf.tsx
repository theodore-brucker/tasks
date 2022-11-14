import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface NewDHValue {
    changeDH: () => void;
}

function Doubler({ changeDH }: NewDHValue): JSX.Element {
    return <Button onClick={changeDH}>Double</Button>;
}

function Halfer({ changeDH }: NewDHValue): JSX.Element {
    return (
        <div>
            <Button onClick={changeDH}>Half</Button>
        </div>
    );
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    const half = () => setDhValue(dhValue / 2);
    const double = () => setDhValue(dhValue * 2);

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler changeDH={double}></Doubler>
            <Halfer changeDH={half}></Halfer>
        </div>
    );
}
