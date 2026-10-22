<template>
  <div id="FinestraModale">
    <div class="hidden desktop:block">
      <div class="fixed inset-0 flex items-center justify-center">
        <div id="FinestaModaleOpacity"></div>
        <div id="BackgroundFinestraModale">
          <h3>IL MIO CURRICULUM</h3>
          <div id="DivChiudi">
            <button type="button" id="Chiudi" class="cursor-pointer">
              <ChiudiFinestraModale
                Nome="Chiudi"
                fill="#fff"
                Sfondo="none"
                viewBox="0 0 512 512"
                class="w-9 h-9"
                @click="BTNChiudiFinestraModale(emit)"
              />
            </button>
          </div>
          <div class="grid grid-cols-2">
            <span>
              <InformazioniPersonali />
            </span>
            <span id="Risultati">
              <Risultati />
            </span>
          </div>
          <div class="StudiLavoro">
            <h3 class="mb-4">PERCORSO DI STUDI & ESPERIENZE LAVORATIVE</h3>
            <div class="grid grid-cols-2">
              <span>
                <Studi />
              </span>
              <span>
                <Esperienze />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden mobile:block">
      <div class="fixed inset-0 flex justify-center">
        <div id="FinestaModaleOpacity"></div>
        <div id="BackgroundFinestraModale">
          <h3>IL MIO CURRICULUM</h3>
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
          <div id="Info">
            <InformazioniPersonali />
          </div>
          <div id="Risultati">
            <Risultati />
          </div>
          <div class="StudiLavoro">
            <h3>PERCORSO DI STUDI</h3>
            <Studi />
            <h3>ESPERIENZE LAVORATIVE</h3>
              <Esperienze />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Risultati,
  Studi,
  Esperienze,
  ChiudiFinestraModale,
  BTNChiudiFinestraModale,
  InformazioniPersonali,
} from '@/Vetrina/assets/config/FinestraModaleCurriculum'

const emit = defineEmits<{
  chiudi: []
}>()
</script>
