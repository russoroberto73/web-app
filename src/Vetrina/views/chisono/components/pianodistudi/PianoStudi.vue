<template>
  <div id="PianoStudi">
    <div class="hidden desktop:block">
      <div class="grid grid-cols-4">
      <div class="col-span-4 mb-4">
      {{ Descrizione }}</div>
        <div class="flex justify-end h-[400px] row-span-2">
          <span class="h-[0px] text-center">
            <img src="./Immagini/diploma.jpg" />
            <p class="text-center">{{ DidascaliaDiploma }}</p>
          </span>
        </div>
        <div class="col-span-2">
          <table class="w-[90%] m-auto">
            <tr>
              <th>Data</th>
              <th>Esame</th>
              <th>Voto</th>
            </tr>
            <tr
              v-for="(esame, index) in FiltraEsami"
              :key="index"
              class="even:bg-gray-300 odd:bg-gray-400"
            >
              <td>
                {{ esame.data }}
              </td>
              <td>
                {{ esame.esame }}
              </td>
              <td class="text-center">
                {{ esame.voto }}
              </td>
            </tr>
          </table>
          <div>
            <div
              id="Anni"
              class="flex grid grid-cols-3 gap-10 pt-6"
              style="margin: 0 auto; width: fit-content"
            >
              <button
                class="border rounded-full"
                @click="CambiaPagina(1)"
                :style="[Anno === 1 ? { background: '#ffb912', color: 'black' } : '']"
              >
                1
              </button>
              <button
                class="border rounded-full"
                @click="CambiaPagina(2)"
                :style="[Anno === 2 ? { background: '#ffb912', color: 'black' } : '']"
              >
                2
              </button>
              <button
                class="border rounded-full"
                @click="CambiaPagina(3)"
                :style="[Anno === 3 ? { background: '#ffb912', color: 'black' } : '']"
              >
                3
              </button>
            </div>
          </div>
        </div>
        <div class="">
          <img src="./Immagini/proclamazione.jpg" />
        </div>
      </div>
    </div>
    <div class="hidden mobile:block">
      <div class="grid grid-cols-2">
        <div class="flex justify-center">
          <img src="./Immagini/diploma.jpg" />
        </div>
        <div class="mr-9">
          <img src="./Immagini/proclamazione.jpg" />
        </div>
        <div class="col-span-2 mt-5">
          <table class="w-[90%] m-auto">
            <tr>
              <th>Data</th>
              <th>Esame</th>
              <th>Voto</th>
            </tr>
            <tr
              v-for="(esame, index) in FiltraEsami"
              :key="index"
              class="even:bg-gray-300 odd:bg-gray-400"
            >
              <td>
                {{ esame.data }}
              </td>
              <td>
                {{ esame.esame }}
              </td>
              <td class="text-center">
                {{ esame.voto }}
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { PianoStudi_ts } from '@/Vetrina/assets/config/ChiSono'
const { Anno, Descrizione, DidascaliaDiploma, CambiaPagina, FiltraEsami } = PianoStudi_ts
</script>
