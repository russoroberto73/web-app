<template>
  <div id="handiphonespecifiche">
    <div class="text-left flex flex-col mb-[60px] mx-4">
      <div class="desktop:w-[900px] m-auto mobile-xs:mt-[-70px]">
        <div>
          <h2>{{ AltaTecologia.Titolo }}</h2>
          <p v-html="AltaTecologia.Descrizione"></p>
        </div>
        <div class="text-right">
          <h2>{{ AltaCompatibilita.Titolo }}</h2>
          <p class="text-right" v-html="AltaCompatibilita.Descrizione">
          </p>
        </div>
        <div>
          <h2>{{ AltaPersonalizzazione.Titolo }}</h2>
          <div class="text-left">
            <p id="AltaPersonalizzazione" v-html="AltaPersonalizzazione.Descrizione ">
            </p>
          </div>
        </div>
        <div id="handiphonemenu">
          <router-link class="rounded-[45px] m-auto ml-[0px];" :to="{ name: 'HandiphoneIdeatore' }">L'ideatore</router-link>
          <router-link :to="{ name: 'HandiphoneDescrizione' }">Descrizione</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { HandiphoneSpecifiche_ts } from '@/Vetrina/assets/config/Handiphone'
const { AltaTecologia, AltaCompatibilita, AltaPersonalizzazione } = HandiphoneSpecifiche_ts
</script>
