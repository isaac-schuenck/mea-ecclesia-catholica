<template>
  <component
    :is="as"
    class="mb-12 inline-block border-b-2 border-[#D4AF37] pb-3 font-serif text-3xl font-bold text-[#041122]"
  >
    <slot>{{ text }}</slot>
  </component>
</template>

<script setup>
defineProps({
  as: {
    type: String,
    default: "h2",
  },
  text: {
    type: String,
    default: "",
  },
});
</script>
