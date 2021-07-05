<template>
  <v-container fill-height fluid>
    <v-row>
      <v-col class="d-flex justify-center">
        <v-card class="card" elevation="8">
          <v-card-title class="d-flex justify-center">
            <h3 color="secondary">Welcome</h3>
          </v-card-title>

          <v-card-subtitle>
            Hi, I'm Nathan, a software engineer based in Idaho Falls
            <span role="img" aria-label="palm tree">{{
              String.fromCodePoint(0x1f3de)
            }}</span>
          </v-card-subtitle>

          <v-card-actions>
            <v-container>
              <v-row no-gutters>
                <v-col>
                  <v-btn small text tile plain link to="home" draggable="false">
                    Home
                  </v-btn>
                </v-col>
                <v-col>
                  <v-btn
                    small
                    text
                    tile
                    plain
                    link
                    to="about"
                    draggable="false"
                  >
                    About
                  </v-btn>
                </v-col>
                <v-col>
                  <v-btn small text tile plain link to="work" draggable="false">
                    Work
                  </v-btn>
                </v-col>
                <v-col>
                  <v-btn
                    small
                    text
                    tile
                    plain
                    link
                    to="contact"
                    draggable="false"
                  >
                    Contact
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card-actions>

          <v-card-text class="content" width="30%">
            <router-view></router-view>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Nathan",
  data: () => ({
    //
  }),
};
</script>

<style scoped>
.card {
  top: 5vh;
  display: flex;
  flex-direction: column;

  height: 80vh;
  max-height: 500px;

  position: absolute;

  width: 80vw;
  min-width: 300px;
  max-width: 420px;

  bottom: 5vh;
}
a {
  padding: 0 !important;
}
.content {
  position: sticky;
  overflow-y: auto;
}
</style>