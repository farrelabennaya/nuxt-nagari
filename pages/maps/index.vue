<template>
    <div>
      <h1>Peta Rumah di Nagari Lubuk Malako</h1>
      <Map />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import Map from '~/components/Map.vue';
  
  const rumahData = ref([]);
  
  onMounted(async () => {
    try {
      const response = await fetch('http://laravel-api.test/api/rumah'); // Panggil API menggunakan fetch
      if (!response.ok) {
        throw new Error('Failed to fetch rumah data');
      }
      const data = await response.json();
      rumahData.value = data;
    } catch (error) {
      console.error('Error fetching rumah data:', error);
    }
  });
  </script>
  