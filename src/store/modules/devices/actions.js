import { DeviceService } from '@/common/api.service';

export default {
  fetchDevices({ commit }) {
    return DeviceService.query()
      .then(({ data }) => {
        commit('changeDevices', data);
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
};
