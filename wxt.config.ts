import { defineConfig, WxtViteConfig } from "wxt";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    browser: "firefox",
    extensionApi: "webextension-polyfill",
    manifest: {
        permissions: ["tabs"],
    },
    modules: ["@wxt-dev/module-vue"],
    // prettier-ignore
    vite: () => <WxtViteConfig>{
        plugins: [tailwindcss()],
    },
});
