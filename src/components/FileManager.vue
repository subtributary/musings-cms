<script setup lang="ts">
import { Filemanager, Willow } from '@svar-ui/vue-filemanager'
import { RestDataProvider } from '@svar-ui/filemanager-data-provider'

const restProvider = new RestDataProvider(import.meta.env.VITE_API_URL)
const data = await restProvider.loadFiles('/')
</script>

<template>
  <Willow>
    <Filemanager :data="data" />
  </Willow>
</template>
