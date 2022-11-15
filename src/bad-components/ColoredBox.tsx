import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface NewColorIndex {
    changeIndex: () => void;
    index: number;
}

function ChangeColor({ changeIndex }: NewColorIndex): JSX.Element {
    return <Button onClick={changeIndex}>Next Color</Button>;
}

function ColorPreview(props: NewColorIndex): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[props.index],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    const nextColorIndex = () =>
        setColorIndex((colorIndex + 1) % COLORS.length);

    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor
                    changeIndex={nextColorIndex}
                    index={colorIndex}
                ></ChangeColor>
                <ColorPreview
                    changeIndex={nextColorIndex}
                    index={colorIndex}
                ></ColorPreview>
            </div>
        </div>
    );
}
