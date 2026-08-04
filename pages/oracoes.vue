<template>
  <main class="flex-grow">
    <section
      id="oracoes"
      class="max-w-7xl mx-auto pt-20 pb-20 px-6 scroll-mt-24"
    >
      <nav
        aria-label="Sumário da página"
        class="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 mb-12 text-sm md:text-base text-center"
      >
        <a
          href="#oracoes"
          class="font-semibold text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors"
        >
          {{ $t("oracoes.titulo") }}
        </a>
        <span class="text-gray-400" aria-hidden="true">•</span>
        <a
          href="#oracoes-principais"
          class="font-semibold text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors"
        >
          {{ $t("oracoes.principais_titulo") }}
        </a>
        <span class="text-gray-400" aria-hidden="true">•</span>
        <a
          href="#profissoes-de-fe"
          class="font-semibold text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors"
        >
          {{ $t("oracoes.profissoes_titulo") }}
        </a>
        <span class="text-gray-400" aria-hidden="true">•</span>
        <a
          href="#oracoes-diante-da-eucaristia"
          class="font-semibold text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors"
        >
          {{ $t("oracoes.eucaristia_titulo") }}
        </a>
      </nav>

      <h1
        class="text-3xl font-bold text-[#041122] mb-12 font-serif border-b-2 border-[#D4AF37] pb-3 inline-block"
      >
        {{ $t("oracoes.titulo") }}
      </h1>

      <i18n-t
        keypath="oracoes.p1"
        tag="p"
        class="text-gray-600 leading-relaxed text-justify mb-2"
      >
        <template #pai>
          <NuxtLink
            to="/trindade"
            class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors"
          >
            {{ $t("palavras_chave.pai") }}
          </NuxtLink>
        </template>
        <template #intercessao_santos>
          <NuxtLink
            to="/intercessao-e-mediacao"
            class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors"
          >
            {{ $t("palavras_chave.intercessao_santos") }}
          </NuxtLink>
        </template>
      </i18n-t>

      <p class="text-gray-600 leading-relaxed text-justify">
        {{ $t("oracoes.p2") }}
      </p>
    </section>

    <section
      id="oracoes-principais"
      class="max-w-7xl mx-auto pb-20 px-6 scroll-mt-24"
    >
      <h2
        class="text-3xl font-bold text-[#041122] mb-12 font-serif border-b-2 border-[#D4AF37] pb-3 inline-block"
      >
        {{ $t("oracoes.principais_titulo") }}
      </h2>

      <p class="text-gray-600 leading-relaxed text-justify">
        {{ $t("oracoes.principais_intro") }}
      </p>

      <h3
        id="sinal-da-cruz"
        class="text-2xl font-bold text-[#041122] font-serif mt-12 mb-5 scroll-mt-24"
      >
        {{ $t("oracoes.sinal_cruz_titulo") }}
      </h3>

      <i18n-t
        keypath="oracoes.sinal_cruz_sobre_p1"
        tag="p"
        class="text-sm text-gray-500 italic leading-relaxed text-justify mb-2"
      >
        <template #pai><NuxtLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.pai") }}</NuxtLink></template>
        <template #filho><NuxtLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.filho") }}</NuxtLink></template>
        <template #espirito_santo><NuxtLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.espirito_santo") }}</NuxtLink></template>
        <template #santissima_trindade><NuxtLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.santissima_trindade") }}</NuxtLink></template>
      </i18n-t>

      <i18n-t
        keypath="oracoes.sinal_cruz_sobre_p2"
        tag="p"
        class="text-sm text-gray-500 italic leading-relaxed text-justify mb-6"
      >
        <template #cic2157>
          <a
            href="https://www.vatican.va/archive/cathechism_po/index_new/p3s2cap1_2083-2195_po.html#2157"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors"
          >{{ $t("palavras_chave.cic2157") }}</a>
        </template>
      </i18n-t>

      <blockquote
        class="border-l-4 border-[#D4AF37] pl-5 md:pl-6 py-1 text-gray-600 leading-relaxed whitespace-pre-line"
      >{{ $t("oracoes.sinal_cruz_texto") }}</blockquote>

      <h3
        id="pai-nosso"
        class="text-2xl font-bold text-[#041122] font-serif mt-12 mb-5 scroll-mt-24"
      >
        {{ $t("oracoes.pai_nosso_titulo") }}
      </h3>

      <i18n-t
        keypath="oracoes.pai_nosso_sobre"
        tag="p"
        class="text-sm text-gray-500 italic leading-relaxed text-justify mb-6"
      >
        <template #sao_tomas_aquino>
          <NuxtLink
            to="/escolastica"
            class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors"
          >
            {{ $t("palavras_chave.sao_tomas_aquino") }}
          </NuxtLink>
        </template>
        <template #evangelho>
          <NuxtLink
            to="/missa#evangelho"
            class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors"
          >
            {{ $t("palavras_chave.evangelho") }}
          </NuxtLink>
        </template>
      </i18n-t>

      <blockquote
        class="border-l-4 border-[#D4AF37] pl-5 md:pl-6 py-1 text-gray-600 leading-relaxed whitespace-pre-line"
      >{{ $t("oracoes.pai_nosso_texto") }}</blockquote>

      <h3
        id="ave-maria"
        class="text-2xl font-bold text-[#041122] font-serif mt-12 mb-5 scroll-mt-24"
      >
        {{ $t("oracoes.ave_maria_titulo") }}
      </h3>

      <i18n-t
        keypath="oracoes.ave_maria_sobre"
        tag="p"
        class="text-sm text-gray-500 italic leading-relaxed text-justify mb-6"
      >
        <template #arcanjo_gabriel>
          <NuxtLink to="/anjos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">
            {{ $t("palavras_chave.arcanjo_gabriel") }}
          </NuxtLink>
        </template>
        <template #maria>
          <NuxtLink to="/dogmas-marianos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">
            {{ $t("palavras_chave.maria") }}
          </NuxtLink>
        </template>
        <template #anunciacao>
          <NuxtLink to="/historia" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">
            {{ $t("palavras_chave.anunciacao") }}
          </NuxtLink>
        </template>
        <template #visitacao>
          <NuxtLink to="/historia" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">
            {{ $t("palavras_chave.visitacao") }}
          </NuxtLink>
        </template>
        <template #mae_deus>
          <NuxtLink to="/intercessao-e-mediacao" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">
            {{ $t("palavras_chave.mae_deus") }}
          </NuxtLink>
        </template>
        <template #intercessao>
          <NuxtLink to="/intercessao-e-mediacao" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">
            {{ $t("palavras_chave.intercessao") }}
          </NuxtLink>
        </template>
      </i18n-t>

      <blockquote
        class="border-l-4 border-[#D4AF37] pl-5 md:pl-6 py-1 text-gray-600 leading-relaxed whitespace-pre-line"
      >{{ $t("oracoes.ave_maria_texto") }}</blockquote>

      <h3
        id="gloria-ao-pai"
        class="text-2xl font-bold text-[#041122] font-serif mt-12 mb-5 scroll-mt-24"
      >
        {{ $t("oracoes.gloria_pai_titulo") }}
      </h3>

      <i18n-t
        keypath="oracoes.gloria_pai_sobre_p1"
        tag="p"
        class="text-sm text-gray-500 italic leading-relaxed text-justify mb-2"
      >
        <template #sobre><strong class="not-italic text-gray-600">{{ $t("oracoes.sobre_label") }}</strong></template>
        <template #pai><NuxtLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.pai") }}</NuxtLink></template>
        <template #santissima_trindade><NuxtLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.santissima_trindade") }}</NuxtLink></template>
        <template #filho><NuxtLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.filho") }}</NuxtLink></template>
        <template #espirito_santo><NuxtLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.espirito_santo") }}</NuxtLink></template>
      </i18n-t>

      <i18n-t
        keypath="oracoes.gloria_pai_sobre_p2"
        tag="p"
        class="text-sm text-gray-500 italic leading-relaxed text-justify mb-6"
      >
        <template #salmos><NuxtLink to="/livros" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.salmos") }}</NuxtLink></template>
        <template #liturgia_horas><NuxtLink to="/ritos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.liturgia_horas") }}</NuxtLink></template>
        <template #santo_terco><NuxtLink to="/artigos-religiosos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.terco") }}</NuxtLink></template>
      </i18n-t>

      <blockquote
        class="border-l-4 border-[#D4AF37] pl-5 md:pl-6 py-1 text-gray-600 leading-relaxed whitespace-pre-line"
      >{{ $t("oracoes.gloria_pai_texto") }}</blockquote>

      <p class="text-sm text-gray-500 italic leading-relaxed mt-5">
        <strong class="not-italic text-gray-600">{{ $t("oracoes.obs_label") }}</strong>
        {{ $t("oracoes.gloria_pai_obs_intro") }}
      </p>
      <p class="text-sm text-gray-500 italic leading-relaxed whitespace-pre-line">{{ $t("oracoes.gloria_pai_obs_texto") }}</p>

      <h3
        id="vinde-espirito-santo"
        class="text-2xl font-bold text-[#041122] font-serif mt-12 mb-5 scroll-mt-24"
      >
        {{ $t("oracoes.vinde_espirito_titulo") }}
      </h3>

      <i18n-t
        keypath="oracoes.vinde_espirito_sobre_p1"
        tag="p"
        class="text-sm text-gray-500 italic leading-relaxed text-justify mb-2"
      >
        <template #sobre><strong class="not-italic text-gray-600">{{ $t("oracoes.sobre_label") }}</strong></template>
        <template #espirito_santo><NuxtLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.espirito_santo") }}</NuxtLink></template>
      </i18n-t>

      <i18n-t
        keypath="oracoes.vinde_espirito_sobre_p2"
        tag="p"
        class="text-sm text-gray-500 italic leading-relaxed text-justify mb-6"
      >
        <template #salmo><NuxtLink to="/livros" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.salmo") }}</NuxtLink></template>
        <template #pai><NuxtLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.pai") }}</NuxtLink></template>
        <template #espirito_santo><NuxtLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.espirito_santo") }}</NuxtLink></template>
      </i18n-t>

      <blockquote class="border-l-4 border-[#D4AF37] pl-5 md:pl-6 py-1 text-gray-600 leading-relaxed">
        <p class="whitespace-pre-line">{{ $t("oracoes.vinde_espirito_texto_1") }}</p>
        <p class="mt-5 mb-1"><strong class="text-[#041122]">{{ $t("oracoes.oremos_label") }}</strong></p>
        <p class="whitespace-pre-line">{{ $t("oracoes.vinde_espirito_texto_2") }}</p>
      </blockquote>

      <h3
        id="confesso-a-deus"
        class="text-2xl font-bold text-[#041122] font-serif mt-12 mb-5 scroll-mt-24"
      >
        {{ $t("oracoes.confesso_titulo") }}
      </h3>

      <i18n-t keypath="oracoes.confesso_sobre_p1" tag="p" class="text-sm text-gray-500 italic leading-relaxed text-justify mb-2">
        <template #sobre><strong class="not-italic text-gray-600">{{ $t("oracoes.sobre_label") }}</strong></template>
        <template #ato_penitencial><NuxtLink to="/missa#estrutura-da-santa-missa" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.ato_penitencial") }}</NuxtLink></template>
        <template #santa_missa><NuxtLink to="/missa" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.santa_missa") }}</NuxtLink></template>
      </i18n-t>

      <i18n-t keypath="oracoes.confesso_sobre_p2" tag="p" class="text-sm text-gray-500 italic leading-relaxed text-justify mb-6">
        <template #virgem_maria><NuxtLink to="/dogmas-marianos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.virgem_maria") }}</NuxtLink></template>
        <template #anjos><NuxtLink to="/anjos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.anjos") }}</NuxtLink></template>
        <template #santos><NuxtLink to="/santo-do-dia" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.santos") }}</NuxtLink></template>
        <template #ato_penitencial><NuxtLink to="/missa#estrutura-da-santa-missa" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.ato_penitencial") }}</NuxtLink></template>
        <template #kyrie_eleison><NuxtLink to="/oracoes#kyrie-eleison" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.kyrie_eleison") }}</NuxtLink></template>
        <template #confissao><NuxtLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.confissao") }}</NuxtLink></template>
      </i18n-t>

      <blockquote class="border-l-4 border-[#D4AF37] pl-5 md:pl-6 py-1 text-gray-600 leading-relaxed">
        <p class="whitespace-pre-line">{{ $t("oracoes.confesso_texto_1") }}</p>
        <p class="italic text-gray-500 mt-5">{{ $t("oracoes.confesso_gesto") }}</p>
        <p class="whitespace-pre-line font-bold text-[#041122]">{{ $t("oracoes.confesso_culpa") }}</p>
        <p class="whitespace-pre-line mt-5">{{ $t("oracoes.confesso_texto_2") }}</p>
      </blockquote>

      <p class="text-sm text-gray-500 italic leading-relaxed text-justify mt-5">
        <strong class="not-italic text-gray-600">{{ $t("oracoes.obs_label") }}</strong>
        {{ $t("oracoes.confesso_obs") }}
      </p>

      <h3
        id="ato-de-contricao"
        class="text-2xl font-bold text-[#041122] font-serif mt-12 mb-5 scroll-mt-24"
      >
        {{ $t("oracoes.ato_contricao_titulo") }}
      </h3>

      <i18n-t keypath="oracoes.ato_contricao_sobre_p1" tag="p" class="text-sm text-gray-500 italic leading-relaxed text-justify mb-2">
        <template #sobre><strong class="not-italic text-gray-600">{{ $t("oracoes.sobre_label") }}</strong></template>
        <template #sacramento_confissao><NuxtLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sacramento_confissao") }}</NuxtLink></template>
      </i18n-t>

      <p class="text-sm text-gray-500 italic leading-relaxed text-justify mb-6">
        {{ $t("oracoes.ato_contricao_sobre_p2") }}
      </p>

      <blockquote
        class="border-l-4 border-[#D4AF37] pl-5 md:pl-6 py-1 text-gray-600 leading-relaxed whitespace-pre-line"
      >{{ $t("oracoes.ato_contricao_texto") }}</blockquote>

      <p class="text-sm text-gray-500 italic leading-relaxed text-justify mt-5">
        <strong class="not-italic text-gray-600">{{ $t("oracoes.obs_label") }}</strong>
        {{ $t("oracoes.ato_contricao_obs") }}
      </p>

      <h3
        id="santo-anjo-do-senhor"
        class="text-2xl font-bold text-[#041122] font-serif mt-12 mb-5 scroll-mt-24"
      >
        {{ $t("oracoes.santo_anjo_titulo") }}
      </h3>

      <i18n-t keypath="oracoes.santo_anjo_sobre_p1" tag="p" class="text-sm text-gray-500 italic leading-relaxed text-justify mb-2">
        <template #sobre><strong class="not-italic text-gray-600">{{ $t("oracoes.sobre_label") }}</strong></template>
        <template #sagrada_escritura><NuxtLink to="/livros" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sagrada_escritura") }}</NuxtLink></template>
        <template #cic336>
          <a href="https://www.vatican.va/archive/cathechism_po/index_new/p1s2c1_198-421_po.html#336" target="_blank" rel="noopener noreferrer" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.cic336") }}</a>
        </template>
      </i18n-t>

      <p class="text-sm text-gray-500 italic leading-relaxed text-justify mb-6">
        {{ $t("oracoes.santo_anjo_sobre_p2") }}
      </p>

      <blockquote
        class="border-l-4 border-[#D4AF37] pl-5 md:pl-6 py-1 text-gray-600 leading-relaxed whitespace-pre-line"
      >{{ $t("oracoes.santo_anjo_texto") }}</blockquote>

      <h3
        id="salve-rainha"
        class="text-2xl font-bold text-[#041122] font-serif mt-12 mb-5 scroll-mt-24"
      >
        {{ $t("oracoes.salve_rainha_titulo") }}
      </h3>

      <i18n-t keypath="oracoes.salve_rainha_sobre_p1" tag="p" class="text-sm text-gray-500 italic leading-relaxed text-justify mb-2">
        <template #sobre><strong class="not-italic text-gray-600">{{ $t("oracoes.sobre_label") }}</strong></template>
        <template #idade_media><NuxtLink to="/historia" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.idade_media") }}</NuxtLink></template>
        <template #santo_terco><NuxtLink to="/artigos-religiosos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.terco") }}</NuxtLink></template>
        <template #liturgia_horas><NuxtLink to="/ritos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.liturgia_horas") }}</NuxtLink></template>
      </i18n-t>

      <i18n-t keypath="oracoes.salve_rainha_sobre_p2" tag="p" class="text-sm text-gray-500 italic leading-relaxed text-justify mb-6">
        <template #virgem_maria><NuxtLink to="/dogmas-marianos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.virgem_maria") }}</NuxtLink></template>
        <template #maria><NuxtLink to="/dogmas-marianos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.maria") }}</NuxtLink></template>
        <template #filho><NuxtLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.filho") }}</NuxtLink></template>
      </i18n-t>

      <blockquote
        class="border-l-4 border-[#D4AF37] pl-5 md:pl-6 py-1 text-gray-600 leading-relaxed whitespace-pre-line"
      >{{ $t("oracoes.salve_rainha_texto") }}</blockquote>

      <p class="font-semibold text-[#041122] mt-7 mb-3">
        {{ $t("oracoes.salve_rainha_versiculo_intro") }}
      </p>
      <blockquote
        class="border-l-4 border-[#D4AF37] pl-5 md:pl-6 py-1 text-gray-600 leading-relaxed whitespace-pre-line"
      >{{ $t("oracoes.salve_rainha_versiculo") }}</blockquote>
    </section>

    <section
      id="profissoes-de-fe"
      class="max-w-7xl mx-auto pb-20 px-6 scroll-mt-24"
    >
      <h2
        class="text-3xl font-bold text-[#041122] mb-12 font-serif border-b-2 border-[#D4AF37] pb-3 inline-block"
      >
        {{ $t("oracoes.profissoes_titulo") }}
      </h2>

      <i18n-t
        keypath="oracoes.profissoes_intro"
        tag="p"
        class="text-gray-600 leading-relaxed text-justify"
      >
        <template #batismo>
          <NuxtLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">
            {{ $t("palavras_chave.batismo") }}
          </NuxtLink>
        </template>
      </i18n-t>

      <h3
        id="credo-dos-apostolos"
        class="text-2xl font-bold text-[#041122] font-serif mt-12 mb-5 scroll-mt-24"
      >
        {{ $t("oracoes.credo_apostolos_titulo") }}
      </h3>

      <i18n-t
        keypath="oracoes.credo_apostolos_sobre_p1"
        tag="p"
        class="text-sm text-gray-500 italic leading-relaxed text-justify mb-2"
      >
        <template #sobre><strong class="not-italic text-gray-600">{{ $t("oracoes.sobre_label") }}</strong></template>
        <template #symbolon><em>symbolon</em></template>
      </i18n-t>

      <i18n-t
        keypath="oracoes.credo_apostolos_sobre_p2"
        tag="p"
        class="text-sm text-gray-500 italic leading-relaxed text-justify mb-6"
      >
        <template #pai><NuxtLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.pai") }}</NuxtLink></template>
        <template #filho><NuxtLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.filho") }}</NuxtLink></template>
        <template #espirito_santo><NuxtLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.espirito_santo") }}</NuxtLink></template>
        <template #cic188_194>
          <a href="https://www.vatican.va/archive/cathechism_po/index_new/p1s2_185-197_po.html#188" target="_blank" rel="noopener noreferrer" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">CIC 188, 194</a>
        </template>
      </i18n-t>

      <blockquote
        class="border-l-4 border-[#D4AF37] pl-5 md:pl-6 py-1 text-gray-600 leading-relaxed whitespace-pre-line"
      >{{ $t("oracoes.credo_apostolos_texto") }}</blockquote>

      <h3
        id="credo-niceno-constantinopolitano"
        class="text-2xl font-bold text-[#041122] font-serif mt-12 mb-5 scroll-mt-24"
      >
        {{ $t("oracoes.credo_niceno_titulo") }}
      </h3>

      <i18n-t
        keypath="oracoes.credo_niceno_sobre_p1"
        tag="p"
        class="text-sm text-gray-500 italic leading-relaxed text-justify mb-2"
      >
        <template #sobre><strong class="not-italic text-gray-600">{{ $t("oracoes.sobre_label") }}</strong></template>
        <template #concilios_ecumenicos><NuxtLink to="/tradicao-e-magisterio" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.concilios_ecumenicos") }}</NuxtLink></template>
        <template #concilio_niceia><NuxtLink to="/tradicao-e-magisterio" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.concilio_niceia") }}</NuxtLink></template>
        <template #concilio_constantinopla><NuxtLink to="/tradicao-e-magisterio" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.concilio_constantinopla") }}</NuxtLink></template>
      </i18n-t>

      <i18n-t
        keypath="oracoes.credo_niceno_sobre_p2"
        tag="p"
        class="text-sm text-gray-500 italic leading-relaxed text-justify mb-2"
      >
        <template #arianismo><NuxtLink to="/tradicao-e-magisterio" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.arianismo") }}</NuxtLink></template>
        <template #filho><NuxtLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.filho") }}</NuxtLink></template>
        <template #espirito_santo><NuxtLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.espirito_santo") }}</NuxtLink></template>
      </i18n-t>

      <i18n-t
        keypath="oracoes.credo_niceno_sobre_p3"
        tag="p"
        class="text-sm text-gray-500 italic leading-relaxed text-justify mb-6"
      >
        <template #santa_missa><NuxtLink to="/missa" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.santa_missa") }}</NuxtLink></template>
      </i18n-t>

      <i18n-t
        keypath="oracoes.credo_niceno_texto"
        tag="blockquote"
        class="border-l-4 border-[#D4AF37] pl-5 md:pl-6 py-1 text-gray-600 leading-relaxed whitespace-pre-line"
      >
        <template #e_do_filho><NuxtLink to="/termologia-catolica#filioque" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.e_do_filho") }}</NuxtLink></template>
      </i18n-t>

      <h3
        id="profissao-de-fe-batismal"
        class="text-2xl font-bold text-[#041122] font-serif mt-12 mb-5 scroll-mt-24"
      >
        {{ $t("oracoes.profissao_batismal_titulo") }}
      </h3>

      <i18n-t keypath="oracoes.profissao_batismal_sobre_p1" tag="p" class="text-sm text-gray-500 italic leading-relaxed text-justify mb-2">
        <template #sobre><strong class="not-italic text-gray-600">{{ $t("oracoes.sobre_label") }}</strong></template>
        <template #batismo><NuxtLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.batismo") }}</NuxtLink></template>
      </i18n-t>

      <i18n-t keypath="oracoes.profissao_batismal_sobre_p2" tag="p" class="text-sm text-gray-500 italic leading-relaxed text-justify mb-2">
        <template #pai><NuxtLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.pai") }}</NuxtLink></template>
        <template #filho><NuxtLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.filho") }}</NuxtLink></template>
        <template #espirito_santo><NuxtLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.espirito_santo") }}</NuxtLink></template>
      </i18n-t>

      <i18n-t keypath="oracoes.profissao_batismal_sobre_p3" tag="p" class="text-sm text-gray-500 italic leading-relaxed text-justify mb-6">
        <template #vigilia_pascal><NuxtLink to="/ano-liturgico#triduo-pascal" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.vigilia_pascal") }}</NuxtLink></template>
        <template #batismo><NuxtLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.batismo") }}</NuxtLink></template>
        <template #cic1254><a href="https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1284_po.html#1254" target="_blank" rel="noopener noreferrer" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">CIC 1254</a></template>
      </i18n-t>

      <h4 class="text-xl font-bold text-[#041122] font-serif mt-8 mb-4">
        {{ $t("oracoes.profissao_batismal_renuncias_titulo") }}
      </h4>
      <i18n-t
        keypath="oracoes.profissao_batismal_renuncias"
        tag="blockquote"
        class="border-l-4 border-[#D4AF37] pl-5 md:pl-6 py-1 text-gray-600 leading-relaxed whitespace-pre-line"
      >
        <template #celebrante><strong class="text-red-700">{{ $t("oracoes.celebrante_label") }}</strong></template>
        <template #todos><strong class="text-red-700">{{ $t("oracoes.todos_label") }}</strong></template>
      </i18n-t>

      <h4 class="text-xl font-bold text-[#041122] font-serif mt-8 mb-4">
        {{ $t("oracoes.profissao_batismal_fe_titulo") }}
      </h4>
      <i18n-t
        keypath="oracoes.profissao_batismal_fe"
        tag="blockquote"
        class="border-l-4 border-[#D4AF37] pl-5 md:pl-6 py-1 text-gray-600 leading-relaxed whitespace-pre-line"
      >
        <template #celebrante><strong class="text-red-700">{{ $t("oracoes.celebrante_label") }}</strong></template>
        <template #todos><strong class="text-red-700">{{ $t("oracoes.todos_label") }}</strong></template>
      </i18n-t>
    </section>

    <section
      id="oracoes-diante-da-eucaristia"
      class="max-w-7xl mx-auto pb-20 px-6 scroll-mt-24"
    >
      <h2
        class="text-3xl font-bold text-[#041122] mb-12 font-serif border-b-2 border-[#D4AF37] pb-3 inline-block"
      >
        {{ $t("oracoes.eucaristia_titulo") }}
      </h2>

      <i18n-t keypath="oracoes.eucaristia_intro" tag="p" class="text-gray-600 leading-relaxed text-justify">
        <template #sagrada_comunhao><NuxtLink to="/missa#liturgia-eucaristica" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sagrada_comunhao") }}</NuxtLink></template>
        <template #santissimo_sacramento><NuxtLink to="/missa#liturgia-eucaristica" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.santissimo_sacramento") }}</NuxtLink></template>
      </i18n-t>

      <h3
        id="alma-de-cristo"
        class="text-2xl font-bold text-[#041122] font-serif mt-12 mb-5 scroll-mt-24"
      >
        {{ $t("oracoes.alma_cristo_titulo") }}
      </h3>

      <i18n-t keypath="oracoes.alma_cristo_sobre_p1" tag="p" class="text-sm text-gray-500 italic leading-relaxed text-justify mb-2">
        <template #sobre><strong class="not-italic text-gray-600">{{ $t("oracoes.sobre_label") }}</strong></template>
        <template #anima_christi><em>Anima Christi</em></template>
        <template #exercicios_espirituais><em>Exercícios Espirituais</em></template>
        <template #santo_inacio><NuxtLink to="/santo-do-dia?data=2026-07-31" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.santo_inacio_loyola") }}</NuxtLink></template>
      </i18n-t>

      <p class="text-sm text-gray-500 italic leading-relaxed text-justify mb-6">
        {{ $t("oracoes.alma_cristo_sobre_p2") }}
      </p>

      <blockquote
        class="border-l-4 border-[#D4AF37] pl-5 md:pl-6 py-1 text-gray-600 leading-relaxed whitespace-pre-line"
      >{{ $t("oracoes.alma_cristo_texto") }}</blockquote>

      <h3
        id="comunhao-espiritual"
        class="text-2xl font-bold text-[#041122] font-serif mt-12 mb-5 scroll-mt-24"
      >
        {{ $t("oracoes.comunhao_espiritual_titulo") }}
      </h3>

      <i18n-t keypath="oracoes.comunhao_espiritual_sobre_p1" tag="p" class="text-sm text-gray-500 italic leading-relaxed text-justify mb-2">
        <template #sobre><strong class="not-italic text-gray-600">{{ $t("oracoes.sobre_label") }}</strong></template>
        <template #santa_missa><NuxtLink to="/missa" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.santa_missa") }}</NuxtLink></template>
        <template #confissao><NuxtLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.confissao") }}</NuxtLink></template>
      </i18n-t>

      <i18n-t keypath="oracoes.comunhao_espiritual_sobre_p2" tag="p" class="text-sm text-gray-500 italic leading-relaxed text-justify mb-6">
        <template #santo_afonso>
          <strong><NuxtLink to="/santo-do-dia?data=2026-08-01" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.santo_afonso_ligorio") }}</NuxtLink></strong>
        </template>
      </i18n-t>

      <i18n-t
        keypath="oracoes.comunhao_espiritual_texto"
        tag="blockquote"
        class="border-l-4 border-[#D4AF37] pl-5 md:pl-6 py-1 text-gray-600 leading-relaxed whitespace-pre-line"
      >
        <template #pausa><em>{{ $t("oracoes.comunhao_espiritual_pausa") }}</em></template>
      </i18n-t>
    </section>
  </main>
</template>
