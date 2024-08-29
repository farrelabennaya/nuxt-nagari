import { A as AppHeader } from './AppHeader-uzUtYZuA.mjs';
import { _ as __nuxt_component_1 } from './SidebarAdmin-vvFIfM9T.mjs';
import { _ as __nuxt_component_0, a as _sfc_main$1 } from './TextInput-BwcNxb7P.mjs';
import { reactive, ref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { u as useAuthStore } from './auth-B1XVed-6.mjs';
import { useRouter } from 'vue-router';
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
      nama: "",
      username: "",
      password: "",
      keterangan: "",
      masa_aktif_akun: ""
    });
    const errors = ref({});
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = AppHeader;
      const _component_SidebarAdmin = __nuxt_component_1;
      const _component_FormLabel = __nuxt_component_0;
      const _component_FormTextInput = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-9ed78138>`);
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      _push(`<div class="flex overflow-hidden bg-white pt-16" data-v-9ed78138>`);
      _push(ssrRenderComponent(_component_SidebarAdmin, null, null, _parent));
      _push(`<div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto sm:ml-64" data-v-9ed78138><main data-v-9ed78138><div class="pt-6 px-4 ml-5 mr-5" data-v-9ed78138><h1 class="text-lg font-bold mb-4" data-v-9ed78138>Create Petugas</h1>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></main><div class="min-h-screen flex" data-v-9ed78138><div class="w-full" data-v-9ed78138><div class="card bg-white p-20 rounded-lg shadow-xl md:w-3/5 mx-auto lg:w-1/3" data-v-9ed78138><h3 class="text-center text-2xl font-semibold" data-v-9ed78138>Petugas Data</h3><form class="max-w-sm mx-auto" data-v-9ed78138><div class="mb-5" data-v-9ed78138>`);
      _push(ssrRenderComponent(_component_FormLabel, { for: "nama" }, {
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
        id: "nama",
        type: "text",
        placeholder: "Name",
        modelValue: form.nama,
        "onUpdate:modelValue": ($event) => form.nama = $event
      }, null, _parent));
      if (errors.value.nama) {
        _push(`<span class="text-red-500" data-v-9ed78138>${ssrInterpolate(errors.value.nama[0])}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-5" data-v-9ed78138>`);
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
        type: "username",
        placeholder: "Username",
        modelValue: form.username,
        "onUpdate:modelValue": ($event) => form.username = $event
      }, null, _parent));
      if (errors.value.username) {
        _push(`<span class="text-red-500" data-v-9ed78138>${ssrInterpolate(errors.value.username[0])}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-5" data-v-9ed78138>`);
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
        "onUpdate:modelValue": ($event) => form.password = $event
      }, null, _parent));
      if (errors.value.password) {
        _push(`<span class="text-red-500" data-v-9ed78138>${ssrInterpolate(errors.value.password[0])}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-5" data-v-9ed78138>`);
      _push(ssrRenderComponent(_component_FormLabel, { for: "keterangan" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Keterangan`);
          } else {
            return [
              createTextVNode("Keterangan")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FormTextInput, {
        id: "keterangan",
        type: "text",
        placeholder: "Keterangan",
        modelValue: form.keterangan,
        "onUpdate:modelValue": ($event) => form.keterangan = $event
      }, null, _parent));
      if (errors.value.keterangan) {
        _push(`<span class="text-red-500" data-v-9ed78138>${ssrInterpolate(errors.value.keterangan[0])}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-5" data-v-9ed78138>`);
      _push(ssrRenderComponent(_component_FormLabel, { for: "masa_aktif_akun" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Masa Aktif Akun`);
          } else {
            return [
              createTextVNode("Masa Aktif Akun")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FormTextInput, {
        id: "masa_aktif_akun",
        type: "date",
        placeholder: "Masa Aktif Akun",
        modelValue: form.masa_aktif_akun,
        "onUpdate:modelValue": ($event) => form.masa_aktif_akun = $event
      }, null, _parent));
      if (errors.value.masa_aktif_akun) {
        _push(`<span class="text-red-500" data-v-9ed78138>${ssrInterpolate(errors.value.masa_aktif_akun[0])}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><button type="submit" class="btn-primary" data-v-9ed78138>Add Petugas</button></form></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/petugas/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const create = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9ed78138"]]);

export { create as default };
//# sourceMappingURL=create-Dg0r21gR.mjs.map
