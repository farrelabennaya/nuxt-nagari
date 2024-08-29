import { A as AppHeader } from './AppHeader-uzUtYZuA.mjs';
import { _ as __nuxt_component_1 } from './SidebarAdmin-vvFIfM9T.mjs';
import { _ as __nuxt_component_0, a as _sfc_main$1 } from './TextInput-BwcNxb7P.mjs';
import { a as useRouter } from './server.mjs';
import { reactive, ref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { u as useAuthStore } from './auth-B1XVed-6.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import 'vue-router';
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
      username: "",
      password: "",
      role_id: ""
    });
    const errors = ref([]);
    const roles = ref([
      { id: 1, name: "Admin" },
      { id: 2, name: "Petugas" },
      { id: 3, name: "Warga" }
    ]);
    const notification = reactive({
      show: false,
      message: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = AppHeader;
      const _component_SidebarAdmin = __nuxt_component_1;
      const _component_FormLabel = __nuxt_component_0;
      const _component_FormTextInput = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      _push(`<div class="flex overflow-hidden bg-white pt-16">`);
      _push(ssrRenderComponent(_component_SidebarAdmin, null, null, _parent));
      _push(`<div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto sm:ml-64"><main><div class="pt-6 px-4 ml-5 mr-5"><h1 class="text-lg font-bold mb-4">Create User</h1>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></main><div class="min-h-screen flex"><div class="w-full"><div class="card bg-white p-10 rounded-lg shadow-md md:w-3/5 mx-auto lg:w-1/3"><h3 class="text-center text-2xl font-semibold">User Data</h3><form class="max-w-sm mx-auto"><div class="mb-5">`);
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
        _push(`<span class="text-red-500">${ssrInterpolate(errors.value.name[0])}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-5">`);
      _push(ssrRenderComponent(_component_FormLabel, { for: "username" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Username`);
          } else {
            return [
              createTextVNode("Username")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FormTextInput, {
        id: "username",
        type: "text",
        placeholder: "Username",
        modelValue: form.username,
        "onUpdate:modelValue": ($event) => form.username = $event,
        class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50"
      }, null, _parent));
      if (errors.value.username) {
        _push(`<span class="text-red-500">${ssrInterpolate(errors.value.username[0])}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-5">`);
      _push(ssrRenderComponent(_component_FormLabel, { for: "password" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Password`);
          } else {
            return [
              createTextVNode("Password")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FormTextInput, {
        id: "password",
        type: "password",
        placeholder: "Password",
        modelValue: form.password,
        "onUpdate:modelValue": ($event) => form.password = $event,
        class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50"
      }, null, _parent));
      if (errors.value.password) {
        _push(`<span class="text-red-500">${ssrInterpolate(errors.value.password[0])}</span>`);
      } else {
        _push(`<!---->`);
      }
      if (form.password.length > 0 && form.password.length < 8) {
        _push(`<span class="text-red-500">Password minimal 8 karakter</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-5">`);
      _push(ssrRenderComponent(_component_FormLabel, { for: "role" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Role`);
          } else {
            return [
              createTextVNode("Role")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<select id="role" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50"> &gt; <!--[-->`);
      ssrRenderList(roles.value, (role) => {
        _push(`<option${ssrRenderAttr("value", role.id)}>${ssrInterpolate(role.name)}</option>`);
      });
      _push(`<!--]--></select>`);
      if (errors.value.role_id) {
        _push(`<span class="text-red-500">${ssrInterpolate(errors.value.role_id[0])}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-1 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add User</button></form></div></div></div></div></div>`);
      if (notification.show) {
        _push(`<div id="toast-success" class="fixed bottom-4 right-4 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert"><div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200"><svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path></svg><span class="sr-only">Check icon</span></div><div class="ml-3 text-sm font-normal">${ssrInterpolate(notification.message)}</div><button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" aria-label="Close"><span class="sr-only">Close</span><svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path></svg></button></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/user/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=create-CSoLe_bF.mjs.map
