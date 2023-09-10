import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: import('../views/main.vue'),
    },
    {
      path: '/reflected-xss',
      name: 'reflected',
      component: import('../views/reflected.vue'),
    },
    {
      path: '/dom-based-xss',
      name: 'dom-based',
      component: import('../views/dom-based.vue'),
    },
  ],
});

export default router;
