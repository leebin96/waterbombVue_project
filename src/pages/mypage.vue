<template>
  <div>
    <Header />
    <main>
      <div class="mypage-container">
        <h1>My Page</h1>
        <!-- mypage.vue 페이지 내용 작성 -->
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';

export default {
  name: 'MyPage',
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
/* mypage.vue 스타일 */
</style>
