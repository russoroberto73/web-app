<template>
  <div id="Playlist">
  <div class="TitoloPagina">
    <h1>{{ Titolo }}</h1>
  </div>
    <div id="Grid">
      <div v-for="(video, index) in Youtube" :key="index" class="videoyoutube">
        <a :href="Link(index)" target="_blank"
          ><img :src="Costruisci_img(index)" style="width: 235px"
        /></a>
        <div
          class="TestoPagine text-Testo"
          v-html="video.descrizione1 + '<br>' + video.descrizione2"
        ></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Titolo, Youtube, Link, Costruisci_img } from '@/Vetrina/assets/config/Playlist'
</script>
