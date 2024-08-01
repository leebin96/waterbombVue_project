// stores/ticketStore.js
import { defineStore } from 'pinia';

export const useTicketStore = defineStore('ticket', {
  state: () => ({
    cards: [
      {
        location: "SEOUL",
        logo: "WATERBOMB",
        year: "2024",
        date: "2024.8.2 (FRI-SUN)",
        dates: ["2024-08-02", "2024-08-03", "2024-08-04"],
      },
      {
        location: "JEJU",
        logo: "WATERBOMB",
        year: "2024",
        date: "2024.7.20 (SAT)",
        dates: ["2024-07-20"],
      },
      {
        location: "DAEGU",
        logo: "WATERBOMB",
        year: "2024",
        date: "2024.8.17 (SAT)",
        dates: ["2024-08-17"],
      },
      {
        location: "BUSAN",
        logo: "WATERBOMB",
        year: "2024",
        date: "2024.8.17 (SAT)",
        dates: ["2024-08-17"],
      },
      {
        location: "INCHEON",
        logo: "WATERBOMB",
        year: "2024",
        date: "2024.8.24 (SAT)",
        dates: ["2024-08-24"],
      },
      {
        location: "DAEJEON",
        logo: "WATERBOMB",
        year: "2024",
        date: "2024.6.29 (SAT)",
        dates: ["2024-06-29"],
      },
      {
        location: "SOKCHO",
        logo: "WATERBOMB",
        year: "2024",
        date: "2024.7.6 (SAT)",
        dates: ["2024-07-06"],
      },
      {
        location: "SUWON",
        logo: "WATERBOMB",
        year: "2024",
        date: "2024.8.23 (FRI-SUN)",
        dates: ["2024-08-23", "2024-08-24", "2024-08-25"],
      },
      {
        location: "YEOSU",
        logo: "WATERBOMB",
        year: "2024",
        date: "2024.8.10 (SAT)",
        dates: ["2024-08-10"],
      },
    ],
    selectedCard: null,
    selectedDate: null,
    selectedQuantity: 1,
  }),
  getters: {
    totalPrice(state) {
      return state.selectedQuantity * 10000;
    },
  },
  actions: {
    selectCard(card) {
      this.selectedCard = card;
    },
    selectDate(date) {
      this.selectedDate = date;
    },
    setQuantity(quantity) {
      this.selectedQuantity = quantity;
    },
  },
});
