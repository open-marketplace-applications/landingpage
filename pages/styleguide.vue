<template>
  <Page>
    <Section>
      <Container :size="'sm'">
        <H1>Styleguide</H1>
        <P
          >Here you can find all components available in
          open-marketplace/landing-page</P
        >
        <Hr />
        <H2>Buttons</H2>
        <P
          >The button component allows you use it as a button with @clicked or
          as a link with href.</P
        >
        <Row>
          <Column :width="2">
            <Button :type="'default'">Default</Button>
          </Column>
          <Column :width="2">
            <Button :type="'primary'">Primary</Button>
          </Column>
          <Column :width="2">
            <Button :type="'darker'">Darker</Button>
          </Column>
          <Column :width="2">
            <Button :type="'dark'">Dark</Button>
          </Column>
          <Column :width="2">
            <Button :type="'light'">Light</Button>
          </Column>
          <Column :width="2">
            <Button :type="'white'">White</Button>
          </Column>
        </Row>
      </Container>
    </Section>
  </Page>
</template>

<script>
// L I B R A R Y
import Page from "../components/library/layout/Page";
import Section from "../components/library/layout/Section";
import Container from "../components/library/layout/Container";
import Row from "../components/library/layout/Row";
import Column from "../components/library/layout/Column";
import H1 from "../components/library/typo/H1";
import H2 from "../components/library/typo/H2";
import P from "../components/library/typo/P";
import Hr from "../components/library/typo/Hr";
import Button from "../components/library/Button";

export default {
  components: {
    Page,
    Section,
    Container,
    Row,
    Column,
    H1,
    H2,
    P,
    Hr,
    Button
  }
};
</script>
