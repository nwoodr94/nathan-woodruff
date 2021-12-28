<template>
  <v-container fluid>
    <h3 class="secondary--text">About Me</h3>
    <br />
    <p>
      I'm into science, fitness, nature, and I'm very involved with my church.
      <br />
      Originally from the Pacific Northwest, I graduated from the University of
      Washington in 2017 with a Bachelor's degree in Applied Physics.
      <br />
      I first learned to code as an undergraduate researcher, programming
      microcontrollers on sounding rockets. I was interested in plotting flight
      trajectories, and in learning about sensors like accelerometers and
      gyroscopes,
      <a href="https://github.com/nwoodr94/cpp-projects" target="_blank"
        >my first language was C.</a
      >
      <br />
      Before becoming an engineer, I spent two years turning wrenches on the
      outskirts of Austin, TX for a semiconductor tooling manufacturer.
      <br />
    </p>
    <br />
    <div>
      <v-img src="../../public/nathan.jpg"></v-img>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "About",
  data: () => ({
    //
  }),
};
</script>

<style scoped>
a {
  color: inherit !important;
}
</style>
