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
  
  modules: ["@nuxt/ui", "@nuxtjs/tailwindcss", "@pinia/nuxt", // "@nuxtjs/ngrok"
  "@pinia-plugin-persistedstate/nuxt", "@nuxtjs/leaflet"],

 

  pinia: {
    storesDirs: ["./stores/**", "./custom-folder/stores/**"],
  },

  // fontawesome: {
  //   icons: {
  //     solid: ['dollar-sign', 'cog', 'circle', 'check', 'calendar'],
  //     regular: ['user']
  //   }
  // },
  

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

  // ngrok: {
  //   authtoken: '2KcTmf6I5kpG4Huw7bXpWkQb9YK_6JrS29F28zUfLeyc1RQHh', // Use NGROK_AUTHTOKEN environment variable
  //   // authtoken: 'your_ngrok_authtoken', // Or use this option
  //   auth: 'username1:password1',
  //   domain: 'mastodon-willing-osprey.ngrok-free.app',
  //   production: true,
  // },
});