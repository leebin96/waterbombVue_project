<template>
  <div>
    <Header />
    <main>
      <div class="ticket-selection-container">
        <h1>Ticket Selection</h1>
        <!-- ticket_selection.vue 페이지 내용 작성 -->
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
};
</script>

<style scoped>
/* ticket_selection.vue 스타일 */
</style>
