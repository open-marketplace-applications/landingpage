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
          title: 'Shop',
          description: 'Open Marketplace Apps are decentralised open source apps for smart cities and local communities. With the shop application, users can sell products and goods without fees.'
      }
    };
  }
};
</script>
