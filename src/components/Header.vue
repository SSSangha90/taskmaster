<template>
  <header><img src="../../assets/logo.png" /></header>
</template>

<script>
import logo from "../../assets/logo.png";
export default {
  name: "HeaderComponent",
  components: logo,
};
</script>

<style scoped>
header {
  height: 5rem;
  background-color: #003da0;
}

img {
  width: 8rem;
  height: auto;
  position: absolute;
  left: 1rem;
  top: 0.25rem;
}
</style>
