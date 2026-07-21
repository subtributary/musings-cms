<script setup lang="ts">
import { Willow } from '@svar-ui/vue-filemanager'
import '@svar-ui/vue-filemanager/all.css'
import FileManager from '@/components/FileManager.vue'
import BusyIndicator from '@/components/BusyIndicator.vue'
</script>

<template>
  <main>
    <Suspense>
      <Willow>
        <FileManager />
      </Willow>
      <template #fallback>
        <BusyIndicator />
      </template>
    </Suspense>
  </main>
</template>

<style scoped></style>
