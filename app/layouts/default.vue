<template>
  <ContentWrapper>
    <Navbar />
    <MainContentWrapper>
      <slot />
    </MainContentWrapper>
    <Footer class="my-6" />
  </ContentWrapper>
</template>

<script setup lang="ts">
import Navbar from '~/components/navbar/index.vue';
import ContentWrapper from '~/components/common/ContentWrapper.vue';
import MainContentWrapper from '~/components/common/MainContentWrapper.vue';
</script>