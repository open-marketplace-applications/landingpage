<template>
  <div>
    <NavBar />
    <nuxt />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  components: { NavBar }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap");
html {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

:root {
  --primary: #4cb6c2;
  --primary-light: #7fc7bd;
  --white: #ffffff;
  --light: #edf7f2;
  --dark: #193f43;
  --darker: #0f282b;
}
</style>
