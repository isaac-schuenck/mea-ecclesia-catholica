<template>
  <main class="flex-grow">
    <section
      id="o-ano-liturgico"
      class="max-w-7xl mx-auto pt-20 pb-20 px-6 scroll-mt-24"
    >
      <nav
        aria-label="Sumário da página"
        class="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 mb-12 text-sm md:text-base text-center"
      >
        <a
          href="#o-ano-liturgico"
          class="font-semibold text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors"
        >
          {{ $t("ano_liturgico.titulo") }}
        </a>
        <span class="text-gray-400" aria-hidden="true">•</span>
        <a
          href="#advento"
          class="font-semibold text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors"
        >
          {{ $t("ano_liturgico.advento_titulo") }}
        </a>
        <span class="text-gray-400" aria-hidden="true">•</span>
        <a
          href="#tempo-natal"
          class="font-semibold text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors"
        >
          {{ $t("ano_liturgico.natal_titulo") }}
        </a>
        <span class="text-gray-400" aria-hidden="true">•</span>
        <a
          href="#tempo-comum-primeira-parte"
          class="font-semibold text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors"
        >
          {{ $t("ano_liturgico.tempo_comum_1_sumario") }}
        </a>
        <span class="text-gray-400" aria-hidden="true">•</span>
        <a
          href="#quaresma"
          class="font-semibold text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors"
        >
          {{ $t("ano_liturgico.quaresma_titulo") }}
        </a>
        <span class="text-gray-400" aria-hidden="true">•</span>
        <a
          href="#triduo-pascal"
          class="font-semibold text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors"
        >
          {{ $t("ano_liturgico.triduo_titulo") }}
        </a>
        <span class="text-gray-400" aria-hidden="true">•</span>
        <a
          href="#tempo-pascal"
          class="font-semibold text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors"
        >
          {{ $t("ano_liturgico.tempo_pascal_titulo") }}
        </a>
        <span class="text-gray-400" aria-hidden="true">•</span>
        <a
          href="#pentecostes"
          class="font-semibold text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors"
        >
          {{ $t("ano_liturgico.pentecostes_titulo") }}
        </a>
        <span class="text-gray-400" aria-hidden="true">•</span>
        <a
          href="#tempo-comum-segunda-parte"
          class="font-semibold text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors"
        >
          {{ $t("ano_liturgico.tempo_comum_2_sumario") }}
        </a>
        <span class="text-gray-400" aria-hidden="true">•</span>
        <a
          href="#datas-principais"
          class="font-semibold text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors"
        >
          {{ $t("ano_liturgico.datas_sumario") }}
        </a>
      </nav>

      <h1
        class="text-3xl font-bold text-[#041122] mb-12 font-serif border-b-2 border-[#D4AF37] pb-3 inline-block"
      >
        {{ $t("ano_liturgico.titulo") }}
      </h1>

      <p class="text-gray-600 leading-relaxed text-justify mb-2">
        {{ $t("ano_liturgico.p1") }}
      </p>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">
        {{ $t("ano_liturgico.p2") }}
      </p>
      <p class="text-gray-600 leading-relaxed text-justify">
        {{ $t("ano_liturgico.p3") }}
      </p>
    </section>

    <section
      id="advento"
      class="max-w-7xl mx-auto pb-20 px-6 scroll-mt-24"
    >
      <h2
        class="text-3xl font-bold text-[#041122] mb-12 font-serif border-b-2 border-[#D4AF37] pb-3 inline-block"
      >
        {{ $t("ano_liturgico.advento_titulo") }}
      </h2>

      <div class="flow-root">
      <figure class="w-32 md:w-64 float-right ml-4 md:ml-7 mb-2 md:mb-4 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img
          src="https://www.padreeustaquio.com.br/wp-content/uploads/2022/12/coroa-do-advento.jpeg"
          :alt="$t('ano_liturgico.advento_imagem')"
          class="block w-full h-auto rounded-md"
        />
        <figcaption class="px-2 pt-2 text-center text-xs italic text-gray-500">
          {{ $t("ano_liturgico.advento_imagem") }}
        </figcaption>
      </figure>

      <p class="text-gray-600 leading-relaxed text-justify mb-2">
        {{ $t("ano_liturgico.advento_p1") }}
      </p>
      <i18n-t
        keypath="ano_liturgico.advento_p2"
        tag="p"
        class="text-gray-600 leading-relaxed text-justify mb-3"
      >
        <template #adventus><em>Adventus</em></template>
      </i18n-t>

      <div class="border-l-4 border-[#D4AF37]/60 pl-5 mb-4 space-y-2 text-gray-600">
        <p class="leading-relaxed text-justify">{{ $t("ano_liturgico.advento_expectativa_1") }}</p>
        <p class="leading-relaxed text-justify">{{ $t("ano_liturgico.advento_expectativa_2") }}</p>
      </div>

      <p class="text-gray-600 leading-relaxed text-justify mb-2">
        {{ $t("ano_liturgico.advento_p3") }}
      </p>
      <i18n-t keypath="ano_liturgico.advento_p4" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #roxo><NuxtLink to="/missa#roxo" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.roxo") }}</NuxtLink></template>
        <template #quaresma><span>{{ $t("palavras_chave.quaresma") }}</span></template>
      </i18n-t>
      <i18n-t keypath="ano_liturgico.advento_p5" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #gloria><NuxtLink to="/oracoes" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.gloria") }}</NuxtLink></template>
        <template #aleluia><NuxtLink to="/oracoes" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.aleluia") }}</NuxtLink></template>
      </i18n-t>

      <div id="gaudete" class="scroll-mt-24">
        <p class="text-gray-600 leading-relaxed text-justify mb-3">
          <i18n-t id="gaudete" keypath="ano_liturgico.advento_gaudete_intro" class="scroll-mt-24">
            <template #domingo_gaudete><strong>{{ $t("palavras_chave.domingo_gaudete") }}</strong></template>
          </i18n-t>
        </p>
        <blockquote class="border-l-4 border-[#D4AF37] bg-[#D4AF37]/5 px-4 py-3 my-4 text-gray-600 leading-relaxed">
          <p class="italic mb-1">{{ $t("ano_liturgico.advento_gaudete_latim") }}</p>
          <i18n-t keypath="ano_liturgico.advento_gaudete_traducao" tag="p">
            <template #filipenses><NuxtLink to="/escritura" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.filipenses") }}</NuxtLink></template>
          </i18n-t>
        </blockquote>
        <i18n-t keypath="ano_liturgico.advento_p6" tag="p" class="text-gray-600 leading-relaxed text-justify">
          <template #rosa><NuxtLink to="/missa#rosa" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.rosa") }}</NuxtLink></template>
        </i18n-t>
      </div>
      </div>
    </section>

    <section
      id="tempo-natal"
      class="max-w-7xl mx-auto pb-20 px-6 scroll-mt-24"
    >
      <h2
        class="text-3xl font-bold text-[#041122] mb-12 font-serif border-b-2 border-[#D4AF37] pb-3 inline-block"
      >
        {{ $t("ano_liturgico.natal_titulo") }}
      </h2>

      <div class="flow-root">
      <figure class="w-36 md:w-72 float-left mr-4 md:mr-7 mb-2 md:mb-4 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Botticelli_-_Adoration_of_the_Magi_%28Zanobi_Altar%29_-_Uffizi.jpg/330px-Botticelli_-_Adoration_of_the_Magi_%28Zanobi_Altar%29_-_Uffizi.jpg"
          :alt="$t('ano_liturgico.natal_imagem_adoracao_magos')"
          class="block w-full h-auto rounded-md"
        />
        <figcaption class="px-2 pt-2 text-center text-xs italic text-gray-500">
          {{ $t("ano_liturgico.natal_imagem_adoracao_magos") }}
        </figcaption>
      </figure>

      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("ano_liturgico.natal_p1") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("ano_liturgico.natal_p2") }}</p>

      <i18n-t keypath="ano_liturgico.natal_p3" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #branco><NuxtLink to="/missa#branco" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.branco") }}</NuxtLink></template>
        <template #gloria><NuxtLink to="/oracoes" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.gloria") }}</NuxtLink></template>
      </i18n-t>

      <i18n-t keypath="ano_liturgico.natal_p4" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #presepio><NuxtLink to="/artigos-religiosos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.presepio") }}</NuxtLink></template>
      </i18n-t>

      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("ano_liturgico.natal_p5") }}</p>

      <figure class="w-36 md:w-72 float-right ml-4 md:ml-7 mb-2 md:mb-4 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/70/Girolamo_Donnini_Matanza_de_los_Inocentes_Fondazione_Pietro_Manodori.jpg"
          :alt="$t('ano_liturgico.natal_imagem_santos_inocentes')"
          class="block w-full h-auto rounded-md"
        />
        <figcaption class="px-2 pt-2 text-center text-xs italic text-gray-500">
          {{ $t("ano_liturgico.natal_imagem_santos_inocentes") }}
        </figcaption>
      </figure>

      <i18n-t keypath="ano_liturgico.natal_p6" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #santo_estevao><NuxtLink to="/santos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.santo_estevao") }}</NuxtLink></template>
        <template #vermelha><NuxtLink to="/missa#vermelho" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.vermelha") }}</NuxtLink></template>
        <template #sao_joao><NuxtLink to="/santos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sao_joao") }}</NuxtLink></template>
        <template #branca><NuxtLink to="/missa#branco" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.branca") }}</NuxtLink></template>
        <template #santos_inocentes><NuxtLink to="/santos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.santos_inocentes") }}</NuxtLink></template>
        <template #herodes><NuxtLink to="/personagens-historicos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.herodes") }}</NuxtLink></template>
        <template #vermelho><NuxtLink to="/missa#vermelho" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.vermelho") }}</NuxtLink></template>
      </i18n-t>

      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("ano_liturgico.natal_p7") }}</p>

      <i18n-t keypath="ano_liturgico.natal_p8" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #santa_maria><NuxtLink to="/dogmas-marianos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.santa_maria") }}</NuxtLink></template>
        <template #maria><NuxtLink to="/dogmas-marianos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.maria") }}</NuxtLink></template>
        <template #cristo><NuxtLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.cristo") }}</NuxtLink></template>
      </i18n-t>

      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("ano_liturgico.natal_p9") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("ano_liturgico.natal_p10") }}</p>
      <p class="text-sm text-gray-500 italic leading-relaxed text-justify mb-2">{{ $t("ano_liturgico.natal_obs") }}</p>

      <i18n-t keypath="ano_liturgico.natal_p11" tag="p" class="text-gray-600 leading-relaxed text-justify">
        <template #filho><NuxtLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.filho") }}</NuxtLink></template>
        <template #pai><NuxtLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.pai") }}</NuxtLink></template>
        <template #espirito_santo><NuxtLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.espirito_santo") }}</NuxtLink></template>
      </i18n-t>
      </div>
    </section>

    <section
      id="tempo-comum-primeira-parte"
      class="max-w-7xl mx-auto pb-20 px-6 scroll-mt-24"
    >
      <h2
        class="text-3xl font-bold text-[#041122] mb-12 font-serif border-b-2 border-[#D4AF37] pb-3 inline-block"
      >
        {{ $t("ano_liturgico.tempo_comum_1_titulo") }}
      </h2>

      <div class="flow-root">
      <i18n-t keypath="ano_liturgico.tempo_comum_1_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #quaresma><NuxtLink to="/ano-liturgico#quaresma" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.quaresma") }}</NuxtLink></template>
        <template #pascoa><NuxtLink to="/ano-liturgico#pascoa" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.pascoa") }}</NuxtLink></template>
      </i18n-t>

      <i18n-t keypath="ano_liturgico.tempo_comum_1_p2" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #pentecostes><NuxtLink to="/ano-liturgico#pentecostes" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.pentecostes") }}</NuxtLink></template>
        <template #advento><NuxtLink to="/ano-liturgico#advento" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.advento") }}</NuxtLink></template>
      </i18n-t>

      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("ano_liturgico.tempo_comum_1_p3") }}</p>

      <figure class="w-36 md:w-64 float-left mr-4 md:mr-7 mb-2 md:mb-4 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img
          src="https://img.cancaonova.com/cnimages/canais/uploads/sites/11/2025/06/padre-com-paramentos-verdes-tempo-comum-_-foto-mart-production-de-pexels.png"
          :alt="$t('ano_liturgico.tempo_comum_1_imagem')"
          class="block w-full h-auto rounded-md"
        />
        <figcaption class="px-2 pt-2 text-center text-xs italic text-gray-500">
          {{ $t("ano_liturgico.tempo_comum_1_imagem") }}
        </figcaption>
      </figure>

      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("ano_liturgico.tempo_comum_1_p4") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("ano_liturgico.tempo_comum_1_p5") }}</p>

      <i18n-t keypath="ano_liturgico.tempo_comum_1_p6" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #verde><NuxtLink to="/missa#verde" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.verde") }}</NuxtLink></template>
        <template #sacramentos><NuxtLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sacramentos") }}</NuxtLink></template>
      </i18n-t>

      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("ano_liturgico.tempo_comum_1_p7") }}</p>
      </div>
    </section>

    <section
      id="quaresma"
      class="max-w-7xl mx-auto pb-20 px-6 scroll-mt-24"
    >
      <h2
        class="text-3xl font-bold text-[#041122] mb-12 font-serif border-b-2 border-[#D4AF37] pb-3 inline-block"
      >
        {{ $t("ano_liturgico.quaresma_titulo") }}
      </h2>

      <i18n-t keypath="ano_liturgico.quaresma_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #pascoa><NuxtLink to="/ano-liturgico#pascoa" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.pascoa") }}</NuxtLink></template>
      </i18n-t>

      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("ano_liturgico.quaresma_p2") }}</p>

      <i18n-t keypath="ano_liturgico.quaresma_p3" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #quadragesima><em>{{ $t("palavras_chave.quadragesima") }}</em></template>
      </i18n-t>

      <figure class="w-32 md:w-56 float-right ml-4 md:ml-7 mb-2 md:mb-4 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/17/Christ_in_the_Wilderness_-_Ivan_Kramskoy_-_Google_Cultural_Institute.jpg"
          :alt="$t('ano_liturgico.quaresma_imagem_deserto')"
          class="w-full h-auto rounded-md object-contain"
        />
        <figcaption class="mt-2 text-center text-xs italic text-gray-500">
          {{ $t("ano_liturgico.quaresma_imagem_deserto") }}
        </figcaption>
      </figure>

      <i18n-t keypath="ano_liturgico.quaresma_p4" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #moises><NuxtLink to="/personagens-historicos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.moises") }}</NuxtLink></template>
        <template #elias><NuxtLink to="/personagens-historicos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.elias") }}</NuxtLink></template>
      </i18n-t>

      <i18n-t keypath="ano_liturgico.quaresma_p5" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #jejum><NuxtLink to="/catecismo" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.jejum") }}</NuxtLink></template>
      </i18n-t>

      <figure class="w-32 md:w-56 float-left mr-4 md:mr-7 mb-2 md:mb-4 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img
          src="https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2010/02/formacao_qual-o-sentido-da-quarta-feira-de-cinzas-1.jpg"
          :alt="$t('ano_liturgico.quaresma_imagem_cinzas')"
          class="w-full aspect-square rounded-md object-cover"
        />
        <figcaption class="mt-2 text-center text-xs italic text-gray-500">
          {{ $t("ano_liturgico.quaresma_imagem_cinzas") }}
        </figcaption>
      </figure>

      <i18n-t keypath="ano_liturgico.quaresma_p6" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #jejum><NuxtLink to="/catecismo" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.jejum") }}</NuxtLink></template>
        <template #abstinencia><NuxtLink to="/catecismo" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.abstinencia") }}</NuxtLink></template>
      </i18n-t>

      <i18n-t keypath="ano_liturgico.quaresma_p7" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #roxo><NuxtLink to="/missa#roxo" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.roxo") }}</NuxtLink></template>
        <template #gloria><NuxtLink to="/oracoes" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.gloria") }}</NuxtLink></template>
        <template #aleluia><NuxtLink to="/oracoes" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.aleluia") }}</NuxtLink></template>
      </i18n-t>

      <i18n-t id="laetare" keypath="ano_liturgico.quaresma_p8" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2 scroll-mt-24">
        <template #domingo_laetare><strong>{{ $t("palavras_chave.domingo_laetare") }}</strong></template>
        <template #rosa><NuxtLink to="/missa#rosa" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.rosa") }}</NuxtLink></template>
      </i18n-t>

      <h3 id="semana-santa" class="text-2xl font-bold text-[#041122] font-serif mt-12 mb-5 scroll-mt-24">
        {{ $t("ano_liturgico.semana_santa_titulo") }}
      </h3>

      <figure class="w-32 md:w-56 float-left mr-4 md:mr-7 mb-2 md:mb-4 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrVSkPXIbr426nRsdMu0uvBFhGa1KDlKiGvrV8DM86qJ-lcoocRirMgs4&s=10"
          :alt="$t('ano_liturgico.semana_santa_imagem_ramos')"
          class="w-full aspect-square rounded-md object-cover"
        />
        <figcaption class="mt-2 text-center text-xs italic text-gray-500">
          {{ $t("ano_liturgico.semana_santa_imagem_ramos") }}
        </figcaption>
      </figure>

      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("ano_liturgico.semana_santa_p1") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("ano_liturgico.semana_santa_p2") }}</p>

      <i18n-t keypath="ano_liturgico.semana_santa_p3" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #vermelho><NuxtLink to="/missa#vermelho" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.vermelho_maiusculo") }}</NuxtLink></template>
      </i18n-t>

      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("ano_liturgico.semana_santa_p4") }}</p>

      <figure class="w-32 md:w-56 float-right ml-4 md:ml-7 mb-2 md:mb-4 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img
          src="https://istoe.com.br/wp-content/uploads/2021/05/ceia-2-1280x720-1-1200x630.jpg"
          :alt="$t('ano_liturgico.semana_santa_imagem_ultima_ceia')"
          class="w-full h-auto rounded-md object-contain"
        />
        <figcaption class="mt-2 text-center text-xs italic text-gray-500">
          {{ $t("ano_liturgico.semana_santa_imagem_ultima_ceia") }}
        </figcaption>
      </figure>

      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("ano_liturgico.semana_santa_p5") }}</p>

      <i18n-t keypath="ano_liturgico.semana_santa_p6" tag="p" class="text-gray-600 leading-relaxed text-justify">
        <template #eucaristia><NuxtLink to="/missa#liturgia-eucaristica" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.eucaristia") }}</NuxtLink></template>
        <template #gloria><NuxtLink to="/oracoes" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.gloria") }}</NuxtLink></template>
        <template #aleluia><NuxtLink to="/oracoes" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.aleluia") }}</NuxtLink></template>
      </i18n-t>
    </section>

    <section
      id="triduo-pascal"
      class="max-w-7xl mx-auto pb-20 px-6 scroll-mt-24"
    >
      <h2
        class="text-3xl font-bold text-[#041122] mb-12 font-serif border-b-2 border-[#D4AF37] pb-3 inline-block"
      >
        {{ $t("ano_liturgico.triduo_titulo") }}
      </h2>

      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("ano_liturgico.triduo_p1") }}</p>

      <figure class="w-32 md:w-56 float-left mr-4 md:mr-7 mb-2 md:mb-4 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/95/Peter_Paul_Rubens_-_Christ_on_the_Cross_between_the_Two_Thieves_-_WGA20235.jpg"
          :alt="$t('ano_liturgico.triduo_imagem_crucificacao')"
          class="w-full h-auto rounded-md object-contain"
        />
        <figcaption class="mt-2 text-center text-xs italic text-gray-500">
          {{ $t("ano_liturgico.triduo_imagem_crucificacao") }}
        </figcaption>
      </figure>

      <i18n-t keypath="ano_liturgico.triduo_p2" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #vermelho><NuxtLink to="/missa#vermelho" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.vermelho_maiusculo") }}</NuxtLink></template>
      </i18n-t>

      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("ano_liturgico.triduo_p3") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("ano_liturgico.triduo_p4") }}</p>

      <figure class="w-32 md:w-72 float-right ml-4 md:ml-7 mb-2 md:mb-4 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img
          src="https://i.ytimg.com/vi/ofwhhzIksxo/maxresdefault.jpg"
          :alt="$t('ano_liturgico.triduo_imagem_tumulo_vazio')"
          class="w-full aspect-video rounded-md object-cover"
        />
        <figcaption class="mt-2 text-center text-xs italic text-gray-500">
          {{ $t("ano_liturgico.triduo_imagem_tumulo_vazio") }}
        </figcaption>
      </figure>

      <i18n-t keypath="ano_liturgico.triduo_p5" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #gloria><NuxtLink to="/oracoes" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.gloria") }}</NuxtLink></template>
        <template #aleluia><NuxtLink to="/oracoes" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.aleluia") }}</NuxtLink></template>
      </i18n-t>

      <i18n-t keypath="ano_liturgico.triduo_p6" tag="p" class="text-gray-600 leading-relaxed text-justify">
        <template #branco><NuxtLink to="/missa#branco" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.branco") }}</NuxtLink></template>
      </i18n-t>
    </section>

    <section id="tempo-pascal" class="max-w-7xl mx-auto pb-20 px-6 scroll-mt-24 clear-both">
      <h2 class="text-3xl font-bold text-[#041122] mb-12 font-serif border-b-2 border-[#D4AF37] pb-3 inline-block">
        {{ $t("ano_liturgico.tempo_pascal_titulo") }}
      </h2>
      <div class="clear-both"></div>

      <figure class="w-32 md:w-56 float-left mr-4 md:mr-7 mb-2 md:mb-4 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img
          src="https://comshalom.org/wp-content/uploads/2015/07/22/redacao/Santa-Maria-Madalena.jpg"
          :alt="$t('ano_liturgico.tempo_pascal_imagem_madalena')"
          class="w-full h-auto rounded-md object-contain"
        />
        <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("ano_liturgico.tempo_pascal_imagem_madalena") }}</figcaption>
      </figure>

      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("ano_liturgico.tempo_pascal_p1") }}</p>

      <i18n-t keypath="ano_liturgico.tempo_pascal_p2" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #batismo><NuxtLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.batismo") }}</NuxtLink></template>
      </i18n-t>

      <i18n-t keypath="ano_liturgico.tempo_pascal_p3" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #branco><NuxtLink to="/missa#branco" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.branco") }}</NuxtLink></template>
        <template #gloria><NuxtLink to="/oracoes" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.gloria") }}</NuxtLink></template>
        <template #aleluia><NuxtLink to="/oracoes" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.aleluia") }}</NuxtLink></template>
      </i18n-t>

      <i18n-t keypath="ano_liturgico.tempo_pascal_p4" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #cirio_pascal><NuxtLink to="/artigos-religiosos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.cirio_pascal") }}</NuxtLink></template>
        <template #pia_batismal><NuxtLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.pia_batismal") }}</NuxtLink></template>
        <template #batismos><NuxtLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.batismos") }}</NuxtLink></template>
        <template #exequias><NuxtLink to="/missa#preto" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.exequias") }}</NuxtLink></template>
      </i18n-t>

      <i18n-t keypath="ano_liturgico.tempo_pascal_p5" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #sao_joao_paulo_ii><NuxtLink to="/santo-do-dia?data=2026-10-22" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sao_joao_paulo_ii") }}</NuxtLink></template>
        <template #santa_faustina><NuxtLink to="/santo-do-dia?data=2026-10-05" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.santa_faustina") }}</NuxtLink></template>
      </i18n-t>

      <i18n-t keypath="ano_liturgico.tempo_pascal_p6" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #atos_dos_apostolos><NuxtLink to="/escritura" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.atos_dos_apostolos") }}</NuxtLink></template>
        <template #espirito_santo><NuxtLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.espirito_santo") }}</NuxtLink></template>
      </i18n-t>

      <figure class="w-32 md:w-56 float-right ml-4 md:ml-7 mb-2 md:mb-4 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img
          src="https://cdn.diocesedecrato.org/wp-content/uploads/2022/05/A5C6B997-E00B-4EF3-8AD5-018601E07146.jpeg"
          :alt="$t('ano_liturgico.tempo_pascal_imagem_ascensao')"
          class="w-full h-auto rounded-md object-contain"
        />
        <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("ano_liturgico.tempo_pascal_imagem_ascensao") }}</figcaption>
      </figure>

      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("ano_liturgico.tempo_pascal_p7") }}</p>

      <i18n-t keypath="ano_liturgico.tempo_pascal_p8" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #apostolos><NuxtLink to="/sucessao-apostolica" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.apostolos") }}</NuxtLink></template>
        <template #virgem_maria><NuxtLink to="/intercessao-mediacao" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.virgem_maria") }}</NuxtLink></template>
      </i18n-t>

      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("ano_liturgico.tempo_pascal_p9") }}</p>
    </section>

    <section id="pentecostes" class="max-w-7xl mx-auto pb-20 px-6 scroll-mt-24">
      <h2 class="text-3xl font-bold text-[#041122] mb-12 font-serif border-b-2 border-[#D4AF37] pb-3 inline-block">
        {{ $t("ano_liturgico.pentecostes_titulo") }}
      </h2>

      <i18n-t keypath="ano_liturgico.pentecostes_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #pentekoste><em>{{ $t("palavras_chave.pentekoste") }}</em></template>
      </i18n-t>

      <i18n-t keypath="ano_liturgico.pentecostes_p2" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #atos_dos_apostolos><NuxtLink to="/escritura" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.atos_dos_apostolos") }}</NuxtLink></template>
      </i18n-t>

      <figure class="w-32 md:w-56 float-left mr-4 md:mr-7 mb-2 md:mb-4 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img
          src="https://static.wixstatic.com/media/d70eaf_7a97ba56a9a74dc88c5f67f43a5b0046~mv2.jpg/v1/fill/w_421,h_719,al_c,lg_1,q_80/d70eaf_7a97ba56a9a74dc88c5f67f43a5b0046~mv2.jpg"
          :alt="$t('ano_liturgico.pentecostes_imagem')"
          class="w-full h-auto rounded-md object-contain"
        />
        <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("ano_liturgico.pentecostes_imagem") }}</figcaption>
      </figure>

      <i18n-t keypath="ano_liturgico.pentecostes_p3" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #espirito_santo><NuxtLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.espirito_santo") }}</NuxtLink></template>
        <template #apostolos><NuxtLink to="/sucessao-apostolica" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.apostolos") }}</NuxtLink></template>
        <template #virgem_maria><NuxtLink to="/intercessao-mediacao" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.virgem_maria") }}</NuxtLink></template>
      </i18n-t>

      <i18n-t keypath="ano_liturgico.pentecostes_p4" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #espirito_santo><NuxtLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.espirito_santo") }}</NuxtLink></template>
      </i18n-t>

      <i18n-t keypath="ano_liturgico.pentecostes_p5" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #vermelho><NuxtLink to="/missa#vermelho" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.vermelho_maiusculo") }}</NuxtLink></template>
      </i18n-t>

      <i18n-t keypath="ano_liturgico.pentecostes_p6" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #vinde_espirito_santo><NuxtLink to="/oracoes" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.vinde_espirito_santo") }}</NuxtLink></template>
        <template #aleluia><NuxtLink to="/oracoes" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.aleluia") }}</NuxtLink></template>
      </i18n-t>

      <i18n-t keypath="ano_liturgico.pentecostes_p7" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #cirio_pascal><NuxtLink to="/artigos-religiosos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.cirio_pascal") }}</NuxtLink></template>
        <template #pia_batismal><NuxtLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.pia_batismal") }}</NuxtLink></template>
        <template #batismos><NuxtLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.batismos") }}</NuxtLink></template>
        <template #exequias><NuxtLink to="/missa#preto" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.exequias") }}</NuxtLink></template>
      </i18n-t>

      <i18n-t keypath="ano_liturgico.pentecostes_p8" tag="p" class="text-gray-600 leading-relaxed text-justify">
        <template #espirito_santo><NuxtLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.espirito_santo") }}</NuxtLink></template>
      </i18n-t>
    </section>

    <section id="tempo-comum-segunda-parte" class="max-w-7xl mx-auto pb-20 px-6 scroll-mt-24">
      <h2 class="text-3xl font-bold text-[#041122] mb-12 font-serif border-b-2 border-[#D4AF37] pb-3 inline-block">
        {{ $t("ano_liturgico.tempo_comum_2_titulo") }}
      </h2>

      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("ano_liturgico.tempo_comum_2_p1") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("ano_liturgico.tempo_comum_2_p2") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("ano_liturgico.tempo_comum_2_p3") }}</p>

      <i18n-t keypath="ano_liturgico.tempo_comum_2_p4" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #sacramentos><NuxtLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sacramentos") }}</NuxtLink></template>
      </i18n-t>

      <i18n-t keypath="ano_liturgico.tempo_comum_2_p5" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #verde><NuxtLink to="/missa#verde" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.verde") }}</NuxtLink></template>
      </i18n-t>

      <figure class="w-32 md:w-56 float-right ml-4 md:ml-7 mb-2 md:mb-4 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img
          src="https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2019/06/formacao_a-solenidade-de-corpus-christi-sacramento-do-amor-e-da-proximidade.jpg"
          :alt="$t('ano_liturgico.tempo_comum_2_imagem_corpus_christi')"
          class="w-full aspect-square rounded-md object-cover"
        />
        <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("ano_liturgico.tempo_comum_2_imagem_corpus_christi") }}</figcaption>
      </figure>

      <i18n-t keypath="ano_liturgico.tempo_comum_2_p6" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #santissima_trindade><NuxtLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.santissima_trindade") }}</NuxtLink></template>
        <template #corpus_christi><NuxtLink to="/missa#liturgia-eucaristica" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.corpus_christi") }}</NuxtLink></template>
        <template #eucaristia><NuxtLink to="/missa#liturgia-eucaristica" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.eucaristia") }}</NuxtLink></template>
      </i18n-t>

      <i18n-t keypath="ano_liturgico.tempo_comum_2_p7" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #sagrado_coracao><NuxtLink to="/oracoes" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sagrado_coracao") }}</NuxtLink></template>
      </i18n-t>

      <figure class="w-32 md:w-56 float-left mr-4 md:mr-7 mb-2 md:mb-4 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img
          src="https://comshalom.org/wp-content/uploads/2020/08/assuncao-de-nossa-senhora-2020-ano-a-01.png"
          :alt="$t('ano_liturgico.tempo_comum_2_imagem_assuncao')"
          class="w-full h-auto rounded-md object-contain"
        />
        <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("ano_liturgico.tempo_comum_2_imagem_assuncao") }}</figcaption>
      </figure>

      <i18n-t id="finados" keypath="ano_liturgico.tempo_comum_2_p8" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2 scroll-mt-24">
        <template #virgem_maria><NuxtLink to="/intercessao-mediacao" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.virgem_maria") }}</NuxtLink></template>
        <template #sao_joao_batista><NuxtLink to="/santo-do-dia?data=2026-06-24" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sao_joao_batista") }}</NuxtLink></template>
        <template #sao_pedro_sao_paulo><NuxtLink to="/santo-do-dia?data=2026-06-29" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sao_pedro_sao_paulo") }}</NuxtLink></template>
        <template #assuncao_virgem_maria><NuxtLink to="/santo-do-dia?data=2026-08-15" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.assuncao_virgem_maria") }}</NuxtLink></template>
        <template #exaltacao_santa_cruz><NuxtLink to="/santo-do-dia?data=2026-09-14" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.exaltacao_santa_cruz") }}</NuxtLink></template>
        <template #todos_os_santos><NuxtLink to="/santo-do-dia?data=2026-11-01" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.todos_os_santos") }}</NuxtLink></template>
      </i18n-t>

      <h3 class="text-2xl font-bold text-[#041122] font-serif mt-12 mb-5 clear-both">{{ $t("ano_liturgico.cristo_rei_titulo") }}</h3>
      <figure class="w-32 md:w-40 float-right ml-4 md:ml-7 mb-2 md:mb-4 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Spas_vsederzhitel_sinay.jpg"
          :alt="$t('ano_liturgico.cristo_rei_imagem')"
          class="w-full h-auto rounded-md object-contain"
        />
        <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("ano_liturgico.cristo_rei_imagem") }}</figcaption>
      </figure>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("ano_liturgico.cristo_rei_p1") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("ano_liturgico.cristo_rei_p2") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("ano_liturgico.cristo_rei_p3") }}</p>
      <i18n-t keypath="ano_liturgico.cristo_rei_p4" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #branco><NuxtLink to="/missa#branco" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.branco") }}</NuxtLink></template>
      </i18n-t>

      <h3 class="text-2xl font-bold text-[#041122] font-serif mt-12 mb-5 clear-both">{{ $t("ano_liturgico.ciclo_recomeca_titulo") }}</h3>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("ano_liturgico.ciclo_recomeca_p1") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("ano_liturgico.ciclo_recomeca_p2") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("ano_liturgico.ciclo_recomeca_p3") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("ano_liturgico.ciclo_recomeca_p4") }}</p>
    </section>

    <section id="datas-principais" class="max-w-7xl mx-auto pb-20 px-6 scroll-mt-24">
      <h2 class="text-3xl font-bold text-[#041122] mb-12 font-serif border-b-2 border-[#D4AF37] pb-3 inline-block">
        {{ $t("ano_liturgico.datas_titulo") }}
      </h2>

      <p class="text-gray-600 leading-relaxed text-justify mb-8">{{ $t("ano_liturgico.datas_intro") }}</p>

      <h3 id="datas-fixas" class="text-2xl font-bold text-[#041122] font-serif mb-5 scroll-mt-24">{{ $t("ano_liturgico.datas_fixas_titulo") }}</h3>
      <ul class="list-disc marker:text-[#D4AF37] pl-6 space-y-2 text-gray-600 leading-relaxed mb-12">
        <li v-for="(item, index) in $tm('ano_liturgico.datas_fixas')" :key="`data-fixa-${index}`">
          {{ $rt(item) }}
        </li>
      </ul>

      <h3 class="text-2xl font-bold text-[#041122] font-serif mb-5">{{ $t("ano_liturgico.datas_moveis_titulo") }}</h3>
      <ul class="list-disc marker:text-[#D4AF37] pl-6 space-y-2 text-gray-600 leading-relaxed">
        <li v-for="(item, index) in $tm('ano_liturgico.datas_moveis')" :key="`data-movel-${index}`">
          {{ $rt(item) }}
        </li>
      </ul>
    </section>
  </main>
</template>
