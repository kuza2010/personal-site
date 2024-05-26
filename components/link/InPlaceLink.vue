<script setup lang="ts">
import { isExternalLink } from '~/utils/external-link';
import { computed } from 'vue';

const props = defineProps<{
  to: String,
  displayText: String,
}>()

const target = computed(() => {
  return isExternalLink(props.to) ? '_blank' : undefined
});

</script>

<template>
  <ULink
    :to="props.to"
    :target="target"
    active-class="text-primary"
    inactive-class="text-gray-500 dark:text-gray-400 hover:text-alligator-500 dark:hover:text-alligator-700"
  >
    {{ props.displayText }}
  </ULink>
</template>