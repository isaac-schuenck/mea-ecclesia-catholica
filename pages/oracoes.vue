<template>
  <main class="flex-grow">
    <section
      id="oracoes"
      class="max-w-7xl mx-auto pt-20 pb-20 px-6 scroll-mt-24"
    >
      <ArticleTableOfContents :items="[
        { target: 'oracoes', translationKey: 'oracoes.titulo' },
        { target: 'oracoes-principais', translationKey: 'oracoes.principais_titulo' },
        { target: 'profissoes-de-fe', translationKey: 'oracoes.profissoes_titulo' },
        { target: 'oracoes-diante-da-eucaristia', translationKey: 'oracoes.eucaristia_titulo' },
        { target: 'hinos-e-canticos', translationKey: 'oracoes.hinos_titulo' },
        { target: 'sequencias-liturgicas', translationKey: 'oracoes.sequencias_titulo' },
        { target: 'oracoes-devocionais', translationKey: 'oracoes.devocionais_titulo' },
        { target: 'oracoes-da-igreja-antiga', translationKey: 'oracoes.igreja_antiga_titulo' },
      ]" />

      <ArticleSectionTitle as="h1" :text="$t('oracoes.titulo')" />

      <RichText
        keypath="oracoes.p1"
        tag="p"
        class="text-gray-600 leading-relaxed text-justify mb-2"
      />

      <p class="text-gray-600 leading-relaxed text-justify">
        {{ $t("oracoes.p2") }}
      </p>
    </section>

    <section
      id="oracoes-principais"
      class="max-w-7xl mx-auto pb-20 px-6 scroll-mt-24"
    >
      <ArticleContentRenderer :document="principalPrayersDocument" />
    </section>

    <section
      id="profissoes-de-fe"
      class="max-w-7xl mx-auto pb-20 px-6 scroll-mt-24"
    >
      <ArticleContentRenderer :document="faithProfessionsDocument" />
    </section>

    <section
      id="oracoes-diante-da-eucaristia"
      class="max-w-7xl mx-auto pb-20 px-6 scroll-mt-24"
    >
      <ArticleContentRenderer :document="eucharisticPrayersDocument" />
    </section>

    <section
      id="hinos-e-canticos"
      class="max-w-7xl mx-auto pb-20 px-6 scroll-mt-24"
    >
      <ArticleContentRenderer :document="hymnsDocument" />
    </section>

    <section
      id="sequencias-liturgicas"
      class="max-w-7xl mx-auto pb-20 px-6 scroll-mt-24"
    >
      <ArticleContentRenderer :document="liturgicalSequencesDocument" />
    </section>

    <section
      id="oracoes-devocionais"
      class="max-w-7xl mx-auto pb-20 px-6 scroll-mt-24"
    >
      <ArticleContentRenderer :document="devotionalPrayersDocument" />
    </section>

    <section
      id="oracoes-da-igreja-antiga"
      class="max-w-7xl mx-auto pb-20 px-6 scroll-mt-24"
    >
      <ArticleContentRenderer :document="ancientChurchPrayersDocument" />
    </section>
  </main>
</template>

<script setup lang="ts">
import { principalPrayersDocument } from "~/content/principalPrayers";
import {
  ancientChurchPrayersDocument,
  devotionalPrayersDocument,
  eucharisticPrayersDocument,
  faithProfessionsDocument,
  hymnsDocument,
  liturgicalSequencesDocument,
} from "~/content/prayerDocuments";
</script>
