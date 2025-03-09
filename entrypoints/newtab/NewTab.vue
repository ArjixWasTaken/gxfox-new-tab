<script setup lang="ts">
import SearchBar from "@/components/SearchBar.vue";
import SiteGrid from "@/components/SiteGrid.vue";
</script>

<template>
    <div class="min-h-screen bg-cover bg-center bg-no-repeat relative" style="background-image: url('https://images.unsplash.com/photo-1735615479436-6a697c3e0d48?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=a-chosen-soul-aZyP_xZUpVk-unsplash.jpg')">
        <div class="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-gray-800/90"></div>
        <div class="relative z-10 p-8">
            <SearchBar />
            <SiteGrid />
        </div>
    </div>
</template>
