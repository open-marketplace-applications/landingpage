<template>
  <Page>
    <h1>Styleguide</h1>
    <p>
      Here you can find all components available in
      open-marketplace/landing-page
    </p>
    <hr />
    <h2>Button</h2>
    <div>
      <Button>Nothing</Button>
      <Button v-bind:type="'default'">Default</Button>
      <Button v-bind:type="'primary'">Primary</Button>
      <Button v-bind:type="'darker'">Darker</Button>
      <Button v-bind:type="'dark'">Dark</Button>
      <Button v-bind:type="'light'">Light</Button>
      <Button v-bind:type="'white'">White</Button>
    </div>
  </Page>
</template>

<script>
import Page from "../components/library/layout/Page";
import Button from "../components/library/Button";

export default {
  components: { Page, Button }
};
</script>

<style></style>
