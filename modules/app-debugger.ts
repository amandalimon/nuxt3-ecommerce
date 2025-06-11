import { defineNuxtModule, addPlugin, createResolver } from "@nuxt/kit";

export default defineNuxtModule({
  meta: {
    name: "app-debugger",
    configKey: "appDebugger",
    compatibility: {
      nuxt: ">=3.0.0",
    },
  },
  defaults: {},
  hooks: {},
  setup(_, nuxt) {
    nuxt.hook("pages:extend", (pages) => {
      console.log(`Discovered ${pages.length} pages`);
    });

    nuxt.hook("pages:resolved", () => {
      const { resolve } = createResolver(import.meta.url);

      addPlugin({
        src: resolve("../plugins/lifecycle-logger.client.ts"),
        mode: "client",
      });
      addPlugin({
        src: resolve("../plugins/lifecycle-logger.server.ts"),
        mode: "server",
      });
    });
  },
});
