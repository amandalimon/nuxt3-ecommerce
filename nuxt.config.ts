// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", "@nuxt/image"],
  components: [
    {
      path: "~/partials",
      extensions: [".vue"],
    },
    {
      path: "~/components",
      extensions: [".vue"],
    },
  ],
  imports: {
    dirs: ["./types/**"],
  },
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },
});
