import { ref, computed, type Ref } from 'vue'

type Elemento = {
  [key: string]: unknown
}

export function useTable(collezione: Ref<Elemento[]>) {
  const filtro = ref('')
  const campoOrdinamento = ref('')
  const ordine = ref<'asc' | 'desc'>('asc')
  const elenco = computed(() => {
    let risultato = [...collezione.value]
      // FILTRO
    if (filtro.value) {
      const testo = filtro.value.toLowerCase()
      risultato = risultato.filter(elemento =>
        Object.values(elemento).some(valore =>
          String(valore).toLowerCase().includes(testo)
        )
      )
    }
    // ORDINAMENTO
    if (campoOrdinamento.value) {
      risultato.sort((a, b) => {
        const valoreA: string | number = a[campoOrdinamento.value] as string | number
        const valoreB: string | number = b[campoOrdinamento.value] as string | number
        if (valoreA === valoreB) return 0
        const confronto = valoreA > valoreB ? 1 : -1
        return ordine.value === 'asc'
          ? confronto
          : -confronto
      })
    }
    return risultato
  })
  function ordina(campo: string) {
    if (campoOrdinamento.value === campo) {
      ordine.value =
        ordine.value === 'asc' ? 'desc' : 'asc'
    } else {
      campoOrdinamento.value = campo
      ordine.value = 'asc'
    }
  }
  return {
    filtro,
    campoOrdinamento,
    ordine,
    elenco,
    ordina
  }
}
