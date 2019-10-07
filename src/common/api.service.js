import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = 'http://localhost:8081/api';
    ApiService.setHeader();
  },

  setHeader() {
    Vue.axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
  },

  query(resource, params) {
    return Vue.axios.get(resource, params).catch((error) => {
      throw new Error(`ApiService ${error}`);
    });
  },

  get(resource, slug = '') {
    return Vue.axios.get(`${resource}/${slug}`).catch((error) => {
      throw new Error(`ApiService ${error}`);
    });
  },

  post(resource, params) {
    return Vue.axios.post(`${resource}`, params);
  },

  update(resource, slug, params) {
    return Vue.axios.put(`${resource}/${slug}`, params);
  },

  //   put(resource, params) {
  //     return Vue.axios.put(`${resource}`, params);
  //   },

  delete(resource) {
    return Vue.axios.delete(resource).catch((error) => {
      throw new Error(`ApiService ${error}`);
    });
  },
};

export default ApiService;

export const DeviceService = {
  query(params) {
    return ApiService.query('devices', {
      params,
    });
  },
  get(slug) {
    return ApiService.get('device', slug);
  },
  create(params) {
    return ApiService.post('device', params);
  },
  update(slug, params) {
    return ApiService.update('device', slug, params);
  },
  delete(slug) {
    return ApiService.delete(`device/${slug}`);
  },
};
