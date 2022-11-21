import { cp } from "fs";
import React, { useState } from "react";
import { Form, FormCheck } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, changeColor] = useState<string>("red");
    const COLORS = [
        "red",
        "blue",
        "green",
        "yellow",
        "pink",
        "purple",
        "orange",
        "magenta"
    ];

    function updateColor(newColor: string) {
        changeColor(newColor);
    }
    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group controlId="favoriteColors">
                <Form.Label>What is your favorite color?</Form.Label>

                {COLORS.map((iterateColor: string) => (
                    <Form.Check
                        inline
                        key={iterateColor}
                        type="radio"
                        name={iterateColor}
                        onChange={(x) => updateColor(x.target.value)}
                        id="color-option"
                        label={iterateColor}
                        value={iterateColor}
                        checked={iterateColor === color}
                    />
                ))}
            </Form.Group>
            Current color is
            <span
                data-testid="colored-box"
                style={{ backgroundColor: color, alignSelf: "flex-start" }}
            >
                {color}
            </span>
        </div>
    );
}
