import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { useCrud } from '../servicesVetrina/Services'

type TypeElemento = {
  [key: string]: unknown
}
const Esp = (tabella: string) => {
  const Esperimento = defineStore('Esperimento' + tabella, () => {
    const crud = useCrud(tabella)

    const Collezione = ref<TypeElemento[]>([])

    const getElenco = computed(() => Collezione.value)

    async function Elenco() {
      Collezione.value = await crud.Elenco()
    }

    async function Aggiungi(elemento: TypeElemento) {
      const nuovo = await crud.Aggiungi(elemento)

      if (nuovo) {
        Collezione.value.push(nuovo)
      }
    }

    async function Aggiorna(elemento: TypeElemento) {
      const aggiornato = await crud.Aggiorna(elemento)

      if (aggiornato) {
        const index = Collezione.value.findIndex((x) => x.Id === aggiornato.Id)

        if (index !== -1) {
          Collezione.value[index] = aggiornato
        }
      }
    }

    async function Elimina(id: string) {
      if (await crud.Elimina(id)) {
        Collezione.value = Collezione.value.filter((x) => x.Id !== id)
      }
    }

    return {
      Collezione,
      getElenco,
      Elenco,
      Aggiungi,
      Aggiorna,
      Elimina,
    }
  })
  return Esperimento
}
export const Pinia = { Esperimento: Esp }
