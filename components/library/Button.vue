<template>
  <div>
    <button v-if="href === null" @click="clicked" :class="'btn btn-' + type">
      <slot />
    </button>
    <a
      v-if="href !== null"
      :href="href"
      :class="'btn btn-' + type"
      :target="target"
    >
      <slot />
    </a>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: ""
    },
    href: {
      type: String,
      default: null
    },
    target: {
      type: String,
      default: ""
    }
  },
  methods: {
    clicked() {
      this.$emit("clicked");
    }
  }
};
</script>

<style lang="scss" scoped>
.btn,
a.btn {
  font-size: 14px;
  font-weight: var(--weight-bold);
  padding: 14px 32px;
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
    color: var(--white-fix);
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
