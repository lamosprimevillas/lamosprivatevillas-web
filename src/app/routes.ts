import { createBrowserRouter } from "react-router";
import { LandingPage } from "./components/LandingPage";
import { Presentation } from "./components/Presentation";
import { PricingPage } from "./components/PricingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/presentation",
    Component: Presentation,
  },
  {
    path: "/pricing",
    Component: PricingPage,
  },
]);
