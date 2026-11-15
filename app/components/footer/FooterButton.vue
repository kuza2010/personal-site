<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  text: string,
  to: string,
  external?: boolean,
}>()

// `mailto:` must not open a new tab.
const target = computed(() => (props.to.startsWith('mailto:') ? undefined : '_blank'))

</script>

<template>
  <UButton
    :to="props.to"
    :target="target"
    :external="props.external ?? true"
    color="neutral"
    variant="link"
    icon="i-heroicons-command-line"
    class="hover:text-primary p-0 hover:cursor-pointer hover:no-underline"
  >
    {{ props.text }}
  </UButton>
</template>
