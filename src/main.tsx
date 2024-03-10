import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './style/main.css'
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme>
      <Router>
        <App />
      </Router>
    </Theme>
  </React.StrictMode>,
);
