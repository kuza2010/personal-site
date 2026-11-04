<script setup lang="ts">

defineEmits(['onClick'])

defineProps<{ text: string }>()

</script>

<template>
  <UButton
    color="neutral"
    variant="link"
    icon="i-heroicons-command-line"
    class="hover:text-alligator-600 dark:hover:text-alligator-700 p-0 hover:cursor-pointer hover:no-underline"
    @click="$emit('onClick')"
  >
    {{ text }}
  </UButton>
</template>