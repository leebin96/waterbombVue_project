<template>
  <div>
    <Header />
    <main>
      <div class="login-container">
        <h1>Login</h1>
        <!-- login01.html 및 login02.html 내용을 여기에 작성 -->
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
/* login.vue 스타일 */
</style>
