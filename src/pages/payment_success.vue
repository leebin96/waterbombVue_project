<template>
  <div>
    <Header />
    <main>
      <div class="sec02">
        <div class="sec02Top">
          <v-icon icon="mdi-check-circle-outline" color="light-green-accent-3" class="check" size="x-large"></v-icon>
          <h1>티켓 결제 완료</h1>
          <h2>예매번호 0282-0626-3039-955</h2>
          <h3>비회원인 경우 <span> "MYTICKET"</span> 에서 <span>예매번호</span> 또는 결제 시 사용한 <span>핸드폰 번호</span>를 입력해야만 예매 내역을 확인할 수
            있습니다.</h3>
          <h3>“발급된 <span>예매번호</span>와 <span>QR코드</span>를 저장하세요.”</h3>
        </div>
        <v-card class="d-flex px-5  sec02Middle">
          <v-list class="d-flex payInfo payInfoBold">
            결제금액 <v-spacer /> 220,000원
          </v-list>
          <v-list class="d-flex payInfo">
            결제일자 <v-spacer /> <span>2024.6.30</span>
          </v-list>
          <v-list class="d-flex payInfo">
            결제수단 <v-spacer /> <span>카카오페이(3177)</span>
          </v-list>
          <v-list class="d-flex payInfo">
            지역 <v-spacer /> <span>SEOUL</span>
          </v-list>
          <v-list class="d-flex payInfo">
            날짜 <v-spacer /> <span>VIP_BLUE</span>
          </v-list>
          <v-list class="d-flex payInfo">
            좌석 <v-spacer /> <span>2024.7.5(SUN)</span>
          </v-list>
        </v-card>
        <div class="sec02Qr">
          <div class="qr">
          </div>
          <v-btn class="d-flex save" @click="saveBt"> <v-icon icon="mdi-download-box" class="download"></v-icon> 저장
          </v-btn>
        </div>
        <div class="sec02Bottom">
          <div class="caution">주의사항</div>
          <span>1) 본 티켓은 별도로 배송되지 않는 E-TICKET(QR코드)입니다.</span>
          <span>2)입장 QR코드는 예매자 정보를 기반으로 발송되며 방문자 정보와는 무관합니다.</span>
          <span>3)본 QR코드로 별도의 예매 내역 확인 없이 입장이 가능합니다.</span>
          <span>4)예매 내역 확인만으로는 입장에 제한이 있으며, 발급된 QR코드를 필히 준비해야합니다.</span>
          <span>5)본 페스티벌은 별도의 종이 티켓을 발권하지 않습니다.</span>
        </div>
      </div>
      <div class="sec03">
        <RouterLink to="/" class="textDeco">
          <v-btn class="confirmBt">확인</v-btn>
        </RouterLink>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script >
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';

export default {
  name: 'PaymentSuccess',
  components: {
    Header,
    Footer,
  },
  methods: {
    saveBt() {
      alert('저장되었습니다.');
    }
  }
};

</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 18% 0 5% 0;
  gap: 50px;
  background: url(/src/assets/image/payment_success/payment_success.jpg) no-repeat 50% 0% /contain;
  background-color: #F1F1F1;
}

.sec02 {
  display: flex;
  width: 90%;
  padding: 0px 25px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #fff;
  border-bottom: 2px dashed #686868;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.sec02Top {
  display: flex;
  padding: 30px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  align-self: stretch;
}
h1 {
  font-size: 24px;
  font-weight: 700;
}
h2 {
  font-size: 16px;
  font-weight: 700;
  color: #686868;
}
h3 {
  font-size: 14px;
  font-weight: 400;
  color: #686868;
}
h3 span {
  color: #17b0ff;
}
.sec02Middle {
  display: flex;
  padding: 20px 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
  align-self: stretch;
  box-shadow: none;
}
.payInfo {
  width: 100%;
  font-size: 16px;
}
.payInfoBold {
  font-size: 20px;
  font-weight: 900;
}
.payInfo {
  color: #4F4F4F;
}
.payInfo span {
  font-weight: 600;
  color: #4F4F4F;
}
.sec02Qr {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
.qr {
  display: flex;
  width: 135px;
  height: 135px;
  padding: 5px;
  align-items: center;
  align-self: stretch;
  border-radius: 5px;
  border: 3px solid #4DFF4D;
  background: url(/src/assets/image/payment_success/qrcode.png) no-repeat 100% / cover;
}
.save {
  display: flex;
  width: 123px;
  height: 25px;
  padding: 7px 42px 6px 49px;
  justify-content: flex-end;
  align-items: center;
}
.download {
  color: #17b0ff;
}
.sec02Bottom {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 30px 0;
  gap: 10px;
  width: 100%;
  border-top: 1px solid #686868;
}
.caution {
  width: 100%;
  color: red;
}
.sec02Bottom span {
  color: #686868;
}
.confirmBt {
  display: flex;
  width: 300px;
  height: 61px;
  padding: 21px 0px 19px 0px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: #0AABFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.textDeco {
  color: #fff;
  text-decoration: none;
}
</style>
