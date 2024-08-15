<template>
    <div>
      <AppHeader />
      <div class="flex overflow-hidden bg-white pt-16">
        <SidebarAdmin />
        <div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto sm:ml-64">
          <main>
            <div class="pt-6 px-4 ml-5 mr-5">
              <h1 class="text-lg font-bold mb-4">Detail Rumah</h1>
  
              <div v-if="rumah">
                <h2 class="text-xl font-bold mb-4">Alamat: {{ rumah.alamat.detail_alamat }}</h2>
                <table class="w-full text-sm text-left text-gray-500">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th scope="col" class="px-4 py-3">Nama</th>
                      <th scope="col" class="px-4 py-3">NIK</th>
                      <th scope="col" class="px-4 py-3">Tempat Lahir</th>
                      <th scope="col" class="px-4 py-3">Tanggal Lahir</th>
                      <th scope="col" class="px-4 py-3">Agama</th>
                      <th scope="col" class="px-4 py-3">Jenis Kelamin</th>
                      <th scope="col" class="px-4 py-3">Pendidikan</th>
                      <th scope="col" class="px-4 py-3">Pekerjaan</th>
                      <th scope="col" class="px-4 py-3">Status Perkawinan</th>
                      <th scope="col" class="px-4 py-3">Hubungan Keluarga</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="anggota in rumah.anggota_keluarga" :key="anggota.id" class="bg-white border-b hover:bg-gray-50">
                      <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{{ anggota.nama }}</td>
                      <td class="px-4 py-3">{{ anggota.nik }}</td>
                      <td class="px-6 py-4">{{ anggota.tempat_lahir }}</td>
                      <td class="px-6 py-4">{{ anggota.tanggal_lahir }}</td>
                      <td class="px-6 py-4">{{ anggota.agama }}</td>
                      <td class="px-6 py-4">{{ anggota.jenis_kelamin }}</td>
                      <td class="px-6 py-4">{{ anggota.pendidikan }}</td>
                      <td class="px-6 py-4">{{ anggota.pekerjaan }}</td>
                      <td class="px-6 py-4">{{ anggota.status_perkawinan }}</td>
                      <td class="px-6 py-4">{{ anggota.hubungan_keluarga }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
  
              <div v-else>
                <p>Loading...</p>
              </div>
            </div>
          </main>
          <FooterAdmin />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  import AppHeader from "~/components/AppHeader.vue";
  import SidebarAdmin from "~/components/SidebarAdmin.vue";
  
  export default {
    components: {
      AppHeader,
      SidebarAdmin,
    },
    setup() {
      const rumah = ref(null);
      const rumahId = ref(null);
  
      const fetchRumahDetail = async () => {
        try {
          const response = await fetch(`https://www.demo-ta.my.id/api/rumahs/${rumahId.value}`);
          const data = await response.json();
          rumah.value = data;
        } catch (error) {
          console.error("Error fetching rumah detail:", error);
        }
      };
  
      onMounted(() => {
        const urlParams = new URLSearchParams(window.location.search);
        rumahId.value = urlParams.get('rumahId');
        fetchRumahDetail();
      });
  
      return {
        rumah,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Tambahkan gaya khusus jika diperlukan */
  </style>
  