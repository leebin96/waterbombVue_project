<template>
  <div>
    <Header />
    <main>
      <div class="payment-container">
        <h1>Payment</h1>
        <!-- payment.html 및 payment_guest.html 내용을 여기에 작성 -->
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
/* payment.vue 스타일 */
</style>
