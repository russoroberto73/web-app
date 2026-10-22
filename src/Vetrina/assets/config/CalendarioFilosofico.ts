import { ref, computed, onMounted } from 'vue'
import router from '@/router'

import { Pinia } from '@/Vetrina/storesVetrina/TabellaFirebse'
//const DataCorrente = new Date()
//const Anno = ref(String(DataCorrente.getFullYear()))
//const Mese = ref(String(DataCorrente.getMonth() + 1).padStart(2, '0'))

const Frasi = Pinia.Esperimento('calendariofilosofico')

const Gennaio = new URL(
  '/src/Vetrina/views/CalendarioFilosofico/Immagini/01_gennaio.png',
  import.meta.url,
).href
const Febbraio = new URL(
  '/src/Vetrina/views/CalendarioFilosofico/Immagini/02_febbraio.png',
  import.meta.url,
).href
const Marzo = new URL(
  '/src/Vetrina/views/CalendarioFilosofico/Immagini/03_marzo.png',
  import.meta.url,
).href
const Aprile = new URL(
  '/src/Vetrina/views/CalendarioFilosofico/Immagini/04_aprile.png',
  import.meta.url,
).href
const Maggio = new URL(
  '/src/Vetrina/views/CalendarioFilosofico/Immagini/05_maggio.png',
  import.meta.url,
).href
const Giugno = new URL(
  '/src/Vetrina/views/CalendarioFilosofico/Immagini/06_giugno.png',
  import.meta.url,
).href
const Luglio = new URL(
  '/src/Vetrina/views/CalendarioFilosofico/Immagini/07_luglio.png',
  import.meta.url,
).href
const Agosto = new URL(
  '/src/Vetrina/views/CalendarioFilosofico/Immagini/08_agosto.png',
  import.meta.url,
).href
const Settembre = new URL(
  '/src/Vetrina/views/CalendarioFilosofico/Immagini/09_settembre.png',
  import.meta.url,
).href
const Ottobre = new URL(
  '/src/Vetrina/views/CalendarioFilosofico/Immagini/10_ottobre.png',
  import.meta.url,
).href
const Novembre = new URL(
  '/src/Vetrina/views/CalendarioFilosofico/Immagini/11_novembre.png',
  import.meta.url,
).href
const Dicembre = new URL(
  '/src/Vetrina/views/CalendarioFilosofico/Immagini/12_dicembre.png',
  import.meta.url,
).href
const ArrayImgMesi = [
  Gennaio,
  Febbraio,
  Marzo,
  Aprile,
  Maggio,
  Giugno,
  Luglio,
  Agosto,
  Settembre,
  Ottobre,
  Novembre,
  Dicembre,
]
type TpeFrase = {
  Data: string
  Frase: string
  Firma: string
}
const Anni = computed(() => {
  return new Set(Frasi().getElenco.map((item) => (item as TpeFrase).Data.substring(6, 10)))
})

const FrasiDelMeseAnno = computed(() => {
  return (annomese: { Anno: string; Mese: string }) => {
    return Frasi().getElenco.filter((item) => {
      const frase = item as TpeFrase
      return (
        Number(frase.Data.substring(3, 5)) === Number(annomese.Mese) &&
        Number(frase.Data.substring(6, 10)) === Number(annomese.Anno)
      )
    })
  }
})
const indice = ref(0)

const Successiva = () => {
  if (indice.value < ArrayImgMesi.length - 1) {
    indice.value++
  }
}

const Precedente = () => {
  if (indice.value > 0) {
    indice.value--
  }
}

const Inizializza = () => {
  onMounted(() => {
    console.log('Inizializza CalendarioFilosofico')
    router.push({
      name: 'CalendarioFilosofico',
      params: {
        anno: Number(String(new Date().getFullYear())),
        mese: Number(String(new Date().getMonth() + 1).padStart(2, '0'),)
      },
    })
  })
}
import '@/Vetrina/assets/styles/CalendarioFilosofico.css'

export { Frasi, ArrayImgMesi, Anni, FrasiDelMeseAnno, indice, Successiva, Precedente, Inizializza }
