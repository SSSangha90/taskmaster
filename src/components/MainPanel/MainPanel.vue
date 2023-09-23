<template>
  <div class="mainpanel">
    <div v-if="id === 1">
      <OnBoarding />
    </div>
    <div v-if="id === 2">
      <IdentityValidation />
    </div>
    <div v-if="id === 3">Address</div>
    <div v-if="id === 4">Finance</div>
  </div>
</template>
<script>
import OnBoarding from "./components/Onboarding.vue";
import IdentityValidation from "./components/IdentityValidation.vue";

export default {
  name: "MainPanel",
  props: {
    id: Number,
  },
  data() {},
  methods: {},
  computed: {},
  components: { OnBoarding, IdentityValidation },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.mainpanel {
  position: absolute;
  left: 30%;
  padding: 1rem 2rem;
}

p {
  margin: 2rem 0;
}
</style>
