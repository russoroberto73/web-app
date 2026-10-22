<template>
  <div id="TestBreakpoint">{{ width }}</div>
  <div id="Pagina">
    <Menu />
    <router-view />
  </div>
</template>
<script setup lang="ts">
  import { Menu, width, Inizializza } from '@/Vetrina/assets/config/App'
  Inizializza()
</script>
