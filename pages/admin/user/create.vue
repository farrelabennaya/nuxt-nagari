<script setup>
import { ref, reactive } from "vue";
import { useAuthStore } from "@/stores/auth";

const auth = useAuthStore();
const router = useRouter();

definePageMeta({
  middleware: ["auth", "role"],
  colorMode: "light",
});

const form = reactive({
  name: "",
  username: "",
  password: "",
  role_id: "",
});

const errors = ref([]);
const roles = ref([
  { id: 1, name: "Admin" },
  { id: 2, name: "Petugas" },
  { id: 3, name: "Warga" },
]);

const notification = reactive({
  show: false,
  message: "",
});

const showNotification = (message) => {
  notification.message = message;
  notification.show = true;
  setTimeout(() => {
    notification.show = false;
  }, 3000);
};

const handleSubmit = async () => {
  errors.value = {};
  
  // Validasi form sebelum pengiriman
  if (form.password.length < 8) {
    errors.value.password = ["Password minimal 8 karakter"];
    return;
  }

  try {
    await auth.createuser(form);
    showNotification("User created successfully!");
    setTimeout(() => {
      router.push("/admin/user/data");
    }, 1500);
  } catch (error) {
    if (error.data && error.data.errors) {
      errors.value = error.data.errors;
    } else {
      console.error(error);
    }
  }
};
</script>

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
            <h1 class="text-lg font-bold mb-4">Create User</h1>

            <slot />
          </div>
        </main>
        <div class="min-h-screen flex">
          <div class="w-full">
            <div
              class="card bg-white p-10 rounded-lg shadow-md md:w-3/5 mx-auto lg:w-1/3"
            >
              <h3 class="text-center text-2xl font-semibold">User Data</h3>

              <form @submit.prevent="handleSubmit" class="max-w-sm mx-auto">
                <div class="mb-5">
                  <FormLabel for="name">Name</FormLabel>
                  <FormTextInput
                    id="name"
                    type="text"
                    placeholder="Name"
                    v-model="form.name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50"
                  />
                  <span v-if="errors.name" class="text-red-500">{{
                    errors.name[0]
                  }}</span>
                </div>

                <div class="mb-5">
                  <FormLabel for="username">Username</FormLabel>
                  <FormTextInput
                    id="username"
                    type="text"
                    placeholder="Username"
                    v-model="form.username"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50"
                  />
                  <span v-if="errors.username" class="text-red-500">{{ errors.username[0] }}</span>
                </div>

                <div class="mb-5">
                  <FormLabel for="password">Password</FormLabel>
                  <FormTextInput
                    id="password"
                    type="password"
                    placeholder="Password"
                    v-model="form.password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50"
                  />
                  <span v-if="errors.password" class="text-red-500">{{
                    errors.password[0]
                  }}</span>
                  <span v-if="form.password.length > 0 && form.password.length < 8" class="text-red-500">Password minimal 8 karakter</span>
                </div>

                <div class="mb-5">
                  <FormLabel for="role">Role</FormLabel>
                 
                    <select
                      id="role"
                      v-model="form.role_id"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50">
                    >
                      <option
                        v-for="role in roles"
                        :value="role.id"
                        :key="role.id"
                      >
                        {{ role.name }}
                      </option>
                    </select>
                  
                  <span v-if="errors.role_id" class="text-red-500">{{
                    errors.role_id[0]
                  }}</span>
                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-1 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add User</button>
              </form>
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

</style>
