<template>
  <Section :bg="'dark'">
    <Container>
      <Row>
        <Column :width="6" :md="12">
          <H2>Join us</H2>
          <P>
            Do you also want an Open Marketplace in your City? No Problem! Just
            join our Discord Chat Server and aks in the #marketplace-request
            channel for more information. This project is huge and the
            applications get continuously improved by community feedback. We
            currently building many decentralized teams all over the world -
            it's would be cool if you become a part of it and help with any
            contribution!
          </P>
          <h3>Regional Marketplace Leader</h3>
          <P
            >Manages the Open Marketplace in a city and takes care of the local
            community.</P
          >
          <h3>Contributor</h3>
          <P
            >They help to improve the project with contributions of any kind.</P
          >
        </Column>
        <Column :width="6" :md="12" class="discord-icon">
          <img src="~/assets/icons/discord_large.svg" alt="discord" />
          <Button
            :type="'primary'"
            :href="'https://discord.gg/XDQQcJC'"
            :target="'_blank'"
          >
            Jump right in
          </Button>
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
import Button from "@/components/library/Button";

export default {
  components: {
    Section,
    Container,
    Row,
    Column,
    H2,
    P,
    Button
  }
};
</script>

<style lang="scss" scoped>
.discord-icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    height: 200px;
    margin-bottom: 50px;
  }
  @media only screen and (max-width: 920px) {
    margin-top: 50px;
  }
}

h3 {
  margin-top: 20px;
}
</style>
