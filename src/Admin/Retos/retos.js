import React from "react";
import Retos from "./ret";
import Navbar from "../../Navbar/navbar";

function App() {
    return (
        <div className="App">
            <div>
                <Navbar />
            </div>
            <div>
                <Retos />
            </div>
        </div>
    );
}

export default App;
