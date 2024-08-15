// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },

  css: ["~/assets/css/input.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  router: {
    prefetchLinks: false
  },
  
  modules: [
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  pinia: {
    storesDirs: ["./stores/**", "./custom-folder/stores/**"],
  },

  app: {
    head: {
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.css",
          type: "text/javascript",
          async: true,
        },
      ],
    },
  },

});
