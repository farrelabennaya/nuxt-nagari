import { a as useTokenStore, u as useAuthStore } from './auth-B1XVed-6.mjs';
import { useSSRContext, defineComponent, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const token = useTokenStore();
    const auth = useAuthStore();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "fixed top-0 z-50 w-full custom-bg border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700" }, _attrs))} data-v-87321263><div class="px-3 py-3 lg:px-5 lg:pl-3" data-v-87321263><div class="flex items-center justify-between" data-v-87321263><div class="flex items-center justify-start rtl:justify-end" data-v-87321263><button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" data-v-87321263><span class="sr-only" data-v-87321263>Open sidebar</span><svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-v-87321263><path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" data-v-87321263></path></svg></button><a href="https://flowbite.com" class="flex ms-2 md:me-24" data-v-87321263><img src="https://i.ibb.co.com/vQdTcW8/lubuk-malako.webp" class="h-10 me-3" alt="FlowBite Logo" data-v-87321263><span class="self-center text-xl font-semibold sm:text-2xl text-white whitespace-nowrap dark:text-white" data-v-87321263>Nagari Lubuk Malako</span></a></div><div class="flex items-center" data-v-87321263><div class="flex items-center ms-3" data-v-87321263><div data-v-87321263><button type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user" data-v-87321263><span class="sr-only" data-v-87321263>Open user menu</span><img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" data-v-87321263></button></div><div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user" data-v-87321263><div class="px-4 py-3" role="none" data-v-87321263><p class="text-sm text-gray-900 dark:text-white" role="none" data-v-87321263> Selamat Datang, </p><p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none" data-v-87321263>${ssrInterpolate((_a = unref(auth).getUser) == null ? void 0 : _a.name)}</p></div><ul class="py-1" role="none" data-v-87321263><li data-v-87321263><a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem" data-v-87321263>Dashboard</a></li><li data-v-87321263><a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem" data-v-87321263>Settings</a></li><li data-v-87321263><a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem" data-v-87321263>Earnings</a></li><li data-v-87321263><a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem" data-v-87321263>Sign out</a></li></ul></div><div class="hidden lg:flex items-center" data-v-87321263><span class="text-base font-normal text-gray-500 mr-5" data-v-87321263><p class="py-2" data-v-87321263> Halo, <strong data-v-87321263>${ssrInterpolate((_b = unref(auth).getUser) == null ? void 0 : _b.name)} \u2764\uFE0F</strong></p></span><div class="-mb-1" data-v-87321263>`);
      if (unref(token).getStatus) {
        _push(`<button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" data-v-87321263> Logout </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></div></div></nav>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AppHeader = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-87321263"]]);

export { AppHeader as A };
//# sourceMappingURL=AppHeader-uzUtYZuA.mjs.map
