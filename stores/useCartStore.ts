export const useCartStore = defineStore("cart", () => {
  const cart = ref<CartProduct[]>([]);

  const loadCart = () => {
    const stored = localStorage.getItem("cart");
    if (stored) {
      return JSON.parse(stored);
    }
    return cart.value;
  };

  const addToCart = (product: Product) => {
    const item = cart.value.find((p: CartProduct) => p.id === product.id);
    if (item) {
      item.quantity += 1;
    } else {
      cart.value.push({ ...product, quantity: 1 });
    }
  };

  const removeFromCart = (productId: number) => {
    cart.value = cart.value.filter((p: CartProduct) => p.id !== productId);
  };

  const clearCart = () => {
    cart.value = [];
  };

  const total = computed(() =>
    cart.value.reduce(
      (sum: number, p: CartProduct) => sum + p.price * p.quantity,
      0
    )
  );

  watch(cart, (state) => localStorage.setItem("cart", JSON.stringify(state)));

  return {
    cart,
    total,
    loadCart,
    addToCart,
    removeFromCart,
    clearCart,
  };
});

export interface CartProduct extends Product {
  quantity: number;
}
