import { A as AppHeader } from './AppHeader-uzUtYZuA.mjs';
import { _ as __nuxt_component_1 } from './SidebarAdmin-vvFIfM9T.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-l5zPv3vf.mjs';
import { ref, reactive, computed, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './auth-B1XVed-6.mjs';
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
  components: {
    AppHeader,
    SidebarAdmin: __nuxt_component_1
  },
  setup() {
    const keluargaDetail2 = ref({});
    const anggotaKeluarga = ref([]);
    const notification = reactive({ show: false, message: "" });
    const filteredAnggotaKeluarga = computed(() => {
      return anggotaKeluarga.value;
    });
    return {
      keluargaDetail: keluargaDetail2,
      anggotaKeluarga,
      filteredAnggotaKeluarga,
      notification
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a, _b;
  const _component_AppHeader = AppHeader;
  const _component_SidebarAdmin = __nuxt_component_1;
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-21e14978>`);
  _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
  _push(`<div class="flex overflow-hidden bg-white pt-16" data-v-21e14978>`);
  _push(ssrRenderComponent(_component_SidebarAdmin, null, null, _parent));
  _push(`<div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto sm:ml-64" data-v-21e14978><div class="custom-header to-gray-100 p-6 pb-32 pt-5" data-v-21e14978><main data-v-21e14978><div class="bg-white rounded-lg shadow-sm p-6 flex justify-between items-center relative overflow-x-auto ml-5 mr-5 mt-5 mb-5" data-v-21e14978><div data-v-21e14978><h2 class="text-xl font-bold text-gray-800" data-v-21e14978>Detail Keluarga</h2><p class="text-gray-500" data-v-21e14978>Kelola Anggota Keluarga</p></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: {
      path: "/admin/nagari/anggotakeluarga/createAnggota",
      query: { keluarga_id: $setup.keluargaDetail.id }
    }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button class="bg-green-500 text-white font-medium rounded-lg px-4 py-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300" data-v-21e14978${_scopeId}> + Tambah Anggota Keluarga </button>`);
      } else {
        return [
          createVNode("button", { class: "bg-green-500 text-white font-medium rounded-lg px-4 py-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300" }, " + Tambah Anggota Keluarga ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></main></div><main class="grid grid-cols-1 lg:grid-cols-3 gap-6 px-11 -mt-20 mb-20" data-v-21e14978><div class="lg:col-span-1 bg-white border border-gray-200 rounded-lg shadow-md p-6 relative overflow-x-auto" data-v-21e14978><div class="flex items-center mb-4" data-v-21e14978><div class="" data-v-21e14978><h3 class="text-xl font-bold text-gray-900" data-v-21e14978> Detail Keluarga - ${ssrInterpolate((_a = $setup.keluargaDetail.kepala_keluarga) == null ? void 0 : _a.nama)}</h3></div></div><div class="mb-4" data-v-21e14978><h4 class="text-gray-800 font-semibold" data-v-21e14978>Alamat</h4><p class="text-sm text-gray-500" data-v-21e14978>${ssrInterpolate((_b = $setup.keluargaDetail.rumah) == null ? void 0 : _b.alamat.detail_alamat)}</p></div><div class="mb-4" data-v-21e14978><h4 class="text-gray-800 font-semibold" data-v-21e14978>Jumlah KK</h4><p class="text-sm text-gray-500" data-v-21e14978>${ssrInterpolate($setup.keluargaDetail.jumlah_kk)}</p></div><div class="mb-4" data-v-21e14978><h4 class="text-gray-800 font-semibold" data-v-21e14978>QR Code Alamat</h4></div></div><div class="lg:col-span-2" data-v-21e14978><div class="w-full bg-white border border-gray-200 rounded-lg shadow-md p-6" data-v-21e14978><div class="flex justify-between items-center mb-4" data-v-21e14978><h2 class="text-xl font-bold text-gray-900" data-v-21e14978> Anggota Keluarga </h2><a href="#" class="text-blue-600 hover:underline" data-v-21e14978>View all</a></div><div class="overflow-auto" data-v-21e14978><table class="w-full text-left text-sm text-gray-500" data-v-21e14978><thead class="text-xs text-gray-700 uppercase bg-gray-50" data-v-21e14978><tr data-v-21e14978><th scope="col" class="px-4 py-3" data-v-21e14978>Nama</th><th scope="col" class="px-4 py-3" data-v-21e14978>NIK</th><th scope="col" class="px-4 py-3" data-v-21e14978>Jenis Kelamin</th><th scope="col" class="px-4 py-3" data-v-21e14978>Hubungan Keluarga</th></tr></thead><tbody data-v-21e14978><!--[-->`);
  ssrRenderList($setup.filteredAnggotaKeluarga, (anggota) => {
    _push(`<tr class="bg-white border-b hover:bg-gray-50" data-v-21e14978><td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap" data-v-21e14978>${ssrInterpolate(anggota.nama)}</td><td class="px-4 py-3" data-v-21e14978>${ssrInterpolate(anggota.nik)}</td><td class="px-4 py-3" data-v-21e14978>${ssrInterpolate(anggota.jenis_kelamin)}</td><td class="px-4 py-3" data-v-21e14978>${ssrInterpolate(anggota.hubungan_keluarga)}</td></tr>`);
  });
  _push(`<!--]--></tbody></table></div></div>`);
  if ($setup.notification.show) {
    _push(`<div class="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-lg" data-v-21e14978>${ssrInterpolate($setup.notification.message)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></main></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/nagari/keluarga/keluargaDetail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const keluargaDetail = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-21e14978"]]);

export { keluargaDetail as default };
//# sourceMappingURL=keluargaDetail-DgoQnBpC.mjs.map
