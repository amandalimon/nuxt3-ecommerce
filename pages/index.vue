<template>
  <div
    class="flex-1 flex flex-col items-center justify-center text-center px-6 py-16"
  >
    <h1
      class="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
    >
      Setubal Finds.
    </h1>

    <p class="text-zinc-400 max-w-xl mt-6 text-lg md:text-xl">
      Discover our exclusive selection of products designed to elevate your
      digital experience.
    </p>

    <NuxtLink to="/products">
      <Button
        class="mt-8 px-8 py-3 text-white font-semibold bg-pink-600 shadow-lg hover:bg-pink-700 transition duration-300"
      >
        Explore Products
      </Button>
    </NuxtLink>
    <span class="mt-12 text-xs text-zinc-500">Handpicked with ❤️ for you</span>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "Home",
  description:
    "Discover our exclusive selection of products designed to elevate your digital experience.",
});
</script>
