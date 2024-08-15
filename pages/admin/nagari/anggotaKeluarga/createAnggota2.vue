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
            <h2 class="text-lg font-bold text-gray-800 mb-4">
              Tambah Anggota Keluarga
            </h2>
          </div>
        </main>
        <div class="min-h-screen flex justify-center items-center">
          <div class="w-full max-w-lg bg-white rounded-lg shadow-md p-8">
            <form @submit.prevent="createAnggotaKeluarga">
              <!-- Nama -->
              <div class="mb-5">
                <label
                  for="nama"
                  class="block text-sm font-medium text-gray-700"
                >
                  Nama
                </label>
                <input
                  id="nama"
                  v-model="form.nama"
                  type="text"
                  class="bg-gray-50 border border-gray-300 mt-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                <span v-if="errors.nama" class="text-red-500">
                  {{ errors.nama[0] }}
                </span>
              </div>
              <!-- NIK -->
              <div class="mb-5">
                <label
                  for="nik"
                  class="block text-sm font-medium text-gray-700"
                >
                  NIK
                </label>
                <input
                  id="nik"
                  v-model="form.nik"
                  type="text"
                  class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2"
                />
                <span v-if="errors.nik" class="text-red-500">
                  {{ errors.nik[0] }}
                </span>
              </div>
              <!-- Tempat Lahir -->
              <div class="mb-5">
                <label
                  for="tempat_lahir"
                  class="block text-sm font-medium text-gray-700"
                >
                  Tempat Lahir
                </label>
                <input
                  id="tempat_lahir"
                  v-model="form.tempat_lahir"
                  type="text"
                  class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2"
                />
                <span v-if="errors.tempat_lahir" class="text-red-500">
                  {{ errors.tempat_lahir[0] }}
                </span>
              </div>
              <!-- Tanggal Lahir -->
              <div class="mb-5">
                <label
                  for="tanggal_lahir"
                  class="block text-sm font-medium text-gray-700"
                >
                  Tanggal Lahir
                </label>
                <input
                  id="tanggal_lahir"
                  v-model="form.tanggal_lahir"
                  type="date"
                  class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2"
                />
                <span v-if="errors.tanggal_lahir" class="text-red-500">
                  {{ errors.tanggal_lahir[0] }}
                </span>
              </div>
              <!-- Agama -->
              <div class="mb-5">
                <label
                  for="agama"
                  class="block text-sm font-medium text-gray-700"
                >
                  Agama
                </label>
                <select
                  id="agama"
                  v-model="form.agama"
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
                <span v-if="errors.agama" class="text-red-500">
                  {{ errors.agama[0] }}
                </span>
              </div>
              <!-- Jenis Kelamin -->
              <div class="mb-5">
                <label
                  for="jenis_kelamin"
                  class="block text-sm font-medium text-gray-700"
                >
                  Jenis Kelamin
                </label>
                <select
                  id="jenis_kelamin"
                  v-model="form.jenis_kelamin"
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
                <span v-if="errors.jenis_kelamin" class="text-red-500">
                  {{ errors.jenis_kelamin[0] }}
                </span>
              </div>
              <!-- Pendidikan -->
              <div class="mb-5">
                <label
                  for="pendidikan"
                  class="block text-sm font-medium text-gray-700"
                >
                  Pendidikan
                </label>
                <select
                  id="pendidikan"
                  v-model="form.pendidikan"
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
                <span v-if="errors.pendidikan" class="text-red-500">
                  {{ errors.pendidikan[0] }}
                </span>
              </div>
              <!-- Pekerjaan -->
              <div class="mb-5">
                <label
                  for="pekerjaan"
                  class="block text-sm font-medium text-gray-700"
                >
                  Pekerjaan
                </label>
                <select
                  id="pekerjaan"
                  v-model="form.pekerjaan"
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
                <span v-if="errors.pekerjaan" class="text-red-500">
                  {{ errors.pekerjaan[0] }}
                </span>
              </div>
              <!-- Status Perkawinan -->
              <div class="mb-5">
                <label
                  for="status_perkawinan"
                  class="block text-sm font-medium text-gray-700"
                >
                  Status Perkawinan
                </label>
                <select
                  id="status_perkawinan"
                  v-model="form.status_perkawinan"
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
                <span v-if="errors.status_perkawinan" class="text-red-500">
                  {{ errors.status_perkawinan[0] }}
                </span>
              </div>
              <!-- Hubungan Keluarga -->
              <div class="mb-5">
                <label
                  for="hubungan_keluarga"
                  class="block text-sm font-medium text-gray-700"
                >
                  Hubungan Keluarga
                </label>
                <select
                  id="hubungan_keluarga"
                  v-model="form.hubungan_keluarga"
                  class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2"
                >
                  <option disabled value="">Pilih Hubungan Keluarga</option>
                  <option
                    v-for="hubungan in hubunganKeluargaOptions"
                    :key="hubungan"
                    :value="hubungan"
                  >
                    {{ hubungan }}
                  </option>
                </select>
                <span v-if="errors.hubungan_keluarga" class="text-red-500">
                  {{ errors.hubungan_keluarga[0] }}
                </span>
              </div>

              <div class="flex justify-end">
                <button
                  type="button"
                  @click="cancelCreate"
                  class="mr-2 bg-gray-500 text-white font-medium rounded-lg px-4 py-2 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  class="bg-blue-500 text-white font-medium rounded-lg px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import AppHeader from "~/components/AppHeader.vue";
import SidebarAdmin from "~/components/SidebarAdmin.vue";
import { useRouter } from "vue-router";

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
    const router = useRouter();
    const form = reactive({
      nama: "",
      nik: "",
      tempat_lahir: "",
      tanggal_lahir: "",
      agama: "",
      jenis_kelamin: "",
      pendidikan: "",
      pekerjaan: "",
      status_perkawinan: "",
      hubungan_keluarga: "",
      keluarga_id: router.currentRoute.value.query.keluarga_id,
      kepala_keluarga_id: router.currentRoute.value.query.kepala_keluarga_id, // Pastikan ini di-set
    });

    const errors = reactive({});
    const notification = reactive({
      show: false,
      message: "",
    });

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

    const hubunganKeluargaOptions = [
      "Istri",
      "Anak",
      "Orang Tua",
      "Menantu",
      "Mertua",
      "Cucu",
      "Famili Lain",
      "Lainnya",
    ];

    const showNotification = (message) => {
      notification.message = message;
      notification.show = true;
      setTimeout(() => {
        notification.show = false;
      }, 3000);
    };

    const createAnggotaKeluarga = async () => {
      try {
        const response = await fetch(
          "https://www.demo-ta.my.id/api/anggota_keluargas",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(form),
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          errors.value = errorData.errors || {};
          console.error("Validation Errors:", errorData.errors);
          showNotification(`Error: ${errorData.message}`);
          return;
        }

        const newAnggota = await response.json();
        showNotification("Anggota Keluarga berhasil ditambahkan!");
        cancelCreate(); // Kembali ke halaman sebelumnya
      } catch (error) {
        console.error("Gagal menambahkan anggota keluarga:", error);
        showNotification("Gagal menambahkan anggota keluarga");
      }
    };

    const cancelCreate = () => {
      router.push({
        path: "/admin/nagari/keluarga/keluargaDetail",
        query: { id: form.keluarga_id },
      });
    };

    return {
      form,
      errors,
      createAnggotaKeluarga,
      showNotification,
      cancelCreate,
      agamaOptions,
      jenisKelaminOptions,
      pendidikanOptions,
      pekerjaanOptions,
      statusPerkawinanOptions,
      hubunganKeluargaOptions,
    };
  },
};
</script>
