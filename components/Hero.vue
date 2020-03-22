<template>
   <div class="hero">
      <h1>The next generation of Markedplaces</h1>
      <img class="oma_hero_img" src="@/assets/oma_hero.svg" alt="">
      <div>
        <p>Auch OMA macht mit beim #WirVsVirus und Codet gegen Corona.</p>
        <router-link class="discover" to="services">
          Lerne wie du auch in deiner Umgebung helfen kannst!
        </router-link>

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
</style>