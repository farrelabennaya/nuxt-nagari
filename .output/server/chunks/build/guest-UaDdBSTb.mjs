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

const guest = defineNuxtRouteMiddleware((to, from) => {
  const tokenStore = useTokenStore();
  const auth = useAuthStore();
  const guestOnlyRoutes = ["/auth/login", "/auth/register"];
  if (tokenStore.getStatus && guestOnlyRoutes.includes(to.path)) {
    switch (auth.user.role_id) {
      case 1:
        return navigateTo("/admin");
      case 2:
        return navigateTo("/petugas");
      case 3:
        return navigateTo("/warga");
      default:
        return navigateTo("/");
    }
  }
});

export { guest as default };
//# sourceMappingURL=guest-UaDdBSTb.mjs.map
