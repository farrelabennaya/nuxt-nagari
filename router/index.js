import { createRouter, createWebHistory } from 'vue-router';
import Keluarga from '../pages/Keluarga.vue';
import KeluargaDetail from '../pages/KeluargaDetail.vue';
import PendudukList from '@/pages/admin/maps/penduduklist.vue';
import ViewMap from '@/pages/admin/maps/viewmaps.vue';

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
    props: true,
  },
  {
    path: '/admin/penduduk',
    name: 'penduduk-list',
    component: PendudukList,
  },
  {
    path: '/admin/viewmaps',
    name: 'view-map',
    component: ViewMap,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
