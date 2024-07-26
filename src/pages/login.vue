<template>
  <div class="login">
    <div class="main">
      <div class="logoDiscription">
        <RouterLink to="/" class="logo">
          <span>WATERBOMB</span>
        </RouterLink>
        <span class="energy">ENERGY !</span>
        <span>
          넘치는 당신의 에너지를 멋지게 표현하여 열정적이고 즐거운 <br>플레이어가 되어보세요 !
        </span>
      </div>
      <div class="socialLogin">
        <h3>간편로그인</h3>
        <v-btn stacked class="google">
          <div class="snsLogo snsImg01"></div>
          <span>google</span>
        </v-btn>
        <v-btn stacked class="github">
          <div class="snsLogo snsImg02"></div>
          <span>github</span>
        </v-btn>
        <v-btn stacked class="facebook">
          <div class="snsLogo snsImg03"></div>
          <span>facebook</span>
        </v-btn>
        <v-btn stacked class="apple">
          <div class="snsLogo snsImg04"></div>
          <span>apple</span>
        </v-btn>
        <v-btn stacked class="kakao">
          <div class="snsLogo snsImg05"></div>
          <span>kakao</span>
        </v-btn>
        <v-btn stacked class="naver">
          <div class="snsLogo snsImg06"></div>
          <span>naver</span>
        </v-btn>
      </div>
      <div class="guestBt">
        <RouterLink to="/myticket" class="textDecoNone">
          <v-btn>
            비회원 조회
          </v-btn>
        </RouterLink>
        <RouterLink to="/payment" class="textDecoNone">
          <v-btn>
            비회원 구매
          </v-btn>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap");
@font-face {
  font-family: "MoveSans-Bold";
  src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/2405-2@1.0/MoveSans-Bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
  /* outline: 1px solid navy; */
}
p,
h1,
h2,
h3,
h4,
h5,
h6,
ul,
li {
  padding: 0;
  margin: 0;
}
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.main {
  display: flex;
  width: 300px;
  height: auto;
  padding: 90px 10px 50px 10px;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.70);
  box-shadow: 0px 40px 49.85px 0px rgba(0, 0, 0, 0.10);
  border: 1px solid #f1efef;
}
.logoDiscription {
  display: flex;
  width: 200px;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}
.logo {
  display: flex;
  height: 55px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 5px;
  border: 3px solid #FFBF00;
  text-decoration: none;
}
.logo span {
  color: #FFBF00;
  font-family: "MoveSans-Bold";
  font-size: 28px;
  font-weight: 300;
  line-height: 21px;
}
.energy {
  width: 100%;
  color: #8CA9F3;
  font-size: 20px;
  font-weight: 900;
  text-align: start;
}
.logoDiscription span:nth-of-type(2) {
  color: #8CA9F3;
  font-size: 14px;
  font-weight: 700;
  text-align: start;
}
.socialLogin {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: auto;
  position: relative;
  padding: 20px 0;
  row-gap: 20px;
  border-top: 1px solid #CBCBCB;
}
.socialLogin > h3 {
  position: absolute;
  top: -14px;
  left: 72px;
  background-color: #fff;
  width: 140px;
  text-align: center;
  color: #CBCBCB;
  font-size: 16px;
}
.v-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9px;
  width: 70px;
  height: 70px;
  border-radius: 28.458px;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.snsLogo {
  width: 35px;
  height: 35px;
}
.snsImg01 {
  background: url(/src/assets/image/login/google.png) no-repeat 100% / cover;
}
.snsImg02 {
  background: url(/src/assets/image/login/github.png) no-repeat 100% / cover;
}
.snsImg03 {
  background: url(/src/assets/image/login/facebook.png) no-repeat 100% / cover;
}
.snsImg04 {
  background: url(/src/assets/image/login/apple.png) no-repeat 100% / cover;
}
.snsImg05 {
  background: url(/src/assets/image/login/kakao.png) no-repeat 100% / cover;
}
.snsImg06 {
  background: url(/src/assets/image/login/naver.png) no-repeat 100% / cover;
}
.socialLogin .v-btn span {
  font-size: 10px;
  color: #000;
}
.guestBt {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}
.textDecoNone {
  text-decoration: none;
}
.guestBt .v-btn {
  display: flex;
  width: 110px;
  height: 30px;
  padding: 6px 26px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 30px;
  background: #F1F1F1;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: #686868;
}
</style>
