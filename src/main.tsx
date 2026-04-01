import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { I18nProvider } from "./i18n/I18nContext";
import "./styles/index.css";

import coverBg from "figma:asset/0ec89edbc1b48cea234b8d4bdae1ab86d23da1fa.png";

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
