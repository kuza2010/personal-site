<script setup lang="ts">

defineEmits(['onClick'])

defineProps<{ text: String }>()

</script>

<template>
  <UButton
    color="white"
    variant="link"
    icon="i-heroicons-command-line"
    class="hover:text-alligator-600 dark:hover:text-alligator-700 p-0 hover:cursor-pointer hover:no-underline"
    @click="$emit('onClick')"
  >
    {{ text }}
  </UButton>
</template>