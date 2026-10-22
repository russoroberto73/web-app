import { ref } from 'vue'
import FotoDesktop from '@/Vetrina/views/homepage/immagini/HomepageDesktop.jpg'
import FotoMobile from '@/Vetrina/views/homepage/immagini/HomepageMobile.jpg'
import Virgolette from '@/assets/svg/img.vue'
import BottoneMenu from '@/Vetrina/views/homepage/components/BottoneMenu.vue'
import ComponenteFinestraModale from '@/Vetrina/views/homepage/components/FinestraModaleCurriculum.vue'
import "@/Vetrina/assets/styles/Homepage.css"

const FinestraModale = ref(false)
const Titolo = 'Roberto Russo'
const SottoTitolo = 'Sviluppatore'
const Citazione = `Non ci si libera del proprio handicap, così come non ci si libera dall'essere nero: è la
propria identità ed è a partire da questa identità che si può vincere la propria lotta
...`
const Presentazione = `Ho frequentato l'Istituto Magistrale D. Berti e successivamente il Politecnico di
Torino.
Attualmente sono impiegato presso la Fondazione Links, dove mi sono specializzato nella
realizzazione di pagine web. Negli ultimi anni ho voluto aggiornarmi sui nuovi linguaggi della
programmazione per la costruzione di web-app sia Frontend che Backend.
`

export {
  FinestraModale,
  Titolo,
  SottoTitolo,
  Citazione,
  Presentazione,
  FotoDesktop,
  FotoMobile,
  Virgolette,
  BottoneMenu,
  ComponenteFinestraModale
}
