import { defineNuxtConfig } from "@nuxt/bridge";
// import colors from "vuetify/es5/util/colors";

export default defineNuxtConfig({
  modules: ["@nuxtjs/vuetify", "@nuxtjs/tailwindcss", "@nuxt/typescript-build"],

  bridge: false,

  build: {
    // @ts-ignore
    extend(config) {
      config.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      });
    },

    loaders: {
      vue: {
        // @ts-ignore
        compiler: require("vue-template-babel-compiler"),
      },
    },

    babel: {
      plugins: ["@babel/plugin-proposal-optional-chaining"],
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  /*
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
  */
});
