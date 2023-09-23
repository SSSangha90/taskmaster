<template>
  <div class="address-validation">
    <div>
      <h2>Address Validation</h2>
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
          <Label>Address Line 1</Label>
          <Input type="text" />
        </div>
        <div>
          <Label>Address Line 2</Label>
          <Input type="text" />
        </div>
        <div>
          <Label>City</Label>
          <Input type="text" />
        </div>
        <div>
          <Label>County</Label>
          <Input type="text" />
        </div>
        <div>
          <Label>Proof of Address</Label>
          <Input type="file" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddressValidaton",
};
</script>
