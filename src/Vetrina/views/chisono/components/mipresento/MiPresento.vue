<template>
  <div id="MiPresento">
    <div class="w-[100%] m-auto">
      <div id="GalleriaFoto">
        <div v-for="(foto, index) in ArrayFoto" :key="index">
          <img :src="foto" />
        </div>
      </div>
      <div id="TestoFoto">
        <img :src="Mauro" />
        <p v-for="(paragrafo, index) in Paragrafi" :key="index">
          {{ paragrafo }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { MiPresento_ts } from '@/Vetrina/assets/config/ChiSono'
const { Paragrafi, ArrayFoto, Mauro } = MiPresento_ts
</script>
