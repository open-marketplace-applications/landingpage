<template>
  <div class="row">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Row",
  props: {}
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
}
</style>
