<template>
  <HeaderComponent />
  <SideBar />
</template>

<script>
import SideBar from "./components/Sidebar";
import HeaderComponent from "./components/Header.vue";

export default {
  name: "App",
  components: {
    SideBar,
    HeaderComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
