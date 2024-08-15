<template>
  <div>
    <AppHeader />
    <div class="flex overflow-hidden bg-white pt-16">
      <SidebarAdmin />
      <div
        id="main-content"
        class="h-full w-full bg-gray-50 relative overflow-y-auto sm:ml-64"
      >
        <main>
          <div class="pt-6 px-4 ml-5 mr-5">
            <h1 class="text-lg font-bold mb-4">Data Rumah</h1>
            <slot />
          </div>
        </main>

        <div class="relative overflow-x-auto ml-5 mr-5">
          <table
            class="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400"
          >
            <thead
              class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
              <tr>
                <th scope="col" class="px-6 py-3">No</th>
                <th scope="col" class="px-6 py-3">Alamat</th>
                <th scope="col" class="px-6 py-3">QR Code</th>
                <th scope="col" class="px-6 py-3 flex justify-center">Aksi</th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="rumah in rumahList"
                :key="rumah.id"
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {{ rumah.number }}
                </th>
                <td class="px-6 py-4">
                  {{ rumah.alamat.detail_alamat }}
                </td>
                <td class="px-6 py-4">
                  <img
                    v-if="rumah.qrCodeBase64"
                    :src="rumah.qrCodeBase64"
                    alt="QR Code"
                    class="w-16 h-16 cursor-pointer"
                    @click="viewQrCode(rumah.qrCodeBase64)"
                  />
                </td>

                <td class="flex justify-center items-center">
                  <button
                    @click="generateQrCode(rumah.id)"
                    class="text-white bg-blue-500 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5"
                  >
                    Generate QR Code
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Modal -->
        <div
          v-if="isModalVisible"
          class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
          <div class="bg-white rounded-lg shadow-lg p-4">
            <button @click="isModalVisible = false" class="text-right text-xl">
              &times;
            </button>
            <img :src="modalQrCode" alt="QR Code" class="w-full h-auto mt-2" />
            <a
              :href="downloadUrl"
              download="qrcode.png"
              class="mt-4 inline-block bg-blue-500 text-white font-medium rounded-lg px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Download QR Code
            </a>
          </div>
        </div>

        <div
          v-if="notification.show"
          id="toast-success"
          class="fixed bottom-4 right-4 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
          role="alert"
        >
          <div
            class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200"
          >
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
              />
            </svg>
            <span class="sr-only">Check icon</span>
          </div>
          <div class="ml-3 text-sm font-normal">{{ notification.message }}</div>
          <button
            @click="notification.show = false"
            type="button"
            class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            aria-label="Close"
          >
            <span class="sr-only">Close</span>
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
        <FooterAdmin />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
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
    const rumahList = ref([]);
    const counter = ref(0);
    const isModalVisible = ref(false);
    const modalQrCode = ref("");
    const downloadUrl = ref("");
    const notification = reactive({
      message: "",
      show: false,
    });

    const fetchRumah = async () => {
      try {
        const response = await fetch("https://demo-ta.my.id/api/rumahs");
        const data = await response.json();

        if (Array.isArray(data)) {
          counter.value = 0;
          rumahList.value = data.map((rumah) => ({
            ...rumah,
            number: ++counter.value,
            qrCodeBase64: rumah.qr_code
              ? `data:image/svg+xml;base64,${rumah.qr_code.code}`
              : null,
          }));
        } else {
          console.error("Invalid data format", data);
        }
      } catch (error) {
        console.error("Error fetching rumah:", error);
      }
    };

    const generateQrCode = async (rumahId) => {
      try {
        const response = await fetch(
          `https://demo-ta.my.id/api/generate-qr-code/${rumahId}`
        );
        const data = await response.json();

        if (data && data.qr_code_base64) {
          const rumahIndex = rumahList.value.findIndex(
            (rumah) => rumah.id === rumahId
          );
          if (rumahIndex !== -1) {
            rumahList.value[
              rumahIndex
            ].qrCodeBase64 = `data:image/svg+xml;base64,${data.qr_code_base64}`;
            showNotification("QR Code berhasil dihasilkan!");
          }
        } else {
          showNotification("Gagal menghasilkan QR Code.");
        }
      } catch (error) {
        console.error("Error generating QR code:", error);
        showNotification("Gagal menghasilkan QR Code.");
      }
    };

    const showNotification = (message) => {
      notification.message = message;
      notification.show = true;
      setTimeout(() => (notification.show = false), 3000);
    };


    const viewQrCode = (qrCode) => {
      if (qrCode && qrCode.startsWith("data:image/")) {
        // Menampilkan QR code di modal
        modalQrCode.value = qrCode;
        isModalVisible.value = true;

        // Konversi SVG ke PNG
        const svgImage = new Image();
        svgImage.src = qrCode;

        svgImage.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = svgImage.width;
          canvas.height = svgImage.height;

          const ctx = canvas.getContext("2d");
          ctx.drawImage(svgImage, 0, 0);

          // Menghasilkan URL PNG
          downloadUrl.value = canvas.toDataURL("image/png");
        };
      } else {
        console.error("Invalid QR Code Base64 data");
      }
    };

    onMounted(fetchRumah);

    return {
      rumahList,
      counter,
      notification,
      generateQrCode,
      isModalVisible,
      modalQrCode,
      viewQrCode,
      downloadUrl,
    };
  },
};
</script>
