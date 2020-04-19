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
        <el-col :span="24" :md="12">
          <h1 class="title">Open Marketplace</h1>
          <p>A decentralised marketplace for smart cities</p>
          <el-button @click="index = 0" class="btn btn-primary"
            >Watch the Videos</el-button
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
              class="hero-video"
            ></v-gallery>
          </client-only>
        </el-col>
        <el-col :span="0" :md="12"></el-col>
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
          title: "Open Marketplace Applications - Introduction - Connect sellers, delivery services & consumers",
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
.hero {
  position: relative;
  z-index: 1000;
  overflow: hidden;
  top: 0;
  left: 0;
  height: 100vh;
  max-height: 100vh;
  width: 100%;
  background-image: var(--gradient-dark);
  color: var(--white);

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

  h1 {
    font-family: "Open Sans";
    font-weight: 800;
    font-size: 62px;
    line-height: 1.15;
    margin-bottom: 10px;
    text-transform: uppercase;
    @media only screen and (max-width: 550px) {
      font-size: 48px;
    }
    @media only screen and (max-width: 400px) {
      font-size: 32px;
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
}
</style>
