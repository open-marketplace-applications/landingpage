<template>
  <p>
    <slot />
  </p>
</template>

<script>
export default {
  name: "P",
  props: {}
};
</script>

<style lang="scss" scoped>
p {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 15px;
}
</style>
