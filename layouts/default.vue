<template>
  <main
    class=" bg-red-200  overflow-y-auto flex flex-col gap-8 p-8 bg-gradient-to-b from-zinc-900 to-zinc-800 min-h-screen"
  >
  
    <div
      class="flex gap-4 items-center justify-center text-zinc-400 text-sm font-bold"
    >
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/products">Products</NuxtLink>
      <NuxtLink to="/cart">Cart</NuxtLink>
    </div>
    <slot />
  </main>
</template>

<script setup lang="ts"></script>
