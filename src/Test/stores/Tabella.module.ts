import { defineStore } from 'pinia'
import { useCrud } from '@/components/ComponenteTabella/services/Tabella.services'

const crud = useCrud('tabella1')

type TypeElemento = {
  [key: string]: unknown
}

export const Tabella = defineStore('tabella', {
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
    },
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
    },
  },
})
