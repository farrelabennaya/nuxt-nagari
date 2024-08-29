import { A as AppHeader } from './AppHeader-uzUtYZuA.mjs';
import { _ as __nuxt_component_1 } from './SidebarAdmin-vvFIfM9T.mjs';
import { _ as __nuxt_component_2 } from './FooterAdmin-BtLHyXbR.mjs';
import { ref, reactive, useSSRContext } from 'vue';
import { a as useTokenStore } from './auth-B1XVed-6.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot, ssrRenderList } from 'vue/server-renderer';
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
  components: {
    AppHeader,
    SidebarAdmin: __nuxt_component_1
  },
  setup() {
    const rumahList = ref([]);
    const counter = ref(0);
    const isEditModalOpen = ref(false);
    const isDeleteModalOpen = ref(false);
    const editForm = reactive({
      id: "",
      alamat_id: ""
    });
    const errors = ref([]);
    const isLoading = ref(false);
    const notification = reactive({
      message: "",
      show: false
    });
    const fetchRumah = async () => {
      try {
        const response = await fetch("http://laravel-api.test/api/rumahs");
        const data = await response.json();
        if (Array.isArray(data)) {
          counter.value = 0;
          rumahList.value = data.map((rumah) => ({
            ...rumah,
            number: ++counter.value
          }));
        } else {
          console.error("Invalid data format", data);
        }
      } catch (error) {
        console.error("Error fetching rumah:", error);
      }
    };
    const openEditModal = (rumah) => {
      editForm.id = rumah.id;
      editForm.alamat_id = rumah.alamat_id;
      isEditModalOpen.value = true;
    };
    const editRumah = async () => {
      const tokenStore = useTokenStore();
      errors.value = [];
      isLoading.value = true;
      try {
        const response = await fetch(
          `http://laravel-api.test/api/rumahs/${editForm.id}`,
          {
            method: "PUT",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${tokenStore.getToken}`
            },
            body: JSON.stringify({
              alamat_id: editForm.alamat_id
            })
          }
        );
        const data = await response.json();
        if (!response.ok) {
          if (data.errors) {
            errors.value = data.errors;
          } else {
            throw new Error(data.message || "Gagal mengedit rumah");
          }
        } else {
          const index2 = rumahList.value.findIndex(
            (rumah) => rumah.id === editForm.id
          );
          if (index2 !== -1) {
            rumahList.value[index2] = {
              ...data.rumah,
              number: rumahList.value[index2].number
            };
          }
          isEditModalOpen.value = false;
          showNotification("Rumah berhasil diedit!");
          await fetchRumah();
        }
      } catch (error) {
        console.error("Kesalahan mengedit rumah:", error);
      } finally {
        isLoading.value = false;
      }
    };
    const confirmDeleteRumah = (id) => {
      editForm.id = id;
      isDeleteModalOpen.value = true;
    };
    const deleteRumah = async () => {
      const tokenStore = useTokenStore();
      isLoading.value = true;
      try {
        const response = await fetch(
          `http://laravel-api.test/api/rumahs/${editForm.id}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${tokenStore.getToken}`
            }
          }
        );
        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.message || "Gagal menghapus rumah");
        }
        rumahList.value = rumahList.value.filter(
          (rumah) => rumah.id !== editForm.id
        );
        showNotification("Rumah berhasil dihapus!");
        isDeleteModalOpen.value = false;
      } catch (error) {
        console.error("Kesalahan menghapus rumah:", error);
      } finally {
        isLoading.value = false;
      }
    };
    const showNotification = (message) => {
      notification.message = message;
      notification.show = true;
      setTimeout(() => notification.show = false, 3e3);
    };
    return {
      rumahList,
      counter,
      isEditModalOpen,
      isDeleteModalOpen,
      editForm,
      errors,
      isLoading,
      notification,
      openEditModal,
      confirmDeleteRumah,
      editRumah,
      deleteRumah
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AppHeader = AppHeader;
  const _component_SidebarAdmin = __nuxt_component_1;
  const _component_FooterAdmin = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-f34c9609>`);
  _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
  _push(`<div class="flex overflow-hidden bg-white pt-16" data-v-f34c9609>`);
  if ($setup.notification.show) {
    _push(`<div id="toast-success" class="fixed bottom-4 right-4 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert" data-v-f34c9609><div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200" data-v-f34c9609><svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" data-v-f34c9609><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" data-v-f34c9609></path></svg><span class="sr-only" data-v-f34c9609>Check icon</span></div><div class="ml-3 text-sm font-normal" data-v-f34c9609>${ssrInterpolate($setup.notification.message)}</div><button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" aria-label="Close" data-v-f34c9609><span class="sr-only" data-v-f34c9609>Close</span><svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" data-v-f34c9609><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" data-v-f34c9609></path></svg></button></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_SidebarAdmin, null, null, _parent));
  _push(`<div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto sm:ml-64" data-v-f34c9609><main data-v-f34c9609><div class="pt-6 px-4 ml-5 mr-5" data-v-f34c9609><h1 class="text-lg font-bold mb-4" data-v-f34c9609>Data Rumah</h1><tr data-v-f34c9609><td data-v-f34c9609></td></tr>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></main><div class="relative overflow-x-auto ml-5 mr-5" data-v-f34c9609><table class="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400" data-v-f34c9609><thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" data-v-f34c9609><tr data-v-f34c9609><th scope="col" class="px-6 py-3" data-v-f34c9609>No</th><th scope="col" class="px-6 py-3" data-v-f34c9609>Alamat</th><th scope="col" class="px-6 py-3" data-v-f34c9609>QR Code</th></tr></thead><tbody data-v-f34c9609><!--[-->`);
  ssrRenderList($setup.rumahList, (rumah) => {
    _push(`<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" data-v-f34c9609><th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" data-v-f34c9609>${ssrInterpolate(rumah.number)}</th><td class="px-6 py-4" data-v-f34c9609>${ssrInterpolate(rumah.alamat.detail_alamat)}</td><td class="px-6 py-4" data-v-f34c9609></td></tr>`);
  });
  _push(`<!--]--></tbody></table></div>`);
  if ($setup.notification.show) {
    _push(`<div id="toast-success" class="fixed bottom-4 right-4 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert" data-v-f34c9609><div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200" data-v-f34c9609><svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" data-v-f34c9609><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" data-v-f34c9609></path></svg><span class="sr-only" data-v-f34c9609>Check icon</span></div><div class="ml-3 text-sm font-normal" data-v-f34c9609>${ssrInterpolate($setup.notification.message)}</div><button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" aria-label="Close" data-v-f34c9609><span class="sr-only" data-v-f34c9609>Close</span><svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" data-v-f34c9609><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" data-v-f34c9609></path></svg></button></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_FooterAdmin, null, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/nagari/rumah/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f34c9609"]]);

export { index as default };
//# sourceMappingURL=index-D9B0k0M5.mjs.map
