<template>
  <div>
    <Header />
    <main>
      <div class="payment-success-container">
        <h1>Payment Success</h1>
        <!-- payment_success.vue 페이지 내용 작성 -->
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';

export default {
  name: 'PaymentSuccess',
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
/* payment_success.vue 스타일 */
</style>
