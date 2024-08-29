
<template>
  <div>
    <AppHeader />
    <div class="flex overflow-hidden bg-white pt-16">
      
      <SidebarAdmin />
      <div
        id="main-content"
        class="min-h-screen h-full w-full bg-gray-50 relative overflow-y-auto sm:ml-64"
      >
      <div class="custom-header to-gray-100 p-6 pb-32 pt-5">
        <main>
          <!-- <div class="pt-6 px-4 ml-5 mr-5">
            <h1 class="text-lg font-bold mb-4">Data Petugas</h1>
            <div></div>
            <slot />
          </div> -->
          <div
              class="bg-white rounded-lg shadow-sm p-6 flex justify-between items-center relative overflow-x-auto ml-5 mr-5 mt-5 mb-5"
            >
              <div>
                <h2 class="text-xl font-bold text-gray-800">Lokasi Penduduk</h2>
                <p class="text-gray-500">Lihat Lokasi Penduduk</p>
              </div>
              <!-- <NuxtLink to="/admin/user/create">
                <button
                  class="bg-green-500 text-white font-medium rounded-lg px-4 py-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                >
                  + Tambah User
                </button>
              </NuxtLink> -->
            </div>
        </main>
      </div>

      <div class="relative overflow-x-auto ml-5 mr-5 -mt-20 p-6 pb-32 pt-5">
  
    <table class="w-full text-sm text-left text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-3">Nama</th>
          <th scope="col" class="px-6 py-3">Jenis Kelamin</th>
          <th scope="col" class="px-6 py-3">Usia</th>
          <th scope="col" class="px-6 py-3">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(anggota, index) in anggotaKeluargaList"
          :key="anggota.id"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        >
          <td class="px-6 py-4">{{ anggota.nama }}</td>
          <td class="px-6 py-4">{{ anggota.jenis_kelamin }}</td>
          <td class="px-6 py-4">{{ calculateAge(anggota.tanggal_lahir).formattedAge }}</td>
          <td class="px-6 py-4">
            <button
              @click="viewLocation(anggota)"
              class="bg-blue-500 text-white font-medium rounded-lg px-4 py-2 hover:bg-blue-600 focus:outline-none"
            >
              View Lokasi
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

        
          

        
        
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

definePageMeta({
  middleware: ["auth", "role"],
  colorMode: "light",
});


const anggotaKeluargaList = ref([]);

// Fungsi untuk menghitung usia dari tanggal lahir
const calculateAge = (tanggal_lahir) => {
  const today = new Date();
  const birthDate = new Date(tanggal_lahir);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return { formattedAge: `${age} tahun` };
};

// Fungsi untuk mengambil data penduduk dari API
const fetchPenduduk = async () => {
  try {
    const response = await fetch('http://laravel-api.test/api/anggota_keluargas');
    if (!response.ok) {
      throw new Error('Gagal mengambil data penduduk');
    }
    const data = await response.json();
    anggotaKeluargaList.value = data;
  } catch (error) {
    console.error('Error:', error);
  }
};

// Fungsi untuk melihat lokasi penduduk
const viewLocation = (anggota) => {
  const titikKoordinat = anggota.keluarga?.rumah?.alamat?.titik_koordinat;
  if (titikKoordinat) {
    // Membuka halaman baru dengan peta dan koordinat
    const url = `/admin/maps/viewmaps?koordinat=${titikKoordinat}`;
    window.open(url, '_blank');
  } else {
    alert("Titik koordinat tidak tersedia untuk penduduk ini.");
  }
};

// Ambil data penduduk saat komponen dimount
onMounted(() => {
  fetchPenduduk();
});
</script>

<style scoped>
.custom-bg-main {
  background-color: #f9fafb;
}

.custom-header {
  background-color: #adc4ce;
}
</style>
