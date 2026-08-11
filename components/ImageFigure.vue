<template>
  <figure
    class="m-0 rounded-lg border border-gray-200 bg-white p-2 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
    role="button"
    tabindex="0"
    :aria-label="`${captionKey ? $t(captionKey) : caption || alt} — ampliar imagem`"
    @keydown.enter.prevent="openWithKeyboard"
    @keydown.space.prevent="openWithKeyboard"
  >
    <div v-if="imageWrapperClass" :class="imageWrapperClass">
      <img
        :src="src"
        :alt="alt"
        data-lightbox-image
        class="w-full"
        :class="imageClass"
      />
    </div>
    <img
      v-else
      :src="src"
      :alt="alt"
      data-lightbox-image
      class="w-full"
      :class="imageClass"
    />

    <figcaption
      v-if="caption || captionKey"
      class="mt-2 mb-1 px-1 text-center text-xs italic leading-relaxed text-gray-500"
    >
      {{ captionKey ? $t(captionKey) : caption }}
    </figcaption>
  </figure>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    default: "",
  },
  captionKey: {
    type: String,
    default: "",
  },
  imageClass: {
    type: [String, Array, Object],
    default: "h-auto rounded-md object-cover",
  },
  imageWrapperClass: {
    type: [String, Array, Object],
    default: "",
  },
});

// O lightbox global escuta cliques nas imagens; o teclado reutiliza o mesmo caminho.
const openWithKeyboard = (event) => {
  event.currentTarget.querySelector("img")?.click();
};
</script>
