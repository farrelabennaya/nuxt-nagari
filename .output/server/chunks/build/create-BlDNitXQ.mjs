import { A as AppHeader } from './AppHeader-uzUtYZuA.mjs';
import { _ as __nuxt_component_1 } from './SidebarAdmin-vvFIfM9T.mjs';
import { reactive, ref, useSSRContext } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList } from 'vue/server-renderer';
import { u as useAuthStore } from './auth-B1XVed-6.mjs';
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
    const route = useRoute();
    const form = reactive({
      keluarga_id: route.query.keluarga_id || "",
      nama: "",
      nik: "",
      tempat_lahir: "",
      tanggal_lahir: "",
      agama: "",
      jenis_kelamin: "",
      pendidikan: "",
      pekerjaan: "",
      status_perkawinan: "",
      hubungan_keluarga: "Kepala Keluarga"
    });
    const errors = ref([]);
    ref(false);
    const notification = reactive({
      message: "",
      show: false
    });
    const showModal = ref(false);
    const agamaOptions = [
      "Islam",
      "Kristen",
      "Katolik",
      "Hindu",
      "Buddha",
      "Khonghucu"
    ];
    const jenisKelaminOptions = ["Laki-laki", "Perempuan"];
    const pendidikanOptions = [
      "TIDAK / BELUM SEKOLAH",
      "TAMAT SD / SEDERAJAT",
      "SLTA / SEDERAJAT",
      "SLTP/SEDERAJAT",
      "BELUM TAMAT SD/SEDERAJAT",
      "DIPLOMA IV/ STRATA I",
      "DIPLOMA I / II",
      "AKADEMI/ DIPLOMA III/S. MUDA",
      "STRATA II",
      "STRATA III"
    ];
    const pekerjaanOptions = [
      "Belum Ditentukan",
      "Belum/Tidak Bekerja",
      "Pelajar/Mahasiswa",
      "Mengurus Rumah Tangga",
      "Buruh Harian Lepas",
      "Buruh Peternakan",
      "Buruh Tani/Perkebunan",
      "Guru",
      "Tentara Nasional Indonesia (TNI)",
      "Kepolisian RI (POLRI)",
      "Karyawan BUMD",
      "Karyawan BUMN",
      "Karyawan Honorer",
      "Karyawan Swasta",
      "Mekanik",
      "Pedagang",
      "Pegawai Negeri Sipil (PNS)",
      "Pensiunan",
      "Perancang Busana",
      "Perawat",
      "Perdagangan",
      "Petani/Pekebun",
      "Peternak",
      "Sopir",
      "Tabib",
      "Transportasi",
      "Tukang Batu",
      "Tukang Cukur",
      "Tukang Jahit",
      "Tukang Kayu",
      "Tukang Las/Pandai Besi",
      "Wiraswasta"
    ];
    const statusPerkawinanOptions = [
      "Belum Kawin",
      "Kawin",
      "Cerai Hidup",
      "Cerai Mati"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = AppHeader;
      const _component_SidebarAdmin = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-a8353e27>`);
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      _push(`<div class="flex overflow-hidden bg-white pt-16" data-v-a8353e27>`);
      _push(ssrRenderComponent(_component_SidebarAdmin, null, null, _parent));
      _push(`<div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto sm:ml-64" data-v-a8353e27><main data-v-a8353e27><div class="pt-6 px-4 ml-5 mr-5" data-v-a8353e27><h1 class="text-lg font-bold mb-4" data-v-a8353e27>Create Kepala Keluarga</h1></div></main><div class="min-h-screen flex" data-v-a8353e27><div class="w-full" data-v-a8353e27><div class="card bg-white p-10 rounded-lg shadow-md md:w-3/5 mx-auto lg:w-1/3" data-v-a8353e27><h3 class="text-center text-2xl font-semibold" data-v-a8353e27> Form Data Kepala Keluarga </h3><form class="max-w-sm mx-auto" data-v-a8353e27><div class="mb-5" data-v-a8353e27><label for="keluarga_id" class="block text-sm font-medium text-gray-700" data-v-a8353e27>Keluarga ID</label><input id="keluarga_id" type="text"${ssrRenderAttr("value", form.keluarga_id)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" readonly data-v-a8353e27>`);
      if (errors.value.keluarga_id) {
        _push(`<span class="text-red-500" data-v-a8353e27>${ssrInterpolate(errors.value.keluarga_id[0])}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-5" data-v-a8353e27><label for="nama" class="block text-sm font-medium text-gray-700" data-v-a8353e27>Nama</label><input id="nama"${ssrRenderAttr("value", form.nama)} type="text" class="bg-gray-50 border border-gray-300 mt-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" data-v-a8353e27>`);
      if (errors.value.nama) {
        _push(`<span class="text-red-500" data-v-a8353e27>${ssrInterpolate(errors.value.nama[0])}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-5" data-v-a8353e27><label for="nik" class="block text-sm font-medium text-gray-700" data-v-a8353e27>NIK</label><input id="nik"${ssrRenderAttr("value", form.nik)} type="text" class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2" data-v-a8353e27>`);
      if (errors.value.nik) {
        _push(`<span class="text-red-500" data-v-a8353e27>${ssrInterpolate(errors.value.nik[0])}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-5" data-v-a8353e27><label for="tempat_lahir" class="block text-sm font-medium text-gray-700" data-v-a8353e27>Tempat Lahir</label><input id="tempat_lahir"${ssrRenderAttr("value", form.tempat_lahir)} type="text" class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2" data-v-a8353e27>`);
      if (errors.value.tempat_lahir) {
        _push(`<span class="text-red-500" data-v-a8353e27>${ssrInterpolate(errors.value.tempat_lahir[0])}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-5" data-v-a8353e27><label for="tanggal_lahir" class="block text-sm font-medium text-gray-700" data-v-a8353e27>Tanggal Lahir</label><input id="tanggal_lahir"${ssrRenderAttr("value", form.tanggal_lahir)} type="date" class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2" data-v-a8353e27>`);
      if (errors.value.tanggal_lahir) {
        _push(`<span class="text-red-500" data-v-a8353e27>${ssrInterpolate(errors.value.tanggal_lahir[0])}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-5" data-v-a8353e27><label for="agama" class="block text-sm font-medium text-gray-700" data-v-a8353e27>Agama</label><select id="agama" class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2" data-v-a8353e27><option disabled value="" data-v-a8353e27${ssrIncludeBooleanAttr(Array.isArray(form.agama) ? ssrLooseContain(form.agama, "") : ssrLooseEqual(form.agama, "")) ? " selected" : ""}>Pilih Agama</option><!--[-->`);
      ssrRenderList(agamaOptions, (agama) => {
        _push(`<option${ssrRenderAttr("value", agama)} data-v-a8353e27>${ssrInterpolate(agama)}</option>`);
      });
      _push(`<!--]--></select>`);
      if (errors.value.agama) {
        _push(`<span class="text-red-500" data-v-a8353e27>${ssrInterpolate(errors.value.agama[0])}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-5" data-v-a8353e27><label for="jenis_kelamin" class="block text-sm font-medium text-gray-700" data-v-a8353e27>Jenis Kelamin</label><select id="jenis_kelamin" class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2" data-v-a8353e27><option disabled value="" data-v-a8353e27${ssrIncludeBooleanAttr(Array.isArray(form.jenis_kelamin) ? ssrLooseContain(form.jenis_kelamin, "") : ssrLooseEqual(form.jenis_kelamin, "")) ? " selected" : ""}>Pilih Jenis Kelamin</option><!--[-->`);
      ssrRenderList(jenisKelaminOptions, (jenis) => {
        _push(`<option${ssrRenderAttr("value", jenis)} data-v-a8353e27>${ssrInterpolate(jenis)}</option>`);
      });
      _push(`<!--]--></select>`);
      if (errors.value.jenis_kelamin) {
        _push(`<span class="text-red-500" data-v-a8353e27>${ssrInterpolate(errors.value.jenis_kelamin[0])}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-5" data-v-a8353e27><label for="pendidikan" class="block text-sm font-medium text-gray-700" data-v-a8353e27>Pendidikan</label><select id="pendidikan" class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2" data-v-a8353e27><option disabled value="" data-v-a8353e27${ssrIncludeBooleanAttr(Array.isArray(form.pendidikan) ? ssrLooseContain(form.pendidikan, "") : ssrLooseEqual(form.pendidikan, "")) ? " selected" : ""}>Pilih Pendidikan</option><!--[-->`);
      ssrRenderList(pendidikanOptions, (pendidikan) => {
        _push(`<option${ssrRenderAttr("value", pendidikan)} data-v-a8353e27>${ssrInterpolate(pendidikan)}</option>`);
      });
      _push(`<!--]--></select>`);
      if (errors.value.pendidikan) {
        _push(`<span class="text-red-500" data-v-a8353e27>${ssrInterpolate(errors.value.pendidikan[0])}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-5" data-v-a8353e27><label for="pekerjaan" class="block text-sm font-medium text-gray-700" data-v-a8353e27>Pekerjaan</label><select id="pekerjaan" class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2" data-v-a8353e27><option disabled value="" data-v-a8353e27${ssrIncludeBooleanAttr(Array.isArray(form.pekerjaan) ? ssrLooseContain(form.pekerjaan, "") : ssrLooseEqual(form.pekerjaan, "")) ? " selected" : ""}>Pilih Pekerjaan</option><!--[-->`);
      ssrRenderList(pekerjaanOptions, (pekerjaan) => {
        _push(`<option${ssrRenderAttr("value", pekerjaan)} data-v-a8353e27>${ssrInterpolate(pekerjaan)}</option>`);
      });
      _push(`<!--]--></select>`);
      if (errors.value.pekerjaan) {
        _push(`<span class="text-red-500" data-v-a8353e27>${ssrInterpolate(errors.value.pekerjaan[0])}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-5" data-v-a8353e27><label for="status_perkawinan" class="block text-sm font-medium text-gray-700" data-v-a8353e27>Status Perkawinan</label><select id="status_perkawinan" class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2" data-v-a8353e27><option disabled value="" data-v-a8353e27${ssrIncludeBooleanAttr(Array.isArray(form.status_perkawinan) ? ssrLooseContain(form.status_perkawinan, "") : ssrLooseEqual(form.status_perkawinan, "")) ? " selected" : ""}>Pilih Status Perkawinan</option><!--[-->`);
      ssrRenderList(statusPerkawinanOptions, (status) => {
        _push(`<option${ssrRenderAttr("value", status)} data-v-a8353e27>${ssrInterpolate(status)}</option>`);
      });
      _push(`<!--]--></select>`);
      if (errors.value.status_perkawinan) {
        _push(`<span class="text-red-500" data-v-a8353e27>${ssrInterpolate(errors.value.status_perkawinan[0])}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-5" data-v-a8353e27><label for="hubungan_keluarga" class="block text-sm font-medium text-gray-700" data-v-a8353e27>Hubungan Keluarga</label><input id="hubungan_keluarga"${ssrRenderAttr("value", form.hubungan_keluarga)} type="text" class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2" readonly data-v-a8353e27></div><div class="flex justify-end" data-v-a8353e27><button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2" data-v-a8353e27> Add Kepala Keluarga </button></div></form></div></div></div></div></div>`);
      if (notification.show) {
        _push(`<div id="toast-success" class="fixed bottom-4 right-4 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow" role="alert" data-v-a8353e27><div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg" data-v-a8353e27><svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" data-v-a8353e27><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414Z" data-v-a8353e27></path></svg><span class="sr-only" data-v-a8353e27>Check icon</span></div><div class="ml-3 text-sm font-normal" data-v-a8353e27>${ssrInterpolate(notification.message)}</div><button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8" aria-label="Close" data-v-a8353e27><span class="sr-only" data-v-a8353e27>Close</span><svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" data-v-a8353e27><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" data-v-a8353e27></path></svg></button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (showModal.value) {
        _push(`<div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" data-v-a8353e27><div class="bg-white p-6 rounded-lg shadow-lg" data-v-a8353e27><h2 class="text-xl font-semibold mb-4" data-v-a8353e27> Apakah Anda Yakin Untuk Melakukan Konfirmasi? </h2><p class="mb-4" data-v-a8353e27>Pastikan Semua Data Benar</p><div class="flex justify-end" data-v-a8353e27><button class="text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2" data-v-a8353e27> Batal </button><button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2" data-v-a8353e27> Konfirmasi </button></div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/nagari/anggotaKeluarga/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const create = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a8353e27"]]);

export { create as default };
//# sourceMappingURL=create-BlDNitXQ.mjs.map
