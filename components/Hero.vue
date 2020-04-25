<template>
  <Section :bg="'gradient-dark'">
    <Container>
      <div class="hero">
        <img
          :src="require(`../assets/welcome.svg`)"
          alt="Welcome"
          class="welcome"
        />
        <img
          :src="require(`../assets/hero-illustration.png`)"
          alt="Hero Illustration"
          class="illustration"
        />
        <el-row>
          <el-col :span="24" :md="12">
            <H1>Open Marketplace</H1>
            <P>A decentralised marketplace for smart cities</P>
            <Button @clicked="index = 0" :type="'primary'">
              Watch the Videos
            </Button>
            <client-only>
              <v-gallery
                :images="images"
                :index="index"
                :options="{
                  youTubeVideoIdProperty: 'youtube',
                  youTubePlayerVars: undefined,
                  youTubeClickToPlay: true
                }"
                @close="index = null"
                class="hero-video"
              ></v-gallery>
            </client-only>
          </el-col>
          <el-col :span="0" :md="12"></el-col>
        </el-row>
      </div>
    </Container>
  </Section>
</template>

<script>
// L I B R A R Y
import Section from "@/components/library/layout/Section";
import Container from "@/components/library/layout/Container";
import H1 from "@/components/library/typo/H1";
import P from "@/components/library/typo/P";
import Button from "@/components/library/Button";

export default {
  components: { Section, Container, H1, P, Button },
  data() {
    return {
      images: [
        {
          title:
            "Open Marketplace Applications - Introduction - Connect sellers, delivery services & consumers",
          href: "https://www.youtube.com/watch?v=Jbj4iwSlKZY&t",
          type: "text/mp4",
          youtube: "Jbj4iwSlKZY",
          poster: "https://img.youtube.com/vi/Jbj4iwSlKZY/maxresdefault.jpg"
        },
        {
          title: "Open Marketplace Applications - An Decentralized Marketplace",
          href: "https://www.youtube.com/watch?v=H8EGEsW5eDY",
          type: "text/mp4",
          youtube: "H8EGEsW5eDY",
          poster: "https://img.youtube.com/vi/H8EGEsW5eDY/maxresdefault.jpg"
        },
        {
          title: "Open Marketplace - First Open Platform as a Platform",
          href: "https://www.youtube.com/watch?v=5sM3RN3WKtg",
          type: "text/mp4",
          youtube: "5sM3RN3WKtg",
          poster: "https://img.youtube.com/vi/5sM3RN3WKtg/maxresdefault.jpg"
        }
      ],
      index: null
    };
  }
};
</script>

<style lang="scss" scoped>
.section {
  height: 100vh;
}

.welcome {
  position: absolute;
  top: 100px;
  left: 50px;
  opacity: 0.15;
  width: 80%;
}

.illustration {
  position: absolute;
  bottom: calc(10% + 100px);
  right: 10%;
  width: 700px;
  @media only screen and (max-width: 800px) {
    width: 500px;
  }
  @media only screen and (max-width: 600px) {
    width: 400px;
  }
  @media only screen and (max-width: 400px) {
    width: 300px;
  }
}

.container {
  margin-top: 22%;
  @media only screen and (max-width: 500px) {
    margin-top: 24%;
  }
  @media only screen and (max-width: 400px) {
    margin-top: 26%;
  }
}

video {
  position: absolute;
  background-size: cover;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  filter: blur(5px);
  @media only screen and (min-width: 2200px) {
    height: 100vh;
    width: 100%;
  }
}
</style>
