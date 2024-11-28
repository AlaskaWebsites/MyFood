// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-28",
  devtools: { enabled: false },
  runtimeConfig: {
    public: {},
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css",
        },
      ],
    },
  },
  css: ["~/assets/styles/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/styles/abstracts/_mixins.scss" as *;
            @use "@/assets/styles/abstracts/_variables.scss" as *;
          `,
          api: "modern-compiler",
        },
      },
    },
  },
  alias: {
    "@Components": "./components",
    "@assets": "./assets",
  },
  modules: ["@nuxt/image", "@pinia/nuxt"],
});
