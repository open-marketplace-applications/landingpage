<template>
  <Section>
    <Container>
      <Row>
        <Column v-bind:width="4">
          <H2>Apps</H2>
          <P
            >The open marketplace can be combined with many open applications.
            All of tem are dezentral and free to use - you can host them for
            yourself, of use the Open Cloud to host it.</P
          >
        </Column>
        <Column :width="8">
          <Row>
            <Column :width="3" :justify="'center'" :align="'center'">
              <div class="app-icon-container">
                <div class="app-icon-wrapper">
                  <img
                    src="~assets/icons/marketplace.svg"
                    alt="shop icon"
                    class="app-icon"
                  />
                </div>
                <span class="app-name">Marketplace</span>
              </div>
            </Column>
            <Column :width="3">
              <div class="app-icon-container">
                <div class="app-icon-wrapper">
                  <img
                    src="~assets/icons/shop-app.svg"
                    alt="shop icon"
                    class="app-icon"
                  />
                </div>
                <span class="app-name">Shop</span>
              </div>
            </Column>
            <Column :width="3">
              <div class="app-icon-container">
                <div class="app-icon-wrapper">
                  <img
                    src="~assets/icons/delivery.svg"
                    alt="shop icon"
                    class="app-icon"
                  />
                </div>
                <span class="app-name">Delivery</span>
              </div>
            </Column>
            <Column :width="3">
              <div class="app-icon-container">
                <div class="app-icon-wrapper">
                  <img
                    src="~assets/icons/chat.svg"
                    alt="shop icon"
                    class="app-icon"
                  />
                </div>
                <span class="app-name">Chat</span>
              </div>
            </Column>
            <Column :width="3">
              <div class="app-icon-container">
                <div class="app-icon-wrapper">
                  <img
                    src="~assets/icons/data-marketplace.svg"
                    alt="shop icon"
                    class="app-icon"
                  />
                </div>
                <span class="app-name">Data Marketplace</span>
              </div>
            </Column>
            <Column :width="3">
              <div class="app-icon-container">
                <div class="app-icon-wrapper">
                  <img
                    src="~assets/icons/news.svg"
                    alt="shop icon"
                    class="app-icon"
                  />
                </div>
                <span class="app-name">News</span>
              </div>
            </Column>
            <Column :width="3">
              <div class="app-icon-container">
                <div class="app-icon-wrapper">
                  <img
                    src="~assets/icons/discount.svg"
                    alt="shop icon"
                    class="app-icon"
                  />
                </div>
                <span class="app-name">Discount</span>
              </div>
            </Column>
            <Column :width="3">
              <div class="app-icon-container">
                <div class="app-icon-wrapper">
                  <img
                    src="~assets/icons/social-network.svg"
                    alt="shop icon"
                    class="app-icon"
                  />
                </div>
                <span class="app-name">Social Network</span>
              </div>
            </Column>
          </Row>
        </Column>
      </Row>
    </Container>
  </Section>
</template>

<script>
import Section from "@/components/library/layout/Section";
import Container from "@/components/library/layout/Container";
import Row from "@/components/library/layout/Row";
import Column from "@/components/library/layout/Column";
import H2 from "@/components/library/typo/H2";
import P from "@/components/library/typo/P";

export default {
  components: { Section, Container, Row, Column, H2, P }
};
</script>

<style lang="scss" scoped>
.app-icon-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  @media only screen and (max-width: 800px) {
    width: calc(50% - 25px);
  }
  @media only screen and (max-width: 440px) {
    width: 100%;
  }

  .app-icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    width: 150px;
    background-color: var(--white);
    border-radius: var(--radius);
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
    margin-bottom: 10px;
    .app-icon {
      max-height: 80px;
      max-width: 80px;
    }
  }

  .app-name {
    font-weight: var(--weight-bold);
  }
}
</style>
