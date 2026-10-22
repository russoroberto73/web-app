<template>
  <div id="MenuPagina">
    <ul id="Mobile">
      <li v-for="(link, index) in MenuLinks" :key="index" :class="LinkCorrente === link.Path ? link.Attivo : ''">
        <router-link :to="{ name: link.Nome }">
          <IconeMenu :Nome="link.Nome" :Sfondo="link.Nome === 'PlayList' ? '#fff' : link.Sfondo" :ViewBox="link.ViewBox"
            :Class="link.Class" />
        </router-link>
      </li>
    </ul>
    <ul id="Desktop">
      <li v-for="(link, index) in Links" :key="index" :class="LinkCorrente === link.Path ? link.Attivo : ''">
        <router-link :to="{ name: link.Nome }" :class="link.ml">
          <span />
          <div class="Etichetta" v-html="link.Etichetta" />
          <div class="Icona">
            <IconeMenu :Nome="link.Nome" :Sfondo="link.Nome === 'PlayList' ? '#fff' : link.Sfondo"
              :ViewBox="link.ViewBox" :Class="link.Class" />
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { IconeMenu, MenuLinks, Links, LinkCorrente, Inizializza } from '@/Vetrina/assets/config/MenuApp/MenuApp'
  Inizializza()
</script>
