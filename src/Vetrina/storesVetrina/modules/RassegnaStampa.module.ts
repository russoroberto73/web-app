import { defineStore } from 'pinia'
import { useCrud } from '../../servicesVetrina/Services'

const crud = useCrud('articoli')

type TypeElemento = {
  [key: string]: unknown
}

export const RassegnaStampa = defineStore('RassegnaStampa', {
  state: () => ({
    Collezione: [] as TypeElemento[],
  }),
  getters: {
    getElenco: (state) => {
      return state.Collezione
    },
  },
  actions: {
    async Elenco() {
      this.Collezione = await crud.Elenco()
    }/*,
    async Aggiungi(elemento: TypeElemento) {
      const nuovo = await crud.Aggiungi(elemento)

      if (nuovo) {
        this.Collezione.push(nuovo)
      }
    },
    async Aggiorna(elemento: TypeElemento) {
      const aggiornato = await crud.Aggiorna(elemento)
      if (aggiornato) {
        const index = this.Collezione.findIndex((x) => x.Id === aggiornato.Id)
        if (index !== -1) {
          this.Collezione[index] = aggiornato
        }
      }
    },
    async Elimina(id: string) {
      if (await crud.Elimina(id)) {
        this.Collezione = this.Collezione.filter((x) => x.Id !== id)
      }
    }*/
  }
})
