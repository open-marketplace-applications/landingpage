<template>
  <div class="socials section">
    <h3>Join the community</h3>
    <p>The Online Marketplace Application is built by an open Community. Join our Discord server an chat with the Team or follow us on Twitter.</p>
    <div class="socials-list">
      <!-- <a href="https://twitter.com/einfachIOTA" target="_blank">
        <img src="~/assets/icons/twitter_large.svg" alt class="social" />
      </a> -->
      <a href="https://discord.gg/XDQQcJC" target="_blank">
        <img src="~/assets/icons/discord_large.svg" alt class="social" />
      </a>
      <a href="https://twitter.com/marketplace_org" target="_blank">
        <img src="~/assets/icons/twitter_large.svg" alt class="social" />
      </a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.socials.section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px;
  background-color: var(--light);
  @media only screen and (max-width: 520px) {
    padding: 50px 0;
  }
  h3 {
    color: var(--dark);
    font-weight: 900;
    font-size: 42px;
    margin-bottom: 20px;
    text-transform: uppercase;
    @media only screen and (max-width: 520px) {
      font-size: 32px;
    }
  }
  p {
    color: var(--dark);
    padding: 30px;
    text-align: center;
  }
  .socials-list {
    display: flex;
    justify-content: center;
    .social {
      margin: 0 25px;
      @media only screen and (max-width: 520px) {
        margin: 0 20px;
        width: 100px;
      }
      @media only screen and (max-width: 450px) {
        margin: 0 15px;
        width: 80px;
      }
      @media only screen and (max-width: 350px) {
        margin: 0 10px;
        width: 60px;
      }
    }
  }
}
</style>