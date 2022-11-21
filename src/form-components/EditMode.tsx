import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [student, setStudent] = useState<boolean>(true);
    const [name, setName] = useState<string>("Your Name");
    const [editMode, setEditMode] = useState<boolean>(true);

    function displayStudent() {
        return student ? "is a student" : "is not a student";
    }

    function displayEditOptions() {
        if (!editMode) {
            return (
                <div>
                    <Form.Check
                        type="checkbox"
                        id="is-student"
                        label="student"
                        onChange={updateStudent}
                    />
                    <Form.Control
                        value={name}
                        role="textbox"
                        aria-label="nameEntry"
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setName(event.target.value)}
                    />
                </div>
            );
        }
    }

    function updateStudent() {
        setStudent(!student);
    }

    function updateEditMode() {
        setEditMode(!editMode);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-edit-mode"
                label="Edit"
                onChange={updateEditMode}
            />
            {displayEditOptions()}
            {name} {displayStudent()}
        </div>
    );
}
