<script setup>
import { ref, reactive } from "vue";
import { useAuthStore } from "@/stores/auth";


definePageMeta({
  middleware: ["auth", "role"],
  colorMode: "light",
});


const auth = useAuthStore();
const router = useRouter();

// Reactive form data
const form = reactive({
  name: "",
  username: "",
  password: "",
  role_id: "",
});

// Object to store errors
const errors = ref({});

// List of available roles
const roles = ref([
  { id: 1, name: "Admin" },
  { id: 2, name: "Petugas" },
  { id: 3, name: "Warga" },
]);

// Validate password in real-time
const validatePassword = () => {
  if (form.password.length < 8) {
    errors.value.password = "Password minimal 8 karakter";
  } else {
    delete errors.value.password;  // Clear the error when password is valid
  }
};

// Handle form submission
const handleSubmit = async () => {
  // Reset errors
  errors.value = {};

  // Validate required fields
  if (!form.name) {
    errors.value.name = "Name is required";
  }
  if (!form.username) {
    errors.value.username = "Username is required";
  }
  if (!form.role_id) {
    errors.value.role_id = "Role is required";
  }

  // Validate password
  if (form.password.length < 8) {
    errors.value.password = "Password minimal 8 karakter";
  }

  // Stop submission if there are errors
  if (Object.keys(errors.value).length > 0) {
    return;
  }

  try {
    // Simulate API call to create user
    await auth.createuser(form);
    
    // Success notification
    showNotification("User created successfully!");

    // Reset form after successful submission
    form.name = "";
    form.username = "";
    form.password = "";
    form.role_id = "";
    errors.value = {};  // Clear errors after successful submission

    // Redirect to another page (example)
    setTimeout(() => {
      router.push("/admin/user/data");
    }, 1500);
  } catch (error) {
    // Handle error response
    if (error.data && error.data.errors) {
      const errorData = error.data.errors;

      // Loop through each error and only store the first message
      Object.keys(errorData).forEach((key) => {
        if (Array.isArray(errorData[key])) {
          errors.value[key] = errorData[key][0];  // Store only the first error message
        } else {
          errors.value[key] = errorData[key];  // Store as is if not an array
        }
      });
    } else {
      console.error(error);
    }
  }
};

// Notification logic
const notification = reactive({
  show: false,
  message: "",
});

// Show notification
const showNotification = (message) => {
  notification.message = message;
  notification.show = true;
  setTimeout(() => {
    notification.show = false;
  }, 3000);
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
      <div class="custom-header to-gray-100 p-6 pb-32 pt-5">
        <main>
          <div
              class="bg-white rounded-lg shadow-sm p-6 flex justify-between items-center relative overflow-x-auto ml-5 mr-5 mt-5 mb-5"
             >
              <div>
                <h2 class="text-xl font-bold text-gray-800">Tambah User</h2>
                <p class="text-gray-500">Tambah Data User</p>
              </div>
            </div>
        </main>
        </div>
        <div class="min-h-screen flex">
          <div class="w-full">
            <div
              class="card bg-white p-10 rounded-lg shadow-md md:w-3/5 mx-auto lg:w-1/3 -mt-20"
            >
              <h3 class="text-center text-2xl font-semibold">User Data</h3>

              <form @submit.prevent="handleSubmit" class="max-w-sm mx-auto">
                <!-- Name Field -->
                <div class="mb-5">
                  <FormLabel for="name">Name</FormLabel>
                  <FormTextInput
                    id="name"
                    type="text"
                    placeholder="Name"
                    v-model="form.name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  <span v-if="errors.name" class="text-red-500">{{ errors.name }}</span>
                </div>

                <!-- Username Field -->
                <div class="mb-5">
                  <FormLabel for="username">Username</FormLabel>
                  <FormTextInput
                    id="username"
                    type="text"
                    placeholder="Username"
                    v-model="form.username"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  <span v-if="errors.username" class="text-red-500">{{ errors.username }}</span>
                </div>

                <!-- Password Field -->
                <div class="mb-5">
                  <FormLabel for="password">Password</FormLabel>
                  <FormTextInput
                    id="password"
                    type="password"
                    placeholder="Password"
                    @input="validatePassword"
                    v-model="form.password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  <!-- Display password error message -->
                  <span v-if="errors.password" class="text-red-500">{{ errors.password }}</span>
                </div>

                <!-- Role Field -->
                <div class="mb-5">
                  <FormLabel for="role">Role</FormLabel>
                  <select
                    id="role"
                    v-model="form.role_id"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option v-for="role in roles" :value="role.id" :key="role.id">
                      {{ role.name }}
                    </option>
                  </select>
                  <span v-if="errors.role_id" class="text-red-500">{{ errors.role_id }}</span>
                </div>

                <!-- Submit Button -->
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-1 mb-2">Add User</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Notification -->
    <div v-if="notification.show" id="toast-success" class="fixed bottom-4 right-4 w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow">
      <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg">
        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414Z" />
        </svg>
      </div>
      <div class="ml-3 text-sm font-normal">{{ notification.message }}</div>
      <button @click="notification.show = false" class="ml-auto bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5">
        <span class="sr-only">Close</span>
        <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1l6 6m0 0l6 6M7 7L1 1m6 6l6-6" />
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
