import { defineStore } from 'pinia';

export const useFormStore = defineStore('formStore', {
  state: () => ({
    keluargaForm: null,
    kepalaKeluargaForms: [],
  }),
  actions: {
    updateKeluargaForm(data) {
      this.keluargaForm = data;
    },
    addKepalaKeluargaForm(data) {
      this.kepalaKeluargaForms.push(data);
    },
    getKeluargaForm() {
      return this.keluargaForm;
    },
    getKepalaKeluargaForms() {
      return this.kepalaKeluargaForms;
    },
    clearAllForms() {
      this.keluargaForm = null;
      this.kepalaKeluargaForms = [];
    }
  }
});
