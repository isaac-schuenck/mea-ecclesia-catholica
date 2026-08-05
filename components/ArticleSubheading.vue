<template>
  <component
    :is="as"
    class="scroll-mt-24 font-serif font-bold text-[#041122]"
    :class="minor
      ? 'mb-4 text-xl'
      : compact
        ? 'mb-5 text-2xl'
        : 'mb-5 mt-12 text-2xl'"
  >
    <slot>{{ text }}</slot>
  </component>
</template>

<script setup>
defineProps({
  as: { type: String, default: "h3" },
  minor: { type: Boolean, default: false },
  compact: { type: Boolean, default: false },
  text: { type: String, default: "" },
});
</script>
