<template>
  <div id="Libri">
    <div class="TitoloPagina">
      <h1>Libri</h1>
    </div>

    <div id="Grid">
      <!-- Non Arrendersi Mai -->
      <div class="LibriList LibriListNonArrendersiMai">
        <h2>{{ NonArrendesiMai.Titolo }}</h2>

        <div
          class="Carta"

          :class="{ Girata: LibriGirate.NonArrendesiMai }"
          @click="GiraLibro('NonArrendesiMai')"
        >
          <div class="CartaInterno">
            <!-- Fronte -->
            <div class="CartaFaccia CartaFronte">
              <img :src="CopertinaNonArrendesiMai.href" alt="Copertina Non Arrendersi Mai" />
            </div>

            <!-- Retro -->
            <div class="CartaFaccia" id="NonArrendesiMai">
              <div v-html="NonArrendesiMai.Descrizione"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- La Strada Verso Me -->
      <div class="LibriList LibriListLaStradaVersoMe">
        <h2>{{ LaStradaVersoMe.Titolo }}</h2>
        <div
          class="Carta"
          :class="{ Girata: LibriGirate.LaStradaVersoMe }"
          @click="GiraLibro('LaStradaVersoMe')"
        >
          <div class="CartaInterno">
            <!-- Fronte -->
            <div class="CartaFaccia CartaFronte">
              <img :src="CopertinaLaStradaVersoMe.href" alt="Copertina La Strada Verso Me" />
            </div>

            <!-- Retro -->
            <div class="CartaFaccia" id="LaStradaVersoMe">
              <div v-html="LaStradaVersoMe.Descrizione"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { Libri_ts } from '@/Vetrina/assets/config/Libri'

const { NonArrendesiMai, LaStradaVersoMe, CopertinaNonArrendesiMai, CopertinaLaStradaVersoMe } =
  Libri_ts

type Libro = 'NonArrendesiMai' | 'LaStradaVersoMe'

const LibriGirate = reactive<Record<Libro, boolean>>({
  NonArrendesiMai: false,
  LaStradaVersoMe: false,
})

function GiraLibro(Libro: Libro) {
  LibriGirate[Libro] = !LibriGirate[Libro]
}
</script>
