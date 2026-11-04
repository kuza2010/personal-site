<template>
  <div
    id="ad-website"
    class="max-w-3xl flex flex-col mt-6 mx-3 md:mx-auto"
  >
    <slot />
  </div>
</template>

<style>
#ad-website {
  margin-top: 1.5rem; /* 24px */
  margin-left: auto;
  margin-right: auto;
  max-width: 46.75rem; /* 748px */

  /* 768px */
  @media (max-width: 48rem) {
    margin-top: 0.625rem;       /* 10px */
    margin-right: 0.625rem;
    margin-left: 0.625rem;
  }
}
</style>