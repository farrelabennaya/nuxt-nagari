<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { useFlowbite } from '~/composables/useFlowbite';

// initialize components based on data attribute selectors
onMounted(() => {
    useFlowbite(() => {
        initFlowbite();
    })
})

const userDropdownOpen = ref(false);
const nagariDropdownOpen = ref(false);
const pendudukDropdownOpen = ref(false);
const sidebarOpen = ref(false);
const activeMenu = ref("");
const route = useRoute();

const toggleUserDropdown = () => {
  userDropdownOpen.value = !userDropdownOpen.value;
  localStorage.setItem("userDropdownOpen", userDropdownOpen.value);
};

const toggleNagariDropdown = () => {
  nagariDropdownOpen.value = !nagariDropdownOpen.value;
  localStorage.setItem("nagariDropdownOpen", nagariDropdownOpen.value);
};
const togglePendudukDropdown = () => {
  pendudukDropdownOpen.value = !pendudukDropdownOpen.value;
  localStorage.setItem("pendudukDropdownOpen", pendudukDropdownOpen.value);
};

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};

const updateActiveMenu = () => {
  activeMenu.value = route.path;
};

onMounted(() => {
  const userDropdownState = localStorage.getItem("userDropdownOpen");
  if (userDropdownState !== null) {
    userDropdownOpen.value = userDropdownState === "true";
  }

  const nagariDropdownState = localStorage.getItem("nagariDropdownOpen");
  if (nagariDropdownState !== null) {
    nagariDropdownOpen.value = nagariDropdownState === "true";
  }
  const pendudukDropdownState = localStorage.getItem("pendudukDropdownOpen");
  if (pendudukDropdownState !== null) {
    pendudukDropdownOpen.value = pendudukDropdownState === "true";
  }
  updateActiveMenu();

// Menghapus status dropdown dari localStorage saat halaman di-refresh
window.addEventListener("beforeunload", () => {
  localStorage.removeItem("userDropdownOpen");
  localStorage.removeItem("nagariDropdownOpen");
  localStorage.removeItem("pendudukDropdownOpen");
});
});

watch(route, () => {
  updateActiveMenu();
});
</script>

<template>
  <!-- Button to toggle sidebar on mobile -->
  <button
    class="fixed top-4 left-4 z-50 sm:hidden"
    @click="toggleSidebar"
    aria-label="Toggle Sidebar"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-8 w-8 text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
  </button>

  <aside
    id="logo-sidebar"
    :class="[
      'fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700',
      sidebarOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0',
    ]"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
        <li>
          <NuxtLink
            to="/admin"
            class="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
            :class="{ 'bg-gray-200': activeMenu === '/admin' }"
            @click="sidebarOpen = false"
          >
            <svg
              class="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
            </svg>
            <span class="ml-3">Dashboard</span>
          </NuxtLink>
        </li>

        <!-- Dropdown User -->
        <li>
          <button
            type="button"
            class="flex items-center w-full p-2 text-base text-gray-900 font-normal transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            aria-controls="dropdown-example"
            @click="toggleUserDropdown"
          >
            <svg
              class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap"
              >User</span
            >
            <svg
              class="w-3 h-3"
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
          <ul
            v-show="userDropdownOpen"
            id="dropdown-example"
            class="py-2 space-y-2"
          >
            <li>
              <NuxtLink
                to="/admin/user/data"
                class="flex items-center w-full p-2 text-gray-900 font-normal transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                :class="{ 'bg-gray-200': activeMenu === '/admin/user/data' }"
                @click="sidebarOpen = false"
                >Data User</NuxtLink
              >
            </li>

            <li>
              <NuxtLink
                to="/admin/petugas/data"
                class="flex items-center w-full p-2 text-gray-900 font-normal transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                :class="{ 'bg-gray-200': activeMenu === '/admin/petugas/data' }"
                @click="sidebarOpen = false"
                >Data Petugas</NuxtLink
              >
            </li>
          </ul>
        </li>

        <!-- Dropdown Nagari -->
        <li>
          <button
            type="button"
            class="flex items-center w-full p-2 text-base text-gray-900 font-normal transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            aria-controls="dropdown-example2"
            @click="toggleNagariDropdown"
          >
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
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
                d="M5.005 11.19V12l6.998 4.042L19 12v-.81M5 16.15v.81L11.997 21l6.998-4.042v-.81M12.003 3 5.005 7.042l6.998 4.042L19 7.042 12.003 3Z"
              />
            </svg>

            <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap"
              >Nagari</span
            >
            <svg
              class="w-3 h-3"
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
          <ul
            v-show="nagariDropdownOpen"
            id="dropdown-example2"
            class="py-2 space-y-2"
          >
            <li>
              <NuxtLink
                to="/admin/nagari/jorong"
                class="flex items-center w-full p-2 text-gray-900 font-normal transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                :class="{
                  'bg-gray-200': activeMenu === '/admin/nagari/jorong',
                }"
                @click="sidebarOpen = false"
                >Jorong</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/admin/nagari/alamat"
                class="flex items-center w-full p-2 text-gray-900 font-normal transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                :class="{
                  'bg-gray-200': activeMenu === '/admin/nagari/alamat',
                }"
                @click="sidebarOpen = false"
                >Alamat</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/admin/nagari/rumah"
                class="flex items-center w-full p-2 text-gray-900 font-normal transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                :class="{ 'bg-gray-200': activeMenu === '/admin/nagari/rumah' }"
                @click="sidebarOpen = false"
                >Rumah</NuxtLink
              >
            </li>
          </ul>
        </li>

        <!-- Dropdown Penduduk -->
        <li>
          <button
            type="button"
            class="flex items-center w-full p-2 text-base text-gray-900 font-normal transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            aria-controls="dropdown-example3"
            @click="togglePendudukDropdown"
          >
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
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
                d="M15 9h3m-3 3h3m-3 3h3m-6 1c-.306-.613-.933-1-1.618-1H7.618c-.685 0-1.312.387-1.618 1M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
              />
            </svg>

            <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap"
              >Penduduk</span
            >
            <svg
              class="w-3 h-3"
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
          <ul
            v-show="pendudukDropdownOpen"
            id="dropdown-example3"
            class="py-2 space-y-2"
          >
          <li>
              <NuxtLink
                to="/admin/nagari/keluarga"
                class="flex items-center w-full p-2 text-gray-900 font-normal transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                :class="{
                  'bg-gray-200': activeMenu === '/admin/nagari/keluarga',
                }"
                @click="sidebarOpen = false"
                >Keluarga</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/admin/nagari/anggotaKeluarga"
                class="flex items-center w-full p-2 text-gray-900 font-normal transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                :class="{
                  'bg-gray-200': activeMenu === '/admin/nagari/anggotaKeluarga',
                }"
                @click="sidebarOpen = false"
                >Data Penduduk</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/admin/maps/penduduklist"
                class="flex items-center w-full p-2 text-gray-900 font-normal transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                :class="{
                  'bg-gray-200': activeMenu === '/admin/maps/penduduklist',
                }"
                @click="sidebarOpen = false"
                >Lokasi Penduduk</NuxtLink
              >
            </li>
            
          </ul>
        </li>

        <li>
          <NuxtLink
            to="/admin/qr/create"
            class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group"
            :class="{
              'bg-gray-200': activeMenu === '/admin/qr/create',
            }"
            @click="sidebarOpen = false"
          >
            <svg
              class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="ml-3 flex-1 whitespace-nowrap">QR Code</span>
          </NuxtLink>
        </li>

        <li>
          <NuxtLink
            to="/admin/qr/scan"
            class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group"
            :class="{
              'bg-gray-200': activeMenu === '/admin/qr/scan',
            }"
            @click="sidebarOpen = false"
          >
            <svg
              class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="ml-3 flex-1 whitespace-nowrap">Scanner</span>
          </NuxtLink>
        </li>

        <li>
          <NuxtLink
            to="/maps"
            class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group"
            :class="{
              'bg-gray-200': activeMenu === '/admin/maps',
            }"
            @click="sidebarOpen = false"
          >
            <svg
              class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="ml-3 flex-1 whitespace-nowrap">Map</span>
          </NuxtLink>
        </li>

        <div class="space-y-2 pt-2"></div>
      </ul>
    </div>
  </aside>
</template>

<style scoped>
/* Styling untuk tampilan mobile dan desktop */
@media (max-width: 640px) {
  #logo-sidebar {
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
  }
  #logo-sidebar.translate-x-0 {
    transform: translateX(0);
  }
}

/* Styling untuk tampilan desktop agar sidebar selalu terlihat */
@media (min-width: 641px) {
  #logo-sidebar {
    transform: translateX(0);
  }
}

.bg-gray-200 {
  background-color: #e5e7eb !important;
}

.custom-bg {
  background-color: #f7b267;
}
</style>
