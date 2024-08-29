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
              <h1 class="text-lg font-bold mb-4">Create Kepala Keluarga</h1>
            </div>
          </main>
          <!-- Stepper Start -->
          <div class="mx-4 p-4 mb-5">
            <div class="flex items-center">
              <div class="flex items-center text-teal-600 relative">
                <div
                  class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2"
                  :class="
                    currentStep === 1
                      ? 'bg-teal-600 text-white'
                      : 'border-teal-600 text-teal-600'
                  "
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
                    class="feather feather-bookmark"
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
                  :class="
                    currentStep === 2
                      ? 'bg-teal-600 text-white'
                      : 'border-gray-300 text-gray-500'
                  "
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
                    class="feather feather-user-plus"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
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
                  :class="
                    currentStep === 3
                      ? 'bg-teal-600 text-white'
                      : 'border-gray-300 text-gray-500'
                  "
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
                    class="feather feather-database"
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
              <h3 class="text-center text-2xl font-semibold">
                Form Data Kepala Keluarga {{ currentFormIndex + 1 }}
              </h3>
              <form
                @submit.prevent="handleFormSubmit(currentFormIndex)"
                class="max-w-sm mx-auto"
              >
                <!-- <div class="mb-5">
                  <label for="keluarga_id" class="block text-sm font-medium text-gray-700">Keluarga ID</label>
                  <input
                    id="keluarga_id"
                    type="text"
                    v-model="forms[currentFormIndex].keluarga_id"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    readonly
                  />
                  <span v-if="errors[currentFormIndex] && errors[currentFormIndex].keluarga_id" class="text-red-500">{{ errors[currentFormIndex].keluarga_id[0] }}</span>
                </div> -->
                <div class="mb-5">
                  <label
                    for="nama"
                    class="block text-sm font-medium text-gray-700"
                    >Nama</label
                  >
                  <input
                    id="nama"
                    v-model="forms[currentFormIndex].nama"
                    type="text"
                    class="bg-gray-50 border border-gray-300 mt-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  <span
                    v-if="
                      errors[currentFormIndex] && errors[currentFormIndex].nama
                    "
                    class="text-red-500"
                    >{{ errors[currentFormIndex].nama[0] }}</span
                  >
                </div>
                <div class="mb-5">
                  <label
                    for="nik"
                    class="block text-sm font-medium text-gray-700"
                    >NIK</label
                  >
                  <input
                    id="nik"
                    v-model="forms[currentFormIndex].nik"
                    type="text"
                    class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2"
                  />
                  <span
                    v-if="
                      errors[currentFormIndex] && errors[currentFormIndex].nik
                    "
                    class="text-red-500"
                    >{{ errors[currentFormIndex].nik[0] }}</span
                  >
                </div>
                <div class="mb-5">
                  <label
                    for="tempat_lahir"
                    class="block text-sm font-medium text-gray-700"
                    >Tempat Lahir</label
                  >
                  <input
                    id="tempat_lahir"
                    v-model="forms[currentFormIndex].tempat_lahir"
                    type="text"
                    class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2"
                  />
                  <span
                    v-if="
                      errors[currentFormIndex] &&
                      errors[currentFormIndex].tempat_lahir
                    "
                    class="text-red-500"
                    >{{ errors[currentFormIndex].tempat_lahir[0] }}</span
                  >
                </div>
                <div class="mb-5">
                  <label
                    for="tanggal_lahir"
                    class="block text-sm font-medium text-gray-700"
                    >Tanggal Lahir</label
                  >
                  <input
                    id="tanggal_lahir"
                    v-model="forms[currentFormIndex].tanggal_lahir"
                    type="date"
                    class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2"
                  />
                  <span
                    v-if="
                      errors[currentFormIndex] &&
                      errors[currentFormIndex].tanggal_lahir
                    "
                    class="text-red-500"
                    >{{ errors[currentFormIndex].tanggal_lahir[0] }}</span
                  >
                </div>
                <div class="mb-5">
                  <label
                    for="agama"
                    class="block text-sm font-medium text-gray-700"
                    >Agama</label
                  >
                  <select
                    id="agama"
                    v-model="forms[currentFormIndex].agama"
                    class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2"
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
                    v-if="
                      errors[currentFormIndex] && errors[currentFormIndex].agama
                    "
                    class="text-red-500"
                    >{{ errors[currentFormIndex].agama[0] }}</span
                  >
                </div>
                <div class="mb-5">
                  <label
                    for="jenis_kelamin"
                    class="block text-sm font-medium text-gray-700"
                    >Jenis Kelamin</label
                  >
                  <select
                    id="jenis_kelamin"
                    v-model="forms[currentFormIndex].jenis_kelamin"
                    class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2"
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
                    v-if="
                      errors[currentFormIndex] &&
                      errors[currentFormIndex].jenis_kelamin
                    "
                    class="text-red-500"
                    >{{ errors[currentFormIndex].jenis_kelamin[0] }}</span
                  >
                </div>
                <div class="mb-5">
                  <label
                    for="pendidikan"
                    class="block text-sm font-medium text-gray-700"
                    >Pendidikan</label
                  >
                  <select
                    id="pendidikan"
                    v-model="forms[currentFormIndex].pendidikan"
                    class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2"
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
                    v-if="
                      errors[currentFormIndex] &&
                      errors[currentFormIndex].pendidikan
                    "
                    class="text-red-500"
                    >{{ errors[currentFormIndex].pendidikan[0] }}</span
                  >
                </div>
                <div class="mb-5">
                  <label
                    for="pekerjaan"
                    class="block text-sm font-medium text-gray-700"
                    >Pekerjaan</label
                  >
                  <select
                    id="pekerjaan"
                    v-model="forms[currentFormIndex].pekerjaan"
                    class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2"
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
                    v-if="
                      errors[currentFormIndex] &&
                      errors[currentFormIndex].pekerjaan
                    "
                    class="text-red-500"
                    >{{ errors[currentFormIndex].pekerjaan[0] }}</span
                  >
                </div>
                <div class="mb-5">
                  <label
                    for="status_perkawinan"
                    class="block text-sm font-medium text-gray-700"
                    >Status Perkawinan</label
                  >
                  <select
                    id="status_perkawinan"
                    v-model="forms[currentFormIndex].status_perkawinan"
                    class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2"
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
                    v-if="
                      errors[currentFormIndex] &&
                      errors[currentFormIndex].status_perkawinan
                    "
                    class="text-red-500"
                    >{{ errors[currentFormIndex].status_perkawinan[0] }}</span
                  >
                </div>
                <div class="flex justify-between">
                  <button
                    v-if="currentFormIndex > 0"
                    type="button"
                    @click="previousForm"
                    class="text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                  >
                    Kembali
                  </button>
                  <button
                    v-if="currentFormIndex < forms.length - 1"
                    type="button"
                    @click="nextForm"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                  >
                    Selanjutnya
                  </button>
                  <button
                    v-if="currentFormIndex === forms.length - 1"
                    type="button"
                    @click="openConfirmationModal"
                    class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                  >
                    Konfirmasi
                  </button>
                </div>
              </form>
              <!-- Tambahkan di dalam <form> -->
              <div class="flex justify-between">
                <button
                  type="button"
                  @click="previousStep"
                  class="text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                >
                  Previous
                </button>
                <button
                  type="button"
                  @click="nextStep"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="showModal"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-xl font-semibold mb-4">
          Apakah Anda Yakin Untuk Melakukan Konfirmasi?
        </h2>
        <p class="mb-4">Pastikan Semua Data Benar</p>
        <div class="flex justify-end">
          <button
            @click="closeModal"
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
import { ref, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useAuthStore } from "@/stores/auth";
definePageMeta({
  middleware: ["auth", "role"],
  colorMode: "light",
});

const auth = useAuthStore();
const router = useRouter();
const route = useRoute();

const currentStep = ref(2); // Mengatur langkah kedua sebagai default
const jumlahKk = parseInt(route.query.jumlah_kk, 10) || 1;
const forms = reactive(
  Array.from({ length: jumlahKk }, () => ({
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
  }))
);

const errors = reactive(Array.from({ length: jumlahKk }, () => ({})));
const notification = reactive({
  message: "",
  show: false,
});
const isLoading = ref(false);
const currentFormIndex = ref(0);
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

const showNotification = (message) => {
  notification.message = message;
  notification.show = true;
  setTimeout(() => {
    notification.show = true;
  }, 3000);
};

const checkNIKExists = async (nik) => {
  const token = auth.getToken;

  try {
    const response = await fetch(
      `http://laravel-api.test/api/check-nik?nik=${nik}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const result = await response.json();

    return result.exists;
  } catch (error) {
    console.error("Request failed:", error);
    return false;
  }
};

const openConfirmationModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const submitAllData = async () => {
  isLoading.value = true;

  try {
    const token = auth.getToken;

    // Iterasi melalui setiap form dan buat Kepala Keluarga untuk setiap form
    for (let i = 0; i < forms.length; i++) {
      const response = await fetch(
        "http://laravel-api.test/api/anggota_keluargas",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(forms[i]),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        if (data.errors) {
          errors[i] = data.errors; // Menyimpan pesan error dari server untuk form ke-i
          showNotification(
            "Terdapat kesalahan, harap periksa kembali data Anda."
          );
        } else {
          throw new Error(data.message || "Gagal menambahkan Kepala Keluarga");
        }
        return; // Hentikan proses jika ada error
      }

      // Jika berhasil, lanjutkan ke langkah berikutnya untuk setiap kepala keluarga
      const kepalaKeluargaId = data.id;

      // Perbarui kolom kepala_keluarga_id di tabel keluargas
      await fetch(
        `http://laravel-api.test/api/keluargas/${forms[i].keluarga_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ kepala_keluarga: kepalaKeluargaId }),
        }
      );

      // Perbarui atau buat entri di tabel anggota_keluargas untuk kepala keluarga
      await fetch(
        `http://laravel-api.test/api/anggota_keluargas/${kepalaKeluargaId}`,
        {
          method: "PUT", // Atau POST jika perlu dibuat baru
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ kepala_keluarga_id: kepalaKeluargaId }),
        }
      );
    }

    showNotification("Semua Kepala Keluarga berhasil ditambahkan!");
    currentStep.value = 3;
    setTimeout(() => {
      router.push({
        path: "/admin/nagari/alamat/create",
        query: { keluarga_id: forms[0].keluarga_id },
      });
    }, 1500);
  } catch (error) {
    console.error("Request failed:", error);
  } finally {
    isLoading.value = false;
  }
};

const nextForm = () => {
  if (currentFormIndex.value < forms.length - 1) {
    currentFormIndex.value++;
  }
};

const previousForm = () => {
  if (currentFormIndex.value > 0) {
    currentFormIndex.value--;
  }
};

const previousStep = () => {
  if (currentFormIndex.value > 0) {
    currentFormIndex.value--;
  } else {
    currentStep.value--;
    router.push({
      path: "/admin/nagari/keluarga/create", // Path ke langkah sebelumnya
    });
  }
};

onMounted(() => {
  if (!forms[0].keluarga_id) {
    showNotification("Keluarga ID tidak tersedia");
    router.push("/admin/nagari/keluarga");
  }
});
</script>

<style scoped>
.custom-bg-main {
  background-color: #f9fafb;
}

.custom-header {
  background-color: #adc4ce;
}
/* CSS untuk Stepper */
.stepper-container .stepper-item {
  position: relative;
}

.stepper-container .stepper-item .step-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
  border-radius: 50%;
}

.stepper-container .stepper-item .step-title {
  margin-top: 8px;
  text-align: center;
}

.stepper-container .stepper-item.active .step-icon {
  background-color: #38b2ac;
  color: white;
}

.stepper-container .stepper-item.active + .step-line {
  background-color: #38b2ac;
}
</style>