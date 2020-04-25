<template>
  <div :class="'col col-' + width">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Column",
  props: {
    width: {
      type: Number,
      default: 12
    }
  }
};
</script>

<style lang="scss" scoped>
.col {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0 15px 30px;
  &-1 {
    width: calc(100% * (1 / 12) - 30px);
  }
  &-2 {
    width: calc(100% * (2 / 12) - 30px);
  }
  &-3 {
    width: calc(100% * (3 / 12) - 30px);
  }
  &-4 {
    width: calc(100% * (4 / 12) - 30px);
  }
  &-5 {
    width: calc(100% * (5 / 12) - 30px);
  }
  &-6 {
    width: calc(100% * 0.5 - 30px);
  }
  &-7 {
    width: calc(100% * (7 / 12) - 30px);
  }
  &-8 {
    width: calc(100% * (8 / 12) - 30px);
  }
  &-9 {
    width: calc(100% * (9 / 12) - 30px);
  }
  &-10 {
    width: calc(100% * (10 / 12) - 30px);
  }
  &-11 {
    width: calc(100% * (11 / 12)) - 30px;
  }
  &-12 {
    width: 100%;
  }
}
</style>
