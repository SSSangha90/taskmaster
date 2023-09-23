<template>
  <div class="sidebar">
    <h1>Task List</h1>
    <input v-model="search" type="text" />
    <div class="menu">
      <div
        class="menu-option"
        v-for="item in filteredTasks"
        :key="item.id"
        @click="selected(item.id)"
      >
        <h4>{{ item.name }}</h4>
        <p>{{ item.subHeading }}</p>
      </div>
    </div>
  </div>
  <MainPanel :id="id" />
</template>

<script>
import TASK_COLLECTION from "../../backend/mocks/tasksCollection";
import MainPanel from "./MainPanel.vue";

// `GET /tasks` endpoint on intial load
const tasks = TASK_COLLECTION.tasks;

export default {
  name: "SideBar",
  props: {},
  data() {
    return {
      tasks: tasks,
      search: "",
      id: 1,
    };
  },
  methods: {
    // Get Task by ID
    selected: function (id) {
      this.id = id;
    },
  },
  computed: {
    filteredTasks() {
      return this.tasks.filter((task) => {
        return task.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  components: { MainPanel },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebar {
  position: absolute;
  left: 0;
  height: 100vh;
  width: 30%;
  border-right: 0.5px solid #000;
}

.menu {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;
  margin-left: 2rem;
}

.menu-option {
  border-bottom: 1px solid grey;
  margin: 0 1.5rem 0 0;
  cursor: pointer;
}

.menu-option:hover {
  background-color: rgba(144, 214, 232, 0.2);
}

h1 {
  text-align: left;
  margin-left: 1.5rem;
}

h4 {
  margin-bottom: 0.25rem;
}

p {
  margin-top: 0.25rem;
}

input {
  width: 90%;
  padding: 0.5rem;
}
</style>
