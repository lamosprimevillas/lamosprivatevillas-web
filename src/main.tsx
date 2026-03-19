import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

import img0ec from "figma:asset/0ec89edbc1b48cea234b8d4bdae1ab86d23da1fa.png";
import img5ba from "figma:asset/5ba4151e9d82f2b08dc11dcbf7c09f1f4934db04.png";
import img619 from "figma:asset/619e7839cc517646c704b1c88c1df4032b05c437.png";
import img824 from "figma:asset/824b55987c2a902814d98214f672927f0a231642.png";
import img862 from "figma:asset/8629ca25f7da3679368f202246d1cede8739f913.png";
import img9eb from "figma:asset/9eba3025a7fb9754e76b817f78453cb939b49ede.png";
import imgb7c from "figma:asset/b7c7d443ae2a0ace15ff25de76d18b033bd022df.png";
import imgc9f from "figma:asset/c9f4663867d5a9406c20f613231e5563eb38097e.png";
import imged8 from "figma:asset/ed8f29a915f28aad1fb488874529396cf81f3f89.png";
import img20d from "figma:asset/20d1ad4c7a7d9df060eed7ddcded96d2309e3e46.png";
import imgInt1 from "@/assets/interior1.jpg";
import imgInt2 from "@/assets/interior2.jpg";

const allImages = [img0ec, img5ba, img619, img824, img862, img9eb, imgb7c, imgc9f, imged8, img20d, imgInt1, imgInt2];
allImages.forEach((src) => {
  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "image";
  link.href = src;
  document.head.appendChild(link);
});

createRoot(document.getElementById("root")!).render(<App />);
