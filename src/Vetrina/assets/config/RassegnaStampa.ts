import { ref, computed } from 'vue'
import { Pinia } from '@/Vetrina/storesVetrina/TabellaFirebse'
import RassegnaStampaFinestraModaleArticolo from '@/Vetrina/views/RassegnaStampa/components/RassegnaStampaFinestraModale/RassegnaStampaFinestraModale.vue'
import { MeseDaNumeroANome } from '@/assets/helpers/helpers'

export const FinestraModale = ref(false)
export const Articolo = computed(() => {
  return { ...objArticolo.value }
})
export const objArticolo = ref<TypeArticolo>()

const BTNApriFinestraModale = (Articolo: TypeArticolo | undefined) => {
  if (Articolo) {
    objArticolo.value = { ...Articolo }
  }
  FinestraModale.value = true
}

type TypeArticolo = {
  Id: string
  Data: string
  Anno: string
  Titolo: string
  Img: string
  Fonte: string
  Estrapolazioni: string
}
type TypeArrayArticoli = Array<TypeArticolo>
type TypeArray = Array<{
  Anno: string
  Articoli: TypeArrayArticoli
}>

 const ArrayArticoli = computed(() => {
  let tmp: TypeArrayArticoli = [
    {
      Id: '0',
      Anno: '',
      Titolo: '',
      Data: '',
      Img: '',
      Fonte: '',
      Estrapolazioni: '',
    },
  ]
  let obj: TypeArticolo
  const tutto: TypeArray = []

  let data: string
  let anno: string
  let annoprec = ''
  let mese: string
   let giorno: string
   const FirebaseRassegnaStampa = Pinia.Esperimento('articoli')
   const elencoArticoli = JSON.parse(JSON.stringify(FirebaseRassegnaStampa().getElenco))
   elencoArticoli.forEach((item: TypeArticolo) => {
    obj = JSON.parse(JSON.stringify(item))
    data = item.Data
    anno = data.substr(6, 4)
    mese = data.substr(3, 2)
    giorno = data.substr(0, 2)
    const nomemese = MeseDaNumeroANome.value(mese)
    if (annoprec !== anno) {
      tmp.push({
        Id: obj.Id,
        Titolo: obj.Titolo,
        Img:  new URL(`/src/Vetrina/views/RassegnaStampa/Immagini/${obj.Img}.jpg`, import.meta.url).href,
        Data: giorno + ' ' + nomemese + ' ' + anno,
        Anno: anno,
        Fonte: obj.Fonte,
        Estrapolazioni: obj.Estrapolazioni,
      })
      tmp.splice(0, 1)
      tutto.push({ Anno: anno, Articoli: tmp })
      tmp = []
    }
    tmp.push({
      Id: obj.Id,
      Titolo: obj.Titolo,
      Img: new URL(`/src/Vetrina/views/RassegnaStampa/Immagini/${item.Img}.jpg`, import.meta.url).href,
      Data: giorno + ' ' + nomemese + ' ' + anno,
      Anno: anno,
      Fonte: obj.Fonte,
      Estrapolazioni: obj.Estrapolazioni,
    })
    annoprec = anno
  })
  tutto.splice(0, 1)
  return tutto
 })
import "@/Vetrina/assets/styles/RassegnaStampa.css"
export const RassegnaStampa_ts = {
  ArrayArticoli,
  Articolo,
  FinestraModale,
  BTNApriFinestraModale,
  RassegnaStampaFinestraModaleArticolo
}
import ChiudiFinestraModale from '@/assets/svg/img.vue'


  const ComponiImmagine = (img: string) => {
    return new URL(img, import.meta.url).href
  }
const BTNChiudiFinestraModale = (emit: (event: 'chiudi') => void) => {
  emit('chiudi')
}

export const ChiudiFinestraModale_ts = {
  ChiudiFinestraModale,
  ComponiImmagine,
  BTNChiudiFinestraModale
}
