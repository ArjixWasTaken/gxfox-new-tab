import React, { useEffect, useRef, useState } from "react";
import { X, Moon, Sun, Globe, Shield, Bell, Monitor, Image } from "lucide-react";
import { useWallpaper } from "@/entrypoints/newtab/stores/wallpaper";

interface SettingsPanelProps {
    isPanelOpen: boolean;
    setIsPanelOpen: (isOpen: boolean) => void;
    isDarkMode: boolean;
    setIsDarkMode: (isDark: boolean) => void;
}

export function SettingsPanel({ isPanelOpen, setIsPanelOpen, isDarkMode, setIsDarkMode }: SettingsPanelProps) {
    const edgeZoneRef = useRef<HTMLDivElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);
    const [openedByHover, setOpenedByHover] = useState(false);
    const { wallpapers, currentWallpaper, setCurrentWallpaper } = useWallpaper();

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!panelRef.current) return;

            const panelRect = panelRef.current.getBoundingClientRect();
            const edgeThreshold = 20;

            // Check if mouse is near the right edge of the screen
            const isNearEdge = window.innerWidth - e.clientX <= edgeThreshold;

            // Check if mouse is within or near the panel
            const isNearPanel = e.clientX >= panelRect.left - edgeThreshold && e.clientX <= panelRect.right && e.clientY >= panelRect.top && e.clientY <= panelRect.bottom;

            if (isNearEdge && !isPanelOpen) {
                setIsPanelOpen(true);
                setOpenedByHover(true);
            } else if (!isNearPanel && isPanelOpen && openedByHover) {
                setIsPanelOpen(false);
                setOpenedByHover(false);
            }
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, [isPanelOpen, setIsPanelOpen, openedByHover]);

    const handleClose = () => {
        setIsPanelOpen(false);
        setOpenedByHover(false);
    };

    return (
        <>
            {/* Edge detection zone */}
            <div ref={edgeZoneRef} className="fixed top-0 right-0 w-5 h-full z-40" />

            {/* Settings Panel */}
            <div ref={panelRef} className={`fixed top-0 right-0 h-full w-80 bg-black/80 backdrop-blur-md transform transition-transform duration-300 ease-in-out z-50 ${isPanelOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="p-6 text-white">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-xl font-semibold">Settings</h2>
                        <button onClick={handleClose} className="text-gray-400 hover:text-white transition-colors">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-4">
                            <h3 className="text-sm font-medium text-gray-400">Appearance</h3>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    {isDarkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                                    <span>Dark Mode</span>
                                </div>
                                <button onClick={() => setIsDarkMode(!isDarkMode)} className={`w-11 h-6 rounded-full transition-colors duration-200 ease-in-out ${isDarkMode ? "bg-blue-600" : "bg-gray-600"}`}>
                                    <div className={`w-4 h-4 bg-white rounded-full transform transition-transform duration-200 ease-in-out ${isDarkMode ? "translate-x-6" : "translate-x-1"}`} />
                                </button>
                            </div>

                            <div className="pt-4">
                                <div className="flex items-center space-x-3 mb-3">
                                    <Image className="w-4 h-4" />
                                    <span>Wallpaper</span>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    {wallpapers.map((wallpaper) => (
                                        <button key={wallpaper.url} onClick={() => setCurrentWallpaper(wallpaper)} className={`relative aspect-video rounded-lg overflow-hidden group ${currentWallpaper.url === wallpaper.url ? "ring-2 ring-blue-500" : ""}`}>
                                            <img src={wallpaper.url} alt={wallpaper.name} className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                                                <span className="text-xs text-white">{wallpaper.name}</span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-sm font-medium text-gray-400">Search</h3>
                            <div className="space-y-3">
                                <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
                                    <Globe className="w-4 h-4" />
                                    <span>Region & Language</span>
                                </button>
                                <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
                                    <Shield className="w-4 h-4" />
                                    <span>Safe Search</span>
                                </button>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-sm font-medium text-gray-400">Preferences</h3>
                            <div className="space-y-3">
                                <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
                                    <Bell className="w-4 h-4" />
                                    <span>Notifications</span>
                                </button>
                                <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
                                    <Monitor className="w-4 h-4" />
                                    <span>Display Settings</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
