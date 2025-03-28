import { create } from "zustand";

export interface Site {
    domain: string;
    favicon: string;
}

interface SiteStore {
    sites: Site[];
    removeSite: (domain: string) => void;
}

export const useRecentSites = create<SiteStore>((set) => ({
    sites: [
        { domain: "github.com", favicon: "https://github.com/favicon.ico" },
        { domain: "stackoverflow.com", favicon: "https://stackoverflow.com/favicon.ico" },
        { domain: "dev.to", favicon: "https://dev.to/favicon.ico" },
        { domain: "medium.com", favicon: "https://medium.com/favicon.ico" },
        { domain: "twitter.com", favicon: "https://twitter.com/favicon.ico" },
        { domain: "linkedin.com", favicon: "https://linkedin.com/favicon.ico" },
        { domain: "youtube.com", favicon: "https://youtube.com/favicon.ico" },
        { domain: "reddit.com", favicon: "https://reddit.com/favicon.ico" },
    ],
    removeSite: (domain) =>
        set((state) => ({
            sites: state.sites.filter((site) => site.domain !== domain),
        })),
}));
