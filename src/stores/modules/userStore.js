import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    name: 'John Doe',
    isLoggedIn: false,
  }),
  actions: {
    logIn() {
      this.isLoggedIn = true;
    },
    logOut() {
      this.isLoggedIn = false;
    },
  },
});
