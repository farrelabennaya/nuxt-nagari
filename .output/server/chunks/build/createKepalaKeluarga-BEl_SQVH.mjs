import { A as AppHeader } from './AppHeader-uzUtYZuA.mjs';
import { _ as __nuxt_component_1 } from './SidebarAdmin-vvFIfM9T.mjs';
import { reactive, ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList } from 'vue/server-renderer';
import { useRouter, useRoute } from 'vue-router';
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
  __name: "createKepalaKeluarga",
  __ssrInlineRender: true,
  setup(__props) {
    useAuthStore();
    useRouter();
    const route = useRoute();
    const jumlahKk = parseInt(route.query.jumlah_kk, 10) || 1;
    const forms = reactive(Array.from({ length: jumlahKk }, () => ({
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
    })));
    const errors = reactive(Array.from({ length: jumlahKk }, () => ({})));
    reactive({
      message: "",
      show: false
    });
    ref(false);
    const currentFormIndex = ref(0);
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
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-836a46fb>`);
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      _push(`<div class="flex overflow-hidden bg-white pt-16" data-v-836a46fb>`);
      _push(ssrRenderComponent(_component_SidebarAdmin, null, null, _parent));
      _push(`<div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto sm:ml-64" data-v-836a46fb><main data-v-836a46fb><div class="pt-6 px-4 ml-5 mr-5" data-v-836a46fb><h1 class="text-lg font-bold mb-4" data-v-836a46fb>Create Kepala Keluarga</h1></div></main><div class="min-h-screen flex" data-v-836a46fb><div class="w-full" data-v-836a46fb><div class="card bg-white p-10 rounded-lg shadow-md md:w-3/5 mx-auto lg:w-1/3" data-v-836a46fb><h3 class="text-center text-2xl font-semibold" data-v-836a46fb> Form Data Kepala Keluarga ${ssrInterpolate(currentFormIndex.value + 1)}</h3><form class="max-w-sm mx-auto" data-v-836a46fb><div class="mb-5" data-v-836a46fb><label for="keluarga_id" class="block text-sm font-medium text-gray-700" data-v-836a46fb>Keluarga ID</label><input id="keluarga_id" type="text"${ssrRenderAttr("value", forms[currentFormIndex.value].keluarga_id)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" readonly data-v-836a46fb>`);
      if (errors[currentFormIndex.value] && errors[currentFormIndex.value].keluarga_id) {
        _push(`<span class="text-red-500" data-v-836a46fb>${ssrInterpolate(errors[currentFormIndex.value].keluarga_id[0])}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-5" data-v-836a46fb><label for="nama" class="block text-sm font-medium text-gray-700" data-v-836a46fb>Nama</label><input id="nama"${ssrRenderAttr("value", forms[currentFormIndex.value].nama)} type="text" class="bg-gray-50 border border-gray-300 mt-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" data-v-836a46fb>`);
      if (errors[currentFormIndex.value] && errors[currentFormIndex.value].nama) {
        _push(`<span class="text-red-500" data-v-836a46fb>${ssrInterpolate(errors[currentFormIndex.value].nama[0])}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-5" data-v-836a46fb><label for="nik" class="block text-sm font-medium text-gray-700" data-v-836a46fb>NIK</label><input id="nik"${ssrRenderAttr("value", forms[currentFormIndex.value].nik)} type="text" class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2" data-v-836a46fb>`);
      if (errors[currentFormIndex.value] && errors[currentFormIndex.value].nik) {
        _push(`<span class="text-red-500" data-v-836a46fb>${ssrInterpolate(errors[currentFormIndex.value].nik[0])}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-5" data-v-836a46fb><label for="tempat_lahir" class="block text-sm font-medium text-gray-700" data-v-836a46fb>Tempat Lahir</label><input id="tempat_lahir"${ssrRenderAttr("value", forms[currentFormIndex.value].tempat_lahir)} type="text" class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2" data-v-836a46fb>`);
      if (errors[currentFormIndex.value] && errors[currentFormIndex.value].tempat_lahir) {
        _push(`<span class="text-red-500" data-v-836a46fb>${ssrInterpolate(errors[currentFormIndex.value].tempat_lahir[0])}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-5" data-v-836a46fb><label for="tanggal_lahir" class="block text-sm font-medium text-gray-700" data-v-836a46fb>Tanggal Lahir</label><input id="tanggal_lahir"${ssrRenderAttr("value", forms[currentFormIndex.value].tanggal_lahir)} type="date" class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2" data-v-836a46fb>`);
      if (errors[currentFormIndex.value] && errors[currentFormIndex.value].tanggal_lahir) {
        _push(`<span class="text-red-500" data-v-836a46fb>${ssrInterpolate(errors[currentFormIndex.value].tanggal_lahir[0])}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-5" data-v-836a46fb><label for="agama" class="block text-sm font-medium text-gray-700" data-v-836a46fb>Agama</label><select id="agama" class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2" data-v-836a46fb><option disabled value="" data-v-836a46fb${ssrIncludeBooleanAttr(Array.isArray(forms[currentFormIndex.value].agama) ? ssrLooseContain(forms[currentFormIndex.value].agama, "") : ssrLooseEqual(forms[currentFormIndex.value].agama, "")) ? " selected" : ""}>Pilih Agama</option><!--[-->`);
      ssrRenderList(agamaOptions, (agama) => {
        _push(`<option${ssrRenderAttr("value", agama)} data-v-836a46fb>${ssrInterpolate(agama)}</option>`);
      });
      _push(`<!--]--></select>`);
      if (errors[currentFormIndex.value] && errors[currentFormIndex.value].agama) {
        _push(`<span class="text-red-500" data-v-836a46fb>${ssrInterpolate(errors[currentFormIndex.value].agama[0])}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-5" data-v-836a46fb><label for="jenis_kelamin" class="block text-sm font-medium text-gray-700" data-v-836a46fb>Jenis Kelamin</label><select id="jenis_kelamin" class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2" data-v-836a46fb><option disabled value="" data-v-836a46fb${ssrIncludeBooleanAttr(Array.isArray(forms[currentFormIndex.value].jenis_kelamin) ? ssrLooseContain(forms[currentFormIndex.value].jenis_kelamin, "") : ssrLooseEqual(forms[currentFormIndex.value].jenis_kelamin, "")) ? " selected" : ""}>Pilih Jenis Kelamin</option><!--[-->`);
      ssrRenderList(jenisKelaminOptions, (jenis) => {
        _push(`<option${ssrRenderAttr("value", jenis)} data-v-836a46fb>${ssrInterpolate(jenis)}</option>`);
      });
      _push(`<!--]--></select>`);
      if (errors[currentFormIndex.value] && errors[currentFormIndex.value].jenis_kelamin) {
        _push(`<span class="text-red-500" data-v-836a46fb>${ssrInterpolate(errors[currentFormIndex.value].jenis_kelamin[0])}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-5" data-v-836a46fb><label for="pendidikan" class="block text-sm font-medium text-gray-700" data-v-836a46fb>Pendidikan</label><select id="pendidikan" class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2" data-v-836a46fb><option disabled value="" data-v-836a46fb${ssrIncludeBooleanAttr(Array.isArray(forms[currentFormIndex.value].pendidikan) ? ssrLooseContain(forms[currentFormIndex.value].pendidikan, "") : ssrLooseEqual(forms[currentFormIndex.value].pendidikan, "")) ? " selected" : ""}>Pilih Pendidikan</option><!--[-->`);
      ssrRenderList(pendidikanOptions, (pendidikan) => {
        _push(`<option${ssrRenderAttr("value", pendidikan)} data-v-836a46fb>${ssrInterpolate(pendidikan)}</option>`);
      });
      _push(`<!--]--></select>`);
      if (errors[currentFormIndex.value] && errors[currentFormIndex.value].pendidikan) {
        _push(`<span class="text-red-500" data-v-836a46fb>${ssrInterpolate(errors[currentFormIndex.value].pendidikan[0])}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-5" data-v-836a46fb><label for="pekerjaan" class="block text-sm font-medium text-gray-700" data-v-836a46fb>Pekerjaan</label><select id="pekerjaan" class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2" data-v-836a46fb><option disabled value="" data-v-836a46fb${ssrIncludeBooleanAttr(Array.isArray(forms[currentFormIndex.value].pekerjaan) ? ssrLooseContain(forms[currentFormIndex.value].pekerjaan, "") : ssrLooseEqual(forms[currentFormIndex.value].pekerjaan, "")) ? " selected" : ""}>Pilih Pekerjaan</option><!--[-->`);
      ssrRenderList(pekerjaanOptions, (pekerjaan) => {
        _push(`<option${ssrRenderAttr("value", pekerjaan)} data-v-836a46fb>${ssrInterpolate(pekerjaan)}</option>`);
      });
      _push(`<!--]--></select>`);
      if (errors[currentFormIndex.value] && errors[currentFormIndex.value].pekerjaan) {
        _push(`<span class="text-red-500" data-v-836a46fb>${ssrInterpolate(errors[currentFormIndex.value].pekerjaan[0])}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-5" data-v-836a46fb><label for="status_perkawinan" class="block text-sm font-medium text-gray-700" data-v-836a46fb>Status Perkawinan</label><select id="status_perkawinan" class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2" data-v-836a46fb><option disabled value="" data-v-836a46fb${ssrIncludeBooleanAttr(Array.isArray(forms[currentFormIndex.value].status_perkawinan) ? ssrLooseContain(forms[currentFormIndex.value].status_perkawinan, "") : ssrLooseEqual(forms[currentFormIndex.value].status_perkawinan, "")) ? " selected" : ""}>Pilih Status Perkawinan</option><!--[-->`);
      ssrRenderList(statusPerkawinanOptions, (status) => {
        _push(`<option${ssrRenderAttr("value", status)} data-v-836a46fb>${ssrInterpolate(status)}</option>`);
      });
      _push(`<!--]--></select>`);
      if (errors[currentFormIndex.value] && errors[currentFormIndex.value].status_perkawinan) {
        _push(`<span class="text-red-500" data-v-836a46fb>${ssrInterpolate(errors[currentFormIndex.value].status_perkawinan[0])}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex justify-between" data-v-836a46fb>`);
      if (currentFormIndex.value > 0) {
        _push(`<button type="button" class="text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2" data-v-836a46fb> Kembali </button>`);
      } else {
        _push(`<!---->`);
      }
      if (currentFormIndex.value < forms.length - 1) {
        _push(`<button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2" data-v-836a46fb> Selanjutnya </button>`);
      } else {
        _push(`<!---->`);
      }
      if (currentFormIndex.value === forms.length - 1) {
        _push(`<button type="submit" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2" data-v-836a46fb> Konfirmasi </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/nagari/anggotaKeluarga/createKepalaKeluarga.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const createKepalaKeluarga = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-836a46fb"]]);

export { createKepalaKeluarga as default };
//# sourceMappingURL=createKepalaKeluarga-BEl_SQVH.mjs.map
