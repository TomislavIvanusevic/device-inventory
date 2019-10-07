import mutations from './mutations';
import actions from './actions';

const state = {
  devices: [],
  editedDevice: null,
  isModalOpen: false,
};

const getters = {

};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
