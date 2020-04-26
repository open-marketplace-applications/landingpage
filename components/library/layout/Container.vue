<template>
  <div :class="'container ' + size">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Container",
  props: {
    size: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  max-width: 1200px;
  margin: 100px auto;
  &.fluid {
    max-width: 100%;
    margin: 0px;
  }
  &.sm {
    max-width: 900px;
  }
  &.xs {
    max-width: 600px;
  }
  @media only screen and (max-width: 1240px) {
    padding: 0 20px;
  }
}
</style>
