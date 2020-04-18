<template>
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
    <div class="container">
      <el-row>
        <el-col :span="12">
          <h1 class="title">Open Marketplace</h1>
          <p>A decentralised marketplace for smart cities</p>
          <el-button @click="index = 0" class="btn btn-primary"
            >Watch the Video</el-button
          >
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
            ></v-gallery>
          </client-only>
        </el-col>
        <el-col :span="12"></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          title: "Open Marketplace Applications - An Decentralized Marketplace",
          href: "https://www.youtube.com/watch?v=H8EGEsW5eDY",
          type: "text/html",
          youtube: "H8EGEsW5eDY",
          poster: "https://img.youtube.com/vi/H8EGEsW5eDY/maxresdefault.jpg"
        }
      ],
      index: null
    };
  }
};
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  z-index: 1000;
  overflow: hidden;
  top: 0;
  left: 0;
  height: 100vh;
  max-height: 100vw;
  width: 100%;
  background-image: var(--gradient-dark);
  color: var(--white);

  .welcome {
    position: absolute;
    top: 50px;
    left: 50px;
    opacity: 0.15;
    width: 80%;
  }

  .illustration {
    position: absolute;
    bottom: calc(10% + 100px);
    right: 10%;
    width: 700px;
  }

  h1 {
    font-family: "Open Sans";
    font-weight: 800;
    font-size: 62px;
    line-height: 1.15;
    margin-bottom: 10px;
    text-transform: uppercase;
  }

  .container {
    width: 1200px;
    margin-top: 10%;
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
}
</style>
