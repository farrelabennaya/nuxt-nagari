import { _ as __nuxt_component_0 } from './nuxt-link-l5zPv3vf.mjs';
import { useSSRContext, defineComponent, ref, watch, mergeProps, withCtx, openBlock, createBlock, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { useRoute, useRouter } from 'vue-router';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SidebarAdmin",
  __ssrInlineRender: true,
  setup(__props) {
    const userDropdownOpen = ref(false);
    const nagariDropdownOpen = ref(false);
    const pendudukDropdownOpen = ref(false);
    const activeMenu = ref("");
    const route = useRoute();
    useRouter();
    const updateActiveMenu = () => {
      activeMenu.value = route.path;
    };
    watch(route, () => {
      updateActiveMenu();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<aside${ssrRenderAttrs(mergeProps({
        id: "logo-sidebar",
        class: "fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700",
        "aria-label": "Sidebar"
      }, _attrs))} data-v-542c8dd6><div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800" data-v-542c8dd6><ul class="space-y-2 font-medium" data-v-542c8dd6><li data-v-542c8dd6>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin",
        class: ["text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group", { "bg-gray-200": activeMenu.value === "/admin" }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-v-542c8dd6${_scopeId}><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" data-v-542c8dd6${_scopeId}></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" data-v-542c8dd6${_scopeId}></path></svg><span class="ml-3" data-v-542c8dd6${_scopeId}>Dashboard</span>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75",
                fill: "currentColor",
                viewBox: "0 0 20 20",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", { d: "M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" }),
                createVNode("path", { d: "M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" })
              ])),
              createVNode("span", { class: "ml-3" }, "Dashboard")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-542c8dd6><button type="button" class="flex items-center w-full p-2 text-base text-gray-900 font-normal transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-v-542c8dd6><svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-v-542c8dd6><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" data-v-542c8dd6></path></svg><span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap" data-v-542c8dd6>User</span><svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6" data-v-542c8dd6><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" data-v-542c8dd6></path></svg></button><ul style="${ssrRenderStyle(userDropdownOpen.value ? null : { display: "none" })}" id="dropdown-example" class="py-2 space-y-2" data-v-542c8dd6><li data-v-542c8dd6>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/user/data",
        class: ["flex items-center w-full p-2 text-gray-900 font-normal transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700", { "bg-gray-200": activeMenu.value === "/admin/user/data" }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Data User`);
          } else {
            return [
              createTextVNode("Data User")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-542c8dd6>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/petugas/data",
        class: ["flex items-center w-full p-2 text-gray-900 font-normal transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700", { "bg-gray-200": activeMenu.value === "/admin/petugas/data" }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Data Petugas`);
          } else {
            return [
              createTextVNode("Data Petugas")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></li><li data-v-542c8dd6><button type="button" class="flex items-center w-full p-2 text-base text-gray-900 font-normal transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example2" data-v-542c8dd6><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" data-v-542c8dd6><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.005 11.19V12l6.998 4.042L19 12v-.81M5 16.15v.81L11.997 21l6.998-4.042v-.81M12.003 3 5.005 7.042l6.998 4.042L19 7.042 12.003 3Z" data-v-542c8dd6></path></svg><span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap" data-v-542c8dd6>Nagari</span><svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6" data-v-542c8dd6><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" data-v-542c8dd6></path></svg></button><ul style="${ssrRenderStyle(nagariDropdownOpen.value ? null : { display: "none" })}" id="dropdown-example2" class="py-2 space-y-2" data-v-542c8dd6><li data-v-542c8dd6>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/nagari/jorong",
        class: ["flex items-center w-full p-2 text-gray-900 font-normal transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700", {
          "bg-gray-200": activeMenu.value === "/admin/nagari/jorong"
        }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Jorong`);
          } else {
            return [
              createTextVNode("Jorong")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-542c8dd6>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/nagari/alamat",
        class: ["flex items-center w-full p-2 text-gray-900 font-normal transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700", {
          "bg-gray-200": activeMenu.value === "/admin/nagari/alamat"
        }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Alamat`);
          } else {
            return [
              createTextVNode("Alamat")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-542c8dd6>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/nagari/rumah",
        class: ["flex items-center w-full p-2 text-gray-900 font-normal transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700", { "bg-gray-200": activeMenu.value === "/admin/nagari/rumah" }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Rumah`);
          } else {
            return [
              createTextVNode("Rumah")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></li><li data-v-542c8dd6><button type="button" class="flex items-center w-full p-2 text-base text-gray-900 font-normal transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example3" data-v-542c8dd6><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" data-v-542c8dd6><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 9h3m-3 3h3m-3 3h3m-6 1c-.306-.613-.933-1-1.618-1H7.618c-.685 0-1.312.387-1.618 1M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" data-v-542c8dd6></path></svg><span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap" data-v-542c8dd6>Penduduk</span><svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6" data-v-542c8dd6><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" data-v-542c8dd6></path></svg></button><ul style="${ssrRenderStyle(pendudukDropdownOpen.value ? null : { display: "none" })}" id="dropdown-example3" class="py-2 space-y-2" data-v-542c8dd6><li data-v-542c8dd6>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/nagari/keluarga",
        class: ["flex items-center w-full p-2 text-gray-900 font-normal transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700", {
          "bg-gray-200": activeMenu.value === "/admin/nagari/keluarga"
        }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Keluarga`);
          } else {
            return [
              createTextVNode("Keluarga")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-542c8dd6>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/nagari/anggotaKeluarga",
        class: ["flex items-center w-full p-2 text-gray-900 font-normal transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700", {
          "bg-gray-200": activeMenu.value === "/admin/nagari/anggotaKeluarga"
        }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Data Penduduk`);
          } else {
            return [
              createTextVNode("Data Penduduk")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></li><li data-v-542c8dd6>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/qr/create",
        class: ["text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group", {
          "bg-gray-200": activeMenu.value === "/admin/nagari/jorong/create"
        }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-v-542c8dd6${_scopeId}><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" data-v-542c8dd6${_scopeId}></path></svg><span class="ml-3 flex-1 whitespace-nowrap" data-v-542c8dd6${_scopeId}>QR Code</span>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75",
                fill: "currentColor",
                viewBox: "0 0 20 20",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  "fill-rule": "evenodd",
                  d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
                  "clip-rule": "evenodd"
                })
              ])),
              createVNode("span", { class: "ml-3 flex-1 whitespace-nowrap" }, "QR Code")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><div class="space-y-2 pt-2" data-v-542c8dd6></div></ul></div></aside>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SidebarAdmin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-542c8dd6"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=SidebarAdmin-vvFIfM9T.mjs.map
