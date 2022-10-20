import React from "react";
import { Button } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
<<<<<<< HEAD
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <header className="App-header">Theo COS420 Brucker</header>
=======
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
>>>>>>> upstream/task-arrays
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
            <ol>
                <li>First thing</li>
                <li>Another thing</li>
                <li>A third item</li>
            </ol>
            fahrenheitToCelius(28)
        </div>
    );
}

export default App;
