import Vue from 'vue';
import Buefy from 'buefy';
import App from './App.vue';
import apiService from './common/api.service';
import router from './router';
import store from './store';
import 'buefy/dist/buefy.css';

// import env from './';

Vue.config.productionTip = false;

// Vue.prototype.$env = env;
Vue.use(Buefy);

apiService.init();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
