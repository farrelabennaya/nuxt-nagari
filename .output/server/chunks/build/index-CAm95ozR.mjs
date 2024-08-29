import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { ref, useSSRContext } from 'vue';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const wargas = ref([]);
    const qrCodeUrl = (path) => {
      return `http://laravel-api.test/storage/${path}`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-1709c96a><h1 class="text-2xl font-bold mb-4" data-v-1709c96a>Daftar Warga</h1><ul data-v-1709c96a><!--[-->`);
      ssrRenderList(wargas.value, (warga) => {
        _push(`<li class="mb-2" data-v-1709c96a><p class="font-semibold" data-v-1709c96a>${ssrInterpolate(warga.name)}</p><p data-v-1709c96a>${ssrInterpolate(warga.address)}</p><p data-v-1709c96a>${ssrInterpolate(warga.phone)}</p><img${ssrRenderAttr("src", qrCodeUrl(warga.qr_code))} alt="QR Code" class="mt-2" data-v-1709c96a></li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/qr/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1709c96a"]]);

export { index as default };
//# sourceMappingURL=index-CAm95ozR.mjs.map
