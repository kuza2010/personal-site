<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useHead } from 'unhead';

useHead({
  // or as a function
  titleTemplate: (titleSegment) => {
    return titleSegment ? `${titleSegment} | Artem Danilin` : 'Artem Danilin'
  },
})
</script>