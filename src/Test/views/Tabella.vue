<template>
  <input v-model="filtro" /><br /><br />
  <button @click="ordina('Campo2')">aas</button><br />
  <Rtable :items="Items" :pinia="store" IdTabella="Tabella1" />
</template>
<script setup lang="ts">
  import { computed } from 'vue'
  import { storeToRefs } from 'pinia'
  import { Tabella } from '@/Test/stores/Tabella.module'
  import { useTable } from '@/components/ComponenteTabella/composables/useTable'
  const store = Tabella()
  const { getElenco: Dati } = storeToRefs(store)
  const { elenco, filtro, ordina } = useTable(Dati)
  const ProssimoElemento = {
    Id: {
      Type: 'string',
      Value: '-1',
      Prossimo: '0'
    },
    Campo1: {
      Type: 'string',
      Value: 'Tabella vuota',
      Prossimo: '',
      Filtro: true,
    },
    Campo2: {
      Type: 'string',
      Value: 'Tabella vuota',
      Prossimo: '',
      Filtro: true,
    },
    Campo3: {
      Type: 'date',
      Value: 'Tabella vuota',
      Prossimo: new Date()
    }
  }
  const Items = computed(() => {
    if (elenco.value.length === 0) {
      return [ProssimoElemento]
    } else {
      const array = elenco.value.map((item) => {
        return {
          Id: {
            Type: 'string',
            Value: item.Id
          },
          Campo1: {
            Etichetta: 'Etichetta Campo 1',
            Type: 'string',
            Value: item.Campo1,
            Valido: true
          },
          Campo2: {
            Etichetta: 'Etichetta Campo 2',
            Type: 'string',
            Value: item.Campo2,
            Valido: true
          },
          Campo3: {
            Type: 'date',
            Value: item.Campo3,
            Valido: true
          }
        }
      })
      return array
    }
  })

</script>
<style lang="scss" scoped></style>
