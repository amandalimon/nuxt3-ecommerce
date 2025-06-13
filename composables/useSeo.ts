export const useSeo = () => {
  if (import.meta.server) {
    useSeoMeta({
      title: "Setubal Finds",
      ogTitle: "Setubal Finds",
      ogType: "website",
      description:
        "Discover our exclusive selection of products designed to elevate your digital experience.",
      ogDescription:
        "Discover our exclusive selection of products designed to elevate your digital experience.",
      charset: "utf-8",
      applicationName: "Setubal Finds",
      author: "Amanda Limón",
      creator: "Amanda Limón",
      viewport: "width=device-width, initial-scale=1.0",
      colorScheme: "light dark",
      themeColor: "#000000",
      robots: "index, follow",
    });
  }

  const route = useRoute();

  useSeoMeta({
    title: () => `${route.meta.title} - Setubal Finds`,
    ogTitle: () => `${route.meta.title} - Setubal Finds`,
    description: () => `${route.meta.description}`,
    ogDescription: () => `${route.meta.description}`,
  });
};
