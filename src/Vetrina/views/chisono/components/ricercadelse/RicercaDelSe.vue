<template>
  <div id="RicercaDelSe">
    <LayoutPagina
      v-if="SottoPagina === 'home' || SottoPagina === 'ricercadelse'"
      :paragrafi="RicercaDelSe_ts.Home.Paragrafi"
      :immagine="RicercaDelSe_ts.Home.Immagine"
    />
    <LayoutPagina
      v-if="SottoPagina === 'la-spirale'"
      :paragrafi="RicercaDelSe_ts.LaSpirale.Paragrafi"
      :immagine="RicercaDelSe_ts.LaSpirale.Immagine"
    />
    <LayoutPagina
      v-if="SottoPagina === 'la-mia-spirale'"
      :paragrafi="RicercaDelSe_ts.LaMiaSpirale.Paragrafi"
      :immagine="RicercaDelSe_ts.LaMiaSpirale.Immagine"
    />
    <LayoutPagina
      v-if="SottoPagina === 'numerologia'"
      :paragrafi="RicercaDelSe_ts.Numerologia.Paragrafi"
      :immagine="RicercaDelSe_ts.Numerologia.Immagine"
    />
  </div>
</template>
<script setup lang="ts">
import { RicercaDelSe_ts } from '@/Vetrina/assets/config/ChiSono'
import LayoutPagina from '@/Vetrina/views/chisono/components/ricercadelse/layout/LayoutRicercaDelSe.vue'

const { SottoPagina, RicercaDelSeInizializza } = RicercaDelSe_ts
RicercaDelSeInizializza()
</script>
