<template>
  <div>
    <Header />
    <main>
      <div class="selectionBox">
        <div class="container">
          <div id="cards-container" class="cards-container">
            <v-card v-for="(card, index) in cardsData" :key="index" class="card" @click="selectCard(index)">
              <div>
                <h3>{{ card.logo }}</h3>
              </div>
              <p>{{ card.year }}</p>
              <h2>{{ card.location }}</h2>
              <p>{{ card.date }}</p>
            </v-card>
          </div>
          <div class="calendar-container">
            <div id="calendar">
              <v-date-picker width="100%"></v-date-picker>
            </div>
          </div>
          <div class="count">
            <div class="countPick">
              <v-col cols="12" sm="6">
                <h5>수량 선택</h5>
                <v-number-input control-variant="split" inset></v-number-input>
              </v-col>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';

export default {
  name: 'TicketSelection',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      cardsData: [
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
      ],
      selectedCardIndex: null,
    };
  },
  methods: {
    selectCard(index) {
      this.selectedCardIndex = index;
      const selectedCard = this.cardsData[index];
      alert(`선택한 카드: ${selectedCard.location} - ${selectedCard.date}`);
      // 추가적인 카드 선택 로직을 여기에 작성할 수 있습니다.
    },
  },
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
  font-size: 4px;
  font-weight: 500;
  line-height: 7px;
}
h2 {
  font-size: 16px;
  line-height: 12px;
  font-weight: 700;
  margin-bottom: 0;
}
h3 {
  font-size: 20px;
}
p {
  font-size: 9px;
  font-weight: 500;
  line-height: 12px;
}
.card:nth-child(1) {
  background: url(/src/assets/image/ticket_selection/seoul1.jpg) no-repeat 50% 50% / cover;
}
.card:nth-child(1):hover {
  background: url(/src/assets/image/ticket_selection/seoul2.jpg) no-repeat 50% 50% / cover;
}
.card:nth-child(2) {
  background: url(/src/assets/image/ticket_selection/jeju1.jpg) no-repeat 50% 50% / cover;
}
.card:nth-child(2):hover {
  background: url(/src/assets/image/ticket_selection/jeju2.jpg) no-repeat 50% 50% / cover;
}
.card:nth-child(3) {
  background: url(/src/assets/image/ticket_selection/daegu1.jpg) no-repeat 50% 50% / cover;
}
.card:nth-child(3):hover {
  background: url(/src/assets/image/ticket_selection/daegu2.jpg) no-repeat 50% 50% / cover;
}
.card:nth-child(4) {
  background: url(/src/assets/image/ticket_selection/busan1.jpg) no-repeat 50% 50% / cover;
}
.card:nth-child(4):hover {
  background: url(/src/assets/image/ticket_selection/busan2.jpg) no-repeat 50% 50% / cover;
}
.card:nth-child(5) {
  background: url(/src/assets/image/ticket_selection/incheon1.jpg) no-repeat 50% 50% / cover;
}
.card:nth-child(5):hover {
  background: url(/src/assets/image/ticket_selection/incheon2.jpg) no-repeat 50% 50% / cover;
}
.card:nth-child(6) {
  background: url(/src/assets/image/ticket_selection/daejeon1.jpg) no-repeat 50% 50% / cover;
}
.card:nth-child(6):hover {
  background: url(/src/assets/image/ticket_selection/daejeon2.jpg) no-repeat 50% 50% / cover;
}
.card:nth-child(7) {
  background: url(/src/assets/image/ticket_selection/sokcho1.jpg) no-repeat 50% 50% / cover;
}
.card:nth-child(7):hover {
  background: url(/src/assets/image/ticket_selection/sokcho2.jpg) no-repeat 50% 50% / cover;
}
.card:nth-child(8) {
  background: url(/src/assets/image/ticket_selection/suwon1.jpg) no-repeat 50% 50% / cover;
}
.card:nth-child(8):hover {
  background: url(/src/assets/image/ticket_selection/suwon2.jpg) no-repeat 50% 50% / cover;
}
.card:nth-child(9) {
  background: url(/src/assets/image/ticket_selection/yeosu1.jpg) no-repeat 50% 50% / cover;
}
.card:nth-child(9):hover {
  background: url(/src/assets/image/ticket_selection/yeosu2.jpg) no-repeat 50% 50% / cover;
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
.countPick {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: auto;
  padding: 20px;
  border-radius: 16px;
  background: var(--Neutral-True-White, #fff);
  box-shadow: 0px 2px 16px 0px rgba(6, 51, 54, 0.1);
}
</style>
