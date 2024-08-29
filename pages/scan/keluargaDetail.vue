<template>
    <div>
      <AppHeader />
      <div class="flex overflow-hidden bg-white pt-16">
        <SidebarAdmin />
        <div
          id="main-content"
          class="h-full w-full bg-gray-50 relative overflow-y-auto sm:ml-64"
        >
          <div class="custom-header to-gray-100 p-6 pb-32 pt-5">
            <main>
              <div
                class="bg-white rounded-lg shadow-sm p-6 flex justify-between items-center relative overflow-x-auto ml-5 mr-5 mt-5 mb-5"
              >
                <div>
                  <h2 class="text-xl font-bold text-gray-800">Detail Keluarga</h2>
  
                  <p class="text-gray-500">Kelola Anggota Keluarga</p>
                </div>
                <NuxtLink
                  :to="{
                    path: '/admin/nagari/anggotakeluarga/createNewKepalaKeluarga',
                    query: { keluarga_id: keluargaDetail.id },
                  }"
                >
                  <button
                    class="bg-green-500 text-white font-medium rounded-lg px-4 py-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                  >
                    + Tambah Kepala Keluarga
                  </button>
                </NuxtLink>
              </div>
            </main>
          </div>
  
          <!-- Main Grid Container -->
          <main class="grid grid-cols-1 lg:grid-cols-3 gap-6 px-11 -mt-20 mb-20">
            <!-- Iterate over grouped kepala keluarga -->
  
            <div class="lg:col-span-2 mb-5">
              <div v-if="groupedByKepalaKeluarga.length > 0">
                <div
                  v-for="(group, index) in groupedByKepalaKeluarga"
                  :key="index"
                  class="w-full bg-white border border-gray-200 rounded-lg shadow-md p-6 mb-5"
                >
                  <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-bold text-gray-900">
                      <!-- {{ group.kepalaKeluarga.nama }} -->
                      No KK - {{ group.kartuKeluarga.no_kk || "Belum tersedia" }}
                    </h2>
                    <div class="flex space-x-2">
                      <NuxtLink
                        :to="{
                          path: '/admin/nagari/anggotakeluarga/createAnggota2',
                          query: {
                            keluarga_id: group.kepalaKeluarga.keluarga_id,
                            kepala_keluarga_id: group.kepalaKeluarga.id,
                          },
                        }"
                      >
                        <button
                          class="bg-blue-500 text-white font-medium rounded-lg px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        >
                          + Tambah Anggota
                        </button>
                      </NuxtLink>
                      <button
                        @click="openDetailModal(group.kepalaKeluarga.id)"
                        class="bg-gray-500 text-white font-medium rounded-lg px-3 py-2 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
                      >
                        <svg
                          class="w-6 h-6 text-white-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div class="overflow-auto">
                    <table class="w-full text-left text-sm text-gray-500">
                      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                          <th scope="col" class="px-4 py-3">Nama</th>
                          <th scope="col" class="px-4 py-3">NIK</th>
                          <th scope="col" class="px-4 py-3">Jenis Kelamin</th>
                          <th scope="col" class="px-4 py-3">Hubungan Keluarga</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="anggota in group.anggota"
                          :key="anggota.id"
                          class="bg-white border-b hover:bg-gray-50"
                        >
                          <td
                            class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap"
                          >
                            {{ anggota.nama }}
                          </td>
                          <td class="px-4 py-3">{{ anggota.nik }}</td>
                          <td class="px-4 py-3">{{ anggota.jenis_kelamin }}</td>
                          <td class="px-4 py-3">
                            {{ anggota.hubungan_keluarga }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
  
              <div
                v-else
                class="w-full bg-white border border-gray-200 rounded-lg shadow-md p-6 mb-5"
              >
                <h2 class="text-xl font-bold text-gray-900 mb-4">
                  Tidak ada anggota keluarga yang terdaftar.
                </h2>
                <p class="text-sm text-gray-500">
                  Belum ada anggota keluarga yang terdaftar dalam keluarga ini.
                  Silakan tambahkan anggota keluarga menggunakan tombol di atas.
                </p>
              </div>
            </div>
  
            <div
              class="lg:col-span-1 bg-white border border-gray-200 rounded-lg shadow-md p-6 relative overflow-x-auto"
              style="min-height: 350px; max-height: 300px"
            >
              <div class="flex items-center mb-4">
                <div class="">
                  <h3 class="text-xl font-bold text-gray-900">Detail Keluarga</h3>
                  <h4 class="text-gray-800 font-semibold"></h4>
                </div>
              </div>
  
              <!-- Grid Container for Two Columns -->
              <div class="grid grid-cols-2 gap-4">
                <div class="mb-4">
                  <h4 class="text-gray-800 font-semibold">
                    Jumlah Kepala Keluarga
                  </h4>
                  <p class="text-sm text-gray-500">{{ jumlahKepalaKeluarga }}</p>
                </div>
  
                <div class="mb-4">
                  <h4 class="text-gray-800 font-semibold">Alamat</h4>
                  <p class="text-sm text-gray-500">
                    {{ keluargaDetail.rumah?.alamat.detail_alamat }}
                  </p>
                </div>
  
                <div class="mb-4">
                  <h4 class="text-gray-800 font-semibold">Jorong</h4>
                  <p class="text-sm text-gray-500">
                    {{ keluargaDetail.rumah?.alamat?.jorong.name }}
                  </p>
                </div>
  
                <div class="mb-4">
                  <h4 class="text-gray-800 font-semibold">Titik Kordinat</h4>
                  <p class="text-sm text-gray-500">
                    {{ keluargaDetail.rumah?.alamat?.titik_koordinat }}
                  </p>
                </div>
  
                <div class="mb-4 col-span-2">
                  <h4 class="text-gray-800 font-semibold">QR Code Alamat</h4>
                  <!-- Add your QR Code logic here -->
                </div>
              </div>
            </div>
          </main>
  
          <!-- Modal for Detail Keluarga -->
          <div
            v-if="isModalVisible"
            class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
           >
            <div class="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-8xl">
              <h2 class="text-xl font-bold text-gray-900 mb-4">
                Detail Anggota Keluarga
              </h2>
              <div class="overflow-auto">
                <table class="w-full text-left text-sm text-gray-500">
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
                      <th scope="col" class="px-4 py-3">Nama Ayah</th>
                      <th scope="col" class="px-4 py-3">Nama Ibu</th>
                      <th scope="col" class="px-4 py-3">Status Perkawinan</th>
                      <th scope="col" class="px-4 py-3">Hubungan Keluarga</th>
                      <th scope="col" class="px-4 py-3 flex justify-center">
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="anggota in selectedGroup.anggota"
                      :key="anggota.id"
                      class="bg-white border-b hover:bg-gray-50"
                    >
                      <td
                        class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap"
                      >
                        {{ anggota.nama }}
                      </td>
                      <td class="px-4 py-3">{{ anggota.nik }}</td>
                      <td class="px-6 py-4">{{ anggota.tempat_lahir }}</td>
                      <td class="px-6 py-4">{{ anggota.tanggal_lahir }}</td>
                      <td class="px-6 py-4">{{ anggota.agama }}</td>
                      <td class="px-6 py-4">{{ anggota.jenis_kelamin }}</td>
                      <td class="px-6 py-4">{{ anggota.pendidikan }}</td>
                      <td class="px-6 py-4">{{ anggota.pekerjaan }}</td>
                      <td class="px-6 py-4">{{ anggota.nama_ayah }}</td>
                      <td class="px-6 py-4">{{ anggota.nama_ibu }}</td>
                      <td class="px-6 py-4">{{ anggota.status_perkawinan }}</td>
                      <td class="px-6 py-4">{{ anggota.hubungan_keluarga }}</td>
                      <td class="px-6 py-4 flex justify space-x-2">
                        <button
                          @click="editAnggota(anggota)"
                          class="flex p-1.5 border border-yellow-500 me-2 mt-2 rounded-lg hover:rounded-xl mb-2 hover:bg-yellow-100 transition-all duration-300 text-yellow-500"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                          </svg>
                        </button>
                        <button
                           @click="deleteAnggota(anggota.id, anggota.hubungan_keluarga === 'Kepala Keluarga', true)"
                          class="flex p-1.5 border border-red-500 me-2 mt-2 rounded-lg hover:rounded-xl mb-2 hover:bg-red-100 transition-all duration-300 text-red-500"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="flex justify-end mt-4">
                <button
                  @click="closeDetailModal"
                  class="bg-red-500 text-white font-medium rounded-lg px-4 py-2 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
  
          <div
            v-if="notification.show"
            class="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-lg"
          >
            {{ notification.message }}
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, reactive, computed, onMounted } from "vue";
  import AppHeader from "~/components/AppHeader.vue";
  import SidebarAdmin from "~/components/SidebarAdmin.vue";
  
  definePageMeta({
    middleware: ["auth", "role"],
    colorMode: "light",
  });
  
  export default {
    components: {
      AppHeader,
      SidebarAdmin,
    },
    setup() {
      const router = useRouter();
      const keluargaDetail = ref({});
      const anggotaKeluarga = ref([]);
      const isModalVisible = ref(false);
      const selectedGroup = ref(null);
      const kartuKeluarga = ref({});
  
      const notification = reactive({ show: false, message: "" });
  
      // Fetch Keluarga Detail
      const fetchKeluargaDetail = async () => {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get("id");
  
        try {
          const response = await fetch(
            `http://laravel-api.test/api/keluargas/${id}`
          );
          const data = await response.json();
          keluargaDetail.value = data;
          kartuKeluarga.value = data.kartu_keluarga || []; // Tambahkan pengecekan jika tidak ada kartu keluarga
          await fetchAnggotaKeluarga(data.id);
        } catch (error) {
          console.error("Error fetching keluarga detail:", error);
        }
      };
  
      // Fetch Anggota Keluarga
      const fetchAnggotaKeluarga = async (keluargaId) => {
        try {
          const response = await fetch(
            `http://laravel-api.test/api/anggota_keluargas`
          );
          const data = await response.json();
          anggotaKeluarga.value = data.filter(
            (anggota) => anggota.keluarga_id === keluargaId
          );
        } catch (error) {
          console.error("Error fetching anggota keluarga:", error);
          console.log("Data fetched:", anggotaKeluarga.value);
        }
      };
  
      const editAnggota = (anggota) => {
        router.push({
          path: "/admin/nagari/anggotakeluarga/editAnggota",
          query: { id: anggota.id },
        });
      };
  
      
  
      const deleteAnggota = async (anggotaId, isKepalaKeluarga = false) => {
    if (isKepalaKeluarga) {
      // Jika anggota ini adalah kepala keluarga, panggil deleteKepalaKeluarga
      await deleteKepalaKeluarga(anggotaId);
    } else {
      if (confirm("Apakah Anda yakin ingin menghapus anggota keluarga ini?")) {
        try {
          const response = await fetch(
            `http://laravel-api.test/api/anggota_keluargas/${anggotaId}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
  
          if (response.ok) {
            // Perbarui anggota keluarga setelah penghapusan
            anggotaKeluarga.value = anggotaKeluarga.value.filter(
              (anggota) => anggota.id !== anggotaId
            );
  
            // Perbarui group setelah penghapusan anggota
            selectedGroup.value.anggota = selectedGroup.value.anggota.filter(
              (anggota) => anggota.id !== anggotaId
            );
  
            showNotification("Anggota keluarga berhasil dihapus");
          } else {
            showNotification("Gagal menghapus anggota keluarga");
          }
        } catch (error) {
          console.error("Error deleting anggota:", error);
          showNotification("Terjadi kesalahan saat menghapus anggota keluarga");
        }
      }
    }
  };
  
  const deleteKepalaKeluarga = async (kepalaKeluargaId) => {
    if (confirm("Apakah Anda yakin ingin menghapus kepala keluarga ini beserta anggotanya?")) {
      try {
        const response = await fetch(
          `http://laravel-api.test/api/kepala-keluarga/${kepalaKeluargaId}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
  
        if (response.ok) {
          // Cari index kepala keluarga yang akan dihapus
          const indexToRemove = groupedByKepalaKeluarga.value.findIndex(
            (group) => group.kepalaKeluarga.id === kepalaKeluargaId
          );
  
          // Jika kepala keluarga ditemukan, hapus dari tampilan
          if (indexToRemove !== -1) {
            groupedByKepalaKeluarga.value.splice(indexToRemove, 1);
  
            // Jika kepala keluarga yang dihapus adalah bagian dari selectedGroup, reset selectedGroup
            if (selectedGroup.value?.kepalaKeluarga?.id === kepalaKeluargaId) {
              selectedGroup.value = null;
              isModalVisible.value = false;  // Tutup modal
            }
  
            // Jika tidak ada lagi kepala keluarga, alihkan ke halaman index.vue
            if (groupedByKepalaKeluarga.value.length === 0) {
              router.push({ path: '/admin/nagari/keluarga' });
              showNotification("Kepala keluarga berhasil dihapus dan data kosong. Dialihkan ke halaman keluarga.");
            } else {
              showNotification("Kepala keluarga berhasil dihapus!");
            }
          }
        } else {
          showNotification("Gagal menghapus kepala keluarga");
        }
      } catch (error) {
        console.error("Error deleting kepala keluarga:", error);
        showNotification("Terjadi kesalahan saat menghapus kepala keluarga");
      }
    }
  };
  
  
  
  
  
  
      // Group anggota keluarga by kepala_keluarga_id
      const groupedByKepalaKeluarga = computed(() => {
        const groups = [];
  
        const kepalaKeluargas = anggotaKeluarga.value.filter(
          (anggota) => anggota.hubungan_keluarga === "Kepala Keluarga"
        );
  
        kepalaKeluargas.forEach((kepalaKeluarga) => {
          const anggotaGroup = anggotaKeluarga.value.filter(
            (anggota) => anggota.kepala_keluarga_id === kepalaKeluarga.id
          );
  
          groups.push({
            kepalaKeluarga,
            anggota: anggotaGroup,
            kartuKeluarga: kartuKeluarga.value.find(
              (kk) => kk.kepala_keluarga_id === kepalaKeluarga.id
            ),
          });
        });
  
        return groups;
      });
  
      // Open modal and show details of the selected group
      const openDetailModal = (kepalaKeluargaId) => {
        const group = groupedByKepalaKeluarga.value.find(
          (g) => g.kepalaKeluarga.id === kepalaKeluargaId
        );
        if (group) {
          selectedGroup.value = group;
          isModalVisible.value = true;
        }
      };
  
      // Close the modal
      const closeDetailModal = () => {
        isModalVisible.value = false;
        selectedGroup.value = null;
      };
  
      // Computed property to calculate jumlah kepala keluarga
      const jumlahKepalaKeluarga = computed(() => {
        return anggotaKeluarga.value.filter(
          (anggota) => anggota.hubungan_keluarga === "Kepala Keluarga"
        ).length;
      });
  
      onMounted(() => {
        fetchKeluargaDetail();
        console.log(keluargaDetail.value);
  
        console.log("Keluarga Detail on Mounted:", keluargaDetail.value);
        console.log("Anggota Keluarga on Mounted:", anggotaKeluarga.value);
      });
  
      const showNotification = (message) => {
        notification.message = message;
        notification.show = true;
        setTimeout(() => {
          notification.show = false;
        }, 3000);
      };
  
      return {
        keluargaDetail,
        anggotaKeluarga,
        groupedByKepalaKeluarga,
        isModalVisible,
        selectedGroup,
        openDetailModal,
        kartuKeluarga,
        closeDetailModal,
        notification,
        jumlahKepalaKeluarga, // Include this in the return
        editAnggota,
        deleteAnggota,
        deleteKepalaKeluarga,
      };
    },
  };
  </script>
  
  <style scoped>
  .custom-bg-main {
    background-color: #f9fafb;
  }
  
  .custom-header {
    background-color: #adc4ce;
  }
  
  .table {
    border-spacing: 0 15px;
  }
  
  .table tr {
    border-radius: 20px;
  }
  
  .table tr:nth-child(n + 5) {
    border-radius: 0 0.625rem 0.625rem 0;
  }
  
  .table tr:nth-child(1) {
    border-radius: 0.625rem 0 0 0.625rem;
  }
  </style>
  