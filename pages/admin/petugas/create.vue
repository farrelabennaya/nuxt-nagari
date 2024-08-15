<script setup>
import { ref, reactive } from "vue";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

const auth = useAuthStore();
const router = useRouter();

const form = reactive({
  nama: "",
  username: "",
  password: "",
  keterangan: "",
  masa_aktif_akun: "",
});

const errors = ref({});

const handleSubmit = async () => {
  errors.value = {};
  try {
    console.log("Form data:", form); // Log data yang dikirim
    await auth.createPetugas(form);
    alert("Petugas created successfully!");
    router.push({ name: "PetugasList" }); // Navigate to the Petugas list page
  } catch (error) {
    if (error.response && error.response.data && error.response.data.errors) {
      errors.value = error.response.data.errors;
    } else {
      console.error("Error response:", error.response);
      alert("An error occurred while creating the petugas.");
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
            <h1 class="text-lg font-bold mb-4">Create Petugas</h1>

            <slot />
          </div>
        </main>
        <div class="min-h-screen flex">
          <div class="w-full">
            <div
              class="card bg-white p-20 rounded-lg shadow-xl md:w-3/5 mx-auto lg:w-1/3"
            >
              <h3 class="text-center text-2xl font-semibold">Petugas Data</h3>

              <form @submit.prevent="handleSubmit" class="max-w-sm mx-auto">
                <div class="mb-5">
                  <FormLabel for="nama">Name</FormLabel>
                  <FormTextInput
                    id="nama"
                    type="text"
                    placeholder="Name"
                    v-model="form.nama"
                  />
                  <span v-if="errors.nama" class="text-red-500">{{
                    errors.nama[0]
                  }}</span>
                </div>

                <div class="mb-5">
                  <FormLabel for="username">Username</FormLabel>
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
                  <FormLabel for="password">Password</FormLabel>
                  <FormTextInput
                    id="password"
                    type="password"
                    placeholder="Password"
                    v-model="form.password"
                  />
                  <span v-if="errors.password" class="text-red-500">{{
                    errors.password[0]
                  }}</span>
                </div>

                <div class="mb-5">
                  <FormLabel for="keterangan">Keterangan</FormLabel>
                  <FormTextInput
                    id="keterangan"
                    type="text"
                    placeholder="Keterangan"
                    v-model="form.keterangan"
                  />
                  <span v-if="errors.keterangan" class="text-red-500">{{
                    errors.keterangan[0]
                  }}</span>
                </div>

                <div class="mb-5">
                  <FormLabel for="masa_aktif_akun">Masa Aktif Akun</FormLabel>
                  <FormTextInput
                    id="masa_aktif_akun"
                    type="date"
                    placeholder="Masa Aktif Akun"
                    v-model="form.masa_aktif_akun"
                  />
                  <span v-if="errors.masa_aktif_akun" class="text-red-500">{{
                    errors.masa_aktif_akun[0]
                  }}</span>
                </div>

                <button type="submit" class="btn-primary">Add Petugas</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.form-label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
.form-input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  margin-bottom: 0.5rem;
}
.btn-primary {
  background-color: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
}
.btn-primary:hover {
  background-color: #2563eb;
}
</style>
