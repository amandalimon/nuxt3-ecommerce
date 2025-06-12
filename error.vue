<template>
  <div
    class="flex flex-col items-center justify-center gap-8 p-8 bg-gradient-to-b from-zinc-900 to-zinc-800 min-h-screen text-center"
  >
    <h1
      class="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
    >
      {{ error?.statusCode || 500 }}
    </h1>
    <p class="text-2xl font-semibold text-white">
      {{ error?.message || "Oops! Something went wrong." }}
    </p>
    <NuxtLink to="/">
      <Button
        class="px-6 py-3 text-white font-semibold bg-pink-600 rounded-xl hover:bg-pink-700 transition"
        >Go back to Home</Button
      >
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});
</script>
