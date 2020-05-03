<template>
  <Section>
    <Container>
      <Row>
        <Column v-bind:width="4" :lg="12">
          <H2>{{ content.title }}</H2>
          <P
            >{{ content.description }}</P
          >
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
  props: ['content'],
  components: {
    Section,
    Container,
    Row,
    Column,
    H2,
    P
  },
  data() {
    return {}
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
