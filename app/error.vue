<template>
  <NuxtLayout>
    <h1 class="font-mono text-2xl font-bold mt-3">
      Oops... *sad trombone sound*
    </h1>
    <h2 class="text-sm my-3">
      {{ props.error.message }}
    </h2>
  </NuxtLayout>
</template>

<script setup lang="ts">

import type { NuxtError } from '#app';

const props = defineProps<{ error: NuxtError, }>()

</script>
