// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Keluarga from '../pages/Keluarga.vue';
import KeluargaDetail from '../pages/KeluargaDetail.vue'; // Import halaman detail

const routes = [
  {
    path: '/keluarga',
    name: 'keluarga',
    component: Keluarga,
  },
  {
    path: '/keluarga/:id',
    name: 'keluarga-detail',
    component: KeluargaDetail,
    props: true, // Pass route params as props
  },
  // other routes...
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
