<template>
  <Teleport to="body">
    <div
      v-if="saint"
      class="fixed inset-0 z-[190] flex items-center justify-center bg-black/80 p-3 sm:p-6 md:p-10"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="`${saint.id}-biography-title`"
      @click.self="$emit('close')"
    >
      <article
        class="relative max-h-[94vh] w-full max-w-5xl overflow-y-auto rounded-xl border border-[#D4AF37]/35 bg-[#FFF9ED] px-5 py-7 shadow-2xl sm:px-8 md:px-12 md:py-10"
      >
        <button
          type="button"
          class="sticky top-0 z-10 ml-auto -mr-1 -mt-2 flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-[#041122]/90 text-2xl leading-none text-white shadow-lg transition hover:bg-[#041122] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          aria-label="Fechar biografia"
          @click="$emit('close')"
        >
          <span aria-hidden="true">×</span>
        </button>

        <header class="-mt-7 mb-8 pr-12 text-center">
          <h2
            :id="`${saint.id}-biography-title`"
            class="font-serif text-3xl font-bold text-[#041122] md:text-4xl"
          >
            {{ saint.nome }}
          </h2>
          <p class="mt-2 text-lg font-semibold text-[#9B7322]">
            {{ saint.titulo }}
          </p>
        </header>

        <div class="saint-biography flow-root text-justify leading-relaxed text-gray-600">
          <figure
            v-if="saint.imagem"
            class="saint-figure mx-auto mb-5 bg-white p-2 shadow-md sm:float-left sm:mr-7 sm:mb-4"
          >
            <img
              :src="saint.imagem"
              :alt="saint.imagem_alt || saint.nome"
              data-lightbox-image
              class="block h-auto w-full rounded-md"
            />
            <figcaption
              v-if="saint.imagem_legenda"
              class="px-2 pt-2 text-center text-xs italic text-gray-500"
            >
              {{ saint.imagem_legenda }}
            </figcaption>
          </figure>

          <SaintParagraph
            v-for="(paragraph, index) in saint.bibliografia"
            :key="index"
            :paragraph="paragraph"
            :links="saint.links"
          />
        </div>
      </article>
    </div>
  </Teleport>
</template>

<script setup>
import SaintParagraph from "~/components/saints/SaintParagraph.vue";

defineProps({
  saint: {
    type: Object,
    default: null,
  },
});

defineEmits(["close"]);
</script>

<style scoped>
.saint-figure {
  width: min(100%, 17rem);
}

.saint-biography p + p {
  margin-top: 0.75rem;
}
</style>
