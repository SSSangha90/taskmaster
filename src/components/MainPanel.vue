<template>
  <div class="mainpanel">
    <div v-if="id === 1">
      <h2>Onborading Introduction</h2>
      <p>
        In this onborading you are required to fill out each task and confirm
        that the information is correct.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
    <div v-if="id === 2">Identity</div>
    <div v-if="id === 3">Address</div>
    <div v-if="id === 4">Finance</div>
  </div>
</template>
<script>
export default {
  name: "MainPanel",
  props: {
    id: Number,
  },
  data() {},
  methods: {},
  computed: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainpanel {
  position: absolute;
  left: 30%;
  padding: 1rem 2rem;
}

p {
  margin: 2rem 0;
}
</style>
