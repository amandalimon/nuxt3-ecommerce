<template>
  <div
    class="flex flex-col items-center justify-center gap-6 px-6 py-12 bg-gradient-to-b from-zinc-900 to-zinc-800 min-h-screen text-center"
  >
    <div class="text-yellow-400 animate-bounce text-7xl">⚠️</div>

    <h1
      class="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
    >
      {{ error?.statusCode || 500 }}
    </h1>

    <p class="text-xl md:text-2xl font-semibold text-zinc-100">
      {{ error?.message || "Oops! Something went wrong." }}
    </p>

    <p class="text-zinc-400 max-w-md">
      We couldn't complete your request. You can go back to the homepage or try
      again later.
    </p>

    <NuxtLink to="/">
      <Button> Go back to Home </Button>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});
</script>
