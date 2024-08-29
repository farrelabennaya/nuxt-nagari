import { A as AppHeader } from './AppHeader-uzUtYZuA.mjs';
import { _ as __nuxt_component_1 } from './SidebarAdmin-vvFIfM9T.mjs';
import { ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { u as useAuthStore } from './auth-B1XVed-6.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './nuxt-link-l5zPv3vf.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@vueuse/core';
import 'tailwind-merge';
import '@iconify/vue';
import 'pinia-plugin-persistedstate';

const _sfc_main = {
  __name: "create",
  __ssrInlineRender: true,
  setup(__props) {
    useAuthStore();
    const rumah_id = ref("");
    const errors = ref([]);
    const qrCodeData = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = AppHeader;
      const _component_SidebarAdmin = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-e07a947b>`);
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      _push(`<div class="flex overflow-hidden bg-white pt-16" data-v-e07a947b>`);
      _push(ssrRenderComponent(_component_SidebarAdmin, null, null, _parent));
      _push(`<div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto sm:ml-64" data-v-e07a947b><main data-v-e07a947b><div class="pt-6 px-4 ml-5 mr-5" data-v-e07a947b><h1 class="text-lg font-bold mb-4" data-v-e07a947b>Generate QR Code for Rumah</h1><form class="max-w-sm mx-auto" data-v-e07a947b><div class="mb-5" data-v-e07a947b><label for="rumah_id" class="block text-sm font-medium text-gray-700" data-v-e07a947b>Rumah ID</label><input id="rumah_id" type="text"${ssrRenderAttr("value", rumah_id.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" data-v-e07a947b>`);
      if (errors.value.rumah_id) {
        _push(`<span class="text-red-500" data-v-e07a947b>${ssrInterpolate(errors.value.rumah_id[0])}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-1 mb-2" data-v-e07a947b>Generate QR Code</button></form>`);
      if (qrCodeData.value) {
        _push(`<div class="mt-6" data-v-e07a947b><h2 class="text-lg font-bold mb-4" data-v-e07a947b>QR Code:</h2><img${ssrRenderAttr("src", `data:image/png;base64,${qrCodeData.value}`)} alt="QR Code" data-v-e07a947b></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></main></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/qr/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const create = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e07a947b"]]);

export { create as default };
//# sourceMappingURL=create-De9fbK98.mjs.map
