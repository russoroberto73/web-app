<template>
  <div id="handiphoneideatore">
    <div class="Grid">
      <div class="lg:row-span-2">
        <img :src="FotoRoby" class="hidden lg:block" />
        <img :src="FotoSmartphone" class="lg:hidden" />
      </div>
      <div id="IngInf">
        Ingegneria<br />
        informatica<br />
        <div id="Lavoro">Lavoro</div>
      </div>
      <div id="Esperienza">Esperienza</div>
      <div id="Pensiero">
        <span>Pen</span>
        <span>sie</span>
        <span>ro</span>
      </div>
      <div id="Descrizione" v-html="HandiphoneIdeareTesto"></div>
      <div id="handiphonemenu">
      <router-link class="rounded-[45px] m-auto ml-[0px];" :to="{ name: 'HandiphoneDescrizione' }"
        >Descrizione</router-link
      >
      <router-link class="rounded-[45px] m-auto ml-[0px];" :to="{ name: 'HandiphoneSpecifiche' }"
        >Specifiche&nbsp;tecniche</router-link
      >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HandiphoneIdeatore_ts } from '@/Vetrina/assets/config/Handiphone'
const { HandiphoneIdeareTesto, FotoRoby, FotoSmartphone } = HandiphoneIdeatore_ts
</script>
