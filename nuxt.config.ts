import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  plugins: [],
  // ssr: false,
  modules: ["@nuxt/content"],
  runtimeConfig: {
    // The private keys which are only available within server-side
    // NUXT_SERVER_VAR in .env
    SERVER_VAR: "",
    // Keys within public, will be also exposed to the client-side
    public: {
      // NUXT_PUBLIC_CLIENT_VAR in .env
      CLIENT_VAR: "",
    },
  },
  css: ["~/assets/css/tailwind.css"],
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
});
