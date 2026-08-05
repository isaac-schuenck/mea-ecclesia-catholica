<template>
  <article
    :id="saint.id"
    class="scroll-mt-28"
    :class="separated ? 'border-t border-[#D4AF37]/30 pt-14' : ''"
  >
    <header class="mb-6 text-center">
      <h2 class="mb-2 font-serif text-3xl font-bold text-[#041122] md:text-4xl">
        {{ saint.nome }}
      </h2>
      <p class="text-lg font-semibold text-[#9B7322]">{{ saint.titulo }}</p>
    </header>

    <div class="saint-biography text-justify leading-relaxed text-gray-600">
      <figure
        v-if="saint.imagem"
        class="saint-figure mx-auto mb-5 rounded-lg border border-gray-200 bg-white p-2 shadow-md md:float-left md:mb-4 md:mr-7"
        :class="hasFullBiography ? 'saint-summary-figure' : ''"
      >
        <img
          :src="saint.imagem"
          :alt="saint.imagem_alt || saint.nome"
          class="block w-full rounded-md"
          :class="hasFullBiography ? 'aspect-square object-cover object-top' : 'h-auto'"
        />
        <figcaption
          v-if="saint.imagem_legenda"
          class="px-2 pt-2 text-center text-xs italic text-gray-500"
        >
          {{ saint.imagem_legenda }}
        </figcaption>
      </figure>

      <SaintParagraph
        v-for="(paragraph, index) in visibleParagraphs"
        :key="index"
        :paragraph="paragraph"
        :links="saint.links"
      />

      <button
        v-if="hasFullBiography"
        type="button"
        class="ml-auto mt-3 block font-semibold text-[#9B7322] transition-colors hover:text-[#D4AF37] hover:underline"
        @click="$emit('open-biography', saint)"
      >
        {{ saint.botao }}
      </button>
    </div>
  </article>
</template>

<script setup>
import SaintParagraph from "~/components/saints/SaintParagraph.vue";

const props = defineProps({
  saint: { type: Object, required: true },
  separated: { type: Boolean, default: false },
});

defineEmits(["open-biography"]);

// Os santos mais importantes mostram um resumo aqui e deixam a história inteira no modal.
const hasFullBiography = computed(() => props.saint.exibicao === "historia_completa");
const visibleParagraphs = computed(() =>
  hasFullBiography.value ? props.saint.resumo : props.saint.bibliografia,
);
</script>

<style scoped>
.saint-figure { width: min(100%, 17rem); }
.saint-summary-figure { width: min(100%, 13rem); }
.saint-biography::after { content: ""; display: block; clear: both; }
.saint-biography :deep(p + p) { margin-top: 0.75rem; }
</style>
