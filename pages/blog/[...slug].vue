<template>
  <div class="prose dark:prose-invert blog max-w-none">
    <h1 class="font-mono text-2xl font-bold mt-3 mb-0 tracking-wide">
      {{ data.title }}
    </h1>
    <UBadge
      v-for="tag in data.languageTags"
      :key="tag"
      color="primary"
      variant="soft"
      class="mr-3"
    >
      {{ tag }}
    </UBadge>
    <img
      :src="data.img"
      :alt="data.alt"
    >
    <p class="font-sans text-xs mt-0 mb-1">
      Last update: {{ filters.formatDate(data.lastModified) }}
    </p>
    <ContentRenderer
      :value="data"
      class="text-justify"
    />
  </div>
</template>

<script setup>

import {useAppConfig, useRouter} from '#imports';
import {usePost} from '~/composables/usePost.ts';

const route = useRouter()
const {filters} = useAppConfig();
const data = await usePost(route.currentRoute.value.fullPath)

</script>