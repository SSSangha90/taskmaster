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
  border: 1px solid #003da0;
  width: 100%;
  height: auto;
  margin: 0 auto;
  background-color: rgba(81, 160, 224, 0.2);
  color: #003da0;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

form > div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  width: 45%;
}

input {
  width: 100%;
  padding: 12px 20px;
  margin: 0;
  display: inline-block;
  border: 1px solid #003da0;
  border-radius: 4px;
  box-sizing: border-box;
}

@media screen and (max-width: 540px) {
  .mainpanel {
    position: relative;
    left: 0;
  }

  form {
    justify-content: center;

    > div {
      width: 100% !important;
    }
  }
}
</style>
