import { _ as __nuxt_component_0, a as _sfc_main$1 } from './TextInput-BwcNxb7P.mjs';
import { _ as __nuxt_component_2 } from './Primary-boqzUqEM.mjs';
import { u as useAuthStore } from './auth-B1XVed-6.mjs';
import { reactive, ref, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
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
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    useAuthStore();
    const form = reactive({
      name: null,
      email: null,
      password: null,
      password_confirmation: null,
      role_id: null
      // Menambahkan field role_id
    });
    const errors = ref({});
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormLabel = __nuxt_component_0;
      const _component_FormTextInput = _sfc_main$1;
      const _component_ButtonPrimary = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex items-center" }, _attrs))}><div class="w-full"><div class="card bg-white p-20 rounded-lg shadow-xl md:w-3/5 mx-auto lg:w-1/3"><h3 class="text-center text-2xl font-semibold">User Registration</h3><form class="max-w-sm mx-auto"><div class="mb-5">`);
      _push(ssrRenderComponent(_component_FormLabel, { for: "name" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Your Name`);
          } else {
            return [
              createTextVNode("Your Name")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FormTextInput, {
        id: "name",
        type: "text",
        placeholder: "Your name",
        modelValue: unref(form).name,
        "onUpdate:modelValue": ($event) => unref(form).name = $event
      }, null, _parent));
      if (unref(errors).name) {
        _push(`<span class="text-red-500">${ssrInterpolate(unref(errors).name[0])}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-5">`);
      _push(ssrRenderComponent(_component_FormLabel, { for: "email" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Your Email`);
          } else {
            return [
              createTextVNode("Your Email")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FormTextInput, {
        id: "email",
        type: "email",
        placeholder: "Email address",
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event
      }, null, _parent));
      if (unref(errors).email) {
        _push(`<span class="text-red-500">${ssrInterpolate(unref(errors).email[0])}</span>`);
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
        placeholder: "Password",
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event
      }, null, _parent));
      if (unref(errors).password) {
        _push(`<span class="text-red-500">${ssrInterpolate(unref(errors).password[0])}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-5">`);
      _push(ssrRenderComponent(_component_FormLabel, { for: "password_confirmation" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Retype Password`);
          } else {
            return [
              createTextVNode("Retype Password")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FormTextInput, {
        id: "password_confirmation",
        type: "password",
        placeholder: "Retype password",
        modelValue: unref(form).password_confirmation,
        "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event
      }, null, _parent));
      if (unref(errors).password_confirmation) {
        _push(`<span class="text-red-500">${ssrInterpolate(unref(errors).password_confirmation[0])}</span>`);
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
      _push(`<select id="role" class="w-full p-2 border rounded"><option value="" disabled${ssrIncludeBooleanAttr(Array.isArray(unref(form).role_id) ? ssrLooseContain(unref(form).role_id, "") : ssrLooseEqual(unref(form).role_id, "")) ? " selected" : ""}>Select a role</option><option value="1"${ssrIncludeBooleanAttr(Array.isArray(unref(form).role_id) ? ssrLooseContain(unref(form).role_id, "1") : ssrLooseEqual(unref(form).role_id, "1")) ? " selected" : ""}>Admin</option><option value="2"${ssrIncludeBooleanAttr(Array.isArray(unref(form).role_id) ? ssrLooseContain(unref(form).role_id, "2") : ssrLooseEqual(unref(form).role_id, "2")) ? " selected" : ""}>Petugas</option><option value="3"${ssrIncludeBooleanAttr(Array.isArray(unref(form).role_id) ? ssrLooseContain(unref(form).role_id, "3") : ssrLooseEqual(unref(form).role_id, "3")) ? " selected" : ""}>Warga</option></select>`);
      if (unref(errors).role_id) {
        _push(`<span class="text-red-500">${ssrInterpolate(unref(errors).role_id[0])}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ButtonPrimary, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Register`);
          } else {
            return [
              createTextVNode("Register")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(errors).general) {
        _push(`<span class="text-red-500 mt-5 block">${ssrInterpolate(unref(errors).general[0])}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=register-BWc7zaZk.mjs.map
