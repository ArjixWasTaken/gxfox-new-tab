import { PublicPath } from "wxt/browser";

import { provideCounter } from "@/services/Counter";
import ProvideAdapter from "./ProvideAdapter";

export default defineBackground({
    persistent: true,
    type: "module",
    main() {
        // provide services
        const counter = provideCounter(new ProvideAdapter());

        // open new tab for development
        if (import.meta.env.DEV) {
            const newtab = browser.runtime.getURL("newtab.html" as PublicPath);
            browser.tabs.query({ url: newtab }).then((tabs) => {
                if (!tabs.length) {
                    browser.tabs.create({ url: newtab });
                }
            });
        }
    },
});
