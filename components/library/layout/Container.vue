<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Container",
  props: {}
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
