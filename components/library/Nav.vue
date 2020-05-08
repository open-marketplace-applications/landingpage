<template>
  <nav v-bind:class="{ open: navStateOpen }" class="nav">
    <div class="nav__primary">
      <nuxt-link
        to="/"
        class="nav-item nav-item--logo"
        exact-active-class="active"
      >
        <img alt="oma logo" class="logo" src="@/assets/logo.svg" />
      </nuxt-link>
      <div @click="navStateOpen = !navStateOpen" class="mobile-btn">
        <div class="mobile-btn__line"></div>
        <div class="mobile-btn__line"></div>
        <div class="mobile-btn__line"></div>
      </div>
      <div class="menu"></div>
    </div>

    <div class="nav__secondary">
      <div class="nav__meta">
        <div class="socials">
          <div class="socials__item">
            <a href="https://twitter.com/marketplace_org" target="_blank">
              <img src="@/assets/icons/twitter_large.svg" alt />
            </a>
          </div>
          <div class="socials__item">
            <a href="https://discord.gg/XDQQcJC" target="_blank">
              <img src="@/assets/icons/discord_large.svg" alt />
            </a>
          </div>
          <div class="socials__item">
            <a
              href="https://www.youtube.com/channel/UClTOkIEAwmYLV7SRtMKP9gQ"
              target="_blank"
            >
              <img src="@/assets/icons/youtube_large.svg" alt />
            </a>
          </div>
          <div class="socials__item">
            <a
              href="https://medium.com/open-marketplace-applications"
              target="_blank"
            >
              <img src="@/assets/icons/medium.svg" alt />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div v-bind:class="{ open: navStateOpen }" class="nav-menu"></div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navStateOpen: false
    };
  },
  methods: {
    toggleNav() {
      this.navStateOpen = !this.navStateOpen;
    }
  }
};
</script>

<style lang="scss">
.nav {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 100px;
  width: 100%;
  z-index: 1001;

  .logo {
    height: 50px;
    padding: 0;
    margin: 15px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }

  .menu {
    display: flex;
    align-items: center;

    &__item {
      position: relative;
      display: flex;
      justify-content: center;
      background-color: transparent;
      border-radius: 10px;
      margin: 0 10px;
      padding: 15px 30px;
      transition: all 0.3s ease-in-out;

      .button-clip {
        height: 7px;
        width: 48px;
        position: absolute;
        bottom: -7px;
        transition: all 0.3s ease-in-out;

        &.top {
          bottom: auto;
          top: -7px;
          transform: rotate(180deg);
        }
      }

      a {
        color: black;
        font-size: 16px;
        font-weight: 900;
        text-decoration: none;
        transition: all 0.3s ease-in-out;
      }

      &.active {
        background-color: var(--primary);

        a {
          color: var(--white);
        }

        .button-clip {
          bottom: 0;

          &.top {
            top: 0;
          }
        }
      }

      &:hover {
        background-color: var(--primary_light);

        a {
          filter: invert(100%);
          text-decoration: none;
        }
      }
    }
  }

  .socials {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;

    &__item {
      height: 30px;
      width: 30px;
      border-radius: 5px;
      background-color: var(--light-fix);
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 2.5px;

      a {
        max-height: 20px;
      }

      img {
        height: 20px;
        width: 20px;
        transition: all 0.3s ease-in-out;
      }

      &:hover img {
        transform: scale(1.5);
      }
    }
  }

  &__meta {
    position: relative;
    display: flex;
    background-color: transparent;
    height: 40px;
    background-color: var(--white-fix);
    border-radius: 0 0 0 10px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.25);
    z-index: 10;
    padding-left: 5px;

    .nav-edge {
      position: absolute;
      top: -1px;
      left: -15px;
      height: 15px;
    }

    .menu__item {
      height: 28px;
      padding: 0 15px;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--primary_0);
      margin: 0 3px;

      a {
        background-color: none;
        color: black;
        font-size: 12px;
      }

      &:hover {
        cursor: pointer;
      }
    }
  }

  &__user {
    position: relative;
    height: 60px;
    padding-right: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: var(--white);
    padding-left: 10px;
    border-radius: 0 0 0 25px;
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);

    .nav-edge {
      position: absolute;
      top: 0;
      left: -29px;
      height: 30px;
    }
  }

  &__primary {
    display: flex;
    width: auto;
    flex-grow: 1;
  }

  .mobile-btn {
    display: none;
    cursor: pointer;
  }

  &__secondary {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: auto;
  }
}
</style>
