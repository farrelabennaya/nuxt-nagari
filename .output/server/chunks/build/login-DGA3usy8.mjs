import { _ as __nuxt_component_0, a as _sfc_main$1 } from './TextInput-BwcNxb7P.mjs';
import { _ as __nuxt_component_2 } from './Primary-boqzUqEM.mjs';
import { u as useAuthStore } from './auth-B1XVed-6.mjs';
import { reactive, ref, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './server.mjs';
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
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@vueuse/core';
import 'tailwind-merge';
import '@iconify/vue';
import 'pinia-plugin-persistedstate';

const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useAuthStore();
    const form = reactive({
      username: "",
      password: ""
    });
    const errors = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormLabel = __nuxt_component_0;
      const _component_FormTextInput = _sfc_main$1;
      const _component_ButtonPrimary = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "min-h-screen flex items-center",
        style: { "background-image": "url('https://dutadamaisumaterabarat.id/wp-content/uploads/2023/02/images-37.jpeg')", "background-size": "cover", "background-position": "center" }
      }, _attrs))}><div class="w-full"><div class="card bg-white p-20 rounded-lg shadow-xl md:mx-auto mx-4 lg:w-1/3 H" style="${ssrRenderStyle({ "opacity": "0.9" })}"><img src="https://i.ibb.co.com/vQdTcW8/lubuk-malako.webp" class="h-36 mx-auto block" alt="FlowBite Logo"><h3 class="text-center text-2xl font-semibold">DIGITAL SERVICE <br> NAGARI LUBUK MALAKO</h3><p class="text-center text-sm">Mewujudkan digitalisasi dan moderenisasi</p><br><form class="max-w-sm mx-auto"><div class="mb-5">`);
      _push(ssrRenderComponent(_component_FormLabel, { for: "username" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Your Username`);
          } else {
            return [
              createTextVNode("Your Username")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FormTextInput, {
        id: "username",
        type: "username",
        placeholder: "Username",
        modelValue: unref(form).username,
        "onUpdate:modelValue": ($event) => unref(form).username = $event
      }, null, _parent));
      if (unref(errors).username) {
        _push(`<span class="text-red-500">${ssrInterpolate(unref(errors).username[0])}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-5">`);
      _push(ssrRenderComponent(_component_FormLabel, { for: "password" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Your Password`);
          } else {
            return [
              createTextVNode("Your Password")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FormTextInput, {
        id: "password",
        type: "password",
        placeholder: "password",
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event
      }, null, _parent));
      if (unref(errors).password) {
        _push(`<span class="text-red-500">${ssrInterpolate(unref(errors).password[0])}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ButtonPrimary, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Login`);
          } else {
            return [
              createTextVNode("Login")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-DGA3usy8.mjs.map
