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
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
.paymentContents {
  display: flex;
  flex-direction: column;
  gap: 15px;
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
</style>
