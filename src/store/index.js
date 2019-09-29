import Vue from 'vue';
import Vuex from 'vuex';
import shared from './modules/shared';
import devices from './modules/devices';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    shared,
    devices,
  },
});
