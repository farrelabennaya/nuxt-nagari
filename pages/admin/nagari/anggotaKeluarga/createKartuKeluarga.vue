<template>
    <div>
      <AppHeader />
      <div class="flex overflow-hidden bg-white pt-16">
        <SidebarAdmin />
        <div
          id="main-content"
          class="h-full w-full bg-gray-50 relative overflow-y-auto sm:ml-64"
        >
          <main class="p-6">
            <div class="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
              <h2 class="text-2xl font-semibold text-gray-800 mb-6">
                Tambah Kartu Keluarga
              </h2>
              <form @submit.prevent="handleSubmit">
                <div class="mb-4">
                  <label for="nama" class="block text-sm font-medium text-gray-700">Nama Kepala Keluarga</label>
                  <input
                    v-model="form.nama"
                    type="text"
                    id="nama"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    required
                  />
                </div>
                <div class="mb-4">
                  <label for="nik" class="block text-sm font-medium text-gray-700">NIK</label>
                  <input
                    v-model="form.nik"
                    type="text"
                    id="nik"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    required
                  />
                </div>
                <div class="mb-4">
                  <label for="jumlah_kk" class="block text-sm font-medium text-gray-700">Jumlah KK</label>
                  <input
                    v-model="form.jumlah_kk"
                    type="number"
                    id="jumlah_kk"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    required
                  />
                </div>
                <div class="mb-4">
                  <label for="tempat_lahir" class="block text-sm font-medium text-gray-700">Tempat Lahir</label>
                  <input
                    v-model="form.tempat_lahir"
                    type="text"
                    id="tempat_lahir"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div class="mb-4">
                  <label for="tanggal_lahir" class="block text-sm font-medium text-gray-700">Tanggal Lahir</label>
                  <input
                    v-model="form.tanggal_lahir"
                    type="date"
                    id="tanggal_lahir"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div class="flex justify-end">
                  <button
                    type="submit"
                    class="bg-green-500 text-white font-medium rounded-lg px-4 py-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                  >
                    Tambah
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import AppHeader from "~/components/AppHeader.vue";
  import SidebarAdmin from "~/components/SidebarAdmin.vue";
  
  export default {
    components: {
      AppHeader,
      SidebarAdmin,
    },
    setup() {
      const form = ref({
        nama: "",
        nik: "",
        jumlah_kk: 1,
        tempat_lahir: "",
        tanggal_lahir: "",
      });
  
      const handleSubmit = async () => {
        const urlParams = new URLSearchParams(window.location.search);
        const rumah_id = urlParams.get("rumah_id");
  
        try {
          const response = await fetch("https://www.demo-ta.my.id/api/keluargas", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              rumah_id,
              nama: form.value.nama,
              nik: form.value.nik,
              jumlah_kk: form.value.jumlah_kk,
              tempat_lahir: form.value.tempat_lahir,
              tanggal_lahir: form.value.tanggal_lahir,
            }),
          });
  
          if (response.ok) {
            window.location.href = `/admin/nagari/keluarga/keluargaDetail?id=${rumah_id}`;
          } else {
            console.error("Error creating Kartu Keluarga");
          }
        } catch (error) {
          console.error("Error creating Kartu Keluarga:", error);
        }
      };
  
      return {
        form,
        handleSubmit,
      };
    },
  };
  </script>
  