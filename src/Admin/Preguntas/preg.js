import React from "react";
import Preguntas from "./preguntas";
import Navbar from "../../Navbar/navbar";

function App() {
    return (
        <div className="App">
            <div>
                <Navbar />
            </div>
            <div>
                <Preguntas />
            </div>
        </div>
    );
}

export default App;
