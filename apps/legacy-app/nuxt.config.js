import { defineNuxtConfig } from "@nuxt/bridge";
// @ts-ignore
import colors from "vuetify/es5/util/colors";

export default defineNuxtConfig({
  modules: ["@nuxtjs/vuetify", "@nuxtjs/tailwindcss", "@nuxt/typescript-build"],

  bridge: {
    // @ts-ignore
    bridge: true,
    typescript: true,
    capi: true,
    meta: true,
    nitro: true,
  },

  build: {
    quiet: false,
    // transpile: ["node-fetch"],
    // @ts-ignore
    extend(config) {
      config.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      });

      config.module?.rules.push({
        test: /\.[cm]?js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            compact: true,
          },
        },
      });
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
});
