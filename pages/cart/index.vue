<template>
  <div class="p-8 bg-zinc-900 min-h-screen text-white flex flex-col">
    <h1 class="text-3xl font-bold mb-6">Your Shopping Cart</h1>
    <div v-if="cartStore.cart.length === 0" class="text-zinc-400">
      Your cart is empty.
    </div>
    <div v-else class="space-y-4">
      <div
        v-for="item in cartStore.cart"
        :key="item.id"
        class="flex justify-between items-center border-b border-zinc-700 pb-4"
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
            @click="cartStore.removeFromCart(item.id)"
            class="text-red-400 text-sm hover:underline cursor-pointer p-0"
          >
            Remove
          </Button>
        </div>
      </div>
      <span class="mt-6 text-lg font-bold">Total: $ {{ cartStore.total }}</span>
      <NuxtLink to="/checkout">
        <Button
          class="w-full bg-pink-500 hover:bg-pink-600 text-white rounded-lg px-4 py-2 font-semibold transition mt-6"
        >
          Checkout
        </Button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const cartStore = useCartStore();
</script>
