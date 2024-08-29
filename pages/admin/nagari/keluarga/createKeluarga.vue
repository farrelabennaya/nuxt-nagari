<template>
  <div>
    <AppHeader />
    <div class="flex overflow-hidden bg-white pt-16">
      <SidebarAdmin />
      <div
        id="main-content"
        class="min-h-screen h-full w-full custom-bg-main relative overflow-y-auto sm:ml-64"
      >
        <div class="custom-header to-gray-100 p-6 pb-32 pt-5">
          <main>
            <div
              class="bg-white rounded-lg shadow-sm p-6 flex justify-between items-center relative overflow-x-auto ml-5 mr-5 mt-5 mb-5"
            >
              <div>
                <h2 class="text-xl font-bold text-gray-800">Keluarga</h2>
                <p class="text-gray-500">Buat Keluarga</p>
              </div>
            </div>
          </main>
        </div>

        <!-- Adjust the grid system to divide the layout into two columns -->
        <form
          @submit.prevent="handleSubmit"
          class="grid grid-cols-1 xl:grid-cols-2 gap-4 px-11 pt-6 dark:bg-gray-900 -mt-20"
        >
          <!-- Column 1: Jumlah KK and Alamat -->
          <div class="">
            <!-- Jumlah KK Section -->
            <div
              class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800"
            >
              <div class="flex items-center space-x-4">
                <svg
                  class="w-20 h-20 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                  />
                </svg>
                <div>
                  <h3
                    class="mb-1 text-xl font-bold text-gray-900 dark:text-white"
                  >
                    Kartu Keluarga
                  </h3>
                  <div class="mb-4 text-sm text-gray-500 dark:text-gray-400">
                    Nomor Kartu Keluarga
                  </div>
                  <input
                    id="no_kk"
                    type="text"
                    placeholder="No Kartu Keluarga"
                    maxlength="16"
                    @input="validateKk"
                    v-model="form.kartu_keluarga.no_kk"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />

                  <span v-if="errors['kartu_keluarga.no_kk']" class="text-red-500">
                    {{ errors["kartu_keluarga.no_kk"][0] }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Alamat Section -->
            <div
              class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800"
              style="min-height: 430px; max-height: 500px; overflow-y: auto"
            >
              <h3 class="mb-4 text-xl font-semibold dark:text-white">Alamat</h3>
              <div class="mb-4">
                <label
                  for="jorong_id"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Pilih Jorong</label
                >
                <select
                  id="jorong_id"
                  v-model="form.alamat.jorong_id"
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
                <span v-if="errors['alamat.jorong_id']" class="text-red-500">
                  {{ errors["alamat.jorong_id"][0] }}
                </span>
              </div>
              <div class="mb-4">
                <label
                  for="detail_alamat"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Detail Alamat</label
                >
                <input
                  id="detail_alamat"
                  type="text"
                  placeholder="Detail Alamat"
                  v-model="form.alamat.detail_alamat"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                <span
                  v-if="errors['alamat.detail_alamat']"
                  class="text-red-500"
                >
                  {{ errors["alamat.detail_alamat"][0] }}
                </span>
              </div>
              <div class="mb-6">
                <label
                  for="titik_koordinat"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Koordinat</label
                >
                <input
                  id="titik_koordinat"
                  type="text"
                  placeholder="Titik Koordinat"
                  v-model="form.alamat.titik_koordinat"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                <span
                  v-if="errors['alamat.titik_koordinat']"
                  class="text-red-500"
                >
                  {{ errors["alamat.titik_koordinat"][0] }}
                </span>
              </div>
            </div>
          </div>

          <!-- Column 2: Buat Kepala Keluarga -->
          <div class="">
            <div
              class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800"
            >
              <h3 class="mb-4 text-xl font-semibold dark:text-white">
                Buat Kepala Keluarga
              </h3>
              <div class="grid grid-cols-2 gap-6">
                <div>
                  <label
                    for="nama"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Nama</label
                  >
                  <input
                    id="nama"
                    type="text"
                    placeholder="Nama Kepala Keluarga"
                    v-model="form.kepala_keluarga.nama"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  <span
                    v-if="errors['kepala_keluarga.nama']"
                    class="text-red-500"
                  >
                    {{ errors["kepala_keluarga.nama"][0] }}
                  </span>
                </div>

                <div>
                  <label
                    for="nik"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >NIK</label
                  >
                  <input
                    id="nik"
                    type="text"
                    placeholder="NIK (16 Digit)"
                    maxlength="16"
                    @input="validateNik"
                    v-model="form.kepala_keluarga.nik"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />

                  <span
                    v-if="errors['kepala_keluarga.nik']"
                    class="text-red-500"
                  >
                    {{ errors["kepala_keluarga.nik"][0] }}
                  </span>
                </div>

                <div>
                  <label
                    for="tempat_lahir"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Tempat Lahir</label
                  >
                  <input
                    id="tempat_lahir"
                    type="text"
                    placeholder="Tempat Lahir"
                    v-model="form.kepala_keluarga.tempat_lahir"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  <span
                    v-if="errors['kepala_keluarga.tempat_lahir']"
                    class="text-red-500"
                    >{{ errors["kepala_keluarga.tempat_lahir"][0] }}</span
                  >
                </div>

                <div>
                  <label
                    for="tanggal_lahir"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Tanggal Lahir</label
                  >
                  <input
                    id="tanggal_lahir"
                    type="date"
                    v-model="form.kepala_keluarga.tanggal_lahir"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  <span
                    v-if="errors['kepala_keluarga.tanggal_lahir']"
                    class="text-red-500"
                    >{{ errors["kepala_keluarga.tanggal_lahir"][0] }}</span
                  >
                </div>

                <div>
                  <label
                    for="agama"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Agama</label
                  >
                  <select
                    id="agama"
                    v-model="form.kepala_keluarga.agama"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option disabled value="">Pilih Agama</option>
                    <option
                      v-for="agama in agamaOptions"
                      :key="agama"
                      :value="agama"
                    >
                      {{ agama }}
                    </option>
                  </select>
                  <span
                    v-if="errors['kepala_keluarga.agama']"
                    class="text-red-500"
                    >{{ errors["kepala_keluarga.agama"][0] }}</span
                  >
                </div>

                <div>
                  <label
                    for="jenis_kelamin"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Jenis Kelamin</label
                  >
                  <select
                    id="jenis_kelamin"
                    v-model="form.kepala_keluarga.jenis_kelamin"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option disabled value="">Pilih Jenis Kelamin</option>
                    <option
                      v-for="jenis in jenisKelaminOptions"
                      :key="jenis"
                      :value="jenis"
                    >
                      {{ jenis }}
                    </option>
                  </select>
                  <span
                    v-if="errors['kepala_keluarga.jenis_kelamin']"
                    class="text-red-500"
                    >{{ errors["kepala_keluarga.jenis_kelamin"][0] }}</span
                  >
                </div>

                <div>
                  <label
                    for="pendidikan"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Pendidikan</label
                  >
                  <select
                    id="pendidikan"
                    v-model="form.kepala_keluarga.pendidikan"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option disabled value="">Pilih Pendidikan</option>
                    <option
                      v-for="pendidikan in pendidikanOptions"
                      :key="pendidikan"
                      :value="pendidikan"
                    >
                      {{ pendidikan }}
                    </option>
                  </select>
                  <span
                    v-if="errors['kepala_keluarga.pendidikan']"
                    class="text-red-500"
                    >{{ errors["kepala_keluarga.pendidikan"][0] }}</span
                  >
                </div>

                <div>
                  <label
                    for="pekerjaan"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Pekerjaan</label
                  >
                  <select
                    id="pekerjaan"
                    v-model="form.kepala_keluarga.pekerjaan"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option disabled value="">Pilih Pekerjaan</option>
                    <option
                      v-for="pekerjaan in pekerjaanOptions"
                      :key="pekerjaan"
                      :value="pekerjaan"
                    >
                      {{ pekerjaan }}
                    </option>
                  </select>
                  <span
                    v-if="errors['kepala_keluarga.pekerjaan']"
                    class="text-red-500"
                    >{{ errors["kepala_keluarga.pekerjaan"][0] }}</span
                  >
                </div>

                <div>
                  <label
                    for="nama_ayah"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Nama Ayah</label
                  >
                  <input
                    id="nama_ayah"
                    type="text"
                    placeholder="Nama Ayah"
                    v-model="form.kepala_keluarga.nama_ayah"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  <span
                    v-if="errors['kepala_keluarga.nama_ayah']"
                    class="text-red-500"
                    >{{ errors["kepala_keluarga.nama_ayah"][0] }}</span
                  >
                </div>

                <div>
                  <label
                    for="nama_ibu"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Nama Ibu</label
                  >
                  <input
                    id="nama_ibu"
                    type="text"
                    placeholder="Nama Ibu"
                    v-model="form.kepala_keluarga.nama_ibu"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  <span
                    v-if="errors['kepala_keluarga.nama_ibu']"
                    class="text-red-500"
                    >{{ errors["kepala_keluarga.nama_ibu"][0] }}</span
                  >
                </div>

                <div>
                  <label
                    for="status_perkawinan"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Status Perkawinan</label
                  >
                  <select
                    id="status_perkawinan"
                    v-model="form.kepala_keluarga.status_perkawinan"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option disabled value="">Pilih Status Perkawinan</option>
                    <option
                      v-for="status in statusPerkawinanOptions"
                      :key="status"
                      :value="status"
                    >
                      {{ status }}
                    </option>
                  </select>
                  <span
                    v-if="errors['kepala_keluarga.status_perkawinan']"
                    class="text-red-500"
                    >{{ errors["kepala_keluarga.status_perkawinan"][0] }}</span
                  >
                </div>
              </div>
              <div class="mt-6">
                <button
                  class="bg-blue-500 text-white font-medium rounded-lg px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  type="submit"
                >
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </form>
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
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";

definePageMeta({
  middleware: ["auth", "role"],
  colorMode: "light",
});

const auth = useAuthStore();
const router = useRouter();

const form = reactive({
  kartu_keluarga: {
    no_kk: "",
  },
  kepala_keluarga: {
    nama: "",
    nik: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    agama: "",
    jenis_kelamin: "",
    pendidikan: "",
    pekerjaan: "",
    nama_ayah: "",
    nama_ibu: "",
    status_perkawinan: "",
    hubungan_keluarga: "Kepala Keluarga",
  },
  alamat: {
    jorong_id: "",
    detail_alamat: "",
    titik_koordinat: "",
  },
});

const errors = ref([]);
// Function to validate NIK input (only allow numbers, check length)
const validateNik = (e) => {
  let input = e.target.value;

  // Replace any non-numeric characters
  input = input.replace(/\D/g, "");

  // Update the form data
  form.kepala_keluarga.nik = input;

  // Check if NIK is less than 16 digits or exceeds 16 digits
  if (input.length < 16) {
    errors.value["kepala_keluarga.nik"] = ["NIK harus terdiri dari 16 digit"];
  } else if (input.length > 16) {
    errors.value["kepala_keluarga.nik"] = [
      "NIK tidak boleh lebih dari 16 digit",
    ];
  } else {
    errors.value["kepala_keluarga.nik"] = null; // No error
  }
};

const validateKk = (e) => {
  let input = e.target.value;

  // Replace any non-numeric characters
  input = input.replace(/\D/g, "");

  // Update the form data
  form.kartu_keluarga.no_kk = input;

  // Check if NIK is less than 16 digits or exceeds 16 digits
  if (input.length < 16) {
    errors.value["kartu_keluarga.no_kk"] = ["No KK harus terdiri dari 16 digit"];
  } else if (input.length > 16) {
    errors.value["kartu_keluarga.no_kk"] = ["No KK tidak boleh lebih dari 16 digit"];
  } else {
    errors.value["kartu_keluarga.no_kk"] = null; // No error
  }
};

const notification = reactive({
  show: false,
  message: "",
});

const jorongList = ref([]);

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

    // Validasi No KK
    if (form.kartu_keluarga.no_kk.length < 16) {
        errors.value["kartu_keluarga.no_kk"] = ["No KK harus terdiri dari 16 digit"];
    }

    // Validasi NIK
    if (form.kepala_keluarga.nik.length < 16) {
        errors.value["kepala_keluarga.nik"] = ["NIK harus terdiri dari 16 digit"];
    }

    // Jika terdapat error, hentikan proses pengiriman form
    if (Object.keys(errors.value).length > 0) {
        showNotification("Terdapat error pada form");
        return;
    }

    const token = auth.getToken;
    try {
        const response = await fetch("http://laravel-api.test/api/full-keluarga", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(form),
        });

        const result = await response.json();
        if (response.ok) {
            showNotification("Keluarga, Kepala Keluarga, dan Kartu Keluarga berhasil dibuat!");
            router.push("/admin/nagari/keluarga");
        } else {
            errors.value = result.errors || {};
            throw new Error(result.message);
        }
    } catch (error) {
        showNotification(error.message);
    }
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
