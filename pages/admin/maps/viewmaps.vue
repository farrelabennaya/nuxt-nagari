<template>
    <div id="map" style="height: 500px;"></div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import { useRoute } from 'vue-router'; // Import useRoute untuk mengambil query parameter
  definePageMeta({
  middleware: ["auth", "role"],
  colorMode: "light",
});

  
  const route = useRoute(); // Ambil koordinat dari query parameter
  
  onMounted(async () => {
    if (typeof window !== 'undefined') {
      // Lazy load Leaflet to ensure it's only loaded on the client side
      const L = (await import('leaflet')).default;
      await import('leaflet/dist/leaflet.css');
  
      // Ambil koordinat dari query parameter
      const koordinat = route.query.koordinat ? route.query.koordinat.split(',') : [];
      const lat = parseFloat(koordinat[0]?.trim());
      const lng = parseFloat(koordinat[1]?.trim());
  
      if (!isNaN(lat) && !isNaN(lng)) {
        // Inisialisasi peta dengan koordinat awal dari query parameter
        const map = L.map('map').setView([lat, lng], 13);
  
        // Tambahkan tile layer ke peta
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 18,
          attribution: '© OpenStreetMap'
        }).addTo(map);
  
        // Tambahkan marker ke peta
        L.marker([lat, lng])
          .addTo(map)
          .bindPopup("Lokasi Rumah Penduduk")
          .openPopup();
  
        map.setView([lat, lng], 15); // Zoom in ke marker
      } else {
        console.error("Invalid coordinates");
      }
    }
  });
  </script>
  
  <style scoped>
  #map {
    width: 100%;
    height: 500px; /* Pastikan peta memiliki tinggi */
  }
  </style>
  