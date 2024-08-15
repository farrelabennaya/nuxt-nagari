<template>
    <div>
      <AppHeader />
      <div class="flex overflow-hidden bg-white pt-16">
        <SidebarAdmin />
        <div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto sm:ml-64">
          <main>
            <div class="pt-6 px-4 ml-5 mr-5">
              <h1 class="text-lg font-bold mb-4">Tambah Data Warga</h1>
  
              <div v-if="qrCodeUrl" class="text-center mb-4">
                <h2 class="text-xl font-bold">QR Code</h2>
                <img :src="qrCodeUrl" alt="QR Code" class="mx-auto"/>
              </div>
  
              <form @submit.prevent="handleSubmit" class="max-w-lg mx-auto bg-white p-8 shadow rounded">
                <div class="mb-4">
                  <label for="name" class="form-label">Nama</label>
                  <input id="name" type="text" v-model="form.name" class="form-input" />
                  <span v-if="errors.name" class="text-red-500">{{ errors.name }}</span>
                </div>
  
                <div class="mb-4">
                  <label for="birthPlace" class="form-label">Tempat Lahir</label>
                  <input id="birthPlace" type="text" v-model="form.birthPlace" class="form-input" />
                  <span v-if="errors.birthPlace" class="text-red-500">{{ errors.birthPlace }}</span>
                </div>
  
                <div class="mb-4">
                  <label for="birthDate" class="form-label">Tanggal Lahir</label>
                  <input id="birthDate" type="date" v-model="form.birthDate" class="form-input" />
                  <span v-if="errors.birthDate" class="text-red-500">{{ errors.birthDate }}</span>
                </div>
  
                <div class="mb-4">
                  <label for="gender" class="form-label">Jenis Kelamin</label>
                  <select id="gender" v-model="form.gender" class="form-input">
                    <option value="male">Laki-Laki</option>
                    <option value="female">Perempuan</option>
                  </select>
                  <span v-if="errors.gender" class="text-red-500">{{ errors.gender }}</span>
                </div>
  
                <div class="mb-4">
                  <label for="address" class="form-label">Alamat</label>
                  <input id="address" type="text" v-model="form.address" class="form-input" />
                  <span v-if="errors.address" class="text-red-500">{{ errors.address }}</span>
                </div>
  
                <div class="mb-4">
                  <label for="religion" class="form-label">Agama</label>
                  <input id="religion" type="text" v-model="form.religion" class="form-input" />
                  <span v-if="errors.religion" class="text-red-500">{{ errors.religion }}</span>
                </div>
  
                <div class="mb-4">
                  <label for="maritalStatus" class="form-label">Status Perkawinan</label>
                  <select id="maritalStatus" v-model="form.maritalStatus" class="form-input">
                    <option value="single">Belum Kawin</option>
                    <option value="married">Kawin</option>
                    <option value="divorced">Cerai</option>
                  </select>
                  <span v-if="errors.maritalStatus" class="text-red-500">{{ errors.maritalStatus }}</span>
                </div>
  
                <div class="mb-4">
                  <label for="householdCount" class="form-label">Jumlah KK</label>
                  <input id="householdCount" type="number" v-model="form.householdCount" class="form-input" />
                  <span v-if="errors.householdCount" class="text-red-500">{{ errors.householdCount }}</span>
                </div>
  
                <div v-for="(member, index) in form.familyMembers" :key="index" class="mb-4">
                  <h3 class="form-label">Anggota Keluarga {{ index + 1 }}</h3>
                  <input type="text" v-model="member.name" placeholder="Nama" class="form-input mb-2" />
                  <input type="date" v-model="member.birthDate" placeholder="Tanggal Lahir" class="form-input mb-2" />
                <input type="text" v-model="member.relation" placeholder="Hubungan" class="form-input" />
                <span v-if="errors.familyMembers && errors.familyMembers[index]" class="text-red-500">{{ errors.familyMembers[index] }}</span>
              </div>

              <div class="flex justify-between">
                <button type="button" @click="addFamilyMember" class="btn-primary">Tambah Anggota Keluarga</button>
                <button type="submit" class="btn-primary">Simpan</button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();

const form = reactive({
  name: "",
  birthPlace: "",
  birthDate: "",
  gender: "male",
  address: "",
  religion: "",
  maritalStatus: "single",
  householdCount: 1,
  familyMembers: [
    { name: "", birthDate: "", relation: "" }
  ],
});

const errors = reactive({});
const qrCodeUrl = ref("");

const addFamilyMember = () => {
  if (form.familyMembers.length < form.householdCount) {
    form.familyMembers.push({ name: "", birthDate: "", relation: "" });
  } else {
    alert(`Jumlah anggota keluarga tidak boleh melebihi ${form.householdCount}`);
  }
};

const handleSubmit = async () => {
  errors.value = {};
  try {
    const response = await fetch('https://www.demo-ta.my.id/api/warga', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    if (!response.ok) {
      const errorData = await response.json();
      if (errorData.errors) {
        Object.assign(errors, errorData.errors);
      }
      throw new Error('Error in response');
    }

    const data = await response.json();
    qrCodeUrl.value = `https://www.demo-ta.my.id/storage/${data.qr_code}`;
    alert("Data warga berhasil disimpan!");
  } catch (error) {
    console.error('Error:', error);
    alert("Terjadi kesalahan saat menyimpan data.");
  }
};
</script>

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

                 
  