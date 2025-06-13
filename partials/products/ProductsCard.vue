<template>
  <Card
    class="bg-zinc-900 text-zinc-100 shadow-2xl border border-zinc-700 rounded-3xl overflow-hidden transition-transform hover:scale-[1.03] hover:shadow-pink-600/50 duration-300 min-w-[300px]"
  >
    <CardHeader class="p-5 border-b border-zinc-800">
      <CardTitle class="text-2xl font-bold truncate" :title="product.title">
        {{ product.title }}
      </CardTitle>
      <CardDescription class="text-lg font-semibold text-pink-400">
        $ {{ product.price.toFixed(2) }}
      </CardDescription>
    </CardHeader>

    <CardContent class="p-0">
      <NuxtImg
        v-if="product.images && product.images.length > 0"
        :src="product.images[0]"
        alt="Product image"
        class="w-full h-64 object-cover"
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        loading="lazy"
      />
      <div
        v-else
        class="w-full h-64 bg-zinc-700 flex items-center justify-center text-zinc-400 italic"
      >
        No Image Available
      </div>
    </CardContent>

    <CardFooter class="p-5 border-t border-zinc-800">
      <Button
        @click="
          () => {
            addToCart(product);
            toast.success(`${product.title} has been added to your cart`, {
              action: {
                label: 'View Cart',
                onClick: () => {
                  router.push('/cart');
                },
              },
              style: {
                border: '1px solid #27272a',
              },
            });
          }
        "
      >
        Add to Cart
      </Button>
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
import { toast } from "vue-sonner";

const router = useRouter();

const { product } = defineProps<{
  product: Product;
}>();

const { addToCart } = useCartStore();
</script>
