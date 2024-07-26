// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';

// Import Font Awesome plugin
import FontAwesome from './plugins/font-awesome';

loadFonts();

createApp(App)
  .use(router)
  .use(vuetify)
  .use(FontAwesome)
  .mount('#app');
