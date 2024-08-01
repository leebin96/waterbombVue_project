import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import FontAwesome from './plugins/font-awesome';

import { createPinia } from 'pinia';

loadFonts();

const app = createApp(App);
const pinia = createPinia();

app.use(router)
  .use(vuetify)
  .use(FontAwesome)
  .use(pinia) // Add Pinia
  .mount('#app');