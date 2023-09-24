<template>
  <div class="identity-validation">
    <div>
      <h2>Identity Validation</h2>
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
          <label for="firstname">First Name</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            v-model="firstName"
          />
        </div>
        <div>
          <label for="middlename">Middle Name</label>
          <input
            type="text"
            name="middlename"
            id="middlename"
            v-model="middleName"
          />
        </div>
        <div>
          <label for="lastname">Last Name</label>
          <input type="text" name="lastname" id="lastname" v-model="lastName" />
        </div>
        <div>
          <label>Identity Document</label>
          <input type="file" />
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
  name: "IdentityValidaton",
  data() {
    return {
      errors: [],
      firstName: null,
      middleName: null,
      lastName: null,
    };
  },
  methods: {
    checkForm: function (e) {
      this.errors = [];
      if (
        !this.firstName ||
        this.firstName.length < 3 ||
        this.firstName.length > 50
      ) {
        this.errors.push("First name must be between 3 and 50 characters.");
      }

      if (
        !this.lastName ||
        this.lastName.length < 3 ||
        this.lastName.length > 50
      ) {
        this.errors.push("Last name must be between 3 and 50 characters.");
      }

      if (this.firstName && this.lastName) {
        this.errors = [];
        return true;
      }
      e.preventDefault();
    },
  },
};
</script>
