<template>
    <div>
      <AppHeader />
      <div class="flex overflow-hidden bg-white pt-16">
        <SidebarAdmin />
        <div
          id="main-content"
          class="h-full w-full bg-gray-50 relative overflow-y-auto sm:ml-64 p-8"
        >
          <div
            class="max-w-140 rounded p-8 text-center transition"
            :class="dragClasses"
            @drop.prevent="dropHandler"
            @dragover.prevent="dragClasses = 'bg-blue-100 shadow'"
            @dragleave.prevent="dragClasses = ''"
          >
          <div class="mb-12">
            <p class="text-lg font-semibold text-gray-700">Scan Result:</p>
            <div v-if="text" class="mt-4 p-4 bg-white rounded-lg shadow-md">
              <div v-for="(line, index) in text.split('\n')" :key="index" class="text-left text-gray-700">
                {{ line }}
              </div>
            </div>
            <p v-else class="text-gray-500">No result available. Scan or upload a QR code to see the result here.</p>
          </div>
  
            <div class="rounded-lg shadow-lg bg-white p-4">
              <div
                v-if="cams && cams.length > 1"
                class="flex place-content-center items-center p-2 text-sm"
              >
                <label for="cams">
                  <CameraIcon />
                </label>
                <select
                  class="ml-2 mr-6 p-2 rounded bg-transparent hover:bg-gray-100 hover:shadow transition"
                  v-model="activeCamId"
                  name="cams"
                  id="cams"
                >
                  <option v-for="c in cams" :value="c.id">{{ c.label }}</option>
                </select>
                <FlashButton
                  v-if="hasFlash"
                  @toggle="(state) => toggleFlash(state)"
                />
              </div>
  
              <video
                v-if="hasCamera"
                ref="videoElement"
                class="w-full rounded-lg mb-4"
              ></video>
  
              <div class="flex h-full">
                <label
                  for="image"
                  class="flex h-full w-full cursor-pointer place-content-center gap-2 bg-blue-500 text-white p-4 font-bold rounded-lg transition hover:bg-blue-600"
                >
                  <UploadIcon />
                  <span class="-md:text-sm">Drop or click to upload image</span>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  class="hidden"
                  id="image"
                  @change="upload"
                />
              </div>
            </div>
  
            <p v-if="errorText && !text" class="mt-4 text-sm text-red-500">
              {{ errorText }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, watch } from "vue";
  import { decrypt } from "~/utils/crypto"; // Import decrypt function
  
  definePageMeta({
    middleware: ["auth", "role"],
    colorMode: "light",
  });
  
  const videoElement = ref<HTMLVideoElement | null>(null);
  const text = ref<string>("");
  const errorText = ref<string>("");
  const hasCamera = ref<boolean>(true);
  const hasFlash = ref<boolean>(false);
  const dragClasses = ref<string>("");
  const cams = ref<any[]>([]);
  const activeCamId = ref<string>("");
  let qrScanner: any;
  
  // Watcher untuk aktifkan kamera
  watch(activeCamId, async (id) => {
    if (qrScanner) {
      await qrScanner.setCamera(id);
    }
  });
  
  watch(text, () => navigator.vibrate(150));
  
  onMounted(async () => {
    try {
      const QrScanner = (await import("qr-scanner")).default;
      hasCamera.value = await QrScanner.hasCamera();
  
      if (hasCamera.value) {
        cams.value = await QrScanner.listCameras(true);
        qrScanner = new QrScanner(
          videoElement.value!,
          (r: any) => handleScan(r.data),
          {
            onDecodeError: (error: any) => decodeError(error),
            returnDetailedScanResult: true,
            highlightScanRegion: true,
            highlightCodeOutline: true,
          }
        );
  
        await qrScanner.start();
        hasFlash.value = await qrScanner.hasFlash();
        activeCamId.value = cams.value[cams.value.length - 1]?.id || "";
      } else {
        decodeError("No camera found");
      }
    } catch (error) {
      decodeError(
        error instanceof Error ? error : new Error("QR Scanner failed to load")
      );
    }
  });
  
  async function handleScan(scannedData) {
    try {
        console.log("Scanned Data:", scannedData); // Log scanned data
        
        // Pastikan data yang dipindai adalah URL
        if (scannedData.startsWith('http')) {
            // Redirect ke URL yang ada di dalam QR code
            window.location.href = scannedData;
        } else {
            text.value = "Invalid QR code content.";
        }
    } catch (error) {
        console.error("Error handling scan:", error);
        text.value = "Failed to process QR code.";
    }
}


  
  function isValidFormat(data) {
    return data.includes("Nama:"); // Implement your validation logic
  }
  
  function decodeError(error: Error | string) {
    console.error(error);
    errorText.value = error instanceof Error ? error.message : error;
  }
  
  function toggleFlash(state: boolean) {
    state ? qrScanner.turnFlashOn() : qrScanner.turnFlashOff();
  }
  
  async function upload(e: Event, fileInput: File | null) {
    text.value = "";
    const file = fileInput
      ? fileInput
      : (e.target as HTMLInputElement).files?.[0];
    if (file) {
      try {
        const QrScanner = (await import("qr-scanner")).default;
        const scannedData = (
          await QrScanner.scanImage(file, { returnDetailedScanResult: true })
        ).data;
        handleScan(scannedData);
      } catch (error: any) {
        decodeError(
          error instanceof Error ? error : new Error("Image scan failed")
        );
      }
    }
  }
  
  function dropHandler(e: DragEvent) {
    dragClasses.value = "";
  
    if (e.dataTransfer?.items[0]) {
      if (e.dataTransfer.items[0].kind === "file") {
        upload(e, e.dataTransfer.items[0].getAsFile());
      }
    }
  }
  
  onUnmounted(() => {
    if (qrScanner) {
      qrScanner.destroy();
    }
  });
  </script>
  