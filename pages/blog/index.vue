<template>
  <div>
    <h1 class="font-mono text-2xl font-bold mt-3">
      Blog page
    </h1>
    <div class="my-6 flex flex-col gap-6">
      <NuxtLink
        v-for="item in blogPost"
        :key="item.path"
        :to="item.path"
      >
        <UCard class="cursor-pointer">
          <template #header>
            {{ item.title }}
          </template>

          {{ item.description }}

          <template #footer>
            <div class="flex">
              <div class="grow">
                <UBadge
                  v-for="tag in item.languageTags"
                  :key="tag"
                  color="primary"
                  variant="solid"
                  class="mr-3"
                >
                  {{ tag }}
                </UBadge>
              </div>
              <span class="grow-0">
                {{ filters.formatDate(item.lastModified) }}
              </span>
            </div>
          </template>
        </UCard>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>

import {useHead} from '#imports';
import {useAppConfig} from '#app';
import {useRecentBlogPost} from '~/composables/useRecentBlogPost.ts';

const {filters} = useAppConfig();
const blogPost = await useRecentBlogPost();

useHead({
  title: 'Blog',
  meta: [
    {name: 'description', content: 'Read Artem Danilin tech blog'}
  ],
})

</script>