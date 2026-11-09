<script setup lang="ts">

import { computed } from 'vue';
import { NuxtLink } from '#components';
import { normalizeLink } from '~/utils/normalize-link';

const props = defineProps<{
  link: string,
  class?: string
  linkText: string,
}>()

const normalizedLink = computed(() => {
  return normalizeLink(props.link)
})

</script>

<template>
  <NuxtLink
    :to="normalizedLink"
    :class="props.class"
    class="hover:text-primary"
  >
    {{ linkText }}
  </NuxtLink>
</template>