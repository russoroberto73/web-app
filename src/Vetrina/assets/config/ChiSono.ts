import { ref, computed, watch, type Component, nextTick } from 'vue'
import { Pinia } from '@/Vetrina/storesVetrina/TabellaFirebse'
import { useRoute } from 'vue-router'
// Chi Sono
import MiPresento from '@/Vetrina/views/chisono/components/mipresento/MiPresento.vue'
import PianoStudi from '@/Vetrina/views/chisono/components/pianodistudi/PianoStudi.vue'
import CittadinanzaAttiva from '@/Vetrina/views/chisono/components/cittadinanza/CittadinanzaAttiva.vue'
import RicercaDelSe from '@/Vetrina/views/chisono/components/ricercadelse/RicercaDelSe.vue'
import router from '@/router/index.ts'
import '@/Vetrina/assets/styles/ChiSono.css'

const Titolo = 'Chi Sono'

interface Card {
  id: number
  label: string
  content: Component
  link: string
}

const cards: Card[] = [
  {
    id: 1,
    label: 'Mi Presento',
    content: MiPresento,
    link: 'mipresento',
  },
  {
    id: 2,
    label: 'Cittadinanza Attiva',
    content: CittadinanzaAttiva,
    link: 'cittadinanzaattiva',
  },
  {
    id: 3,
    label: 'Ricerca Del Se',
    content: RicercaDelSe,
    link: 'ricercadelse',
  },
  {
    id: 4,
    label: 'Piano Studi',
    content: PianoStudi,
    link: 'pianodistudi',
  },
]

const AltezzaMassima = ref(0)
const activeCard = ref(0)
const menuAperto = ref(false)
const links = [
  { to: 'home', label: 'Home' },
  { to: 'la-spirale', label: 'La spirale' },
  { to: 'la-mia-spirale', label: 'La mia spirale' },
  { to: 'numerologia', label: 'Numerologia' },
]

const LinkAttuale = ref('')
const bringToFront = (index: number) => {
  if (cards[index]) {
    activeCard.value = index
    LinkAttuale.value = 'home'
    router.push({ name: 'ChiSono', params: { card: cards[index].link } })
  }
}

const PagineRicercaDelSe = (link: string) => {
  router.push({ name: 'ChiSono', params: { card: 'ricercadelse', link } })
  LinkAttuale.value = link
}
const ChiSonoInizializza = async () => {
  await nextTick()
  const cards = document.querySelectorAll<HTMLElement>('.card')
  let maxHeight = 0
  cards.forEach((card) => {
    maxHeight = Math.max(maxHeight, card.offsetHeight)
  })
  document.getElementById('chi-sono')!.style.height = `${maxHeight + 200}px`
  AltezzaMassima.value = maxHeight
}

export const ChiSono_ts = {
  Titolo,
  LinkAttuale,
  cards,
  activeCard,
  menuAperto,
  bringToFront,
  PagineRicercaDelSe,
  links,
  ChiSonoInizializza,
}

////////////////////////////

// Mi Presento
const Paragrafi = [
  `Sono nato ad Imperia il 21 Giugno 1973 e abito a Rivoli (To). A
    causa di ipossia neonatale sono disabile motorio dalla nascita con
    disartria; ciò ha comportato la necessità di usare la carrozzina per
    i miei spostamenti e grossi problemi nell'articolazione della voce.
    Ho fatto le scuole dell'obbligo, successivamente l'Istituto
    magistrale e finalmente sono approdato al Politecnico di Torino,
    dove nel 2004 ho conseguito il Diploma universitario in Ingegneria
    Informatica. Dal 2007 sono impiegato presso la Fondazione Links un
    centro di ricerca del Politecnico di Torino come ricercatore
    informatico. I miei problemi di comunicazione verbale mi hanno
    indotto a studiare un software per un comunicatore. che ho chiamato
    Handiphone e che uso normalmente con il mio tablet e smatphone.`,
  `Sono un appassionato di informatica, ma nel tempo sono riuscito a
    creare una rete di contatti che mi hanno supportato nelle mie
    attività e attitudini, infatti oltre all’informatica che rimane
    sempre al primo posto nei miei interessi, cerco anche di ampliare
    amicizie di vario genere con cui condivido altre passioni tra cui
    quella della bici, grazie alla trike posso percorrere ciclabili sia
    in solidario in compagnia; il movimento fisico per me è fondamentale
    per tenermi in forma: la piscina la frequento assiduamente da anni e
    mi ha permesso di prendere sempre più confidenza con il nuoto, la
    fisioterapia di ogni genere ho cercato di cucirmela addosso facendo
    pratiche innovative e per me divertenti. In alcuni periodi di vita
    sono anche stato ispirato alla scrittura tanto da produrre un libro
    e alcune poesie.`,
]

import MiPresento1 from '@/Vetrina/views/chisono/components/mipresento/Immagini/MiPresento1.png'
import MiPresento2 from '@/Vetrina/views/chisono/components/mipresento/Immagini/MiPresento2.png'
import MiPresento3 from '@/Vetrina/views/chisono/components/mipresento/Immagini/MiPresento3.png'
import MiPresento4 from '@/Vetrina/views/chisono/components/mipresento/Immagini/MiPresento4.png'
import Mauro from '@/Vetrina/views/chisono/components/mipresento/Immagini/mauro.png'
const ArrayFoto = [MiPresento1, MiPresento2, MiPresento3, MiPresento4]

export const MiPresento_ts = {
  Paragrafi,
  ArrayFoto,
  Mauro,
}

/////////////////////
// Piano di Studi

const FirebasePianoStudi = Pinia.Esperimento('esami')
const Anno = ref(1)
const Descrizione = `Per esecitarmi a lavorare sui database, sono partito proprio dalla tabella dei miei voti di laurea, è stato un modo per ricordarmi da dove sono partito.`
const DidascaliaDiploma = ref('La mia Laurea')
const CambiaPagina = (annonew: number) => {
  Anno.value = annonew
}
const FiltraEsami = computed(() => {
  return FirebasePianoStudi().getElenco.filter((item) => item.anno === (Anno.value ?? 1))
})

export const PianoStudi_ts = {
  Anno,
  Descrizione,
  DidascaliaDiploma,
  CambiaPagina,
  FiltraEsami,
}

//////////////////
// Ricerca del Se
import Camaleonte from '@/Vetrina/views/chisono/components/ricercadelse/Immagini/Camaleonte.png'
import LaSpirale from '@/Vetrina/views/chisono/components/ricercadelse/Immagini/LaSpirale.jpg'
import LaMiaSpirale from '@/Vetrina/views/chisono/components/ricercadelse/Immagini/LaMiaSpirale.png'
import Numerologia from '@/Vetrina/views/chisono/components/ricercadelse/Immagini/Numerologia.jpg'

const SottoPagina = ref('')
const RicercaDelSeInizializza = () => {
  const route = useRoute()
  watch(
    () => route.path,
    async (newPath) => {
      const path = newPath.split('/')
      SottoPagina.value = path[path.length - 1] ?? ''
    },
    { immediate: true },
  )
}
export const RicercaDelSe_ts = {
  RicercaDelSeInizializza,
  SottoPagina,
  Home: {
    Immagine: Camaleonte,
    Paragrafi: [
      `Mi ha sempre appassionato l’esoterismo perché credo che l’uomo non è onnisciente. Mi piace sentire racconti sulla divinità, quando andavo alle superiori mi ha colpito l’argomento di filosofia sull’eternità, per natura l’uomo ha paura della morte per il semplice fatto che non sa cosa ci sia dopo e non riesce a concepire il non essere. Il concetto di eternità può fare altrettanto paura. Per fortuna quando sento o leggo questi temi, non mi faccio influenzare e quasi me ne dimentico immediatamente.`,
      `Fin da piccolo mi piaceva la logica e quindi non facevo fatica a imparare la matematica, infatti mi bastava stare attento a scuola e poi a casa facevo subito gli esercizi senza ripassare.`,
      `Ho numerose lacune in matematica in quanto facendo le magistrali prima, ed Ingegneria dopo, molti argomenti non li ho trattati, in particolare trigonometria e serie di Fibonacci.`,
      `Trigonometria l’ho voluta approfondire per conto mio, mentre della serie di Fibonacci ne ho sentito parlare solo quando ho partecipato al progetto Stephen Hawking alle scuole superiori. Quest’ultimo argomento mi ha particolarmente entusiasmato in quanto con una semplice serie di numeri si possono rappresentare molte forme geometriche, la famosa sezione aurea che ritroviamo anche in natura e in una delle sue rappresentazioni più belle c’è la coda del camaleonte.`,
      `Successivamente mi è capitato di vedere il film “L’uomo che vide l’infinito”. Questo film racconta di un indiano che riusciva a vedere delle formule matematiche ma non a dimostrarle. Questo mi ha colpito per il fatto che un entità soprannaturale possa manifestarsi tramite i numeri. Ancora oggi mi sorprendo come la mia razionalità vada a braccetto con tutto ciò che è notoriamente irrazionale, forse dovuto alla mia spiccata curiosità.`,
      `Mi ha sempre appassionato l’esoterismo perché credo che l’uomo non è onnisciente. Mi piace sentire racconti sulla divinità, quando andavo alle superiori mi ha colpito l’argomento di filosofia sull’eternità, per natura l’uomo ha paura della morte per il semplice fatto che non sa cosa ci sia dopo e non riesce a concepire il non essere. Il concetto di eternità può fare altrettanto paura. Per fortuna quando sento o leggo questi temi, non mi faccio influenzare e quasi me ne dimentico immediatamente.`,
    ],
  },
  LaSpirale: {
    Immagine: LaSpirale,
    Paragrafi: [
      `La spirale rappresenta soprattutto un percorso di crescita, evoluzione e trasformazione. Il suo movimento continuo richiama un cammino che non è mai completamente lineare: a volte sembra di ritornare sugli stessi punti, ma in realtà ci si trova ogni volta a un livello diverso, con una maggiore consapevolezza.`,
      `La spirale può rappresentare anche la ricerca interiore, soprattutto quando il movimento è rivolto verso il centro, come se fosse un viaggio alla scoperta di sé stessi. Al contrario, quando si sviluppa dal centro verso l’esterno, può simboleggiare l’apertura verso il mondo, le esperienze, la conoscenza e la realizzazione di ciò che si è scoperto dentro di sé.`,
      `Per questo la spirale sembra particolarmente adatta a rappresentare il percorso della mia vita. È un simbolo che mi accompagna fin dall’infanzia e che ho ritrovato, in momenti e contesti diversi, anche senza averlo cercato consapevolmente. La sua forma richiama inoltre la ciclicità della vita: alcune esperienze possono ripresentarsi, ma ogni volta possono essere affrontate con una consapevolezza diversa.`,
      `La rotazione verso destra assume un significato ancora più personale. Può essere interpretata come un movimento che parte da dentro e tende verso l’esterno, quindi verso l’azione, l’esperienza e la realizzazione. È come se rappresentasse il desiderio di non rimanere fermo nella sola ricerca interiore, ma di mettere in pratica ciò che ho imparato e trasformarlo in qualcosa di concreto.`,
      `In questo senso, la spirale non rappresenta semplicemente un simbolo, ma un modo attraverso cui raccontare il mio percorso: un continuo movimento tra ricerca di me stesso, crescita, apertura verso gli altri e desiderio di trasformare ciò che sono in ciò che posso diventare.`,
    ],
  },
  LaMiaSpirale: {
    Immagine: LaMiaSpirale,
    Paragrafi: [
      `Il disegno che ho realizzato è la somma di più elementi che hanno caratterizzato la mia vita. Da piccolo ho fatto disegnare a mia mamma una spirale colorata costellata di cerchi multicolore dentro ad essa.`,
      `Con il passare del tempo sono venuto a conoscenza da un osteopata ’’new age’’ che i miei colori erano il blu come colore riempitivo e il rosso come cornice. Ho poi conosciuto una kinesiologa "touch for health" che attraverso specifiche metodologie, riconosce i deficit muscolari, individua le debolezze dell’organismo, siano esse di natura fisica, emotiva o mentale.`,
      `Tramite lei sono venuto a conoscenza che il mio simbolo era appunto una spirale riempita da cerchi su tutto il percorso. Nel 2009 ho partecipato a un corso di Reiky II e ho scoperto che un simbolo di questa disciplina assomiglia molto ad una spirale.`,
      `Posso quindi affermare che la spirale mi accompagna da sempre e trovo molto pertinente la definizione che ho inserito; di conseguenza voglio esprimere che sto cercando di mettere in pratica il messaggio relativo alla spirale con rotazione a destra.`,
    ],
  },
  Numerologia: {
    Immagine: Numerologia,
    Paragrafi: [
      `<p>La numerologia è una disciplina che studia il significato dei numeri e la loro influenza sulla vita delle persone.Attraverso l'analisi dei numeri legati alla data di nascita e al nome, è possibile ottenere informazioni sul carattere, le attitudini e le potenzialità di un individuo. Personalmente, ho trovato nella numerologia uno strumento utile per comprendere meglio me stesso e il mio percorso di crescita personale.</p>`,
      `<h2>Desidero</h2><p>
        <p>21.6.1973 = 2 + 1 + 6 + 1 + 9 + 7 + 3 = 29 = 2 + 9 = 11</p>
        <p>Carattere, possibilità<br />
        Queste persone sono ambiziose e intelligenti. Possono ottenere grand
        successi, ma anche grandi fallimenti. Sono dotate di capacità
        premonitrici. Possono trarre ispirazione da un Dio.
      </p>
      <p>
        Punti deboli, cosa si dovrebbe imparare Gestire l‘impazienza, evitare
        malintesi, durezza ed intransigenza. Attenzione ai fraintendimenti, ed
        alle situazioni stressanti, la vita materiale è variabile; dovrebbero
        stare attenti a non usare le loro notevoli capacità solo per accumulare
        ricchezza.
      </p>`,
      `<h2>Simpatia</h2>
      <p>Numero del compleanno 21</p>
      <p>Carattere, possibilità:</p>
      <p>Queste persone hanno un grande potenziale. Sono sensibili, gentili e tolleranti. Cercano di capire gli altri. Sono creativi e in grado di fare una vasta gamma di attività. Sono socievoli e diplomatici. Sono premurosi e gentili nelle loro relazioni sentimentali. La comunicazione è molto importante per loro. Sono assertivi, hanno un buon lavoro. Sono governati dall'istinto. Sono ottimisti con un atteggiamento positivo nei confronti della vita. A loro piace il successo e le nuove sfide. A loro piace collaborare con gli altri. A volte si aggrappano alla loro famiglia. Mancano di fiducia in se stessi. Cercano di aiutare gli altri a soddisfare le loro esigenze così tanto da dimenticare le proprie esigenze.</p>
      <p>Punti deboli, cosa si dovrebbe imparare: Queste persone possono ferire gli altri con le parole. Sono irascibili, impazienti, ansiosi e irritabili. Fai attenzione alla superiorità, al confronto, al cambiamento degli stati d'animo e delle emozioni. Possono essere avidi e conflittuali.</p>
      <p>... Pensiero</p>
      <p>Colonna completa 21.6.1973 - 1-2-3</p>
      <p>Queste persone hanno la capacità di distaccarsi completamente dall'ambiente e di immergersi in ciò che fanno. Possono esprimere bene i loro pensieri. Possono concentrarsi bene. Sono buoni oratori e più portati per lo studio.</p>
      <p>... intelletto</p>
      <p>Colonna completa 21.61973 - 3-6-9</p>
      <p>Queste persone sono molto intelligenti ed istruite. Mostrano naturalmente simpatia per gli altri. Possono capire i sentimenti degli altri, sono attenti e gentili. Ma potrebbero non essere fra i migliori studenti.</p>`,
      `21/06/2027=9+9+1=1<br />
      <p>L’Anno Personale 1 rappresenta l’inizio di un nuovo ciclo di nove anni. Dopo aver attraversato la vibrazione del numero 9, legata alla conclusione di un ciclo e al completamento di esperienze maturate nel tempo, questa nuova fase porta con sé l’opportunità di ripartire e costruire qualcosa di nuovo. È un periodo nel quale possono emergere nuove idee, nuovi progetti e il desiderio di prendere iniziative che permettano alla persona di esprimere maggiormente sé stessa.
      Durante l’Anno Personale 1 l’autonomia assume un'importanza particolare. La persona può sentire il bisogno di prendere maggiormente in mano la propria vita, facendo scelte più personali e cercando di non dipendere eccessivamente dalle aspettative o dalle decisioni degli altri. È un momento favorevole per rafforzare la fiducia nelle proprie capacità, assumersi nuove responsabilità e sperimentare strade diverse da quelle percorse in precedenza.
      La vibrazione del numero uno invita a guardare in avanti e ad avere il coraggio di iniziare, anche quando non è ancora tutto perfettamente definito. Non è necessario conoscere fin dall’inizio l’intero percorso: ciò che conta è individuare una direzione e cominciare a muoversi verso di essa. Le esperienze degli anni precedenti possono diventare la base sulla quale costruire questa nuova fase.
      È anche un anno nel quale è importante evitare di rimanere troppo legati al passato. Ciò che si è concluso durante l’Anno 9 può lasciare spazio a nuove possibilità, ma il cambiamento richiede la disponibilità a lasciare andare ciò che non è più necessario. L’energia dell’1 favorisce quindi l’iniziativa, la determinazione e la capacità di trasformare un’idea in un progetto concreto.
      Questo nuovo ciclo può essere vissuto come un ritorno al proprio centro: dopo le esperienze accumulate negli anni precedenti, si riparte con una maggiore consapevolezza di ciò che si vuole e di ciò che non si vuole più. L’Anno Personale 1 invita quindi a mettere in pratica ciò che si è imparato, senza aspettare che siano sempre gli altri a indicare la direzione.
      È un anno nel quale seminare. Non tutto ciò che viene iniziato dovrà necessariamente dare risultati immediati, perché molte delle decisioni prese in questa fase potranno svilupparsi negli anni successivi. L’importante è scegliere con consapevolezza ciò che si vuole costruire e avere la determinazione necessaria per compiere i primi passi.
      In questo senso, l’Anno Personale 1 può essere visto come l’inizio di un nuovo percorso: non una semplice ripartenza, ma la possibilità di costruire una fase della propria vita maggiormente fondata sull’autonomia, sull’iniziativa personale e sulla fiducia nelle proprie capacità.</p>`,
    ],
  },
}
