import { A as AppHeader } from './AppHeader-uzUtYZuA.mjs';
import { _ as __nuxt_component_1 } from './SidebarAdmin-vvFIfM9T.mjs';
import { _ as __nuxt_component_0, a as _sfc_main$1 } from './TextInput-BwcNxb7P.mjs';
import { reactive, ref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { useRouter } from 'vue-router';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
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
import '@vueuse/core';
import 'tailwind-merge';
import '@iconify/vue';
import 'pinia-plugin-persistedstate';

const _sfc_main = {
  __name: "create",
  __ssrInlineRender: true,
  setup(__props) {
    useAuthStore();
    useRouter();
    const form = reactive({
      name: "",
      description: ""
    });
    const errors = ref([]);
    const notification = reactive({
      show: false,
      message: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = AppHeader;
      const _component_SidebarAdmin = __nuxt_component_1;
      const _component_FormLabel = __nuxt_component_0;
      const _component_FormTextInput = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-0ec3a185>`);
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      _push(`<div class="flex overflow-hidden bg-white pt-16" data-v-0ec3a185>`);
      _push(ssrRenderComponent(_component_SidebarAdmin, null, null, _parent));
      _push(`<div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto sm:ml-64" data-v-0ec3a185><main data-v-0ec3a185><div class="pt-6 px-4 ml-5 mr-5" data-v-0ec3a185><h1 class="text-lg font-bold mb-4" data-v-0ec3a185>Create Jorong</h1>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></main><div class="min-h-screen flex" data-v-0ec3a185><div class="w-full" data-v-0ec3a185><div class="card bg-white p-10 rounded-lg shadow-md md:w-3/5 mx-auto lg:w-1/3" data-v-0ec3a185><h3 class="text-center text-2xl font-semibold" data-v-0ec3a185>Jorong Data</h3><form class="max-w-sm mx-auto" data-v-0ec3a185><div class="mb-5" data-v-0ec3a185>`);
      _push(ssrRenderComponent(_component_FormLabel, { for: "name" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Name`);
          } else {
            return [
              createTextVNode("Name")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FormTextInput, {
        id: "name",
        type: "text",
        placeholder: "Name",
        modelValue: form.name,
        "onUpdate:modelValue": ($event) => form.name = $event,
        class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50"
      }, null, _parent));
      if (errors.value.name) {
        _push(`<span class="text-red-500" data-v-0ec3a185>${ssrInterpolate(errors.value.name[0])}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-5" data-v-0ec3a185>`);
      _push(ssrRenderComponent(_component_FormLabel, { for: "description" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Description`);
          } else {
            return [
              createTextVNode("Description")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FormTextInput, {
        id: "description",
        type: "text",
        placeholder: "Description",
        modelValue: form.description,
        "onUpdate:modelValue": ($event) => form.description = $event,
        class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50"
      }, null, _parent));
      if (errors.value.description) {
        _push(`<span class="text-red-500" data-v-0ec3a185>${ssrInterpolate(errors.value.description[0])}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-1 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" data-v-0ec3a185>Add Jorong</button></form></div></div></div></div></div>`);
      if (notification.show) {
        _push(`<div id="toast-success" class="fixed bottom-4 right-4 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert" data-v-0ec3a185><div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200" data-v-0ec3a185><svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" data-v-0ec3a185><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" data-v-0ec3a185></path></svg><span class="sr-only" data-v-0ec3a185>Check icon</span></div><div class="ml-3 text-sm font-normal" data-v-0ec3a185>${ssrInterpolate(notification.message)}</div><button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" aria-label="Close" data-v-0ec3a185><span class="sr-only" data-v-0ec3a185>Close</span><svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" data-v-0ec3a185><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" data-v-0ec3a185></path></svg></button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/nagari/jorong/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const create = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0ec3a185"]]);

export { create as default };
//# sourceMappingURL=create-DweqCX8C.mjs.map
