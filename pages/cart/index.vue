<template>
  <div class="flex flex-col p-8 bg-zinc-900">
    <h1 class="text-3xl font-bold mb-6">Your Shopping Cart</h1>
    <div v-if="cartStore.cart.length === 0" class="text-zinc-400">
      Your cart is empty.
    </div>
    <div v-else>
      <CartProductCard />
      <div
        class="flex justify-between items-center mt-4 text-lg font-bold mb-6"
      >
        <span>Total</span>
        <span>$ {{ cartStore.total }}</span>
      </div>
      <NuxtLink to="/checkout">
        <Button> Checkout </Button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "Cart",
  description: "Your favorite picks are ready — review and checkout now!",
});

const cartStore = useCartStore();
</script>
