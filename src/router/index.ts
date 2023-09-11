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
      path: '/stored-xss',
      name: 'stored',
      component: import('../views/stored.vue'),
    },
  ],
});

export default router;
