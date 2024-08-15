<template>
  <div>
    <AppHeader />
    <div class="flex overflow-hidden bg-white pt-16">
      <SidebarAdmin />
      <div id="main-content"  class="min-h-screen h-full w-full custom-bg-main relative overflow-y-auto sm:ml-64">
        <main>
          <div class="pt-6 px-4 ml-5 mr-5">
            <h1 class="text-lg font-bold mb-4">Create Keluarga</h1>
          </div>
        </main>
        <div class="min-h-screen flex">
          <div class="w-full">
            <div class="card bg-white p-10 rounded-lg shadow-md md:w-3/5 mx-auto lg:w-1/3">
              <h3 class="text-center text-2xl font-semibold">Keluarga Data</h3>
              <form @submit.prevent="handleSubmit" class="max-w-sm mx-auto">
                <div class="mb-5">
                  <FormLabel for="jumlah_kk">Jumlah KK</FormLabel>
                  <FormTextInput
                    id="jumlah_kk"
                    type="number"
                    placeholder="Jumlah KK"
                    v-model="form.jumlah_kk"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  <span v-if="errors.jumlah_kk" class="text-red-500">{{ errors.jumlah_kk[0] }}</span>
                </div>
                <button
                  type="submit"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-1 mb-2"
                >
                  Add Keluarga
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
import { ref, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useAuthStore } from "@/stores/auth";

const auth = useAuthStore();
const router = useRouter();

definePageMeta({
  middleware: ["auth", "role"],
  colorMode: "light",
});

const form = reactive({
  jumlah_kk: "",
});

const errors = ref([]);
const notification = reactive({
  show: false,
  message: "",
});

const showNotification = (message) => {
  notification.message = message;
  notification.show = true;
  setTimeout(() => {
    notification.show = false;
  }, 3000);
};

const handleSubmit = async () => {
  errors.value = {};
  const token = auth.getToken;

  try {
    const response = await fetch("https://www.demo-ta.my.id/api/keluargas", {
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
      throw new Error("Error creating Keluarga: " + errorData.message);
    }

    const result = await response.json();
    showNotification("Keluarga created successfully!");
    setTimeout(() => {
      router.push({
        path: "/admin/nagari/anggotaKeluarga/createKepalaKeluarga",
        query: { keluarga_id: result.id, jumlah_kk: form.jumlah_kk },
      });
    }, 1500);
  } catch (error) {
    console.error("Request failed:", error);
    showNotification(error.message);
  }
};
</script>
<style scoped>
.custom-bg-main {
  background-color: #f9fafb;
}

.custom-header {
  background-color: #adc4ce;
}
</style>