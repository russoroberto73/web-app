<template>
  <div id="Homepage">
    <div id="Desktop">
      <div id="Cornice" />
      <div class="Foto" :style="{ backgroundImage: `url(${FotoDesktop})` }" />
      <div id="Body">
        <div id="Citazione">
          <div>
            <Virgolette Nome="Virgolette" viewBox="0 0 349 349" height="300" Class="w-11 h-11" Sfondo="#F4C95D" />
            {{ Citazione }}
          </div>
        </div>
        <div>
          <h1>{{ Titolo }}</h1>
          <h2>{{ SottoTitolo }}</h2>
          <p>{{ Presentazione }}</p>
          <div id="DivBottonePagina">
            <BottoneMenu titolo="Curriculum" @click="FinestraModale = true" />
          </div>
        </div>
      </div>
    </div>
    <div id="Mobile">
      <div class="Foto" :style="{ backgroundImage: `url(${FotoMobile})` }" />
      <h1>{{ Titolo }}</h1>
      <h2>{{ SottoTitolo }}</h2>
      <p>{{ Presentazione }}</p>
      <div id="DivBottonePagina">
        <BottoneMenu titolo="Curriculum" @click="FinestraModale = true" />
      </div>
      <div id="Citazione">
        <span>
          <Virgolette Nome="Virgolette" Class="w-9 h-9" viewBox="0 0 349 349" Sfondo="#F4C95D" />
        </span>
        <span>{{ Citazione }}</span>
      </div>
    </div>
    <ComponenteFinestraModale v-if="FinestraModale" @chiudi="FinestraModale = false" />
  </div>
</template>
<script setup lang="ts">
  import {
    Titolo,
    SottoTitolo,
    Citazione,
    Presentazione,
    FotoMobile,
    FotoDesktop,
    Virgolette,
    BottoneMenu,
    FinestraModale,
    ComponenteFinestraModale
  } from '@/Vetrina/assets/config/Homepage'
</script>
