<template>
  <div>
    <p class="text-lg tracking-tight font-semibold font-mono underline decoration-2 decoration-brand">
      <slot name="job-title"/>
    </p>
    <p class="tracking-tight text-sm">
      <slot name="job-summary"/>
    </p>
    <p class="pt-3">
      <slot name="job-description"/>
    </p>

    <UCollapsible
      v-if="slots['job-achievements'] || slots['job-description-detailed']"
      :unmount-on-hide="false"
      class="flex flex-col pt-1.5"
      :ui="{ content: 'order-1 pb-1.5 motion-reduce:animate-none!' }"
    >
      <template #default="{ open }">
        <UButton
          variant="link"
          color="neutral"
          class="group order-2 self-end cursor-pointer p-0 pr-3 italic font-light text-sm text-gray-600 dark:text-gray-300 hover:text-primary focus-visible:outline-primary/25"
          :label="open ? 'Show less' : 'Show more'"
          trailing-icon="i-heroicons-chevron-down-20-solid"
          :ui="{
            trailingIcon: 'size-4 transition-transform duration-200 group-data-[state=open]:rotate-180 motion-reduce:transition-none!',
          }"
        />
      </template>

      <template #content>
        <div v-if="slots['job-achievements']">
          <p>Achievements:</p>
          <ul class="list-disc pl-5">
            <slot name="job-achievements"/>
          </ul>
        </div>
        <slot name="job-description-detailed"/>
        <p
          v-if="slots['job-technologies']"
          class="pt-2 text-sm text-gray-600 dark:text-gray-300"
        >
          <span class="font-medium">Used languages and technologies:</span>
          <slot name="job-technologies"/>
        </p>
      </template>
    </UCollapsible>
  </div>
</template>

<script setup lang="ts">
import {useSlots} from 'vue'

const slots = useSlots()
</script>
