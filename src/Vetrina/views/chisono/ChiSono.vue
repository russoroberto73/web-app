<template>
  <div id="chi-sono">
    <div class="TitoloPagina">
      <h1>{{ Titolo }}</h1>
    </div>
    <div id="Contenitore">
      <div class="card-container" :class="`active-${activeCard + 1}`">
        <div
          v-for="(card, index) in cards"
          :key="card.id"
          class="card"
          :class="{
            active: activeCard === index,
          }"
          :style="{ '--active': activeCard, '--index': index }"
          @click="bringToFront(index)"
        >
          <div class="card-label">
            {{ card.label }}
            <span v-if="index === 2" class="float-right flex gap-5">
              <span class="hidden desktop:block">
                <button
                  :disabled="index != activeCard"
                  :class="
                    index !== activeCard
                      ? '!bg-gray-200 cursor-not-allowed'
                      : LinkAttuale === link.to
                        ? '!bg-yellow-200 cursor-pointer'
                        : 'cursor-pointer'
                  "
                  v-for="link in links"
                  :key="link.to"
                  @click.stop="PagineRicercaDelSe(link.to)"
                >
                  {{ link.label }}
                </button>
              </span>
              <span class="hidden mobile:block">
                <div class="relative w-[50px] mt-[5px] sm:mt-[28px] md:mt-[5px]">
                  <button
                    class="flex flex-col gap-1 p-1 !w-[20px] !ml-[40px]"
                    @click="menuAperto = !menuAperto"
                  >
                    <span class="block w-3 h-[3px] bg-white" v-for="i in 3" :key="i"></span>
                  </button>
                  <div
                    v-if="menuAperto"
                    class="absolute right-0 top-full mt-2 w-[110px] text-[12px] bg-white shadow-lg"
                  >
                    {{ menuAperto }}
                    <nav class="flex flex-col">
                      <RouterLink
                        v-for="link in links"
                        :key="link.to"
                        :to="link.to"
                        class="px-4 pb-1 hover:bg-gray-200"
                        @click.stop="menuAperto = false"
                      >
                        {{ link.label }}
                      </RouterLink>
                    </nav>
                  </div>
                </div>
              </span>
            </span>
          </div>
          <div class="card-content">
            <component :is="card.content" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChiSono_ts } from '@/Vetrina/assets/config/ChiSono'

const {
  Titolo,
  cards,
  activeCard,
  menuAperto,
  bringToFront,
  PagineRicercaDelSe,
  links,
  LinkAttuale,
  ChiSonoInizializza,
} = ChiSono_ts
ChiSonoInizializza()
</script>
