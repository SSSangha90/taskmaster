<template>
  <div class="financial-records">
    <div>
      <h2>Financial Records</h2>
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
      <form @submit="checkForm">
        <div>
          <label for="bank">Bank Name</label>
          <input type="text" name="bank" id="bank" v-model="bank" />
        </div>
        <div>
          <label for="address1">Bank Address 1</label>
          <input type="text" name="address1" id="address1" v-model="address1" />
        </div>
        <div>
          <label for="address2">Bank Address 2</label>
          <input type="text" name="address2" id="address2" v-model="address2" />
        </div>
        <div>
          <label for="city">Bank City</label>
          <input type="text" name="city" id="city" v-model="city" />
        </div>
        <div>
          <label for="country">Bank Country</label>
          <input type="text" name="country" id="country" v-model="country" />
        </div>
        <div>
          <label for="proof">Proof of Bank Address</label>
          <input type="file" name="proof" id="proof" />
        </div>
        <div>
          <input type="submit" class="submit-btn" value="Submit" />
        </div>
        <div v-if="errors.length" class="error-list">
          <b>Please correct the following:</b>
          <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "FinancialRecords",
  data() {
    return {
      errors: [],
      bank: null,
      address1: null,
      address2: null,
      city: null,
      country: null,
      proof: null,
    };
  },
  methods: {
    checkForm: function (e) {
      this.errors = [];
      if (!this.bank || this.bank.length < 3 || this.bank.length > 100) {
        this.errors.push("Bank name must be between 3 and 100 characters.");
      }

      if (
        !this.address1 ||
        this.address1.length < 3 ||
        this.address1.length > 100
      ) {
        this.errors.push(
          "Address Line 1 must be between 3 and 100 characters."
        );
      }

      if (!this.city || this.city.length < 3 || this.city.length > 100) {
        this.errors.push("City must be between 3 and 100 characters.");
      }

      if (
        !this.country ||
        this.country.length < 3 ||
        this.country.length > 100
      ) {
        this.errors.push("Country must be between 3 and 100 characters.");
      }

      if (this.bank && this.address1 && this.city && this.country) {
        this.errors = [];
        return true;
      }
      e.preventDefault();
    },
  },
};
</script>
