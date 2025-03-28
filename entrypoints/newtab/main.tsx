import "./style.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import { injectCounter } from "@/services/Counter";
import InjectAdapter from "./InjectAdapter";

const counter = injectCounter(new InjectAdapter());
// @ts-ignore
window.counter = counter;

createRoot(document.getElementById("app")!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
