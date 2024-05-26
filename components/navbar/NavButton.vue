<script setup lang="ts">

import { computed } from 'vue';
import { NuxtLink } from '#components';
import { normalizeLink } from '~/utils/normalize-link';

const props = defineProps<{
  link: String,
  class?: String
  linkText: String,
}>()

const normalizedLink = computed(() => {
  return normalizeLink(props.link)
})

</script>

<template>
  <NuxtLink
    :to="normalizedLink"
    :class="props.class"
    class="hover:text-alligator-500 dark:hover:text-alligator-400"
  >
    {{ linkText }}
  </NuxtLink>
</template>