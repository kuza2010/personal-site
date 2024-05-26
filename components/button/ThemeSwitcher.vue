<script setup lang="ts">
import { computed } from 'vue';
import { useColorMode } from '#imports';

const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>

<template>
  <ClientOnly>
    <UButton
      color="gray"
      variant="ghost"
      aria-label="Theme"
      class="cursor-pointer hover:bg-transparent hover:dark:bg-transparent"
      :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
      @click="isDark = !isDark"
    />
  </ClientOnly>
</template>