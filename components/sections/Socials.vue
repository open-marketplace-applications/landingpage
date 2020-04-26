<template>
  <Section>
    <Container>
      <H2>Follow us</H2>
      <div class="socials-list">
        <a
          href="https://www.youtube.com/channel/UClTOkIEAwmYLV7SRtMKP9gQ"
          target="_blank"
        >
          <img src="~/assets/icons/youtube_large.svg" alt class="social" />
        </a>
        <a href="https://twitter.com/marketplace_org" target="_blank">
          <img src="~/assets/icons/twitter_large.svg" alt class="social" />
        </a>
        <a
          href="https://medium.com/open-marketplace-applications"
          target="_blank"
        >
          <img src="~/assets/icons/medium.svg" alt class="social" />
        </a>
      </div>
    </Container>
  </Section>
</template>

<script>
import Section from "@/components/library/layout/Section";
import Container from "@/components/library/layout/Container";
import H2 from "@/components/library/typo/H2";

export default {
  components: {
    Section,
    Container,
    H2
  }
};
</script>

<style lang="scss" scoped>
h2 {
  margin-bottom: 50px;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
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
