<template>
  <div class="container">
    <div class="hero">
      <h1 class="title">hello!</h1>
      <h2 class="subtitle">Online Markedplace Application</h2>
      <br />
      <br />
      <div>
        <p>Auch OMA macht mit beim #WirVsVirus und Codet gegen Corona.</p>
        <router-link class="discover" to="services">
          Lerne wie du auch in deiner Umgebung helfen kannst!
        </router-link>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style>
.container {
  padding-top: 20%;
  font-family: 'Open Sans', sans-serif;
  height: 100vh;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
}
.title {
  font-family: 'Heebo', sans-serif;
  display: block;
  font-weight: 500;
  font-size: 100px;
  color: #35495e;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #35495e;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.discover {
  color: #677380;
}
</style>