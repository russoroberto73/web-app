<template>
  <div id="RassegnaStampaFinestraModaleArticolo">
    <div class="fixed inset-0 flex items-center justify-center mt-[20px]">
      <div id="FinestaModaleOpacity"></div>
      <div id="BackgroundFinestraModale">
        <h1 class="p-3">
          {{ props.Articolo.Titolo }}
        </h1>
        <div id="DivChiudi">
          <button type="button" id="Chiudi">
            <ChiudiFinestraModale
              @click="BTNChiudiFinestraModale(emit)"
              Nome="Chiudi"
              fill="#fff"
              Sfondo="none"
              viewBox="0 0 512 512"
              height="100"
              class="w-9 h-9"
            />
          </button>
        </div>
        <div id="Box">
          {{ props.Articolo.Data }}
          <img :src="ComponiImmagine(props.Articolo.Img)" /><br />
          {{ props.Articolo.Fonte }}<br />
          <span class="float-left mr-5">
            <ChiudiFinestraModale
              Nome="Virgolette"
              Class="w-9 h-9"
              viewBox="0 0 349 349"
              Sfondo="#ffb912"
            />
          </span>
          <span>{{ props.Articolo.Estrapolazioni }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  chiudi: []
}>()
const props = defineProps(['Articolo'])
import { ChiudiFinestraModale_ts } from '@/Vetrina/assets/config/RassegnaStampa.ts'
const { ChiudiFinestraModale, ComponiImmagine, BTNChiudiFinestraModale } = ChiudiFinestraModale_ts

</script>
