<template>
  <h2>
    <slot />
  </h2>
</template>

<script>
export default {
  name: "H2",
  props: {}
};
</script>

<style lang="scss" scoped>
h2 {
  font-family: "Open Sans", sans-serif;
  font-weight: 800;
  font-size: 48px;
  line-height: 1.15;
  margin-bottom: 10px;
  text-transform: uppercase;
  @media only screen and (max-width: 550px) {
    font-size: 32px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 26px;
  }
}
</style>
