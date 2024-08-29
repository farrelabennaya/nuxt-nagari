<template>
    <div>
      <!-- Tampilan komponen sesuai dengan step saat ini -->
      <div v-if="currentStep === 1">
        <CreateKeluarga :allData="allData" @nextStep="nextStep" />
      </div>
      <div v-else-if="currentStep === 2">
        <CreateKepalaKeluarga :allData="allData" @nextStep="nextStep" @previousStep="previousStep" />
      </div>
      <div v-else-if="currentStep === 3">
        <CreateAlamat :allData="allData" @previousStep="previousStep" @submitAll="submitAllDataToServer" />
      </div>
    </div>
  </template>
  
  <script>
  import { reactive, ref } from 'vue';
  import CreateKeluarga from './CreateKeluarga.vue';
  import CreateKepalaKeluarga from './CreateKepalaKeluarga.vue';
  import CreateAlamat from './CreateAlamat.vue';
  
  export default {
    components: {
      CreateKeluarga,
      CreateKepalaKeluarga,
      CreateAlamat
    },
    setup() {
      const currentStep = ref(1);
      const allData = reactive({
        keluargaData: {},
        kepalaKeluargaData: [],
        alamatData: {}
      });
  
      const nextStep = () => {
        if (currentStep.value < 3) currentStep.value++;
      };
  
      const previousStep = () => {
        if (currentStep.value > 1) currentStep.value--;
      };
  
      const submitAllDataToServer = async () => {
        try {
          const token = auth.getToken;
  
          const response = await fetch('http://laravel-api.test/api/save-all-data', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(allData),
          });
  
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error('Error saving data: ' + errorData.message);
          }
  
          const result = await response.json();
          showNotification('Data saved successfully!');
          setTimeout(() => {
            router.push('/admin/nagari/keluarga');
          }, 1500);
        } catch (error) {
          console.error('Request failed:', error);
          showNotification(error.message);
        }
      };
  
      return {
        currentStep,
        allData,
        nextStep,
        previousStep,
        submitAllDataToServer
      };
    }
  };
  </script>
  