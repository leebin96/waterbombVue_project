<template>
  <div>
    <Header />
    <main>
      <div class="paymentContents">
        <h2>예매/결제</h2>
        <div class="guestInfo">
          <p>주문정보</p>
          <div class="info">
            <p>비회원 인증</p><v-spacer />
            <span>인증 완료</span><v-spacer />
          </div>
        </div>
        <div class="confirmOrder">
          <p>주문상품 <span>(아래 내용이 맞는지 확인해 주세요.)</span></p>
        </div>
        <div class="order">
          <div class="orderContents">
            <!-- selectedCard가 정의되어 있는지 확인 -->
            <v-card v-if="selectedCard" class="card">
              <div>
                <h3>{{ selectedCard.logo }}</h3>
              </div>
              <p>{{ selectedCard.year }}</p>
              <h2>{{ selectedCard.location }}</h2>
              <p>{{ selectedCard.date }}</p>
            </v-card>
            <!-- selectedCard가 정의되지 않은 경우를 처리 -->
            <p v-else>Loading...</p>
            <div class="regionSchedule">
              <p>{{ selectedCard.logo }} {{ selectedCard.location }} {{ selectedCard.year }}</p>
              <p>{{ selectedCard.date }} 오후 1:00</p>
              <p>TICKETS(VIP_BLUE) 2 </p>
              <!-- 티켓수량에 대한 정보 -->
            </div>
          </div>
        </div>
        <div class="paymentMethod">
          <p>결제 수단</p>
          <div class="payList">
            <v-card class="cerditCard payItem">
              <div class="method"></div>
              <p>신용카드</p>
            </v-card>
            <v-card class="naverPay payItem">
              <div class="method"></div>
              <p>네이버페이</p>
            </v-card>
            <v-card class="kakaoPay payItem">
              <div class="method"></div>
              <p>카카오페이</p>
            </v-card>
            <v-card class="bankTransfer payItem">
              <div class="method"></div>
              <p>무통장입금</p>
            </v-card>
          </div>
        </div>
        <div class="totalAmount">
          <div class="totalLabel">
            <p>총 결제금액</p>
            <p>220,000원</p>
          </div>
        </div>
        <v-list class="checkBoxContainer">
          <v-list-item>
            <v-checkbox />
          </v-list-item>
        </v-list>
      </div>
    </main>
    <Footer />
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
        // ... other card data
      ],
      selectedCard: null,  // 초기값을 null로 설정
    };
  },
  created() {
    // 임시로 SEOUL이 선택된 것으로 가정
    const location = "SEOUL";
    this.selectedCard = this.cardsData.find(card => card.location === location) || null;
  },
};
</script>

<style scoped>
.paymentContents {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0 10px;
}
.paymentContents > h2 {
  display: flex;
  padding: 10px;
  justify-content: center;
  width: 100%;
  font-size: 16px;
  line-height: 23px;
  border-bottom: 1px solid #e4e4e6;
}
.guestInfo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 0px 10px;
  gap: 5px;
}
.guestInfo > p,
.confirmOrder > p,
.guestInfo .info p,
.totalLabel p,
.terms > div span,
.paymentMethod p {
  font-weight: 700;
}
.guestInfo p {
  margin: 0;
}
.guestInfo .info {
  display: flex;
  width: 100%;
  padding: 10px;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #E4E4E6;
}
.guestInfo .info span {
  color: #0AABFF;
  font-size: 14px;
}
.confirmOrder {
  display: flex;
  padding: 0px 10px;
  flex-direction: column;
  gap: 5px;
}
.confirmOrder p {
  margin: 0;
}
.confirmOrder p span {
  color: #686868;
  font-weight: 400;
}
.order {
  padding: 0 10px;
}
.orderContents {
  display: flex;
}
.card {
  flex-direction: column;
  align-items: center;
  display: flex;
  justify-content: center;
  height: 120px;
  width: 110px;
  box-shadow: none;
}
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
.card h2 {
  font-size: 16px;
  line-height: 12px;
  font-weight: 700;
  margin-bottom: 0;
}
.card h3 {
  font-size: 14px;
}
.card p {
  font-size: 12px;
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
.regionSchedule {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 0 0 0 10px;
}
.paymentMethod {
  display: flex;
  flex-direction: column;
}
.paymentMethod .payList {
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  padding: 10px;
  gap: 10px;
}
.payList .v-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: auto;
}
.payList .v-card:hover {
  border: 1px solid #ffbf00;
}
.method {
  display: flex;
  width: 50px;
  height: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.cerditCard .method {
  background: url(/src/assets/image/payment/carditcard.png) no-repeat 100% / cover;
}
.naverPay .method {
  background: url(/src/assets/image/payment/naverpay.png) no-repeat 100% / cover;
}
.kakaoPay .method {
  background: url(/src/assets/image/payment/kakaopay2.png) no-repeat 50% 50% / cover;
}
.bankTransfer .method {
  background: url(/src/assets/image/payment/banktransfer.png) no-repeat 100% / cover;
}
.payItem p {
  font-size: 12px;
}
.totalAmount {
  display: flex;
  justify-content: center;
  gap: 10px;
  height: 49px;
  padding: 10px;
  border-top: 1px solid #e4e4e6;
  background: #f6f6f6;
  border-radius: 5px;
}
.totalAmount .totalLabel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 0;
}
.terms {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 0 0 20px 0;
}
</style>
