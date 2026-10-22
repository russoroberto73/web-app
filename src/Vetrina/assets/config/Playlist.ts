import { ref, computed } from "vue"

export const Titolo = ref("Playlist")
export const Youtube = ref([
  {
    url: "h9dHy-BYDoQ",
    descrizione1: "Fabrizio Moro - Portami via",
    descrizione2: "Sanremo 1997"
  },
  {
    url: "nbbQ-8P4RaQ",
    descrizione1: "Fabrizio Moro",
    descrizione2: "Eppure mi hai cambiato la vita"
  },
  {
    url: "KnpiZ20VnfY",
    descrizione1: "Jovanotti - Temporale",
    descrizione2: "&nbsp;"
  },
  {
    url: "cLJp-YJeuzc",
    descrizione1: "Franco Battiato - La cura",
    descrizione2: "&nbsp;"
  },
  { url: "PWu71JMwGWE",
    descrizione1: "Arisa",
    descrizione2: "La notte"
  },
  {
    url: "AoqSYMZqKPA",
    descrizione1: "Dolcenera",
    descrizione2: "Un altro giorno sulla terra"
  },
  {
    url: "UDhy4a_892c",
    descrizione1: "Dolcenera",
    descrizione2: "Passo dopo passo"
  },
  {
    url: "g71mS4gL2_s",
    descrizione1: "Dolcenera",
    descrizione2: "Un mondo perfetto"
  },
  {
    url: "GS2ZhK-Gzjg",
    descrizione1: "Michele Zarillo",
    descrizione2: "I giorni di una vita"
  },
  {
    url: "nF0Ac3sNgBY",
    descrizione1: "Fabrizio De Andrè",
    descrizione2: "Bocca di rosa"
  },
  {
    url: "FpOEN93LX-E",
    descrizione1: "Laura Pausini",
    descrizione2: "La solidutine"
  },
  {
    url: "rpRAQiOoZQE",
    descrizione1: "Laura Pausini",
    descrizione2: "Ascolta il tuo cuore"
  },
  {
    url: "8fRnvjjhjJs",
    descrizione1: "Laura Pausini",
    descrizione2: "Vivimi"
  },
  {
    url: "43D_BwlfIjg",
    descrizione1: "Laura Pausini",
    descrizione2: "Mi dispiace"
  },
  {
    url: "M5-Zz9iUZvA",
    descrizione1: "Franco Battiato",
    descrizione2: "Centro di Gravità Permanente"
  },
  {
    url: "53XpvKMcao0",
    descrizione1: "Giorgia",
    descrizione2: "C'è da fare"
  },
  {
    url: "8yFE2joDRHM",
    descrizione1: "Laura Pausini",
    descrizione2: "Un buon inizio"
  },
  {
    url: "3HC1haflvmM",
    descrizione1: "Eugenio Finardi",
    descrizione2: "Non è nel cuore"
  },
  {
    url: "R3Wf53M_YRM",
    descrizione1: "Elisa",
    descrizione2: "A modo tuo"
  },
  {
    url: "Kt5Z9uKFN5c",
    descrizione1: "Aleandro Bardi, Francesca Letta",
    descrizione2: "Non amarmi"
  },
  {
    url: "Kt5Z9uKFN5c",
    descrizione1: "Enrico Ruggeri",
    descrizione2: "Polvere"
  },
  {
    url: "3HC1haflvmM",
    descrizione1: "Eugenio Finardi",
    descrizione2: "Non è nel cuore"
  },
  {
    url: "DhlXD7NXTLA",
    descrizione1: "Santo California",
    descrizione2: "Ave Maria No no"
  },
  {
    url: "ZVOAg3Qox0E",
    descrizione1: "Alex Brittii",
    descrizione2: "Una su un milione"
  }
])
export const Link = computed(() => {
  return (id: number) => {
    return "https://www.youtube.com/watch?v=" + Youtube.value[id].url
  }
})

export const Costruisci_img = computed(() => {
  return (id: number) => {
    return "https://img.youtube.com/vi/" + Youtube.value[id].url + "/0.jpg"
  }
})
import "@/Vetrina/assets/styles/Playlist.css"
