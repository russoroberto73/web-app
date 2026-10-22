<template>
  <div id="Contatti">
    <div class="TitoloPagina">
      <h1>Contatti</h1>
    </div>
    <div class="grid grid-cols-5 desktop:w-[1200px] m-auto">
      <div class="col-span-2 ml-[20px] text-left md:m-[30px] md:text-[5.2vw] lg:text-[40px]">
        Sentiti libero di metterti in contatto con me. Mi piace sempre conoscere nuove idee per
        realizzare nuovi progetti.
      </div>
      <div class="col-span-3 row-span-4 justify-end flex ml-6 pl-3">
        <img src="@/Vetrina/views/contatti/immagini/reggia_venaria.jpg" />
      </div>
      <div>
        <span class="hidden desktop:block">
          <SvgIcone
            Nome="Maps"
            viewBox="0 0 2048 2048"
            Class="w-13 h-13"
            height="90"
            Sfondo="white"
          />
        </span>
      </div>
      <div>
        <span class="hidden desktop:block">
          <span class="opacity-75">Dove sono</span><br />Abito in provincia di Torino
        </span>
      </div>
      <div>
        <span class="hidden desktop:block">
          <SvgIcone
            Nome="Email"
            viewBox="0 0 128 128"
            Class="w-13 h-13"
            height="90"
            Sfondo="white"
          />
        </span>
      </div>
      <div>
        <span class="hidden desktop:block">
          <span class="opacity-75">E-mail</span><br />russo.roberto73@gmail.com
        </span>
      </div>
      <div>
        <span class="hidden desktop:block">
          <SvgIcone
            Nome="Telefono"
            viewBox="0 0 31 31"
            Class="w-13 h-13"
            height="90"
            Sfondo="white"
            Stroke="none"
          />
        </span>
      </div>
      <div>
        <span class="hidden desktop:block">
          <span class="opacity-75">Whatsapp</span><br />+39 349.784.3352
        </span>
      </div>
      <div class="col-span-2 row-span-3"></div>
      <div class="col-span-3 flex justify-around mt-6">
        <span>
          <SvgIcone
            Nome="Facebook"
            viewBox="0 0 512 512"
            Class="w-13 h-13"
            Sfondo="white"
            height="30"
          />
        </span>
        <SvgIcone
          Nome="Youtube"
          viewBox="0 0 512 512"
          Class="w-13 h-13"
          Sfondo="white"
          height="40"
        />
        <SvgIcone
          Nome="Instagram"
          viewBox="0 0 64 64"
          Class="w-13 h-13"
          Sfondo="white"
          height="40"
        />
      </div>
    </div>
    <div class="desktop:hidden grid grid-cols-[120px_auto] mb-[80px]">
      <div>
        <SvgIcone
          Nome="Maps"
          viewBox="0 0 2048 2048"
          Class="w-13 h-13"
          height="90"
          Sfondo="#ffb912"
          class="text-Bottoni"
        />
      </div>
      <div class="mt-6">
        <span class="opacity-75">Dove Sono</span><br />Abito in provincia di Torino
      </div>
      <div>
        <SvgIcone
          Nome="Email"
          viewBox="0 0 128 128"
          Class="w-13 h-13"
          height="90"
          Sfondo="#ffb912"
          class="text-Bottoni"
        />
      </div>
      <div><span class="opacity-75">E-mail</span><br />russo.roberto73@gmail.com</div>
      <div class="py-5">
        <SvgIcone
          Nome="Telefono"
          viewBox="0 0 31 31"
          Class="w-13 h-13"
          height="90"
          Sfondo="#ffb912"
          Stroke="none"
          class="text-Bottoni"
        />
      </div>
      <div class="py-5"><span class="opacity-75">Whatsapp</span><br />+39 349.784.3352</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import SvgIcone from '@/assets/svg/img.vue'

import '@/Vetrina/assets/styles/Contatti.css'
</script>
