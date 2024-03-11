import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./style/main.css";
import "@radix-ui/themes/styles.css";
import { Theme,  } from "@radix-ui/themes";
import { BrowserRouter } from "react-router-dom";

function mount() {
  const root = document.getElementById("root")!;
  root.innerHTML = "";

  ReactDOM.createRoot(root).render(
    <Theme appearance="light">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Theme>,
  );
}

async function setup() {
  mount();
}

setup();
