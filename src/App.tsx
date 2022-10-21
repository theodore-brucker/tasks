import React from "react";
import { Button } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD COS420 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
                <div style={{ background: "blue" }}>
                    <h1>This is header text</h1>
                </div>
                ;
                <img
                    src="../assets/images/pet-ada.jpg"
                    alt="A picture of my dog Ada"
                />
            </p>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <ul>
                <li> item one </li> <li>item two</li> <li>item three</li>
            </ul>
        </div>
    );
}

export default App;
