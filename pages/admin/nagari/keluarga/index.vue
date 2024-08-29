<template>
  <div>
    <AppHeader />
    <div class="flex overflow-hidden bg-white pt-16">
      <div
        v-if="notification.show"
        id="toast-success"
        class="fixed bottom-4 right-4 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
        role="alert"
      >
        <div
          class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200"
        >
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
            />
          </svg>
          <span class="sr-only">Check icon</span>
        </div>
        <div class="ml-3 text-sm font-normal">{{ notification.message }}</div>
        <button
          @click="notification.show = false"
          type="button"
          class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
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
                <p class="text-gray-500">Kelola Keluarga</p>
              </div>
              <NuxtLink to="/admin/nagari/keluarga/createKeluarga">
                <button
                  class="bg-green-500 text-white font-medium rounded-lg px-4 py-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                >
                  + Tambah Keluarga
                </button>
              </NuxtLink>
            </div>
            <!-- <div class="pt-6 px-4 ml-5 mr-5">
            <h1 class="text-lg font-bold mb-4">Data Keluarga</h1>
            <tr>
              <td>
                <NuxtLink to="/admin/nagari/keluarga/create">
                  <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Add Keluarga +
                  </button></NuxtLink
                >
              </td>
            </tr>
            <slot />
          </div> -->
          </main>

          <!-- Statistic Cards -->

          <div
            class="grid grid-cols-1 md:grid-cols-2 gap-6 relative overflow-x-auto ml-5 mr-5"
          >
            <div
              class="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5"
            >
              <div class="flex flex-row items-center">
                <div class="flex-shrink pr-4">
                  <div class="rounded-full p-5 bg-green-600">
                    <i class="fas fa-users fa-2x fa-inverse"></i>
                  </div>
                </div>
                <div class="flex-1 text-right md:text-center">
                  <h2 class="font-bold uppercase text-gray-600">
                    Total Rumah (Keluarga)
                  </h2>
                  <p class="font-bold text-3xl">
                    {{ keluargaStats.totalKeluarga }}
                  </p>
                </div>
              </div>
            </div>
            <div
              class="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5"
            >
              <div class="flex flex-row items-center">
                <div class="flex-shrink pr-4">
                  <div class="rounded-full p-5 bg-pink-600">
                    <i class="fa-solid fa-2x fa-user fa-inverse"></i>
                  </div>
                </div>
                <div class="flex-1 text-right md:text-center">
                  <h2 class="font-bold uppercase text-gray-600">
                    Total Kartu Keluarga
                  </h2>
                  <p class="font-bold text-3xl">
                    {{ keluargaStats.totalKepalaKeluarga }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-2 p-6 lg:grid-cols-2 gap-6 -mt-32 relative overflow-x-auto ml-5 mr-5"
        >
          <div>
            <h2 class="text-xl font-bold text-gray-800"></h2>
          </div>

          <!-- Form Search aligned to the right -->
          <form class="flex ml-auto" @submit.prevent>
            <div class="flex">
              <div
                id="dropdown"
                class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              ></div>
              <div class="relative w-80">
                <input
                  type="search"
                  id="search-dropdown"
                  v-model="searchQuery"
                  class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                  placeholder="Cari Nama Kepala Keluarga..."
                  required
                />
                <button
                  type="submit"
                  class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span class="sr-only">Search</span>
                </button>
              </div>
            </div>
          </form>

          <template v-if="paginatedKeluargaList.length > 0">
            <div
              v-for="keluarga in paginatedKeluargaList"
              :key="keluarga.id"
              class="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between"
            >
              <!-- Header with keluarga title and family icon -->
              <div class="mb-4">
                <div class="flex items-center space-x-4">
                  <div class="bg-white p-2 rounded-full">
                    <svg
                      class="w-8 h-8 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <h2 class="text-2xl font-bold">
                    Keluarga {{ keluarga.nama_keluarga }}
                  </h2>
                </div>
                <p class="mt-1 text-sm">
                  Jumlah Kartu Keluarga: {{ keluarga.jumlahKepalaKeluarga }}
                </p>
              </div>

              <!-- Detail keluarga -->
              <div class="mb-4">
                <p class="text-lg font-semibold">
                  Kepala Keluarga:
                  <template v-if="keluarga.kepala_keluarga.length > 0">
                    <span
                      v-for="(kepala, index) in keluarga.kepala_keluarga"
                      :key="kepala.id"
                    >
                      {{ kepala.nama
                      }}<span v-if="index < keluarga.kepala_keluarga.length - 1"
                        >,
                      </span>
                    </span>
                  </template>
                  <template v-else> Tidak ada kepala keluarga </template>
                </p>
                <p class="text-sm mt-2">
                  Alamat: {{ keluarga.rumah.alamat.detail_alamat }}
                </p>
              </div>

              <!-- Action buttons -->
              <div class="flex space-x-2 mt-auto">
                <button
                  @click="openEditModal(keluarga)"
                  class="flex items-center justify-center p-2 bg-yellow-400 text-yellow-900 rounded-lg hover:bg-yellow-500 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                  <span class="ml-2">Edit</span>
                </button>

                <button
                  @click="confirmDeleteKeluarga(keluarga.id)"
                  class="flex items-center justify-center p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                    />
                  </svg>
                  <span class="ml-2">Delete</span>
                </button>

                <button
                  @click="viewDetail(keluarga.id)"
                  class="flex items-center justify-center p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12h.01M12 12h.01M9 12h.01M4 4h16M4 20h16"
                    />
                  </svg>
                  <span class="ml-2">View</span>
                </button>
              </div>
            </div>
          </template>

          <template v-else>
            <div
              class="col-span-full w-full bg-white border border-gray-200 rounded-lg shadow-md p-6 text-center text-gray-500"
            >
              <p class="text-gray-500">Belum ada keluarga yang terdaftar.</p>
            </div>
          </template>
        </div>

        <!-- Pagination Component -->
        <div class="flex flex-col lg:flex-row ml-10 mr-10 justify-between mt-4">
          <div class="flex flex-col lg:flex-row items-center space-x-2 text-xs">
            <button
              class="py-2 px-4 bg-white text-gray-600 font-medium rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center"
            >
              {{ itemsPerPage }} items
            </button>
            <p class="text-gray-500 mt-4 lg:mt-0">
              Showing {{ (currentPage - 1) * itemsPerPage + 1 }} to
              {{
                Math.min(
                  currentPage * itemsPerPage,
                  filteredKeluargaList.length
                )
              }}
              of {{ filteredKeluargaList.length }} entries
            </p>
          </div>

          <!-- Navigation for Pagination -->
          <nav
            aria-label="Pagination"
            class="flex justify-center items-center text-gray-600 mt-8 lg:mt-0"
          >
            <a
              href="#"
              @click.prevent="changePage(currentPage - 1)"
              :class="{ 'pointer-events-none opacity-50': currentPage === 1 }"
              class="p-2 mr-4 rounded hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </a>
            <span
              v-for="page in totalPages"
              :key="page"
              @click.prevent="changePage(page)"
              class="px-4 py-2 rounded cursor-pointer hover:bg-gray-100"
              :class="{
                'bg-gray-200 font-medium text-gray-900': page === currentPage,
              }"
            >
              {{ page }}
            </span>

            <a
              href="#"
              @click.prevent="changePage(currentPage + 1)"
              :class="{
                'pointer-events-none opacity-50': currentPage === totalPages,
              }"
              class="p-2 ml-4 rounded hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </nav>
        </div>

        <!-- Edit Modal -->
        <!-- Edit Modal -->
        <div
          v-if="isEditModalOpen"
          class="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-75"
        >
          <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
            <h3 class="text-xl font-semibold mb-4">Edit Keluarga</h3>
            <form @submit.prevent="editKeluarga">
              <div class="mb-4">
                <label
                  for="edit-rumah"
                  class="block text-sm font-medium text-gray-700"
                  >Rumah</label
                >
                <div class="relative">
                  <input
                    type="text"
                    v-model="editRumahSearch"
                    placeholder="Search Rumah..."
                    @focus="showEditRumahDropdown = true"
                    @blur="hideDropdown('edit_rumah')"
                    class="border mt-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  <ul
                    v-if="showEditRumahDropdown && filteredEditRumahList.length"
                    class="absolute z-10 bg-white border border-gray-300 rounded-lg w-full mt-1 overflow-auto max-h-48"
                  >
                    <li
                      v-for="rumah in filteredEditRumahList"
                      :key="rumah.id"
                      @mousedown.prevent="selectEditRumah(rumah)"
                      class="px-4 py-2 cursor-pointer hover:bg-gray-200"
                    >
                      {{ rumah.alamat.detail_alamat }}
                    </li>
                  </ul>
                </div>
                <span v-if="errors.rumah_id" class="text-red-500">{{
                  errors.rumah_id[0]
                }}</span>
              </div>
              <div class="mb-4">
                <label
                  for="edit-no_kk"
                  class="block text-sm font-medium text-gray-700"
                  >Jumlah KK</label
                >
                <input
                  id="edit-no_kk"
                  v-model="editForm.no_kk"
                  type="number"
                  class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2"
                />
                <span v-if="errors.no_kk" class="text-red-500">{{
                  errors.no_kk[0]
                }}</span>
              </div>
              <div class="mb-4">
                <label
                  for="edit-kepala_keluarga"
                  class="block text-sm font-medium text-gray-700"
                  >Kepala Keluarga</label
                >
                <div class="relative">
                  <input
                    type="text"
                    v-model="editKepalaKeluargaSearch"
                    placeholder="Search Kepala Keluarga..."
                    @focus="showEditKepalaKeluargaDropdown = true"
                    @blur="hideDropdown('edit_kepala_keluarga')"
                    class="border mt-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  <ul
                    v-if="showEditKepalaKeluargaDropdown"
                    class="absolute z-10 bg-white border border-gray-300 rounded-lg w-full mt-1 overflow-auto max-h-48"
                  >
                    <li
                      v-if="filteredEditAnggotaKeluargaList.length === 0"
                      class="px-4 py-2 text-red-500"
                    >
                      Kepala Keluarga Tidak Tersedia
                    </li>
                    <li
                      v-for="anggota in filteredEditAnggotaKeluargaList"
                      :key="anggota.id"
                      @mousedown.prevent="selectEditKepalaKeluarga(anggota)"
                      class="px-4 py-2 cursor-pointer hover:bg-gray-200"
                    >
                      {{ anggota.nama }}
                    </li>
                  </ul>
                </div>
                <span v-if="errors.kepala_keluarga" class="text-red-500">{{
                  errors.kepala_keluarga[0]
                }}</span>
              </div>
              <div class="flex justify-start mb-4 space-x-2">
                <button
                  type="submit"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-1 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  :disabled="isLoading"
                >
                  <span v-if="isLoading">Saving...</span>
                  <span v-else>Save</span>
                </button>
                <button
                  type="button"
                  @click="isEditModalOpen = false"
                  class="text-black bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>

        <!-- Delete Modal -->
        <div
          v-if="isDeleteModalOpen"
          class="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-75"
        >
          <div
            class="w-full max-w-md bg-white shadow-lg rounded-lg p-6 relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-3 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500 float-right"
              viewBox="0 0 320.591 320.591"
              @click="isDeleteModalOpen = false"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              ></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              ></path>
            </svg>
            <div class="my-8 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-14 fill-red-500 inline"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                  data-original="#000000"
                />
                <path
                  d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                  data-original="#000000"
                />
              </svg>
              <h4 class="text-gray-800 text-lg font-semibold mt-4">
                Hapus Data Keluarga
              </h4>
              <p class="text-sm text-gray-600 mt-4">
                Apakah anda yakin menghapus data keluarga ini? Data yang dihapus
                akan hilang.
              </p>
            </div>
            <div class="flex flex-col space-y-2">
              <button
                type="button"
                @click="deleteKeluarga"
                class="px-4 py-2 rounded-lg text-white text-sm tracking-wide bg-red-500 hover:bg-red-600 active:bg-red-500"
              >
                Delete
              </button>
              <button
                type="button"
                @click="isDeleteModalOpen = false"
                class="px-4 py-2 rounded-lg text-gray-800 text-sm tracking-wide bg-gray-200 hover:bg-gray-300 active:bg-gray-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
        <!-- <FooterAdmin /> -->
      </div>
    </div>
  </div>
</template>
<script>
import { ref, reactive, computed, onMounted } from "vue";
import AppHeader from "~/components/AppHeader.vue";
import SidebarAdmin from "~/components/SidebarAdmin.vue";
import { useTokenStore } from "@/stores/token";

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
    const keluargaList = ref([]);
    const rumahList = ref([]);
    const searchQuery = ref("");
    const anggotaKeluargaList = ref([]);
    const usedKepalaKeluarga = ref([]);
    const currentPage = ref(1); // Current page number
    const itemsPerPage = ref(10); // Number of items per page
    const keluargaStats = ref({
      totalKeluarga: 0,
      totalKepalaKeluarga: 0,
      totalKK: 0,
    });
    const counter = ref(0);
    const isEditModalOpen = ref(false);
    const isDeleteModalOpen = ref(false);
    const editForm = reactive({
      id: "",
      rumah_id: "",
      no_kk: "",
      kepala_keluarga: "",
    });
    const errors = ref([]);
    const isLoading = ref(false);
    const notification = reactive({
      message: "",
      show: false,
    });

    // Perhitungan jumlah halaman
    const totalPages = computed(() => {
      return Math.ceil(filteredKeluargaList.value.length / itemsPerPage.value);
    });

    // Method untuk mengubah halaman
    const changePage = (page) => {
      if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
      }
    };

    // Paginated list
    const paginatedKeluargaList = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return filteredKeluargaList.value.slice(start, end);
    });

    const viewDetail = (id) => {
      router.push({
        path: `/admin/nagari/keluarga/keluargaDetail`,
        query: { id },
      });
    };
    const tokenStore = useTokenStore();

    const rumahSearch = ref("");
    const kepalaKeluargaSearch = ref("");
    const editRumahSearch = ref("");
    const editKepalaKeluargaSearch = ref("");

    const showRumahDropdown = ref(false);
    const showKepalaKeluargaDropdown = ref(false);
    const showEditRumahDropdown = ref(false);
    const showEditKepalaKeluargaDropdown = ref(false);

    const filteredRumahList = computed(() => {
      return rumahList.value.filter((rumah) =>
        rumah.alamat.detail_alamat
          .toLowerCase()
          .includes(rumahSearch.value.toLowerCase())
      );
    });

    const filteredAnggotaKeluargaList = computed(() => {
      return anggotaKeluargaList.value.filter(
        (anggota) =>
          anggota.nama
            .toLowerCase()
            .includes(kepalaKeluargaSearch.value.toLowerCase()) &&
          !usedKepalaKeluarga.value.includes(anggota.id)
      );
    });

    const filteredEditRumahList = computed(() => {
      return rumahList.value.filter((rumah) =>
        rumah.alamat.detail_alamat
          .toLowerCase()
          .includes(editRumahSearch.value.toLowerCase())
      );
    });

    const filteredEditAnggotaKeluargaList = computed(() => {
      return anggotaKeluargaList.value.filter(
        (anggota) =>
          anggota.nama
            .toLowerCase()
            .includes(editKepalaKeluargaSearch.value.toLowerCase()) &&
          !usedKepalaKeluarga.value.includes(anggota.id)
      );
    });

    const keluargaWithKepala = computed(() => {
      return keluargaList.value.map((keluarga) => {
        // Cari kepala keluarga yang sesuai di anggota keluarga
        const kepalaKeluarga = anggotaKeluargaList.value.filter(
          (anggota) =>
            anggota.keluarga_id === keluarga.id &&
            anggota.hubungan_keluarga === "Kepala Keluarga"
        );

        // Tambahkan properti 'jumlahKepalaKeluarga' untuk menghitung kepala keluarga
        return {
          ...keluarga,
          kepala_keluarga: kepalaKeluarga,
          jumlahKepalaKeluarga: kepalaKeluarga.length, // Hitung jumlah kepala keluarga
        };
      });
    });

    // Computed property to filter keluargaList based on the searchQuery
    const filteredKeluargaList = computed(() => {
      if (!searchQuery.value) {
        return keluargaWithKepala.value;
      }
      return keluargaWithKepala.value.filter((keluarga) => {
        // Periksa nama kepala keluarga
        const kepalaKeluargaMatch = keluarga.kepala_keluarga.some((kepala) =>
          kepala.nama.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
        // Periksa alamat rumah
        const alamatMatch = keluarga.rumah.alamat.detail_alamat
          .toLowerCase()
          .includes(searchQuery.value.toLowerCase());

        return kepalaKeluargaMatch || alamatMatch;
      });
    });

    const fetchKeluarga = async () => {
      try {
        const response = await fetch("http://laravel-api.test/api/keluargas");
        const data = await response.json();

        if (Array.isArray(data)) {
          counter.value = 0;
          keluargaList.value = data
            .filter(
              (keluarga) =>
                keluarga.rumah_id !== null && keluarga.kepala_keluarga !== null
            )
            .map((keluarga) => ({
              ...keluarga,
              number: ++counter.value,
            }));
          usedKepalaKeluarga.value = keluargaList.value.map(
            (keluarga) => keluarga.kepala_keluarga.id
          );
        } else {
          console.error("Invalid data format", data);
        }
      } catch (error) {
        console.error("Error fetching keluarga:", error);
      }
    };

    const fetchKeluargaStats = async () => {
      try {
        const response = await fetch(
          "http://laravel-api.test/api/keluarga/stats"
        );
        const data = await response.json();
        keluargaStats.value = data;
      } catch (error) {
        console.error("Error fetching keluarga stats:", error);
      }
    };

    const fetchRumah = async () => {
      try {
        const response = await fetch("http://laravel-api.test/api/rumahs");
        const data = await response.json();
        if (Array.isArray(data)) {
          rumahList.value = data;
        } else {
          console.error("Invalid data format", data);
        }
      } catch (error) {
        console.error("Error fetching rumah:", error);
      }
    };

    const fetchAnggotaKeluarga = async () => {
      try {
        const response = await fetch(
          "http://laravel-api.test/api/anggota_keluargas"
        );
        const data = await response.json();
        if (Array.isArray(data)) {
          anggotaKeluargaList.value = data;
        } else {
          console.error("Invalid data format", data);
        }
      } catch (error) {
        console.error("Error fetching anggota keluarga:", error);
      }
    };

    onMounted(() => {
      fetchKeluarga();
      fetchRumah();
      fetchAnggotaKeluarga();
      fetchKeluargaStats(); // Ambil data statistik
    });

    const openEditModal = (keluarga) => {
      editForm.id = keluarga.id;
      editForm.rumah_id = keluarga.rumah.id;
      editForm.no_kk = keluarga.no_kk;
      editForm.kepala_keluarga = keluarga.kepala_keluarga.id;
      isEditModalOpen.value = true;
    };

    const editKeluarga = async () => {
      const tokenStore = useTokenStore();
      errors.value = [];
      isLoading.value = true;
      try {
        const response = await fetch(
          `http://laravel-api.test/api/keluargas/${editForm.id}`,
          {
            method: "PUT",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${tokenStore.getToken}`,
            },
            body: JSON.stringify({
              rumah_id: editForm.rumah_id,
              no_kk: editForm.no_kk,
              kepala_keluarga: editForm.kepala_keluarga,
            }),
          }
        );

        const data = await response.json();
        if (!response.ok) {
          if (data.errors) {
            errors.value = data.errors;
          } else {
            throw new Error(data.message || "Gagal mengedit keluarga");
          }
        } else {
          const index = keluargaList.value.findIndex(
            (keluarga) => keluarga.id === editForm.id
          );
          if (index !== -1) {
            keluargaList.value[index] = {
              ...data,
              number: keluargaList.value[index].number,
            };
          }
          isEditModalOpen.value = false;
          showNotification("Keluarga berhasil diedit!");
          await fetchKeluarga();
        }
      } catch (error) {
        console.error("Kesalahan mengedit keluarga:", error);
      } finally {
        isLoading.value = false;
      }
    };

    const confirmDeleteKeluarga = (id) => {
      editForm.id = id;
      isDeleteModalOpen.value = true;
    };
    const deleteKeluarga = async () => {
      isLoading.value = true;
      try {
        const response = await fetch(
          `http://laravel-api.test/api/keluargas/${editForm.id}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${tokenStore.getToken}`,
            },
          }
        );

        if (!response.ok) {
          const contentType = response.headers.get("content-type");
          if (contentType && contentType.includes("application/json")) {
            const data = await response.json();
            throw new Error(data.message || "Gagal menghapus keluarga");
          } else {
            const text = await response.text();
            console.error("Unexpected response format", text);
            throw new Error("Unexpected response format");
          }
        }

        keluargaList.value = keluargaList.value.filter(
          (keluarga) => keluarga.id !== editForm.id
        );
        showNotification("Keluarga berhasil dihapus!");
        isDeleteModalOpen.value = false; // Pastikan modal tertutup
      } catch (error) {
        console.error("Kesalahan menghapus keluarga:", error);
        showNotification("Gagal menghapus keluarga!");
      } finally {
        isLoading.value = false;
      }
    };

    const selectRumah = (rumah) => {
      editForm.rumah_id = rumah.id;
      rumahSearch.value = rumah.alamat.detail_alamat;
      showRumahDropdown.value = false;
    };

    const selectKepalaKeluarga = (anggota) => {
      if (usedKepalaKeluarga.value.includes(anggota.id)) {
        showNotification("Kepala keluarga sudah terpilih");
        return;
      }
      editForm.kepala_keluarga = anggota.id;
      kepalaKeluargaSearch.value = anggota.nama;
      showKepalaKeluargaDropdown.value = false;
    };

    const selectEditRumah = (rumah) => {
      editForm.rumah_id = rumah.id;
      editRumahSearch.value = rumah.alamat.detail_alamat;
      showEditRumahDropdown.value = false;
    };

    const selectEditKepalaKeluarga = (anggota) => {
      if (usedKepalaKeluarga.value.includes(anggota.id)) {
        showNotification("Kepala keluarga sudah terpilih");
        return;
      }
      editForm.kepala_keluarga = anggota.id;
      editKepalaKeluargaSearch.value = anggota.nama;
      showEditKepalaKeluargaDropdown.value = false;
    };

    const hideDropdown = (type) => {
      setTimeout(() => {
        if (type === "rumah") {
          showRumahDropdown.value = false;
        } else if (type === "kepala_keluarga") {
          showKepalaKeluargaDropdown.value = false;
        } else if (type === "edit_rumah") {
          showEditRumahDropdown.value = false;
        } else if (type === "edit_kepala_keluarga") {
          showEditKepalaKeluargaDropdown.value = false;
        }
      }, 200);
    };

    return {
      keluargaList,
      keluargaWithKepala,
      searchQuery, // Bind search query
      filteredKeluargaList, // Use this filtered list in the template
      rumahList,
      anggotaKeluargaList,
      usedKepalaKeluarga,
      keluargaStats,
      counter,
      isEditModalOpen,
      isDeleteModalOpen,
      editForm,
      errors,
      isLoading,
      notification,
      rumahSearch,
      kepalaKeluargaSearch,
      editRumahSearch,
      editKepalaKeluargaSearch,
      showRumahDropdown,
      showKepalaKeluargaDropdown,
      showEditRumahDropdown,
      showEditKepalaKeluargaDropdown,
      filteredRumahList,
      filteredAnggotaKeluargaList,
      filteredEditRumahList,
      filteredEditAnggotaKeluargaList,
      openEditModal,
      confirmDeleteKeluarga,
      editKeluarga,
      deleteKeluarga,
      selectRumah,
      selectKepalaKeluarga,
      selectEditRumah,
      selectEditKepalaKeluarga,
      hideDropdown,
      fetchKeluargaStats, // Tambahkan ini jika ingin digunakan di tempat lain
      viewDetail,
      currentPage,
      itemsPerPage,
      totalPages,
      changePage,
      paginatedKeluargaList,
    };
  },
};
</script>

<style scoped>
.custom-bg-main {
  background-color: #f9fafb;
}

.custom-header {
  background: linear-gradient(to right, #adc4ce, #e0ebf0);
}

container {
  max-width: 1200px;
}

.card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-5px);
}
</style>
