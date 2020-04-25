<template>
  <div :class="'section ' + bg">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Section",
  props: {
    bg: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.section {
  width: 100%;
  padding: 50px;
  &.primary {
    background-color: var(--primary);
  }
  &.darker {
    background-color: var(--darker);
  }
  &.dark {
    background-color: var(--dark);
  }
  &.light {
    background-color: var(--light);
  }
  &.white {
    background-color: var(--white);
  }
  &.gradient-dark {
    background-image: var(--gradient-dark);
  }
}
</style>
