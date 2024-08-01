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
            <v-card :class="selectedCard ? selectedCard.location : ''" class="card">
              <div>
                <h3>{{ selectedCard?.logo }}</h3>
              </div>
              <p>{{ selectedCard?.year }}</p>
              <h2>{{ selectedCard?.location }}</h2>
              <p>{{ selectedDate }}</p>
            </v-card>
            <!-- selectedCard가 정의되지 않은 경우를 처리 -->
            <div class="regionSchedule">
              <p>{{ selectedCard?.logo }} {{ selectedCard?.location }} {{ selectedCard?.year }}</p>
              <p>{{ selectedDate }} 오후 1:00</p>
              <p>TICKETS(VIP_BLUE) {{ selectedQuantity }} </p>
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
            <p>{{ totalPrice }}원</p>
          </div>
        </div>
        <v-list class="checkBoxContainer">
          <v-list-item value="check1">
            <template v-slot:prepend="{ isActive }">
              <v-list-item-action start><span class="need">(필수)</span>
                <v-checkbox-btn />
              </v-list-item-action>
            </template>
            <v-list-item-subtitle class="overflow"><span class="termsInfo">
                워터밤 2024는 만 19세 이상만 참여 가능하며, 2024년부터는 2005년 12월 31일 이전 출생자에 한해 입장이 가능합니다. (대학생이어도
                06년생은 입장 불가합니다.)</span>
            </v-list-item-subtitle>
          </v-list-item>
          <v-list-item value="check2">
            <template v-slot:prepend="{ isActive }">
              <v-list-item-action start><span class="need">(필수)</span>
                <v-checkbox-btn />
              </v-list-item-action>
            </template>
            <v-list-item-subtitle class="overflow"><span class="termsInfo">
                티켓 발급 후 7일 이내 취소: 100% 환불 가능, 티켓 발급 후 3일 이내 취소: 50% 환불 가능, 당일 취소 및 노쇼: 환불 불가능, 티켓
                양도: 불가능 합니다.</span>
            </v-list-item-subtitle>
          </v-list-item>
          <v-list-item value="check3">
            <template v-slot:prepend="{ isActive }">
              <v-list-item-action start><span class="need">(필수)</span>
                <v-checkbox-btn />
              </v-list-item-action>
            </template>
            <v-list-item-subtitle class="overflow"><span class="termsInfo">
                상기 결제정보를 확인하였으며, 구매진행에 동의합니다.
              </span>
            </v-list-item-subtitle>
          </v-list-item>
        </v-list>

        <RouterLink to="/payment_success" class="btnConfirm">
          <v-btn size="x-large" color="#0AABFF"> 확인 </v-btn>
        </RouterLink>

      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useTicketStore } from '@/stores/ticketStore';
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';

const ticketStore = useTicketStore();

const selectedCard = computed(() => ticketStore.selectedCard);
const selectedDate = computed(() => ticketStore.selectedDate);
const selectedQuantity = computed(() => ticketStore.selectedQuantity);
const totalPrice = computed(() => ticketStore.totalPrice);
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
.checkBoxContainer > p,
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
  height: 140px;
  width: 140px;
  box-shadow: none;
  gap: 7px;
  padding: 0 20px;
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
.card.SEOUL {
  background: url(/src/assets/image/ticket_selection/seoul1.png) no-repeat 50% 50% / cover;
}

.card.JEJU {
  background: url(/src/assets/image/ticket_selection/jeju1.png) no-repeat 50% 50% / cover;
}

.card.DAEGU {
  background: url(/src/assets/image/ticket_selection/daegu1.png) no-repeat 50% 50% / cover;
}

.card.BUSAN {
  background: url(/src/assets/image/ticket_selection/busan1.png) no-repeat 50% 50% / cover;
}

.card.INCHEON {
  background: url(/src/assets/image/ticket_selection/incheon1.png) no-repeat 50% 50% / cover;
}

.card.DAEJEON {
  background: url(/src/assets/image/ticket_selection/daejeon1.png) no-repeat 50% 50% / cover;
}

.card.SOKCHO {
  background: url(/src/assets/image/ticket_selection/sokcho1.png) no-repeat 50% 50% / cover;
}

.card.SUWON {
  background: url(/src/assets/image/ticket_selection/suwon1.png) no-repeat 50% 50% / cover;
}

.card.YEOSU {
  background: url(/src/assets/image/ticket_selection/yeosu1.png) no-repeat 50% 50% / cover;
}

.regionSchedule {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 0 0 0 10px;
  font-weight: 700;
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
.checkBoxContainer {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 20px
}

.overflow {
  display: flex;
  overflow: initial;
}
.need {
  font-size: 10px;
  color: #D32F2F;
}
.termsInfo {
  color: black;
  font-weight: 700;
}
.btnConfirm {
  display: inline-flex;
  padding: 10px;
  align-items: center;
  flex-direction: column;
  text-decoration: none;
  align-self: center;
}
</style>
