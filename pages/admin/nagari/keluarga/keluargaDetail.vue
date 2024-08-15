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
                    Anggota Keluarga -
                    {{ group.kepalaKeluarga.nama }}
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
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.707-7.293a1 1 0 111.414-1.414l3-3a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
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
            style="min-height: 350px; max-height: 300px;"
          >
            <div class="flex items-center mb-4">
              <div class="">
                <h3 class="text-xl font-bold text-gray-900">Detail Keluarga</h3>
              </div>
            </div>
            <div class="mb-4">
              <h4 class="text-gray-800 font-semibold">Jumlah Kepala Keluarga</h4>
              <p class="text-sm text-gray-500">
                {{ jumlahKepalaKeluarga }}
              </p>
            </div>
            <div class="mb-4">
              <h4 class="text-gray-800 font-semibold">Alamat</h4>
              <p class="text-sm text-gray-500">
                {{ keluargaDetail.rumah?.alamat.detail_alamat }}
              </p>
            </div>
            <div class="mb-4">
              <h4 class="text-gray-800 font-semibold">QR Code Alamat</h4>
            </div>
          </div>
        </main>

        <!-- Modal for Detail Keluarga -->
      
  <!-- Modal for Detail Keluarga -->
  <div
    v-if="isModalVisible"
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
  >
    <div class="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-4xl">
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
              <th scope="col" class="px-4 py-3">Status Perkawinan</th>
              <th scope="col" class="px-4 py-3">Hubungan Keluarga</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="anggota in selectedGroup.anggota"
              :key="anggota.id"
              class="bg-white border-b hover:bg-gray-50"
            >
              <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">
                {{ anggota.nama }}
              </td>
              <td class="px-4 py-3">{{ anggota.nik }}</td>
              <td class="px-4 py-3">{{ anggota.tempat_lahir }}</td>
              <td class="px-4 py-3">{{ anggota.tanggal_lahir }}</td>
              <td class="px-4 py-3">{{ anggota.agama }}</td>
              <td class="px-4 py-3">{{ anggota.jenis_kelamin }}</td>
              <td class="px-4 py-3">{{ anggota.pendidikan }}</td>
              <td class="px-4 py-3">{{ anggota.pekerjaan }}</td>
              <td class="px-4 py-3">{{ anggota.status_perkawinan }}</td>
              <td class="px-4 py-3">{{ anggota.hubungan_keluarga }}</td>
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
  </div>
  </div>

  <div
    v-if="notification.show"
    class="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-lg"
  >
    {{ notification.message }}
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
    const keluargaDetail = ref({});
    const anggotaKeluarga = ref([]);
    const isModalVisible = ref(false);
    const selectedGroup = ref(null);
    const notification = reactive({ show: false, message: "" });

    // Fetch Keluarga Detail
    const fetchKeluargaDetail = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get("id");

      try {
        const response = await fetch(
          `https://demo-ta.my.id/api/keluargas/${id}`
        );
        const data = await response.json();
        keluargaDetail.value = data;
        await fetchAnggotaKeluarga(data.id);
      } catch (error) {
        console.error("Error fetching keluarga detail:", error);
      }
    };

    // Fetch Anggota Keluarga
    const fetchAnggotaKeluarga = async (keluargaId) => {
      try {
        const response = await fetch(
          `https://demo-ta.my.id/api/anggota_keluargas`
        );
        const data = await response.json();
        anggotaKeluarga.value = data.filter(
          (anggota) => anggota.keluarga_id === keluargaId
        );
        groupKepalaKeluarga(); // Panggil metode pengelompokan setelah data diambil
      } catch (error) {
        console.error("Error fetching anggota keluarga:", error);
        console.log("Data fetched:", anggotaKeluarga.value);
      }
    };

    // Metode untuk mengelompokkan anggota keluarga by kepala_keluarga_id
    const groupedByKepalaKeluarga = ref([]);

    const groupKepalaKeluarga = () => {
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
        });
      });

      groupedByKepalaKeluarga.value = groups;
      console.log("Grouped by Kepala Keluarga:", groupedByKepalaKeluarga.value);
    };

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

    onMounted(async () => {
      await fetchKeluargaDetail();
      console.log("Keluarga Detail:", keluargaDetail.value);
    });

    return {
      keluargaDetail,
      anggotaKeluarga,
      groupedByKepalaKeluarga,
      isModalVisible,
      selectedGroup,
      openDetailModal,
      closeDetailModal,
      notification,
      jumlahKepalaKeluarga,
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

