import React from "react";
import "./div.css";
import Nombre from "./nombre2";
import SignIn from "../Login/login";

function App() {
    return (
        <div>
            <div className="App">
                <div className="left-section">
                    <Nombre />
                </div>
{/*                 <div className="lineaDivisoria"></div>
                <div className="right-section">
                    <SignIn />
                </div> */}
            </div>
        </div>
    );
}

export default App;
