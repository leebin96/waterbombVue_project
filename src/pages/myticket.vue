<template>
  <div>
    <Header />
    <main>
      <div class="container">
        <v-card>
          <v-tabs v-model="tab" bg-color="#000" align-tabs="center" color="amber-darken-1">
            <v-tab value="one" class="mr-3">사용 가능한 티켓</v-tab>
            <v-tab value="two" class="ml-3">사용 불가능한 티켓</v-tab>
          </v-tabs>
          <v-card-text bg-color="#000">
            <v-tabs-window v-model="tab">
              <v-tabs-window-item value="one">
                <div class="swiper-container">
                  <swiper :pagination="{
                    type: 'fraction',
                  }" :navigation="true" :modules="modules" class="mySwiper">
                    <swiper-slide v-for="ticket in ticketsData" :key="ticket.bookingNumber" class="swiper-slide">
                      <div class="ticket">
                        <div class="qr-code">
                          <img src="/src/assets/image/myticket/qrcode.png" alt="qr">
                        </div>
                        <p>예매번호:<br> <span>{{ ticket.bookingNumber }}</span></p>
                        <p>장소: <span>{{ ticket.location }}</span></p>
                        <p>날짜: <span>{{ ticket.date }}</span></p>
                        <p>시간: <span>{{ ticket.time }}</span></p>
                        <p>좌석 등급: <span>{{ ticket.seatGrade }}</span></p>
                        <button class="confirm-btn" @click="handleConfirm"> <i
                            class="fa-solid fa-download"></i>저장</button>
                      </div>
                      <p>티켓을 찾을 수 없습니다.</p>
                      <RouterLink to="/ticket_selection"><button class="buyTickets">
                          BuyTickets</button></RouterLink>
                    </swiper-slide>
                  </swiper>
                </div>
              </v-tabs-window-item>
              <v-tabs-window-item value="two">
              </v-tabs-window-item>
            </v-tabs-window>
          </v-card-text>
        </v-card>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
// 스와이퍼
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

export default {
  components: {
    Header,
    Footer,
    Swiper,
    SwiperSlide,
  },
  data: () => ({
    tab: null,
    ticketsData: [
      {
        bookingNumber: "2024000012987653",
        location: "SEOUL",
        date: "2024.7.5",
        time: "14:00",
        seatGrade: "VVIP",
        totalTickets: 2
      },
      {
        bookingNumber: "2024000012987654",
        location: "BUSAN",
        date: "2024.8.10",
        time: "18:00",
        seatGrade: "VIP",
        totalTickets: 1
      },
      {
        bookingNumber: "2024000012987654",
        location: "BUSAN",
        date: "2024.8.10",
        time: "18:00",
        seatGrade: "VIP",
        totalTickets: 1
      },
      {
        bookingNumber: "2024000012987654",
        location: "BUSAN",
        date: "2024.8.10",
        time: "18:00",
        seatGrade: "VIP",
        totalTickets: 1
      }
    ]
  }),
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
  methods: {
    handleConfirm() {
      alert("저장 되었습니다.");
    }
  }
};

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap");
* {
  font-family: "Open Sans", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* outline: 1px solid navy; */
}
html {
  height: 100%;
}
body {
  /* 320px 이하로 줄어들었을때 레이아웃 유지시키기 */
  min-width: 320px;
  /* max-width: 990px; */
}
.v-main > div {
  display: flex;
  flex-direction: column;
  height: 100%;
}
main {
  flex: 1;
  background-color: #000;
}
.v-card-text {
  background: #000;
}
.v-slide-group__content {
  gap: 20px;
}
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #000;
  color: #fff;
  gap: 50px;
  padding-bottom: 50px;
}
.swiper-container {
  position: relative;
}

.swiper {
  width: 100%;
  position: initial;
  --swiper-theme-color: #4DFF4D;
  --swiper-pagination-bottom: auto;
  --swiper-pagination-top: -4px;
  color: #4DFF4D;
}
.swiper-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
}
.swiper > .swiper-wrapper > .swiper-slide > p {
  color: #fff;
}
.swiper > .swiper-wrapper > .swiper-slide > .buyTickets {
  color: #000;
}
.ticket {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(/src/assets/image/myticket/ticket.png) no-repeat 50% 50% / contain;
  color: #000;
  border-radius: 10px;
  gap: 10px;
  width: 100%;
  height: 400px;
}
.ticket p {
  font-size: 14px;
  color: #6D6D6D;
  line-height: 23px;
  text-align: center;
}
.ticket p span {
  font-size: 16px;
  font-weight: 700;
  color: #000;
  line-height: 23px;
}
.qr-code {
  font-size: 70px;
  text-align: center;
  height: 84px;
}

.confirm-btn {
  background-color: #4DFF4D;
  color: #000;
  border: none;
  padding: 10px 20px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 16px;
}

.buyTickets {
  background-color: #00A8FF;
  border: none;
  padding: 10px 20px;
  border-radius: 30px;
  cursor: pointer;
  width: 230px;
  font-size: 18px;
  font-weight: 400;
}
.buyTickets:hover {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
}
</style>
