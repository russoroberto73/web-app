<script setup lang="ts">
  import { Tabella } from '@/Test/stores/Tabella.module'
  import { onMounted } from 'vue'
  const store = Tabella()
  onMounted(() => {
    store.Elenco()
  })
</script>

<template>
  <h1 class="text-2xl font-bold text-center">App Test</h1>
  <router-view />
</template>
