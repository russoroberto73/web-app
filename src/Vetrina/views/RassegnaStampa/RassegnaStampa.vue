<template>
  <div id="RassegnaStampa">
    <div class="TitoloPagina">
      <h1>Rassegna Stampa</h1>
    </div>
    <div class="RassegnaStampaContainer">
    <div v-for="(anni, index) in ArrayArticoli" :key="index" class="Box">
      <h3 class="col-span-2 m-4">Anno {{ anni.Anno }}</h3>
      <div v-if="anni.Articoli.length === 1" class="col-span-2 m-auto">
        <div
          class="bg-IconaMenuSfondo m-2 p-2 pt-5 desktop:w-[400px]"
          @click="BTNApriFinestraModale(anni.Articoli[0])"
        >
          <img :src="anni.Articoli[0]?.Img" />
          <div class="text-Testo flex justify-center">
            {{ anni.Articoli[0]?.Data }} - {{ anni.Articoli[0]?.Fonte }}
          </div>
        </div>
      </div>
      <template v-else v-for="(item, index) in anni.Articoli" :key="index">
        <div
          v-if="anni.Articoli.length === index + 1 && (index + 1) % 2 != 0"
          @click="BTNApriFinestraModale(item)"
          class="bg-MenuSfondo p-2 col-span-2 m-auto"
        >
          <img :src="item.Img" /><br />
          <div class="text-Testo flex justify-center">{{ item.Data }} - {{ item.Fonte }}</div>
        </div>
        <div
          class="bg-MenuSfondo m-2 p-2 pt-5 self-center"
          v-else
          @click="BTNApriFinestraModale(item)"
        >
          <img :src="item.Img" /><br />
          <div class="text-Testo flex justify-center">{{ item.Data }} - {{ item.Fonte }}</div>
        </div>
      </template>
    </div>
    <RassegnaStampaFinestraModaleArticolo
      :Articolo="Articolo"
      v-if="FinestraModale"
      @chiudi="FinestraModale = false"
    />
    </div>
  </div>
</template>
<script setup lang="ts">
import { RassegnaStampa_ts } from '@/Vetrina/assets/config/RassegnaStampa.ts'
const {
  ArrayArticoli,
  Articolo,
  FinestraModale,
  BTNApriFinestraModale,
  RassegnaStampaFinestraModaleArticolo,
} = RassegnaStampa_ts
</script>
