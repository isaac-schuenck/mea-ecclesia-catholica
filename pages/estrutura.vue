<template>
  <main class="flex-grow">
    <section
      id="estrutura-da-igreja"
      class="max-w-7xl mx-auto pt-20 pb-20 px-6 scroll-mt-24"
    >
      <ArticleTableOfContents :items="[
        { target: 'estrutura-da-igreja', translationKey: 'hierarquia.sumario_estrutura' },
        { target: 'hierarquia', translationKey: 'hierarquia.sumario_hierarquia' },
        { target: 'organizacao-territorial', translationKey: 'hierarquia.sumario_organizacao' },
        { target: 'lugares-sagrados', translationKey: 'hierarquia.sumario_lugares_sagrados' },
      ]" />

      <ArticleSectionTitle as="h1" :text="$t('hierarquia.titulo')" />

      <i18n-t
        keypath="hierarquia.p1"
        tag="p"
        class="text-gray-600 leading-relaxed text-justify mb-2"
      >
        <template #papa>
          <AppLink to="/papado" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">
            {{ $t("palavras_chave.papa") }}
          </AppLink>
        </template>
        <template #missa>
          <AppLink to="/missa" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">
            {{ $t("palavras_chave.missa") }}
          </AppLink>
        </template>
        <template #batismo>
          <AppLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">
            {{ $t("palavras_chave.batismo") }}
          </AppLink>
        </template>
      </i18n-t>

      <i18n-t
        keypath="hierarquia.p2"
        tag="p"
        class="text-gray-600 leading-relaxed text-justify mb-2"
      >
        <template #sacramento_ordem>
          <AppLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">
            {{ $t("palavras_chave.sacramento_ordem") }}
          </AppLink>
        </template>
        <template #vida_consagrada>
          <AppLink to="/estrutura#vida-consagrada" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">
            {{ $t("palavras_chave.vida_consagrada") }}
          </AppLink>
        </template>
      </i18n-t>

      <i18n-t
        keypath="hierarquia.p3"
        tag="p"
        class="text-gray-600 leading-relaxed text-justify"
      >
        <template #igreja>
          <strong>{{ $t("palavras_chave.igreja") }}</strong>
        </template>
      </i18n-t>
    </section>

    <section id="hierarquia" class="max-w-7xl mx-auto pb-20 px-6 scroll-mt-24">
      <h2
        class="text-3xl font-bold text-[#041122] mb-12 font-serif border-b-2 border-[#D4AF37] pb-3 inline-block"
      >
        {{ $t("hierarquia.hierarquia_titulo") }}
      </h2>

      <i18n-t keypath="hierarquia.h_intro1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #sacramento_ordem>
          <AppLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">
            {{ $t("palavras_chave.sacramento_ordem") }}
          </AppLink>
        </template>
        <template #sucessao_apostolica>
          <AppLink to="/sucessao-apostolica" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">
            {{ $t("palavras_chave.sucessao_apostolica") }}
          </AppLink>
        </template>
      </i18n-t>

      <i18n-t keypath="hierarquia.h_intro2" tag="p" class="text-gray-600 leading-relaxed text-justify mb-3">
        <template #papa>
          <AppLink to="/papado" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">
            {{ $t("palavras_chave.papa") }}
          </AppLink>
        </template>
      </i18n-t>

      <ol class="list-decimal marker:text-[#9B7322] pl-8 space-y-1 text-gray-600 leading-relaxed mb-4">
        <li>{{ $t("hierarquia.grau_episcopado") }}</li>
        <li>{{ $t("hierarquia.grau_presbiterado") }}</li>
        <li>{{ $t("hierarquia.grau_diaconato") }}</li>
      </ol>

      <i18n-t keypath="hierarquia.h_intro3" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #papa>
          <AppLink to="/papado" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">
            {{ $t("palavras_chave.papa") }}
          </AppLink>
        </template>
      </i18n-t>

      <p class="text-gray-600 leading-relaxed text-justify">
        {{ $t("hierarquia.h_intro4") }}
      </p>

      <h3 id="episcopado" class="text-2xl font-bold text-[#041122] font-serif mt-12 mb-5 scroll-mt-24">
        {{ $t("hierarquia.episcopado_titulo") }}
      </h3>

      <figure class="w-32 md:w-52 float-left mr-4 md:mr-7 mb-2 md:mb-4 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh2rP1cIS-LfZVJkdptEvd8J8PTR3qOF29o1zTg5gMdhmzhMYKKs2bEDAn19U9TyDGk_T5EMzAkIz_GPJKyPq3u-kBpPdpYqu63RTKxiPiOMfjH6uXlGXtplYPokaqhkeM8qgSfp5wAwml6/s640/popepatriarchs.jpg" :alt="$t('hierarquia.imagem_patriarcas')" class="w-full h-auto rounded-md object-contain cursor-zoom-in" @click.stop="openImageFromEvent" />
        <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("hierarquia.imagem_patriarcas") }}</figcaption>
      </figure>

      <i18n-t keypath="hierarquia.episcopado_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #sacramento_ordem><AppLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sacramento_ordem") }}</AppLink></template>
        <template #apostolos><AppLink to="/sucessao-apostolica" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.apostolos") }}</AppLink></template>
        <template #papa><AppLink to="/papado" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.papa") }}</AppLink></template>
      </i18n-t>

      <i18n-t keypath="hierarquia.episcopado_orientais" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #igrejas_orientais_catolicas><AppLink to="/igrejas-orientais" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.igrejas_orientais_catolicas") }}</AppLink></template>
        <template #sacramentos><AppLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sacramentos") }}</AppLink></template>
        <template #igrejas_orientais><AppLink to="/igrejas-orientais" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.igrejas_orientais") }}</AppLink></template>
        <template #patriarcas><AppLink to="/igrejas-orientais" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.patriarcas") }}</AppLink></template>
        <template #arcebispos_maiores><AppLink to="/igrejas-orientais" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.arcebispos_maiores") }}</AppLink></template>
      </i18n-t>

      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.episcopado_p2") }}</p>

      <div class="md:border-l-4 md:border-[#D4AF37]/40 md:pl-8 md:mt-8 md:space-y-8">
      <div class="mt-8 md:mt-0">
      <h4 id="papa" class="clear-both text-xl font-bold text-[#041122] font-serif mb-4 scroll-mt-24">{{ $t("hierarquia.papa_titulo") }}</h4>
      <figure class="w-32 md:w-40 float-right ml-4 md:ml-7 mb-2 md:mb-4 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img src="https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/home_papa-leao-14.png?w=1600&h=1287&p=top" :alt="$t('hierarquia.imagem_papa')" class="w-full aspect-square rounded-md object-cover object-top cursor-zoom-in" @click.stop="openImageFromEvent" />
        <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("hierarquia.imagem_papa") }}</figcaption>
      </figure>
      <i18n-t keypath="hierarquia.papa_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #papa><AppLink to="/papado" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.papa") }}</AppLink></template>
        <template #sao_pedro><AppLink to="/santo-do-dia?data=2026-06-29#sao-pedro" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sao_pedro") }}</AppLink></template>
      </i18n-t>
      <i18n-t keypath="hierarquia.papa_p2" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #ordem><AppLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.ordem") }}</AppLink></template>
        <template #papa><AppLink to="/papado" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.papa") }}</AppLink></template>
      </i18n-t>
      <i18n-t keypath="hierarquia.papa_p3" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #servus_servorum_dei><em>{{ $t("palavras_chave.servus_servorum_dei") }}</em></template>
      </i18n-t>
      </div>

      <div class="mt-8 md:mt-0">
      <h4 id="cardeais" class="clear-both text-xl font-bold text-[#041122] font-serif mb-4 scroll-mt-24">{{ $t("hierarquia.cardeais_titulo") }}</h4>
      <figure class="w-32 md:w-44 float-left mr-4 md:mr-7 mb-2 md:mb-4 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img src="https://img.cancaonova.com/cnimages/canais/uploads/sites/11/2020/11/cardeais-colegio-cardinali%CC%81cio-consisto%CC%81rio-2016_Daniel-Ibanez_CNA.jpg" :alt="$t('hierarquia.imagem_cardeais')" class="w-full aspect-square rounded-md object-cover cursor-zoom-in" @click.stop="openImageFromEvent" />
        <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("hierarquia.imagem_cardeais") }}</figcaption>
      </figure>
      <i18n-t keypath="hierarquia.cardeais_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #papa><AppLink to="/papado" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.papa") }}</AppLink></template>
        <template #dioceses><AppLink to="/estrutura#bispos-diocesanos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.dioceses") }}</AppLink></template>
      </i18n-t>
      <i18n-t keypath="hierarquia.cardeais_p2" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #sacramento_ordem><AppLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sacramento_ordem") }}</AppLink></template>
      </i18n-t>
      <i18n-t keypath="hierarquia.cardeais_p3" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #conclave><AppLink to="/papado" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.conclave") }}</AppLink></template>
      </i18n-t>
      </div>

      <div class="mt-8 md:mt-0">
      <h4 id="bispos-diocesanos" class="clear-both text-xl font-bold text-[#041122] font-serif mb-4 scroll-mt-24">{{ $t("hierarquia.bispos_titulo") }}</h4>
      <figure class="w-32 md:w-40 float-right ml-4 md:ml-7 mb-2 md:mb-4 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO9WAhEIE3e1xnDH0nxGEMh6qI_6JWu-V4a3K0G_O8Jm9CVfaarvCNoxmE&s=10" :alt="$t('hierarquia.imagem_dom_walmor')" class="w-full aspect-square rounded-md object-cover object-top cursor-zoom-in" @click.stop="openImageFromEvent" />
        <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("hierarquia.imagem_dom_walmor") }}</figcaption>
      </figure>
      <i18n-t keypath="hierarquia.bispos_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #diocese><AppLink to="/estrutura#bispos-diocesanos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.diocese") }}</AppLink></template>
        <template #paroquias><AppLink to="/estrutura#paroco" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.paroquias") }}</AppLink></template>
      </i18n-t>
      <i18n-t keypath="hierarquia.bispos_p2" tag="p" class="text-gray-600 leading-relaxed text-justify mb-3">
        <template #diocese><AppLink to="/estrutura#bispos-diocesanos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.diocese") }}</AppLink></template>
        <template #papa><AppLink to="/papado" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.papa") }}</AppLink></template>
      </i18n-t>
      <ul class="list-disc marker:text-[#D4AF37] pl-8 space-y-1 text-gray-600 leading-relaxed mb-4">
        <li>{{ $t("hierarquia.bispo_missao_ensinar") }}</li>
        <li>{{ $t("hierarquia.bispo_missao_santificar") }}</li>
        <li>{{ $t("hierarquia.bispo_missao_governar") }}</li>
      </ul>
      </div>

      <div class="mt-8 md:mt-0">
      <h4 id="arcebispos" class="clear-both text-xl font-bold text-[#041122] font-serif mb-4 scroll-mt-24">{{ $t("hierarquia.arcebispos_titulo") }}</h4>
      <i18n-t keypath="hierarquia.arcebispos_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #arquidiocese><AppLink to="/estrutura#arcebispos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.arquidiocese") }}</AppLink></template>
      </i18n-t>
      <i18n-t keypath="hierarquia.arcebispos_p2" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #arquidioceses><AppLink to="/estrutura#arcebispos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.arquidioceses") }}</AppLink></template>
      </i18n-t>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.arcebispos_p3") }}</p>
      </div>

      <div class="mt-8 md:mt-0">
      <h4 id="bispos-auxiliares" class="clear-both text-xl font-bold text-[#041122] font-serif mb-4 scroll-mt-24">{{ $t("hierarquia.auxiliares_titulo") }}</h4>
      <figure class="w-32 md:w-36 float-left mr-4 md:mr-7 mb-2 md:mb-4 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img src="https://arquidiocesebh.org.br/wp-content/uploads/2021/03/dom-julio-682x1024.jpeg" :alt="$t('hierarquia.imagem_dom_julio')" class="w-full aspect-square rounded-md object-cover object-top cursor-zoom-in" @click.stop="openImageFromEvent" />
        <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("hierarquia.imagem_dom_julio") }}</figcaption>
      </figure>
      <i18n-t keypath="hierarquia.auxiliares_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #papa><AppLink to="/papado" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.papa") }}</AppLink></template>
      </i18n-t>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.auxiliares_p2") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("hierarquia.auxiliares_p3") }}</p>
      </div>
      </div>

      <h3 id="presbiterado" class="clear-both text-2xl font-bold text-[#041122] font-serif mt-12 mb-5 scroll-mt-24">
        {{ $t("hierarquia.presbiterado_titulo") }}
      </h3>

      <figure class="w-28 md:w-36 float-right ml-4 md:ml-7 mb-2 md:mb-4 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPCxRhE-Jgqrtl17SLOME8JMme8wgDXB63pHzBnNPFmcsq6oPuWunuHGYX&s=10" :alt="$t('hierarquia.imagem_padre_paulo_ricardo')" class="w-full h-auto rounded-md object-contain cursor-zoom-in" @click.stop="openImageFromEvent" />
        <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("hierarquia.imagem_padre_paulo_ricardo") }}</figcaption>
      </figure>

      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.presbiterado_p1") }}</p>

      <i18n-t keypath="hierarquia.presbiterado_p2" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #missa><AppLink to="/missa" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.missa") }}</AppLink></template>
        <template #confissao><AppLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.confissao") }}</AppLink></template>
      </i18n-t>

      <i18n-t keypath="hierarquia.presbiterado_p3" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #in_persona_christi_capitis><em>{{ $t("palavras_chave.in_persona_christi_capitis") }}</em></template>
      </i18n-t>

      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.presbiterado_p4") }}</p>

      <div class="md:border-l-4 md:border-[#D4AF37]/40 md:pl-8 md:mt-8 md:space-y-2">
      <div class="mt-8 md:mt-0">
      <h4 id="padre-diocesano-religioso" class="clear-both text-xl font-bold text-[#041122] font-serif mb-4 scroll-mt-24">{{ $t("hierarquia.padre_titulo") }}</h4>
      <figure class="w-32 md:w-32 float-left mr-4 md:mr-7 mb-2 md:mb-3 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img src="https://redevida.com.br/wp-content/uploads/2025/03/Frei-Gilson.png" :alt="$t('hierarquia.imagem_frei_gilson')" class="w-full aspect-square rounded-md object-cover object-top cursor-zoom-in" @click.stop="openImageFromEvent" />
        <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("hierarquia.imagem_frei_gilson") }}</figcaption>
      </figure>
      <i18n-t keypath="hierarquia.padre_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #homens_celibatarios><AppLink to="/catecismo" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.homens_celibatarios") }}</AppLink></template>
      </i18n-t>
      <i18n-t keypath="hierarquia.padre_p2" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #sacramento_ordem><AppLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sacramento_ordem") }}</AppLink></template>
      </i18n-t>
      </div>

      <div class="mt-8 md:mt-0">
      <h4 id="paroco" class="clear-both md:clear-left text-xl font-bold text-[#041122] font-serif mb-4 scroll-mt-24">{{ $t("hierarquia.paroco_titulo") }}</h4>
      <figure class="w-32 md:w-32 float-right ml-4 md:ml-7 mb-2 md:mb-3 md:-mt-10 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img src="https://s2-g1.glbimg.com/uMbgrhDHVqPeWqeJEIko5QglWDI=/0x0:960x720/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/t/N/OzxORgReGufzrsXXVqcQ/missa-itu.jpeg" :alt="$t('hierarquia.imagem_paroco')" class="w-full aspect-square rounded-md object-cover object-center cursor-zoom-in" @click.stop="openImageFromEvent" />
        <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("hierarquia.imagem_paroco") }}</figcaption>
      </figure>
      <i18n-t keypath="hierarquia.paroco_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #paroquia><AppLink to="/estrutura#paroco" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.paroquia") }}</AppLink></template>
        <template #sacramentos><AppLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sacramentos") }}</AppLink></template>
      </i18n-t>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.paroco_p2") }}</p>
      </div>

      <div class="mt-8 md:mt-0">
      <h4 id="vigario-paroquial" class="clear-both md:clear-none text-xl font-bold text-[#041122] font-serif mb-4 scroll-mt-24">{{ $t("hierarquia.vigario_titulo") }}</h4>
      <figure class="w-32 md:w-32 float-left mr-4 md:mr-7 mb-2 md:mb-3 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img src="https://arquiconquista.org.br/wp-content/uploads/2026/02/2-2-768x1024.jpeg" :alt="$t('hierarquia.imagem_vigario')" class="w-full aspect-square rounded-md object-cover object-top cursor-zoom-in" @click.stop="openImageFromEvent" />
        <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("hierarquia.imagem_vigario") }}</figcaption>
      </figure>
      <i18n-t keypath="hierarquia.vigario_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #missas><AppLink to="/missa" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.missas") }}</AppLink></template>
        <template #confissoes><AppLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.confissoes") }}</AppLink></template>
        <template #visitas_enfermos><AppLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.visitas_enfermos") }}</AppLink></template>
      </i18n-t>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.vigario_p2") }}</p>
      </div>

      <div class="mt-8 md:mt-0">
      <h4 id="capelao" class="clear-both md:clear-left text-xl font-bold text-[#041122] font-serif mb-4 scroll-mt-24">{{ $t("hierarquia.capelao_titulo") }}</h4>
      <figure class="w-32 md:w-32 float-right ml-4 md:ml-7 mb-2 md:mb-3 md:-mt-10 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img src="https://img.cancaonova.com/cnimages/canais/uploads/sites/11/2024/05/Capelaes_militares_no_RS_-Foto-CNBB.jpg" :alt="$t('hierarquia.imagem_capelao')" class="w-full aspect-square rounded-md object-cover object-center cursor-zoom-in" @click.stop="openImageFromEvent" />
        <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("hierarquia.imagem_capelao") }}</figcaption>
      </figure>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.capelao_p1") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("hierarquia.capelao_p2") }}</p>
      </div>
      </div>

      <h3 id="diaconato" class="clear-both md:clear-right text-2xl font-bold text-[#041122] font-serif mt-12 mb-5 scroll-mt-24">
        {{ $t("hierarquia.diaconato_titulo") }}
      </h3>

      <i18n-t keypath="hierarquia.diaconato_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #sacramento_ordem><AppLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sacramento_ordem") }}</AppLink></template>
        <template #diakonos><em>{{ $t("palavras_chave.diakonos") }}</em></template>
      </i18n-t>

      <i18n-t keypath="hierarquia.diaconato_p2" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #proclamar_evangelho><AppLink to="/missa#evangelho" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.proclamar_evangelho") }}</AppLink></template>
        <template #batismo><AppLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.batismo") }}</AppLink></template>
        <template #comunhao><AppLink to="/missa#comunhao" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.comunhao") }}</AppLink></template>
        <template #matrimonio><AppLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.matrimonio") }}</AppLink></template>
      </i18n-t>

      <i18n-t keypath="hierarquia.diaconato_p3" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #missa><AppLink to="/missa" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.missa") }}</AppLink></template>
        <template #consagrar_eucaristia><AppLink to="/missa#consagracao" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.consagrar_eucaristia") }}</AppLink></template>
        <template #pecados><AppLink to="/catecismo" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.pecados") }}</AppLink></template>
        <template #confissao><AppLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.confissao") }}</AppLink></template>
        <template #uncao_enfermos><AppLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.uncao_enfermos") }}</AppLink></template>
      </i18n-t>

      <div class="md:border-l-4 md:border-[#D4AF37]/40 md:pl-8 md:mt-8 md:space-y-8">
        <div class="mt-8 md:mt-0">
          <h4 id="diaconos-transitorios" class="text-xl font-bold text-[#041122] font-serif mb-4 scroll-mt-24">{{ $t("hierarquia.transitorios_titulo") }}</h4>
          <figure class="w-32 md:w-36 float-left mr-4 md:mr-7 mb-2 md:mb-4 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
            <img src="https://arqmariana.com.br/wp-content/uploads/2022/05/diaconos-transitorios.jpg" :alt="$t('hierarquia.imagem_diaconos_transitorios')" class="w-full h-auto rounded-md object-contain cursor-zoom-in" @click.stop="openImageFromEvent" />
            <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("hierarquia.imagem_diaconos_transitorios") }}</figcaption>
          </figure>
          <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.transitorios_p1") }}</p>
          <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.transitorios_p2") }}</p>
        </div>

        <div class="mt-8 md:mt-0">
          <h4 id="diaconos-permanentes" class="clear-both md:clear-left text-xl font-bold text-[#041122] font-serif mb-4 scroll-mt-24">{{ $t("hierarquia.permanentes_titulo") }}</h4>
          <figure class="w-32 md:w-32 float-right ml-4 md:ml-7 mb-2 md:mb-3 md:-mt-10 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
            <img src="https://diaconofrancis.wordpress.com/wp-content/uploads/2024/05/esta-1.jpg" :alt="$t('hierarquia.imagem_diacono_permanente')" class="w-full aspect-square rounded-md object-cover object-center cursor-zoom-in" @click.stop="openImageFromEvent" />
            <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("hierarquia.imagem_diacono_permanente") }}</figcaption>
          </figure>
          <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.permanentes_p1") }}</p>
          <i18n-t keypath="hierarquia.permanentes_p2" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
            <template #celibato><AppLink to="/catecismo" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.celibato") }}</AppLink></template>
            <template #matrimonio><AppLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.matrimonio") }}</AppLink></template>
          </i18n-t>
        </div>
      </div>

      <h3 id="vida-consagrada" class="clear-both md:clear-right text-2xl font-bold text-[#041122] font-serif mt-12 mb-5 scroll-mt-24">
        {{ $t("hierarquia.consagrada_titulo") }}
      </h3>

      <i18n-t keypath="hierarquia.consagrada_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #vida_consagrada><AppLink to="/estrutura#vida-consagrada" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.vida_consagrada") }}</AppLink></template>
        <template #sacramento_ordem><AppLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sacramento_ordem") }}</AppLink></template>
      </i18n-t>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.consagrada_p2") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.consagrada_p3") }}</p>

      <div class="md:border-l-4 md:border-[#D4AF37]/40 md:pl-8 md:mt-8 md:space-y-8">
        <div class="mt-8 md:mt-0">
          <h4 id="monges-monjas" class="text-xl font-bold text-[#041122] font-serif mb-4 scroll-mt-24">{{ $t("hierarquia.monges_titulo") }}</h4>
          <figure
            class="w-32 md:w-60 float-left mr-4 md:mr-7 mb-2 md:mb-4 bg-white border border-gray-200 rounded-lg p-2 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            <img :src="mongesImageUrl" :alt="$t('hierarquia.imagem_monges_beneditinos')" class="w-full h-auto rounded-md object-contain cursor-zoom-in" @click.stop="openImageFromEvent" />
            <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("hierarquia.imagem_monges_beneditinos") }}</figcaption>
          </figure>
          <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.monges_p1") }}</p>
          <i18n-t keypath="hierarquia.monges_p2" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
            <template #sacramento_ordem><AppLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sacramento_ordem") }}</AppLink></template>
          </i18n-t>
        </div>

        <div class="mt-8 md:mt-0">
          <h4 id="frades-religiosas" class="clear-both md:clear-left text-xl font-bold text-[#041122] font-serif mb-4 scroll-mt-24">{{ $t("hierarquia.frades_titulo") }}</h4>
          <figure class="w-32 md:w-48 float-right ml-4 md:ml-7 mb-2 md:mb-3 md:-mt-10 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
            <img src="https://www.vaticannews.va/content/dam/vaticannews/multimedia/2025/settembre/23/AGUSTINOS-RECOLETOS---ENCUENTRO---ROMA-1.jpg/_jcr_content/renditions/cq5dam.thumbnail.cropped.750.422.jpeg" :alt="$t('hierarquia.imagem_frades_agostinianos')" class="w-full h-auto rounded-md object-contain cursor-zoom-in" @click.stop="openImageFromEvent" />
            <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("hierarquia.imagem_frades_agostinianos") }}</figcaption>
          </figure>
          <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.frades_p1") }}</p>
          <p class="text-gray-600 leading-relaxed text-justify">{{ $t("hierarquia.frades_p2") }}</p>
        </div>
      </div>

      <h3 id="ministerios-leigos" class="clear-both md:clear-right text-2xl font-bold text-[#041122] font-serif mt-12 mb-5 scroll-mt-24">
        {{ $t("hierarquia.leigos_ministerios_titulo") }}
      </h3>

      <i18n-t keypath="hierarquia.leigos_ministerios_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #liturgia><AppLink to="/missa" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.liturgia") }}</AppLink></template>
      </i18n-t>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.leigos_ministerios_p2") }}</p>

      <div class="md:border-l-4 md:border-[#D4AF37]/40 md:pl-8 md:mt-8 md:space-y-8">
        <div class="mt-8 md:mt-0">
          <h4 id="leitores" class="text-xl font-bold text-[#041122] font-serif mb-4 scroll-mt-24">{{ $t("hierarquia.leitores_titulo") }}</h4>
          <figure class="w-32 md:w-36 float-left mr-4 md:mr-7 mb-2 md:mb-4 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmlNh-Cs8tgPiMlkoyDF_WIMsXT-qht3mfapiMSfNRj5BbUsOhU6HUNkQ&s=10" :alt="$t('hierarquia.imagem_leitores')" class="w-full aspect-square rounded-md object-cover object-center cursor-zoom-in" @click.stop="openImageFromEvent" />
            <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("hierarquia.imagem_leitores") }}</figcaption>
          </figure>
          <i18n-t keypath="hierarquia.leitores_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
            <template #leituras><AppLink to="/missa#ciclo-das-leituras" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.leituras") }}</AppLink></template>
            <template #sagrada_escritura><AppLink to="/escritura" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sagrada_escritura") }}</AppLink></template>
            <template #liturgia><AppLink to="/missa" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.liturgia") }}</AppLink></template>
            <template #evangelho><AppLink to="/missa#evangelho" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.evangelho") }}</AppLink></template>
          </i18n-t>
          <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.leitores_p2") }}</p>
        </div>

        <div class="mt-8 md:mt-0">
          <h4 id="acolitos" class="clear-both md:clear-left text-xl font-bold text-[#041122] font-serif mb-4 scroll-mt-24">{{ $t("hierarquia.acolitos_titulo") }}</h4>
          <figure class="w-32 md:w-32 float-right ml-4 md:ml-7 mb-2 md:mb-3 md:-mt-10 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
            <img src="https://www.paieterno.com.br/wp-content/uploads/2014/10/DESTAQUE_FIQUE_POR_DENTRO_14_10_2014.png" :alt="$t('hierarquia.imagem_acolitos')" class="w-full aspect-square rounded-md object-cover object-center cursor-zoom-in" @click.stop="openImageFromEvent" />
            <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("hierarquia.imagem_acolitos") }}</figcaption>
          </figure>
          <i18n-t keypath="hierarquia.acolitos_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
            <template #altar><AppLink to="/missa" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.altar") }}</AppLink></template>
            <template #comunhao><AppLink to="/missa#comunhao" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.comunhao") }}</AppLink></template>
          </i18n-t>
          <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.acolitos_p2") }}</p>
        </div>

        <div class="mt-8 md:mt-0">
          <h4 id="coroinhas" class="clear-both md:clear-right text-xl font-bold text-[#041122] font-serif mb-4 scroll-mt-24">{{ $t("hierarquia.coroinhas_titulo") }}</h4>
          <figure class="w-32 md:w-36 float-left mr-4 md:mr-7 mb-2 md:mb-4 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
            <img src="https://dj.org.br/wp-content/uploads/2021/05/acolitos.jpg" :alt="$t('hierarquia.imagem_coroinhas')" class="w-full aspect-square rounded-md object-cover object-center cursor-zoom-in" @click.stop="openImageFromEvent" />
            <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("hierarquia.imagem_coroinhas") }}</figcaption>
          </figure>
          <i18n-t keypath="hierarquia.coroinhas_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
            <template #celebracoes><AppLink to="/missa" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.celebracoes") }}</AppLink></template>
            <template #cruz_processional><AppLink to="/artigos-religiosos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.cruz_processional") }}</AppLink></template>
            <template #velas><AppLink to="/artigos-religiosos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.velas") }}</AppLink></template>
            <template #turibulo><AppLink to="/artigos-religiosos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.turibulo") }}</AppLink></template>
            <template #missal><AppLink to="/ritos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.missal") }}</AppLink></template>
            <template #objetos><AppLink to="/artigos-religiosos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.objetos") }}</AppLink></template>
            <template #liturgia><AppLink to="/missa" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.liturgia") }}</AppLink></template>
          </i18n-t>
          <i18n-t keypath="hierarquia.coroinhas_p2" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
            <template #celebracao><AppLink to="/missa" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.celebracao") }}</AppLink></template>
            <template #liturgias><AppLink to="/missa" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.liturgias") }}</AppLink></template>
          </i18n-t>
          <i18n-t keypath="hierarquia.coroinhas_p3" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
            <template #ordem><AppLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.ordem") }}</AppLink></template>
          </i18n-t>
        </div>

        <div class="mt-8 md:mt-0">
          <h4 id="ministros-comunhao" class="clear-both md:clear-left text-xl font-bold text-[#041122] font-serif mb-4 scroll-mt-24">{{ $t("hierarquia.ministros_comunhao_titulo") }}</h4>
          <figure class="w-32 md:w-32 float-right ml-4 md:ml-7 mb-2 md:mb-3 md:-mt-10 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
            <img src="https://images.a12.com/source/files/c/304016/ministros_da_sagrada_comunhao_-_3_feira_Santa_2023-705181_4227-3170-0-0.jpg" :alt="$t('hierarquia.imagem_ministros_comunhao')" class="w-full aspect-square rounded-md object-cover object-center cursor-zoom-in" @click.stop="openImageFromEvent" />
            <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("hierarquia.imagem_ministros_comunhao") }}</figcaption>
          </figure>
          <i18n-t keypath="hierarquia.ministros_comunhao_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
            <template #sagrada_comunhao><AppLink to="/missa#comunhao" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sagrada_comunhao") }}</AppLink></template>
          </i18n-t>
          <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.ministros_comunhao_p2") }}</p>
        </div>

        <div class="mt-8 md:mt-0">
          <h4 id="fieis-leigos" class="clear-both md:clear-right text-xl font-bold text-[#041122] font-serif mb-4 scroll-mt-24">{{ $t("hierarquia.fieis_leigos_titulo") }}</h4>
          <figure class="w-32 md:w-36 float-left mr-4 md:mr-7 mb-2 md:mb-4 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
            <img src="https://www.centroloyola.org.br/images/outras-palavras/espiritualidade/2095075.jpg" :alt="$t('hierarquia.imagem_fieis_leigos')" class="w-full aspect-square rounded-md object-cover object-center cursor-zoom-in" @click.stop="openImageFromEvent" />
            <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("hierarquia.imagem_fieis_leigos") }}</figcaption>
          </figure>
          <i18n-t keypath="hierarquia.fieis_leigos_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
            <template #batizados><AppLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.batizados") }}</AppLink></template>
            <template #sacramento_ordem><AppLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sacramento_ordem") }}</AppLink></template>
          </i18n-t>
          <i18n-t keypath="hierarquia.fieis_leigos_p2" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
            <template #evangelho><AppLink to="/missa#evangelho" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.evangelho") }}</AppLink></template>
          </i18n-t>
          <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.fieis_leigos_p3") }}</p>
          <i18n-t keypath="hierarquia.fieis_leigos_p4" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
            <template #batismo><AppLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.batismo") }}</AppLink></template>
          </i18n-t>
          <i18n-t keypath="hierarquia.fieis_leigos_p5" tag="p" class="text-gray-600 leading-relaxed text-justify">
            <template #sacramentos><AppLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sacramentos") }}</AppLink></template>
            <template #apostolica><AppLink to="/sucessao-apostolica" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.apostolica") }}</AppLink></template>
            <template #batizado><AppLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.batizado") }}</AppLink></template>
          </i18n-t>
        </div>
      </div>
    </section>

    <section id="organizacao-territorial" class="clear-both max-w-7xl mx-auto pb-20 px-6 scroll-mt-24">
      <h2 class="text-3xl font-bold text-[#041122] mb-12 font-serif border-b-2 border-[#D4AF37] pb-3 inline-block">
        {{ $t("hierarquia.organizacao_titulo") }}
      </h2>

      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.organizacao_intro") }}</p>

      <h3 id="igreja-universal" class="clear-both text-2xl font-bold text-[#041122] font-serif mt-12 mb-5 scroll-mt-24">{{ $t("hierarquia.igreja_universal_titulo") }}</h3>
      <figure class="w-32 md:w-44 float-left mr-4 md:mr-7 mb-2 md:mb-4 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img src="https://s2-valor.glbimg.com/uByfWSz1WaJFCccwwnZary_bKAs=/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2019/q/r/ibVDIwSBiQWB9RoDBayQ/vaticano-papa-bento-xvi-praca-sao-pedro-multidao-despedida0.jpg" :alt="$t('hierarquia.imagem_igreja_universal')" class="w-full h-auto rounded-md object-contain cursor-zoom-in" @click.stop="openImageFromEvent" />
        <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("hierarquia.imagem_igreja_universal") }}</figcaption>
      </figure>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.igreja_universal_p1") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("hierarquia.igreja_universal_p2") }}</p>

      <h3 id="diocese" class="clear-both text-2xl font-bold text-[#041122] font-serif mt-12 mb-5 scroll-mt-24">{{ $t("hierarquia.diocese_organizacao_titulo") }}</h3>
      <figure class="w-32 md:w-44 float-right ml-4 md:ml-7 mb-2 md:mb-4 md:-mt-10 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img src="https://www.arquidioceseolindarecife.org/wp-content/uploads/2025/01/drai-1080x675.jpg" :alt="$t('hierarquia.imagem_diocese')" class="w-full h-auto rounded-md object-contain cursor-zoom-in" @click.stop="openImageFromEvent" />
        <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("hierarquia.imagem_diocese") }}</figcaption>
      </figure>
      <i18n-t keypath="hierarquia.diocese_organizacao_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #eucaristia><AppLink to="/missa#liturgia-eucaristica" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.eucaristia") }}</AppLink></template>
      </i18n-t>
      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("hierarquia.diocese_organizacao_p2") }}</p>

      <h3 id="arquidiocese" class="clear-both text-2xl font-bold text-[#041122] font-serif mt-12 mb-5 scroll-mt-24">{{ $t("hierarquia.arquidiocese_organizacao_titulo") }}</h3>
      <figure class="w-32 md:w-44 float-left mr-4 md:mr-7 mb-2 md:mb-4 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img src="https://cdn.prod.website-files.com/6581f201a6c472f90b0fd34f/6a3254df7ceaf9d84aba3229_66c5d6ebedf3d4f1a0b47308_2_.webp" :alt="$t('hierarquia.imagem_arquidiocese')" class="w-full h-auto rounded-md object-contain cursor-zoom-in" @click.stop="openImageFromEvent" />
        <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("hierarquia.imagem_arquidiocese") }}</figcaption>
      </figure>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.arquidiocese_organizacao_p1") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("hierarquia.arquidiocese_organizacao_p2") }}</p>

      <h3 id="provincia-eclesiastica" class="clear-both text-2xl font-bold text-[#041122] font-serif mt-12 mb-5 scroll-mt-24">{{ $t("hierarquia.provincia_titulo") }}</h3>
      <figure class="w-32 md:w-40 float-right ml-4 md:ml-7 mb-2 md:mb-4 md:-mt-10 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Ecclesiastical_Province_of_Los_Angeles_map.png" :alt="$t('hierarquia.imagem_provincia')" class="w-full h-auto rounded-md object-contain cursor-zoom-in" @click.stop="openImageFromEvent" />
        <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("hierarquia.imagem_provincia") }}</figcaption>
      </figure>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.provincia_p1") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("hierarquia.provincia_p2") }}</p>

      <h3 id="conferencia-episcopal" class="clear-both md:clear-none text-2xl font-bold text-[#041122] font-serif mt-12 mb-5 scroll-mt-24">{{ $t("hierarquia.conferencia_titulo") }}</h3>
      <figure class="w-32 md:w-44 float-left mr-4 md:mr-7 mb-2 md:mb-4 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img src="https://www.cnbb.org.br/wp-content/uploads/2024/04/Celebracao-final-scaled.jpeg" :alt="$t('hierarquia.imagem_conferencia')" class="w-full h-auto rounded-md object-contain cursor-zoom-in" @click.stop="openImageFromEvent" />
        <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("hierarquia.imagem_conferencia") }}</figcaption>
      </figure>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.conferencia_p1") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("hierarquia.conferencia_p2") }}</p>

      <h3 id="paroquia" class="clear-both text-2xl font-bold text-[#041122] font-serif mt-12 mb-5 scroll-mt-24">{{ $t("hierarquia.paroquia_organizacao_titulo") }}</h3>
      <figure class="w-32 md:w-44 float-right ml-4 md:ml-7 mb-2 md:mb-4 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img src="https://ourladyofpentecost.org.au/wp-content/uploads/2020/10/01_OLGC_Parish_2019-3-600x400-c-default.jpg" :alt="$t('hierarquia.imagem_paroquia')" class="w-full h-auto rounded-md object-contain cursor-zoom-in" @click.stop="openImageFromEvent" />
        <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("hierarquia.imagem_paroquia") }}</figcaption>
      </figure>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.paroquia_organizacao_p1") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.paroquia_organizacao_p2") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("hierarquia.paroquia_organizacao_p3") }}</p>

      <h3 id="comunidade" class="clear-both text-2xl font-bold text-[#041122] font-serif mt-12 mb-5 scroll-mt-24">{{ $t("hierarquia.comunidade_titulo") }}</h3>
      <figure class="w-32 md:w-44 float-left mr-4 md:mr-7 mb-2 md:mb-4 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img src="https://comshalom.org/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-05-at-15.53.01-840x636.jpeg" :alt="$t('hierarquia.imagem_comunidade')" class="w-full h-auto rounded-md object-contain cursor-zoom-in" @click.stop="openImageFromEvent" />
        <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("hierarquia.imagem_comunidade") }}</figcaption>
      </figure>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.comunidade_p1") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("hierarquia.comunidade_p2") }}</p>

      <figure class="hidden md:block md:w-44 md:float-right md:ml-7 md:mb-4 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img src="https://diocesedebarretos.com.br/wp-content/uploads/2025/08/Site-Capa-fotos-materias-1-1.png.webp" :alt="$t('hierarquia.imagem_quase_paroquia')" class="w-full h-auto rounded-md object-contain cursor-zoom-in" @click.stop="openImageFromEvent" />
        <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("hierarquia.imagem_quase_paroquia") }}</figcaption>
      </figure>

      <h3 id="quase-paroquia" class="clear-both md:clear-left text-2xl font-bold text-[#041122] font-serif mt-12 md:mt-4 mb-5 scroll-mt-24">{{ $t("hierarquia.quase_paroquia_titulo") }}</h3>
      <figure class="w-32 float-right ml-4 mb-2 md:hidden bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img src="https://diocesedebarretos.com.br/wp-content/uploads/2025/08/Site-Capa-fotos-materias-1-1.png.webp" :alt="$t('hierarquia.imagem_quase_paroquia')" class="w-full h-auto rounded-md object-contain cursor-zoom-in" @click.stop="openImageFromEvent" />
        <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("hierarquia.imagem_quase_paroquia") }}</figcaption>
      </figure>
      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("hierarquia.quase_paroquia_p1") }}</p>

      <h3 id="missao" class="clear-both text-2xl font-bold text-[#041122] font-serif mt-12 md:mt-4 mb-5 scroll-mt-24">{{ $t("hierarquia.missao_titulo") }}</h3>
      <figure class="w-32 md:w-44 float-left mr-4 md:mr-7 mb-2 md:mb-4 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img src="https://www.cnbb.org.br/wp-content/uploads/2020/02/Visita-missionaria-sul2.jpg" :alt="$t('hierarquia.imagem_missao')" class="w-full h-auto rounded-md object-contain cursor-zoom-in" @click.stop="openImageFromEvent" />
        <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("hierarquia.imagem_missao") }}</figcaption>
      </figure>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.missao_p1") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("hierarquia.missao_p2") }}</p>
    </section>

    <section id="lugares-sagrados" class="clear-both max-w-7xl mx-auto pb-20 px-6 scroll-mt-24">
      <h2 class="text-3xl font-bold text-[#041122] mb-12 font-serif border-b-2 border-[#D4AF37] pb-3 inline-block">
        {{ $t("hierarquia.lugares_sagrados_titulo") }}
      </h2>

      <div class="flow-root">
      <figure class="w-32 md:w-44 float-left mr-4 md:mr-7 mb-2 md:mb-4 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img src="https://pbs.twimg.com/media/G_zupo9aUAEzFz8?format=jpg&amp;name=large" :alt="$t('hierarquia.imagem_missa_ar_livre')" class="w-full h-auto rounded-md object-contain cursor-zoom-in" @click.stop="openImageFromEvent" />
        <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("hierarquia.imagem_missa_ar_livre") }}</figcaption>
      </figure>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.lugares_sagrados_p1") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.lugares_sagrados_p2") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("hierarquia.lugares_sagrados_p3") }}</p>

      <i18n-t keypath="hierarquia.lugares_sagrados_obs" tag="p" class="text-sm text-gray-500 italic leading-relaxed text-justify mt-4">
        <template #missa><AppLink to="/missa" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.missa") }}</AppLink></template>
        <template #liturgica><AppLink to="/missa#estrutura-da-santa-missa" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.liturgica") }}</AppLink></template>
        <template #sacrificio_eucaristico><AppLink to="/missa#liturgia-eucaristica" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sacrificio_eucaristico") }}</AppLink></template>
      </i18n-t>
      </div>

      <h3 id="igreja-edificio" class="clear-both text-2xl font-bold text-[#041122] font-serif mt-12 mb-5 scroll-mt-24">{{ $t("hierarquia.igreja_edificio_titulo") }}</h3>
      <figure class="w-32 md:w-44 float-right ml-4 md:ml-7 mb-2 md:mb-4 md:-mt-10 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXHltRyXI6mR2ETj5-rs3V4itzoaqcRj5cTvZ-uNIJmHsmoW33xMdPml8&amp;s=10" :alt="$t('hierarquia.imagem_igreja_edificio')" class="w-full h-auto rounded-md object-contain cursor-zoom-in" @click.stop="openImageFromEvent" />
        <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("hierarquia.imagem_igreja_edificio") }}</figcaption>
      </figure>
      <i18n-t keypath="hierarquia.igreja_edificio_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #missa><AppLink to="/missa" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.missa") }}</AppLink></template>
      </i18n-t>
      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("hierarquia.igreja_edificio_p2") }}</p>

      <h3 id="igreja-paroquial" class="clear-both text-2xl font-bold text-[#041122] font-serif mt-12 mb-5 scroll-mt-24">{{ $t("hierarquia.igreja_paroquial_titulo") }}</h3>
      <figure class="w-32 md:w-44 float-left mr-4 md:mr-7 mb-2 md:mb-4 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img src="https://www.prarch.com/wp-content/uploads/2023/01/St.-Clare-Assisi-Monroe-Exterior-Church.jpg" :alt="$t('hierarquia.imagem_igreja_paroquial')" class="w-full h-auto rounded-md object-contain cursor-zoom-in" @click.stop="openImageFromEvent" />
        <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("hierarquia.imagem_igreja_paroquial") }}</figcaption>
      </figure>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.igreja_paroquial_p1") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("hierarquia.igreja_paroquial_p2") }}</p>

      <h3 id="catedral" class="clear-both text-2xl font-bold text-[#041122] font-serif mt-12 mb-5 scroll-mt-24">{{ $t("hierarquia.catedral_titulo") }}</h3>
      <figure class="w-32 md:w-44 float-right ml-4 md:ml-7 mb-2 md:mb-4 md:-mt-10 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img src="https://images.unsplash.com/photo-1666623710701-b420de55416d?fm=jpg&amp;q=60&amp;w=3000&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0ZWRyYWwlMjBkZSUyMGNvbCVDMyVCNG5pYXxlbnwwfHwwfHx8MA%3D%3D" :alt="$t('hierarquia.imagem_catedral')" class="w-full h-auto rounded-md object-contain cursor-zoom-in" @click.stop="openImageFromEvent" />
        <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("hierarquia.imagem_catedral") }}</figcaption>
      </figure>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.catedral_p1") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("hierarquia.catedral_p2") }}</p>

      <h3 id="basilica" class="clear-both md:clear-none text-2xl font-bold text-[#041122] font-serif mt-12 md:mt-4 mb-5 scroll-mt-24">{{ $t("hierarquia.basilica_titulo") }}</h3>
      <figure class="w-32 float-left mr-4 mb-2 md:hidden bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img src="https://www.infoescola.com/wp-content/uploads/2012/01/basilica-de-sao-pedro.jpg" :alt="$t('hierarquia.imagem_basilica')" class="w-full h-auto rounded-md object-contain cursor-zoom-in" @click.stop="openImageFromEvent" />
        <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("hierarquia.imagem_basilica") }}</figcaption>
      </figure>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.basilica_p1") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.basilica_p2") }}</p>
      <figure class="hidden md:block md:w-44 md:float-left md:mr-7 md:mb-4 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img src="https://www.infoescola.com/wp-content/uploads/2012/01/basilica-de-sao-pedro.jpg" :alt="$t('hierarquia.imagem_basilica')" class="w-full h-auto rounded-md object-contain cursor-zoom-in" @click.stop="openImageFromEvent" />
        <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("hierarquia.imagem_basilica") }}</figcaption>
      </figure>
      <p class="text-gray-600 leading-relaxed text-justify mb-3">{{ $t("hierarquia.basilica_lista_intro") }}</p>
      <ul class="list-disc pl-7 space-y-1 text-gray-600 leading-relaxed">
        <li>{{ $t("hierarquia.basilica_lista_1") }}</li>
        <li>{{ $t("hierarquia.basilica_lista_2") }}</li>
        <li>{{ $t("hierarquia.basilica_lista_3") }}</li>
        <li>{{ $t("hierarquia.basilica_lista_4") }}</li>
      </ul>

      <h3 id="santuario" class="clear-both text-2xl font-bold text-[#041122] font-serif mt-12 mb-5 scroll-mt-24">{{ $t("hierarquia.santuario_titulo") }}</h3>
      <figure class="w-32 md:w-44 float-right ml-4 md:ml-7 mb-2 md:mb-4 md:-mt-10 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img src="https://arquidiocesebh.org.br/wp-content/uploads/2019/07/schoenstatt2019-1-850x567.jpg" :alt="$t('hierarquia.imagem_santuario')" class="w-full h-auto rounded-md object-contain cursor-zoom-in" @click.stop="openImageFromEvent" />
        <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("hierarquia.imagem_santuario") }}</figcaption>
      </figure>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.santuario_p1") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.santuario_p2") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("hierarquia.santuario_p3") }}</p>

      <h3 id="capela" class="clear-both text-2xl font-bold text-[#041122] font-serif mt-12 mb-5 scroll-mt-24">{{ $t("hierarquia.capela_titulo") }}</h3>
      <figure class="w-32 md:w-44 float-left mr-4 md:mr-7 mb-2 md:mb-4 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMCNoUuYJX-OsDu5GskmoKRoqm4fewKGZeHSiZFCMq84PVhx6aA6oTsMgG&amp;s=10" :alt="$t('hierarquia.imagem_capela')" class="w-full aspect-square rounded-md object-cover object-center cursor-zoom-in" @click.stop="openImageFromEvent" />
        <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("hierarquia.imagem_capela") }}</figcaption>
      </figure>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.capela_p1") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.capela_p2") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("hierarquia.capela_p3") }}</p>

      <h3 id="oratorio" class="clear-both text-2xl font-bold text-[#041122] font-serif mt-12 mb-5 scroll-mt-24">{{ $t("hierarquia.oratorio_titulo") }}</h3>
      <figure class="w-32 md:w-44 float-right ml-4 md:ml-7 mb-2 md:mb-4 md:-mt-10 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3KTrQM-lTnEESHn9mWLi2vtb8noBZZJ2h3Dov_DD7hTxH5Ni3LbaoRz3Y&amp;s=10" :alt="$t('hierarquia.imagem_oratorio')" class="w-full h-auto rounded-md object-contain cursor-zoom-in" @click.stop="openImageFromEvent" />
        <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("hierarquia.imagem_oratorio") }}</figcaption>
      </figure>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.oratorio_p1") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("hierarquia.oratorio_p2") }}</p>

      <h3 id="mosteiro" class="clear-both md:clear-left text-2xl font-bold text-[#041122] font-serif mt-12 md:mt-4 mb-5 scroll-mt-24">{{ $t("hierarquia.mosteiro_titulo") }}</h3>
      <figure class="w-32 md:w-44 float-left mr-4 md:mr-7 mb-2 md:mb-4 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img src="https://www.dooid.it/wp-content/uploads/2020/11/Sacro-Speco-Subiaco-monastero-dooid.jpg" :alt="$t('hierarquia.imagem_mosteiro')" class="w-full h-auto rounded-md object-contain cursor-zoom-in" @click.stop="openImageFromEvent" />
        <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("hierarquia.imagem_mosteiro") }}</figcaption>
      </figure>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.mosteiro_p1") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("hierarquia.mosteiro_p2") }}</p>

      <h3 id="convento" class="clear-both text-2xl font-bold text-[#041122] font-serif mt-12 mb-5 scroll-mt-24">{{ $t("hierarquia.convento_titulo") }}</h3>
      <figure class="w-32 md:w-44 float-right ml-4 md:ml-7 mb-2 md:mb-4 md:-mt-10 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img src="https://www.gardatrentino.it/website_images/POI/Poi_Cultura/image-thumb__10683__ds-maxwidth1920/POI_cultura_Comano_CoventoCampo_S.Besti_TNMK.webp" :alt="$t('hierarquia.imagem_convento')" class="w-full h-auto rounded-md object-contain cursor-zoom-in" @click.stop="openImageFromEvent" />
        <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("hierarquia.imagem_convento") }}</figcaption>
      </figure>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.convento_p1") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.convento_p2") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("hierarquia.convento_p3") }}</p>

      <h3 id="abadia" class="clear-both text-2xl font-bold text-[#041122] font-serif mt-12 mb-5 scroll-mt-24">{{ $t("hierarquia.abadia_titulo") }}</h3>
      <figure class="w-32 md:w-44 float-left mr-4 md:mr-7 mb-2 md:mb-4 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img src="https://www.infoescola.com/wp-content/uploads/2012/05/abadia-de-westminster_723925570.jpg" :alt="$t('hierarquia.imagem_abadia')" class="w-full h-auto rounded-md object-contain cursor-zoom-in" @click.stop="openImageFromEvent" />
        <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("hierarquia.imagem_abadia") }}</figcaption>
      </figure>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.abadia_p1") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("hierarquia.abadia_p2") }}</p>

      <h3 id="seminario" class="clear-both text-2xl font-bold text-[#041122] font-serif mt-12 mb-5 scroll-mt-24">{{ $t("hierarquia.seminario_titulo") }}</h3>
      <figure class="w-32 md:w-44 float-right ml-4 md:ml-7 mb-2 md:mb-4 md:-mt-10 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img src="https://www.ncronline.org/files/20200918T1130-CHARLOTTE-COLLEGE-SEMINARY-1005459.JPG" :alt="$t('hierarquia.imagem_seminario')" class="w-full h-auto rounded-md object-contain cursor-zoom-in" @click.stop="openImageFromEvent" />
        <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("hierarquia.imagem_seminario") }}</figcaption>
      </figure>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.seminario_p1") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("hierarquia.seminario_p2") }}</p>

      <h3 id="cemiterio" class="clear-both text-2xl font-bold text-[#041122] font-serif mt-12 mb-5 scroll-mt-24">{{ $t("hierarquia.cemiterio_titulo") }}</h3>
      <figure class="w-32 md:w-44 float-left mr-4 md:mr-7 mb-2 md:mb-4 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img src="https://dioceseofraleigh.org/sites/default/files/styles/bp_featured_image/public/2022-11/all-souls-mass-ng-2022-860e.jpg?h=56d53079&amp;itok=X65EcogY" :alt="$t('hierarquia.imagem_cemiterio')" class="w-full h-auto rounded-md object-contain cursor-zoom-in" @click.stop="openImageFromEvent" />
        <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("hierarquia.imagem_cemiterio") }}</figcaption>
      </figure>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.cemiterio_p1") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.cemiterio_p2") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("hierarquia.cemiterio_p3") }}</p>
    </section>

    <Teleport to="body">
      <div
        v-if="lightboxOpen"
        class="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 md:p-8"
        role="dialog"
        aria-modal="true"
        :aria-label="lightboxCaption"
        @click.self="closeLightbox"
      >
        <figure class="relative flex w-fit max-h-full max-w-full flex-col items-center" @click.stop>
          <button
            type="button"
            class="absolute right-0 top-0 z-[101] flex h-9 w-9 translate-x-1/3 -translate-y-1/3 items-center justify-center rounded-full border border-white/60 bg-black/70 text-2xl leading-none text-white shadow-lg transition hover:bg-black/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] md:h-10 md:w-10"
            aria-label="Fechar imagem ampliada"
            @click="closeLightbox"
          >
            <span aria-hidden="true">×</span>
          </button>
          <img
            :src="lightboxImageUrl"
            :alt="lightboxCaption"
            class="max-h-[82vh] max-w-[94vw] rounded-lg object-contain shadow-2xl"
          />
          <figcaption class="mt-3 text-center text-sm italic text-white/85">
            {{ lightboxCaption }}
          </figcaption>
        </figure>
      </div>
    </Teleport>
  </main>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from "vue";

const mongesImageUrl = "https://storage.canalblog.com/65/29/1470675/124154883.jpg";
const lightboxOpen = ref(false);
const lightboxHistoryActive = ref(false);
const lightboxImageUrl = ref("");
const lightboxCaption = ref("");
let galleryFigures = [];
let savedLightboxScrollPosition = { x: 0, y: 0 };
let previousLightboxScrollRestoration = "auto";

const restoreLightboxReadingPosition = () => {
  const { x, y } = savedLightboxScrollPosition;
  window.scrollTo(x, y);
  window.requestAnimationFrame(() => {
    window.scrollTo(x, y);
    window.setTimeout(() => {
      window.scrollTo(x, y);
      window.history.scrollRestoration = previousLightboxScrollRestoration;
    }, 0);
  });
};

const closeLightboxWithEscape = (event) => {
  if (event.key === "Escape") closeLightbox();
};

const openLightbox = (imageUrl, caption) => {
  if (lightboxOpen.value) return;

  lightboxImageUrl.value = imageUrl;
  lightboxCaption.value = caption;
  lightboxOpen.value = true;
  if (import.meta.client) {
    savedLightboxScrollPosition = { x: window.scrollX, y: window.scrollY };
    previousLightboxScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    window.history.pushState({ ...window.history.state, imageLightbox: true }, "");
    lightboxHistoryActive.value = true;
  }
};

const openFigureInLightbox = (figure) => {
  if (!figure) return;

  const image = figure.querySelector("img");
  if (!image) return;

  const caption = figure.querySelector("figcaption")?.textContent?.trim() || image.alt || "Imagem ampliada";
  openLightbox(image.currentSrc || image.src, caption);
};

const openImageFromEvent = (event) => {
  const image = event.currentTarget;
  const figure = image.closest("figure");
  const caption = figure?.querySelector("figcaption")?.textContent?.trim() || image.alt || "Imagem ampliada";
  openLightbox(image.currentSrc || image.src, caption);
};

const handleFigureClick = (event) => {
  openFigureInLightbox(event.currentTarget);
};

const handleFigureKeydown = (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  openFigureInLightbox(event.currentTarget);
};

const closeLightbox = () => {
  if (!lightboxOpen.value) return;

  if (import.meta.client && lightboxHistoryActive.value) {
    window.history.back();
    return;
  }

  lightboxOpen.value = false;
  if (import.meta.client) window.history.scrollRestoration = previousLightboxScrollRestoration;
};

const handleHistoryBack = () => {
  if (!lightboxOpen.value) return;
  lightboxHistoryActive.value = false;
  lightboxOpen.value = false;
  restoreLightboxReadingPosition();
};

watch(lightboxOpen, (isOpen) => {
  if (import.meta.client) document.body.style.overflow = isOpen ? "hidden" : "";
});

onMounted(() => {
  galleryFigures = Array.from(document.querySelectorAll("#estrutura-da-igreja figure"));
  galleryFigures.forEach((figure) => {
    figure.setAttribute("role", "button");
    figure.setAttribute("tabindex", "0");
    figure.style.cursor = "zoom-in";
    figure.classList.add("cursor-zoom-in", "focus:outline-none", "focus-visible:ring-2", "focus-visible:ring-[#D4AF37]");
    const caption = figure.querySelector("figcaption")?.textContent?.trim();
    if (caption) figure.setAttribute("aria-label", `${caption} — ampliar imagem`);
    figure.addEventListener("click", handleFigureClick);
    figure.addEventListener("keydown", handleFigureKeydown);
  });
  window.addEventListener("keydown", closeLightboxWithEscape);
  window.addEventListener("popstate", handleHistoryBack);
});
onBeforeUnmount(() => {
  galleryFigures.forEach((figure) => {
    figure.removeEventListener("click", handleFigureClick);
    figure.removeEventListener("keydown", handleFigureKeydown);
  });
  window.removeEventListener("keydown", closeLightboxWithEscape);
  window.removeEventListener("popstate", handleHistoryBack);
  document.body.style.overflow = "";
  window.history.scrollRestoration = previousLightboxScrollRestoration;
});
</script>
