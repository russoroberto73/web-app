import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { getDomainArea } from './config/domini'
import App from './App.vue'
import router from './router'
//import { Pinia } from '@/Vetrina/storesVetrina/'
import '@/assets/styles/main.css'
type Area = 'app' | 'admin' | 'parlino' | 'test'

const app = createApp(App)
const area: Area = getDomainArea()

import Rtable from '@/components/ComponenteTabella/CostruisciTabella.vue'
app.component('Rtable', Rtable)

app.use(createPinia())
//app.use(Pinia)
app.use(router)
app.provide('area', area)
//console.log(area)

switch (area) {
  case 'admin':
    document.title = 'Dashboard'
    break
  case 'parlino':
    document.title = 'Parlino'
    break
  case 'test':
    document.title = 'Test'
    break
  default:
    document.title = 'Russo Roberto'
    break
}

app.mount('#app')
