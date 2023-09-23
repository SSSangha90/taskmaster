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
      <form>
        <div>
          <Label>First Name</Label>
          <Input type="text" />
        </div>
        <div>
          <Label>Middle Name</Label>
          <Input type="text" />
        </div>
        <div>
          <Label>Last Name</Label>
          <Input type="text" />
        </div>
        <div>
          <Label>Identity Document</Label>
          <Input type="file" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "IdentityValidaton",
};
</script>

<style scoped>
form {
  border: 1px solid #000;
  width: 50%;
  height: 22rem;
  margin: 0 auto;
}

form > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
}
</style>
