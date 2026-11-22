import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { I18nProvider } from "./i18n/I18nContext";
import "./styles/index.css";

import { backgrounds } from "./app/data/renders";
const coverBg = backgrounds.cover;

const link = document.createElement("link");
link.rel = "preload";
link.as = "image";
link.type = "image/webp";
link.href = coverBg;
document.head.appendChild(link);

createRoot(document.getElementById("root")!).render(
  <I18nProvider>
    <App />
  </I18nProvider>,
);
