<template>
  <div>
    <AppHeader />
    <div class="flex overflow-hidden bg-white pt-16">
      <SidebarAdmin />
      <div
        id="main-content"
        class="h-full w-full custom-bg-main relative overflow-y-auto sm:ml-64"
      >
      <div class="custom-header to-gray-100 p-6 pb-32 pt-5">
        <main>
          <div class="pt-6 px-4 ml-5 mr-5">
            <h1 class="text-lg font-bold mb-4">Create Alamat</h1>
            <slot />
          </div>
        </main>
         <!-- Stepper Start -->
         <div class="mx-4 p-4 mb-5">
            <div class="flex items-center">
              <div class="flex items-center text-teal-600 relative">
                <div
                  class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2"
                  :class="currentStep === 1 ? 'bg-teal-600 text-white' : 'border-teal-600 text-teal-600'"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-bookmark "
                  >
                    <path
                      d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
                    ></path>
                  </svg>
                </div>
                <div
                  class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase"
                  :class="currentStep === 1 ? 'text-teal-600' : 'text-gray-500'"
                >
                  Buat Keluarga
                </div>
              </div>
              <div
                class="flex-auto border-t-2 transition duration-500 ease-in-out"
                :class="currentStep > 1 ? 'border-teal-600' : 'border-gray-300'"
              ></div>
              <div class="flex items-center relative">
                <div
                  class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2"
                  :class="currentStep === 2 ? 'bg-teal-600 text-white' : 'border-teal-600 text-teal-600'"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-user-plus "
                  >
                    <path
                      d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                    ></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                    <line x1="20" y1="8" x2="20" y2="14"></line>
                    <line x1="23" y1="11" x2="17" y2="11"></line>
                  </svg>
                </div>
                <div
                  class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase"
                  :class="currentStep === 2 ? 'text-teal-600' : 'text-gray-500'"
                >
                  Buat Kepala Keluarga
                </div>
              </div>
              <div
                class="flex-auto border-t-2 transition duration-500 ease-in-out"
                :class="currentStep > 2 ? 'border-teal-600' : 'border-gray-300'"
              ></div>
              <div class="flex items-center relative">
                <div
                  class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2"
                  :class="currentStep === 3 ? 'bg-teal-600 text-white' : 'border-gray-300 text-gray-500'"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-database "
                  >
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                  </svg>
                </div>
                <div
                  class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase"
                  :class="currentStep === 3 ? 'text-teal-600' : 'text-gray-500'"
                >
                  Buat Alamat
                </div>
              </div>
            </div>
          </div>
          <!-- Stepper End -->
        </div>
        <div class="min-h-screen flex -mt-20">
          <div class="w-full">
            <div
              class="card bg-white p-10 rounded-lg shadow-md md:w-3/5 mx-auto lg:w-1/3"
            >
              <h3 class="text-center text-2xl font-semibold">Alamat Data</h3>

              <form @submit.prevent="handleSubmit" class="max-w-sm mx-auto">
                <div class="mb-5">
                  <label
                    for="jorong_id"
                    class="block text-sm font-medium text-gray-700"
                    >Jorong ID</label
                  >
                  <select
                    id="jorong_id"
                    v-model="form.jorong_id"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option value="">Select Jorong</option>
                    <option
                      v-for="jorong in jorongList"
                      :key="jorong.id"
                      :value="jorong.id"
                    >
                      {{ jorong.name }}
                    </option>
                  </select>
                  <span v-if="errors.jorong_id" class="text-red-500">{{
                    errors.jorong_id[0]
                  }}</span>
                </div>

                <div class="mb-5">
                  <label
                    for="detail_alamat"
                    class="block text-sm font-medium text-gray-700"
                    >Detail Alamat</label
                  >
                  <input
                    id="detail_alamat"
                    type="text"
                    placeholder="Detail Alamat"
                    v-model="form.detail_alamat"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  <span v-if="errors.detail_alamat" class="text-red-500">{{
                    errors.detail_alamat[0]
                  }}</span>
                </div>

                <div class="mb-5">
                  <label
                    for="titik_koordinat"
                    class="block text-sm font-medium text-gray-700"
                    >Titik Koordinat</label
                  >
                  <input
                    id="titik_koordinat"
                    type="text"
                    placeholder="Titik Koordinat"
                    v-model="form.titik_koordinat"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  <span v-if="errors.titik_koordinat" class="text-red-500">{{
                    errors.titik_koordinat[0] }}</span>
                </div>

                <button
                  type="submit"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-1 mb-2"
                >
                  Add Alamat
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="notification.show"
      id="toast-success"
      class="fixed bottom-4 right-4 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow"
      role="alert"
    >
      <div
        class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg"
      >
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414Z"
          />
        </svg>
        <span class="sr-only">Check icon</span>
      </div>
      <div class="ml-3 text-sm font-normal">{{ notification.message }}</div>
      <button
        @click="notification.show = false"
        type="button"
        class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8"
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
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useAuthStore } from "@/stores/auth";

const auth = useAuthStore();
const router = useRouter();
const route = useRoute();

definePageMeta({
  middleware: ["auth", "role"],
  colorMode: "light",
});

const currentStep = ref(3); // Mengatur langkah ketiga sebagai default
const form = reactive({
  keluarga_id: route.query.keluarga_id || "",
  jorong_id: "",
  detail_alamat: "",
  titik_koordinat: "",
});

const errors = ref([]);

const notification = reactive({
  show: false,
  message: "",
});

const jorongList = ref([]);

const showNotification = (message) => {
  notification.message = message;
  notification.show = true;
  setTimeout(() => {
    notification.show = false;
  }, 3000);
};

const fetchJorong = async () => {
  try {
    const response = await fetch("http://laravel-api.test/api/jorongs");
    const data = await response.json();
    jorongList.value = data;
  } catch (error) {
    console.error("Error fetching jorong:", error);
  }
};

const handleSubmit = async () => {
  errors.value = {};
  const token = auth.getToken;
  try {
    const response = await fetch("http://laravel-api.test/api/alamats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(form),
    });

    const result = await response.json();
    if (response.ok) {
      showNotification("Alamat created successfully!");
      router.push("/admin/nagari/keluarga");
    } else {
      // handle errors
      errors.value = result.errors || {};
      throw new Error(result.message);
    }
  } catch (error) {
    showNotification(error.message);
  }
};


const previousStep = () => {
  currentStep.value--;
  router.push({
    path: "/admin/nagari/anggotaKeluarga/createKepalaKeluarga",
    query: { keluarga_id: form.keluarga_id, jumlah_kk: route.query.jumlah_kk }, // Kirim data yang diperlukan
  });
};

onMounted(fetchJorong);
</script>

<style scoped>
.custom-bg-main {
  background-color: #f9fafb;
}

.custom-header {
  background-color: #adc4ce;
}
</style>
