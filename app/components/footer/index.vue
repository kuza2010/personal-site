<script setup lang="ts">
import { computed } from 'vue';
import { useRuntimeConfig } from '#app';
import FooterButton from '~/components/footer/FooterButton.vue';

const runtimeConfig = useRuntimeConfig();

const feedbackLink = computed(() => {
  return `mailto:${runtimeConfig.public.email}?subject=${encodeURIComponent('Personal Site | Feedback')}`;
});
</script>

<template>
  <div class="flex space-x-4">
    <FooterButton
      text="Give feedback"
      :to="feedbackLink"
    />
    <FooterButton
      text="Linkedin"
      :to="runtimeConfig.public.linkedIn"
    />
    <FooterButton
      text="Github"
      :to="runtimeConfig.public.github"
    />
  </div>
</template>
