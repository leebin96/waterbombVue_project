<template>
  <footer>
    <div class="contents">
      <p>Terms of Use</p>
      <p>Privacy Policy</p>
      <p>Cookie Policy</p>
      <div class="icoGroup">
        <i class="fa-brands fa-square-instagram fa-xl"></i>
        <i class="fa-brands fa-facebook fa-xl"></i>
        <i class="fa-brands fa-square-twitter fa-xl"></i>
      </div>
      <span>© 2024 Festivl. All rights reserved.</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap");
footer {
  display: flex;
  justify-content: center;
  background-color: #000;
}
footer .contents {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  color: #fff;
}
footer .contents p {
  text-align: center;
  font-size: 15px;
  line-height: 24px;
  margin: 0;
}
footer .contents .icoGroup {
  display: flex;
  gap: 20px;
  padding: 10px 0;
}
footer span {
  text-align: center;
  font-size: 15px;
  line-height: 24px;
}
</style>