<script setup>
import { onMounted } from 'vue'
import { useFlowbite } from '~/composables/useFlowbite';

// initialize components based on data attribute selectors
onMounted(() => {
    useFlowbite(() => {
        initFlowbite();
    })
})
const auth = useAuthStore();
definePageMeta({
  middleware: ["guest"],
  colorMode: 'light'
});
const form = reactive({
  username: "",
  password: "",
});
const errors = ref([]);
const handleSubmit = async () => {
  try {
    await auth.login(form);
  } catch (error) {
    errors.value = error.data.errors;
  }
};
</script>

<template>
  <div class="min-h-screen flex items-center" style="background-image: url('https://dutadamaisumaterabarat.id/wp-content/uploads/2023/02/images-37.jpeg'); background-size: cover; background-position: center;">
    
    <div class="w-full">
      <div
        class="card bg-white p-20 rounded-lg shadow-xl md:mx-auto mx-4 lg:w-1/3 H" style="opacity: 0.9;"
      >
      <img
              src="https://i.ibb.co.com/vQdTcW8/lubuk-malako.webp"
              class="h-36 mx-auto block"
              alt="FlowBite Logo"
            />
      <h3 class="text-center text-2xl font-semibold">KEPENDUDUKAN DIGITAL <br> NAGARI LUBUK MALAKO</h3>
      <p class="text-center text-sm">Mempermudah Akses dan Pengelolaan Data Penduduk secara Digital</p><br>
        <!-- <h5 class="text-center text-2xl font-semibold">User Login</h5> -->

        <form @submit.prevent="handleSubmit" class="max-w-sm mx-auto">
          <div class="mb-5">
            <FormLabel for="username">Your Username</FormLabel>
            <FormTextInput
              id="username"
              type="username"
              placeholder="Username"
              v-model="form.username"
            />

            <span v-if="errors.username" class="text-red-500">{{
              errors.username[0]
            }}</span>
          </div>
          <div class="mb-5">
            <FormLabel for="password">Your Password</FormLabel>
            <FormTextInput
              id="password"
              type="password"
              placeholder="password"
              v-model="form.password"
            />

            <span v-if="errors.password" class="text-red-500">{{
              errors.password[0]
            }}</span>
          </div>
          <!-- <div class="flex items-start mb-5">
            <div class="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              />
            </div>
            <FormLabel class="ml-2" for="remember">Remember Me</FormLabel>
          </div> -->
          <ButtonPrimary>Login</ButtonPrimary>
          
        </form>
      </div>
    </div>
  </div>
</template>