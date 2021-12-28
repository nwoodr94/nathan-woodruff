<template>
  <v-container fluid>
    <v-row>
      <v-col class="d-flex justify-center">
        <v-card class="card">
          <v-card-title
            class="d-flex justify-center"
            style="padding: 1rem 0 0 0"
          >
            <transition name="fade1" appear>
              <h3 color="secondary">Hi,&nbsp;</h3>
            </transition>
            <transition name="fade2" appear style="transition-delay: 2s">
              <h3 color="secondary">I'm Nathan</h3>
            </transition>
          </v-card-title>
          <br />
          <v-card-subtitle
            class="text-center"
            style="padding: 0 1rem 1rem 1rem"
          >
            I'm a software engineer based in Idaho Falls
            <span role="img" aria-label="palm tree">{{
              String.fromCodePoint(0x1f3de)
            }}</span>
          </v-card-subtitle>

          <v-card-actions class="justify-space-between" style="margin: 0 auto">
            <v-btn x-small text tile plain link to="home" draggable="false">
              Home
            </v-btn>
            <v-btn x-small text tile plain link to="about" draggable="false">
              About
            </v-btn>
            <v-btn x-small text tile plain link to="work" draggable="false">
              Work
            </v-btn>
            <v-btn x-small text tile plain link to="research" draggable="false">
              Research
            </v-btn>
            <v-btn x-small text tile plain link to="contact" draggable="false">
              Contact
            </v-btn>
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
.fade1-enter-active,
.fade1-leave-active {
  transition: opacity 3s ease-out;
}

.fade1-enter,
.fade1-leave-to {
  opacity: 0;
}

.fade2-enter-active,
.fade2-leave-active {
  transition: opacity 3s ease-out;
  transition-delay: 1s;
}

.fade2-enter,
.fade2-leave-to {
  opacity: 0;
}

.card {
  top: 1.5vh;
  display: flex;
  flex-direction: column;

  height: 85vh;

  position: absolute;

  width: 85vw;

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