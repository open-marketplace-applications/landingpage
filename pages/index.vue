<template>
  <div class="page">
    <Hero />
    <Map />
    <Apps />
    <Socials />
    <Footer />
  </div>
</template>

<script>
import Hero from "../components/Hero";
import Map from "../components/Map.vue";
import Apps from "../components/Apps.vue";
import Socials from "../components/Socials";
import Footer from "~/components/Footer.vue";
export default {
  components: { Hero, Map, Apps, Socials, Footer },
  data() {
    return {
      url: `${process.env.shopUrl}/en?refLink=${process.env.refAddress}`
    };
  }
};
</script>
