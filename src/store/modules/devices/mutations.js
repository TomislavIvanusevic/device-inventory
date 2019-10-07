/* eslint no-param-reassign: ["error", { "props": false }] */
export default {
  changeDevices(state, data) {
    state.devices = data;
  },
  addDevice(state, data) {
    state.devices.push(data);
  },
  removeDevice(state, id) {
    state.devices.splice(id, 1);
  },
  currentlyEditedDevice(state, data) {
    state.editedDevice = data;
  },
  toggleModal(state) {
    state.isModalOpen = !state.isModalOpen;
  },
};
