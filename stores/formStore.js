import { defineStore } from 'pinia';

export const useFormStore = defineStore('formStore', {
  state: () => ({
    anggotaKeluargaForms: []
  }),
  actions: {
    addAnggota(anggota) {
      this.anggotaKeluargaForms.push(anggota);
    },
    updateAnggota(index, anggota) {
      this.anggotaKeluargaForms[index] = anggota;
    },
    clearForms() {
      this.anggotaKeluargaForms = [];
    },
    resetForms() {
      this.anggotaKeluargaForms = [];
    }
  }
});
