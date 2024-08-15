<script setup>

import { onMounted } from 'vue'
import { useFlowbite } from '~/composables/useFlowbite';

// initialize components based on data attribute selectors
onMounted(() => {
    useFlowbite(() => {
        initFlowbite();
    })
})
</script>
<template>
  
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

