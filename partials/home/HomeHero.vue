<template>
  <div
    class="flex-1 flex flex-col items-center justify-center text-center space-y-6"
  >
    <h1
      class="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
    >
      Setubal Finds.
    </h1>

    <p class="text-zinc-400 max-w-xl text-lg md:text-xl">
      Discover our exclusive selection of products designed to elevate your
      digital experience.
    </p>

    <NuxtLink to="/products">
      <Button> Explore Products </Button>
    </NuxtLink>
    <span class="mt-12 text-xs text-zinc-500">Handpicked with ❤️ for you</span>
  </div>
</template>

<script setup lang="ts"></script>
