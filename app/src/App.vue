<template>
  <v-app>
    <v-app-bar color="primary" app>
      <h2>Nathan Woodruff</h2>

      <v-spacer></v-spacer>

      <v-switch v-model="lights" v-on:click="theme"></v-switch>
      <v-btn href="https://github.com/nwoodr94" target="_blank" text>
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>

    <v-footer color="primary" app sticky>
      <p>Developed by Nathan Woodruff</p>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    lights: true,
  }),
  methods: {
    theme() {
      if (this.lights) {
        this.$vuetify.theme.light = true;
        this.$vuetify.theme.dark = false;
      } else {
        this.$vuetify.theme.light = false;
        this.$vuetify.theme.dark = true;
      }
    },
  },
};
</script>

<style scoped>
.v-footer p {
  margin: 0 auto;
  font-size: 0.6rem;
}
.v-input {
  height: 45%;
}
</style>