<template>
  <div class="section">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Section",
  props: {}
};
</script>

<style lang="scss" scoped>
.section {
  background-color: var(--darker);
  padding: 50px;
}
</style>
