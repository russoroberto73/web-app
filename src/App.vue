<script setup lang="ts">
  import VetrinaApp from './Vetrina/views/App/AppVetrina.vue'
  import TestApp from './AppTest.vue'

  const Hostname = window.location.hostname
</script>

<template>
  <VetrinaApp v-if="Hostname === 'new.russoroberto73.it'" />
  <TestApp v-else-if="Hostname === 'test.russoroberto73.it'" />
  <main v-else class="app-fallback">
    <h1>You did it!</h1>
    <p>Welcome to the app.</p>
  </main>
</template>
