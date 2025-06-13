<template>
  <div
    v-for="item in cartStore.cart"
    :key="item.id"
    class="flex justify-between items-center border-b border-zinc-700 py-4"
  >
    <div class="flex items-center justify-start gap-4">
      <NuxtImg
        :src="item.images[0]"
        alt="Product image"
        class="w-16 h-16 object-cover"
      />
      <div>
        <h2 class="font-semibold">{{ item.title }}</h2>
        <p class="text-sm text-zinc-400">x{{ item.quantity }}</p>
      </div>
    </div>
    <div class="text-right">
      <p>$ {{ item.price * item.quantity }}</p>
      <Button
        variant="ghost"
        @click="cartStore.removeFromCart(item.id)"
        class="text-red-400 text-sm hover:underline cursor-pointer p-0"
      >
        Remove
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
const cartStore = useCartStore();
</script>
