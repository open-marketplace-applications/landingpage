<template>
  <Section id="apps">
    <Container v-scroll-reveal.reset>
      <Row>
        <Column v-bind:width="4" :lg="12">
          <H2>Apps</H2>
          <P
            >We provide many free open source applications for smart cities and
            communities. We leave it up to you if you want to be your own
            platform provider, by hosting them on your own infrastructure.
          </P>
        </Column>
        <Column :width="8" :lg="12">
          <Row>
            <Column
              v-for="(app, index) in apps"
              :key="index"
              :width="3"
              :md="4"
              :sm="6"
              :xs="12"
              :justify="'center'"
              :align="'center'"
            >
              <div class="app-icon-wrapper">
                <img
                  :src="require(`../../assets/icons/${app.icon}.svg`)"
                  :alt="app.name"
                  class="app-icon"
                />
              </div>
              <span class="app-name">{{ app.name }}</span>
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
  components: {
    Section,
    Container,
    Row,
    Column,
    H2,
    P
  },
  data() {
    return {
      apps: [
        {
          name: "Marketplace",
          icon: "marketplace"
        },
        {
          name: "Shop",
          icon: "shop-app"
        },
        {
          name: "Delivery",
          icon: "delivery"
        },
        {
          name: "Chat",
          icon: "chat"
        },
        {
          name: "Data Marketplace",
          icon: "data-marketplace"
        },
        {
          name: "News",
          icon: "news"
        },
        {
          name: "Discount",
          icon: "discount"
        },
        {
          name: "Social Network",
          icon: "social-network"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.app-icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 150px;
  background-color: var(--white-fix);
  border-radius: var(--radius);
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
  margin-bottom: 10px;

  .app-icon {
    max-height: 80px;
    max-width: 80px;
  }
}

.app-name {
  font-size: 12px;
  text-align: center;
  font-weight: var(--weight-bold);
}
</style>
