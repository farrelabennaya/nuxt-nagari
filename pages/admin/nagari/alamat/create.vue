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
            <h1 class="text-lg font-bold mb-4">Create Alamat</h1>
            <slot />
          </div>
        </main>
        <div class="min-h-screen flex">
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
    const response = await fetch("https://demo-ta.my.id/api/jorongs");
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
    const response = await fetch("https://demo-ta.my.id/api/alamats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(form),
    });

    if (!response.ok) {
      const errorData = await response.json();
      if (errorData.errors) {
        errors.value = errorData.errors;
      }
      throw new Error("Error creating Alamat: " + errorData.message);
    }

    const result = await response.json();
    showNotification("Alamat and Rumah created successfully!");
    setTimeout(() => {
      router.push("/admin/nagari/keluarga");
    }, 1500);
  } catch (error) {
    console.error("Request failed:", error);
    showNotification(error.message);
  }
};

onMounted(fetchJorong);
</script>

<style scoped>
/* Tambahkan gaya CSS khusus di sini */
</style>

