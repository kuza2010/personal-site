<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
import {useHead} from '#imports';

useHead({
  // or as a function
  titleTemplate: (titleSegment) => {
    return titleSegment ? `${titleSegment} | Artem Danilin` : 'Artem Danilin'
  },
})
</script>