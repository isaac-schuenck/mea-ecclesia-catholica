<template>
  <component
    :is="as"
    class="text-justify text-sm italic leading-relaxed text-gray-500"
  >
    <slot />
  </component>
</template>

<script setup>
defineProps({
  as: { type: String, default: "p" },
});
</script>
