<script setup lang="ts">
import NavButton from '~/components/navbar/NavButton.vue';
import ThemeSwitcher from '~/components/button/ThemeSwitcher.vue';
</script>

<template>
  <aside class="my-6 -ml-1.5 text-sm tracking-tight">
    <nav class="flex flex-row content-center">
      <div class="flex items-center gap-x-6">
        <NavButton
          link="/"
          class="p-1.5"
          link-text="home"
        />
        <NavButton
          link="/blog"
          class="p-1.5"
          link-text="blog"
        />
        <NavButton
          link="/work"
          class="p-1.5"
          link-text="work"
        />
      </div>
      <div class="ms-auto">
        <ThemeSwitcher />
      </div>
    </nav>
  </aside>
</template>

<style scoped>

</style>