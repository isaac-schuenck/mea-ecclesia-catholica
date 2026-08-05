<template>
  <!-- Sumário simples por âncora; o texto pode vir pronto ou pelo i18n. -->
  <nav
    :aria-label="$t('comum.sumario_pagina')"
    class="mb-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center text-sm md:text-base"
  >
    <template v-for="(item, index) in items" :key="item.target">
      <span v-if="index" class="text-gray-400" aria-hidden="true">•</span>
      <a
        :href="`#${item.target}`"
        class="font-semibold text-[#9B7322] transition-colors hover:text-[#D4AF37] hover:underline"
      >
        {{ item.label ?? $t(item.translationKey) }}
      </a>
    </template>
  </nav>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>
