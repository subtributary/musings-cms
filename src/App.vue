<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import IconIndex from '@/components/icons/IconIndex.vue'
import IconFiles from '@/components/icons/IconFiles.vue'
import IconGear from '@/components/icons/IconGear.vue'
</script>

<template>
  <nav>
    <RouterLink to="/">
      <IconIndex />
      Index
    </RouterLink>
    <RouterLink to="/files">
      <IconFiles />
      Files
    </RouterLink>
    <RouterLink to="/config">
      <IconGear />
      Config
    </RouterLink>
  </nav>

  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
