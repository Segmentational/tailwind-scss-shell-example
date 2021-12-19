import "./index.scss";

import React from "react";
import ReactDOM from "react-dom";
import Example from "./App.js";
import { Vitals } from "./Vitals.js";

ReactDOM.render(
    <React.StrictMode>
        <Example/>
    </React.StrictMode>,
    document.getElementById("root")
);

Vitals();
