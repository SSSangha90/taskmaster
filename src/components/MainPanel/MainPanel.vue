<template>
  <div class="mainpanel">
    <div v-if="id === 1">
      <OnBoarding />
    </div>
    <div v-if="id === 2">
      <IdentityValidation />
    </div>
    <div v-if="id === 3">
      <AddressValidation />
    </div>
    <div v-if="id === 4">
      <FinancialRecords />
    </div>
  </div>
</template>
<script>
import OnBoarding from "./components/Onboarding.vue";
import IdentityValidation from "./components/IdentityValidation.vue";
import AddressValidation from "./components/AddressValidation.vue";
import FinancialRecords from "./components/FinancialRecords.vue";

export default {
  name: "MainPanel",
  props: {
    id: Number,
  },
  data() {},
  methods: {},
  computed: {},
  components: {
    OnBoarding,
    IdentityValidation,
    AddressValidation,
    FinancialRecords,
  },
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

form {
  border: 1px solid #000;
  width: 50%;
  height: auto;
  margin: 0 auto;
}

form > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
}

input {
  padding: 0.5rem 1rem;
  width: 16rem;
}
</style>
