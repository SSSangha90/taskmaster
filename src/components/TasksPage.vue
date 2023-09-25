<template>
  <div class="wrapper">
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
          <div class="menu-details">
            <h4>{{ item.name }}</h4>
            <p>{{ item.subHeading }}</p>
          </div>
        </div>
      </div>
    </div>
    <MainPanel :id="id" />
  </div>
</template>

<script>
import TASK_COLLECTION from "../../backend/mocks/tasksCollection";
import MainPanel from "./MainPanel/MainPanel.vue";

// `GET /tasks` endpoint on intial load
const tasks = TASK_COLLECTION.tasks;

function selected(id) {
  // Get Task by ID
  this.id = id;
}

function filteredTasks() {
  return this.tasks.filter((task) => {
    return task.name.toLowerCase().includes(this.search.toLowerCase());
  });
}

export default {
  name: "TasksPage",
  props: {},
  data() {
    return {
      tasks: tasks,
      search: "",
      id: 1,
    };
  },
  methods: {
    selected,
  },
  computed: {
    filteredTasks,
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
  width: 100%;
}

.menu-option {
  border-bottom: 1px solid grey;
  cursor: pointer;
  padding-bottom: 0.5rem;
}

.menu-option:first-child {
  padding-top: 0.5rem;
}

.menu-details:hover {
  background-color: rgba(81, 160, 224, 0.2);
  border-radius: 0.5rem;

  > h4 {
    color: #003da0;
  }
}

.menu-details {
  padding: 0.5rem;
  margin: 0 1rem;
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
  width: 85%;
  padding: 0.5rem;
  border: 1px solid #003da0;
}

@media screen and (max-width: 540px) {
  .wrapper {
    display: flex;
    flex-direction: column;
  }

  .sidebar {
    position: relative;
    width: 100%;
    height: auto;
    border-right: none;
  }
}
</style>
