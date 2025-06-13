<template>
  <main class="flex flex-col space-y-4">
    <h1
      class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
    >
      Setubal Finds.
    </h1>
    <p class="text-zinc-400 max-w-xl">
      Discover our exclusive products handpicked just for you.
    </p>
    <Select v-model="selectedCategory">
      <SelectTrigger>
        <SelectValue placeholder="Select a category" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem
          v-for="category in categoriesList"
          :key="category"
          :value="category"
        >
          {{ category === "all" ? "All Categories" : category }}
        </SelectItem>
      </SelectContent>
    </Select>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
      <ProductsCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </main>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();

const { data: products, error } = await useFetch<Product[]>(
  `${config.public.apiUrl}/products`
);

const { data: categories } = await useFetch<Category[]>(
  `${config.public.apiUrl}/categories`
);

const categoriesList = computed(() => {
  if (!categories.value) return ["all"];
  const excluded = [11, 12, 13, 14, 17, 18, 19, 20, 21, 22];
  const filtered = categories.value
    .filter((c) => !excluded.includes(c.id))
    .map((c) => c.name);
  return ["all", ...filtered];
});

const selectedCategory = ref("all");

const filteredProducts = computed(() => {
  if (!products.value) return [];
  if (selectedCategory.value === "all") return products.value;
  return products.value.filter(
    (p) => p.category.name === selectedCategory.value
  );
});
</script>
