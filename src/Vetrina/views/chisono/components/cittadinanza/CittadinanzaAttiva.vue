<template>

  <div class="m-auto flex justify-center pb-5">
    <img src="./Immagini/tg3.jpg" class="w-[200px]" />
  </div>
  <div class="float-left">
    {{ Testo1 }}
  </div>
  <div>
    {{ Testo2 }}
  </div>
</template>
<script setup lang="ts">
import "./styles/CittadinanzaAttiva.css";
  import { Testo1, Testo2 } from "./config"
</script>


