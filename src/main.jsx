import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "@fontsource/ubuntu";
import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/700.css";
import { Provider } from "./components/ui/provider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider disableGlobalStyle={true}>
      <App />
    </Provider>
  </StrictMode>
);
