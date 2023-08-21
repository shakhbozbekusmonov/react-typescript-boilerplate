import { RootProvider } from "./context/ThemeContext";
import ReactDOM from "react-dom/client";
import Root from "./root";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <RootProvider>
        <Root />
    </RootProvider>
);
