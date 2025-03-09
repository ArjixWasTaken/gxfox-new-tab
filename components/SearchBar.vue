<script setup lang="ts">
import { ref } from "vue";
import { MagnifyingGlassIcon } from "@heroicons/vue/24/solid";

const searchQuery = ref("");

const handleSearch = () => {
    if (searchQuery.value) {
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery.value)}`;
        window.location.href = searchUrl;
    }
};
</script>

<template>
    <div class="search-bar rounded-lg p-4 w-full max-w-2xl mx-auto mt-8">
        <div class="flex items-center gap-3">
            <MagnifyingGlassIcon class="h-6 w-6 text-gray-400" />
            <input v-model="searchQuery" type="text" placeholder="Search or enter web address" class="w-full bg-transparent border-none outline-none text-white placeholder-gray-400" @keyup.enter="handleSearch" />
        </div>
    </div>
</template>
