<template>
  <div>
    <div class="header">
      <v-spacer />
      <div class="logo">
        <span>My Page</span>
      </div>
      <v-spacer />
      <RouterLink to="/" class="homeBt">
        <v-icon icon="mdi-home" />
      </RouterLink>
    </div>
    <main>
      <div class="mypageDetails">
        <div class="mypageTop">
          <v-btn class="profilePicture">
            <font-awesome-icon icon="fa-brands fa-jenkins" class="fa-jenkins" />
          </v-btn>
          <h2 class="nickname">어쩌구저쩌구이승빈님</h2>
          <v-btn class="myInfo">내 정보 수정</v-btn>
          <div class="imprtDtls">
            <RouterLink to="/myticket" class="textDeco">
              <v-btn variant="text" class="btn ">MyTickets</v-btn>
            </RouterLink>
            <v-btn variant="text" class="btn">
              취소내역
            </v-btn>
            <RouterLink to="/" class="textDeco">
              <v-btn variant="text" class="btn">
                LOGOUT
              </v-btn>
            </RouterLink>
          </div>
        </div>
        <v-card class="category ">
          <v-list class="d-flex px-5">
            서비스 문의
            <v-spacer />
            <v-icon icon="mdi-chevron-right" />
          </v-list>
          <v-list class="d-flex px-5">
            공지사항
            <v-spacer />
            <v-icon icon="mdi-chevron-right" />
          </v-list>
          <v-list class="d-flex px-5">
            자주 묻는 질문
            <v-spacer />
            <v-icon icon="mdi-chevron-right" />
          </v-list>
        </v-card>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiHome } from '@mdi/js';

export default {
  name: 'MyPage',
  components: {
    Header,
    Footer,
  },
  name: "my-component",
  components: {
    SvgIcon
  },
  data() {
    return {
      path: mdiHome,
    };
  }
};

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap");
@font-face {
  font-family: "MoveSans-Bold";
  src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/2405-2@1.0/MoveSans-Bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #000000;
  color: white;
  height: 50px;
  width: 100%;
}
.header .logo span {
  color: #ffbf00;
  font-family: "MoveSans-Bold";
  font-size: 20px;
  font-weight: 500;
}
.homeBt, .homeBt:visited {
  color: #ffbf00;
}
.homeBt:hover {
  color: #ffbf00;
}
.v-main > div {
  display: flex;
  flex-direction: column;
  height: 100%;
}
main {
  display: flex;
  flex: 1;
}
.mypageDetails {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 30px;
  padding: 20px 0 50px;
  background: #f4f3f8;
}
.mypageTop {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}
.profilePicture {
  display: flex;
  width: 75px;
  height: 75px;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 10px;
  border-radius: 20px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.fa-jenkins {
  width: 50px;
  height: 55px;
  font-size: 50px;
}
.myInfo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 25px;
  font-size: 10px;
  border-radius: 20px;
}
.imprtDtls {
  display: flex;
  flex-direction: row;
  position: relative;
  border-radius: 10px;
  background: #ffbf00;
}
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 55px;
  background: #ffbf00;
  border-radius: 10px;
  color: #FFF;
  font-weight: 700;
}
.btn::before {
  content: "";
  width: 2px;
  height: 25px;
  position: absolute;
  left: 100px;
  display: block;
  background-color: white;
}
.imprtDtls .btn:hover {
  box-shadow: inset 0px 3px 10px rgba(0, 0, 0, 0.2);
}
.textDeco {
  text-decoration: none;
}
.textDeco:visited {
  color: #fff;
}

.category {
  display: flex;
  flex-direction: column;
  width: 300px;
  background: #FFF;
  border-radius: 10px;
}
</style>
