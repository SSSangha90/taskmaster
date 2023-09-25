<template>
  <HeaderComponent />
  <TasksPage />
</template>

<script>
import TasksPage from "./components/TasksPage";
import HeaderComponent from "./components/Header.vue";

export default {
  name: "App",
  components: {
    TasksPage,
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
