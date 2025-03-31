<template>
  <section class="select-none">
    <h1 class="font-mono text-2xl font-bold mt-3">
      Hello I'm Artem &#128079;
    </h1>
    <p class="tracking-tight text-sm">
      More than Java software engineer
    </p>
    <p class="mt-6">
      I am backend developer who came a long way and worked with many technologies. Keep my emphasis on backend
      development mostly around Java world.
    </p>
    <p class="mt-3">
      I currently work as Java software engineer at
      <InPlaceLink
        class="font-bold"
        :to="sovcombankTechLink"
        display-text="Sovcombank Technology"
      />
      and help develop Nizhny Novgorod it-cluster.
    </p>
    <div class="main-cover-image" />
    <p class="mt-3">
      Sometimes I like to take a note and then post it right here. So, you are welcome.
    </p>
  </section>
</template>

<script setup lang="ts">
import { ExternalLink } from '~/utils/external-link';
import InPlaceLink from '~/components/link/InPlaceLink.vue';
import { useHead } from '#imports';

const sovcombankTechLink = ExternalLink.SOVCOMBANK_TECH_WEBSITE;

useHead({
  meta: [
    {name: 'description', content: 'Artem Danilin\'s personal site'}
  ],
})

</script>

<style lang="css">
@reference '../assets/blog.css';

.main-cover-image {
  @apply my-3.5 w-full h-80 sm:h-96 rounded-xl sm:rounded-2xl bg-center bg-cover bg-cover-image;

  @media (min-width: 640px) {
    background-position-y: -20px;
  }
}

</style>