import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/admin',
      name: 'home',
      component: () => import('./views/Dashboard.vue'),
    },
    {
      path: '/',
      name: 'Index',
      component: () => import('./views/Index.vue'),
    },
  ],
});
