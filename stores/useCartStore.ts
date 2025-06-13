export const useCartStore = defineStore("cart", () => {
  const cart = ref<CartProduct[]>([]);

  if (import.meta.client) {
    const stored = localStorage.getItem("cart");
    cart.value = stored ? JSON.parse(stored) : [];
  }

  watch(cart, () => {
    localStorage.setItem("cart", JSON.stringify(cart.value));
  });

  const addToCart = (product: Product) => {
    const item = cart.value.find((p) => p.id === product.id);
    if (item) {
      item.quantity++;
    } else {
      cart.value.push({ ...product, quantity: 1 });
    }
  };

  const removeFromCart = (productId: number) => {
    cart.value = cart.value.filter((p) => p.id !== productId);
  };

  const clearCart = () => {
    cart.value = [];
  };

  const total = computed(() =>
    cart.value.reduce((sum, p) => sum + p.price * p.quantity, 0)
  );

  return {
    cart,
    total,
    addToCart,
    removeFromCart,
    clearCart,
  };
});
