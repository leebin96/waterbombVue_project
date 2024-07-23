<template>
  <div>
    <Header />
    <main>
      <div class="myticket-container">
        <h1>My Ticket</h1>
        <!-- myticket.html 및 myticket_empty.html 내용을 여기에 작성 -->
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
/* myticket.vue 스타일 */
</style>
