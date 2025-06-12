<template>
  <div class="min-h-screen flex flex-col items-center justify-center text-center">
    <h1
      class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
    >
      Local Solutions IT
    </h1>
    <p class="text-zinc-400 max-w-xl mt-4">
      Discover our exclusive products handpicked just for you.
    </p>
    <NuxtLink to="/products">
      <Button
        class="mt-6 px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-2xl shadow-lg transition duration-300"
      >
        Explore Products
      </Button>
    </NuxtLink>
  </div>
</template>

<script setup></script>
