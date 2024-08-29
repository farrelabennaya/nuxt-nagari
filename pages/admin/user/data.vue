<script>
import { ref, reactive } from "vue";
import AppHeader from "~/components/AppHeader.vue";
import SidebarAdmin from "~/components/SidebarAdmin.vue";
import { useAuthStore } from "@/stores/auth";
import { useTokenStore } from "@/stores/token";

definePageMeta({
  middleware: ["auth", "role"],
  colorMode: "light",
});

export default {
  data() {
    return {
      userList: [],
      searchQuery: "",
      selectedRole: "All",
      counter: 0,
      isEditModalOpen: false,
      isDeleteModalOpen: false,
      userIdToDelete: null,
      sortOrder: "asc", // New state to track sorting order

      currentPage: 1, // State for pagination
      itemsPerPage: 10, // Items per page

      editForm: reactive({
        id: "",
        name: "",
        username: "",
        role_id: "",
      }),
      errors: ref([]),
      roles: ref([
        { id: 1, name: "admin" },
        { id: 2, name: "petugas" },
        { id: 3, name: "warga" },
      ]),
      isLoading: false,

      notification: {
        message: "",
        show: false,
      },
    };
  },
  async mounted() {
    await this.fetchUsers();
  },
  computed: {
    // Paginated and filtered users
    paginatedUsers() {
      // First, apply filtering and sorting
      const query = this.searchQuery.toLowerCase();
      let filtered = this.userList.filter((user) => {
        const matchesSearchQuery =
          user.name.toLowerCase().includes(query) ||
          user.username.toLowerCase().includes(query) ||
          user.role.name.toLowerCase().includes(query);

        const matchesRole =
          this.selectedRole === "All" ||
          user.role.name.toLowerCase() === this.selectedRole.toLowerCase();

        return matchesSearchQuery && matchesRole;
      });

      // Sort based on sortOrder
      filtered = filtered.sort((a, b) => {
        if (this.sortOrder === "asc") {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      });

      // Paginate data
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = this.currentPage * this.itemsPerPage;
      return filtered.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.userList.length / this.itemsPerPage);
    },
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await fetch("http://laravel-api.test/api/users");
        const data = await response.json();
        this.counter = 0; // Reset counter
        this.userList = data.users
          .filter((user) => user.role.name !== "Admin")
          .map((user) => ({
            ...user,
            number: ++this.counter,
          }));
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },
    confirmDeleteUser(userId) {
      this.userIdToDelete = userId;
      this.isDeleteModalOpen = true;
    },
    async deleteUser() {
      const tokenStore = useTokenStore();
      try {
        await fetch(
          `http://laravel-api.test/api/users/${this.userIdToDelete}`,
          {
            method: "DELETE",
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${tokenStore.getToken}`,
            },
          }
        );
        this.userList = this.userList.filter(
          (user) => user.id !== this.userIdToDelete
        );
        // Update user numbers after deletion
        this.userList.forEach((user, index) => {
          user.number = index + 1;
        });
        this.isDeleteModalOpen = false;
        this.showNotification("User deleted successfully!");
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    },
    showNotification(message) {
      this.notification.message = message;
      this.notification.show = true;
      setTimeout(() => (this.notification.show = false), 3000); // Hide after 3 seconds
    },
    openEditModal(user) {
      this.editForm.id = user.id;
      this.editForm.name = user.name;
      this.editForm.username = user.username;
      this.editForm.role_id = user.role.id;
      this.isEditModalOpen = true;
    },
    async editUser() {
      const tokenStore = useTokenStore();
      this.errors.value = [];
      this.isLoading = true;
      try {
        const response = await fetch(
          `http://laravel-api.test/api/users/${this.editForm.id}`,
          {
            method: "PUT",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${tokenStore.getToken}`,
            },
            body: JSON.stringify(this.editForm),
          }
        );
        const data = await response.json();
        if (!response.ok) {
          if (data.errors) {
            this.errors.value = data.errors;
          } else {
            throw new Error(data.message || "Failed to edit user");
          }
        } else {
          // Update user in the list without changing the number
          const index = this.userList.findIndex(
            (user) => user.id === this.editForm.id
          );
          if (index !== -1) {
            this.userList[index] = {
              ...data.user,
              number: this.userList[index].number,
            };
          }
          this.isEditModalOpen = false;
          this.showNotification("User edited successfully!");
          await this.fetchUsers();
        }
      } catch (error) {
        console.error("Error editing user:", error);
      } finally {
        this.isLoading = false;
      }
    },
    selectRole(role) {
      this.selectedRole = role;
    },
    toggleSortOrder() {
      // Toggle the sort order between 'asc' and 'desc'
      this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc";
    },
    changePage(pageNumber) {
      this.currentPage = pageNumber;
    },
  },
};
</script>

<template>
  <div>
    <AppHeader />
    <div class="flex overflow-hidden bg-white pt-16">
      <SidebarAdmin />
      

      <div
        id="main-content"
        class="min-h-screen h-full w-full bg-gray-50 relative overflow-y-auto sm:ml-64"
      >
        <div class="custom-header to-gray-100 p-6 pb-32 pt-5">
          <main>
            <!-- <div class="pt-6 px-4 ml-5 mr-5">
            <h1 class="text-lg font-bold mb-4">Data User</h1>
            <tr>
              <td>
                <NuxtLink to="/admin/user/create">
                  <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Add User +
                  </button></NuxtLink
                >
              </td>
            </tr>
            <slot />
          </div> -->
            <div
              class="bg-white rounded-lg shadow-sm p-6 flex justify-between items-center relative overflow-x-auto ml-5 mr-5 mt-5 mb-5"
            >
              <div>
                <h2 class="text-xl font-bold text-gray-800">Users</h2>
                <p class="text-gray-500">Kelola User</p>
              </div>
              <NuxtLink to="/admin/user/create">
                <button
                  class="bg-green-500 text-white font-medium rounded-lg px-4 py-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                >
                  + Tambah User
                </button>
              </NuxtLink>
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
                  {{ selectedRole === "All" ? "All" : selectedRole }}
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
                        type="button"
                        @click="selectRole('All')"
                        class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        All
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        @click="selectRole('Petugas')"
                        class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Petugas
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        @click="selectRole('Warga')"
                        class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Warga
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
                    placeholder="Cari User..."
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
                <th scope="col" class="px-6 py-3">
                  <button
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
                  </button>
                </th>
                <th scope="col" class="px-6 py-3">Username</th>
                <th scope="col" class="px-6 py-3">Role</th>
                <th scope="col" class="px-6 py-3 flex justify-center">Aksi</th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="(user, index) in paginatedUsers"
                :key="user.id"
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {{ (currentPage - 1) * itemsPerPage + index + 1 }}
                </th>
                <td class="px-6 py-4">
                  {{ user.name }}
                </td>
                <td class="px-6 py-4">
                  {{ user.username }}
                </td>
                <td class="px-6 py-4">
                  {{ user.role.name }}
                </td>
                <td class="flex justify-center items-center">
                  <button
                    @click="openEditModal(user)"
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
                    @click="confirmDeleteUser(user.id)"
                    class="flex p-1.5 border border-red-500 me-2 mt-2 rounded-lg hover:rounded-xl mb-2 hover:bg-red-100 transition-all duration-300 text-red-500"
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
                        d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
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
                {{ Math.min(currentPage * itemsPerPage, userList.length) }} of
                {{ userList.length }} entries
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
            <h3 class="text-xl font-semibold mb-4">Edit User</h3>
            <form @submit.prevent="editUser">
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
                  class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2"
                />
                <span v-if="errors.name" class="text-red-500">{{
                  errors.name[0]
                }}</span>
              </div>
              <div class="mb-4">
                <label
                  for="edit-username"
                  class="block text-sm font-medium text-gray-700"
                  >Username</label
                >
                <input
                  id="edit-username"
                  v-model="editForm.username"
                  type="username"
                  class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2"
                />
                <span v-if="errors.username" class="text-red-500">{{
                  errors.username[0]
                }}</span>
              </div>
              <div class="mb-4">
                <label
                  for="edit-role"
                  class="block text-sm font-medium text-gray-700"
                  >Role</label
                >
                <select
                  id="edit-role"
                  v-model="editForm.role_id"
                  class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2"
                >
                  <option v-for="role in roles" :value="role.id" :key="role.id">
                    {{ role.name }}
                  </option>
                </select>
                <span v-if="errors.role_id" class="text-red-500">{{
                  errors.role_id[0]
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
                Hapus Akun User
              </h4>
              <p class="text-sm text-gray-600 mt-4">
                Apakah anda yakin menghapus User ini? Akun yang dihapus akan
                hilang.
              </p>
            </div>

            <div class="flex flex-col space-y-2">
              <button
                type="button"
                @click="deleteUser"
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
      </div>
    </div>
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
  </div>
</template>

<style scoped>
.custom-bg-main {
  background-color: #f9fafb;
}

.custom-header {
  background: linear-gradient(to right, #adc4ce, #e0ebf0);
}
</style>
