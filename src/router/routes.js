import Home from './views/Home.vue';
import About from './views/About.vue';
import Devices from './views/Devices.vue';

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/devices',
    name: 'devices',
    component: Devices,
  },
];
