// Vetrina -> Homepage
import { ref } from 'vue'
import { Pinia } from '@/Vetrina/storesVetrina/TabellaFirebse'

import Menu from '@/Vetrina/views/App/components/menu.vue'
import '@/Vetrina/assets/styles/App.css'

const FirebaseRassegnaStampa = Pinia.Esperimento('articoli')
const FirebasePianoStudi = Pinia.Esperimento('esami')
const FirebaseCalendarioFilosofico = Pinia.Esperimento('calendariofilosofico')

const width = ref('')
const AggiornaWidth = () => {
  let screen = 'xs(0 - 480) smartphone'
  if (window.innerWidth > 480) {
    screen = 'sm(481 - 640) tablet verticale'
  }
  if (window.innerWidth > 640) {
    screen = 'md(641 - 768) tablet orizzontale'
  }
  if (window.innerWidth > 768) {
    screen = 'lg(769 - 1024) desktop stretto'
  }
  if (window.innerWidth > 1024) {
    screen = 'xl(1025 - 1280) desktop'
  }
  if (window.innerWidth > 1530) {
    screen = '2xl(1281 - 1530) desktop largo'
  }
  if (window.innerWidth > 2999) {
    screen = '3xl(1530 - 3000) desktop extra largo'
  }
  if (window.innerWidth > 3000) {
    screen = '4xl(3000) desktop larghissimo'
  }
  width.value = window.innerWidth + ' ' + screen
}
const Inizializza = () => {
  FirebaseRassegnaStampa().Elenco().then(() => {
    FirebasePianoStudi().Elenco().then(() => {
      FirebaseCalendarioFilosofico().Elenco()
    })
  })
}

AggiornaWidth()
window.addEventListener('resize', AggiornaWidth)

export { Menu, width, Inizializza }
