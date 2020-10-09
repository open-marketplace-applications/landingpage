<template>
  <Page>
    <Hero />
    <Map />
    <Apps />
    <Marketplaces />
    <JoinUs />
    <Socials />
    <Footer />
  </Page>
</template>

<script>
// L I B R A R Y
import Footer from "@/components/library/Footer.vue";
import Page from "@/components/library/layout/Page";

// S E C T I O N S
import Hero from "@/components/sections/Hero";
import Map from "@/components/sections/map/Map.vue";
import Apps from "@/components/sections/Apps.vue";
import Marketplaces from "@/components/sections/Marketplaces.vue";
import JoinUs from "@/components/sections/JoinUs.vue";
import Socials from "@/components/sections/Socials";

export default {
  components: {
    Page,
    Hero,
    // Map,
    Apps,
    Marketplaces,
    JoinUs,
    Socials,
    Footer
  },
  data() {
    return {
      url: `${process.env.shopUrl}/en?refLink=${process.env.refAddress}`
    };
  }
};
</script>
