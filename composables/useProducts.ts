export const useProducts = () => {
  const config = useRuntimeConfig();

  const { data: products, error: productsError } = useFetch<Product[]>(
    `${config.public.apiUrl}/products`
  );

  const { data: categories, error: categoriesError } = useFetch<Category[]>(
    `${config.public.apiUrl}/categories`
  );

  const categoriesList = computed(() => {
    if (!categories.value) return ["all"];
    return categories.value.map((c) => c.name);
  });

  const selectedCategory = ref("all");

  const filteredProducts = computed(() => {
    if (!products.value) return [];
    if (selectedCategory.value === "all") return products.value;
    return products.value.filter(
      (p) => p.category.name === selectedCategory.value
    );
  });

  return {
    products,
    categories,
    categoriesList,
    selectedCategory,
    filteredProducts,
    productsError,
    categoriesError,
  };
};
