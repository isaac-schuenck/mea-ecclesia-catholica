<template>
  <main class="flex-grow">
    <section id="artigos-religiosos" class="max-w-7xl mx-auto pt-20 pb-12 px-6 scroll-mt-24">
      <ArticleTableOfContents :items="[
        { target: 'artigos-religiosos', translationKey: 'artigos_religiosos.titulo' },
        ...categorias.map((categoria) => ({
          target: categoria.id,
          translationKey: categoria.tituloKey,
        })),
      ]" />

      <ArticleSectionTitle as="h1" :text="$t('artigos_religiosos.titulo')" />

      <i18n-t
        keypath="artigos_religiosos.titulo_p1"
        tag="p"
        class="text-gray-600 leading-relaxed text-justify mb-2"
      >
        <template #tradicao>
          <AppLink
            to="/tradicao-e-magisterio"
            class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200"
          >
            {{ $t("palavras_chave.tradicao") }}
          </AppLink>
        </template>

        <template #catecismo2111>
          <AppLink
            to="https://www.vatican.va/archive/cathechism_po/index_new/p3s2cap1_2083-2195_po.html#2111"
            class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200"
          >
            {{ $t("palavras_chave.catecismo2111") }}
          </AppLink>
        </template>

        <template #idolatria>
          <AppLink
            to="\imagens-e-idolatria"
            class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200"
          >
            {{ $t("palavras_chave.idolatria") }}
          </AppLink>
        </template>

        <template #imagens_sagradas>
          <AppLink
            to="\imagens-e-idolatria"
            class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200"
          >
            {{ $t("palavras_chave.imagens_sagradas") }}
          </AppLink>
        </template>
      </i18n-t>

      <i18n-t
        keypath="artigos_religiosos.titulo_p2"
        tag="p"
        class="text-gray-600 leading-relaxed text-justify mb-2"
      >
        <template #sacramentos>
          <AppLink
            to="/sacramentos"
            class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200"
          >
            {{ $t("palavras_chave.sacramentos") }}
          </AppLink>
        </template>

        <template #catecismo1667>
          <AppLink
            to="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap4_1667-1690_po.html#2111"
            class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200"
          >
            {{ $t("palavras_chave.catecismo1667") }}
          </AppLink>
        </template>
      </i18n-t>

      <i18n-t
        keypath="artigos_religiosos.titulo_p3"
        tag="p"
        class="text-gray-600 leading-relaxed text-justify"
      >
        <template #batalha_epiritual>
          <AppLink
            to="/oracoes"
            class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200"
          >
            {{ $t("palavras_chave.batalha_epiritual") }}
          </AppLink>
        </template>

        <template #oracao>
          <AppLink
            to="/oracoes"
            class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200"
          >
            {{ $t("palavras_chave.oracao") }}
          </AppLink>
        </template>

        <template #intercessao>
          <AppLink
            to="/intercessao-e-mediacao"
            class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200"
          >
            {{ $t("palavras_chave.intercessao") }}
          </AppLink>
        </template>

        <template #virgem_maria>
          <AppLink
            to="/dogmas-marianos"
            class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200"
          >
            {{ $t("palavras_chave.virgem_maria") }}
          </AppLink>
        </template>

        <template #anjos>
            <AppLink
              to="/intercessao-e-mediacao"
              class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200"
            >
              {{ $t("palavras_chave.anjos") }}
            </AppLink>
        </template>

        <template #santos>
            <AppLink
              to="/intercessao-e-mediacao"
              class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200"
            >
              {{ $t("palavras_chave.santos") }}
            </AppLink>
        </template>

        <template #igreja_triunfante>
            <AppLink
              to="/intercessao-e-mediacao"
              class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200"
            >
              {{ $t("palavras_chave.igreja_triunfante") }}
            </AppLink>
        </template>
      </i18n-t>
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
          {{ $t(categoria.tituloKey) }}
        </h2>

        <i18n-t
          :keypath="categoria.textoKey"
          tag="p"
          class="text-gray-600 leading-relaxed text-justify mb-6"
        >
          <template #santa_missa>
            <AppLink to="/missa" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">
              {{ $t("palavras_chave.santa_missa") }}
            </AppLink>
          </template>
          <template #sacramentos>
            <AppLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">
              {{ $t("palavras_chave.sacramentos") }}
            </AppLink>
          </template>
        </i18n-t>

        <div v-if="categoria.itens.length" class="space-y-4">
          <div
            v-for="item in artigosLista.filter((artigo) => categoria.itens.includes(artigo.id))"
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
              {{ $t(item.tituloKey) }}
            </h3>
          </button>

          <div v-show="item.isOpen" class="pt-4 pb-8 animate-in fade-in duration-300">
            
            <div v-if="item.id === 'crucifixo'" class="clearfix text-gray-700">


              <div class="float-right ml-6 mb-2 w-1/3 md:w-1/4 max-w-sm">
                <ImageFigure
                  src="https://m.media-amazon.com/images/I/81XLIpDnoLL._AC_SX679_.jpg"
                  alt="Crucifixo"
                  caption-key="imagens.cristo_crucificado"
                />
              </div>

              <i18n-t keypath="artigos_religiosos.cruxifixo_p1" tag="p" class="leading-relaxed text-justify mb-2"></i18n-t>

              <i18n-t keypath="artigos_religiosos.cruxifixo_p2" tag="p" class="leading-relaxed text-justify mb-2">
                <template #ressurreicao><AppLink to="/artigos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.ressurreicao") }}</AppLink></template>
                <template #pascoa><AppLink to="/ano-liturgico" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.pascoa") }}</AppLink></template>
                <template #sexta_Feira_santa><AppLink to="/ano-liturgico" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.sexta_Feira_santa") }}</AppLink></template>
              </i18n-t>

              <i18n-t keypath="artigos_religiosos.cruxifixo_p3" tag="p" class="leading-relaxed text-justify mb-2">
                <template #SC5><a href="https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19631204_sacrosanctum-concilium_po.html#5" target="_blank" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.SC5") }}</a></template>
              </i18n-t>

              <i18n-t keypath="artigos_religiosos.cruxifixo_p4" tag="p" class="leading-relaxed text-justify">
                <template #batalha_epiritual><AppLink to="/oracoes" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.batalha_epiritual") }}</AppLink></template>
                <template #tradicao><AppLink to="/tradicao-e-magisterio" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.tradicao") }}</AppLink></template>
                <template #sinal_da_cruz><AppLink to="/oracoes" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.sinal_da_cruz") }}</AppLink></template>
                <template #padre_gabriele_amorth><a href="https://pt.wikipedia.org/wiki/Gabriele_Amorth" target="_blank" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.padre_gabriele_amorth") }}</a></template>
              </i18n-t>
            </div>

            <div v-if="item.id === 'cruz_petrina'" class="flow-root text-gray-700">
              
              <div class="float-right ml-6 mb-2 w-24 md:w-32">
                <ImageFigure
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Peter%27s_Cross.svg/250px-Peter%27s_Cross.svg.png"
                  alt="Cruz Petrina"
                  caption-key="imagens.cruz_petrina"
                  image-class="h-auto bg-white p-3"
                />
              </div>

              <i18n-t keypath="artigos_religiosos.cruz_petrina_p1" tag="p" class="leading-relaxed text-justify mb-2">
                <template #tradicao><AppLink to="/tradicao-e-magisterio" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.tradicao") }}</AppLink></template>
              </i18n-t>

              <i18n-t keypath="artigos_religiosos.cruz_petrina_p2" tag="p" class="leading-relaxed text-justify mb-2">
                <template #sao_pedro><AppLink to="/santos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.sao_pedro") }}</AppLink></template>
                <template #eusebio_cesareia><a href="https://pt.wikipedia.org/wiki/Eus%C3%A9bio_de_Cesareia" target="_blank" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.eusebio_cesareia") }}</a></template>
              </i18n-t>

              <i18n-t keypath="artigos_religiosos.cruz_petrina_p3" tag="p" class="leading-relaxed text-justify mb-4 italic border-l-4 border-[#D4AF37] pl-4 text-gray-500"></i18n-t>

              <div class="float-left mr-6 mb-2 w-48">
                <ImageFigure
                  src="/sjpii.jpeg"
                  alt="São João Paulo II"
                  caption-key="imagens.catedra_papal"
                />
              </div>

              <i18n-t keypath="artigos_religiosos.cruz_petrina_p4" tag="p" class="leading-relaxed text-justify mb-2">
                <template #texto_apocrifo><AppLink to="/apocrifos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.texto_apocrifo") }}</AppLink></template>
                <template #wilhelm><a href="https://en.wikipedia.org/wiki/Wilhelm_Schneemelcher" target="_blank" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.wilhelm") }}</a></template>
                <template #margherita><a href="https://pt.wikipedia.org/wiki/Margherita_Guarducci" target="_blank" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.margherita") }}</a></template>
              </i18n-t>

              <i18n-t keypath="artigos_religiosos.cruz_petrina_p5" tag="p" class="leading-relaxed text-justify">
                <template #sao_pedro><AppLink to="/santos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.sao_pedro") }}</AppLink></template>
                <template #papado><AppLink to="/papado" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.papado") }}</AppLink></template>
              </i18n-t>

            </div>

            <div v-if="item.id === 'terco'" class="flow-root text-gray-700">

              <div class="float-left mr-6 mb-2 w-32 md:w-48">
                <ImageFigure
                  src="https://historicenterprises.com/bmz_cache/4/4575ffb7a838189fa7b0b04961b2e692.image.400x450.jpeg"
                  alt="Medieval paternoster"
                  caption-key="imagens.paternosters"
                />
              </div>

              <i18n-t keypath="artigos_religiosos.terco_p1" tag="p" class="leading-relaxed text-justify mb-2">
              </i18n-t>

              <i18n-t keypath="artigos_religiosos.terco_p2" tag="p" class="leading-relaxed text-justify mb-2">
                <template #salmos><a href="https://www.vatican.va/archive/bible/psalms/documents/bible_psalms_po.html" target="_blank" rel="noopener noreferrer" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.salmos") }}</a></template>
                <template #biblia><a href="https://www.vatican.va/archive/bible/index_po.htm" target="_blank" rel="noopener noreferrer" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.biblia") }}</a></template>
                <template #liturgia_horas><a href="https://www.vatican.va/content/paul-vi/pt/apost_constitutions/documents/hf_p-vi_apc_19701101_laudis-canticum.html" target="_blank" rel="noopener noreferrer" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.liturgia_horas") }}</a></template>
                <template #pai_nosso><AppLink to="/oracoes" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.pai_nosso") }}</AppLink></template>
                <template #paternosters><a href="https://www.newadvent.org/cathen/13184b.htm" target="_blank" rel="noopener noreferrer" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.paternosters") }}</a></template>
                <template #enciclopedia_catolica><a href="https://www.newadvent.org/cathen/13184b.htm" target="_blank" rel="noopener noreferrer" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.enciclopedia_catolica") }}</a></template>
                <template #abadia_cluny><a href="https://pt.wikipedia.org/wiki/Abadia_de_Cluny" target="_blank" rel="noopener noreferrer" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.abadia_cluny") }}</a></template>
              </i18n-t>

              <i18n-t keypath="artigos_religiosos.terco_p3" tag="p" class="leading-relaxed text-justify mb-2">
                <template #devocao><AppLink to="/artigos-religiosos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.devocao") }}</AppLink></template>
                <template #ave_maria><AppLink to="/oracoes" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.ave_maria") }}</AppLink></template>
              </i18n-t>


              <div class="float-right ml-6 mb-2 w-48">
                <ImageFigure
                  src="https://www.arsvalue.com/Upl/Auctions/2370/4234/572314/223-795840.jpg"
                  alt="Madonna del Rosario San Domenico dipinto"
                  caption-key="imagens.madonna_do_rosário"
                />
              </div>

              <i18n-t keypath="artigos_religiosos.terco_p4" tag="p" class="leading-relaxed text-justify mb-2">
                <template #sao_domingos><AppLink to="/santos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.sao_domingos") }}</AppLink></template>
                <template #virgem_maria><AppLink to="/artigos-religiosos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.virgem_maria") }}</AppLink></template>
                <template #rosario><a href="https://www.vatican.va/special/rosary/documents/misteri_po.html" target="_blank" rel="noopener noreferrer" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.rosario") }}</a></template>
              </i18n-t>

              <i18n-t keypath="artigos_religiosos.terco_p5" tag="p" class="leading-relaxed text-justify">
                <template #ave_marias><AppLink to="/oracoes" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.ave_marias") }}</AppLink></template>
                <template #rosario><a href="https://www.vatican.va/special/rosary/documents/misteri_po.html" target="_blank" rel="noopener noreferrer" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.rosario") }}</a></template>
                <template #misterios_luminosos><a href="https://www.vatican.va/special/rosary/documents/misteri_luminosi_po.html" target="_blank" rel="noopener noreferrer" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.misterios_luminosos") }}</a></template>
                <template #papa_joao_paulo_ii><a href="https://www.vatican.va/content/john-paul-ii/pt.html" target="_blank" rel="noopener noreferrer" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.papa_joao_paulo_ii") }}</a></template>
              </i18n-t>

              <i18n-t keypath="artigos_religiosos.terco_p6" tag="p" class="leading-relaxed text-justify mb-2">
                <template #jesus_cristo><AppLink to="/" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.jesus_cristo") }}</AppLink></template>
              </i18n-t>

              <i18n-t keypath="artigos_religiosos.terco_p7" tag="p" class="leading-relaxed text-justify">
                <template #batalha_espiritual><AppLink to="/oracoes" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.batalha_epiritual") }}</AppLink></template>
                <template #sao_pio><AppLink to="/santos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.sao_pio") }}</AppLink></template>
                <template #aparicoes><AppLink to="/artigos-religiosos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.aparicoes") }}</AppLink></template>
                <template #fatima><a href="https://www.fatima.pt/pt/" target="_blank" rel="noopener noreferrer" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.fatima") }}</a></template>
                <template #lourdes><a href="https://www.lourdes-france.com/pt-pt/" target="_blank" rel="noopener noreferrer" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.lourdes") }}</a></template>
                <template #virgem_maria><AppLink to="/artigos-religiosos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.virgem_maria") }}</AppLink></template>
              </i18n-t>

            </div>

          </div>
        </div>
      </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { nextTick, onMounted, ref, watch } from "vue";

const route = useRoute();

const categorias = [
  {
    id: "artigos-liturgicos",
    tituloKey: "artigos_religiosos.artigos_liturgicos_titulo",
    textoKey: "artigos_religiosos.artigos_liturgicos_p1",
    itens: [],
  },
  {
    id: "artigos-devocionais",
    tituloKey: "artigos_religiosos.artigos_devocionais_titulo",
    textoKey: "artigos_religiosos.artigos_devocionais_p1",
    itens: ["crucifixo", "terco"],
  },
  {
    id: "simbolos-cristaos",
    tituloKey: "artigos_religiosos.simbolos_cristaos_titulo",
    textoKey: "artigos_religiosos.simbolos_cristaos_p1",
    itens: ["cruz_petrina"],
  },
];

// O array agora fica super enxuto. Ele só serve para o Vue saber o que criar e controlar quem tá aberto/fechado.
const artigosLista = ref([
  {
    id: "crucifixo",
    tituloKey: "artigos_religiosos.cruxifixo", // Ex: "1. Crucifixo"
    isOpen: false,
  },
  {
    id: "cruz_petrina",
    tituloKey: "artigos_religiosos.cruz_petrina", // Ex: "2. Cruz Petrina"
    isOpen: false,
  },
  {
    id: "terco",
    tituloKey: "artigos_religiosos.terco", // Lembre de criar isso no pt.json (Ex: "3. O Santo Terço")
    isOpen: false,
  },
]);

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
