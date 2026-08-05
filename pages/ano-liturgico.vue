<template>
  <main class="flex-grow">
    <section
      id="o-ano-liturgico"
      class="max-w-7xl mx-auto pt-20 pb-20 px-6 scroll-mt-24"
    >
      <ArticleTableOfContents :items="[
        { target: 'o-ano-liturgico', translationKey: 'ano_liturgico.titulo' },
        { target: 'advento', translationKey: 'ano_liturgico.advento_titulo' },
        { target: 'tempo-natal', translationKey: 'ano_liturgico.natal_titulo' },
        { target: 'tempo-comum-primeira-parte', translationKey: 'ano_liturgico.tempo_comum_1_sumario' },
        { target: 'quaresma', translationKey: 'ano_liturgico.quaresma_titulo' },
        { target: 'triduo-pascal', translationKey: 'ano_liturgico.triduo_titulo' },
        { target: 'tempo-pascal', translationKey: 'ano_liturgico.tempo_pascal_titulo' },
        { target: 'pentecostes', translationKey: 'ano_liturgico.pentecostes_titulo' },
        { target: 'tempo-comum-segunda-parte', translationKey: 'ano_liturgico.tempo_comum_2_sumario' },
        { target: 'datas-principais', translationKey: 'ano_liturgico.datas_sumario' },
      ]" />

      <ArticleSectionTitle as="h1" :text="$t('ano_liturgico.titulo')" />

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
      <ArticleSectionTitle :text="$t('ano_liturgico.advento_titulo')" />

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
        <template #roxo><AppLink to="/missa#roxo" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.roxo") }}</AppLink></template>
        <template #quaresma><span>{{ $t("palavras_chave.quaresma") }}</span></template>
      </i18n-t>
      <i18n-t keypath="ano_liturgico.advento_p5" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #gloria><AppLink to="/oracoes" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.gloria") }}</AppLink></template>
        <template #aleluia><AppLink to="/oracoes" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.aleluia") }}</AppLink></template>
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
            <template #filipenses><AppLink to="/escritura" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.filipenses") }}</AppLink></template>
          </i18n-t>
        </blockquote>
        <i18n-t keypath="ano_liturgico.advento_p6" tag="p" class="text-gray-600 leading-relaxed text-justify">
          <template #rosa><AppLink to="/missa#rosa" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.rosa") }}</AppLink></template>
        </i18n-t>
      </div>
      </div>
    </section>

    <section
      id="tempo-natal"
      class="max-w-7xl mx-auto pb-20 px-6 scroll-mt-24"
    >
      <ArticleSectionTitle :text="$t('ano_liturgico.natal_titulo')" />

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
        <template #branco><AppLink to="/missa#branco" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.branco") }}</AppLink></template>
        <template #gloria><AppLink to="/oracoes" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.gloria") }}</AppLink></template>
      </i18n-t>

      <i18n-t keypath="ano_liturgico.natal_p4" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #presepio><AppLink to="/artigos-religiosos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.presepio") }}</AppLink></template>
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
        <template #santo_estevao><AppLink to="/santos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.santo_estevao") }}</AppLink></template>
        <template #vermelha><AppLink to="/missa#vermelho" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.vermelha") }}</AppLink></template>
        <template #sao_joao><AppLink to="/santos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sao_joao") }}</AppLink></template>
        <template #branca><AppLink to="/missa#branco" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.branca") }}</AppLink></template>
        <template #santos_inocentes><AppLink to="/santos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.santos_inocentes") }}</AppLink></template>
        <template #herodes><AppLink to="/personagens-historicos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.herodes") }}</AppLink></template>
        <template #vermelho><AppLink to="/missa#vermelho" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.vermelho") }}</AppLink></template>
      </i18n-t>

      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("ano_liturgico.natal_p7") }}</p>

      <i18n-t keypath="ano_liturgico.natal_p8" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #santa_maria><AppLink to="/dogmas-marianos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.santa_maria") }}</AppLink></template>
        <template #maria><AppLink to="/dogmas-marianos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.maria") }}</AppLink></template>
        <template #cristo><AppLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.cristo") }}</AppLink></template>
      </i18n-t>

      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("ano_liturgico.natal_p9") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("ano_liturgico.natal_p10") }}</p>
      <ArticleNote class="mb-2">{{ $t("ano_liturgico.natal_obs") }}</ArticleNote>

      <i18n-t keypath="ano_liturgico.natal_p11" tag="p" class="text-gray-600 leading-relaxed text-justify">
        <template #filho><AppLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.filho") }}</AppLink></template>
        <template #pai><AppLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.pai") }}</AppLink></template>
        <template #espirito_santo><AppLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.espirito_santo") }}</AppLink></template>
      </i18n-t>
      </div>
    </section>

    <section
      id="tempo-comum-primeira-parte"
      class="max-w-7xl mx-auto pb-20 px-6 scroll-mt-24"
    >
      <ArticleSectionTitle :text="$t('ano_liturgico.tempo_comum_1_titulo')" />

      <div class="flow-root">
      <i18n-t keypath="ano_liturgico.tempo_comum_1_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #quaresma><AppLink to="/ano-liturgico#quaresma" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.quaresma") }}</AppLink></template>
        <template #pascoa><AppLink to="/ano-liturgico#pascoa" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.pascoa") }}</AppLink></template>
      </i18n-t>

      <i18n-t keypath="ano_liturgico.tempo_comum_1_p2" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #pentecostes><AppLink to="/ano-liturgico#pentecostes" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.pentecostes") }}</AppLink></template>
        <template #advento><AppLink to="/ano-liturgico#advento" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.advento") }}</AppLink></template>
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
        <template #verde><AppLink to="/missa#verde" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.verde") }}</AppLink></template>
        <template #sacramentos><AppLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sacramentos") }}</AppLink></template>
      </i18n-t>

      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("ano_liturgico.tempo_comum_1_p7") }}</p>
      </div>
    </section>

    <section
      id="quaresma"
      class="max-w-7xl mx-auto pb-20 px-6 scroll-mt-24"
    >
      <ArticleSectionTitle :text="$t('ano_liturgico.quaresma_titulo')" />

      <i18n-t keypath="ano_liturgico.quaresma_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #pascoa><AppLink to="/ano-liturgico#pascoa" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.pascoa") }}</AppLink></template>
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
        <template #moises><AppLink to="/personagens-historicos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.moises") }}</AppLink></template>
        <template #elias><AppLink to="/personagens-historicos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.elias") }}</AppLink></template>
      </i18n-t>

      <i18n-t keypath="ano_liturgico.quaresma_p5" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #jejum><AppLink to="/catecismo" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.jejum") }}</AppLink></template>
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
        <template #jejum><AppLink to="/catecismo" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.jejum") }}</AppLink></template>
        <template #abstinencia><AppLink to="/catecismo" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.abstinencia") }}</AppLink></template>
      </i18n-t>

      <i18n-t keypath="ano_liturgico.quaresma_p7" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #roxo><AppLink to="/missa#roxo" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.roxo") }}</AppLink></template>
        <template #gloria><AppLink to="/oracoes" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.gloria") }}</AppLink></template>
        <template #aleluia><AppLink to="/oracoes" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.aleluia") }}</AppLink></template>
      </i18n-t>

      <i18n-t id="laetare" keypath="ano_liturgico.quaresma_p8" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2 scroll-mt-24">
        <template #domingo_laetare><strong>{{ $t("palavras_chave.domingo_laetare") }}</strong></template>
        <template #rosa><AppLink to="/missa#rosa" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.rosa") }}</AppLink></template>
      </i18n-t>

      <ArticleSubheading id="semana-santa" :text="$t('ano_liturgico.semana_santa_titulo')" />

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
        <template #vermelho><AppLink to="/missa#vermelho" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.vermelho_maiusculo") }}</AppLink></template>
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
        <template #eucaristia><AppLink to="/missa#liturgia-eucaristica" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.eucaristia") }}</AppLink></template>
        <template #gloria><AppLink to="/oracoes" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.gloria") }}</AppLink></template>
        <template #aleluia><AppLink to="/oracoes" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.aleluia") }}</AppLink></template>
      </i18n-t>
    </section>

    <section
      id="triduo-pascal"
      class="max-w-7xl mx-auto pb-20 px-6 scroll-mt-24"
    >
      <ArticleSectionTitle :text="$t('ano_liturgico.triduo_titulo')" />

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
        <template #vermelho><AppLink to="/missa#vermelho" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.vermelho_maiusculo") }}</AppLink></template>
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
        <template #gloria><AppLink to="/oracoes" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.gloria") }}</AppLink></template>
        <template #aleluia><AppLink to="/oracoes" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.aleluia") }}</AppLink></template>
      </i18n-t>

      <i18n-t keypath="ano_liturgico.triduo_p6" tag="p" class="text-gray-600 leading-relaxed text-justify">
        <template #branco><AppLink to="/missa#branco" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.branco") }}</AppLink></template>
      </i18n-t>
    </section>

    <section id="tempo-pascal" class="max-w-7xl mx-auto pb-20 px-6 scroll-mt-24 clear-both">
      <ArticleSectionTitle :text="$t('ano_liturgico.tempo_pascal_titulo')" />
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
        <template #batismo><AppLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.batismo") }}</AppLink></template>
      </i18n-t>

      <i18n-t keypath="ano_liturgico.tempo_pascal_p3" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #branco><AppLink to="/missa#branco" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.branco") }}</AppLink></template>
        <template #gloria><AppLink to="/oracoes" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.gloria") }}</AppLink></template>
        <template #aleluia><AppLink to="/oracoes" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.aleluia") }}</AppLink></template>
      </i18n-t>

      <i18n-t keypath="ano_liturgico.tempo_pascal_p4" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #cirio_pascal><AppLink to="/artigos-religiosos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.cirio_pascal") }}</AppLink></template>
        <template #pia_batismal><AppLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.pia_batismal") }}</AppLink></template>
        <template #batismos><AppLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.batismos") }}</AppLink></template>
        <template #exequias><AppLink to="/missa#preto" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.exequias") }}</AppLink></template>
      </i18n-t>

      <i18n-t keypath="ano_liturgico.tempo_pascal_p5" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #sao_joao_paulo_ii><AppLink to="/santo-do-dia?data=2026-10-22" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sao_joao_paulo_ii") }}</AppLink></template>
        <template #santa_faustina><AppLink to="/santo-do-dia?data=2026-10-05" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.santa_faustina") }}</AppLink></template>
      </i18n-t>

      <i18n-t keypath="ano_liturgico.tempo_pascal_p6" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #atos_dos_apostolos><AppLink to="/escritura" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.atos_dos_apostolos") }}</AppLink></template>
        <template #espirito_santo><AppLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.espirito_santo") }}</AppLink></template>
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
        <template #apostolos><AppLink to="/sucessao-apostolica" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.apostolos") }}</AppLink></template>
        <template #virgem_maria><AppLink to="/intercessao-mediacao" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.virgem_maria") }}</AppLink></template>
      </i18n-t>

      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("ano_liturgico.tempo_pascal_p9") }}</p>
    </section>

    <section id="pentecostes" class="max-w-7xl mx-auto pb-20 px-6 scroll-mt-24">
      <ArticleSectionTitle :text="$t('ano_liturgico.pentecostes_titulo')" />

      <i18n-t keypath="ano_liturgico.pentecostes_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #pentekoste><em>{{ $t("palavras_chave.pentekoste") }}</em></template>
      </i18n-t>

      <i18n-t keypath="ano_liturgico.pentecostes_p2" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #atos_dos_apostolos><AppLink to="/escritura" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.atos_dos_apostolos") }}</AppLink></template>
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
        <template #espirito_santo><AppLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.espirito_santo") }}</AppLink></template>
        <template #apostolos><AppLink to="/sucessao-apostolica" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.apostolos") }}</AppLink></template>
        <template #virgem_maria><AppLink to="/intercessao-mediacao" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.virgem_maria") }}</AppLink></template>
      </i18n-t>

      <i18n-t keypath="ano_liturgico.pentecostes_p4" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #espirito_santo><AppLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.espirito_santo") }}</AppLink></template>
      </i18n-t>

      <i18n-t keypath="ano_liturgico.pentecostes_p5" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #vermelho><AppLink to="/missa#vermelho" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.vermelho_maiusculo") }}</AppLink></template>
      </i18n-t>

      <i18n-t keypath="ano_liturgico.pentecostes_p6" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #vinde_espirito_santo><AppLink to="/oracoes" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.vinde_espirito_santo") }}</AppLink></template>
        <template #aleluia><AppLink to="/oracoes" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.aleluia") }}</AppLink></template>
      </i18n-t>

      <i18n-t keypath="ano_liturgico.pentecostes_p7" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #cirio_pascal><AppLink to="/artigos-religiosos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.cirio_pascal") }}</AppLink></template>
        <template #pia_batismal><AppLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.pia_batismal") }}</AppLink></template>
        <template #batismos><AppLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.batismos") }}</AppLink></template>
        <template #exequias><AppLink to="/missa#preto" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.exequias") }}</AppLink></template>
      </i18n-t>

      <i18n-t keypath="ano_liturgico.pentecostes_p8" tag="p" class="text-gray-600 leading-relaxed text-justify">
        <template #espirito_santo><AppLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.espirito_santo") }}</AppLink></template>
      </i18n-t>
    </section>

    <section id="tempo-comum-segunda-parte" class="max-w-7xl mx-auto pb-20 px-6 scroll-mt-24">
      <ArticleSectionTitle :text="$t('ano_liturgico.tempo_comum_2_titulo')" />

      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("ano_liturgico.tempo_comum_2_p1") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("ano_liturgico.tempo_comum_2_p2") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("ano_liturgico.tempo_comum_2_p3") }}</p>

      <i18n-t keypath="ano_liturgico.tempo_comum_2_p4" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #sacramentos><AppLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sacramentos") }}</AppLink></template>
      </i18n-t>

      <i18n-t keypath="ano_liturgico.tempo_comum_2_p5" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #verde><AppLink to="/missa#verde" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.verde") }}</AppLink></template>
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
        <template #santissima_trindade><AppLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.santissima_trindade") }}</AppLink></template>
        <template #corpus_christi><AppLink to="/missa#liturgia-eucaristica" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.corpus_christi") }}</AppLink></template>
        <template #eucaristia><AppLink to="/missa#liturgia-eucaristica" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.eucaristia") }}</AppLink></template>
      </i18n-t>

      <i18n-t keypath="ano_liturgico.tempo_comum_2_p7" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #sagrado_coracao><AppLink to="/oracoes" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sagrado_coracao") }}</AppLink></template>
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
        <template #virgem_maria><AppLink to="/intercessao-mediacao" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.virgem_maria") }}</AppLink></template>
        <template #sao_joao_batista><AppLink to="/santo-do-dia?data=2026-06-24" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sao_joao_batista") }}</AppLink></template>
        <template #sao_pedro_sao_paulo><AppLink to="/santo-do-dia?data=2026-06-29" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sao_pedro_sao_paulo") }}</AppLink></template>
        <template #assuncao_virgem_maria><AppLink to="/santo-do-dia?data=2026-08-15" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.assuncao_virgem_maria") }}</AppLink></template>
        <template #exaltacao_santa_cruz><AppLink to="/santo-do-dia?data=2026-09-14" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.exaltacao_santa_cruz") }}</AppLink></template>
        <template #todos_os_santos><AppLink to="/santo-do-dia?data=2026-11-01" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.todos_os_santos") }}</AppLink></template>
      </i18n-t>

      <ArticleSubheading class="clear-both" :text="$t('ano_liturgico.cristo_rei_titulo')" />
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
        <template #branco><AppLink to="/missa#branco" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.branco") }}</AppLink></template>
      </i18n-t>

      <ArticleSubheading class="clear-both" :text="$t('ano_liturgico.ciclo_recomeca_titulo')" />
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("ano_liturgico.ciclo_recomeca_p1") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("ano_liturgico.ciclo_recomeca_p2") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("ano_liturgico.ciclo_recomeca_p3") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("ano_liturgico.ciclo_recomeca_p4") }}</p>
    </section>

    <section id="datas-principais" class="max-w-7xl mx-auto pb-20 px-6 scroll-mt-24">
      <ArticleSectionTitle :text="$t('ano_liturgico.datas_titulo')" />

      <p class="text-gray-600 leading-relaxed text-justify mb-8">{{ $t("ano_liturgico.datas_intro") }}</p>

      <ArticleSubheading id="datas-fixas" compact :text="$t('ano_liturgico.datas_fixas_titulo')" />
      <ul class="list-disc marker:text-[#D4AF37] pl-6 space-y-2 text-gray-600 leading-relaxed mb-12">
        <li v-for="(item, index) in $tm('ano_liturgico.datas_fixas')" :key="`data-fixa-${index}`">
          {{ $rt(item) }}
        </li>
      </ul>

      <ArticleSubheading compact :text="$t('ano_liturgico.datas_moveis_titulo')" />
      <ul class="list-disc marker:text-[#D4AF37] pl-6 space-y-2 text-gray-600 leading-relaxed">
        <li v-for="(item, index) in $tm('ano_liturgico.datas_moveis')" :key="`data-movel-${index}`">
          {{ $rt(item) }}
        </li>
      </ul>
    </section>
  </main>
</template>
