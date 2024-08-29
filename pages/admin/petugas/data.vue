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
        class="min-h-screen h-full w-full bg-gray-50 relative overflow-y-auto sm:ml-64"
      >
      <div class="custom-header to-gray-100 p-6 pb-32 pt-5">
        <main>
          <!-- <div class="pt-6 px-4 ml-5 mr-5">
            <h1 class="text-lg font-bold mb-4">Data Petugas</h1>
            <div></div>
            <slot />
          </div> -->
          <div
              class="bg-white rounded-lg shadow-sm p-6 flex justify-between items-center relative overflow-x-auto ml-5 mr-5 mt-5 mb-5"
            >
              <div>
                <h2 class="text-xl font-bold text-gray-800">Petugas</h2>
                <p class="text-gray-500">Kelola Petugas</p>
              </div>
              <!-- <NuxtLink to="/admin/user/create">
                <button
                  class="bg-green-500 text-white font-medium rounded-lg px-4 py-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                >
                  + Tambah User
                </button>
              </NuxtLink> -->
            </div>
        </main>
      </div>

        <div class="relative overflow-x-auto ml-5 mr-5 -mt-32 p-6 pb-32 pt-5">
           <div class="flex justify-between items-center mb-4">
            <h2></h2>

            <!-- Form Search -->
            <form class="flex max-w-lg" @submit.prevent>
              <div class="flex">
                <button
                  id="dropdown-button"
                  data-dropdown-toggle="dropdown"
                  class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                  type="button"
                >
                {{ selectedStatus }}
                  <svg
                    class="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="dropdown"
                  class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdown-button"
                  >
                    <li>
                      <button
                        @click="selectedStatus = 'All'"
                        type="button"
                        class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        All
                      </button>
                    </li>
                    <li>
                      <button
                        @click="selectedStatus = 'Aktif'"
                        type="button"
                        class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Aktif
                      </button>
                    </li>
                    <li>
                      <button
                        @click="selectedStatus = 'Tidak Aktif'"
                        type="button"
                        class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Tidak Aktif
                      </button>
                    </li>
                   
                  </ul>
                </div>
                <div class="relative w-full">
                  <input
                    type="search"
                    id="search-dropdown"
                    v-model="searchQuery"
                    class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                    placeholder="Cari Petugas..."
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
          </div>
          <table
            class="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400"
          >
            <thead
              class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
              <tr>
                <th scope="col" class="px-6 py-3">No</th>
                <th scope="col" class="px-6 py-3"> <button
                    @click="toggleSortOrder"
                    class="flex items-center space-x-1"
                  >
                    <span>NAMA</span>
                    <svg
                      v-if="sortOrder === 'asc'"
                      class="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                    <svg
                      v-if="sortOrder === 'desc'"
                      class="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button></th>
                <th scope="col" class="px-6 py-3">Keterangan</th>
                <th scope="col" class="px-6 py-3">Status</th>
                <th scope="col" class="px-6 py-3 flex justify-center">Aksi</th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="(petugas, index) in paginatedFilteredPetugas"
                :key="petugas.id"
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                {{ index + 1 }}
                </th>
                <td class="px-6 py-4">{{ petugas.name }}</td>
                <td class="px-6 py-4">{{ petugas.keterangan }}</td>
                <td class="px-6 py-4">
                  <span
                    v-if="!petugas.is_active"
                    class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400"
                  >
                    Tidak Aktif
                  </span>
                  <span
                    v-else
                    class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"
                  >
                    Aktif
                  </span>
                  <span
                    v-if="
                      petugas.expires_at &&
                      new Date(petugas.expires_at) < new Date()
                    "
                    class="text-red-500 text-xs font-medium"
                  >
                    Expired
                  </span>
                </td>
                <td class="flex justify-center items-center">
                  <button
                    @click="openEditModal(petugas)"
                    class="flex p-1.5 border border-yellow-500 me-2 mt-2 rounded-lg hover:rounded-xl mb-2 hover:bg-yellow-100 transition-all duration-300 text-yellow-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
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
                  </button>
                  <button
                    @click="openDetailModal(petugas)"
                    class="flex p-1.5 border border-blue-500 rounded-lg me-2 mb-2 mt-2 hover:rounded-xl hover:bg-blue-100 transition-all duration-300 text-blue-500"
                  >
                    <svg
                      class="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M10 3v4a1 1 0 0 1-1 1H5m8 7.5 2.5 2.5M19 4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Zm-5 9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- Pagination -->
           <div class="flex flex-col lg:flex-row justify-between mt-4">
            <div
              class="flex flex-col lg:flex-row items-center space-x-2 text-xs"
            >
              <button
                class="py-2 px-4 bg-white text-gray-600 font-medium rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center"
              >
                {{ itemsPerPage }} items
              </button>
              <p class="text-gray-500 mt-4 lg:mt-0">
                Showing {{ (currentPage - 1) * itemsPerPage + 1 }} to
                {{ Math.min(currentPage * itemsPerPage, petugasList.length) }} of
                {{ petugasList.length }} entries
              </p>
            </div>
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
        </div>

        <!-- Edit Modal -->
        <div
          v-if="isEditModalOpen"
          class="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-75"
        >
          <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
            <h3 class="text-xl font-semibold mb-4">Edit Petugas</h3>
            <form @submit.prevent="editPetugas">
              <div class="mb-4">
                <label
                  for="edit-name"
                  class="block text-sm font-medium text-gray-700"
                  >Name</label
                >
                <input
                  id="edit-name"
                  v-model="editForm.name"
                  type="text"
                  class="col-span-6 bg-gray-100 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-2"
                  disabled
                  readonly
                />
                <span v-if="errors.name" class="text-red-500">{{
                  errors.name[0]
                }}</span>
              </div>
              <div class="mb-4">
                <label
                  for="edit-keterangan"
                  class="block text-sm font-medium text-gray-700"
                  >Keterangan</label
                >
                <textarea
                  id="edit-keterangan"
                  v-model="editForm.keterangan"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2"
                ></textarea>
                <span v-if="errors.keterangan" class="text-red-500">{{
                  errors.keterangan[0]
                }}</span>
              </div>
              <div class="mb-4">
                <label
                  for="edit-expires_at"
                  class="block text-sm font-medium text-gray-700"
                  >Masa Berlaku</label
                >
                <input
                  id="edit-expires_at"
                  v-model="editForm.expires_at"
                  type="date"
                  class="col-span-6 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2"
                />
                <span v-if="errors.expires_at" class="text-red-500">{{
                  errors.expires_at[0]
                }}</span>
              </div>
              <div class="mb-4 flex justify-center">
                <button
                  v-if="editForm.is_active"
                  @click="deactivatePetugas(editForm.id)"
                  type="button"
                  class="text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
                >
                  Deactivate
                </button>
                <button
                  v-else
                  @click="activatePetugas(editForm.id)"
                  type="button"
                  class="text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-900"
                >
                  Activate
                </button>
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

        <!-- Detail Modal -->
        <div
          v-if="isDetailModalOpen"
          class="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-75"
        >
          <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
            <h3 class="text-xl font-semibold mb-4">Detail Petugas</h3>
            <div class="mb-4">
              <label
                for="detail-username"
                class="block text-sm font-medium text-gray-700"
                >Username</label
              >
              <div
                id="detail-username"
                class="mt-1 block w-full p-2 rounded-lg"
              >
                {{ detailForm.username }}
              </div>
            </div>
            <div class="mb-4">
              <label
                for="detail-expires_at"
                class="block text-sm font-medium text-gray-700"
                >Masa Berlaku</label
              >
              <div
                id="detail-expires_at"
                class="mt-1 block w-ful p-2 rounded-lg"
              >
                {{ detailForm.expires_at }}
              </div>
            </div>
            <div class="flex justify-end">
              <button
                type="button"
                @click="isDetailModalOpen = false"
                class="text-black bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>

        
        
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
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
    const petugasList = ref([]);
    const counter = ref(0);
    const searchQuery = ref(""); // Menambahkan variabel searchQuery
    const selectedStatus = ref("All"); // Menambahkan variabel untuk filter status
    const currentPage = ref(1);
    const itemsPerPage = ref(10);
    const isEditModalOpen = ref(false);
    const isAddModalOpen = ref(false);
    const isDetailModalOpen = ref(false);
    const sortOrder = ref("asc"); // "asc" untuk ascending, "desc" untuk descending
    const sortField = ref("name");
    const editForm = reactive({
      id: "",
      name: "",
      keterangan: "",
      expires_at: "",
      is_active: false,
    });
    const addForm = reactive({
      name: "",
      username: "",
      password: "",
      email: "",
    });
    const detailForm = reactive({
      username: "",
      expires_at: "",
    });
    const errors = ref([]);
    const isLoading = ref(false);
    const notification = reactive({
      message: "",
      show: false,
    });

    const formatExpiresAt = (dateString) => {
      if (!dateString) return "Tidak Aktif";
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return "Tidak Aktif";

      const now = new Date();
      const diff = date.getTime() - now.getTime();
      if (diff <= 0) return "Tidak Aktif";

      const diffHours = Math.floor(diff / (1000 * 60 * 60));
      const diffDays = Math.floor(diffHours / 24);
      const remainingHours = diffHours % 24;

      if (diffDays > 0) {
        return `${diffDays} Hari ${remainingHours} Jam`;
      } else {
        return `${diffHours} Jam`;
      }
    };

    const fetchPetugas = async () => {
      try {
        const response = await fetch("http://laravel-api.test/api/petugas");
        const data = await response.json();

        if (Array.isArray(data)) {
          counter.value = 0;
          petugasList.value = data.map((petugas) => ({
            ...petugas,
            formattedExpiresAt: formatExpiresAt(petugas.expires_at),
            number: ++counter.value,
          }));
        } else {
          console.error("Invalid data format", data);
        }
      } catch (error) {
        console.error("Error fetching petugas:", error);
      }
    };

    onMounted(fetchPetugas);

    const openEditModal = (petugas) => {
      editForm.id = petugas.id;
      editForm.name = petugas.name;
      editForm.keterangan = petugas.keterangan;
      editForm.expires_at = petugas.expires_at;
      editForm.is_active = petugas.is_active;
      isEditModalOpen.value = true;
    };

    const openAddModal = () => {
      isAddModalOpen.value = true;
    };

    const openDetailModal = (petugas) => {
      detailForm.username = petugas.username;

      if (!petugas.is_active) {
        detailForm.expires_at = "Akun Belum Aktif";
      } else if (!petugas.expires_at) {
        detailForm.expires_at = "Durasi Belum Ditambahkan";
      } else if (new Date(petugas.expires_at) < new Date()) {
        detailForm.expires_at = "Durasi Expired";
      } else {
        detailForm.expires_at = formatExpiresAt(petugas.expires_at);
      }

      isDetailModalOpen.value = true;
    };

    const editPetugas = async () => {
      const tokenStore = useTokenStore();
      errors.value = [];
      isLoading.value = true;
      try {
        const response = await fetch(
          `http://laravel-api.test/api/petugas/${editForm.id}`,
          {
            method: "PUT",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${tokenStore.getToken}`,
            },
            body: JSON.stringify({
              name: editForm.name,
              keterangan: editForm.keterangan,
              expires_at: editForm.expires_at,
              is_active: editForm.is_active,
            }),
          }
        );

        const data = await response.json();
        if (!response.ok) {
          if (data.errors) {
            errors.value = data.errors;
          } else {
            throw new Error(data.message || "Gagal mengedit petugas");
          }
        } else {
          const index = petugasList.value.findIndex(
            (petugas) => petugas.id === editForm.id
          );
          if (index !== -1) {
            petugasList.value[index] = {
              ...data.petugas,
              formattedExpiresAt: formatExpiresAt(data.petugas.expires_at),
              number: petugasList.value[index].number,
            };
          }
          isEditModalOpen.value = false;
          showNotification("Petugas berhasil diedit!");
          await fetchPetugas();
        }
      } catch (error) {
        console.error("Kesalahan mengedit petugas:", error);
      } finally {
        isLoading.value = false;
      }
    };

    const deletePetugas = async (id) => {
      const tokenStore = useTokenStore();
      isLoading.value = true;
      try {
        const response = await fetch(
          `http://laravel-api.test/api/petugas/${id}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${tokenStore.getToken}`,
            },
          }
        );

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.message || "Gagal menghapus petugas");
        }

        petugasList.value = petugasList.value.filter(
          (petugas) => petugas.id !== id
        );
        showNotification("Petugas berhasil dihapus!");
      } catch (error) {
        console.error("Kesalahan menghapus petugas:", error);
      } finally {
        isLoading.value = false;
      }
    };

    const activatePetugas = async (id) => {
      const tokenStore = useTokenStore();
      isLoading.value = true;
      try {
        const response = await fetch(
          `http://laravel-api.test/api/petugas/${id}/activate`,
          {
            method: "PUT",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${tokenStore.getToken}`,
            },
            body: JSON.stringify({
              is_active: true,
              expires_at: new Date(Date.now() + 30*24*60*60*1000).toISOString(), // Restart expire date to 30 days from now
            }),
          }
        );

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "Gagal mengaktifkan petugas");
        }

        const index = petugasList.value.findIndex(
          (petugas) => petugas.id === id
        );
        if (index !== -1) {
          petugasList.value[index].is_active = true;
          petugasList.value[index].expires_at = data.petugas.expires_at; // Update expire date
        }
        showNotification("Petugas berhasil diaktifkan!");
        isEditModalOpen.value = false; // Close the modal
      } catch (error) {
        console.error("Kesalahan mengaktifkan petugas:", error);
      } finally {
        isLoading.value = false;
      }
    };

    const deactivatePetugas = async (id) => {
      const tokenStore = useTokenStore();
      isLoading.value = true;
      try {
        const response = await fetch(
          `http://laravel-api.test/api/petugas/${id}/deactivate`,
          {
            method: "PUT",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${tokenStore.getToken}`,
            },
            body: JSON.stringify({
              is_active: false,
              expires_at: new Date(Date.now() + 30*24*60*60*1000).toISOString(),
            }),
          }
        );

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "Gagal menonaktifkan petugas");
        }

        const index = petugasList.value.findIndex(
          (petugas) => petugas.id === id
        );
        if (index !== -1) {
          petugasList.value[index].is_active = false;
          petugasList.value[index].expires_at = data.petugas.expires_at;
        }
        showNotification("Petugas berhasil dinonaktifkan!");
        isEditModalOpen.value = false; // Close the modal
      } catch (error) {
        console.error("Kesalahan menonaktifkan petugas:", error);
      } finally {
        isLoading.value = false;
      }
    };

    // Computed property untuk pencarian dan filter status
    const filteredPetugas = computed(() => {
      let filteredList = petugasList.value.filter((petugas) => {
        const matchesSearchQuery = petugas.name
          .toLowerCase()
          .includes(searchQuery.value.toLowerCase());
        const matchesStatus =
          selectedStatus.value === "All" ||
          (selectedStatus.value === "Aktif" && petugas.is_active) ||
          (selectedStatus.value === "Tidak Aktif" && !petugas.is_active);

        return matchesSearchQuery && matchesStatus;
      });

      filteredList.sort((a, b) => {
        const nameA = a[sortField.value].toLowerCase();
        const nameB = b[sortField.value].toLowerCase();

        if (sortOrder.value === "asc") {
          return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
        } else {
          return nameA > nameB ? -1 : nameA < nameB ? 1 : 0;
        }
      });

      return filteredList;
    });

    const paginatedFilteredPetugas = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return filteredPetugas.value.slice(start, end);
    });

    const totalPages = computed(() => {
      return Math.ceil(filteredPetugas.value.length / itemsPerPage.value);
    });

    const changePage = (page) => {
      if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
      }
    };
    
      // Fungsi untuk toggle sort order
      const toggleSortOrder = () => {
      sortOrder.value = sortOrder.value === "asc" ? "desc" : "asc";
    };
    
    const showNotification = (message) => {
      notification.message = message;
      notification.show = true;
      setTimeout(() => (notification.show = false), 3000);
    };

    return {
      petugasList,
      counter,
      searchQuery,
      selectedStatus, // Tambahkan status yang dipilih
      currentPage,
      itemsPerPage,
      totalPages,
      filteredPetugas, // Hasil filter petugas
      changePage,
      sortOrder,
      sortField,
      paginatedFilteredPetugas,
      toggleSortOrder,
      isEditModalOpen,
      isAddModalOpen,
      isDetailModalOpen,
      editForm,
      addForm,
      detailForm,
      errors,
      isLoading,
      notification,
      openEditModal,
      openAddModal,
      openDetailModal,
      editPetugas,
      deletePetugas,
      activatePetugas,
      deactivatePetugas,
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
</style>