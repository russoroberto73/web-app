<template>
  <div id="CalendarioFilosofico">
    <div class="TitoloPagina">
      <h1>Calendario filosofico</h1>
    </div>
    <div id="body">
      <div class="grid grid-cols-[50px_1fr_50px]">
        <div><button @click="Precedente" class="precedente"><</button></div>
        <div class="slider">
          <div class="slides" :style="{ transform: `translateX(-${indice * 100}%)` }">
            <img
              v-for="(img, index) in ArrayImgMesi"
              :key="index"
              :src="img"
              alt="Immagine del mese"
            />
          </div>
        </div>
        <div>
          <button @click="Successiva" class="successiva">></button>
        </div>
      </div>
      <div
        v-for="(item, index) in FrasiDelMeseAnno({
          Anno: String($route.params.anno ?? ''),
          Mese: String($route.params.mese ?? ''),
        })"
        :key="index"
      >
        <div class="Giorno">
          {{ String(item.Data).substring(0, 2) }}
        </div>
        <div class="Frase">
          {{ item.Frase }}
        </div>
        <div class="Firma">
          {{ item.Firma }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  FrasiDelMeseAnno,
  ArrayImgMesi,
  indice,
  Successiva,
  Precedente,
  Inizializza,
} from '@/Vetrina/assets/config/CalendarioFilosofico'
Inizializza()
</script>
