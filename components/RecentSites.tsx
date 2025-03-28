import React from "react";
import { X } from "lucide-react";
import { useRecentSites } from "@/entrypoints/newtab/stores/sites";

const SITE_COLORS: Record<string, string> = {
    "github.com": "#24292e",
    "stackoverflow.com": "#f48024",
    "dev.to": "#090909",
    "medium.com": "#000000",
    "twitter.com": "#1da1f2",
    "linkedin.com": "#0a66c2",
    "youtube.com": "#ff0000",
    "reddit.com": "#ff4500",
};

const DEFAULT_COLOR = "#dc2626"; // Tailwind red-600

export function RecentSites() {
    const { sites, removeSite } = useRecentSites();

    if (sites.length === 0) {
        return <div className="w-full max-w-4xl text-center text-gray-400 mt-4">No recent sites</div>;
    }

    return (
        <div className="w-full max-w-4xl">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {sites.map((site) => (
                    <div key={site.domain} className="group relative">
                        <a
                            href={`https://${site.domain}`}
                            className="flex flex-col items-center p-3 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
                            style={{
                                backgroundColor: SITE_COLORS[site.domain] || DEFAULT_COLOR,
                                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                                clipPath: "polygon(10px 0, calc(100% - 0px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 calc(100% - 0px), 0 10px)",
                            }}
                        >
                            <div
                                className="w-10 h-10 mb-2 flex items-center justify-center rounded-lg"
                                style={{
                                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                                }}
                            >
                                <div className="w-7 h-7 bg-white rounded-md flex items-center justify-center">
                                    <img
                                        src={site.favicon}
                                        alt={`${site.domain} favicon`}
                                        className="w-5 h-5 object-contain"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src =
                                                'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Ccircle cx="12" cy="12" r="10"%3E%3C/circle%3E%3Cline x1="2" y1="12" x2="22" y2="12"%3E%3C/line%3E%3Cpath d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"%3E%3C/path%3E%3C/svg%3E';
                                        }}
                                    />
                                </div>
                            </div>
                            <span className="text-gray-200 group-hover:text-white text-xs text-center transition-colors">{site.domain.split(".")[0]}</span>
                        </a>
                        <button onClick={() => removeSite(site.domain)} className="absolute -top-2 -right-2 p-1 bg-black/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/80">
                            <X className="w-3 h-3 text-white" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
