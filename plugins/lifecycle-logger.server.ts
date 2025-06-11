import { defineNuxtPlugin } from "nuxt/app";

export default defineNuxtPlugin({
  name: "lifecycle-logger-server",
  enforce: "pre",
  async setup(nuxtApp) {
    nuxtApp.hook("app:created", () => {
      console.log("[SERVER] App created");
    });
  },
});
