import { DeviceService } from '@/common/api.service';

export default {
  async fetchDevices({ commit }) {
    const response = await DeviceService.query();
    console.log('TCL: fetchDevices -> response', response);
    if (response.status === 200) {
      const { data } = response;
      commit('changeDevices', data);
    }
  },
  newDevice(context, device) {
    return DeviceService.create(device);
  },
  editDevice(context, device) {
    return DeviceService.update(device);
  },
  async deleteDevice({ commit }, { id, index }) {
    console.log(index, 'idd');
    const response = await DeviceService.delete(id);
    if (response.status === 200) {
      commit('removeDevice', index);
    }
  },
};
