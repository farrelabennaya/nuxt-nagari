import { e as defineNuxtRouteMiddleware, b as navigateTo } from './server.mjs';
import { a as useTokenStore } from './auth-B1XVed-6.mjs';
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

const auth = defineNuxtRouteMiddleware((to, from) => {
  const tokenStore = useTokenStore();
  if (!tokenStore.getStatus) {
    return navigateTo("/auth/login");
  }
});

export { auth as default };
//# sourceMappingURL=auth-DyE-43Bq.mjs.map
