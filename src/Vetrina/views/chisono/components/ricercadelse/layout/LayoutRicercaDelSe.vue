<template>
  <div class="layout">
    <img :src="immagine" />
    <p v-for="(paragrafo, index) in paragrafi" :key="index" v-html="paragrafo"></p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  paragrafi: string[]
  immagine: string
}

  defineProps<Props>()
import '@/assets/styles/main.css';
</script>

