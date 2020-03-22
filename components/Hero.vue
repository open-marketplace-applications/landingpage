<template>
   <div class="hero">
      <img class="oma_hero_img" src="@/assets/oma_hero.svg" alt="">
      <h1>The next generation Markedplace</h1>
      <br />
      <div>
        <p>Auch OMA macht mit beim #WirVsVirus Hackathon und Codet gegen die Corona Krise.</p>
        <br />
        <a href="https://youtu.be/2_Hh50two60" class="discover" target="_blank"> Zum Video</a>
        <br />
        <br />
        <br />

        <a href="#" class="discover" v-scroll-to="'#content'"> Erfahre mehr</a>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.hero {
    height: 100vh;
    padding-top: 20%;
    text-align: center;
}

.oma_hero_img {
  margin: 50px 20px;
  height: 10%;
}

.discover {
  margin: 50px;
  color: var(--secondary)
}
</style>