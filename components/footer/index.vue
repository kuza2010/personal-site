<script setup lang="ts">
import FooterButton from '~/components/footer/FooterButton.vue';
import { useRuntimeConfig } from '#app';

const runtimeConfig = useRuntimeConfig();

function giveFeedbackCallback() {
  window.open('mailto:' + runtimeConfig.public.email + '?subject=Personal%20Site|Feedback');
}
function openLinkedin() {
  window.open(runtimeConfig.public.linkedIn);
}

function openGithub() {
  window.open(runtimeConfig.public.github);
}

</script>

<template>
  <div class="flex space-x-4">
    <FooterButton
      text="Give feedback"
      @on-click="giveFeedbackCallback"
    />
    <FooterButton
      text="Linkedin"
      @on-click="openLinkedin"
    />
    <FooterButton
      text="Github"
      @on-click="openGithub"
    />
  </div>
</template>