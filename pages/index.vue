<template>
  <Page>
    <Hero />
    <Map />
    <Apps />
    <JoinUs />
    <Socials />
    <Footer />
  </Page>
</template>

<script>
// L I B R A R Y
import Page from "../components/library/layout/Page";

// S E C T I O N S
import Hero from "../components/Hero";
import Map from "../components/Map.vue";
import Apps from "../components/Apps.vue";
import JoinUs from "../components/JoinUs.vue";
import Socials from "../components/Socials";
import Footer from "~/components/Footer.vue";

export default {
  components: { Page, Hero, Map, Apps, JoinUs, Socials, Footer },
  data() {
    return {
      url: `${process.env.shopUrl}/en?refLink=${process.env.refAddress}`
    };
  }
};
</script>
