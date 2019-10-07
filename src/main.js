import Vue from 'vue';
import App from './App.vue';
import apiService from './common/api.service';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

// import env from './';

Vue.config.productionTip = false;

// Vue.prototype.$env = env;

apiService.init();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
