<template>
    <div id="map" style="height: 500px;"></div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import L from 'leaflet'; // Pastikan Leaflet diimpor
  import 'leaflet/dist/leaflet.css'; // Impor CSS untuk Leaflet
  
  const rumahData = ref([]);
  
  onMounted(async () => {
    try {
      // Meminta data dari API
      const response = await fetch('http://laravel-api.test/api/rumah');
      if (!response.ok) {
        throw new Error('Failed to fetch rumah data');
      }
      const data = await response.json();
      rumahData.value = data;
  
      // Inisialisasi peta dan set view ke Nagari Lubuk Malako
      const map = L.map('map').setView([-1.4612834557463317, 101.38144051635624], 14);
  
      // Load tile layer dari OpenStreetMap
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '© OpenStreetMap'
      }).addTo(map);
  
      // Loop melalui data rumah dari API dan tambahkan marker ke peta
      rumahData.value.forEach(rumah => {
        const koordinat = rumah.alamat.titik_koordinat.split(',');
        const lat = parseFloat(koordinat[0].trim());
        const lng = parseFloat(koordinat[1].trim());
  
        // Validasi koordinat sebelum menambahkan marker
        if (!isNaN(lat) && !isNaN(lng)) {
          L.marker([lat, lng])
            .addTo(map)
            .bindPopup(`<b>Rumah ID:</b> ${rumah.id}<br><b>Alamat:</b> ${rumah.alamat.detail_alamat}`);
        } else {
          console.error("Invalid coordinates for rumah ID:", rumah.id);
        }
      });
    } catch (error) {
      console.error('Error fetching rumah data:', error);
    }
  });
  </script>
  
  <style scoped>
  #map {
    width: 100%;
    height: 500px; /* Pastikan peta memiliki tinggi */
  }
  </style>
  