import { RouterProvider } from "react-router";
import { router } from "./routes";
import { LanguageGate } from "./components/LanguageGate";

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <LanguageGate />
    </>
  );
}
