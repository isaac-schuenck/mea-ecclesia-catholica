<template>
  <main class="flex-grow">
    <section
      v-for="(document, index) in liturgicalYearSections"
      :id="document.id"
      :key="document.id"
      :class="sectionClass(document.id, index)"
    >
      <ArticleTableOfContents v-if="index === 0" :items="tableOfContents" />

      <ArticleSectionTitle
        :as="index === 0 ? 'h1' : 'h2'"
        :text="$t(document.titleKey!)"
      />

      <ArticleContentRenderer :document="document" />
    </section>
  </main>
</template>

<script setup lang="ts">
import { liturgicalYearSections } from "~/content/liturgicalYear";

// O texto e as imagens vivem no documento de conteúdo; esta página só define
// a navegação e a moldura comum de cada seção do Ano Litúrgico.
const tableOfContents = [
  { target: "o-ano-liturgico", translationKey: "ano_liturgico.titulo" },
  { target: "advento", translationKey: "ano_liturgico.advento_titulo" },
  { target: "tempo-natal", translationKey: "ano_liturgico.natal_titulo" },
  { target: "tempo-comum-primeira-parte", translationKey: "ano_liturgico.tempo_comum_1_sumario" },
  { target: "quaresma", translationKey: "ano_liturgico.quaresma_titulo" },
  { target: "triduo-pascal", translationKey: "ano_liturgico.triduo_titulo" },
  { target: "tempo-pascal", translationKey: "ano_liturgico.tempo_pascal_titulo" },
  { target: "pentecostes", translationKey: "ano_liturgico.pentecostes_titulo" },
  { target: "tempo-comum-segunda-parte", translationKey: "ano_liturgico.tempo_comum_2_sumario" },
  { target: "datas-principais", translationKey: "ano_liturgico.datas_sumario" },
];

const sectionClass = (id: string, index: number) => [
  "max-w-7xl mx-auto pb-20 px-6 scroll-mt-24",
  index === 0 && "pt-20",
  id === "tempo-pascal" && "clear-both",
];
</script>
