import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress/nprogress';

import routes from './routes';

Vue.use(Router);

const router = new Router({
  routes,
  // Scroll to previous page position
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});

router.beforeEach((routeTo, routeFrom, next) => {
  // Show progress bar if this isn't an initial page load.
  if (routeFrom.name !== null) {
    NProgress.start();
  }

  next();
});

router.afterEach(() => {
  // Complete the animation of the route progress bar.
  NProgress.done();
});

export default router;
