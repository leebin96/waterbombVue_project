import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
// mdi-아이콘 가져오기
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import '@mdi/font/css/materialdesignicons.css';

// VNumberInput 컴포넌트 가져오기
import { VNumberInput } from 'vuetify/labs/components';

export default createVuetify({
  components: {
    ...components,
    VNumberInput,  // VNumberInput 컴포넌트 추가
  },
  directives,
  // 아이콘 컴포넌트 쓴다고 선언해야지만 화면에 뜬다
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
});
