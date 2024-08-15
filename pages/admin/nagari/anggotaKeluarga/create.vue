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
            <h1 class="text-lg font-bold mb-4">Create Kepala Keluarga</h1>
          </div>
        </main>
        <div class="min-h-screen flex">
          <div class="w-full">
            <div
              class="card bg-white p-10 rounded-lg shadow-md md:w-3/5 mx-auto lg:w-1/3"
            >
              <h3 class="text-center text-2xl font-semibold">
                Form Data Kepala Keluarga
              </h3>
              <form @submit.prevent="handleFormSubmit" class="max-w-sm mx-auto">
                <div class="mb-5">
                  <label for="keluarga_id" class="block text-sm font-medium text-gray-700">Keluarga ID</label>
                  <input
                    id="keluarga_id"
                    type="text"
                    v-model="form.keluarga_id"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    readonly
                  />
                  <span v-if="errors.keluarga_id" class="text-red-500">{{ errors.keluarga_id[0] }}</span>
                </div>
                <div class="mb-5">
                  <label for="nama" class="block text-sm font-medium text-gray-700">Nama</label>
                  <input
                    id="nama"
                    v-model="form.nama"
                    type="text"
                    class="bg-gray-50 border border-gray-300 mt-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  <span v-if="errors.nama" class="text-red-500">{{ errors.nama[0] }}</span>
                </div>
                <div class="mb-5">
                  <label for="nik" class="block text-sm font-medium text-gray-700">NIK</label>
                  <input
                    id="nik"
                    v-model="form.nik"
                    type="text"
                    class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2"
                  />
                  <span v-if="errors.nik" class="text-red-500">{{ errors.nik[0] }}</span>
                </div>
                <div class="mb-5">
                  <label for="tempat_lahir" class="block text-sm font-medium text-gray-700">Tempat Lahir</label>
                  <input
                    id="tempat_lahir"
                    v-model="form.tempat_lahir"
                    type="text"
                    class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2"
                  />
                  <span v-if="errors.tempat_lahir" class="text-red-500">{{ errors.tempat_lahir[0] }}</span>
                </div>
                <div class="mb-5">
                  <label for="tanggal_lahir" class="block text-sm font-medium text-gray-700">Tanggal Lahir</label>
                  <input
                    id="tanggal_lahir"
                    v-model="form.tanggal_lahir"
                    type="date"
                    class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2"
                  />
                  <span v-if="errors.tanggal_lahir" class="text-red-500">{{ errors.tanggal_lahir[0] }}</span>
                </div>
                <div class="mb-5">
                  <label for="agama" class="block text-sm font-medium text-gray-700">Agama</label>
                  <select
                    id="agama"
                    v-model="form.agama"
                    class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2"
                  >
                    <option disabled value="">Pilih Agama</option>
                    <option v-for="agama in agamaOptions" :key="agama" :value="agama">{{ agama }}</option>
                  </select>
                  <span v-if="errors.agama" class="text-red-500">{{ errors.agama[0] }}</span>
                </div>
                <div class="mb-5">
                  <label for="jenis_kelamin" class="block text-sm font-medium text-gray-700">Jenis Kelamin</label>
                  <select
                    id="jenis_kelamin"
                    v-model="form.jenis_kelamin"
                    class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2"
                  >
                    <option disabled value="">Pilih Jenis Kelamin</option>
                    <option v-for="jenis in jenisKelaminOptions" :key="jenis" :value="jenis">{{ jenis }}</option>
                  </select>
                  <span v-if="errors.jenis_kelamin" class="text-red-500">{{ errors.jenis_kelamin[0] }}</span>
                </div>
                <div class="mb-5">
                  <label for="pendidikan" class="block text-sm font-medium text-gray-700">Pendidikan</label>
                  <select
                    id="pendidikan"
                    v-model="form.pendidikan"
                    class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2"
                  >
                    <option disabled value="">Pilih Pendidikan</option>
                    <option v-for="pendidikan in pendidikanOptions" :key="pendidikan" :value="pendidikan">{{ pendidikan }}</option>
                  </select>
                  <span v-if="errors.pendidikan" class="text-red-500">{{ errors.pendidikan[0] }}</span>
                </div>
                <div class="mb-5">
                  <label for="pekerjaan" class="block text-sm font-medium text-gray-700">Pekerjaan</label>
                  <select
                    id="pekerjaan"
                    v-model="form.pekerjaan"
                    class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2"
                  >
                    <option disabled value="">Pilih Pekerjaan</option>
                    <option v-for="pekerjaan in pekerjaanOptions" :key="pekerjaan" :value="pekerjaan">{{ pekerjaan }}</option>
                  </select>
                  <span v-if="errors.pekerjaan" class="text-red-500">{{ errors.pekerjaan[0] }}</span>
                </div>
                <div class="mb-5">
                  <label for="status_perkawinan" class="block text-sm font-medium text-gray-700">Status Perkawinan</label>
                  <select
                    id="status_perkawinan"
                    v-model="form.status_perkawinan"
                    class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2"
                  >
                    <option disabled value="">Pilih Status Perkawinan</option>
                    <option v-for="status in statusPerkawinanOptions" :key="status" :value="status">{{ status }}</option>
                  </select>
                  <span v-if="errors.status_perkawinan" class="text-red-500">{{ errors.status_perkawinan[0] }}</span>
                </div>
                <div class="mb-5">
                  <label for="hubungan_keluarga" class="block text-sm font-medium text-gray-700">Hubungan Keluarga</label>
                  <input
                    id="hubungan_keluarga"
                    v-model="form.hubungan_keluarga"
                    type="text"
                    class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2"
                    readonly
                  />
                </div>
                <div class="flex justify-end">
                  <button
                    type="submit"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                  >
                    Add Kepala Keluarga
                  </button>
                </div>
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
    <div
      v-if="showModal"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-xl font-semibold mb-4">
          Apakah Anda Yakin Untuk Melakukan Konfirmasi?
        </h2>
        <p class="mb-4">Pastikan Semua Data Benar</p>
        <div class="flex justify-end">
          <button
            @click="showModal = false"
            class="text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          >
            Batal
          </button>
          <button
            @click="submitAllData"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
          >
            Konfirmasi
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useAuthStore } from "@/stores/auth";

definePageMeta({
  middleware: ["auth", "role"],
  colorMode: "light",
});

const auth = useAuthStore();
const router = useRouter();
const route = useRoute();

const form = reactive({
  keluarga_id: route.query.keluarga_id || "",
  nama: "",
  nik: "",
  tempat_lahir: "",
  tanggal_lahir: "",
  agama: "",
  jenis_kelamin: "",
  pendidikan: "",
  pekerjaan: "",
  status_perkawinan: "",
  hubungan_keluarga: "Kepala Keluarga",
});

const errors = ref([]);
const isLoading = ref(false);
const notification = reactive({
  message: "",
  show: false,
});
const showModal = ref(false);

const agamaOptions = [
  "Islam",
  "Kristen",
  "Katolik",
  "Hindu",
  "Buddha",
  "Khonghucu",
];
const jenisKelaminOptions = ["Laki-laki", "Perempuan"];
const pendidikanOptions = [
  "TIDAK / BELUM SEKOLAH",
  "TAMAT SD / SEDERAJAT",
  "SLTA / SEDERAJAT",
  "SLTP/SEDERAJAT",
  "BELUM TAMAT SD/SEDERAJAT",
  "DIPLOMA IV/ STRATA I",
  "DIPLOMA I / II",
  "AKADEMI/ DIPLOMA III/S. MUDA",
  "STRATA II",
  "STRATA III",
];
const pekerjaanOptions = [
  "Belum Ditentukan",
  "Belum/Tidak Bekerja",
  "Pelajar/Mahasiswa",
  "Mengurus Rumah Tangga",
  "Buruh Harian Lepas",
  "Buruh Peternakan",
  "Buruh Tani/Perkebunan",
  "Guru",
  "Tentara Nasional Indonesia (TNI)",
  "Kepolisian RI (POLRI)",
  "Karyawan BUMD",
  "Karyawan BUMN",
  "Karyawan Honorer",
  "Karyawan Swasta",
  "Mekanik",
  "Pedagang",
  "Pegawai Negeri Sipil (PNS)",
  "Pensiunan",
  "Perancang Busana",
  "Perawat",
  "Perdagangan",
  "Petani/Pekebun",
  "Peternak",
  "Sopir",
  "Tabib",
  "Transportasi",
  "Tukang Batu",
  "Tukang Cukur",
  "Tukang Jahit",
  "Tukang Kayu",
  "Tukang Las/Pandai Besi",
  "Wiraswasta",
];
const statusPerkawinanOptions = [
  "Belum Kawin",
  "Kawin",
  "Cerai Hidup",
  "Cerai Mati",
];

const showErrors = (errorData) => {
  for (const key in errorData.errors) {
    if (errorData.errors.hasOwnProperty(key)) {
      errors.value[key] = errorData.errors[key];
    }
  }
};

const showNotification = (message) => {
  notification.message = message;
  notification.show = true;
  setTimeout(() => {
    notification.show = false;
  }, 3000);
};

const checkNIKExists = async (nik) => {
  const token = auth.getToken;

  try {
    const response = await fetch(`https://www.demo-ta.my.id/api/check-nik?nik=${nik}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await response.json();

    return result.exists;
  } catch (error) {
    console.error("Request failed:", error);
    return false;
  }
};

const handleFormSubmit = async () => {
  if (await checkNIKExists(form.nik)) {
    showNotification("NIK sudah ada");
    errors.value.nik = ["NIK sudah ada"];
    return;
  }

  const token = auth.getToken;
  isLoading.value = true;
  errors.value = {};

  try {
    const response = await fetch("https://www.demo-ta.my.id/api/anggota_keluargas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();
    if (!response.ok) {
      if (data.errors) {
        showErrors(data); // Tampilkan pesan kesalahan
      } else {
        throw new Error(data.message || "Gagal menambahkan Kepala Keluarga");
      }
    } else {
      await fetch(`https://www.demo-ta.my.id/api/keluargas/${form.keluarga_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ kepala_keluarga: data.id }),
      });

      showNotification("Kepala Keluarga berhasil ditambahkan!");

      // Clear form data after successful submission
      Object.keys(form).forEach((key) => {
        if (key !== "keluarga_id") form[key] = "";
      });

      setTimeout(() => {
        router.push("/admin/nagari/keluarga");
      }, 1500);
    }
  } catch (error) {
    console.error("Request failed:", error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  if (!form.keluarga_id) {
    showNotification("Keluarga ID tidak tersedia");
    router.push("/admin/nagari/keluarga");
  }
});
</script>

<style scoped>
/* Tambahkan gaya CSS khusus di sini */
</style>
