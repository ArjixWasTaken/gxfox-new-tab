import "./style.css";

import { createApp } from "vue";
import NewTab from "./NewTab.vue";

import { injectCounter } from "@/services/Counter";
import InjectAdapter from "./InjectAdapter";

const counter = injectCounter(new InjectAdapter());
// @ts-ignore
window.counter = counter;

createApp(NewTab).mount("#app");
