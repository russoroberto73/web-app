import { defineComponent, h } from 'vue'

import ChiudiFinestraModale from '@/assets/svg/img.vue'
import SvgIcone from '@/assets/svg/img.vue'

import '@/Vetrina/assets/styles/FinestraModaleCurriculum.css'

const BTNChiudiFinestraModale = (emit: (event: 'chiudi') => void) => {
  emit('chiudi')
}

const InformazioniPersonali = defineComponent({
  setup() {
    const Contenuto = [
      { campo: 'Nome', dato: 'Roberto' },
      { campo: 'Cognome', dato: 'Russo' },
      { campo: 'Età', dato: '53' },
      { campo: 'Nazionalità', dato: 'italiana' },
      { campo: 'Residenza', dato: 'Rivoli (To)' },
      { campo: 'Email', dato: 'russo.roberto73@gmail.com' },
    ]

    return () =>
      h(
        'div',
        { id: 'InformazioniPersonali' },
        Contenuto.map((Info, index) =>
          h(
            'div',
            { key: index },
            h('span', { class: 'Titolo' }, [
              Info.campo === 'Email'
                ? h('span', { class: 'mobile:hidden' }, `${Info.campo}: `)
                : h('span', `${Info.campo}:`),
              ` ${Info.dato}`,
            ]),
          ),
        ),
      )
  },
})

const Risultati = defineComponent({
  setup() {
    const risultati = [
      {
        numero: '18',
        descrizione_riga1: 'anni di',
        descrizione_riga2: 'esperienza',
      },
      {
        numero: '8',
        descrizione_riga1: 'software',
        descrizione_riga2: 'realizzati',
      },
      {
        numero: '5',
        descrizione_riga1: 'progetti a cui',
        descrizione_riga2: 'ho collaborato',
      },
      {
        numero: '17',
        descrizione_riga1: 'linguaggi software',
        descrizione_riga2: 'studiati',
      },
    ]

    return () =>
      h('div', { id: 'Risultati' }, [
        h('div', { id: 'Grid' }, [
          risultati.map((risultato, index) =>
            h('div', { key: index }, [
              h('div', { class: 'quadrato' }, [
                h('h3', {
                  innerHTML: risultato.numero,
                }),
                h('p', [
                  risultato.descrizione_riga1,
                  h('br'),
                  h('span', {
                    innerHTML: risultato.descrizione_riga2,
                  }),
                ]),
              ]),
            ]),
          ),
        ]),
      ])
  },
})

const Studi = defineComponent({
  setup() {
    const Percorso = [
      {
        anni: '1987 - 1988',
        grado: 'Corso',
        istituto:
          'C.O.S.P. Centro di Orientamento Scolastico Professionale di Torino',
        dettagli:
          'Imparato i primi rudimenti della programmazione con il linguaggio Clipper',
      },
      {
        anni: '1989 - 1994',
        grado: 'Diploma',
        istituto: 'Ist. Magistrale Domenico Berti di Torino',
        dettagli: 'Scuola superiore',
      },
      {
        anni: '1995 - 2004',
        grado: 'Diploma universitario in informatica',
        istituto: 'Politecnico di Torino',
        dettagli: 'Università',
      },
      {
        anni: '2001',
        grado: 'Patente europea del computer',
        istituto: 'Eta-beta di Torino',
        dettagli: 'ECDL',
      },
      {
        anni: '2005-2006',
        grado: 'Borsa di studio',
        istituto: 'Sinapsi di Torino',
        dettagli:
          'Sviluppo software come ausilio alla comunicazione telefonica',
      },
    ]

    return () =>
      h('div', { id: 'Studi' }, [
        h('ul', [
          Percorso.map((Tappa, index) =>
            h('li', { key: index }, [
              h('div', { class: 'icon' }, [
                h(SvgIcone, {
                  Nome: 'Cartella',
                  Sfondo: 'none',
                  ViewBox: '0 0 24 24',
                  Class: 'size-6',
                }),
                h('span', {
                  class: 'anni',
                  innerHTML: Tappa.anni,
                }),
              ]),

              h('h5', [
                Tappa.grado,
                h('span', {
                  innerHTML: ' ' + Tappa.istituto,
                }),
              ]),

              h('p', {
                innerHTML: Tappa.dettagli,
              }),
            ]),
          ),
        ]),
      ])
  },
})

const Esperienze = defineComponent({
  setup() {
    const EsperienzeList =[
  {
    anni: "1987 - 1988",
    posizione: "Programmatore",
    nome: "Scuola media Gobetti di Rivoli",
    dettagli: "Borsa lavoro"
  },
  {
    anni: "1988 - 1989",
    posizione: "Programmatore",
    nome: "C.O.S.P.",
    dettagli: "Borsa lavoro"
  },
  {
    anni: "2003 - 2004",
    posizione: "Programmatore",
    nome: "Polimatica Cascinevica - Rivoli",
    dettagli: "Realizzazione siti web e web-app"
  },
  {
    anni: "2007 - 2019",
    posizione: "Ricercatore",
    nome: "ISMB - Torino",
    dettagli: "Programmatore web e analista database"
  },
  {
    anni: "2020 - oggi",
    posizione: "Ricercatore",
    nome: "Fondazione Links - Torino",
    dettagli: "Programmatore web e analista database"
  }
]

    return () =>
      h('div', { id: 'Esperienze' }, [
        h('ul', [
          EsperienzeList.map((Esperienza, index) =>
            h('li', { key: index }, [
              h('div', { class: 'icon' }, [
                h(SvgIcone, {
                  Nome: 'Cartella',
                  Sfondo: 'none',
                  ViewBox: '0 0 24 24',
                  Class: 'size-6',
                }),
                h('span', {
                  class: 'anni',
                  innerHTML: Esperienza.anni,
                }),
              ]),

              h('h5', [
                Esperienza.nome,
                h('div', {
                  innerHTML: Esperienza.posizione,
                }),
              ]),

              h('p', {
                innerHTML: Esperienza.dettagli,
              }),
            ]),
          ),
        ]),
      ])
  },
})
export {
  Risultati,
  Studi,
  Esperienze,
  ChiudiFinestraModale,
  BTNChiudiFinestraModale,
  InformazioniPersonali,
}
