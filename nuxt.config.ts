// https://nuxt.com/docs/api/configuration/nuxt-config
// import {resolve} from "path";


export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    prerender: {
      routes: [
          "/fetch/useLazy"
      ]
    }
  },
  ssr: true,
  // alias: {
  //   "@": resolve(__dirname, "/")
  // },
  css: ["~/assets/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
