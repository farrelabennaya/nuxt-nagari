import { e as defineNuxtRouteMiddleware, b as navigateTo } from './server.mjs';
import { a as useTokenStore, u as useAuthStore } from './auth-B1XVed-6.mjs';
import 'vue';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'vue/server-renderer';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@vueuse/core';
import 'tailwind-merge';
import '@iconify/vue';
import 'pinia-plugin-persistedstate';

const role = defineNuxtRouteMiddleware((to, from) => {
  const tokenStore = useTokenStore();
  const auth = useAuthStore();
  if (!tokenStore.getStatus) {
    return navigateTo("/auth/login");
  } else {
    const roleRoutes = {
      1: "/admin",
      // Admin routes
      2: "/petugas",
      // Petugas routes
      3: "/warga"
      // Warga routes
    };
    const allowedRoutePrefix = roleRoutes[auth.user.role_id];
    if (allowedRoutePrefix && !to.path.startsWith(allowedRoutePrefix)) {
      return navigateTo(allowedRoutePrefix);
    }
  }
});

export { role as default };
//# sourceMappingURL=role-CcgSp2J7.mjs.map
