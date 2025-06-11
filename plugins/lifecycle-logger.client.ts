import { defineNuxtPlugin } from "nuxt/app";
import { useRoute } from "vue-router";

export default defineNuxtPlugin({
  name: "lifecycle-logger-client",
  enforce: "pre",
  async setup(nuxtApp) {
    const route = useRoute();

    nuxtApp.hook("app:created", () => {
      console.log("[CLIENT] App created");
    });
    nuxtApp.hook("app:mounted", () => {
      console.log(`[CLIENT] App mounted`);
    });
    nuxtApp.hook("page:start", () => {
      console.log(`[CLIENT] Page '${route.path}' starts loading`);
    });
    nuxtApp.hook("page:loading:end", () => {
      console.log(`[CLIENT] Page '${route.path}' finished loading`);
    });
  },
});
