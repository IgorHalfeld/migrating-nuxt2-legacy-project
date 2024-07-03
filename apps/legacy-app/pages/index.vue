<script setup>
import Button from "ui/Button/Button.vue";
</script>

<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <NuxtLogo />
        <VuetifyLogo />
      </v-card>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Vuetify + Nuxt.js template

          <Button>Button</Button>
        </v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>
