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
                <h2 class="text-xl font-bold text-gray-800">Kepala Keluarga</h2>
                <p class="text-gray-500">Tambah Kepala Keluarga</p>
              </div>
            </div>
          </main>
        </div>
        <form
          @submit.prevent="handleFormSubmit(currentFormIndex)"
          class="grid grid-cols-1 xl:grid-cols-1 gap-4 px-11 pt-6 dark:bg-gray-900 -mt-20"
        >
          <!-- Column 1: Jumlah KK and Alamat -->
          <div
            class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800"
          >
            <h3 class="mb-4 text-xl font-semibold dark:text-white">No KK</h3>
            <div>
              <label
                for="no_kk"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Nomor KK</label
              >
              <input
                id="no_kk"
                v-model="forms[currentFormIndex].no_kk"
                type="text"
                maxlength="16"
                @input="validateKk"
                placeholder="No KK (16 Digit)"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              <span
                v-if="
                  errors[currentFormIndex] && errors[currentFormIndex].no_kk
                "
                class="text-red-500"
              >
                {{ errors[currentFormIndex].no_kk[0] }}
              </span>
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
                    v-model="forms[currentFormIndex].nama"
                    type="text"
                    placeholder="Nama Kepala Keluarga"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  <span
                    v-if="
                      errors[currentFormIndex] && errors[currentFormIndex].nama
                    "
                    class="text-red-500"
                    >{{ errors[currentFormIndex].nama[0] }}</span
                  >
                </div>

                <div>
                  <label
                    for="nik"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >NIK</label
                  >
                  <input
                    id="nik"
                    v-model="forms[currentFormIndex].nik"
                    type="text"
                    maxlength="16"
                    @input="validateNik"
                    placeholder="NIK (16 Digit)"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  <span
                    v-if="
                      errors[currentFormIndex] && errors[currentFormIndex].nik
                    "
                    class="text-red-500"
                    >{{ errors[currentFormIndex].nik[0] }}</span
                  >
                </div>

                <div>
                  <label
                    for="tempat_lahir"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Tempat Lahir</label
                  >
                  <input
                    id="tempat_lahir"
                    v-model="forms[currentFormIndex].tempat_lahir"
                    type="text"
                    placeholder="Tempat Lahir"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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

                <div>
                  <label
                    for="tanggal_lahir"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Tanggal Lahir</label
                  >
                  <input
                    id="tanggal_lahir"
                    v-model="forms[currentFormIndex].tanggal_lahir"
                    type="date"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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

                <div>
                  <label
                    for="agama"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Agama</label
                  >
                  <select
                    id="agama"
                    v-model="forms[currentFormIndex].agama"
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
                    v-if="
                      errors[currentFormIndex] && errors[currentFormIndex].agama
                    "
                    class="text-red-500"
                    >{{ errors[currentFormIndex].agama[0] }}</span
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
                    v-model="forms[currentFormIndex].jenis_kelamin"
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
                    v-if="
                      errors[currentFormIndex] &&
                      errors[currentFormIndex].jenis_kelamin
                    "
                    class="text-red-500"
                    >{{ errors[currentFormIndex].jenis_kelamin[0] }}</span
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
                    v-model="forms[currentFormIndex].pendidikan"
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
                    v-if="
                      errors[currentFormIndex] &&
                      errors[currentFormIndex].pendidikan
                    "
                    class="text-red-500"
                    >{{ errors[currentFormIndex].pendidikan[0] }}</span
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
                    v-model="forms[currentFormIndex].pekerjaan"
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
                    v-if="
                      errors[currentFormIndex] &&
                      errors[currentFormIndex].pekerjaan
                    "
                    class="text-red-500"
                    >{{ errors[currentFormIndex].pekerjaan[0] }}</span
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
                    v-model="forms[currentFormIndex].nama_ayah"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  <span
                    v-if="
                      errors[currentFormIndex] &&
                      errors[currentFormIndex].nama_ayah
                    "
                    class="text-red-500"
                    >{{ errors[currentFormIndex].nama_ayah[0] }}</span
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
                    v-model="forms[currentFormIndex].nama_ibu"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  <span
                    v-if="
                      errors[currentFormIndex] &&
                      errors[currentFormIndex].nama_ibu
                    "
                    class="text-red-500"
                    >{{ errors[currentFormIndex].nama_ibu[0] }}</span
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
                    v-model="forms[currentFormIndex].status_perkawinan"
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
                    v-if="
                      errors[currentFormIndex] &&
                      errors[currentFormIndex].status_perkawinan
                    "
                    class="text-red-500"
                    >{{ errors[currentFormIndex].status_perkawinan[0] }}</span
                  >
                </div>
              </div>

              <div class="mt-6">
                <button
                  type="button"
                  @click="cancelCreate"
                  class="mr-2 bg-gray-500 text-white font-medium rounded-lg px-4 py-2 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  Batal
                </button>
                <button
                  v-if="currentFormIndex === forms.length - 1"
                  type="submit"
                  @click="submitAllData"
                  class="bg-blue-500 text-white font-medium rounded-lg px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </form>
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
    no_kk: "",
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

//validasi KK
//validasi KK
const validateKk = (e) => {
  let input = e.target.value;
  input = input.replace(/\D/g, ""); // Hanya angka yang diizinkan
  forms[currentFormIndex.value].no_kk = input;

  if (!input) {
    errors[currentFormIndex.value].no_kk = ["KK wajib diisi."];
  } else if (input.length < 16) {
    errors[currentFormIndex.value].no_kk = ["KK harus terdiri dari 16 digit"];
  } else {
    errors[currentFormIndex.value].no_kk = null; // Validasi berhasil
  }
};


// Validasi NIK
const validateNik = (e) => {
  let input = e.target.value;
  input = input.replace(/\D/g, ""); // Hanya angka yang diizinkan
  forms[currentFormIndex.value].nik = input;

  if (!input) {
    errors[currentFormIndex.value].nik = ["NIK wajib diisi."];
  } else if (input.length < 16) {
    errors[currentFormIndex.value].nik = ["NIK harus terdiri dari 16 digit"];
  } else {
    errors[currentFormIndex.value].nik = null; // Validasi berhasil
  }
};

const cancelCreate = () => {
  router.push({
    path: "/admin/nagari/keluarga/keluargaDetail",
    query: { id: forms[0].keluarga_id },
  });
};

const submitAllData = async () => {
  isLoading.value = true;

  try {
    if (!forms[0].no_kk || forms[0].no_kk.length < 16) {
      errors[0].no_kk = !forms[0].no_kk
        ? ["KK wajib diisi."]
        : ["KK harus terdiri dari 16 digit"];
      isLoading.value = false;
      return;
    }

    console.log("Submitting data:", forms[0]);

    // // Periksa apakah NIK sudah ada
    // if (await checkNIKExists(forms[0].nik)) {
    //   showNotification(`NIK ${forms[0].nik} sudah ada`);
    //   errors[0].nik = ["NIK sudah ada"];
    //   return;
    // }

       // Periksa apakah NIK sudah ada
       if (!forms[0].nik || forms[0].nik.length < 16) {
      errors[0].nik = !forms[0].nik
        ? ["NIK wajib diisi."]
        : ["NIK harus terdiri dari 16 digit"];
      isLoading.value = false;
      return; // Hentikan proses jika NIK tidak valid
    }

    const token = auth.getToken;

    // Buat Kepala Keluarga (tabel anggota_keluargas)
    const response = await fetch(
      "http://laravel-api.test/api/anggota_keluargas",
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
        throw new Error(data.message || "Gagal menambahkan Kepala Keluarga");
      }
    } else {
      const kepalaKeluargaId = data.id; // Dapatkan ID Kepala Keluarga yang baru dibuat
      console.log("Kepala Keluarga ID:", kepalaKeluargaId);

      // Perbarui kolom kepala_keluarga_id di tabel keluargas
      await fetch(
        `http://laravel-api.test/api/keluargas/${forms[0].keluarga_id}`,
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

      // Simpan no_kk ke tabel kartu_keluarga
      const responseKK = await fetch(
        "http://laravel-api.test/api/kartu_keluargas",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            no_kk: forms[0].no_kk,
            keluarga_id: forms[0].keluarga_id,
            kepala_keluarga_id: kepalaKeluargaId,
          }),
        }
      );

      const dataKK = await responseKK.json();
      if (!responseKK.ok) {
        if (dataKK.errors) {
          errors[0] = dataKK.errors;
        } else {
          throw new Error(dataKK.message || "Gagal menambahkan No KK");
        }
      } else {
        console.log("Kartu Keluarga berhasil dibuat dengan ID:", dataKK.id);
        showNotification(
          "Kepala Keluarga dan Kartu Keluarga berhasil ditambahkan!"
        );

        setTimeout(() => {
          router.push({
            path: "/admin/nagari/keluarga/keluargaDetail",
            query: { id: forms[0].keluarga_id },
          });
        }, 1500);
      }
    }
  } catch (error) {
    console.error("Request failed:", error);
    showNotification(
      "Terjadi kesalahan saat menyimpan data, silakan coba lagi."
    );
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
.custom-bg-main {
  background-color: #f9fafb;
}

.custom-header {
  background-color: #adc4ce;
}
</style>
