<template>
  <main class="flex-grow">
    <section class="max-w-7xl mx-auto pt-20 pb-12 px-6">
      <h3
        class="text-3xl font-bold text-[#041122] mb-12 font-serif border-b-2 border-[#D4AF37] pb-3 inline-block"
      >
        {{ $t("artigos_religiosos.titulo") }}
      </h3>

      <i18n-t
        keypath="artigos_religiosos.titulo_p1"
        tag="p"
        class="text-gray-600 leading-relaxed text-justify mb-2"
      >
        <template #tradicao>
          <NuxtLink
            to="/tradicao-e-magisterio"
            class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200"
          >
            {{ $t("palavras_chave.tradicao") }}
          </NuxtLink>
        </template>

        <template #catecismo2111>
          <NuxtLink
            to="https://www.vatican.va/archive/cathechism_po/index_new/p3s2cap1_2083-2195_po.html#2111"
            class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200"
          >
            {{ $t("palavras_chave.catecismo2111") }}
          </NuxtLink>
        </template>

        <template #idolatria>
          <NuxtLink
            to="\imagens-e-idolatria"
            class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200"
          >
            {{ $t("palavras_chave.idolatria") }}
          </NuxtLink>
        </template>

        <template #imagens_sagradas>
          <NuxtLink
            to="\imagens-e-idolatria"
            class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200"
          >
            {{ $t("palavras_chave.imagens_sagradas") }}
          </NuxtLink>
        </template>
      </i18n-t>

      <i18n-t
        keypath="artigos_religiosos.titulo_p2"
        tag="p"
        class="text-gray-600 leading-relaxed text-justify mb-2"
      >
        <template #sacramentos>
          <NuxtLink
            to="/sacramentos"
            class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200"
          >
            {{ $t("palavras_chave.sacramentos") }}
          </NuxtLink>
        </template>

        <template #catecismo1667>
          <NuxtLink
            to="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap4_1667-1690_po.html#2111"
            class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200"
          >
            {{ $t("palavras_chave.catecismo1667") }}
          </NuxtLink>
        </template>
      </i18n-t>

      <i18n-t
        keypath="artigos_religiosos.titulo_p3"
        tag="p"
        class="text-gray-600 leading-relaxed text-justify"
      >
        <template #batalha_epiritual>
          <NuxtLink
            to="/oracoes"
            class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200"
          >
            {{ $t("palavras_chave.batalha_epiritual") }}
          </NuxtLink>
        </template>

        <template #oracao>
          <NuxtLink
            to="/oracoes"
            class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200"
          >
            {{ $t("palavras_chave.oracao") }}
          </NuxtLink>
        </template>

        <template #intercessao>
          <NuxtLink
            to="/intercessao-e-mediacao"
            class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200"
          >
            {{ $t("palavras_chave.intercessao") }}
          </NuxtLink>
        </template>

        <template #virgem_maria>
          <NuxtLink
            to="/dogmas-marianos"
            class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200"
          >
            {{ $t("palavras_chave.virgem_maria") }}
          </NuxtLink>
        </template>

        <template #anjos>
            <NuxtLink
              to="/intercessao-e-mediacao"
              class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200"
            >
              {{ $t("palavras_chave.anjos") }}
            </NuxtLink>
        </template>

        <template #santos>
            <NuxtLink
              to="/intercessao-e-mediacao"
              class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200"
            >
              {{ $t("palavras_chave.santos") }}
            </NuxtLink>
        </template>

        <template #igreja_triunfante>
            <NuxtLink
              to="/intercessao-e-mediacao""
              class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200"
            >
              {{ $t("palavras_chave.igreja_triunfante") }}
            </NuxtLink>
        </template>
      </i18n-t>
    </section>

    <section class="max-w-7xl mx-auto px-6 pb-20">
      
      <div class="space-y-4">
        
        <div v-for="item in artigosLista" :key="item.id" class="border-b border-[#D4AF37]/30 pb-4 last:border-0">
          
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
                <figure class="bg-white rounded-lg shadow-md border border-gray-200 p-2 m-0">
                  
                  <img src="https://m.media-amazon.com/images/I/81XLIpDnoLL._AC_SX679_.jpg" alt="Crucifixo" class="w-full h-auto rounded-lg shadow-md border border-gray-200 object-cover" />
                  
                  <figcaption class="text-xs text-gray-500 text-center mt-2 mb-1 px-1 italic leading-relaxed">
                    {{ $t('imagens.cristo_crucificado') }}
                  </figcaption>
                  
                </figure>
              </div>

              <i18n-t keypath="artigos_religiosos.cruxifixo_p1" tag="p" class="leading-relaxed text-justify mb-2"></i18n-t>

              <i18n-t keypath="artigos_religiosos.cruxifixo_p2" tag="p" class="leading-relaxed text-justify mb-2">
                <template #ressurreicao><NuxtLink to="/artigos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.ressurreicao") }}</NuxtLink></template>
                <template #pascoa><NuxtLink to="/ano-liturgico" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.pascoa") }}</NuxtLink></template>
                <template #sexta_Feira_santa><NuxtLink to="/ano-liturgico" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.sexta_Feira_santa") }}</NuxtLink></template>
              </i18n-t>

              <i18n-t keypath="artigos_religiosos.cruxifixo_p3" tag="p" class="leading-relaxed text-justify mb-2">
                <template #SC5><a href="https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19631204_sacrosanctum-concilium_po.html#5" target="_blank" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.SC5") }}</a></template>
              </i18n-t>

              <i18n-t keypath="artigos_religiosos.cruxifixo_p4" tag="p" class="leading-relaxed text-justify">
                <template #batalha_epiritual><NuxtLink to="/oracoes" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.batalha_epiritual") }}</NuxtLink></template>
                <template #tradicao><NuxtLink to="/tradicao-e-magisterio" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.tradicao") }}</NuxtLink></template>
                <template #sinal_da_cruz><NuxtLink to="/oracoes" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.sinal_da_cruz") }}</NuxtLink></template>
                <template #padre_gabriele_amorth><a href="https://pt.wikipedia.org/wiki/Gabriele_Amorth" target="_blank" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.padre_gabriele_amorth") }}</a></template>
              </i18n-t>
            </div>

            <div v-if="item.id === 'cruz_petrina'" class="flow-root text-gray-700">
              
              <div class="float-right ml-6 mb-2 w-24 md:w-32">
                <figure class="bg-white rounded-lg shadow-md border border-gray-200 p-2 m-0">
                  
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Peter%27s_Cross.svg/250px-Peter%27s_Cross.svg.png" alt="Cruz Petrina" class="w-full h-auto rounded-lg shadow-sm border border-gray-200 bg-white p-3" />
                  
                  <figcaption class="text-xs text-gray-500 text-center mt-2 mb-1 px-1 italic leading-relaxed">
                    {{ $t('imagens.cruz_petrina') }}
                  </figcaption>
                  
                </figure>
              </div>

              <i18n-t keypath="artigos_religiosos.cruz_petrina_p1" tag="p" class="leading-relaxed text-justify mb-2">
                <template #tradicao><NuxtLink to="/tradicao-e-magisterio" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.tradicao") }}</NuxtLink></template>
              </i18n-t>

              <i18n-t keypath="artigos_religiosos.cruz_petrina_p2" tag="p" class="leading-relaxed text-justify mb-2">
                <template #sao_pedro><NuxtLink to="/santos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.sao_pedro") }}</NuxtLink></template>
                <template #eusebio_cesareia><a href="https://pt.wikipedia.org/wiki/Eus%C3%A9bio_de_Cesareia" target="_blank" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.eusebio_cesareia") }}</a></template>
              </i18n-t>

              <i18n-t keypath="artigos_religiosos.cruz_petrina_p3" tag="p" class="leading-relaxed text-justify mb-4 italic border-l-4 border-[#D4AF37] pl-4 text-gray-500"></i18n-t>

              <div class="float-left mr-6 mb-2 w-48">
                <figure class="bg-white rounded-lg shadow-md border border-gray-200 p-2 m-0">
                  
                  <img src="/sjpii.jpeg" alt="São João Paulo II" class="w-full h-auto rounded-lg shadow-md border border-gray-200 object-cover" />
                  
                  <figcaption class="text-xs text-gray-500 text-center mt-2 mb-1 px-1 italic leading-relaxed">
                    {{ $t('imagens.catedra_papal') }}
                  </figcaption>
                  
                </figure>
              </div>

              <i18n-t keypath="artigos_religiosos.cruz_petrina_p4" tag="p" class="leading-relaxed text-justify mb-2">
                <template #texto_apocrifo><NuxtLink to="/apocrifos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.texto_apocrifo") }}</NuxtLink></template>
                <template #wilhelm><a href="https://en.wikipedia.org/wiki/Wilhelm_Schneemelcher" target="_blank" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.wilhelm") }}</a></template>
                <template #margherita><a href="https://pt.wikipedia.org/wiki/Margherita_Guarducci" target="_blank" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.margherita") }}</a></template>
              </i18n-t>

              <i18n-t keypath="artigos_religiosos.cruz_petrina_p5" tag="p" class="leading-relaxed text-justify">
                <template #sao_pedro><NuxtLink to="/santos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.sao_pedro") }}</NuxtLink></template>
                <template #papado><NuxtLink to="/papado" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.papado") }}</NuxtLink></template>
              </i18n-t>

            </div>

            <div v-if="item.id === 'terco'" class="flow-root text-gray-700">

              <div class="float-left mr-6 mb-2 w-32 md:w-48">
                  <figure class="bg-white rounded-lg shadow-md border border-gray-200 p-2 m-0">
                  
                  <img 
                    src="https://historicenterprises.com/bmz_cache/4/4575ffb7a838189fa7b0b04961b2e692.image.400x450.jpeg" 
                    alt="Medieval paternoster" 
                    class="w-full h-auto rounded object-cover" 
                  />
                  
                  <figcaption class="text-xs text-gray-500 text-center mt-2 mb-1 px-1 italic leading-relaxed">
                    {{ $t('imagens.paternosters') }}
                  </figcaption>
                  
                </figure>
              </div>

              <i18n-t keypath="artigos_religiosos.terco_p1" tag="p" class="leading-relaxed text-justify mb-2">
              </i18n-t>

              <i18n-t keypath="artigos_religiosos.terco_p2" tag="p" class="leading-relaxed text-justify mb-2">
                <template #salmos><a href="https://www.vatican.va/archive/bible/psalms/documents/bible_psalms_po.html" target="_blank" rel="noopener noreferrer" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.salmos") }}</a></template>
                <template #biblia><a href="https://www.vatican.va/archive/bible/index_po.htm" target="_blank" rel="noopener noreferrer" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.biblia") }}</a></template>
                <template #liturgia_horas><a href="https://www.vatican.va/content/paul-vi/pt/apost_constitutions/documents/hf_p-vi_apc_19701101_laudis-canticum.html" target="_blank" rel="noopener noreferrer" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.liturgia_horas") }}</a></template>
                <template #pai_nosso><NuxtLink to="/oracoes" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.pai_nosso") }}</NuxtLink></template>
                <template #paternosters><a href="https://www.newadvent.org/cathen/13184b.htm" target="_blank" rel="noopener noreferrer" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.paternosters") }}</a></template>
                <template #enciclopedia_catolica><a href="https://www.newadvent.org/cathen/13184b.htm" target="_blank" rel="noopener noreferrer" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.enciclopedia_catolica") }}</a></template>
                <template #abadia_cluny><a href="https://pt.wikipedia.org/wiki/Abadia_de_Cluny" target="_blank" rel="noopener noreferrer" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.abadia_cluny") }}</a></template>
              </i18n-t>

              <i18n-t keypath="artigos_religiosos.terco_p3" tag="p" class="leading-relaxed text-justify mb-2">
                <template #devocao><NuxtLink to="/artigos-religiosos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.devocao") }}</NuxtLink></template>
                <template #ave_maria><NuxtLink to="/oracoes" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.ave_maria") }}</NuxtLink></template>
              </i18n-t>


              <div class="float-right ml-6 mb-2 w-48">
                <figure class="bg-white rounded-lg shadow-md border border-gray-200 p-2 m-0">
                  
                  <img src="https://www.arsvalue.com/Upl/Auctions/2370/4234/572314/223-795840.jpg" 
                  alt="Madonna del Rosario San Domenico dipinto" 
                  class="w-full h-auto rounded-lg shadow-md border border-gray-200 object-cover" />
                  
                  <figcaption class="text-xs text-gray-500 text-center mt-2 mb-1 px-1 italic leading-relaxed">
                    {{ $t('imagens.madonna_do_rosário') }}
                  </figcaption>
                  
                </figure>
              </div>

              <i18n-t keypath="artigos_religiosos.terco_p4" tag="p" class="leading-relaxed text-justify mb-2">
                <template #sao_domingos><NuxtLink to="/santos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.sao_domingos") }}</NuxtLink></template>
                <template #virgem_maria><NuxtLink to="/artigos-religiosos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.virgem_maria") }}</NuxtLink></template>
                <template #rosario><a href="https://www.vatican.va/special/rosary/documents/misteri_po.html" target="_blank" rel="noopener noreferrer" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.rosario") }}</a></template>
              </i18n-t>

              <i18n-t keypath="artigos_religiosos.terco_p5" tag="p" class="leading-relaxed text-justify">
                <template #ave_marias><NuxtLink to="/oracoes" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.ave_marias") }}</NuxtLink></template>
                <template #rosario><a href="https://www.vatican.va/special/rosary/documents/misteri_po.html" target="_blank" rel="noopener noreferrer" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.rosario") }}</a></template>
                <template #misterios_luminosos><a href="https://www.vatican.va/special/rosary/documents/misteri_luminosi_po.html" target="_blank" rel="noopener noreferrer" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.misterios_luminosos") }}</a></template>
                <template #papa_joao_paulo_ii><a href="https://www.vatican.va/content/john-paul-ii/pt.html" target="_blank" rel="noopener noreferrer" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.papa_joao_paulo_ii") }}</a></template>
              </i18n-t>

              <i18n-t keypath="artigos_religiosos.terco_p6" tag="p" class="leading-relaxed text-justify mb-2">
                <template #jesus_cristo><NuxtLink to="/" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.jesus_cristo") }}</NuxtLink></template>
              </i18n-t>

              <i18n-t keypath="artigos_religiosos.terco_p7" tag="p" class="leading-relaxed text-justify">
                <template #batalha_espiritual><NuxtLink to="/oracoes" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.batalha_epiritual") }}</NuxtLink></template>
                <template #sao_pio><NuxtLink to="/santos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.sao_pio") }}</NuxtLink></template>
                <template #aparicoes><NuxtLink to="/artigos-religiosos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.aparicoes") }}</NuxtLink></template>
                <template #fatima><a href="https://www.fatima.pt/pt/" target="_blank" rel="noopener noreferrer" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.fatima") }}</a></template>
                <template #lourdes><a href="https://www.lourdes-france.com/pt-pt/" target="_blank" rel="noopener noreferrer" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.lourdes") }}</a></template>
                <template #virgem_maria><NuxtLink to="/artigos-religiosos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200">{{ $t("palavras_chave.virgem_maria") }}</NuxtLink></template>
              </i18n-t>

            </div>

          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";

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
</script>
