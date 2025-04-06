import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import WorkOutContex from "./Context/WorkOutContex";
import {AuthProvider} from "./Context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <WorkOutContex>
        <App />
      </WorkOutContex>
    </AuthProvider>
  </React.StrictMode>
);
