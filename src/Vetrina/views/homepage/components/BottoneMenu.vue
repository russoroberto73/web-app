```vue
<template>
  <div id="boxBottone">
    <span id="SpanBottone" />
    <span id="SpanEtichetta">
      {{ EtichettaCurriculum }}
    </span>
    <div id="DivFreccia">
      <SvgFreccia Nome="Freccia" viewBox="0 0 24 24" Class="w-11 h-11" />
    </div>
  </div>
</template>
<script setup lang="ts">
  import { EtichettaCurriculum, SvgFreccia } from '@/Vetrina/assets/config/BottoneMenu'
</script>
