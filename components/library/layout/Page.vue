<template>
  <div class="page">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Page",
  props: {}
};
</script>

<style lang="scss" scoped>
.page {
  background-color: var(--darker);
  color: var(--white);
  min-height: 100vh;
  @media only screen and (max-width: 400px) {
    padding-top: 50px;
  }
}
</style>
