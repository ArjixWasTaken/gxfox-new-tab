import { useState } from "react";
import { Settings } from "lucide-react";

import { SearchBar } from "@/components/SearchBar";
import { RecentSites } from "@/components/RecentSites";
import { SettingsPanel } from "@/components/SettingsPanel";
import { useWallpaper } from "./stores/wallpaper";

function App() {
    const [searchQuery, setSearchQuery] = useState("");
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const { currentWallpaper } = useWallpaper();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Searching for:", searchQuery);
    };

    return (
        <div
            className="min-h-screen flex flex-col items-center bg-cover bg-center bg-no-repeat bg-fixed relative"
            style={{
                backgroundImage: `url("${currentWallpaper.url}")`,
                backgroundColor: "#282828",
                backgroundBlendMode: "overlay",
            }}
        >
            <main className="flex-1 flex flex-col items-center w-full px-4" style={{ paddingTop: "15vh" }}>
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} onSubmit={handleSearch} />
                <RecentSites />
            </main>

            <button
                onClick={() => {
                    setIsPanelOpen(true);
                }}
                className="fixed bottom-6 right-6 p-2 bg-black/40 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-black/60 transition-colors duration-200 z-40"
            >
                <Settings className="w-6 h-6 text-white" />
            </button>

            <SettingsPanel isPanelOpen={isPanelOpen} setIsPanelOpen={setIsPanelOpen} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </div>
    );
}

export default App;
