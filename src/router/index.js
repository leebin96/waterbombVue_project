// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/pages/login.vue';
import Main from '@/pages/main.vue';
import MyTicket from '@/pages/myticket.vue';
import MyPage from '@/pages/mypage.vue';
import Payment from '@/pages/payment.vue';
import PaymentSuccess from '@/pages/payment_success.vue';
import TicketSelection from '@/pages/ticket_selection.vue';

const routes = [
  { path: '/', component: Main },
  { path: '/login', component: Login },
  { path: '/myticket', component: MyTicket },
  { path: '/mypage', component: MyPage },
  { path: '/payment', component: Payment },
  { path: '/payment_success', component: PaymentSuccess },
  { path: '/ticket_selection', component: TicketSelection },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
