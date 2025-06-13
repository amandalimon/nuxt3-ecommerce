<template>
  <main
    class="min-h-[100dvh] bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-800 text-white flex flex-col"
  >
    <nav
      class="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur border-b border-zinc-800 shadow-sm"
    >
      <div
        class="max-w-5xl mx-auto px-6 py-4 flex items-center justify-center gap-6 text-sm font-semibold text-zinc-300"
      >
        <NuxtLink to="/" class="hover:text-pink-400 transition">
          Home
        </NuxtLink>
        <NuxtLink to="/products" class="hover:text-pink-400 transition">
          Products
        </NuxtLink>
        <NuxtLink to="/cart" class="hover:text-pink-400 transition">
          Cart
        </NuxtLink>
      </div>
    </nav>

    <div class="flex-1 px-6 py-10 max-w-5xl mx-auto w-full flex flex-col">
      <slot />
    </div>
  </main>
</template>

<script setup lang="ts">
useSeo();
</script>
