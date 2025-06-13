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
definePageMeta({
  title: "Products",
  description: "Find unique items handpicked just for you.",
});

const { categoriesList, selectedCategory, filteredProducts } = useProducts();
</script>
