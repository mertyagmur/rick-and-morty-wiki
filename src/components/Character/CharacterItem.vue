<script setup>
import { ref, onMounted } from 'vue'
import { getCharacterInfo } from "@/service/characters"

const props = defineProps(['id']);
const characterInfo = ref(null)

onMounted(async () => {
  characterInfo.value = await getCharacterInfo(props.id)
})

</script>

<template>
  <div v-if="characterInfo !== null">
    <div class="item grow">
      <img :src="characterInfo.image">
      <div class="text-area">
        <h2>{{characterInfo.name}}</h2>
      </div>
    </div>
  </div>
</template>

 <style lang="scss" scoped>

  .item {
    width: 200px;
    height: 250px;
    border: 5px;
    border-color: rgb(191,222,66);
    border-style: solid;
    border-radius: 20%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
    background-color: hsla(189, 57%, 52%, 1);
    box-shadow: 7px 7px 5px rgba(0, 0, 0, 0.377);
    &.grow {
        transition: all .2s ease-in-out;

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  .text-area {
    height: 100px;
    width: 200px;
  }

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: inherit;
  }
  
  h2 {
    text-align: center;
    word-wrap: break-word;
    overflow-wrap: break-word;
    line-height: 20px;
    font-weight: 500;
    font-size: 1.1em;
    color: black;
  }
</style>