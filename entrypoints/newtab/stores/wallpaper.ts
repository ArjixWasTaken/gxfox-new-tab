import { create } from "zustand";

interface Wallpaper {
    url: string;
    name: string;
    author?: string;
    authorUrl?: string;
}

interface WallpaperStore {
    wallpapers: Wallpaper[];
    currentWallpaper: Wallpaper;
    setCurrentWallpaper: (wallpaper: Wallpaper) => void;
}

const defaultWallpapers: Wallpaper[] = [
    {
        url: "https://w.wallhaven.cc/full/5g/wallhaven-5g22q5.png",
        name: "Dark Mountains",
    },
    {
        url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
        name: "Foggy Mountains",
        author: "Dino Reichmuth",
        authorUrl: "https://unsplash.com/@dinoreichmuth",
    },
    {
        url: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1",
        name: "Purple Mountains",
        author: "Casey Horner",
        authorUrl: "https://unsplash.com/@mischievous_penguins",
    },
    {
        url: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0",
        name: "Starry Night",
        author: "Kristopher Roller",
        authorUrl: "https://unsplash.com/@krisroller",
    },
];

export const useWallpaper = create<WallpaperStore>((set) => ({
    wallpapers: defaultWallpapers,
    currentWallpaper: defaultWallpapers[0],
    setCurrentWallpaper: (wallpaper) => set({ currentWallpaper: wallpaper }),
}));
