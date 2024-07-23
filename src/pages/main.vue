<template>
  <Header />
  <main>
    <section class="sec01">
      <video autoplay muted src="/src/assets/video/Y2meta.app-WATERBOMB 2023 AFTERMOVIE-(720p).mp4" loop="100">
      </video>
    </section>
    <section class="sec02">
      <div class="inner">
        <RouterLink to="/ticket_selection"><v-btn class="buyTicket">
            BuyTicket
          </v-btn></RouterLink>
        <div class="contents">
          <div class="title">
            <h1>2024</h1>
            <h1>KOREA TOUR</h1>
          </div>
          <div class="info">
            <div class="location">
              <h2>SEOUL</h2>
              <h2>JEJU</h2>
              <h2>DAEGU</h2>
              <h2>BUSAN</h2>
              <h2>INCHON</h2>
              <h2>DAEON</h2>
              <h2>SOKCHO</h2>
              <h2>SUWON</h2>
              <h2>YEOSU</h2>
            </div>
            <div class="date">
              <h2>7.5-7.7 Fri-Sun</h2>
              <h2>7.13 Sat</h2>
              <h2>7.20 Sat</h2>
              <h2>7.27 Sat</h2>
              <h2>8.3 Sat</h2>
              <h2>8.10 Sat</h2>
              <h2>8.17 Sat</h2>
              <h2>8.24 Sat</h2>
              <h2>8.31 Sat</h2>
            </div>
          </div>
        </div>
      </div>
      <RouterLink to="/login" class="myTicket"><img src="/src/assets/image/main/myTickets.svg" alt="myticket"
          class="animate__animated animate__bounce animate__infinite animate__delay-2s myticketBtn">
      </RouterLink>
      <v-btn fab dark color="#ffbf00" class="scroll-to-top topBt" @click="scrollToTop">
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </section>
    <section class="sec03">
      <div class="contents">
        <div class="title">
          <h2>LAST YEAR</h2>
          <h3>2023</h3>
        </div>
        <v-carousel show-arrows="hover">
          <template v-slot:prev="{ props }">
            <!-- <v-btn color="success" variant="elevated" @click="props.onClick"> <svg-icon type="mdi"
                :path="path"></svg-icon></v-btn> -->
            <v-btn icon="mdi-menu-left" size="small" color="info" variant="elevated" @click="props.onClick">
            </v-btn>
          </template>
          <template v-slot:next="{ props }">
            <v-btn icon="mdi-menu-right" size="small" color="info" variant="elevated" @click="props.onClick">
            </v-btn>
          </template>
          <v-carousel-item src="/src/assets/image/main/dj.png" cover></v-carousel-item>
          <v-carousel-item src="/src/assets/image/main/adidas.png" cover></v-carousel-item>
          <v-carousel-item src="/src/assets/image/main/jpark.png" cover></v-carousel-item>
          <v-carousel-item src="/src/assets/image/main/handsup.png" cover></v-carousel-item>
          <v-carousel-item src="/src/assets/image/main/dara.png" cover></v-carousel-item>
        </v-carousel>
      </div>
    </section>
  </main>
  <Footer />
</template>

<script>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';

export default {
  name: 'Main',
  components: {
    Header,
    Footer,
  },
  name: 'App',
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
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
template {
  display: flex;
  flex-direction: column;
  align-content: center;
}
.sec01 {
  position: relative;
  width: 100%;
  height: 380px;
  overflow: hidden;
}
.sec01 video {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  pointer-events: none;
  /* 사용자가 비디오를 클릭할 수 없도록 함 */
  -webkit-touch-callout: none;
  /* 모바일 사파리에서 비디오를 선택할 수 없도록 함 */
}
.sec02 {
  width: 100%;
  height: 100%;
  background: url(/src/assets/image/main/sec02_bg.png) lightgray 0px 0px / 100% 100% no-repeat;
}
.sec02 .inner {
  display: flex;
  padding: 30px 0px;
  flex-direction: column;
  align-items: center;
  gap: 70px;
  position: relative;
}
.sec02 .inner .buyTicket {
  font-size: 20px;
  width: 140px;
  height: 30px;
  line-height: 21px;
  border-radius: 10px;
  background: #17b0ff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: #fff;
}
.sec02 .contents {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 100%;
}
.sec02 .contents .title {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  height: 56px;
  color: #fff;
}
.sec02 .contents .title h1 {
  color: #fff;
  text-align: center;
  font-size: 30px;
  font-weight: 800;
  line-height: 21px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.sec02 .contents .info {
  display: flex;
  gap: 50px;
}
.sec02 .location {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.sec02 .location h2 {
  color: #ffbf00;
  text-align: center;
  font-size: 30px;
  font-weight: 800;
  line-height: 21px;
  /* 95.455% */
  padding-bottom: 10px;
}
.sec02 .date {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.sec02 .date h2 {
  color: #fff;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  line-height: 21px;
  /* 105% */
  padding-bottom: 10px;
}
.topBt {
  color: white;
  position: fixed;
  background-color: #ffbf00;
  right: 25px;
  bottom: 90px;
  z-index: 9;
  /* width: 32px;
  height: 32px; */
}
.myticketBtn {
  position: fixed;
  right: 22px;
  bottom: 140px;
  z-index: 9;
  width: 70px;
  height: 88px;
}
.sec03 {
  width: 100%;
  height: auto;
  background: url(/src/assets/image/main/sec03_bg.png) no-repeat 100% /cover;
  padding-top: 15px;
}
.sec03 .contents {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  align-self: stretch;
}
.sec03 .title {
  display: flex;
  height: 56px;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  align-self: stretch;
}
.sec03 .title h2 {
  color: #fff;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 30px;
  font-weight: 800;
  line-height: 21px;
}
.sec03 .title h3 {
  text-align: center;
  font-size: 20px;
  font-weight: 800;
  line-height: 21px;
  background-image: linear-gradient(to right, #c0c0c0, #ededed);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
</style>
