<template>
  <div>
    <p class="text-lg tracking-tight font-semibold font-mono underline decoration-2 decoration-brand">
      <slot name="job-title" />
    </p>
    <p class="tracking-tight text-sm">
      <slot name="job-summary" />
    </p>
    <p class="pt-3">
      <slot name="job-description" />
    </p>
    <div
      v-if="slots['job-description-detailed']"
      class="pt-1.5"
    >
      <span
        v-show="!isDetailsVisible"
        class="italic cursor-pointer font-light text-gray-600 dark:text-gray-300 float-end pr-3 text-sm"
        @click="switchJobDetailsVisibility"
      >
        Show more
      </span>
      <div v-show="isDetailsVisible">
        <slot name="job-description-detailed" />
      </div>
      <span
        v-show="isDetailsVisible"
        class="italic cursor-pointer font-light text-gray-600 dark:text-gray-300 float-end pr-3 text-sm pt-1"
        @click="switchJobDetailsVisibility"
      >
        Show less
      </span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, useSlots } from 'vue'

const slots = useSlots()

const isDetailsVisible = ref(false);

const switchJobDetailsVisibility = () => {
  isDetailsVisible.value = !isDetailsVisible.value;
}

</script>
