import Vue from 'vue';
import App from './App';
import router from './router';

// import '@/assets/icons/iconfont.js';

import ElementUI from 'element-ui';
Vue.use(ElementUI, {
  size: 'small'
});

import '@/styles/index.less';
import '@/assets/icons/iconfont.css';


new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
});