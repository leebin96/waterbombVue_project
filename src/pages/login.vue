<template>
  <div>

    <body>
      <div class="loginBox">
        <RouterLink to="/" class="logo">
          <span>WATERBOMB</span>
        </RouterLink>
        <div class="socialGroup">
          <div class="iconGroup">
            <v-btn stacked variant="text" class="iconInfo">
              <img src="/src/assets/image/iogin/kakao.png" alt="카카오 로고"><span>카카오</span>
            </v-btn>
            <v-btn stacked variant="text">
              <img src="/src/assets/image/iogin/facebook.png" alt="페이스북 로고"><span>페이스북</span>
            </v-btn>
            <v-btn stacked variant="text">
              <img src="/src/assets/image/iogin/naver.png" alt="네이버 로고"><span>네이버</span>
            </v-btn>
            <v-btn stacked variant="text">
              <img src="/src/assets/image/iogin/google.png" alt="구글 로고"><span>구글</span>
            </v-btn>
            <v-btn stacked variant="text">
              <img src="/src/assets/image/iogin/apple.png" alt="애플 로고"><span>애플</span>
            </v-btn>
            <v-btn stacked variant="text">
              <img src="/src/assets/image/iogin/github.png" alt="깃허브 로고"><span>깃허브</span>
            </v-btn>
          </div>
          <div class="guestBtnGroup">
            <a href="/src/assets/image/payment_guest.html"><button class="guestPurchaseBtn">비회원 구매하기</button></a>
          </div>
        </div>
      </div>
    </body>
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
body,
html {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 320px;
  width: 100%;
  height: 100%;
}
.loginBox {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 300px;
  height: 570px;
  padding: 20px;
  background-color: black;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  border-radius: 5px;
  border: 3px solid #ffbf00;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  text-decoration: none;
}
.logo span {
  color: #ffbf00;
  font-family: "MoveSans-Bold";
  font-size: 30px;
  font-weight: 500;
  line-height: 7px;
}
.socialGroup {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
}
.iconGroup {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  gap: 50px;
  background-color: #fff;
}
.guestBtnGroup {
  display: flex;
  gap: 10px;
}
.guestPurchaseBtn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 122px;
  height: 29px;
  border-radius: 30px;
  background: #fff;
  border-color: transparent;
  color: #000;
  font-size: 16px;
  line-height: 23px;
  /* 164.286% */
}
.guestPurchaseBtn:hover {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  cursor: pointer;
}
</style>
