<template>
  <Page>
    <Section :bg="'gradient-dark'">
      <Container :size="'sm'">
        <H1>Imprint</H1>
        <P>Some tasty legal info goes here...</P>
        <Hr />
        <H2>Some Heading 2</H2>
        <P>And some more text goes here...</P>
      </Container>
    </Section>
  </Page>
</template>

<script>
// L I B R A R Y
import Page from "../components/library/layout/Page";
import Section from "../components/library/layout/Section";
import Container from "../components/library/layout/Container";
import H1 from "../components/library/typo/H1";
import H2 from "../components/library/typo/H2";
import P from "../components/library/typo/P";
import Hr from "../components/library/typo/Hr";

export default {
  components: {
    Page,
    Section,
    Container,
    H1,
    H2,
    P,
    Hr
  }
};
</script>

<style scoped>
.section {
  min-height: 100vh;
}
</style>
