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
      <form>
        <div>
          <Label>Bank Name</Label>
          <Input type="text" />
        </div>
        <div>
          <Label>Bank Address 1</Label>
          <Input type="text" />
        </div>
        <div>
          <Label>Bank Address 2</Label>
          <Input type="text" />
        </div>
        <div>
          <Label>Bank City</Label>
          <Input type="text" />
        </div>
        <div>
          <Label>Bank Country</Label>
          <Input type="text" />
        </div>
        <div>
          <Label>Proof of Bank Address</Label>
          <Input type="file" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "FinancialRecords",
};
</script>
