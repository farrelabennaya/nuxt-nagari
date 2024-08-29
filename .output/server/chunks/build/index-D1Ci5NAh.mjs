import { A as AppHeader } from './AppHeader-uzUtYZuA.mjs';
import { _ as __nuxt_component_1 } from './SidebarAdmin-vvFIfM9T.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-l5zPv3vf.mjs';
import { _ as __nuxt_component_2 } from './FooterAdmin-BtLHyXbR.mjs';
import { ref, reactive, computed, withCtx, createVNode, useSSRContext } from 'vue';
import { a as useRouter } from './server.mjs';
import { a as useTokenStore } from './auth-B1XVed-6.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'vue-router';
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
    const router = useRouter();
    const keluargaList = ref([]);
    const rumahList = ref([]);
    const anggotaKeluargaList = ref([]);
    const usedKepalaKeluarga = ref([]);
    const keluargaStats = ref({
      totalKeluarga: 0,
      totalKepalaKeluarga: 0,
      totalKK: 0
    });
    const counter = ref(0);
    const isEditModalOpen = ref(false);
    const isDeleteModalOpen = ref(false);
    const editForm = reactive({
      id: "",
      rumah_id: "",
      jumlah_kk: "",
      kepala_keluarga: ""
    });
    const errors = ref([]);
    const isLoading = ref(false);
    const notification = reactive({
      message: "",
      show: false
    });
    const viewDetail = (id) => {
      router.push({ path: `/admin/nagari/keluarga/keluargaDetail`, query: { id } });
    };
    const rumahSearch = ref("");
    const kepalaKeluargaSearch = ref("");
    const editRumahSearch = ref("");
    const editKepalaKeluargaSearch = ref("");
    const showRumahDropdown = ref(false);
    const showKepalaKeluargaDropdown = ref(false);
    const showEditRumahDropdown = ref(false);
    const showEditKepalaKeluargaDropdown = ref(false);
    const filteredRumahList = computed(() => {
      return rumahList.value.filter(
        (rumah) => rumah.alamat.detail_alamat.toLowerCase().includes(rumahSearch.value.toLowerCase())
      );
    });
    const filteredAnggotaKeluargaList = computed(() => {
      return anggotaKeluargaList.value.filter(
        (anggota) => anggota.nama.toLowerCase().includes(kepalaKeluargaSearch.value.toLowerCase()) && !usedKepalaKeluarga.value.includes(anggota.id)
      );
    });
    const filteredEditRumahList = computed(() => {
      return rumahList.value.filter(
        (rumah) => rumah.alamat.detail_alamat.toLowerCase().includes(editRumahSearch.value.toLowerCase())
      );
    });
    const filteredEditAnggotaKeluargaList = computed(() => {
      return anggotaKeluargaList.value.filter(
        (anggota) => anggota.nama.toLowerCase().includes(editKepalaKeluargaSearch.value.toLowerCase()) && !usedKepalaKeluarga.value.includes(anggota.id)
      );
    });
    const showNotification = (message) => {
      notification.message = message;
      notification.show = true;
      setTimeout(() => {
        notification.show = false;
      }, 3e3);
    };
    const fetchKeluarga = async () => {
      try {
        const response = await fetch("http://laravel-api.test/api/keluargas");
        const data = await response.json();
        if (Array.isArray(data)) {
          counter.value = 0;
          keluargaList.value = data.map((keluarga) => ({
            ...keluarga,
            number: ++counter.value
          }));
          usedKepalaKeluarga.value = data.map(
            (keluarga) => keluarga.kepala_keluarga.id
          );
        } else {
          console.error("Invalid data format", data);
        }
      } catch (error) {
        console.error("Error fetching keluarga:", error);
      }
    };
    const fetchKeluargaStats = async () => {
      try {
        const response = await fetch(
          "http://laravel-api.test/api/keluarga/stats"
        );
        const data = await response.json();
        keluargaStats.value = data;
      } catch (error) {
        console.error("Error fetching keluarga stats:", error);
      }
    };
    const openEditModal = (keluarga) => {
      editForm.id = keluarga.id;
      editForm.rumah_id = keluarga.rumah.id;
      editForm.jumlah_kk = keluarga.jumlah_kk;
      editForm.kepala_keluarga = keluarga.kepala_keluarga.id;
      isEditModalOpen.value = true;
    };
    const editKeluarga = async () => {
      const tokenStore = useTokenStore();
      errors.value = [];
      isLoading.value = true;
      try {
        const response = await fetch(
          `http://laravel-api.test/api/keluargas/${editForm.id}`,
          {
            method: "PUT",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${tokenStore.getToken}`
            },
            body: JSON.stringify({
              rumah_id: editForm.rumah_id,
              jumlah_kk: editForm.jumlah_kk,
              kepala_keluarga: editForm.kepala_keluarga
            })
          }
        );
        const data = await response.json();
        if (!response.ok) {
          if (data.errors) {
            errors.value = data.errors;
          } else {
            throw new Error(data.message || "Gagal mengedit keluarga");
          }
        } else {
          const index2 = keluargaList.value.findIndex(
            (keluarga) => keluarga.id === editForm.id
          );
          if (index2 !== -1) {
            keluargaList.value[index2] = {
              ...data,
              number: keluargaList.value[index2].number
            };
          }
          isEditModalOpen.value = false;
          showNotification("Keluarga berhasil diedit!");
          await fetchKeluarga();
        }
      } catch (error) {
        console.error("Kesalahan mengedit keluarga:", error);
      } finally {
        isLoading.value = false;
      }
    };
    const confirmDeleteKeluarga = (id) => {
      editForm.id = id;
      isDeleteModalOpen.value = true;
    };
    const deleteKeluarga = async () => {
      const tokenStore = useTokenStore();
      isLoading.value = true;
      try {
        const response = await fetch(
          `http://laravel-api.test/api/keluargas/${editForm.id}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${tokenStore.getToken}`
            }
          }
        );
        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.message || "Gagal menghapus keluarga");
        }
        keluargaList.value = keluargaList.value.filter(
          (keluarga) => keluarga.id !== editForm.id
        );
        showNotification("Keluarga berhasil dihapus!");
        isDeleteModalOpen.value = false;
      } catch (error) {
        console.error("Kesalahan menghapus keluarga:", error);
      } finally {
        isLoading.value = false;
      }
    };
    const selectRumah = (rumah) => {
      editForm.rumah_id = rumah.id;
      rumahSearch.value = rumah.alamat.detail_alamat;
      showRumahDropdown.value = false;
    };
    const selectKepalaKeluarga = (anggota) => {
      if (usedKepalaKeluarga.value.includes(anggota.id)) {
        showNotification("Kepala keluarga sudah terpilih");
        return;
      }
      editForm.kepala_keluarga = anggota.id;
      kepalaKeluargaSearch.value = anggota.nama;
      showKepalaKeluargaDropdown.value = false;
    };
    const selectEditRumah = (rumah) => {
      editForm.rumah_id = rumah.id;
      editRumahSearch.value = rumah.alamat.detail_alamat;
      showEditRumahDropdown.value = false;
    };
    const selectEditKepalaKeluarga = (anggota) => {
      if (usedKepalaKeluarga.value.includes(anggota.id)) {
        showNotification("Kepala keluarga sudah terpilih");
        return;
      }
      editForm.kepala_keluarga = anggota.id;
      editKepalaKeluargaSearch.value = anggota.nama;
      showEditKepalaKeluargaDropdown.value = false;
    };
    const hideDropdown = (type) => {
      setTimeout(() => {
        if (type === "rumah") {
          showRumahDropdown.value = false;
        } else if (type === "kepala_keluarga") {
          showKepalaKeluargaDropdown.value = false;
        } else if (type === "edit_rumah") {
          showEditRumahDropdown.value = false;
        } else if (type === "edit_kepala_keluarga") {
          showEditKepalaKeluargaDropdown.value = false;
        }
      }, 200);
    };
    return {
      keluargaList,
      rumahList,
      anggotaKeluargaList,
      usedKepalaKeluarga,
      keluargaStats,
      counter,
      isEditModalOpen,
      isDeleteModalOpen,
      editForm,
      errors,
      isLoading,
      notification,
      rumahSearch,
      kepalaKeluargaSearch,
      editRumahSearch,
      editKepalaKeluargaSearch,
      showRumahDropdown,
      showKepalaKeluargaDropdown,
      showEditRumahDropdown,
      showEditKepalaKeluargaDropdown,
      filteredRumahList,
      filteredAnggotaKeluargaList,
      filteredEditRumahList,
      filteredEditAnggotaKeluargaList,
      openEditModal,
      confirmDeleteKeluarga,
      editKeluarga,
      deleteKeluarga,
      selectRumah,
      selectKepalaKeluarga,
      selectEditRumah,
      selectEditKepalaKeluarga,
      hideDropdown,
      fetchKeluargaStats,
      // Tambahkan ini jika ingin digunakan di tempat lain
      viewDetail
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AppHeader = AppHeader;
  const _component_SidebarAdmin = __nuxt_component_1;
  const _component_NuxtLink = __nuxt_component_0;
  const _component_FooterAdmin = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-b3a65d32>`);
  _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
  _push(`<div class="flex overflow-hidden bg-white pt-16" data-v-b3a65d32>`);
  if ($setup.notification.show) {
    _push(`<div id="toast-success" class="fixed bottom-4 right-4 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert" data-v-b3a65d32><div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200" data-v-b3a65d32><svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" data-v-b3a65d32><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" data-v-b3a65d32></path></svg><span class="sr-only" data-v-b3a65d32>Check icon</span></div><div class="ml-3 text-sm font-normal" data-v-b3a65d32>${ssrInterpolate($setup.notification.message)}</div><button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" aria-label="Close" data-v-b3a65d32><span class="sr-only" data-v-b3a65d32>Close</span><svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" data-v-b3a65d32><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" data-v-b3a65d32></path></svg></button></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_SidebarAdmin, null, null, _parent));
  _push(`<div id="main-content" class="min-h-screen h-full w-full custom-bg-main relative overflow-y-auto sm:ml-64" data-v-b3a65d32><div class="custom-header to-gray-100 p-6 pb-32 pt-5" data-v-b3a65d32><main data-v-b3a65d32><div class="bg-white rounded-lg shadow-sm p-6 flex justify-between items-center relative overflow-x-auto ml-5 mr-5 mt-5 mb-5" data-v-b3a65d32><div data-v-b3a65d32><h2 class="text-xl font-bold text-gray-800" data-v-b3a65d32>Keluarga</h2><p class="text-gray-500" data-v-b3a65d32>Kelola Keluarga</p></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/admin/nagari/keluarga/create" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button class="bg-green-500 text-white font-medium rounded-lg px-4 py-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300" data-v-b3a65d32${_scopeId}> + Tambah Keluarga </button>`);
      } else {
        return [
          createVNode("button", { class: "bg-green-500 text-white font-medium rounded-lg px-4 py-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300" }, " + Tambah Keluarga ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></main><div class="grid grid-cols-1 md:grid-cols-3 gap-6 relative overflow-x-auto ml-5 mr-5" data-v-b3a65d32><div class="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4 min-h-[150px]" data-v-b3a65d32><div class="flex items-center" data-v-b3a65d32><div class="bg-green-200 p-3 rounded-full" data-v-b3a65d32><svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-b3a65d32><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-v-b3a65d32></path></svg></div></div><div data-v-b3a65d32><p class="text-gray-500" data-v-b3a65d32>Total Keluarga</p><p class="text-2xl font-semibold" data-v-b3a65d32>${ssrInterpolate($setup.keluargaStats.totalKeluarga)}</p></div></div><div class="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4" data-v-b3a65d32><div class="flex items-center" data-v-b3a65d32><div class="bg-red-200 p-3 rounded-full" data-v-b3a65d32><svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-b3a65d32><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-b3a65d32></path></svg></div></div><div data-v-b3a65d32><p class="text-gray-500" data-v-b3a65d32>Total Kepala Keluarga</p><p class="text-2xl font-semibold" data-v-b3a65d32>${ssrInterpolate($setup.keluargaStats.totalKepalaKeluarga)}</p></div></div><div class="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4" data-v-b3a65d32><div class="flex items-center" data-v-b3a65d32><div class="bg-yellow-200 p-3 rounded-full" data-v-b3a65d32><svg class="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-b3a65d32><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-v-b3a65d32></path></svg></div></div><div data-v-b3a65d32><p class="text-gray-500" data-v-b3a65d32>Total KK</p><p class="text-2xl font-semibold" data-v-b3a65d32>${ssrInterpolate($setup.keluargaStats.totalKK)}</p></div></div></div></div><div class="grid grid-cols-1 md:grid-cols-2 p-6 lg:grid-cols-2 gap-6 -mt-20 relative overflow-x-auto ml-5 mr-5" data-v-b3a65d32><!--[-->`);
  ssrRenderList($setup.keluargaList, (keluarga) => {
    _push(`<div class="bg-white p-6 rounded-lg shadow-sm flex items-center space-x-4 min-h-[130px] border border-gray-500" data-v-b3a65d32><div data-v-b3a65d32><p class="text-gray-700 font-semibold" data-v-b3a65d32>${ssrInterpolate(keluarga.kepala_keluarga.nama)}</p><p class="text-gray-400 text-sm" data-v-b3a65d32>${ssrInterpolate(keluarga.rumah.alamat.detail_alamat)}</p><p class="text-gray-500 text-sm" data-v-b3a65d32> Jumlah KK: ${ssrInterpolate(keluarga.jumlah_kk)}</p></div><div class="flex space-x-2 ml-auto" data-v-b3a65d32><button class="flex p-1.5 border border-yellow-500 rounded-lg hover:rounded-xl hover:bg-yellow-100 transition-all duration-300 text-yellow-500" data-v-b3a65d32><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-v-b3a65d32><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" data-v-b3a65d32></path></svg></button><button class="flex p-1.5 border border-red-500 rounded-lg hover:rounded-xl hover:bg-red-100 transition-all duration-300 text-red-500" data-v-b3a65d32><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-v-b3a65d32><path stroke-linecap="round" stroke-linejoin="round" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" data-v-b3a65d32></path></svg></button><button class="flex p-1.5 border border-blue-500 rounded-lg hover:rounded-xl hover:bg-blue-100 transition-all duration-300 text-blue-500" data-v-b3a65d32><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-v-b3a65d32><path stroke-linecap="round" stroke-linejoin="round" d="M15 12h.01M12 12h.01M9 12h.01M4 4h16M4 20h16" data-v-b3a65d32></path></svg></button></div></div>`);
  });
  _push(`<!--]--></div>`);
  if ($setup.isEditModalOpen) {
    _push(`<div class="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-75" data-v-b3a65d32><div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm" data-v-b3a65d32><h3 class="text-xl font-semibold mb-4" data-v-b3a65d32>Edit Keluarga</h3><form data-v-b3a65d32><div class="mb-4" data-v-b3a65d32><label for="edit-rumah" class="block text-sm font-medium text-gray-700" data-v-b3a65d32>Rumah</label><div class="relative" data-v-b3a65d32><input type="text"${ssrRenderAttr("value", $setup.editRumahSearch)} placeholder="Search Rumah..." class="border mt-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" data-v-b3a65d32>`);
    if ($setup.showEditRumahDropdown && $setup.filteredEditRumahList.length) {
      _push(`<ul class="absolute z-10 bg-white border border-gray-300 rounded-lg w-full mt-1 overflow-auto max-h-48" data-v-b3a65d32><!--[-->`);
      ssrRenderList($setup.filteredEditRumahList, (rumah) => {
        _push(`<li class="px-4 py-2 cursor-pointer hover:bg-gray-200" data-v-b3a65d32>${ssrInterpolate(rumah.alamat.detail_alamat)}</li>`);
      });
      _push(`<!--]--></ul>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
    if ($setup.errors.rumah_id) {
      _push(`<span class="text-red-500" data-v-b3a65d32>${ssrInterpolate($setup.errors.rumah_id[0])}</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div><div class="mb-4" data-v-b3a65d32><label for="edit-jumlah_kk" class="block text-sm font-medium text-gray-700" data-v-b3a65d32>Jumlah KK</label><input id="edit-jumlah_kk"${ssrRenderAttr("value", $setup.editForm.jumlah_kk)} type="number" class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2" data-v-b3a65d32>`);
    if ($setup.errors.jumlah_kk) {
      _push(`<span class="text-red-500" data-v-b3a65d32>${ssrInterpolate($setup.errors.jumlah_kk[0])}</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div><div class="mb-4" data-v-b3a65d32><label for="edit-kepala_keluarga" class="block text-sm font-medium text-gray-700" data-v-b3a65d32>Kepala Keluarga</label><div class="relative" data-v-b3a65d32><input type="text"${ssrRenderAttr("value", $setup.editKepalaKeluargaSearch)} placeholder="Search Kepala Keluarga..." class="border mt-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" data-v-b3a65d32>`);
    if ($setup.showEditKepalaKeluargaDropdown) {
      _push(`<ul class="absolute z-10 bg-white border border-gray-300 rounded-lg w-full mt-1 overflow-auto max-h-48" data-v-b3a65d32>`);
      if ($setup.filteredEditAnggotaKeluargaList.length === 0) {
        _push(`<li class="px-4 py-2 text-red-500" data-v-b3a65d32> Kepala Keluarga Tidak Tersedia </li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList($setup.filteredEditAnggotaKeluargaList, (anggota) => {
        _push(`<li class="px-4 py-2 cursor-pointer hover:bg-gray-200" data-v-b3a65d32>${ssrInterpolate(anggota.nama)}</li>`);
      });
      _push(`<!--]--></ul>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
    if ($setup.errors.kepala_keluarga) {
      _push(`<span class="text-red-500" data-v-b3a65d32>${ssrInterpolate($setup.errors.kepala_keluarga[0])}</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div><div class="flex justify-start mb-4 space-x-2" data-v-b3a65d32><button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-1 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"${ssrIncludeBooleanAttr($setup.isLoading) ? " disabled" : ""} data-v-b3a65d32>`);
    if ($setup.isLoading) {
      _push(`<span data-v-b3a65d32>Saving...</span>`);
    } else {
      _push(`<span data-v-b3a65d32>Save</span>`);
    }
    _push(`</button><button type="button" class="text-black bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" data-v-b3a65d32> Cancel </button></div></form></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($setup.isDeleteModalOpen) {
    _push(`<div class="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-75" data-v-b3a65d32><div class="w-full max-w-md bg-white shadow-lg rounded-lg p-6 relative" data-v-b3a65d32><svg xmlns="http://www.w3.org/2000/svg" class="w-3 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500 float-right" viewBox="0 0 320.591 320.591" data-v-b3a65d32><path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" data-original="#000000" data-v-b3a65d32></path><path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" data-original="#000000" data-v-b3a65d32></path></svg><div class="my-8 text-center" data-v-b3a65d32><svg xmlns="http://www.w3.org/2000/svg" class="w-14 fill-red-500 inline" viewBox="0 0 24 24" data-v-b3a65d32><path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" data-original="#000000" data-v-b3a65d32></path><path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" data-original="#000000" data-v-b3a65d32></path></svg><h4 class="text-gray-800 text-lg font-semibold mt-4" data-v-b3a65d32> Hapus Data Keluarga </h4><p class="text-sm text-gray-600 mt-4" data-v-b3a65d32> Apakah anda yakin menghapus data keluarga ini? Data yang dihapus akan hilang. </p></div><div class="flex flex-col space-y-2" data-v-b3a65d32><button type="button" class="px-4 py-2 rounded-lg text-white text-sm tracking-wide bg-red-500 hover:bg-red-600 active:bg-red-500" data-v-b3a65d32> Delete </button><button type="button" class="px-4 py-2 rounded-lg text-gray-800 text-sm tracking-wide bg-gray-200 hover:bg-gray-300 active:bg-gray-200" data-v-b3a65d32> Cancel </button></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_FooterAdmin, null, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/nagari/keluarga/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b3a65d32"]]);

export { index as default };
//# sourceMappingURL=index-D1Ci5NAh.mjs.map
