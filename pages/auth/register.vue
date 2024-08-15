<script setup>


const auth = useAuthStore();
definePageMeta({
  middleware: ["guest"],
  colorMode: 'light'
});

const form = reactive({
  name: null,
  email: null,
  password: null,
  password_confirmation: null,
  role_id: null, // Menambahkan field role_id
});

const errors = ref({});

const handleSubmit = async () => {
  try {
    await auth.register(form);
  } catch (error) {
    if (error.data && error.data.errors) {
      errors.value = error.data.errors;
    } else {
      // Handle other types of errors here if needed
      errors.value = { general: [error.message] };
    }
  }
};
</script>

<template>
  <div class="min-h-screen flex items-center">
    <div class="w-full">
      <div class="card bg-white p-20 rounded-lg shadow-xl md:w-3/5 mx-auto lg:w-1/3">
        <h3 class="text-center text-2xl font-semibold">User Registration</h3>

        <form @submit.prevent="handleSubmit" class="max-w-sm mx-auto">
          <div class="mb-5">
            <FormLabel for="name">Your Name</FormLabel>
            <FormTextInput
              id="name"
              type="text"
              placeholder="Your name"
              v-model="form.name"
            />
            <span v-if="errors.name" class="text-red-500">{{ errors.name[0] }}</span>
          </div>

          <div class="mb-5">
            <FormLabel for="email">Your Email</FormLabel>
            <FormTextInput
              id="email"
              type="email"
              placeholder="Email address"
              v-model="form.email"
            />
            <span v-if="errors.email" class="text-red-500">{{ errors.email[0] }}</span>
          </div>

          <div class="mb-5">
            <FormLabel for="password">Your Password</FormLabel>
            <FormTextInput
              id="password"
              type="password"
              placeholder="Password"
              v-model="form.password"
            />
            <span v-if="errors.password" class="text-red-500">{{ errors.password[0] }}</span>
          </div>

          <div class="mb-5">
            <FormLabel for="password_confirmation">Retype Password</FormLabel>
            <FormTextInput
              id="password_confirmation"
              type="password"
              placeholder="Retype password"
              v-model="form.password_confirmation"
            />
            <span v-if="errors.password_confirmation" class="text-red-500">{{ errors.password_confirmation[0] }}</span>
          </div>
          
          <div class="mb-5">
            <FormLabel for="role">Role</FormLabel>
            <select id="role" v-model="form.role_id" class="w-full p-2 border rounded">
              <option value="" disabled>Select a role</option>
              <option value="1">Admin</option>
              <option value="2">Petugas</option>
              <option value="3">Warga</option>
            </select>
            <span v-if="errors.role_id" class="text-red-500">{{ errors.role_id[0] }}</span>
          </div>

          <ButtonPrimary>Register</ButtonPrimary>

          <span v-if="errors.general" class="text-red-500 mt-5 block">{{ errors.general[0] }}</span>
        </form>
      </div>
    </div>
  </div>
</template>
