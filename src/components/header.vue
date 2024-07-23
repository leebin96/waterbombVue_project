<template>
  <header>
    <RouterLink to="/" class="logo"><span>WATERBOMB</span></RouterLink>
  </header>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  name: 'Header',
  components: { RouterLink }
};
</script>
<style scoped>
@font-face {
  font-family: "MoveSans-Bold";
  src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/2405-2@1.0/MoveSans-Bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
}
header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  background-color: #000000;
  color: white;
  height: 50px;
  width: 100%;
}
header .logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 35px;
  padding: 0 10px;
  border-radius: 5px;
  border: 2px solid #ffbf00;
  text-decoration: none;
}
header .logo span {
  color: #ffbf00;
  font-family: "MoveSans-Bold";
  font-size: 20px;
  font-weight: 500;
  line-height: 7px;
  /* 53.846% */
}
</style>