export const LinkVetrina = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/Vetrina/views/homepage/Homepage.vue'),
  },
  {
    path: '/chisono/:card?/:link?',
    name: 'ChiSono',
    component: () => import('@/Vetrina/views/chisono/ChiSono.vue'),
  },
  {
    path: '/handiphone',
    name: 'Handiphone',
    component: () => import('@/Vetrina/views/handiphone/Handiphone.vue'),
    children: [
      {
        path: 'ideatore',
        name: 'HandiphoneIdeatore',
        component: () => import('@/Vetrina/views/handiphone/Ideatore.vue'),
      },
      {
        path: 'descrizione',
        name: 'HandiphoneDescrizione',
        component: () => import('@/Vetrina/views/handiphone/Descrizione.vue'),
      },
      {
        path: 'specifiche',
        name: 'HandiphoneSpecifiche',
        component: () => import('@/Vetrina/views/handiphone/Specifiche.vue'),
      },
    ]
  },
  {
    path: '/libri',
    name: 'LaStradaVersoMe',
    component: () => import('@/Vetrina/views/Libri/Libri.vue'),
  },
  {
    path: '/rassegnastampa',
    name: 'RassegnaStampa',
    component: () => import('@/Vetrina/views/RassegnaStampa/RassegnaStampa.vue'),
  },
  {
    path: '/massmedia',
    name: 'MassMedia',
    component: () => import('@/Vetrina/views/MassMedia/MassMedia.vue'),
  },
  {
    path: '/contatti',
    name: 'Contatti',
    component: () => import('@/Vetrina/views/contatti/Contatti.vue'),
  },
  {
    path: '/calendariofilosofico/:mese?/:anno?',
    name: 'CalendarioFilosofico',
    component: () => import('@/Vetrina/views/CalendarioFilosofico/CalendarioFilosofico.vue'),
  },
  {
    path: '/playlist',
    name: 'PlayList',
    component: () => import('@/Vetrina/views/Playlist/Playlist.vue'),
  },
  {
    path: '/giocoidraulico',
    name: 'GiocoIdraulico',
    component: () => import('@/Vetrina/views/GiocoIdraulico/GiocoIdraulico.vue'),
  },
]
