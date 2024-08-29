import { A as AppHeader } from './AppHeader-uzUtYZuA.mjs';
import { _ as __nuxt_component_1 } from './SidebarAdmin-vvFIfM9T.mjs';
import { reactive, ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
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
import '@vueuse/core';
import 'tailwind-merge';
import '@iconify/vue';
import 'pinia-plugin-persistedstate';
import './nuxt-link-l5zPv3vf.mjs';

const _sfc_main = {
  __name: "add",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const form = reactive({
      name: "",
      birthPlace: "",
      birthDate: "",
      gender: "male",
      address: "",
      religion: "",
      maritalStatus: "single",
      householdCount: 1,
      familyMembers: [
        { name: "", birthDate: "", relation: "" }
      ]
    });
    const errors = reactive({});
    const qrCodeUrl = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = AppHeader;
      const _component_SidebarAdmin = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-57004f83>`);
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      _push(`<div class="flex overflow-hidden bg-white pt-16" data-v-57004f83>`);
      _push(ssrRenderComponent(_component_SidebarAdmin, null, null, _parent));
      _push(`<div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto sm:ml-64" data-v-57004f83><main data-v-57004f83><div class="pt-6 px-4 ml-5 mr-5" data-v-57004f83><h1 class="text-lg font-bold mb-4" data-v-57004f83>Tambah Data Warga</h1>`);
      if (qrCodeUrl.value) {
        _push(`<div class="text-center mb-4" data-v-57004f83><h2 class="text-xl font-bold" data-v-57004f83>QR Code</h2><img${ssrRenderAttr("src", qrCodeUrl.value)} alt="QR Code" class="mx-auto" data-v-57004f83></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form class="max-w-lg mx-auto bg-white p-8 shadow rounded" data-v-57004f83><div class="mb-4" data-v-57004f83><label for="name" class="form-label" data-v-57004f83>Nama</label><input id="name" type="text"${ssrRenderAttr("value", form.name)} class="form-input" data-v-57004f83>`);
      if (errors.name) {
        _push(`<span class="text-red-500" data-v-57004f83>${ssrInterpolate(errors.name)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-4" data-v-57004f83><label for="birthPlace" class="form-label" data-v-57004f83>Tempat Lahir</label><input id="birthPlace" type="text"${ssrRenderAttr("value", form.birthPlace)} class="form-input" data-v-57004f83>`);
      if (errors.birthPlace) {
        _push(`<span class="text-red-500" data-v-57004f83>${ssrInterpolate(errors.birthPlace)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-4" data-v-57004f83><label for="birthDate" class="form-label" data-v-57004f83>Tanggal Lahir</label><input id="birthDate" type="date"${ssrRenderAttr("value", form.birthDate)} class="form-input" data-v-57004f83>`);
      if (errors.birthDate) {
        _push(`<span class="text-red-500" data-v-57004f83>${ssrInterpolate(errors.birthDate)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-4" data-v-57004f83><label for="gender" class="form-label" data-v-57004f83>Jenis Kelamin</label><select id="gender" class="form-input" data-v-57004f83><option value="male" data-v-57004f83${ssrIncludeBooleanAttr(Array.isArray(form.gender) ? ssrLooseContain(form.gender, "male") : ssrLooseEqual(form.gender, "male")) ? " selected" : ""}>Laki-Laki</option><option value="female" data-v-57004f83${ssrIncludeBooleanAttr(Array.isArray(form.gender) ? ssrLooseContain(form.gender, "female") : ssrLooseEqual(form.gender, "female")) ? " selected" : ""}>Perempuan</option></select>`);
      if (errors.gender) {
        _push(`<span class="text-red-500" data-v-57004f83>${ssrInterpolate(errors.gender)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-4" data-v-57004f83><label for="address" class="form-label" data-v-57004f83>Alamat</label><input id="address" type="text"${ssrRenderAttr("value", form.address)} class="form-input" data-v-57004f83>`);
      if (errors.address) {
        _push(`<span class="text-red-500" data-v-57004f83>${ssrInterpolate(errors.address)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-4" data-v-57004f83><label for="religion" class="form-label" data-v-57004f83>Agama</label><input id="religion" type="text"${ssrRenderAttr("value", form.religion)} class="form-input" data-v-57004f83>`);
      if (errors.religion) {
        _push(`<span class="text-red-500" data-v-57004f83>${ssrInterpolate(errors.religion)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-4" data-v-57004f83><label for="maritalStatus" class="form-label" data-v-57004f83>Status Perkawinan</label><select id="maritalStatus" class="form-input" data-v-57004f83><option value="single" data-v-57004f83${ssrIncludeBooleanAttr(Array.isArray(form.maritalStatus) ? ssrLooseContain(form.maritalStatus, "single") : ssrLooseEqual(form.maritalStatus, "single")) ? " selected" : ""}>Belum Kawin</option><option value="married" data-v-57004f83${ssrIncludeBooleanAttr(Array.isArray(form.maritalStatus) ? ssrLooseContain(form.maritalStatus, "married") : ssrLooseEqual(form.maritalStatus, "married")) ? " selected" : ""}>Kawin</option><option value="divorced" data-v-57004f83${ssrIncludeBooleanAttr(Array.isArray(form.maritalStatus) ? ssrLooseContain(form.maritalStatus, "divorced") : ssrLooseEqual(form.maritalStatus, "divorced")) ? " selected" : ""}>Cerai</option></select>`);
      if (errors.maritalStatus) {
        _push(`<span class="text-red-500" data-v-57004f83>${ssrInterpolate(errors.maritalStatus)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-4" data-v-57004f83><label for="householdCount" class="form-label" data-v-57004f83>Jumlah KK</label><input id="householdCount" type="number"${ssrRenderAttr("value", form.householdCount)} class="form-input" data-v-57004f83>`);
      if (errors.householdCount) {
        _push(`<span class="text-red-500" data-v-57004f83>${ssrInterpolate(errors.householdCount)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><!--[-->`);
      ssrRenderList(form.familyMembers, (member, index) => {
        _push(`<div class="mb-4" data-v-57004f83><h3 class="form-label" data-v-57004f83>Anggota Keluarga ${ssrInterpolate(index + 1)}</h3><input type="text"${ssrRenderAttr("value", member.name)} placeholder="Nama" class="form-input mb-2" data-v-57004f83><input type="date"${ssrRenderAttr("value", member.birthDate)} placeholder="Tanggal Lahir" class="form-input mb-2" data-v-57004f83><input type="text"${ssrRenderAttr("value", member.relation)} placeholder="Hubungan" class="form-input" data-v-57004f83>`);
        if (errors.familyMembers && errors.familyMembers[index]) {
          _push(`<span class="text-red-500" data-v-57004f83>${ssrInterpolate(errors.familyMembers[index])}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--><div class="flex justify-between" data-v-57004f83><button type="button" class="btn-primary" data-v-57004f83>Tambah Anggota Keluarga</button><button type="submit" class="btn-primary" data-v-57004f83>Simpan</button></div></form></div></main></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/qr/add.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const add = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-57004f83"]]);

export { add as default };
//# sourceMappingURL=add-DekkOAmn.mjs.map
