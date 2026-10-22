<template>
  <div id="handiphonedescrizione">
    <div id="Testo" v-html="DescrizioneTesto"></div>

      <div id="handiphonemenu">
        <router-link class="rounded-[45px] m-auto ml-[0px];" :to="{ name: 'HandiphoneIdeatore' }"
          >Ideatore</router-link
        >
        <router-link
          class="px-3 w-[fit-content] rounded-[45px] m-auto;"
          :to="{ name: 'HandiphoneSpecifiche' }"
          >Specifiche&nbsp;tecniche</router-link
        >
      </div>
  </div>
</template>

<script setup lang="ts">
  import { HandiphoneDescrizione_ts } from '@/Vetrina/assets/config/Handiphone'
  const { DescrizioneTesto } = HandiphoneDescrizione_ts;
</script>
