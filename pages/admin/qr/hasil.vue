<template>
    <div>
      <h1>Data Rumah</h1>
      <div v-for="rumah in rumahList" :key="rumah.id">
        <h2>{{ rumah.alamat.detail_alamat }}</h2>
        <img :src="rumah.qrCodeBase64" alt="QR Code" />
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  
  export default {
    setup() {
      const rumahList = ref([]);
  
      const fetchRumah = async () => {
        try {
          const response = await fetch('https://www.demo-ta.my.id/api/rumahs');
          const data = await response.json();
  
          if (Array.isArray(data)) {
            rumahList.value = data.map(rumah => ({
              ...rumah,
              qrCodeBase64: rumah.qr_code ? `data:image/svg+xml;base64,${rumah.qr_code.code}` : null
            }));
          }
        } catch (error) {
          console.error('Error fetching rumah:', error);
        }
      };
  
      onMounted(fetchRumah);
  
      return {
        rumahList,
      };
    },
  };
  </script>
  