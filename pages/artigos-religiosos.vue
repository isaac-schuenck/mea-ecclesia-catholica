<template>
  <main class="flex-grow">
    <section id="artigos-religiosos" class="max-w-7xl mx-auto pt-20 pb-12 px-6 scroll-mt-24">
      <ArticleTableOfContents :items="[
        { target: 'artigos-religiosos', translationKey: 'artigos_religiosos.titulo' },
        ...categorias.map((categoria) => ({
          target: categoria.id,
          translationKey: categoria.titleKey,
        })),
      ]" />

      <ArticleSectionTitle as="h1" :text="$t('artigos_religiosos.titulo')" />

      <RichText
        keypath="artigos_religiosos.titulo_p1"
        tag="p"
        class="text-gray-600 leading-relaxed text-justify mb-2"
              />

      <RichText
        keypath="artigos_religiosos.titulo_p2"
        tag="p"
        class="text-gray-600 leading-relaxed text-justify mb-2"
              />

      <RichText
        keypath="artigos_religiosos.titulo_p3"
        tag="p"
        class="text-gray-600 leading-relaxed text-justify"

                :links='{"anjos":{"to":"/intercessao-e-mediacao"},"santos":{"to":"/intercessao-e-mediacao"}}'
              />
    </section>

    <section class="max-w-7xl mx-auto px-6 pb-20">
      <div
        v-for="categoria in categorias"
        :id="categoria.id"
        :key="categoria.id"
        class="mb-16 last:mb-0 scroll-mt-24"
      >
        <h2
          class="text-3xl font-bold text-[#041122] mb-8 font-serif border-b-2 border-[#D4AF37] pb-3 inline-block"
        >
          {{ $t(categoria.titleKey) }}
        </h2>

        <RichText
          :keypath="categoria.textKey"
          tag="p"
          class="text-gray-600 leading-relaxed text-justify mb-6"
              />

        <div v-if="categoria.articleIds.length" class="space-y-4">
          <div
            v-for="item in artigosLista.filter((artigo) => categoria.articleIds.includes(artigo.id))"
            :id="item.id"
            :key="item.id"
            class="border-b border-[#D4AF37]/30 pb-4 last:border-0 scroll-mt-24"
          >

          <button @click="item.isOpen = !item.isOpen" class="w-full flex items-center py-6 hover:opacity-80 transition-opacity text-left group">
            <svg class="w-6 h-6 text-[#D4AF37] mr-4 transition-transform duration-300 flex-shrink-0"
                 :class="item.isOpen ? 'rotate-0' : 'rotate-90'"
                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
            </svg>

            <h3 class="text-2xl font-bold text-[#041122] font-serif group-hover:text-[#D4AF37] transition-colors">
              {{ $t(item.titleKey) }}
            </h3>
          </button>

          <div v-show="item.isOpen" class="pt-4 pb-8 animate-in fade-in duration-300">
            <ArticleContentRenderer :document="item.document" :links="religiousArticleLinks" />
          </div>
        </div>
      </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from "vue";
import { religiousArticleLinks } from "~/config/pageKeywordLinks";
import {
  religiousArticleCategories,
  religiousArticles,
} from "~/content/religiousArticles";

const route = useRoute();

const categorias = religiousArticleCategories;

// A página controla apenas o estado das gavetas; o conteúdo mora no documento.
const artigosLista = ref(
  religiousArticles.map((document) => ({
    id: document.id,
    titleKey: document.titleKey,
    document,
    isOpen: false,
  })),
);

const openArticleFromHash = async () => {
  const articleId = decodeURIComponent(route.hash.slice(1));
  const article = artigosLista.value.find((item) => item.id === articleId);
  if (!article) return;

  article.isOpen = true;
  await nextTick();
  document.getElementById(articleId)?.scrollIntoView({ block: "start" });
};

onMounted(openArticleFromHash);
watch(() => route.hash, openArticleFromHash);
</script>
