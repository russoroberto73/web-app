<template>
  <div id="MassMedia">
    <div class="TitoloPagina">
      <h1>Mass Media</h1>
    </div>
    <div class="grid grid-cols-3 w-[235px] md:w-[650px] desktop:w-[900px] gap-5 m-auto">
      <p class="col-span-3 text-white">
        Nel 2018 sono riuscito a portare la mia esperienza grazie al mio libro, alla giornata della
        disabilità organizzata dalla consulta ogni anno. Tramite il mio lavoro alla Fondazione Links
        che è un centro di ricerca del Politecnico di Torino ho attivato con la collaborazione
        dell’associazione “Pedagogia dei genitori” e con una ragazza autistica laureata in lettera,
        un progetto sulla lotta contro la dispersione scolastica, attraverso la nostra esperienza di
        vita nelle scuola e nel mondo del lavoro. Qui di seguito si possono vedere i video della
        Giornata della disabilità e i video del
        <a href="http://hawking.linksfoundation.com/" target="_blank" class="underline font-bold"
          >progetto Hawking.</a
        >
      </p>
      <iframe
        src="https://www.youtube.com/embed/uiqOFTELS88"
        title="YouTube video player"
        frameborder="0"
        allow="
          accelerometer;
          autoplay;
          clipboard-write;
          encrypted-media;
          gyroscope;
          picture-in-picture;
          web-share;
        "
        allowfullscreen
        class="video"
      ></iframe>
      <iframe
        src="https://www.youtube.com/embed/S9C4lfo0PmY"
        title="YouTube video player"
        frameborder="0"
        allow="
          accelerometer;
          autoplay;
          clipboard-write;
          encrypted-media;
          gyroscope;
          picture-in-picture;
          web-share;
        "
        allowfullscreen
        class="video"
      ></iframe>
      <iframe
        src="https://www.youtube.com/embed/n2cpHdKIuKU"
        title="YouTube video player"
        frameborder="0"
        allow="
          accelerometer;
          autoplay;
          clipboard-write;
          encrypted-media;
          gyroscope;
          picture-in-picture;
          web-share;
        "
        allowfullscreen
        class="video"
      ></iframe>
      <video
        class="col-span-3"
        controls
        id="divxplayer"
        type="video/mp3"
        :src="ilPostoGiustoVideo"
        style="display: flex; width: 50%; margin: 0 auto"
      ></video>
    </div>
  </div>
</template>
<script lang="ts" setup>
import ilPostoGiustoVideo from '@/Vetrina/views/MassMedia/video/il_posto_giusto.mp4'
</script>
