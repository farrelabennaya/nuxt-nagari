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
            <div
              class="bg-white rounded-lg shadow-sm p-6 flex justify-between items-center relative overflow-x-auto ml-5 mr-5 mt-5 mb-5"
            >
              <div>
                <h2 class="text-xl font-bold text-gray-800">Penduduk</h2>
                <p class="text-gray-500">Data Penduduk</p>
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

          <!-- Statistic Cards -->
          <div
            class="grid grid-cols-1 md:grid-cols-4 gap-6 relative overflow-x-auto ml-5 mr-5"
          >
            <div
              class="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5"
            >
              <div class="flex flex-row items-center">
                <div class="flex-shrink pr-4">
                  <div class="rounded-full p-5 bg-green-600">
                    <i class="fa-solid fa-2x fa-user fa-inverse"></i>
                  </div>
                </div>
                <div class="flex-1 text-right md:text-center">
                  <h2 class="font-bold uppercase text-gray-600">
                    Jumlah Kepala Keluarga
                  </h2>
                  <p class="font-bold text-3xl">{{ jumlahKepalaKeluarga }}</p>
                </div>
              </div>
            </div>
            <div
              class="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5"
            >
              <div class="flex flex-row items-center">
                <div class="flex-shrink pr-4">
                  <div class="rounded-full p-5 bg-pink-600">
                    <i class="fas fa-users fa-2x fa-inverse"></i>
                  </div>
                </div>
                <div class="flex-1 text-right md:text-center">
                  <h2 class="font-bold uppercase text-gray-600">
                    Jumlah Penduduk
                  </h2>
                  <p class="font-bold text-3xl">{{ jumlahPenduduk }}</p>
                </div>
              </div>
            </div>
            <div
              class="bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5"
            >
              <div class="flex flex-row items-center">
                <div class="flex-shrink pr-4">
                  <div class="rounded-full p-5 bg-yellow-600">
                    <i class="fa-solid fa-person fa-2x fa-inverse"></i>
                  </div>
                </div>
                <div class="flex-1 text-right md:text-center">
                  <h2 class="font-bold uppercase text-gray-600">
                    Jumlah Laki-laki
                  </h2>
                  <p class="font-bold text-3xl">{{ jumlahLakiLaki }}</p>
                </div>
              </div>
            </div>
            <div
              class="bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-500 rounded-lg shadow-xl p-5"
            >
              <div class="flex flex-row items-center">
                <div class="flex-shrink pr-4">
                  <div class="rounded-full p-5 bg-blue-600">
                    <i class="fa-solid fa-2x fa-inverse fa-person-dress"></i>
                  </div>
                </div>
                <div class="flex-1 text-right md:text-center">
                  <h2 class="font-bold uppercase text-gray-600">
                    Jumlah Perempuan
                  </h2>
                  <p class="font-bold text-3xl">{{ jumlahPerempuan }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="min-h-screen relative overflow-x-auto ml-5 mr-5 -mt-32 p-6 pb-32 pt-5"
        >
          <div class="flex justify-between items-center mb-4">
            <!-- Bagian Filter sebagai Dropdown -->
            <div class="relative">
              <!-- Tombol untuk membuka dan menutup dropdown -->
              <button
                @click="toggleDropdown"
                class="flex items-center py-2 px-4 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200"
              >
                Filter
                <svg
                  class="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              <!-- Dropdown Menu -->
              <div
                v-if="isDropdownOpen"
                class="absolute z-10 mt-2 w-max bg-white border border-gray-300 rounded-lg shadow-lg p-6 grid grid-cols-2 gap-4"
              >
                <div class="col-span-2">
                  <button
                    @click="clearFilter"
                    class="w-full bg-red-500 text-white font-medium rounded-lg px-4 py-2 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
                  >
                    Clear Filter
                  </button>
                </div>
                <!-- Filter Usia -->
                <div class="mb-4">
                  <label
                    for="usia-filter"
                    class="block text-sm font-medium text-gray-700"
                    >Usia</label
                  >
                  <select
                    id="usia-filter"
                    v-model="selectedUsiaRange"
                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option value="">Semua Usia</option>
                    <option value="child">
                      Anak-anak (Kurang dari setahun-12)
                    </option>
                    <option value="teenager">Remaja (13-19)</option>
                    <option value="adult">Dewasa (20-59)</option>
                    <option value="elderly">Lansia (60+)</option>
                  </select>
                </div>

                <!-- Filter Agama -->
                <div class="mb-4">
                  <label
                    for="agama-filter"
                    class="block text-sm font-medium text-gray-700"
                    >Agama</label
                  >
                  <select
                    id="agama-filter"
                    v-model="selectedAgama"
                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option value="">Semua Agama</option>
                    <option value="Islam">Islam</option>
                    <option value="Kristen">Kristen</option>
                    <option value="Katolik">Katolik</option>
                    <option value="Hindu">Hindu</option>
                    <option value="Buddha">Buddha</option>
                    <option value="Khonghucu">Khonghucu</option>
                  </select>
                </div>

                <!-- Filter Jenis Kelamin -->
                <div class="mb-4">
                  <label
                    for="gender-filter"
                    class="block text-sm font-medium text-gray-700"
                    >Jenis Kelamin</label
                  >
                  <select
                    id="gender-filter"
                    v-model="selectedJenisKelamin"
                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option value="">Semua Jenis Kelamin</option>
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                </div>

                <!-- Filter Pendidikan -->
                <div class="mb-4">
                  <label
                    for="pendidikan-filter"
                    class="block text-sm font-medium text-gray-700"
                    >Pendidikan</label
                  >
                  <select
                    id="pendidikan-filter"
                    v-model="selectedPendidikan"
                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option value="">Semua Pendidikan</option>
                    <option value="TIDAK / BELUM SEKOLAH">
                      TIDAK / BELUM SEKOLAH
                    </option>
                    <option value="TAMAT SD / SEDERAJAT">
                      TAMAT SD / SEDERAJAT
                    </option>
                    <option value="SLTA / SEDERAJAT">SLTA / SEDERAJAT</option>
                    <option value="SLTP/SEDERAJAT">SLTP/SEDERAJAT</option>
                    <option value="BELUM TAMAT SD/SEDERAJAT">
                      BELUM TAMAT SD/SEDERAJAT
                    </option>
                    <option value="DIPLOMA IV/ STRATA I">
                      DIPLOMA IV/ STRATA I
                    </option>
                    <option value="DIPLOMA I / II">DIPLOMA I / II</option>
                    <option value="AKADEMI/ DIPLOMA III/S. MUDA">
                      AKADEMI/ DIPLOMA III/S. MUDA
                    </option>
                    <option value="STRATA II">STRATA II</option>
                    <option value="STRATA III">STRATA III</option>
                  </select>
                </div>

                <!-- Filter Pekerjaan -->
                <div class="mb-4">
                  <label
                    for="pekerjaan-filter"
                    class="block text-sm font-medium text-gray-700"
                    >Pekerjaan</label
                  >
                  <select
                    id="pekerjaan-filter"
                    v-model="selectedPekerjaan"
                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option value="">Semua Pekerjaan</option>
                    <option value="Belum Ditentukan">Belum Ditentukan</option>
                    <option value="Belum/Tidak Bekerja">
                      Belum/Tidak Bekerja
                    </option>
                    <option value="Pelajar/Mahasiswa">Pelajar/Mahasiswa</option>
                    <option value="Mengurus Rumah Tangga">
                      Mengurus Rumah Tangga
                    </option>
                    <option value="Buruh Harian Lepas">
                      Buruh Harian Lepas
                    </option>
                    <option value="Buruh Peternakan">Buruh Peternakan</option>
                    <option value="Buruh Tani/Perkebunan">
                      Buruh Tani/Perkebunan
                    </option>
                    <option value="Guru">Guru</option>
                    <option value="Tentara Nasional Indonesia (TNI)">
                      Tentara Nasional Indonesia (TNI)
                    </option>
                    <option value="Kepolisian RI (POLRI)">
                      Kepolisian RI (POLRI)
                    </option>
                    <option value="Karyawan BUMD">Karyawan BUMD</option>
                    <option value="Karyawan BUMN">Karyawan BUMN</option>
                    <option value="Karyawan Honorer">Karyawan Honorer</option>
                    <option value="Karyawan Swasta">Karyawan Swasta</option>
                    <option value="Mekanik">Mekanik</option>
                    <option value="Pedagang">Pedagang</option>
                    <option value="Pegawai Negeri Sipil (PNS)">
                      Pegawai Negeri Sipil (PNS)
                    </option>
                    <option value="Pensiunan">Pensiunan</option>
                    <option value="Perancang Busana">Perancang Busana</option>
                    <option value="Perawat">Perawat</option>
                    <option value="Perdagangan">Perdagangan</option>
                    <option value="Petani/Pekebun">Petani/Pekebun</option>
                    <option value="Peternak">Peternak</option>
                    <option value="Sopir">Sopir</option>
                    <option value="Tabib">Tabib</option>
                    <option value="Transportasi">Transportasi</option>
                    <option value="Tukang Batu">Tukang Batu</option>
                    <option value="Tukang Cukur">Tukang Cukur</option>
                    <option value="Tukang Jahit">Tukang Jahit</option>
                    <option value="Tukang Kayu">Tukang Kayu</option>
                    <option value="Tukang Las/Pandai Besi">
                      Tukang Las/Pandai Besi
                    </option>
                    <option value="Wiraswasta">Wiraswasta</option>
                  </select>
                </div>

                <!-- Filter Status Perkawinan -->
                <div class="mb-4">
                  <label
                    for="status-filter"
                    class="block text-sm font-medium text-gray-700"
                    >Status Perkawinan</label
                  >
                  <select
                    id="status-filter"
                    v-model="selectedStatusPerkawinan"
                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option value="">Semua Status Perkawinan</option>
                    <option value="Belum Kawin">Belum Kawin</option>
                    <option value="Kawin">Kawin</option>
                    <option value="Cerai Hidup">Cerai Hidup</option>
                    <option value="Cerai Mati">Cerai Mati</option>
                  </select>
                </div>

                <!-- Filter Hubungan Keluarga -->
                <div>
                  <label
                    for="hubungan-filter"
                    class="block text-sm font-medium text-gray-700"
                    >Hubungan Keluarga</label
                  >
                  <select
                    id="hubungan-filter"
                    v-model="selectedHubunganKeluarga"
                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option value="">Semua Hubungan Keluarga</option>
                    <option value="Belum Ditentukan">Belum Ditentukan</option>
                    <option value="Kepala Keluarga">Kepala Keluarga</option>
                    <option value="Istri">Istri</option>
                    <option value="Anak">Anak</option>
                    <option value="Orang Tua">Orang Tua</option>
                    <option value="Menantu">Menantu</option>
                    <option value="Mertua">Mertua</option>
                    <option value="Cucu">Cucu</option>
                    <option value="Famili Lain">Famili Lain</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Bagian Search -->
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
                    placeholder="Cari Penduduk..."
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
          <div
            class="relative p-6 bg-white shadow-lg rounded-lg border border-transparent"
            style="
              box-shadow: 0 2px 16px rgba(0, 0, 0, 0.1),
                0 4px 6px rgba(0, 0, 0, 0);
            "
          >
            <div class="overflow-x-auto bg-white shadow-md rounded-lg">
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
                        @click="sortData('nama')"
                        class="flex items-center uppercase"
                      >
                        Nama
                        <svg
                          v-if="
                            sortConditions.find(
                              (c) => c.field === 'nama' && c.direction === 'asc'
                            )
                          "
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-4 h-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 15l7-7 7 7"
                          />
                        </svg>
                        <svg
                          v-if="
                            sortConditions.find(
                              (c) =>
                                c.field === 'nama' && c.direction === 'desc'
                            )
                          "
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-4 h-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </th>
                    <th scope="col" class="px-6 py-3">NIK</th>
                    <th scope="col" class="px-6 py-3">Tempat Lahir</th>
                    <th scope="col" class="px-6 py-3">Tanggal Lahir</th>
                    <th scope="col" class="px-6 py-3">
                      <button
                        @click="sortData('tanggal_lahir')"
                        class="flex items-center uppercase"
                      >
                        Usia
                        <svg
                          v-if="
                            sortConditions.find(
                              (c) =>
                                c.field === 'tanggal_lahir' &&
                                c.direction === 'asc'
                            )
                          "
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-4 h-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 15l7-7 7 7"
                          />
                        </svg>
                        <svg
                          v-if="
                            sortConditions.find(
                              (c) =>
                                c.field === 'tanggal_lahir' &&
                                c.direction === 'desc'
                            )
                          "
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-4 h-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </th>
                    <th scope="col" class="px-6 py-3">Agama</th>
                    <th scope="col" class="px-6 py-3">
                      <button
                        @click="sortData('jenis_kelamin')"
                        class="flex items-center uppercase"
                      >
                        Jenis Kelamin
                        <svg
                          v-if="
                            sortConditions.find(
                              (c) =>
                                c.field === 'jenis_kelamin' &&
                                c.direction === 'asc'
                            )
                          "
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-4 h-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 15l7-7 7 7"
                          />
                        </svg>
                        <svg
                          v-if="
                            sortConditions.find(
                              (c) =>
                                c.field === 'jenis_kelamin' &&
                                c.direction === 'desc'
                            )
                          "
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-4 h-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </th>
                    <th scope="col" class="px-6 py-3">Pendidikan</th>
                    <th scope="col" class="px-6 py-3">Pekerjaan</th>
                    <th scope="col" class="px-6 py-3">
                      <button
                        @click="sortData('nama_ayah')"
                        class="flex items-center uppercase"
                      >
                        Nama Ayah
                        <svg
                          v-if="
                            sortConditions.find(
                              (c) =>
                                c.field === 'nama_ayah' && c.direction === 'asc'
                            )
                          "
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-4 h-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 15l7-7 7 7"
                          />
                        </svg>
                        <svg
                          v-if="
                            sortConditions.find(
                              (c) =>
                                c.field === 'nama_ayah' &&
                                c.direction === 'desc'
                            )
                          "
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-4 h-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </th>
                    <th scope="col" class="px-6 py-3">
                      <button
                        @click="sortData('nama_ibu')"
                        class="flex items-center uppercase"
                      >
                        Nama Ibu
                        <svg
                          v-if="
                            sortConditions.find(
                              (c) =>
                                c.field === 'nama_ibu' && c.direction === 'asc'
                            )
                          "
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-4 h-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 15l7-7 7 7"
                          />
                        </svg>
                        <svg
                          v-if="
                            sortConditions.find(
                              (c) =>
                                c.field === 'nama_ibu' && c.direction === 'desc'
                            )
                          "
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-4 h-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </th>
                    <th scope="col" class="px-6 py-3">Status Perkawinan</th>
                    <th scope="col" class="px-6 py-3">Hubungan Keluarga</th>
                    <th scope="col" class="px-6 py-3 flex justify-center">
                      Aksi
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr
                    v-for="(anggota, index) in paginatedKeluargaList"
                    :key="anggota.id"
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {{ index + 1 + (currentPage - 1) * itemsPerPage }}
                    </th>
                    <td class="px-6 py-4">{{ anggota.nama }}</td>
                    <td class="px-6 py-4">{{ anggota.nik }}</td>
                    <td class="px-6 py-4">{{ anggota.tempat_lahir }}</td>
                    <td class="px-6 py-4">{{ anggota.tanggal_lahir }}</td>
                    <td class="px-6 py-4">
                      {{ calculateAge(anggota.tanggal_lahir).formattedAge }}
                    </td>
                    <td class="px-6 py-4">{{ anggota.agama }}</td>
                    <td class="px-6 py-4">{{ anggota.jenis_kelamin }}</td>
                    <td class="px-6 py-4">{{ anggota.pendidikan }}</td>
                    <td class="px-6 py-4">{{ anggota.pekerjaan }}</td>
                    <td class="px-6 py-4">{{ anggota.nama_ayah }}</td>
                    <td class="px-6 py-4">{{ anggota.nama_ibu }}</td>
                    <td class="px-6 py-4">{{ anggota.status_perkawinan }}</td>
                    <td class="px-6 py-4">{{ anggota.hubungan_keluarga }}</td>
                    <td class="flex justify-center items-center">
                      <button
                        @click="openEditModal(anggota)"
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
                        @click="confirmDeleteAnggota(anggota.id)"
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
            </div>

           <!-- Pagination Component -->
      <div class="flex flex-col lg:flex-row justify-between mt-4">
        <div class="flex flex-col lg:flex-row items-center space-x-2 text-xs">
          <button
            class="py-2 px-4 bg-white text-gray-600 font-medium rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center"
          >
            {{ itemsPerPage }} items
          </button>
          <p class="text-gray-500 mt-4 lg:mt-0">
            Showing {{ (currentPage - 1) * itemsPerPage + 1 }} to
            {{ Math.min(currentPage * itemsPerPage, filteredAnggotaKeluarga.length) }}
            of {{ filteredAnggotaKeluarga.length }} entries
          </p>
        </div>

        <!-- Pagination Navigation -->
        <nav aria-label="Pagination" class="flex justify-center items-center text-gray-600 mt-8 lg:mt-0">
          <a
            href="#"
            @click.prevent="changePage(currentPage - 1)"
            :class="{ 'pointer-events-none opacity-50': currentPage === 1 }"
            class="p-2 mr-4 rounded hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
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
            :class="{ 'pointer-events-none opacity-50': currentPage === totalPages }"
            class="p-2 ml-4 rounded hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </nav>
      </div>
    
        
      
            
          </div>
        </div>

        <!-- Edit Modal -->
        <div
          v-if="isEditModalOpen"
          class="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-75"
        >
          <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
            <h3 class="text-xl font-semibold mb-4">Edit Anggota Keluarga</h3>
            <form @submit.prevent="editAnggotaKeluarga">
              <div class="mb-4">
                <label
                  for="edit-nama"
                  class="block text-sm font-medium text-gray-700"
                  >Nama</label
                >
                <input
                  id="edit-nama"
                  v-model="editForm.nama"
                  type="text"
                  class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-2"
                />
                <span v-if="errors.nama" class="text-red-500">{{
                  errors.nama[0]
                }}</span>
              </div>
              <!-- Add other fields here as needed -->
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
                Hapus Anggota Keluarga
              </h4>
              <p class="text-sm text-gray-600 mt-4">
                Apakah anda yakin menghapus anggota keluarga ini? Data yang
                dihapus akan hilang.
              </p>
            </div>
            <div class="flex flex-col space-y-2">
              <button
                type="button"
                @click="deleteAnggotaKeluarga"
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
    const anggotaKeluargaList = ref([]);
    const searchQuery = ref("");
    const sortConditions = ref([]);
    const sortField = ref("");
    const sortDirection = ref("default");
    const isEditModalOpen = ref(false);
    const isDeleteModalOpen = ref(false);

    const currentPage = ref(1); // Current page number
    const itemsPerPage = ref(10); // Number of items per page

    // State untuk filter
    const selectedUsiaRange = ref("");
    const selectedAgama = ref("");
    const selectedJenisKelamin = ref("");
    const selectedPendidikan = ref("");
    const selectedPekerjaan = ref("");
    const selectedStatusPerkawinan = ref("");
    const selectedHubunganKeluarga = ref("");
    const isDropdownOpen = ref(false);

    // Fungsi sortir
    const sortData = (field) => {
      const existingCondition = sortConditions.value.find(
        (condition) => condition.field === field
      );

      if (existingCondition) {
        // Toggle direction
        if (existingCondition.direction === "asc") {
          existingCondition.direction = "desc";
        } else if (existingCondition.direction === "desc") {
          sortConditions.value = sortConditions.value.filter(
            (condition) => condition.field !== field
          );
        } else {
          existingCondition.direction = "asc";
        }
      } else {
        // Tambahkan kondisi sortir baru
        sortConditions.value.push({ field, direction: "asc" });
      }

      applySorting();
    };

    const applySorting = () => {
      anggotaKeluargaList.value.sort((a, b) => {
        for (let condition of sortConditions.value) {
          const field = condition.field;
          const direction = condition.direction;

          let valA = a[field].toString().toLowerCase();
          let valB = b[field].toString().toLowerCase();

          if (valA < valB) {
            return direction === "asc" ? -1 : 1;
          } else if (valA > valB) {
            return direction === "asc" ? 1 : -1;
          }
        }
        return 0;
      });
    };

    // Hitung jumlah halaman
    const totalPages = computed(() => {
      return Math.ceil(filteredAnggotaKeluarga.value.length / itemsPerPage.value);
    });

    // Method untuk mengubah halaman
    const changePage = (page) => {
      if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
      }
    };

    // Method untuk menampilkan data berdasarkan halaman saat ini
    const paginatedKeluargaList = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return filteredAnggotaKeluarga.value.slice(start, end);
    });

    const toggleDropdown = () => {
      isDropdownOpen.value = !isDropdownOpen.value;
    };

    const editForm = reactive({
      id: "",
      nama: "",
      nik: "",
      tempat_lahir: "",
      tanggal_lahir: "",
      agama: "",
      jenis_kelamin: "",
      pendidikan: "",
      pekerjaan: "",
      nama_ayah: "",
      nama_ibu: "",
      status_perkawinan: "",
      hubungan_keluarga: "",
    });
    const errors = ref([]);
    const isLoading = ref(false);
    const notification = reactive({
      message: "",
      show: false,
    });

    // Hitung jumlah kepala keluarga
    const jumlahKepalaKeluarga = computed(() => {
      return anggotaKeluargaList.value.filter(
        (anggota) => anggota.hubungan_keluarga === "Kepala Keluarga"
      ).length;
    });

    // Hitung jumlah penduduk
    const jumlahPenduduk = computed(() => {
      return anggotaKeluargaList.value.length;
    });

    // Hitung jumlah laki-laki
    const jumlahLakiLaki = computed(() => {
      return anggotaKeluargaList.value.filter(
        (anggota) => anggota.jenis_kelamin === "Laki-laki"
      ).length;
    });

    // Hitung jumlah perempuan
    const jumlahPerempuan = computed(() => {
      return anggotaKeluargaList.value.filter(
        (anggota) => anggota.jenis_kelamin === "Perempuan"
      ).length;
    });

    const clearFilter = () => {
      selectedUsiaRange.value = "";
      selectedAgama.value = "";
      selectedJenisKelamin.value = "";
      selectedPendidikan.value = "";
      selectedPekerjaan.value = "";
      selectedStatusPerkawinan.value = "";
      selectedHubunganKeluarga.value = "";
    };

    const showNotification = (message) => {
      notification.message = message;
      notification.show = true;
      setTimeout(() => {
        notification.show = false;
      }, 3000);
    };

    const calculateAge = (tanggal_lahir) => {
      if (!tanggal_lahir) return null;

      const birthDate = new Date(tanggal_lahir);
      const today = new Date();

      // Hitung perbedaan dalam tahun, bulan, dan hari
      let years = today.getFullYear() - birthDate.getFullYear();
      let months = today.getMonth() - birthDate.getMonth();
      let days = today.getDate() - birthDate.getDate();

      // Jika bulan kurang dari 0, kurangi satu tahun dan hitung ulang bulan
      if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
      }

      // Jika hari kurang dari 0, kurangi satu bulan dan hitung ulang hari
      if (days < 0) {
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
        months--;
      }

      // Format hasil untuk tampilan
      let formattedAge;
      if (years > 0) {
        formattedAge = `${years} tahun`;
      } else if (months > 0) {
        formattedAge = `${months} bulan`;
      } else {
        formattedAge = `${days} hari`;
      }

      // Kembalikan tahun dan format usia untuk tampilan
      return { years, months, days, formattedAge };
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
      fetchAnggotaKeluarga();
    });

    const openEditModal = (anggota) => {
      editForm.id = anggota.id;
      editForm.nama = anggota.nama;
      editForm.nik = anggota.nik;
      editForm.tempat_lahir = anggota.tempat_lahir;
      editForm.tanggal_lahir = anggota.tanggal_lahir;
      editForm.agama = anggota.agama;
      editForm.jenis_kelamin = anggota.jenis_kelamin;
      editForm.pendidikan = anggota.pendidikan;
      editForm.pekerjaan = anggota.pekerjaan;
      editForm.status_perkawinan = anggota.status_perkawinan;
      editForm.hubungan_keluarga = anggota.hubungan_keluarga;
      isEditModalOpen.value = true;
    };

    const editAnggotaKeluarga = async () => {
      const tokenStore = useTokenStore();
      errors.value = [];
      isLoading.value = true;
      try {
        const response = await fetch(
          `http://laravel-api.test/api/anggota_keluargas/${editForm.id}`,
          {
            method: "PUT",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${tokenStore.getToken}`,
            },
            body: JSON.stringify(editForm),
          }
        );

        const data = await response.json();
        if (!response.ok) {
          if (data.errors) {
            errors.value = data.errors;
          } else {
            throw new Error(data.message || "Gagal mengedit anggota keluarga");
          }
        } else {
          const index = anggotaKeluargaList.value.findIndex(
            (anggota) => anggota.id === editForm.id
          );
          if (index !== -1) {
            anggotaKeluargaList.value[index] = data;
          }
          isEditModalOpen.value = false;
          showNotification("Anggota keluarga berhasil diedit!");
          await fetchAnggotaKeluarga();
        }
      } catch (error) {
        console.error("Kesalahan mengedit anggota keluarga:", error);
      } finally {
        isLoading.value = false;
      }
    };

    const confirmDeleteAnggota = (id) => {
      editForm.id = id;
      isDeleteModalOpen.value = true;
    };

    const deleteAnggotaKeluarga = async () => {
      const tokenStore = useTokenStore();
      isLoading.value = true;
      try {
        const response = await fetch(
          `http://laravel-api.test/api/anggota_keluargas/${editForm.id}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${tokenStore.getToken}`,
            },
          }
        );

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.message || "Gagal menghapus anggota keluarga");
        }

        anggotaKeluargaList.value = anggotaKeluargaList.value.filter(
          (anggota) => anggota.id !== editForm.id
        );
        showNotification("Anggota keluarga berhasil dihapus!");
        isDeleteModalOpen.value = false;
      } catch (error) {
        console.error("Kesalahan menghapus anggota keluarga:", error);
      } finally {
        isLoading.value = false;
      }
    };

    // Computed property for filtered anggota keluarga list
    const filteredAnggotaKeluarga = computed(() => {
      return anggotaKeluargaList.value.filter((anggota) => {
        const age = calculateAge(anggota.tanggal_lahir); // Menghasilkan { years, formattedAge }

        // Filter berdasarkan usia
        let usiaMatch = true;
        if (selectedUsiaRange.value === "child") {
          usiaMatch = age.years <= 12; // Gunakan age.years untuk filter
        } else if (selectedUsiaRange.value === "teenager") {
          usiaMatch = age.years >= 13 && age.years <= 19;
        } else if (selectedUsiaRange.value === "adult") {
          usiaMatch = age.years >= 20 && age.years <= 59;
        } else if (selectedUsiaRange.value === "elderly") {
          usiaMatch = age.years >= 60;
        }

        // Filter berdasarkan agama
        const agamaMatch =
          selectedAgama.value === "" || anggota.agama === selectedAgama.value;

        // Filter berdasarkan jenis kelamin
        const jenisKelaminMatch =
          selectedJenisKelamin.value === "" ||
          anggota.jenis_kelamin === selectedJenisKelamin.value;

        // Filter berdasarkan pendidikan
        const pendidikanMatch =
          selectedPendidikan.value === "" ||
          anggota.pendidikan === selectedPendidikan.value;

        // Filter berdasarkan pekerjaan
        const pekerjaanMatch =
          selectedPekerjaan.value === "" ||
          anggota.pekerjaan === selectedPekerjaan.value;

        // Filter berdasarkan status perkawinan
        const statusPerkawinanMatch =
          selectedStatusPerkawinan.value === "" ||
          anggota.status_perkawinan === selectedStatusPerkawinan.value;

        // Filter berdasarkan hubungan keluarga
        const hubunganKeluargaMatch =
          selectedHubunganKeluarga.value === "" ||
          anggota.hubungan_keluarga === selectedHubunganKeluarga.value;

        // Filter berdasarkan search query (pencarian)
        const searchMatch =
          searchQuery.value === "" ||
          anggota.nama
            .toLowerCase()
            .includes(searchQuery.value.toLowerCase()) ||
          anggota.nik.toLowerCase().includes(searchQuery.value.toLowerCase());

        // Return true jika semua filter dan search match
        return (
          usiaMatch &&
          agamaMatch &&
          jenisKelaminMatch &&
          pendidikanMatch &&
          pekerjaanMatch &&
          statusPerkawinanMatch &&
          hubunganKeluargaMatch &&
          searchMatch // Tambahkan pencarian di sini
        );
      });
    });

    return {
      anggotaKeluargaList,
      searchQuery,
      sortField,
      sortDirection,
      sortData,
      sortConditions,
      filteredAnggotaKeluarga,

      currentPage,
      itemsPerPage,
      totalPages,
      paginatedKeluargaList,

      // State untuk filter
      selectedUsiaRange,
      selectedAgama,
      selectedJenisKelamin,
      selectedPendidikan,
      selectedPekerjaan,
      selectedStatusPerkawinan,
      selectedHubunganKeluarga,
      isEditModalOpen,
      isDeleteModalOpen,
      editForm,
      errors,
      isLoading,
      notification,
      openEditModal,
      confirmDeleteAnggota,
      editAnggotaKeluarga,
      deleteAnggotaKeluarga,
      calculateAge,
      isDropdownOpen,
      toggleDropdown,
      clearFilter,
      jumlahKepalaKeluarga,
      jumlahPenduduk,
      jumlahLakiLaki,
      jumlahPerempuan,
      changePage,
    };
  },
};
</script>

<style scoped>
.custom-bg-main {
  background-color: #f9fafb;
}

.custom-header {
  background-color: #adc4ce;
}
</style>
