<template>
  <div>
    <Header />
    <main>
      <div class="selectionBox">
        <div class="container">
          <div id="cards-container" class="cards-container">
            <v-card v-for="(card, index) in cards" :key="index" class="card"
              :class="{ selected: selectedCardIndex === index }" @click="selectCard(card)">
              <div>
                <h3>{{ card.logo }}</h3>
              </div>
              <p>{{ card.year }}</p>
              <h2>{{ card.location }}</h2>
              <p>{{ card.date }}</p>
            </v-card>
          </div>
          <!-- 카드 클릭시 날짜선택 버튼 출력 -->
          <div v-if="selectedCard">
            <v-btn v-for="date in selectedCard.dates" :key="date" @click="selectDate(date)">
              {{ date }}
            </v-btn>
          </div>
          <!-- 카드 선택하고 날짜 선택, 갯수선택시 계산화면 -->
          <div class="count">
            <v-col cols="12">
              <h5>수량</h5>
              <v-number-input v-model="selectedQuantity" variant="outlined" control-variant="split" inset
                class="countPickBt" />
            </v-col>

            <v-col cols="12">
              <div class="selection-info">
                <span>선택 정보</span>
                <div class="selected-info">
                  <div class="selected-info">
                    <p>선택한 카드: <span id="selected-card">{{ selectedCard ? selectedCard.location : '없음' }}</span></p>
                    <p>선택한 날짜: <span id="selected-date">{{ selectedDate }}</span></p>
                    <p>선택한 수량: <span id="selected-quantity">{{ selectedQuantity }}</span></p>
                  </div>
                </div>
              </div>
            </v-col>

            <v-col cols="12">
              <div class="price">
                <span>총 결제 금액</span>
                <div class="totalPrice">
                  <span>{{ totalPrice }} 원</span>
                </div>
              </div>
            </v-col>
            <div class="payment">
              <RouterLink to="/login" class="textDeco">
                <v-btn class="payBt" disabled="!selectedCard || !selectedDate">
                  결제하기
                </v-btn>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>


<script setup>
import { ref, computed } from 'vue';
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';

const cardsData = [
  {
    location: "SEOUL",
    logo: "WATERBOMB",
    year: "2024",
    date: "2024.5.7 (FRI-SUN)",
    dates: ["2024-05-07", "2024-05-08", "2024-05-09"],
  },
  {
    location: "JEJU",
    logo: "WATERBOMB",
    year: "2024",
    date: "2024.7.20 (SAT)",
    dates: ["2024-07-20"],
  },
  {
    location: "DAEGU",
    logo: "WATERBOMB",
    year: "2024",
    date: "2024.6.15 (SAT)",
    dates: ["2024-06-15"],
  },
  {
    location: "BUSAN",
    logo: "WATERBOMB",
    year: "2024",
    date: "2024.5.25 (SAT)",
    dates: ["2024-05-25"],
  },
  {
    location: "INCHEON",
    logo: "WATERBOMB",
    year: "2024",
    date: "2024.8.3 (SAT)",
    dates: ["2024-08-03"],
  },
  {
    location: "DAEJEON",
    logo: "WATERBOMB",
    year: "2024",
    date: "2024.6.29 (SAT)",
    dates: ["2024-06-29"],
  },
  {
    location: "SOKCHO",
    logo: "WATERBOMB",
    year: "2024",
    date: "2024.7.6 (SAT)",
    dates: ["2024-07-06"],
  },
  {
    location: "SUWON",
    logo: "WATERBOMB",
    year: "2024",
    date: "2024.5.17 (FRI-SUN)",
    dates: ["2024-05-17", "2024-05-18", "2024-05-19"],
  },
  {
    location: "YEOSU",
    logo: "WATERBOMB",
    year: "2024",
    date: "2024.8.10 (SAT)",
    dates: ["2024-08-10"],
  },
];

const selectedCard = ref(null);
const selectedDate = ref(null);
const selectedQuantity = ref(1);


const cards = computed(() => cardsData);

const totalPrice = computed(() => selectedQuantity.value * 10000);

const selectCard = (card) => {
  selectedCard.value = card;
};
const selectDate = (date) => {
  selectedDate.value = date;
};

</script>


<style scoped>
/* ticket_selection.vue 스타일 */
.selectionBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px 0 0 0;
}
.container {
  display: flex;
  width: 100%;
  max-width: 767px;
  flex-direction: column;
  align-items: center;
  padding: 0 0 5px 0;
}
.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  height: 100%;
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 1 30%;
  width: 30%;
  height: 150px;
  border: none;
  box-shadow: none;
  box-sizing: border-box;
  background-color: #f9f9f9;
  border-radius: 8px;
  gap: 10px;
}
.card:hover {
  cursor: pointer;
}
/* 카드 선택 시 스타일 추가 */
.card.selected {
  border: 2px solid #ffbf00;
}
/* 여기서 부터는 js파일에 해당하는 card라는 클래스에 css 를 준부분 */
.card > div {
  display: flex;
  width: 32px;
  height: 15px;
  justify-content: center;
  border-radius: 5px;
}
.card > div > h3 {
  color: #fff;
  font-family: MoveSans;
  font-size: 14px;
  font-weight: 500;
  line-height: 7px;
  border: 1px solid #fff;
  display: flex;
  padding: 5px;
  text-align: center;
  align-items: center;
  border-radius: 5px;
}
h2 {
  font-size: 20px;
  line-height: 12px;
  font-weight: 700;
  margin-bottom: 0;
}
h3 {
  font-size: 20px;
}
p {
  font-size: 14px;
  font-weight: 500;
  line-height: 12px;
}
.card:nth-child(1) {
  background: url(/src/assets/image/ticket_selection/seoul1.png) no-repeat 50% 50% / cover;
}
.card:nth-child(1):hover {
  background: url(/src/assets/image/ticket_selection/seoul2.png) no-repeat 50% 50% / cover;
}
.card:nth-child(2) {
  background: url(/src/assets/image/ticket_selection/jeju1.png) no-repeat 50% 50% / cover;
}
.card:nth-child(2):hover {
  background: url(/src/assets/image/ticket_selection/jeju2.png) no-repeat 50% 50% / cover;
}
.card:nth-child(3) {
  background: url(/src/assets/image/ticket_selection/daegu1.png) no-repeat 50% 50% / cover;
}
.card:nth-child(3):hover {
  background: url(/src/assets/image/ticket_selection/daegu2.png) no-repeat 50% 50% / cover;
}
.card:nth-child(4) {
  background: url(/src/assets/image/ticket_selection/busan1.png) no-repeat 50% 50% / cover;
}
.card:nth-child(4):hover {
  background: url(/src/assets/image/ticket_selection/busan2.png) no-repeat 50% 50% / cover;
}
.card:nth-child(5) {
  background: url(/src/assets/image/ticket_selection/incheon1.png) no-repeat 50% 50% / cover;
}
.card:nth-child(5):hover {
  background: url(/src/assets/image/ticket_selection/incheon2.png) no-repeat 50% 50% / cover;
}
.card:nth-child(6) {
  background: url(/src/assets/image/ticket_selection/daejeon1.png) no-repeat 50% 50% / cover;
}
.card:nth-child(6):hover {
  background: url(/src/assets/image/ticket_selection/daejeon2.png) no-repeat 50% 50% / cover;
}
.card:nth-child(7) {
  background: url(/src/assets/image/ticket_selection/sokcho1.png) no-repeat 50% 50% / cover;
}
.card:nth-child(7):hover {
  background: url(/src/assets/image/ticket_selection/sokcho2.png) no-repeat 50% 50% / cover;
}
.card:nth-child(8) {
  background: url(/src/assets/image/ticket_selection/suwon1.png) no-repeat 50% 50% / cover;
}
.card:nth-child(8):hover {
  background: url(/src/assets/image/ticket_selection/suwon2.png) no-repeat 50% 50% / cover;
}
.card:nth-child(9) {
  background: url(/src/assets/image/ticket_selection/yeosu1.png) no-repeat 50% 50% / cover;
}
.card:nth-child(9):hover {
  background: url(/src/assets/image/ticket_selection/yeosu2.png) no-repeat 50% 50% / cover;
}
.calendar-container {
  width: 100%
}
.calandar {
  width: 100%
}
.v-date-picker-header {
  display: none;
}
.count {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  align-items: center;
  width: 100%;
  max-width: 767px;
  gap: 10px;
}
.countPick,
.price {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 16px;
  background: var(--Neutral-True-White, #fff);
  box-shadow: 0px 2px 16px 0px rgba(6, 51, 54, 0.1);
  padding: 24px;
}
.countPick {
  box-shadow: none;
}
.countPick span,
.price span {
  font-size: 16px;
  font-weight: 700;
  line-height: 135%;
}
.selection-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--Neutral-True-White, #fff);
  border-radius: 16px;
  box-shadow: 0px 2px 16px 0px rgba(6, 51, 54, 0.1);
  padding: 24px;
}
.selected-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.selection-info span {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
}
.selected-info p {
  font-size: 14px;
  margin: 5px 0;
}
.payment {
  display: flex;
  width: 216px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  background: #fff;
}
.payBt {
  display: flex;
  width: 110px;
  height: 30px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: inherit;
  background: #0aabff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.payBt:hover {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
}
.textDeco {
  text-decoration: none;
  color: #fff;
}
@media screen and (max-width: 768px) {
  .cards-container {
    display: flex;
    flex-wrap: nowrap;
    overflow: auto;
  }
  .card {
    flex: 0 0 70%;
  }
}
</style>