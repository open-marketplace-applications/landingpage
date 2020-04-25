<template>
  <div>
    <Nav />
    <nuxt />
  </div>
</template>

<script>
import Nav from "@/components/library/Nav";

export default {
  components: { Nav }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,800&display=swap");

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
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
}

h1,
h2,
h3,
button {
  font-weight: 800;
}

p {
  line-height: 1.5;
}

:root {
  --primary: #4cb6c2;
  --primary-light: #7fc7bd;
  --white: #ffffff;
  --light: #edf7f2;
  --dark: #193f43;
  --darker: #122b2e;
  --gradient-dark: linear-gradient(
    to right bottom,
    #193f43,
    #183038,
    #172229,
    #121419,
    #020202
  );
  --gradient-primary: linear-gradient(
    to right bottom,
    #7fc7bd,
    #73c3be,
    #66bfbf,
    #59bac0,
    #4cb6c2
  );
  --weight-bold: 800;
  --weight-regular: 400;
  --radius: 10px;
  --transition: all 0.3s ease-in-out;
}

.container {
  width: 1200px;
  margin: 0 auto;
  @media only screen and (max-width: 1240px) {
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
  }
}

/* width */
::-webkit-scrollbar {
  width: 15px;
}

/* Track */
::-webkit-scrollbar-track {
  background: var(--darker);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--primary);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--primary-light);
}
</style>
