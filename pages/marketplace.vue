<template>
  <Page>
    <Content :content="shop" />
    <Footer />
  </Page>
</template>

<script>
// L I B R A R Y
import Footer from "@/components/library/Footer.vue";
import Content from "@/components/sections/Content";
import Page from "@/components/library/layout/Page";


export default {
  components: {
    Page,
    Content,
    Footer
  },
  data() {
    return {
      url: `${process.env.shopUrl}/en?refLink=${process.env.refAddress}`,
      shop: {
          title: 'Marketplace',
          description: 'Open Marketplace Apps are decentralised open source apps for smart cities and local communities. With the marketplace application, users can discover shops and more.'
      }
    };
  }
};
</script>
