<!-- <template>
    <div>
      <h1 class="text-2xl font-bold mb-4">Daftar Warga</h1>
      <ul>
        <li v-for="warga in wargas" :key="warga.id" class="mb-2">
          <p class="font-semibold">{{ warga.name }}</p>
          <p>{{ warga.address }}</p>
          <p>{{ warga.phone }}</p>
          <img :src="qrCodeUrl(warga.qr_code)" alt="QR Code" class="mt-2"/>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const wargas = ref([]);
  
  onMounted(async () => {
    const response = await fetch('https://www.demo-ta.my.id/api/warga');
    const data = await response.json();
    wargas.value = data;
  });
  
  const qrCodeUrl = (path) => {
    return `https://www.demo-ta.my.id/storage/${path}`;
  };
  </script>
  
  <style scoped>
  /* Tambahkan gaya sesuai kebutuhan */
  </style>
   -->

   <template>
    <div>
      <!-- Kode lain di atas tetap sama -->
      <div class="relative overflow-x-auto ml-5 mr-5">
        <table class="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">No</th>
              <th scope="col" class="px-6 py-3">Alamat</th>
              <th scope="col" class="px-6 py-3">QR Code</th>
            </tr>
          </thead>
  
          <tbody>
            <tr
              v-for="rumah in rumahList"
              :key="rumah.id"
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {{ rumah.number }}
              </th>
              <td class="px-6 py-4">{{ rumah.alamat.detail_alamat }}</td>
              <td class="px-6 py-4">
                <img :src="rumah.qr_code_url" alt="QR Code" class="h-20 w-20">
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Kode lain di bawah tetap sama -->
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
      const rumahList = ref([]);
      const counter = ref(0);
  
      const fetchRumah = async () => {
        try {
          const response = await fetch("https://www.demo-ta.my.id/api/rumahs");
          const data = await response.json();
  
          if (Array.isArray(data)) {
            counter.value = 0;
            rumahList.value = data.map((rumah) => ({
              ...rumah,
              number: ++counter.value,
              qr_code_url: `https://www.demo-ta.my.id/storage/qrcodes/${rumah.qr_code_path}`,
            }));
          } else {
            console.error("Invalid data format", data);
          }
        } catch (error) {
          console.error("Error fetching rumah:", error);
        }
      };
  
      onMounted(fetchRumah);
  
      return {
        rumahList,
        counter,
      };
    },
  };
  </script>
  