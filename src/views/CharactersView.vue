<script setup>
import Character from '../components/Character/Character.vue'
</script>

<template>
  <main>
    <Suspense>
    <Character></Character>
    <template #fallback>
        <p>Loading...</p>
    </template>
    </Suspense>
  </main>
</template>