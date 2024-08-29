import { A as AppHeader } from './AppHeader-uzUtYZuA.mjs';
import { _ as __nuxt_component_1 } from './SidebarAdmin-vvFIfM9T.mjs';
import { _ as __nuxt_component_2 } from './FooterAdmin-BtLHyXbR.mjs';
import { ref, reactive, useSSRContext } from 'vue';
import { a as useTokenStore } from './auth-B1XVed-6.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
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
    const alamatList = ref([]);
    const jorongList = ref([]);
    const counter = ref(0);
    const isEditModalOpen = ref(false);
    const isDeleteModalOpen = ref(false);
    const editForm = reactive({
      id: "",
      jorong_id: "",
      detail_alamat: "",
      titik_koordinat: ""
    });
    const errors = ref([]);
    const isLoading = ref(false);
    const notification = reactive({
      message: "",
      show: false
    });
    const fetchAlamat = async () => {
      try {
        const response = await fetch("http://laravel-api.test/api/alamats");
        const data = await response.json();
        if (Array.isArray(data)) {
          counter.value = 0;
          alamatList.value = data.map((alamat) => ({
            ...alamat,
            number: ++counter.value
          }));
        } else {
          console.error("Invalid data format", data);
        }
      } catch (error) {
        console.error("Error fetching alamat:", error);
      }
    };
    const openEditModal = (alamat) => {
      editForm.id = alamat.id;
      editForm.jorong_id = alamat.jorong_id;
      editForm.detail_alamat = alamat.detail_alamat;
      editForm.titik_koordinat = alamat.titik_koordinat;
      isEditModalOpen.value = true;
    };
    const editAlamat = async () => {
      const tokenStore = useTokenStore();
      errors.value = [];
      isLoading.value = true;
      try {
        const response = await fetch(
          `http://laravel-api.test/api/alamats/${editForm.id}`,
          {
            method: "PUT",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${tokenStore.getToken}`
            },
            body: JSON.stringify({
              jorong_id: editForm.jorong_id,
              detail_alamat: editForm.detail_alamat,
              titik_koordinat: editForm.titik_koordinat
            })
          }
        );
        const data = await response.json();
        if (!response.ok) {
          if (data.errors) {
            errors.value = data.errors;
          } else {
            throw new Error(data.message || "Gagal mengedit alamat");
          }
        } else {
          const index2 = alamatList.value.findIndex(
            (alamat) => alamat.id === editForm.id
          );
          if (index2 !== -1) {
            alamatList.value[index2] = {
              ...data.alamat,
              number: alamatList.value[index2].number
            };
          }
          isEditModalOpen.value = false;
          showNotification("Alamat berhasil diedit!");
          await fetchAlamat();
        }
      } catch (error) {
        console.error("Kesalahan mengedit alamat:", error);
      } finally {
        isLoading.value = false;
      }
    };
    const confirmDeleteAlamat = (id) => {
      editForm.id = id;
      isDeleteModalOpen.value = true;
    };
    const deleteAlamat = async () => {
      const tokenStore = useTokenStore();
      isLoading.value = true;
      try {
        const response = await fetch(
          `http://laravel-api.test/api/alamats/${editForm.id}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${tokenStore.getToken}`
            }
          }
        );
        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.message || "Gagal menghapus alamat");
        }
        alamatList.value = alamatList.value.filter(
          (alamat) => alamat.id !== editForm.id
        );
        showNotification("Alamat berhasil dihapus!");
        isDeleteModalOpen.value = false;
      } catch (error) {
        console.error("Kesalahan menghapus alamat:", error);
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
      alamatList,
      jorongList,
      counter,
      isEditModalOpen,
      isDeleteModalOpen,
      editForm,
      errors,
      isLoading,
      notification,
      openEditModal,
      confirmDeleteAlamat,
      editAlamat,
      deleteAlamat
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AppHeader = AppHeader;
  const _component_SidebarAdmin = __nuxt_component_1;
  const _component_FooterAdmin = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-d4d94c65>`);
  _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
  _push(`<div class="flex overflow-hidden bg-white pt-16" data-v-d4d94c65>`);
  if ($setup.notification.show) {
    _push(`<div id="toast-success" class="fixed bottom-4 right-4 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert" data-v-d4d94c65><div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200" data-v-d4d94c65><svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" data-v-d4d94c65><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" data-v-d4d94c65></path></svg><span class="sr-only" data-v-d4d94c65>Check icon</span></div><div class="ml-3 text-sm font-normal" data-v-d4d94c65>${ssrInterpolate($setup.notification.message)}</div><button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" aria-label="Close" data-v-d4d94c65><span class="sr-only" data-v-d4d94c65>Close</span><svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" data-v-d4d94c65><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" data-v-d4d94c65></path></svg></button></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_SidebarAdmin, null, null, _parent));
  _push(`<div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto sm:ml-64" data-v-d4d94c65><main data-v-d4d94c65><div class="pt-6 px-4 ml-5 mr-5" data-v-d4d94c65><h1 class="text-lg font-bold mb-4" data-v-d4d94c65>Data Alamat</h1>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></main><div class="relative overflow-x-auto ml-5 mr-5" data-v-d4d94c65><table class="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400" data-v-d4d94c65><thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" data-v-d4d94c65><tr data-v-d4d94c65><th scope="col" class="px-6 py-3" data-v-d4d94c65>No</th><th scope="col" class="px-6 py-3" data-v-d4d94c65>Jorong</th><th scope="col" class="px-6 py-3" data-v-d4d94c65>Alamat</th><th scope="col" class="px-6 py-3" data-v-d4d94c65>Koordinat</th><th scope="col" class="px-6 py-3 flex justify-center" data-v-d4d94c65>Aksi</th></tr></thead><tbody data-v-d4d94c65><!--[-->`);
  ssrRenderList($setup.alamatList, (alamat) => {
    _push(`<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" data-v-d4d94c65><th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" data-v-d4d94c65>${ssrInterpolate(alamat.number)}</th><td class="px-6 py-4" data-v-d4d94c65>${ssrInterpolate(alamat.jorong.name)}</td><td class="px-6 py-4" data-v-d4d94c65>${ssrInterpolate(alamat.detail_alamat)}</td><td class="px-6 py-4" data-v-d4d94c65>${ssrInterpolate(alamat.titik_koordinat)}</td><td class="flex justify-center items-center" data-v-d4d94c65><button class="flex p-1.5 border border-yellow-500 me-2 mt-2 rounded-lg hover:rounded-xl mb-2 hover:bg-yellow-100 transition-all duration-300 text-yellow-500" data-v-d4d94c65><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-v-d4d94c65><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" data-v-d4d94c65></path></svg></button><button class="flex p-1.5 border border-red-500 me-2 mt-2 rounded-lg hover:rounded-xl mb-2 hover:bg-red-100 transition-all duration-300 text-red-500" data-v-d4d94c65><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-v-d4d94c65><path stroke-linecap="round" stroke-linejoin="round" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" data-v-d4d94c65></path></svg></button></td></tr>`);
  });
  _push(`<!--]--></tbody></table></div>`);
  if ($setup.isEditModalOpen) {
    _push(`<div class="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-75" data-v-d4d94c65><div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm" data-v-d4d94c65><h3 class="text-xl font-semibold mb-4" data-v-d4d94c65>Edit Alamat</h3><form data-v-d4d94c65><div class="mb-4" data-v-d4d94c65><label for="edit-jorong" class="block text-sm font-medium text-gray-700" data-v-d4d94c65>Jorong</label><select id="edit-jorong" class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2" data-v-d4d94c65><!--[-->`);
    ssrRenderList($setup.jorongList, (jorong) => {
      _push(`<option${ssrRenderAttr("value", jorong.id)} data-v-d4d94c65>${ssrInterpolate(jorong.name)}</option>`);
    });
    _push(`<!--]--></select>`);
    if ($setup.errors.jorong_id) {
      _push(`<span class="text-red-500" data-v-d4d94c65>${ssrInterpolate($setup.errors.jorong_id[0])}</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div><div class="mb-4" data-v-d4d94c65><label for="edit-detail_alamat" class="block text-sm font-medium text-gray-700" data-v-d4d94c65>Detail Alamat</label><textarea id="edit-detail_alamat" rows="4" class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2" data-v-d4d94c65>${ssrInterpolate($setup.editForm.detail_alamat)}</textarea>`);
    if ($setup.errors.detail_alamat) {
      _push(`<span class="text-red-500" data-v-d4d94c65>${ssrInterpolate($setup.errors.detail_alamat[0])}</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div><div class="mb-4" data-v-d4d94c65><label for="edit-titik_koordinat" class="block text-sm font-medium text-gray-700" data-v-d4d94c65>Titik Koordinat</label><input id="edit-titik_koordinat"${ssrRenderAttr("value", $setup.editForm.titik_koordinat)} type="text" class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2" data-v-d4d94c65>`);
    if ($setup.errors.titik_koordinat) {
      _push(`<span class="text-red-500" data-v-d4d94c65>${ssrInterpolate($setup.errors.titik_koordinat[0])}</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div><div class="flex justify-start mb-4 space-x-2" data-v-d4d94c65><button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-1 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"${ssrIncludeBooleanAttr($setup.isLoading) ? " disabled" : ""} data-v-d4d94c65>`);
    if ($setup.isLoading) {
      _push(`<span data-v-d4d94c65>Saving...</span>`);
    } else {
      _push(`<span data-v-d4d94c65>Save</span>`);
    }
    _push(`</button><button type="button" class="text-black bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" data-v-d4d94c65> Cancel </button></div></form></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($setup.isDeleteModalOpen) {
    _push(`<div class="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-75" data-v-d4d94c65><div class="w-full max-w-md bg-white shadow-lg rounded-lg p-6 relative" data-v-d4d94c65><svg xmlns="http://www.w3.org/2000/svg" class="w-3 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500 float-right" viewBox="0 0 320.591 320.591" data-v-d4d94c65><path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" data-original="#000000" data-v-d4d94c65></path><path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" data-original="#000000" data-v-d4d94c65></path></svg><div class="my-8 text-center" data-v-d4d94c65><svg xmlns="http://www.w3.org/2000/svg" class="w-14 fill-red-500 inline" viewBox="0 0 24 24" data-v-d4d94c65><path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" data-original="#000000" data-v-d4d94c65></path><path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" data-original="#000000" data-v-d4d94c65></path></svg><h4 class="text-gray-800 text-lg font-semibold mt-4" data-v-d4d94c65> Hapus Data Alamat </h4><p class="text-sm text-gray-600 mt-4" data-v-d4d94c65> Apakah anda yakin menghapus data Alamat ini? Data yang dihapus akan hilang. </p></div><div class="flex flex-col space-y-2" data-v-d4d94c65><button type="button" class="px-4 py-2 rounded-lg text-white text-sm tracking-wide bg-red-500 hover:bg-red-600 active:bg-red-500" data-v-d4d94c65> Delete </button><button type="button" class="px-4 py-2 rounded-lg text-gray-800 text-sm tracking-wide bg-gray-200 hover:bg-gray-300 active:bg-gray-200" data-v-d4d94c65> Cancel </button></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_FooterAdmin, null, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/nagari/alamat/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d4d94c65"]]);

export { index as default };
//# sourceMappingURL=index-BmMcXn_D.mjs.map
