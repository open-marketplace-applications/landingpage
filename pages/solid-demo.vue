<template>
  <Page>
    <Container>
      <Row>
        <Column v-bind:width="4" :lg="12">
          <H2>Solid Demo</H2>
          <SolidLogin popupUri="https://solid.community/common/popup.html">
            <div slot-scope="{ initializing, login, logout, loggedIn, webId }">
                <p v-if="webId">webId: {{ webId }}</p>
                <button v-if="initializing">Loading...</button>
                <button v-else-if="loggedIn" @click="logout()" :title="webId">Log out</button>
                <button v-else @click="login()">Log In</button>
            </div>
        </SolidLogin>
        </Column>
      </Row>
    </Container>
    <Footer />
  </Page>
</template>

<script>
// L I B R A R Y
import Footer from "@/components/library/Footer.vue";
import Column from "@/components/library/layout/Column";
import Container from "@/components/library/layout/Container";
import Row from "@/components/library/layout/Row";
import H2 from "@/components/library/typo/H2";
import Page from "@/components/library/layout/Page";


export default {
  components: {
    Page,
    Container,
    Column,
    H2,
    Row,
    Footer
  },
  data() {
    return {
        webId: ''
    };
  },
  created() {
      console.log('this.$solid', this.$solid)
  }
};
</script>
