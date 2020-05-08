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
:root {
  // Primary Colour
  --primary: #4cb6c2;
  --primary-light: #7fc7bd;
  --gradient-primary: linear-gradient(
    to right bottom,
    #7fc7bd,
    #73c3be,
    #66bfbf,
    #59bac0,
    #4cb6c2
  );

  // Dark Mode
  --white-fix: #ffffff;
  --light-fix: #edf7f2;
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

  // Light Mode
  /* --white: #122b2e;
  --light: #193f43;
  --dark: #edf7f2;
  --darker: #ffffff;
  --gradient-dark: linear-gradient(to right bottom, #ffffff, #edf7f2); */

  // Variables
  --weight-bold: 800;
  --weight-regular: 400;
  --radius: 10px;
  --transition: all 0.3s ease-in-out;
  --media-lg: 1200px;
  --media-md: 900px;
  --media-sm: 600px;
  --media-xs: 400px;
}

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

// S C R O L L B A R
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
