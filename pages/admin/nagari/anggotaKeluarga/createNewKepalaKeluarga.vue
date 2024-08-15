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
                <div class="mb-5 mt-5">
                  <label
                    for="nama"
                    class="block text-sm font-medium text-gray-700"
                    >Nama</label
                  >
                  <input
                    id="nama"
                    v-model="forms[currentFormIndex].nama"
                    type="text"
                    class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2"
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
            </div>
          </div>
        </div>
      </div>
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
    notification.show = false;
  }, 3000);
};

const checkNIKExists = async (nik) => {
  const token = auth.getToken;

  try {
    const response = await fetch(
      `https://demo-ta.my.id/api/check-nik?nik=${nik}`,
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
    console.log("Submitting data:", forms[0]);

    // Periksa apakah NIK sudah ada
    if (await checkNIKExists(forms[0].nik)) {
      showNotification(`NIK ${forms[0].nik} sudah ada`);
      errors[0].nik = ["NIK sudah ada"];
      return;
    }

    const token = auth.getToken;

    // Buat Kepala Keluarga (tabel anggota_keluargas)
    const response = await fetch(
      "https://demo-ta.my.id/api/anggota_keluargas",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(forms[0]),
      }
    );

    const data = await response.json();
    if (!response.ok) {
      if (data.errors) {
        errors[0] = data.errors;
      } else {
        throw new Error(data.message || `Gagal menambahkan Kepala Keluarga`);
      }
    } else {
      const kepalaKeluargaId = data.id; // Dapatkan ID Kepala Keluarga yang baru dibuat
      console.log("Kepala Keluarga ID:", kepalaKeluargaId);

      // Perbarui kolom `kepala_keluarga_id` di tabel `keluargas`
      await fetch(
        `https://demo-ta.my.id/api/keluargas/${forms[0].keluarga_id}`,
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

      // Perbarui atau buat entri di tabel `anggota_keluargas` untuk kepala keluarga
      await fetch(
        `https://demo-ta.my.id/api/anggota_keluargas/${kepalaKeluargaId}`,
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

    showNotification(
      "Kepala Keluarga dan Anggota Keluarga berhasil ditambahkan!"
    );
    setTimeout(() => {
      router.push({
        path: "/admin/nagari/keluarga/keluargaDetail",
        query: { id: forms[0].keluarga_id },
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

onMounted(() => {
  if (!forms[0].keluarga_id) {
    showNotification("Keluarga ID tidak tersedia");
    router.push("/admin/nagari/keluarga");
  }
});
</script>

<style scoped>
/* Tambahkan gaya CSS khusus di sini */
</style>
