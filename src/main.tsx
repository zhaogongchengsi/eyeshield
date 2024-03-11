/* eslint-disable @typescript-eslint/no-unused-vars */
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./style/main.css";
import "@radix-ui/themes/styles.css";
import { BrowserRouter } from "react-router-dom";

function mount() {
  const root = document.getElementById("root")!;
  root.innerHTML = "";

  ReactDOM.createRoot(root).render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
  );
}

async function setup() {
  mount();
}

setup();
