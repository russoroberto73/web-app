import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'

import IconeMenu from '@/Vetrina/assets/config/MenuApp/iconemenu.vue'
import { Links } from '@/Vetrina/assets/config/MenuApp/MenuAppArrayLink.ts'
import '@/Vetrina/assets/styles/menu.css'

const LinkCorrente = ref('')
const MenuLinks = computed(() => Links.filter((link) => link.Nome !== 'GiocoIdraulico'))
const Inizializza = () => {
  const Route = useRoute()
  if (Route.path) {
    LinkCorrente.value = Route.path.split('/')[1] ?? ''
  }
  watch(
    () => Route.path,
    async (newpath) => {
      if (newpath) {
        LinkCorrente.value = newpath.split('/')[1] ?? ''
      }
    }
  )
}

export { IconeMenu, LinkCorrente, Links, MenuLinks, Inizializza }
