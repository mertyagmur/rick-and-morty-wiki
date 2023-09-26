<script setup>
import { ref, onMounted } from 'vue'
import CharacterItem from './CharacterItem.vue'
import { getCharacters, getCharacters2 } from "@/service/characters"
import {useInfiniteScroll} from "@vueuse/core"

const el = ref(null)

const charactersList = ref([])

let page = 1

useInfiniteScroll(
  el,
  async () => {
    await getCharactersOnScroll(page)
    page++
  },
  {distance: 20}
)

const getCharactersOnScroll = async (page) => {
  const newCharacters = await getCharacters2(page)
  
  charactersList.value.push(...newCharacters)
}

</script>

<template>
  <div ref="el" class="grid">
      <div v-for="character in charactersList" class="grid__item">
        <RouterLink :to="'/characters/' + character.id">
          <CharacterItem :id="character.id"></CharacterItem>
        </RouterLink>
      </div>
  </div>
</template>

<style lang="scss" scoped>
.grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;


  &__item {
    padding: 15px;
  }

}
</style>