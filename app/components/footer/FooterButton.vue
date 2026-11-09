<script setup lang="ts">

defineEmits(['onClick'])

defineProps<{ text: string }>()

</script>

<template>
  <UButton
    color="neutral"
    variant="link"
    icon="i-heroicons-command-line"
    class="hover:text-primary p-0 hover:cursor-pointer hover:no-underline"
    @click="$emit('onClick')"
  >
    {{ text }}
  </UButton>
</template>