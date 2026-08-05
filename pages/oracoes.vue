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

      <i18n-t
        keypath="oracoes.p1"
        tag="p"
        class="text-gray-600 leading-relaxed text-justify mb-2"
      >
        <template #pai>
          <AppLink
            to="/trindade"
            class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors"
          >
            {{ $t("palavras_chave.pai") }}
          </AppLink>
        </template>
        <template #intercessao_santos>
          <AppLink
            to="/intercessao-e-mediacao"
            class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors"
          >
            {{ $t("palavras_chave.intercessao_santos") }}
          </AppLink>
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
      <ArticleSectionTitle :text="$t('oracoes.principais_titulo')" />

      <p class="text-gray-600 leading-relaxed text-justify">
        {{ $t("oracoes.principais_intro") }}
      </p>

      <ArticleSubheading id="sinal-da-cruz" :text="$t('oracoes.sinal_cruz_titulo')" />

      <i18n-t
        keypath="oracoes.sinal_cruz_sobre_p1"
        tag="p"
        class="text-sm text-gray-500 italic leading-relaxed text-justify mb-2"
      >
        <template #pai><AppLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.pai") }}</AppLink></template>
        <template #filho><AppLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.filho") }}</AppLink></template>
        <template #espirito_santo><AppLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.espirito_santo") }}</AppLink></template>
        <template #santissima_trindade><AppLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.santissima_trindade") }}</AppLink></template>
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

      <ArticleSubheading id="pai-nosso" :text="$t('oracoes.pai_nosso_titulo')" />

      <i18n-t
        keypath="oracoes.pai_nosso_sobre"
        tag="p"
        class="text-sm text-gray-500 italic leading-relaxed text-justify mb-6"
      >
        <template #sao_tomas_aquino>
          <AppLink
            to="/escolastica"
            class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors"
          >
            {{ $t("palavras_chave.sao_tomas_aquino") }}
          </AppLink>
        </template>
        <template #evangelho>
          <AppLink
            to="/missa#evangelho"
            class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors"
          >
            {{ $t("palavras_chave.evangelho") }}
          </AppLink>
        </template>
      </i18n-t>

      <blockquote
        class="border-l-4 border-[#D4AF37] pl-5 md:pl-6 py-1 text-gray-600 leading-relaxed whitespace-pre-line"
      >{{ $t("oracoes.pai_nosso_texto") }}</blockquote>

      <ArticleSubheading id="ave-maria" :text="$t('oracoes.ave_maria_titulo')" />

      <i18n-t
        keypath="oracoes.ave_maria_sobre"
        tag="p"
        class="text-sm text-gray-500 italic leading-relaxed text-justify mb-6"
      >
        <template #arcanjo_gabriel>
          <AppLink to="/anjos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">
            {{ $t("palavras_chave.arcanjo_gabriel") }}
          </AppLink>
        </template>
        <template #maria>
          <AppLink to="/dogmas-marianos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">
            {{ $t("palavras_chave.maria") }}
          </AppLink>
        </template>
        <template #anunciacao>
          <AppLink to="/historia" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">
            {{ $t("palavras_chave.anunciacao") }}
          </AppLink>
        </template>
        <template #visitacao>
          <AppLink to="/historia" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">
            {{ $t("palavras_chave.visitacao") }}
          </AppLink>
        </template>
        <template #mae_deus>
          <AppLink to="/intercessao-e-mediacao" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">
            {{ $t("palavras_chave.mae_deus") }}
          </AppLink>
        </template>
        <template #intercessao>
          <AppLink to="/intercessao-e-mediacao" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">
            {{ $t("palavras_chave.intercessao") }}
          </AppLink>
        </template>
      </i18n-t>

      <blockquote
        class="border-l-4 border-[#D4AF37] pl-5 md:pl-6 py-1 text-gray-600 leading-relaxed whitespace-pre-line"
      >{{ $t("oracoes.ave_maria_texto") }}</blockquote>

      <ArticleSubheading id="gloria-ao-pai" :text="$t('oracoes.gloria_pai_titulo')" />

      <i18n-t
        keypath="oracoes.gloria_pai_sobre_p1"
        tag="p"
        class="text-sm text-gray-500 italic leading-relaxed text-justify mb-2"
      >
        <template #sobre><strong class="not-italic text-gray-600">{{ $t("oracoes.sobre_label") }}</strong></template>
        <template #pai><AppLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.pai") }}</AppLink></template>
        <template #santissima_trindade><AppLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.santissima_trindade") }}</AppLink></template>
        <template #filho><AppLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.filho") }}</AppLink></template>
        <template #espirito_santo><AppLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.espirito_santo") }}</AppLink></template>
      </i18n-t>

      <i18n-t
        keypath="oracoes.gloria_pai_sobre_p2"
        tag="p"
        class="text-sm text-gray-500 italic leading-relaxed text-justify mb-6"
      >
        <template #salmos><AppLink to="/livros" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.salmos") }}</AppLink></template>
        <template #liturgia_horas><AppLink to="/ritos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.liturgia_horas") }}</AppLink></template>
        <template #santo_terco><AppLink to="/artigos-religiosos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.terco") }}</AppLink></template>
      </i18n-t>

      <blockquote
        class="border-l-4 border-[#D4AF37] pl-5 md:pl-6 py-1 text-gray-600 leading-relaxed whitespace-pre-line"
      >{{ $t("oracoes.gloria_pai_texto") }}</blockquote>

      <ArticleNote class="mt-5">
        <strong class="not-italic text-gray-600">{{ $t("oracoes.obs_label") }}</strong>
        {{ $t("oracoes.gloria_pai_obs_intro") }}
      </ArticleNote>
      <ArticleNote class="whitespace-pre-line">{{ $t("oracoes.gloria_pai_obs_texto") }}</ArticleNote>

      <ArticleSubheading id="vinde-espirito-santo" :text="$t('oracoes.vinde_espirito_titulo')" />

      <i18n-t
        keypath="oracoes.vinde_espirito_sobre_p1"
        tag="p"
        class="text-sm text-gray-500 italic leading-relaxed text-justify mb-2"
      >
        <template #sobre><strong class="not-italic text-gray-600">{{ $t("oracoes.sobre_label") }}</strong></template>
        <template #espirito_santo><AppLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.espirito_santo") }}</AppLink></template>
      </i18n-t>

      <i18n-t
        keypath="oracoes.vinde_espirito_sobre_p2"
        tag="p"
        class="text-sm text-gray-500 italic leading-relaxed text-justify mb-6"
      >
        <template #salmo><AppLink to="/livros" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.salmo") }}</AppLink></template>
        <template #pai><AppLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.pai") }}</AppLink></template>
        <template #espirito_santo><AppLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.espirito_santo") }}</AppLink></template>
      </i18n-t>

      <blockquote class="border-l-4 border-[#D4AF37] pl-5 md:pl-6 py-1 text-gray-600 leading-relaxed">
        <p class="whitespace-pre-line">{{ $t("oracoes.vinde_espirito_texto_1") }}</p>
        <p class="mt-5 mb-1"><strong class="text-[#041122]">{{ $t("oracoes.oremos_label") }}</strong></p>
        <p class="whitespace-pre-line">{{ $t("oracoes.vinde_espirito_texto_2") }}</p>
      </blockquote>

      <ArticleSubheading id="confesso-a-deus" :text="$t('oracoes.confesso_titulo')" />

      <i18n-t keypath="oracoes.confesso_sobre_p1" tag="p" class="text-sm text-gray-500 italic leading-relaxed text-justify mb-2">
        <template #sobre><strong class="not-italic text-gray-600">{{ $t("oracoes.sobre_label") }}</strong></template>
        <template #ato_penitencial><AppLink to="/missa#estrutura-da-santa-missa" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.ato_penitencial") }}</AppLink></template>
        <template #santa_missa><AppLink to="/missa" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.santa_missa") }}</AppLink></template>
      </i18n-t>

      <i18n-t keypath="oracoes.confesso_sobre_p2" tag="p" class="text-sm text-gray-500 italic leading-relaxed text-justify mb-6">
        <template #virgem_maria><AppLink to="/dogmas-marianos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.virgem_maria") }}</AppLink></template>
        <template #anjos><AppLink to="/anjos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.anjos") }}</AppLink></template>
        <template #santos><AppLink to="/santo-do-dia" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.santos") }}</AppLink></template>
        <template #ato_penitencial><AppLink to="/missa#estrutura-da-santa-missa" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.ato_penitencial") }}</AppLink></template>
        <template #kyrie_eleison><AppLink to="/oracoes#kyrie-eleison" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.kyrie_eleison") }}</AppLink></template>
        <template #confissao><AppLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.confissao") }}</AppLink></template>
      </i18n-t>

      <blockquote class="border-l-4 border-[#D4AF37] pl-5 md:pl-6 py-1 text-gray-600 leading-relaxed">
        <p class="whitespace-pre-line">{{ $t("oracoes.confesso_texto_1") }}</p>
        <p class="italic text-gray-500 mt-5">{{ $t("oracoes.confesso_gesto") }}</p>
        <p class="whitespace-pre-line font-bold text-[#041122]">{{ $t("oracoes.confesso_culpa") }}</p>
        <p class="whitespace-pre-line mt-5">{{ $t("oracoes.confesso_texto_2") }}</p>
      </blockquote>

      <ArticleNote class="mt-5">
        <strong class="not-italic text-gray-600">{{ $t("oracoes.obs_label") }}</strong>
        {{ $t("oracoes.confesso_obs") }}
      </ArticleNote>

      <ArticleSubheading id="ato-de-contricao" :text="$t('oracoes.ato_contricao_titulo')" />

      <i18n-t keypath="oracoes.ato_contricao_sobre_p1" tag="p" class="text-sm text-gray-500 italic leading-relaxed text-justify mb-2">
        <template #sobre><strong class="not-italic text-gray-600">{{ $t("oracoes.sobre_label") }}</strong></template>
        <template #sacramento_confissao><AppLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sacramento_confissao") }}</AppLink></template>
      </i18n-t>

      <p class="text-sm text-gray-500 italic leading-relaxed text-justify mb-6">
        {{ $t("oracoes.ato_contricao_sobre_p2") }}
      </p>

      <blockquote
        class="border-l-4 border-[#D4AF37] pl-5 md:pl-6 py-1 text-gray-600 leading-relaxed whitespace-pre-line"
      >{{ $t("oracoes.ato_contricao_texto") }}</blockquote>

      <ArticleNote class="mt-5">
        <strong class="not-italic text-gray-600">{{ $t("oracoes.obs_label") }}</strong>
        {{ $t("oracoes.ato_contricao_obs") }}
      </ArticleNote>

      <ArticleSubheading id="santo-anjo-do-senhor" :text="$t('oracoes.santo_anjo_titulo')" />

      <i18n-t keypath="oracoes.santo_anjo_sobre_p1" tag="p" class="text-sm text-gray-500 italic leading-relaxed text-justify mb-2">
        <template #sobre><strong class="not-italic text-gray-600">{{ $t("oracoes.sobre_label") }}</strong></template>
        <template #sagrada_escritura><AppLink to="/livros" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sagrada_escritura") }}</AppLink></template>
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

      <ArticleSubheading id="salve-rainha" :text="$t('oracoes.salve_rainha_titulo')" />

      <i18n-t keypath="oracoes.salve_rainha_sobre_p1" tag="p" class="text-sm text-gray-500 italic leading-relaxed text-justify mb-2">
        <template #sobre><strong class="not-italic text-gray-600">{{ $t("oracoes.sobre_label") }}</strong></template>
        <template #idade_media><AppLink to="/historia" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.idade_media") }}</AppLink></template>
        <template #santo_terco><AppLink to="/artigos-religiosos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.terco") }}</AppLink></template>
        <template #liturgia_horas><AppLink to="/ritos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.liturgia_horas") }}</AppLink></template>
      </i18n-t>

      <i18n-t keypath="oracoes.salve_rainha_sobre_p2" tag="p" class="text-sm text-gray-500 italic leading-relaxed text-justify mb-6">
        <template #virgem_maria><AppLink to="/dogmas-marianos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.virgem_maria") }}</AppLink></template>
        <template #maria><AppLink to="/dogmas-marianos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.maria") }}</AppLink></template>
        <template #filho><AppLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.filho") }}</AppLink></template>
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
      <ArticleSectionTitle :text="$t('oracoes.profissoes_titulo')" />

      <i18n-t
        keypath="oracoes.profissoes_intro"
        tag="p"
        class="text-gray-600 leading-relaxed text-justify"
      >
        <template #batismo>
          <AppLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">
            {{ $t("palavras_chave.batismo") }}
          </AppLink>
        </template>
      </i18n-t>

      <ArticleSubheading id="credo-dos-apostolos" :text="$t('oracoes.credo_apostolos_titulo')" />

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
        <template #pai><AppLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.pai") }}</AppLink></template>
        <template #filho><AppLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.filho") }}</AppLink></template>
        <template #espirito_santo><AppLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.espirito_santo") }}</AppLink></template>
        <template #cic188_194>
          <a href="https://www.vatican.va/archive/cathechism_po/index_new/p1s2_185-197_po.html#188" target="_blank" rel="noopener noreferrer" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">CIC 188, 194</a>
        </template>
      </i18n-t>

      <blockquote
        class="border-l-4 border-[#D4AF37] pl-5 md:pl-6 py-1 text-gray-600 leading-relaxed whitespace-pre-line"
      >{{ $t("oracoes.credo_apostolos_texto") }}</blockquote>

      <ArticleSubheading id="credo-niceno-constantinopolitano" :text="$t('oracoes.credo_niceno_titulo')" />

      <i18n-t
        keypath="oracoes.credo_niceno_sobre_p1"
        tag="p"
        class="text-sm text-gray-500 italic leading-relaxed text-justify mb-2"
      >
        <template #sobre><strong class="not-italic text-gray-600">{{ $t("oracoes.sobre_label") }}</strong></template>
        <template #concilios_ecumenicos><AppLink to="/tradicao-e-magisterio" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.concilios_ecumenicos") }}</AppLink></template>
        <template #concilio_niceia><AppLink to="/tradicao-e-magisterio" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.concilio_niceia") }}</AppLink></template>
        <template #concilio_constantinopla><AppLink to="/tradicao-e-magisterio" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.concilio_constantinopla") }}</AppLink></template>
      </i18n-t>

      <i18n-t
        keypath="oracoes.credo_niceno_sobre_p2"
        tag="p"
        class="text-sm text-gray-500 italic leading-relaxed text-justify mb-2"
      >
        <template #arianismo><AppLink to="/tradicao-e-magisterio" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.arianismo") }}</AppLink></template>
        <template #filho><AppLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.filho") }}</AppLink></template>
        <template #espirito_santo><AppLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.espirito_santo") }}</AppLink></template>
      </i18n-t>

      <i18n-t
        keypath="oracoes.credo_niceno_sobre_p3"
        tag="p"
        class="text-sm text-gray-500 italic leading-relaxed text-justify mb-6"
      >
        <template #santa_missa><AppLink to="/missa" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.santa_missa") }}</AppLink></template>
      </i18n-t>

      <i18n-t
        keypath="oracoes.credo_niceno_texto"
        tag="blockquote"
        class="border-l-4 border-[#D4AF37] pl-5 md:pl-6 py-1 text-gray-600 leading-relaxed whitespace-pre-line"
      >
        <template #e_do_filho><AppLink to="/termologia-catolica#filioque" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.e_do_filho") }}</AppLink></template>
      </i18n-t>

      <ArticleSubheading id="profissao-de-fe-batismal" :text="$t('oracoes.profissao_batismal_titulo')" />

      <i18n-t keypath="oracoes.profissao_batismal_sobre_p1" tag="p" class="text-sm text-gray-500 italic leading-relaxed text-justify mb-2">
        <template #sobre><strong class="not-italic text-gray-600">{{ $t("oracoes.sobre_label") }}</strong></template>
        <template #batismo><AppLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.batismo") }}</AppLink></template>
      </i18n-t>

      <i18n-t keypath="oracoes.profissao_batismal_sobre_p2" tag="p" class="text-sm text-gray-500 italic leading-relaxed text-justify mb-2">
        <template #pai><AppLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.pai") }}</AppLink></template>
        <template #filho><AppLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.filho") }}</AppLink></template>
        <template #espirito_santo><AppLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.espirito_santo") }}</AppLink></template>
      </i18n-t>

      <i18n-t keypath="oracoes.profissao_batismal_sobre_p3" tag="p" class="text-sm text-gray-500 italic leading-relaxed text-justify mb-6">
        <template #vigilia_pascal><AppLink to="/ano-liturgico#triduo-pascal" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.vigilia_pascal") }}</AppLink></template>
        <template #batismo><AppLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.batismo") }}</AppLink></template>
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
      <ArticleSectionTitle :text="$t('oracoes.eucaristia_titulo')" />

      <i18n-t keypath="oracoes.eucaristia_intro" tag="p" class="text-gray-600 leading-relaxed text-justify">
        <template #sagrada_comunhao><AppLink to="/missa#liturgia-eucaristica" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sagrada_comunhao") }}</AppLink></template>
        <template #santissimo_sacramento><AppLink to="/missa#liturgia-eucaristica" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.santissimo_sacramento") }}</AppLink></template>
      </i18n-t>

      <ArticleSubheading id="alma-de-cristo" :text="$t('oracoes.alma_cristo_titulo')" />

      <i18n-t keypath="oracoes.alma_cristo_sobre_p1" tag="p" class="text-sm text-gray-500 italic leading-relaxed text-justify mb-2">
        <template #sobre><strong class="not-italic text-gray-600">{{ $t("oracoes.sobre_label") }}</strong></template>
        <template #anima_christi><em>Anima Christi</em></template>
        <template #exercicios_espirituais><em>Exercícios Espirituais</em></template>
        <template #santo_inacio><AppLink to="/santo-do-dia?data=2026-07-31" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.santo_inacio_loyola") }}</AppLink></template>
      </i18n-t>

      <p class="text-sm text-gray-500 italic leading-relaxed text-justify mb-6">
        {{ $t("oracoes.alma_cristo_sobre_p2") }}
      </p>

      <blockquote
        class="border-l-4 border-[#D4AF37] pl-5 md:pl-6 py-1 text-gray-600 leading-relaxed whitespace-pre-line"
      >{{ $t("oracoes.alma_cristo_texto") }}</blockquote>

      <ArticleSubheading id="comunhao-espiritual" :text="$t('oracoes.comunhao_espiritual_titulo')" />

      <i18n-t keypath="oracoes.comunhao_espiritual_sobre_p1" tag="p" class="text-sm text-gray-500 italic leading-relaxed text-justify mb-2">
        <template #sobre><strong class="not-italic text-gray-600">{{ $t("oracoes.sobre_label") }}</strong></template>
        <template #santa_missa><AppLink to="/missa" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.santa_missa") }}</AppLink></template>
        <template #confissao><AppLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.confissao") }}</AppLink></template>
      </i18n-t>

      <i18n-t keypath="oracoes.comunhao_espiritual_sobre_p2" tag="p" class="text-sm text-gray-500 italic leading-relaxed text-justify mb-6">
        <template #santo_afonso>
          <strong><AppLink to="/santo-do-dia?data=2026-08-01" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.santo_afonso_ligorio") }}</AppLink></strong>
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

    <section
      id="hinos-e-canticos"
      class="max-w-7xl mx-auto pb-20 px-6 scroll-mt-24"
    >
      <ArticleSectionTitle :text="$t('oracoes.hinos_titulo')" />

      <p class="text-gray-600 leading-relaxed text-justify">
        {{ $t("oracoes.hinos_intro") }}
      </p>

      <ArticleSubheading id="gloria-a-deus-nas-alturas" :text="$t('oracoes.gloria_maior_titulo')" />

      <i18n-t keypath="oracoes.gloria_maior_sobre_p1" tag="p" class="text-sm text-gray-500 italic leading-relaxed text-justify mb-2">
        <template #sobre><strong class="not-italic text-gray-600">{{ $t("oracoes.sobre_label") }}</strong></template>
        <template #natal><AppLink to="/ano-liturgico#tempo-natal" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.natal") }}</AppLink></template>
      </i18n-t>

      <i18n-t keypath="oracoes.gloria_maior_sobre_p2" tag="p" class="text-sm text-gray-500 italic leading-relaxed text-justify mb-2">
        <template #pai_1><AppLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.pai") }}</AppLink></template>
        <template #filho><AppLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.filho") }}</AppLink></template>
        <template #espirito_santo><AppLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.espirito_santo") }}</AppLink></template>
        <template #pai_2><AppLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.pai") }}</AppLink></template>
      </i18n-t>

      <i18n-t keypath="oracoes.gloria_maior_sobre_p3" tag="p" class="text-sm text-gray-500 italic leading-relaxed text-justify mb-6">
        <template #santa_missa><AppLink to="/missa#estrutura-da-santa-missa" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.santa_missa") }}</AppLink></template>
        <template #advento><AppLink to="/ano-liturgico#advento" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.advento") }}</AppLink></template>
        <template #quaresma><AppLink to="/ano-liturgico#quaresma" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.quaresma") }}</AppLink></template>
      </i18n-t>

      <blockquote
        class="border-l-4 border-[#D4AF37] pl-5 md:pl-6 py-1 text-gray-600 leading-relaxed whitespace-pre-line"
      >{{ $t("oracoes.gloria_maior_texto") }}</blockquote>

      <ArticleSubheading id="santo" :text="$t('oracoes.santo_titulo')" />

      <i18n-t keypath="oracoes.santo_sobre_p1" tag="p" class="text-sm text-gray-500 italic leading-relaxed text-justify mb-2">
        <template #sobre><strong class="not-italic text-gray-600">{{ $t("oracoes.sobre_label") }}</strong></template>
        <template #oracao_eucaristica><AppLink to="/missa#liturgia-eucaristica" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.oracao_eucaristica") }}</AppLink></template>
      </i18n-t>

      <p class="text-sm text-gray-500 italic leading-relaxed text-justify mb-6">
        {{ $t("oracoes.santo_sobre_p2") }}
      </p>

      <blockquote
        class="border-l-4 border-[#D4AF37] pl-5 md:pl-6 py-1 text-gray-600 leading-relaxed whitespace-pre-line"
      >{{ $t("oracoes.santo_texto") }}</blockquote>

      <i18n-t keypath="oracoes.santo_obs" tag="p" class="text-sm text-gray-500 italic leading-relaxed text-justify mt-6">
        <template #obs><strong class="not-italic text-gray-600">{{ $t("oracoes.obs_label") }}</strong></template>
        <template #sanctus><em>Sanctus</em></template>
      </i18n-t>

      <ArticleSubheading id="a-vos-o-deus-louvamos" :text="$t('oracoes.te_deum_titulo')" />

      <i18n-t keypath="oracoes.te_deum_sobre_p1" tag="p" class="text-sm text-gray-500 italic leading-relaxed text-justify mb-2">
        <template #sobre><strong class="not-italic text-gray-600">{{ $t("oracoes.sobre_label") }}</strong></template>
        <template #te_deum><em>Te Deum</em></template>
        <template #te_deum_laudamus><em>Te Deum laudamus</em></template>
      </i18n-t>

      <i18n-t keypath="oracoes.te_deum_sobre_p2" tag="p" class="text-sm text-gray-500 italic leading-relaxed text-justify mb-2">
        <template #santo_ambrosio><AppLink to="/santo-do-dia?data=2026-12-07" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.santo_ambrosio") }}</AppLink></template>
        <template #santo_agostinho><AppLink to="/santo-do-dia?data=2026-08-28" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.santo_agostinho") }}</AppLink></template>
        <template #agostinho><AppLink to="/santo-do-dia?data=2026-08-28" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.agostinho") }}</AppLink></template>
      </i18n-t>

      <i18n-t keypath="oracoes.te_deum_sobre_p3" tag="p" class="text-sm text-gray-500 italic leading-relaxed text-justify mb-2">
        <template #anjos><AppLink to="/santo-do-dia" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.anjos") }}</AppLink></template>
        <template #apostolos><AppLink to="/estrutura#episcopado" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.apostolos") }}</AppLink></template>
        <template #profetas><AppLink to="/livros" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.profetas") }}</AppLink></template>
        <template #martires><AppLink to="/santo-do-dia" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.martires") }}</AppLink></template>
        <template #pai><AppLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.pai") }}</AppLink></template>
        <template #filho><AppLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.filho") }}</AppLink></template>
        <template #espirito_santo><AppLink to="/trindade" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.espirito_santo") }}</AppLink></template>
      </i18n-t>

      <i18n-t keypath="oracoes.te_deum_sobre_p4" tag="p" class="text-sm text-gray-500 italic leading-relaxed text-justify mb-6">
        <template #te_deum><em>Te Deum</em></template>
        <template #liturgia_horas><AppLink to="/ritos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.liturgia_horas") }}</AppLink></template>
      </i18n-t>

      <blockquote
        class="border-l-4 border-[#D4AF37] pl-5 md:pl-6 py-1 text-gray-600 leading-relaxed whitespace-pre-line"
      >{{ $t("oracoes.te_deum_texto") }}</blockquote>

      <ArticleSubheading id="vinde-espirito-criador" :text="$t('oracoes.veni_creator_titulo')" />

      <i18n-t keypath="oracoes.veni_creator_sobre_p1" tag="p" class="text-sm text-gray-500 italic leading-relaxed text-justify mb-2">
        <template #sobre><strong class="not-italic text-gray-600">{{ $t("oracoes.sobre_label") }}</strong></template>
        <template #veni_creator><em>Veni Creator Spiritus</em></template>
        <template #sao_rabano><AppLink to="/santo-do-dia?data=2026-02-04" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sao_rabano_mauro") }}</AppLink></template>
      </i18n-t>

      <i18n-t keypath="oracoes.veni_creator_sobre_p2" tag="p" class="text-sm text-gray-500 italic leading-relaxed text-justify mb-2">
        <template #pentecostes><AppLink to="/ano-liturgico#pentecostes" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.pentecostes") }}</AppLink></template>
        <template #conclave><AppLink to="/estrutura#cardeais" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.conclave") }}</AppLink></template>
      </i18n-t>

      <p class="text-sm text-gray-500 italic leading-relaxed text-justify mb-6">
        {{ $t("oracoes.veni_creator_sobre_p3") }}
      </p>

      <blockquote
        class="border-l-4 border-[#D4AF37] pl-5 md:pl-6 py-1 text-gray-600 leading-relaxed whitespace-pre-line"
      >{{ $t("oracoes.veni_creator_texto") }}</blockquote>
    </section>

    <section
      id="sequencias-liturgicas"
      class="max-w-7xl mx-auto pb-20 px-6 scroll-mt-24"
    >
      <ArticleSectionTitle :text="$t('oracoes.sequencias_titulo')" />

      <i18n-t keypath="oracoes.sequencias_intro_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #ano_liturgico><AppLink to="/ano-liturgico" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.ano_liturgico") }}</AppLink></template>
        <template #santa_missa><AppLink to="/missa" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.santa_missa") }}</AppLink></template>
        <template #segunda_leitura><AppLink to="/missa#liturgia-da-palavra" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.segunda_leitura") }}</AppLink></template>
        <template #aleluia><AppLink to="/missa#liturgia-da-palavra" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.aleluia") }}</AppLink></template>
        <template #proclamacao_evangelho><AppLink to="/missa#liturgia-da-palavra" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.proclamacao_evangelho") }}</AppLink></template>
      </i18n-t>

      <i18n-t keypath="oracoes.sequencias_intro_p2" tag="p" class="text-gray-600 leading-relaxed text-justify">
        <template #idade_media><AppLink to="/historia" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.idade_media") }}</AppLink></template>
        <template #missal_romano><AppLink to="/ritos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.missal_romano") }}</AppLink></template>
        <template #pascoa><AppLink to="/ano-liturgico#triduo-pascal" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.pascoa") }}</AppLink></template>
        <template #pentecostes><AppLink to="/ano-liturgico#pentecostes" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.pentecostes") }}</AppLink></template>
      </i18n-t>

      <ArticleSubheading id="sequencia-de-pascoa" :text="$t('oracoes.sequencia_pascoa_titulo')" />

      <i18n-t keypath="oracoes.sequencia_pascoa_sobre_p1" tag="p" class="text-sm text-gray-500 italic leading-relaxed text-justify mb-2">
        <template #sobre><strong class="not-italic text-gray-600">{{ $t("oracoes.sobre_label") }}</strong></template>
        <template #victimae><em>Victimae Paschali Laudes</em></template>
        <template #pascoa><AppLink to="/ano-liturgico#triduo-pascal" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.pascoa") }}</AppLink></template>
      </i18n-t>

      <i18n-t keypath="oracoes.sequencia_pascoa_sobre_p2" tag="p" class="text-sm text-gray-500 italic leading-relaxed text-justify mb-6">
        <template #santa_maria_madalena><AppLink to="/santo-do-dia?data=2026-07-22" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.santa_maria_madalena") }}</AppLink></template>
      </i18n-t>

      <blockquote
        class="border-l-4 border-[#D4AF37] pl-5 md:pl-6 py-1 text-gray-600 leading-relaxed whitespace-pre-line"
      >{{ $t("oracoes.sequencia_pascoa_texto") }}</blockquote>
    </section>

    <section
      id="oracoes-devocionais"
      class="max-w-7xl mx-auto pb-20 px-6 scroll-mt-24"
    >
      <ArticleSectionTitle :text="$t('oracoes.devocionais_titulo')" />

      <p class="text-gray-600 leading-relaxed text-justify">
        {{ $t("oracoes.devocionais_intro") }}
      </p>

      <ArticleSubheading id="oracao-de-fatima" :text="$t('oracoes.fatima_titulo')" />

      <i18n-t keypath="oracoes.fatima_sobre_p1" tag="p" class="text-sm text-gray-500 italic leading-relaxed text-justify mb-2">
        <template #sobre><strong class="not-italic text-gray-600">{{ $t("oracoes.sobre_label") }}</strong></template>
        <template #nossa_senhora><AppLink to="/dogmas-marianos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.nossa_senhora") }}</AppLink></template>
        <template #aparicao_fatima><AppLink to="/santo-do-dia?data=2026-05-13" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.aparicao_fatima") }}</AppLink></template>
        <template #santo_terco><AppLink to="/artigos-religiosos#artigos-devocionais" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.terco") }}</AppLink></template>
      </i18n-t>

      <i18n-t keypath="oracoes.fatima_sobre_p2" tag="p" class="text-sm text-gray-500 italic leading-relaxed text-justify mb-6">
        <template #intercede><AppLink to="/intercessao-e-mediacao" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.intercede") }}</AppLink></template>
      </i18n-t>

      <blockquote
        class="border-l-4 border-[#D4AF37] pl-5 md:pl-6 py-1 text-gray-600 leading-relaxed whitespace-pre-line"
      >{{ $t("oracoes.fatima_texto") }}</blockquote>

      <ArticleSubheading id="oracao-a-sao-miguel-arcanjo" :text="$t('oracoes.sao_miguel_titulo')" />

      <i18n-t keypath="oracoes.sao_miguel_sobre" tag="p" class="text-sm text-gray-500 italic leading-relaxed text-justify mb-6">
        <template #sobre><strong class="not-italic text-gray-600">{{ $t("oracoes.sobre_label") }}</strong></template>
        <template #papa_leao_xiii><AppLink to="/papado" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.papa_leao_xiii") }}</AppLink></template>
        <template #sao_miguel><AppLink to="/santo-do-dia?data=2026-09-29" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sao_miguel") }}</AppLink></template>
      </i18n-t>

      <blockquote
        class="border-l-4 border-[#D4AF37] pl-5 md:pl-6 py-1 text-gray-600 leading-relaxed whitespace-pre-line"
      >{{ $t("oracoes.sao_miguel_texto") }}</blockquote>

      <ArticleSubheading id="oracao-de-sao-bento" :text="$t('oracoes.sao_bento_titulo')" />

      <i18n-t keypath="oracoes.sao_bento_sobre_p1" tag="p" class="text-sm text-gray-500 italic leading-relaxed text-justify mb-2">
        <template #sobre><strong class="not-italic text-gray-600">{{ $t("oracoes.sobre_label") }}</strong></template>
        <template #medalha_sao_bento><AppLink to="/artigos-religiosos#artigos-devocionais" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.medalha_sao_bento") }}</AppLink></template>
      </i18n-t>

      <i18n-t keypath="oracoes.sao_bento_sobre_p2" tag="p" class="text-sm text-gray-500 italic leading-relaxed text-justify mb-6">
        <template #sao_bento><AppLink to="/santo-do-dia?data=2026-07-11" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sao_bento") }}</AppLink></template>
      </i18n-t>

      <blockquote
        class="border-l-4 border-[#D4AF37] pl-5 md:pl-6 py-1 text-gray-600 leading-relaxed whitespace-pre-line"
      >{{ $t("oracoes.sao_bento_texto") }}</blockquote>
    </section>

    <section
      id="oracoes-da-igreja-antiga"
      class="max-w-7xl mx-auto pb-20 px-6 scroll-mt-24"
    >
      <ArticleSectionTitle :text="$t('oracoes.igreja_antiga_titulo')" />

      <p class="text-gray-600 leading-relaxed text-justify">
        {{ $t("oracoes.igreja_antiga_intro") }}
      </p>

      <ArticleSubheading id="a-vossa-protecao" :text="$t('oracoes.sub_tuum_titulo')" />

      <i18n-t keypath="oracoes.sub_tuum_sobre_p1" tag="p" class="text-sm text-gray-500 italic leading-relaxed text-justify mb-2">
        <template #sobre><strong class="not-italic text-gray-600">{{ $t("oracoes.sobre_label") }}</strong></template>
        <template #sub_tuum><em>Sub tuum praesidium</em></template>
        <template #intercessao><AppLink to="/intercessao-e-mediacao" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.intercessao") }}</AppLink></template>
        <template #virgem_maria><AppLink to="/dogmas-marianos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.virgem_maria") }}</AppLink></template>
        <template #theotokos><AppLink to="/termologia-catolica#theotokos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.theotokos") }}</AppLink></template>
      </i18n-t>

      <i18n-t keypath="oracoes.sub_tuum_sobre_p2" tag="p" class="text-sm text-gray-500 italic leading-relaxed text-justify mb-6">
        <template #concilio_efeso><AppLink to="/tradicao-e-magisterio" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.concilio_efeso") }}</AppLink></template>
        <template #theotokos><AppLink to="/termologia-catolica#theotokos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.theotokos") }}</AppLink></template>
        <template #maria><AppLink to="/dogmas-marianos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.maria") }}</AppLink></template>
      </i18n-t>

      <blockquote
        class="border-l-4 border-[#D4AF37] pl-5 md:pl-6 py-1 text-gray-600 leading-relaxed whitespace-pre-line"
      >{{ $t("oracoes.sub_tuum_texto") }}</blockquote>

      <ArticleSubheading id="oracao-de-sao-policarpo" :text="$t('oracoes.sao_policarpo_titulo')" />

      <i18n-t keypath="oracoes.sao_policarpo_sobre_p1" tag="p" class="text-sm text-gray-500 italic leading-relaxed text-justify mb-2">
        <template #sobre><strong class="not-italic text-gray-600">{{ $t("oracoes.sobre_label") }}</strong></template>
        <template #sao_policarpo><AppLink to="/santo-do-dia?data=2026-02-23" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sao_policarpo") }}</AppLink></template>
        <template #sao_joao><AppLink to="/santo-do-dia?data=2026-12-27" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sao_joao") }}</AppLink></template>
        <template #apostolos><AppLink to="/estrutura#episcopado" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.apostolos") }}</AppLink></template>
      </i18n-t>

      <i18n-t keypath="oracoes.sao_policarpo_sobre_p2" tag="p" class="text-sm text-gray-500 italic leading-relaxed text-justify mb-6">
        <template #bento_xvi><AppLink to="/papado" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.bento_xvi") }}</AppLink></template>
      </i18n-t>

      <blockquote
        class="border-l-4 border-[#D4AF37] pl-5 md:pl-6 py-1 text-gray-600 leading-relaxed whitespace-pre-line"
      >{{ $t("oracoes.sao_policarpo_texto") }}</blockquote>
    </section>
  </main>
</template>
