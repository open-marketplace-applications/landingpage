<template>
  <div
    :class="
      'col col-' +
        width +
        ' justify-' +
        justify +
        ' align-' +
        align +
        ' col-xs-' +
        xs +
        ' col-sm-' +
        sm +
        ' col-md-' +
        md +
        ' col-lg-' +
        lg
    "
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "Column",
  props: {
    width: {
      type: Number,
      default: 0
    },
    xs: {
      type: Number,
      default: 0
    },
    sm: {
      type: Number,
      default: 0
    },
    md: {
      type: Number,
      default: 0
    },
    lg: {
      type: Number,
      default: 0
    },
    justify: {
      type: String,
      default: "flex-start"
    },
    align: {
      type: String,
      default: "flex-start"
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
  &.justify-center {
    justify-content: center;
  }
  &.align-center {
    align-items: center;
  }
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

  @media only screen and (max-width: 1200px) {
    &-lg-1 {
      width: calc(100% * (1 / 12) - 30px);
    }
    &-lg-2 {
      width: calc(100% * (2 / 12) - 30px);
    }
    &-lg-3 {
      width: calc(100% * (3 / 12) - 30px);
    }
    &-lg-4 {
      width: calc(100% * (4 / 12) - 30px);
    }
    &-lg-5 {
      width: calc(100% * (5 / 12) - 30px);
    }
    &-lg-6 {
      width: calc(100% * 0.5 - 30px);
    }
    &-lg-7 {
      width: calc(100% * (7 / 12) - 30px);
    }
    &-lg-8 {
      width: calc(100% * (8 / 12) - 30px);
    }
    &-lg-9 {
      width: calc(100% * (9 / 12) - 30px);
    }
    &-lg-10 {
      width: calc(100% * (10 / 12) - 30px);
    }
    &-lg-11 {
      width: calc(100% * (11 / 12)) - 30px;
    }
    &-lg-12 {
      width: 100%;
    }
  }

  @media only screen and (max-width: 920px) {
    &-md-1 {
      width: calc(100% * (1 / 12) - 30px);
    }
    &-md-2 {
      width: calc(100% * (2 / 12) - 30px);
    }
    &-md-3 {
      width: calc(100% * (3 / 12) - 30px);
    }
    &-md-4 {
      width: calc(100% * (4 / 12) - 30px);
    }
    &-md-5 {
      width: calc(100% * (5 / 12) - 30px);
    }
    &-md-6 {
      width: calc(100% * 0.5 - 30px);
    }
    &-md-7 {
      width: calc(100% * (7 / 12) - 30px);
    }
    &-md-8 {
      width: calc(100% * (8 / 12) - 30px);
    }
    &-md-9 {
      width: calc(100% * (9 / 12) - 30px);
    }
    &-md-10 {
      width: calc(100% * (10 / 12) - 30px);
    }
    &-md-11 {
      width: calc(100% * (11 / 12)) - 30px;
    }
    &-md-12 {
      width: 100%;
    }
  }

  @media only screen and (max-width: 720px) {
    &-sm-1 {
      width: calc(100% * (1 / 12) - 30px);
    }
    &-sm-2 {
      width: calc(100% * (2 / 12) - 30px);
    }
    &-sm-3 {
      width: calc(100% * (3 / 12) - 30px);
    }
    &-sm-4 {
      width: calc(100% * (4 / 12) - 30px);
    }
    &-sm-5 {
      width: calc(100% * (5 / 12) - 30px);
    }
    &-sm-6 {
      width: calc(100% * 0.5 - 30px);
    }
    &-sm-7 {
      width: calc(100% * (7 / 12) - 30px);
    }
    &-sm-8 {
      width: calc(100% * (8 / 12) - 30px);
    }
    &-sm-9 {
      width: calc(100% * (9 / 12) - 30px);
    }
    &-sm-10 {
      width: calc(100% * (10 / 12) - 30px);
    }
    &-sm-11 {
      width: calc(100% * (11 / 12)) - 30px;
    }
    &-sm-12 {
      width: 100%;
    }
  }

  @media only screen and (max-width: 480px) {
    &-xs-1 {
      width: calc(100% * (1 / 12) - 30px);
    }
    &-xs-2 {
      width: calc(100% * (2 / 12) - 30px);
    }
    &-xs-3 {
      width: calc(100% * (3 / 12) - 30px);
    }
    &-xs-4 {
      width: calc(100% * (4 / 12) - 30px);
    }
    &-xs-5 {
      width: calc(100% * (5 / 12) - 30px);
    }
    &-xs-6 {
      width: calc(100% * 0.5 - 30px);
    }
    &-xs-7 {
      width: calc(100% * (7 / 12) - 30px);
    }
    &-xs-8 {
      width: calc(100% * (8 / 12) - 30px);
    }
    &-xs-9 {
      width: calc(100% * (9 / 12) - 30px);
    }
    &-xs-10 {
      width: calc(100% * (10 / 12) - 30px);
    }
    &-xs-11 {
      width: calc(100% * (11 / 12)) - 30px;
    }
    &-xs-12 {
      width: 100%;
    }
  }
}
</style>
