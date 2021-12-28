<template>
  <v-container fluid>
    <div>
      <h3 class="secondary--text">Contact</h3>
      <br />
      <p>You can get ahold of me through any of these channels.</p>
      <div class="contact-buttons">
        <v-btn
          text
          tile
          href="https://github.com/nwoodr94"
          target="_blank"
          draggable="false"
          ><v-icon>mdi-github</v-icon> Review my work on <br />
          GitHub</v-btn
        >
        <v-btn
          text
          tile
          href="https://www.instagram.com/hipsterphysicist/"
          target="_blank"
          draggable="false"
          ><v-icon>mdi-instagram</v-icon> Follow me on <br />
          Instagram</v-btn
        >
        <v-btn
          text
          tile
          href="https://www.linkedin.com/in/nwoodr94/"
          target="_blank"
          draggable="false"
        >
          <v-icon>mdi-linkedin</v-icon> Join my network on <br />
          LinkedIn</v-btn
        >
        <v-btn
          text
          tile
          href="https://www.churchofjesuschrist.org/comeuntochrist/believe/book-of-mormon"
          target="_blank"
          draggable="false"
        >
          <v-icon>mdi-beehive-outline</v-icon> Become a disciple of <br />Jesus
          Christ</v-btn
        >
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Contact",
  data: () => ({
    //
  }),
};
</script>

<style scoped>
.contact-buttons {
  width: min-content;
  margin: 0 auto;
}
.v-btn {
  width: 100%;
  padding: 0 !important;
  overflow: hidden;
}
::v-deep .v-btn__content {
  justify-content: start;
}
i {
  margin: 1rem;
}
</style>