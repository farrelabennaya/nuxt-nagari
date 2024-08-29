import { A as AppHeader } from './AppHeader-uzUtYZuA.mjs';
import { _ as __nuxt_component_1 } from './SidebarAdmin-vvFIfM9T.mjs';
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
    const petugasList = ref([]);
    const counter = ref(0);
    const isEditModalOpen = ref(false);
    const isAddModalOpen = ref(false);
    const isDetailModalOpen = ref(false);
    const editForm = reactive({
      id: "",
      name: "",
      keterangan: "",
      expires_at: "",
      is_active: false
    });
    const addForm = reactive({
      name: "",
      username: "",
      password: "",
      email: ""
    });
    const detailForm = reactive({
      username: "",
      expires_at: ""
    });
    const errors = ref([]);
    const isLoading = ref(false);
    const notification = reactive({
      message: "",
      show: false
    });
    const formatExpiresAt = (dateString) => {
      if (!dateString)
        return "Tidak Aktif";
      const date = new Date(dateString);
      if (isNaN(date.getTime()))
        return "Tidak Aktif";
      const now = /* @__PURE__ */ new Date();
      const diff = date.getTime() - now.getTime();
      if (diff <= 0)
        return "Tidak Aktif";
      const diffHours = Math.floor(diff / (1e3 * 60 * 60));
      const diffDays = Math.floor(diffHours / 24);
      const remainingHours = diffHours % 24;
      if (diffDays > 0) {
        return `${diffDays} Hari ${remainingHours} Jam`;
      } else {
        return `${diffHours} Jam`;
      }
    };
    const fetchPetugas = async () => {
      try {
        const response = await fetch("http://laravel-api.test/api/petugas");
        const data2 = await response.json();
        if (Array.isArray(data2)) {
          counter.value = 0;
          petugasList.value = data2.map((petugas) => ({
            ...petugas,
            formattedExpiresAt: formatExpiresAt(petugas.expires_at),
            number: ++counter.value
          }));
        } else {
          console.error("Invalid data format", data2);
        }
      } catch (error) {
        console.error("Error fetching petugas:", error);
      }
    };
    const openEditModal = (petugas) => {
      editForm.id = petugas.id;
      editForm.name = petugas.name;
      editForm.keterangan = petugas.keterangan;
      editForm.expires_at = petugas.expires_at;
      editForm.is_active = petugas.is_active;
      isEditModalOpen.value = true;
    };
    const openAddModal = () => {
      isAddModalOpen.value = true;
    };
    const openDetailModal = (petugas) => {
      detailForm.username = petugas.username;
      if (!petugas.is_active) {
        detailForm.expires_at = "Akun Belum Aktif";
      } else if (!petugas.expires_at) {
        detailForm.expires_at = "Durasi Belum Ditambahkan";
      } else if (new Date(petugas.expires_at) < /* @__PURE__ */ new Date()) {
        detailForm.expires_at = "Durasi Expired";
      } else {
        detailForm.expires_at = formatExpiresAt(petugas.expires_at);
      }
      isDetailModalOpen.value = true;
    };
    const editPetugas = async () => {
      const tokenStore = useTokenStore();
      errors.value = [];
      isLoading.value = true;
      try {
        const response = await fetch(
          `http://laravel-api.test/api/petugas/${editForm.id}`,
          {
            method: "PUT",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${tokenStore.getToken}`
            },
            body: JSON.stringify({
              name: editForm.name,
              keterangan: editForm.keterangan,
              expires_at: editForm.expires_at,
              is_active: editForm.is_active
            })
          }
        );
        const data2 = await response.json();
        if (!response.ok) {
          if (data2.errors) {
            errors.value = data2.errors;
          } else {
            throw new Error(data2.message || "Gagal mengedit petugas");
          }
        } else {
          const index = petugasList.value.findIndex(
            (petugas) => petugas.id === editForm.id
          );
          if (index !== -1) {
            petugasList.value[index] = {
              ...data2.petugas,
              formattedExpiresAt: formatExpiresAt(data2.petugas.expires_at),
              number: petugasList.value[index].number
            };
          }
          isEditModalOpen.value = false;
          showNotification("Petugas berhasil diedit!");
          await fetchPetugas();
        }
      } catch (error) {
        console.error("Kesalahan mengedit petugas:", error);
      } finally {
        isLoading.value = false;
      }
    };
    const deletePetugas = async (id) => {
      const tokenStore = useTokenStore();
      isLoading.value = true;
      try {
        const response = await fetch(
          `http://laravel-api.test/api/petugas/${id}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${tokenStore.getToken}`
            }
          }
        );
        if (!response.ok) {
          const data2 = await response.json();
          throw new Error(data2.message || "Gagal menghapus petugas");
        }
        petugasList.value = petugasList.value.filter(
          (petugas) => petugas.id !== id
        );
        showNotification("Petugas berhasil dihapus!");
      } catch (error) {
        console.error("Kesalahan menghapus petugas:", error);
      } finally {
        isLoading.value = false;
      }
    };
    const activatePetugas = async (id) => {
      const tokenStore = useTokenStore();
      isLoading.value = true;
      try {
        const response = await fetch(
          `http://laravel-api.test/api/petugas/${id}/activate`,
          {
            method: "PUT",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${tokenStore.getToken}`
            },
            body: JSON.stringify({
              is_active: true,
              expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1e3).toISOString()
              // Restart expire date to 30 days from now
            })
          }
        );
        const data2 = await response.json();
        if (!response.ok) {
          throw new Error(data2.message || "Gagal mengaktifkan petugas");
        }
        const index = petugasList.value.findIndex(
          (petugas) => petugas.id === id
        );
        if (index !== -1) {
          petugasList.value[index].is_active = true;
          petugasList.value[index].expires_at = data2.petugas.expires_at;
        }
        showNotification("Petugas berhasil diaktifkan!");
        isEditModalOpen.value = false;
      } catch (error) {
        console.error("Kesalahan mengaktifkan petugas:", error);
      } finally {
        isLoading.value = false;
      }
    };
    const deactivatePetugas = async (id) => {
      const tokenStore = useTokenStore();
      isLoading.value = true;
      try {
        const response = await fetch(
          `http://laravel-api.test/api/petugas/${id}/deactivate`,
          {
            method: "PUT",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${tokenStore.getToken}`
            },
            body: JSON.stringify({
              is_active: false,
              expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1e3).toISOString()
            })
          }
        );
        const data2 = await response.json();
        if (!response.ok) {
          throw new Error(data2.message || "Gagal menonaktifkan petugas");
        }
        const index = petugasList.value.findIndex(
          (petugas) => petugas.id === id
        );
        if (index !== -1) {
          petugasList.value[index].is_active = false;
          petugasList.value[index].expires_at = data2.petugas.expires_at;
        }
        showNotification("Petugas berhasil dinonaktifkan!");
        isEditModalOpen.value = false;
      } catch (error) {
        console.error("Kesalahan menonaktifkan petugas:", error);
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
      petugasList,
      counter,
      isEditModalOpen,
      isAddModalOpen,
      isDetailModalOpen,
      editForm,
      addForm,
      detailForm,
      errors,
      isLoading,
      notification,
      openEditModal,
      openAddModal,
      openDetailModal,
      editPetugas,
      deletePetugas,
      activatePetugas,
      deactivatePetugas
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AppHeader = AppHeader;
  const _component_SidebarAdmin = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
  _push(`<div class="flex overflow-hidden bg-white pt-16">`);
  if ($setup.notification.show) {
    _push(`<div id="toast-success" class="fixed bottom-4 right-4 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert"><div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200"><svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path></svg><span class="sr-only">Check icon</span></div><div class="ml-3 text-sm font-normal">${ssrInterpolate($setup.notification.message)}</div><button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" aria-label="Close"><span class="sr-only">Close</span><svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path></svg></button></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_SidebarAdmin, null, null, _parent));
  _push(`<div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto sm:ml-64"><main><div class="pt-6 px-4 ml-5 mr-5"><h1 class="text-lg font-bold mb-4">Data Petugas</h1><div></div>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></main><div class="relative overflow-x-auto ml-5 mr-5"><table class="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400"><thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"><tr><th scope="col" class="px-6 py-3">No</th><th scope="col" class="px-6 py-3">Nama</th><th scope="col" class="px-6 py-3">Keterangan</th><th scope="col" class="px-6 py-3">Status</th><th scope="col" class="px-6 py-3 flex justify-center">Aksi</th></tr></thead><tbody><!--[-->`);
  ssrRenderList($setup.petugasList, (petugas) => {
    _push(`<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"><th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">${ssrInterpolate(petugas.number)}</th><td class="px-6 py-4">${ssrInterpolate(petugas.name)}</td><td class="px-6 py-4">${ssrInterpolate(petugas.keterangan)}</td><td class="px-6 py-4">`);
    if (!petugas.is_active) {
      _push(`<span class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400"> Tidak Aktif </span>`);
    } else {
      _push(`<span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"> Aktif </span>`);
    }
    if (petugas.expires_at && new Date(petugas.expires_at) < /* @__PURE__ */ new Date()) {
      _push(`<span class="text-red-500 text-xs font-medium"> Expired </span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</td><td class="flex justify-center items-center"><button class="flex p-1.5 border border-yellow-500 me-2 mt-2 rounded-lg hover:rounded-xl mb-2 hover:bg-yellow-100 transition-all duration-300 text-yellow-500"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg></button><button class="flex p-1.5 border border-blue-500 rounded-lg me-2 mb-2 mt-2 hover:rounded-xl hover:bg-blue-100 transition-all duration-300 text-blue-500"><svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 3v4a1 1 0 0 1-1 1H5m8 7.5 2.5 2.5M19 4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Zm-5 9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path></svg></button></td></tr>`);
  });
  _push(`<!--]--></tbody></table></div>`);
  if ($setup.isEditModalOpen) {
    _push(`<div class="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-75"><div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm"><h3 class="text-xl font-semibold mb-4">Edit Petugas</h3><form><div class="mb-4"><label for="edit-name" class="block text-sm font-medium text-gray-700">Name</label><input id="edit-name"${ssrRenderAttr("value", $setup.editForm.name)} type="text" class="col-span-6 bg-gray-100 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-2" disabled readonly>`);
    if ($setup.errors.name) {
      _push(`<span class="text-red-500">${ssrInterpolate($setup.errors.name[0])}</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div><div class="mb-4"><label for="edit-keterangan" class="block text-sm font-medium text-gray-700">Keterangan</label><textarea id="edit-keterangan" rows="4" class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2">${ssrInterpolate($setup.editForm.keterangan)}</textarea>`);
    if ($setup.errors.keterangan) {
      _push(`<span class="text-red-500">${ssrInterpolate($setup.errors.keterangan[0])}</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div><div class="mb-4"><label for="edit-expires_at" class="block text-sm font-medium text-gray-700">Masa Berlaku</label><input id="edit-expires_at"${ssrRenderAttr("value", $setup.editForm.expires_at)} type="date" class="col-span-6 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2">`);
    if ($setup.errors.expires_at) {
      _push(`<span class="text-red-500">${ssrInterpolate($setup.errors.expires_at[0])}</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div><div class="mb-4 flex justify-center">`);
    if ($setup.editForm.is_active) {
      _push(`<button type="button" class="text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"> Deactivate </button>`);
    } else {
      _push(`<button type="button" class="text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-900"> Activate </button>`);
    }
    _push(`</div><div class="flex justify-start mb-4 space-x-2"><button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-1 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"${ssrIncludeBooleanAttr($setup.isLoading) ? " disabled" : ""}>`);
    if ($setup.isLoading) {
      _push(`<span>Saving...</span>`);
    } else {
      _push(`<span>Save</span>`);
    }
    _push(`</button><button type="button" class="text-black bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"> Cancel </button></div></form></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($setup.isDetailModalOpen) {
    _push(`<div class="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-75"><div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm"><h3 class="text-xl font-semibold mb-4">Detail Petugas</h3><div class="mb-4"><label for="detail-username" class="block text-sm font-medium text-gray-700">Username</label><div id="detail-username" class="mt-1 block w-full p-2 rounded-lg">${ssrInterpolate($setup.detailForm.username)}</div></div><div class="mb-4"><label for="detail-expires_at" class="block text-sm font-medium text-gray-700">Masa Berlaku</label><div id="detail-expires_at" class="mt-1 block w-ful p-2 rounded-lg">${ssrInterpolate($setup.detailForm.expires_at)}</div></div><div class="flex justify-end"><button type="button" class="text-black bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"> Close </button></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<footer class="bg-white md:flex md:items-center md:justify-between shadow rounded-lg p-4 md:p-6 xl:p-8 my-6 mx-4"><ul class="flex items-center flex-wrap mb-6 md:mb-0"><li><a href="#" class="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">Terms and conditions</a></li><li><a href="#" class="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">Privacy Policy</a></li><li><a href="#" class="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">Licensing</a></li><li><a href="#" class="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">Cookie Policy</a></li><li><a href="#" class="text-sm font-normal text-gray-500 hover:underline">Contact</a></li></ul><div class="flex sm:justify-center space-x-6"><a href="#" class="text-gray-500 hover:text-gray-900"><svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path></svg></a><a href="#" class="text-gray-500 hover:text-gray-900"><svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path></svg></a><a href="#" class="text-gray-500 hover:text-gray-900"><svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg></a></div></footer><p class="text-center text-sm text-gray-500 my-10"> \xA9 2019-2021 <a href="#" class="hover:underline" target="_blank">Themesberg</a>. All rights reserved. </p></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/petugas/data.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const data = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { data as default };
//# sourceMappingURL=data-DwNMJ80g.mjs.map
