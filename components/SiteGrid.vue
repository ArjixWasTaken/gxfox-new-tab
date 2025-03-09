<script setup lang="ts">
import { ref } from "vue";
import { StarIcon as StarIconSolid } from "@heroicons/vue/24/solid";
import { StarIcon as StarIconOutline } from "@heroicons/vue/24/outline";

interface Site {
    id: number;
    title: string;
    url: string;
    favicon: string;
    isPinned: boolean;
}

const sites = ref<Site[]>([
    {
        id: 1,
        title: "GitHub",
        url: "https://github.com",
        favicon: "https://github.com/favicon.ico",
        isPinned: true,
    },
    {
        id: 2,
        title: "YouTube",
        url: "https://youtube.com",
        favicon: "https://www.youtube.com/favicon.ico",
        isPinned: true,
    },
    {
        id: 3,
        title: "Stack Overflow",
        url: "https://stackoverflow.com",
        favicon: "https://stackoverflow.com/favicon.ico",
        isPinned: false,
    },
    {
        id: 4,
        title: "MDN Web Docs",
        url: "https://developer.mozilla.org",
        favicon: "https://developer.mozilla.org/favicon.ico",
        isPinned: false,
    },
]);

const togglePin = (site: Site) => {
    site.isPinned = !site.isPinned;
};
</script>

<template>
    <div class="mt-12 max-w-6xl mx-auto">
        <h2 class="text-xl font-semibold text-white mb-6 text-center">Pinned Sites</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div v-for="site in sites.filter((s) => s.isPinned)" :key="site.id" class="site-card rounded-lg p-4 cursor-pointer" @click="() => (window.location.href = site.url)">
                <div class="flex flex-col items-center">
                    <div class="relative">
                        <img :src="site.favicon" :alt="site.title" class="w-12 h-12 rounded" />
                        <button @click.stop="togglePin(site)" class="absolute -top-2 -right-2 p-1 rounded-full bg-gray-800">
                            <StarIconSolid class="h-4 w-4 text-yellow-400" />
                        </button>
                    </div>
                    <span class="mt-2 text-sm text-gray-300 text-center">{{ site.title }}</span>
                </div>
            </div>
        </div>

        <h2 class="text-xl font-semibold text-white mb-6 mt-12 text-center">Recently Viewed</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div v-for="site in sites.filter((s) => !s.isPinned)" :key="site.id" class="site-card rounded-lg p-4 cursor-pointer" @click="() => (window.location.href = site.url)">
                <div class="flex flex-col items-center">
                    <div class="relative">
                        <img :src="site.favicon" :alt="site.title" class="w-12 h-12 rounded" />
                        <button @click.stop="togglePin(site)" class="absolute -top-2 -right-2 p-1 rounded-full bg-gray-800">
                            <StarIconOutline class="h-4 w-4 text-gray-400 hover:text-yellow-400" />
                        </button>
                    </div>
                    <span class="mt-2 text-sm text-gray-300 text-center">{{ site.title }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
