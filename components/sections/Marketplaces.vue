<template>
  <Section :bg="'dark'">
    <div class="image-gallery">
      <div
        v-for="(marketplace, index) in marketplaces"
        :key="index"
        class="item"
      >
        <!-- `url(${require('./link/to/image.png')})` -->
        <div
          :style="{
            backgroundImage: `url(${require('@/assets/marketplaces/' +
              marketplace.image +
              '.png')})`
          }"
          class="image-wrapper"
        ></div>
        <div class="image-overlay"></div>
        <div class="content-wrapper">
          <H2>{{ marketplace.name }}</H2>
          <Button :type="'dark'" :href="marketplace.url"
            >{{ marketplace.button_text }}</Button
          >
        </div>
      </div>
    </div>
  </Section>
</template>

<script>
// L I B R A R Y
import Section from "@/components/library/layout/Section";
import Button from "@/components/library/Button";
import H2 from "@/components/library/typo/H2";

export default {
  components: {
    Section,
    H2,
    Button
  },
  data() {
    return {
      marketplaces: [
        {
          name: "Berlin",
          image: "berlin",
          url: "",
          button_text: "Coming Soon"
        },
        {
          name: "Südtirol",
          image: "südtirol",
          url: "",
          button_text: "Coming Soon"
        },
        {
          name: "Saarbrücken",
          image: "saarbrücken",
          url: "",
          button_text: "Coming Soon"
        },
        {
          name: "Your City",
          image: "homburg",
          url: "mailto:info@openmarketplace.org?subject=[CITYREQUEST]",
          button_text: "Contact Us Now"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.section {
  padding: 5px;
  min-height: 100vh;
}

.image-gallery {
  display: flex;
  flex-wrap: wrap;
}

.item {
  position: relative;
  height: calc((100vh - 15px) / 2);
  width: calc((100% - 20px) / 2);
  margin: 5px;
  overflow: hidden;

  .image-wrapper,
  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-wrapper {
    z-index: 1;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: var(--transition);
  }

  .image-overlay {
    z-index: 2;
    background-color: #00e5ff;
    opacity: 0.25;
    transition: var(--transition);
  }

  .content-wrapper {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 100%;
    left: 0;
    z-index: 3;
    padding: 30px;
    transition: var(--transition);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }


  &:hover {
    .content-wrapper {
      top: 0;
    }
    .image-wrapper {
      transform: scale(1.1);
    }
    .image-overlay {
      opacity: 0.5;
    }
  }
}

h2 {
  margin-bottom: 30px;
  text-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
}

@media only screen and (max-width: 768px) {
  h2 {
    font-size: 32px;
  }
  .item {
    .content-wrapper {
      top: 0;
    }
    .image-wrapper {
      transform: scale(1.1);
    }
    .image-overlay {
      opacity: 0.5;
    }
  }
}

@media only screen and (max-width: 768px) {
  .item {
    width: 100%;
  }
}

</style>
