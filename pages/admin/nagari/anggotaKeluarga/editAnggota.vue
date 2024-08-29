<template>
  <div>
    <AppHeader />
    <div class="flex overflow-hidden bg-white pt-16">
      <SidebarAdmin />
      <div
        id="main-content"
        class="h-full w-full bg-gray-50 relative overflow-y-auto sm:ml-64"
      >
        <div class="custom-header to-gray-100 p-6 pb-32 pt-5">
          <main>
            <div
              class="bg-white rounded-lg shadow-sm p-6 flex justify-between items-center relative overflow-x-auto ml-5 mr-5 mt-5 mb-5"
            >
              <div>
                <h2 class="text-xl font-bold text-gray-800">
                  Edit Anggota Keluarga
                </h2>
                <p class="text-gray-500">
                  Perbarui informasi anggota keluarga.
                </p>
              </div>
            </div>
          </main>
        </div>

        <form
          @submit.prevent="updateAnggota"
          class="grid grid-cols-1 xl:grid-cols-1 gap-4 px-11 pt-6 dark:bg-gray-900 -mt-20"
        >
          <!-- Column 1: Jumlah KK and Alamat -->

          <!-- Column 2: Buat Kepala Keluarga -->
          <div class="">
            <div
              class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800"
            >
              <h3 class="mb-4 text-xl font-semibold dark:text-white">
                Edit Anggota Keluarga
              </h3>
              <div class="grid grid-cols-2 gap-6">
                <div>
                  <label
                    for="nama"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Nama
                  </label>
                  <input
                    type="text"
                    id="nama"
                    v-model="form.nama"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  <span v-if="errors.nama" class="text-red-500">
                    {{ errors.nama[0] }}
                  </span>
                </div>

                <div>
                  <label
                    for="nik"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    NIK
                  </label>
                  <input
                    type="text"
                    id="nik"
                    maxlength="16"
                    @input="validateNik"
                    v-model="form.nik"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  <span v-if="errors.nik" class="text-red-500">
                    {{ errors.nik[0] }}
                  </span>
                </div>

                <div>
                  <label
                    for="tempat_lahir"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Tempat Lahir
                  </label>
                  <input
                    type="text"
                    id="tempat_lahir"
                    v-model="form.tempat_lahir"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  <span v-if="errors.tempat_lahir" class="text-red-500">
                    {{ errors.tempat_lahir[0] }}
                  </span>
                </div>

                <div>
                  <label
                    for="tanggal_lahir"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Tanggal Lahir
                  </label>
                  <input
                    type="date"
                    id="tanggal_lahir"
                    v-model="form.tanggal_lahir"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  <span v-if="errors.tanggal_lahir" class="text-red-500">
                    {{ errors.tanggal_lahir[0] }}
                  </span>
                </div>

                <div>
                  <label
                    for="agama"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Agama
                  </label>
                  <select
                    id="agama"
                    v-model="form.agama"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
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

                <div>
                  <label
                    for="jenis_kelamin"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Jenis Kelamin
                  </label>
                  <select
                    id="jenis_kelamin"
                    v-model="form.jenis_kelamin"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                  <span v-if="errors.jenis_kelamin" class="text-red-500">
                    {{ errors.jenis_kelamin[0] }}
                  </span>
                </div>

                <div>
                  <label
                    for="pendidikan"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Pendidikan
                  </label>
                  <select
                    id="pendidikan"
                    v-model="form.pendidikan"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
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

                <div>
                  <label
                    for="pekerjaan"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Pekerjaan
                  </label>
                  <select
                    id="pekerjaan"
                    v-model="form.pekerjaan"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
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
                    v-model="form.nama_ayah"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  <span
                    v-if="errors.nama_ayah"
                    class="text-red-500"
                    >{{ errors.nama_ayah[0] }}</span
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
                    v-model="form.nama_ibu"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  <span
                    v-if="errors.nama_ibu"
                    class="text-red-500"
                    >{{ errors.nama_ibu[0] }}</span
                  >
                </div>

                <div>
                  <label
                    for="status_perkawinan"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Status Perkawinan
                  </label>
                  <select
                    id="status_perkawinan"
                    v-model="form.status_perkawinan"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option
                      v-for="status_perkawinan in statusPerkawinanOptions"
                      :key="status_perkawinan"
                      :value="status_perkawinan"
                    >
                      {{ status_perkawinan }}
                    </option>
                  </select>
                  <span v-if="errors.status_perkawinan" class="text-red-500">
                    {{ errors.status_perkawinan[0] }}
                  </span>
                </div>

                <div>
                  <label
                    for="hubungan_keluarga"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Hubungan Keluarga
                  </label>
                  <select
                    id="hubungan_keluarga"
                    v-model="form.hubungan_keluarga"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option
                      v-for="hubungan_keluarga in hubunganKeluargaOptions"
                      :key="hubungan_keluarga"
                      :value="hubungan_keluarga"
                    >
                      {{ hubungan_keluarga }}
                    </option>
                  </select>
                  <span v-if="errors.hubungan_keluarga" class="text-red-500">
                    {{ errors.hubungan_keluarga[0] }}
                  </span>
                </div>
              </div>

              <div class="mt-6">
                <button
                  type="submit"
                  class="bg-blue-500 text-white font-medium rounded-lg px-4 py-2 hover:bg-blue-600"
                >
                  Simpan Perubahan
                </button>
                <button
                  type="button"
                  @click="cancelEdit"
                  class="ml-2 bg-gray-500 text-white font-medium rounded-lg px-4 py-2 hover:bg-gray-600"
                >
                  Batal
                </button>
              </div>
            </div>
          </div>
        </form>
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

      <!-- <div
        v-if="notification.show"
        class="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-lg"
      >
        {{ notification.message }}
      </div> -->
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
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
    const router = useRouter();
    const route = useRoute();
    const form = reactive({
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
      hubungan_keluarga: "",
      keluarga_id: "",
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

    const pendidikanOptions = [
      "TIDAK / BELUM SEKOLAH",
      "TAMAT SD / SEDERAJAT",
      "SLTA / SEDERAJAT",
      "SLTP / SEDERAJAT",
      "BELUM TAMAT SD / SEDERAJAT",
      "DIPLOMA IV / STRATA I",
      "DIPLOMA I / II",
      "AKADEMI / DIPLOMA III / S. MUDA",
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
      "Kepala Keluarga",
      "Istri",
      "Anak",
      "Orang Tua",
      "Menantu",
      "Mertua",
      "Cucu",
      "Famili Lain",
      "Lainnya",
    ];

    const originalNIK = ref("");

    const validateNik = () => {
      const input = form.nik.replace(/\D/g, ""); // Menghapus semua karakter non-numeric
      if (input.length < 16) {
        errors.nik = ["NIK harus terdiri dari 16 digit"];
      } else {
        errors.nik = null; // Tidak ada error jika panjang tepat 16 digit
      }

      // Update the form data with validated input
      form.nik = input;
    };

    const fetchAnggotaDetails = async () => {
      const anggotaId = route.query.id;
      try {
        const response = await fetch(
          `http://laravel-api.test/api/anggota_keluargas/${anggotaId}`
        );
        const data = await response.json();

        // Populate form with fetched data, including keluarga_id
        Object.keys(form).forEach((key) => {
          form[key] = data[key];
        });

        // Assign keluarga_id from fetched data
        originalNIK.value = data.nik;
        form.keluarga_id = data.keluarga_id; // Pastikan keluarga_id diambil dari respons API
      } catch (error) {
        console.error("Failed to fetch anggota details:", error);
      }
    };

    const updateAnggota = async () => {
      const anggotaId = route.query.id;

      try {
        const response = await fetch(
          `http://laravel-api.test/api/anggota_keluargas/${anggotaId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(form),
          }
        );

        if (!response.ok) {
          const errorData = await response.json();

          Object.keys(errorData.errors).forEach((key) => {
            errors[key] = errorData.errors[key];
          });
          // Handle any other errors
          notification.message =
            errorData.message || "Gagal memperbarui anggota";
         
          return;
        }

        notification.message = "Anggota berhasil diperbarui";
        notification.show = true;
        setTimeout(() => {
          router.push({
            path: "/admin/nagari/keluarga/keluargaDetail",
            query: { id: form.keluarga_id },
          });
        }, 1500);
      } catch (error) {
        console.error("Error updating anggota:", error);
        notification.message = "Terjadi kesalahan saat memperbarui anggota";
        notification.show = true;
      }
    };

    const showNotification = (message) => {
      notification.message = message;
      notification.show = true;
      setTimeout(() => {
        notification.show = false;
      }, 3000);
    };

    const cancelEdit = () => {
      router.push({
        path: "/admin/nagari/keluarga/keluargaDetail",
        query: { id: form.keluarga_id },
      });
    };

    onMounted(fetchAnggotaDetails);

    return {
      form,
      notification,
      updateAnggota,
      cancelEdit,
      errors,
      agamaOptions,
      showNotification,
      pendidikanOptions,
      pekerjaanOptions,
      statusPerkawinanOptions,
      hubunganKeluargaOptions,
      validateNik,
    };
  },
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
