<template>
  <button v-bind:class="'btn btn-' + type">
    <slot />
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: ""
    }
  },
  methods: {
    onClick() {
      this.$emit("click!");
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  font-size: 14px;
  font-weight: var(--weight-bold);
  padding: 16px 32px;
  height: auto;
  margin-top: 30px;
  outline: none;
  border: none;
  text-decoration: none;
  border-radius: 50px;
  transition: var(--transition);
  text-decoration: none;
  cursor: pointer;

  &:hover {
    filter: brightness(90%);
  }

  &-dark,
  &-darker,
  &-primary {
    color: var(--white);
  }

  &-white,
  &-light {
    color: var(--dark);
  }

  &-primary {
    background-color: var(--primary);
  }

  &-secondary {
    background-color: var(--secondary);
  }

  &-darker {
    background-color: var(--darker);
  }

  &-dark {
    background-color: var(--dark);
  }

  &-light {
    background-color: var(--light);
  }

  &-white {
    background-color: var(--white);
  }
}
</style>
