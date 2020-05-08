<template>
  <h1>
    <slot />
  </h1>
</template>

<script>
export default {
  name: "H1",
  props: {}
};
</script>

<style lang="scss" scoped>
h1 {
  font-family: "Open Sans", sans-serif;
  font-weight: 800;
  font-size: 62px;
  line-height: 1.15;
  margin-bottom: 10px;
  text-transform: uppercase;
  @media only screen and (max-width: 550px) {
    font-size: 48px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 32px;
  }
}
</style>
