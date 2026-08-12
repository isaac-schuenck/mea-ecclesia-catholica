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

      <RichText
        keypath="hierarquia.p1"
        tag="p"
        class="text-gray-600 leading-relaxed text-justify mb-2"
      />

      <RichText
        keypath="hierarquia.p2"
        tag="p"
        class="text-gray-600 leading-relaxed text-justify mb-2"
      />

      <RichText keypath="hierarquia.p3" tag="p" class="text-gray-600 leading-relaxed text-justify" />
    </section>

    <section id="hierarquia" class="max-w-7xl mx-auto pb-20 px-6 scroll-mt-24">
      <ArticleSectionTitle :text="$t('hierarquia.hierarquia_titulo')" />

      <RichText keypath="hierarquia.h_intro1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2"
      />

      <RichText keypath="hierarquia.h_intro2" tag="p" class="text-gray-600 leading-relaxed text-justify mb-3"
      />

      <ol class="list-decimal marker:text-[#9B7322] pl-8 space-y-1 text-gray-600 leading-relaxed mb-4">
        <li>{{ $t("hierarquia.grau_episcopado") }}</li>
        <li>{{ $t("hierarquia.grau_presbiterado") }}</li>
        <li>{{ $t("hierarquia.grau_diaconato") }}</li>
      </ol>

      <RichText keypath="hierarquia.h_intro3" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2"
      />

      <p class="text-gray-600 leading-relaxed text-justify">
        {{ $t("hierarquia.h_intro4") }}
      </p>

      <ArticleSubheading id="episcopado" :text="$t('hierarquia.episcopado_titulo')" />

      <ImageFigure class="w-32 md:w-52 float-left mr-4 md:mr-7 mb-2 md:mb-4" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh2rP1cIS-LfZVJkdptEvd8J8PTR3qOF29o1zTg5gMdhmzhMYKKs2bEDAn19U9TyDGk_T5EMzAkIz_GPJKyPq3u-kBpPdpYqu63RTKxiPiOMfjH6uXlGXtplYPokaqhkeM8qgSfp5wAwml6/s640/popepatriarchs.jpg" :alt="$t('hierarquia.imagem_patriarcas')" caption-key="hierarquia.imagem_patriarcas" image-class="h-auto rounded-md object-contain" />

      <RichText keypath="hierarquia.episcopado_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2"
      />

      <RichText keypath="hierarquia.episcopado_orientais" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2"
      />

      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.episcopado_p2") }}</p>

      <div class="md:border-l-4 md:border-[#D4AF37]/40 md:pl-8 md:mt-8 md:space-y-8">
      <div class="mt-8 md:mt-0">
      <h4 id="papa" class="clear-both text-xl font-bold text-[#041122] font-serif mb-4 scroll-mt-24">{{ $t("hierarquia.papa_titulo") }}</h4>
      <ImageFigure class="w-32 md:w-40 float-right ml-4 md:ml-7 mb-2 md:mb-4" src="https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/home_papa-leao-14.png?w=1600&amp;h=1287&amp;p=top" :alt="$t('hierarquia.imagem_papa')" caption-key="hierarquia.imagem_papa" image-class="aspect-square rounded-md object-cover object-top" />
      <RichText keypath="hierarquia.papa_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2"
        :links='{"sao_pedro":{"to":"/santo-do-dia?data=2026-06-29#sao-pedro"}}'
      />
      <RichText keypath="hierarquia.papa_p2" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2"
      />
      <RichText keypath="hierarquia.papa_p3" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2" />
      </div>

      <div class="mt-8 md:mt-0">
      <h4 id="cardeais" class="clear-both text-xl font-bold text-[#041122] font-serif mb-4 scroll-mt-24">{{ $t("hierarquia.cardeais_titulo") }}</h4>
      <ImageFigure class="w-32 md:w-44 float-left mr-4 md:mr-7 mb-2 md:mb-4" src="https://img.cancaonova.com/cnimages/canais/uploads/sites/11/2020/11/cardeais-colegio-cardinali%CC%81cio-consisto%CC%81rio-2016_Daniel-Ibanez_CNA.jpg" :alt="$t('hierarquia.imagem_cardeais')" caption-key="hierarquia.imagem_cardeais" image-class="aspect-square rounded-md object-cover" />
      <RichText keypath="hierarquia.cardeais_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2"
      />
      <RichText keypath="hierarquia.cardeais_p2" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2"
      />
      <RichText keypath="hierarquia.cardeais_p3" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2"
      />
      </div>

      <div class="mt-8 md:mt-0">
      <h4 id="bispos-diocesanos" class="clear-both text-xl font-bold text-[#041122] font-serif mb-4 scroll-mt-24">{{ $t("hierarquia.bispos_titulo") }}</h4>
      <ImageFigure class="w-32 md:w-40 float-right ml-4 md:ml-7 mb-2 md:mb-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO9WAhEIE3e1xnDH0nxGEMh6qI_6JWu-V4a3K0G_O8Jm9CVfaarvCNoxmE&amp;s=10" :alt="$t('hierarquia.imagem_dom_walmor')" caption-key="hierarquia.imagem_dom_walmor" image-class="aspect-square rounded-md object-cover object-top" />
      <RichText keypath="hierarquia.bispos_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2"
      />
      <RichText keypath="hierarquia.bispos_p2" tag="p" class="text-gray-600 leading-relaxed text-justify mb-3"
      />
      <ul class="list-disc marker:text-[#D4AF37] pl-8 space-y-1 text-gray-600 leading-relaxed mb-4">
        <li>{{ $t("hierarquia.bispo_missao_ensinar") }}</li>
        <li>{{ $t("hierarquia.bispo_missao_santificar") }}</li>
        <li>{{ $t("hierarquia.bispo_missao_governar") }}</li>
      </ul>
      </div>

      <div class="mt-8 md:mt-0">
      <h4 id="arcebispos" class="clear-both text-xl font-bold text-[#041122] font-serif mb-4 scroll-mt-24">{{ $t("hierarquia.arcebispos_titulo") }}</h4>
      <RichText keypath="hierarquia.arcebispos_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2"
      />
      <RichText keypath="hierarquia.arcebispos_p2" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2"
      />
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.arcebispos_p3") }}</p>
      </div>

      <div class="mt-8 md:mt-0">
      <h4 id="bispos-auxiliares" class="clear-both text-xl font-bold text-[#041122] font-serif mb-4 scroll-mt-24">{{ $t("hierarquia.auxiliares_titulo") }}</h4>
      <ImageFigure class="w-32 md:w-36 float-left mr-4 md:mr-7 mb-2 md:mb-4" src="https://arquidiocesebh.org.br/wp-content/uploads/2021/03/dom-julio-682x1024.jpeg" :alt="$t('hierarquia.imagem_dom_julio')" caption-key="hierarquia.imagem_dom_julio" image-class="aspect-square rounded-md object-cover object-top" />
      <RichText keypath="hierarquia.auxiliares_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2"
      />
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.auxiliares_p2") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("hierarquia.auxiliares_p3") }}</p>
      </div>
      </div>

      <ArticleSubheading id="presbiterado" class="clear-both" :text="$t('hierarquia.presbiterado_titulo')" />

      <ImageFigure class="w-28 md:w-36 float-right ml-4 md:ml-7 mb-2 md:mb-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPCxRhE-Jgqrtl17SLOME8JMme8wgDXB63pHzBnNPFmcsq6oPuWunuHGYX&amp;s=10" :alt="$t('hierarquia.imagem_padre_paulo_ricardo')" caption-key="hierarquia.imagem_padre_paulo_ricardo" image-class="h-auto rounded-md object-contain" />

      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.presbiterado_p1") }}</p>

      <RichText keypath="hierarquia.presbiterado_p2" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2"
      />

      <RichText keypath="hierarquia.presbiterado_p3" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2" />

      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.presbiterado_p4") }}</p>

      <div class="md:border-l-4 md:border-[#D4AF37]/40 md:pl-8 md:mt-8 md:space-y-2">
      <div class="mt-8 md:mt-0">
      <h4 id="padre-diocesano-religioso" class="clear-both text-xl font-bold text-[#041122] font-serif mb-4 scroll-mt-24">{{ $t("hierarquia.padre_titulo") }}</h4>
      <ImageFigure class="w-32 md:w-32 float-left mr-4 md:mr-7 mb-2 md:mb-3" src="https://redevida.com.br/wp-content/uploads/2025/03/Frei-Gilson.png" :alt="$t('hierarquia.imagem_frei_gilson')" caption-key="hierarquia.imagem_frei_gilson" image-class="aspect-square rounded-md object-cover object-top" />
      <RichText keypath="hierarquia.padre_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2"
      />
      <RichText keypath="hierarquia.padre_p2" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2"
      />
      </div>

      <div class="mt-8 md:mt-0">
      <h4 id="paroco" class="clear-both md:clear-left text-xl font-bold text-[#041122] font-serif mb-4 scroll-mt-24">{{ $t("hierarquia.paroco_titulo") }}</h4>
      <ImageFigure class="w-32 md:w-32 float-right ml-4 md:ml-7 mb-2 md:mb-3 md:-mt-10" src="https://s2-g1.glbimg.com/uMbgrhDHVqPeWqeJEIko5QglWDI=/0x0:960x720/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/t/N/OzxORgReGufzrsXXVqcQ/missa-itu.jpeg" :alt="$t('hierarquia.imagem_paroco')" caption-key="hierarquia.imagem_paroco" image-class="aspect-square rounded-md object-cover object-center" />
      <RichText keypath="hierarquia.paroco_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2"
      />
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.paroco_p2") }}</p>
      </div>

      <div class="mt-8 md:mt-0">
      <h4 id="vigario-paroquial" class="clear-both md:clear-none text-xl font-bold text-[#041122] font-serif mb-4 scroll-mt-24">{{ $t("hierarquia.vigario_titulo") }}</h4>
      <ImageFigure class="w-32 md:w-32 float-left mr-4 md:mr-7 mb-2 md:mb-3" src="https://arquiconquista.org.br/wp-content/uploads/2026/02/2-2-768x1024.jpeg" :alt="$t('hierarquia.imagem_vigario')" caption-key="hierarquia.imagem_vigario" image-class="aspect-square rounded-md object-cover object-top" />
      <RichText keypath="hierarquia.vigario_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2"
      />
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.vigario_p2") }}</p>
      </div>

      <div class="mt-8 md:mt-0">
      <h4 id="capelao" class="clear-both md:clear-left text-xl font-bold text-[#041122] font-serif mb-4 scroll-mt-24">{{ $t("hierarquia.capelao_titulo") }}</h4>
      <ImageFigure class="w-32 md:w-32 float-right ml-4 md:ml-7 mb-2 md:mb-3 md:-mt-10" src="https://img.cancaonova.com/cnimages/canais/uploads/sites/11/2024/05/Capelaes_militares_no_RS_-Foto-CNBB.jpg" :alt="$t('hierarquia.imagem_capelao')" caption-key="hierarquia.imagem_capelao" image-class="aspect-square rounded-md object-cover object-center" />
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.capelao_p1") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("hierarquia.capelao_p2") }}</p>
      </div>
      </div>

      <ArticleSubheading id="diaconato" class="clear-both md:clear-right" :text="$t('hierarquia.diaconato_titulo')" />

      <RichText keypath="hierarquia.diaconato_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2" />

      <RichText keypath="hierarquia.diaconato_p2" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2"
      />

      <RichText keypath="hierarquia.diaconato_p3" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2"
      />

      <div class="md:border-l-4 md:border-[#D4AF37]/40 md:pl-8 md:mt-8 md:space-y-8">
        <div class="mt-8 md:mt-0">
          <h4 id="diaconos-transitorios" class="text-xl font-bold text-[#041122] font-serif mb-4 scroll-mt-24">{{ $t("hierarquia.transitorios_titulo") }}</h4>
          <ImageFigure class="w-32 md:w-36 float-left mr-4 md:mr-7 mb-2 md:mb-4" src="https://arqmariana.com.br/wp-content/uploads/2022/05/diaconos-transitorios.jpg" :alt="$t('hierarquia.imagem_diaconos_transitorios')" caption-key="hierarquia.imagem_diaconos_transitorios" image-class="h-auto rounded-md object-contain" />
          <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.transitorios_p1") }}</p>
          <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.transitorios_p2") }}</p>
        </div>

        <div class="mt-8 md:mt-0">
          <h4 id="diaconos-permanentes" class="clear-both md:clear-left text-xl font-bold text-[#041122] font-serif mb-4 scroll-mt-24">{{ $t("hierarquia.permanentes_titulo") }}</h4>
          <ImageFigure class="w-32 md:w-32 float-right ml-4 md:ml-7 mb-2 md:mb-3 md:-mt-10" src="https://diaconofrancis.wordpress.com/wp-content/uploads/2024/05/esta-1.jpg" :alt="$t('hierarquia.imagem_diacono_permanente')" caption-key="hierarquia.imagem_diacono_permanente" image-class="aspect-square rounded-md object-cover object-center" />
          <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.permanentes_p1") }}</p>
          <RichText keypath="hierarquia.permanentes_p2" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2"
      />
        </div>
      </div>

      <ArticleSubheading id="vida-consagrada" class="clear-both md:clear-right" :text="$t('hierarquia.consagrada_titulo')" />

      <RichText keypath="hierarquia.consagrada_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2"
      />
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.consagrada_p2") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.consagrada_p3") }}</p>

      <div class="md:border-l-4 md:border-[#D4AF37]/40 md:pl-8 md:mt-8 md:space-y-8">
        <div class="mt-8 md:mt-0">
          <h4 id="monges-monjas" class="text-xl font-bold text-[#041122] font-serif mb-4 scroll-mt-24">{{ $t("hierarquia.monges_titulo") }}</h4>
          <ImageFigure class="w-32 md:w-60 float-left mr-4 md:mr-7 mb-2 md:mb-4" :src="mongesImageUrl" :alt="$t('hierarquia.imagem_monges_beneditinos')" caption-key="hierarquia.imagem_monges_beneditinos" image-class="h-auto rounded-md object-contain" />
          <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.monges_p1") }}</p>
          <RichText keypath="hierarquia.monges_p2" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2"
      />
        </div>

        <div class="mt-8 md:mt-0">
          <h4 id="frades-religiosas" class="clear-both md:clear-left text-xl font-bold text-[#041122] font-serif mb-4 scroll-mt-24">{{ $t("hierarquia.frades_titulo") }}</h4>
          <ImageFigure class="w-32 md:w-48 float-right ml-4 md:ml-7 mb-2 md:mb-3 md:-mt-10" src="https://www.vaticannews.va/content/dam/vaticannews/multimedia/2025/settembre/23/AGUSTINOS-RECOLETOS---ENCUENTRO---ROMA-1.jpg/_jcr_content/renditions/cq5dam.thumbnail.cropped.750.422.jpeg" :alt="$t('hierarquia.imagem_frades_agostinianos')" caption-key="hierarquia.imagem_frades_agostinianos" image-class="h-auto rounded-md object-contain" />
          <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.frades_p1") }}</p>
          <p class="text-gray-600 leading-relaxed text-justify">{{ $t("hierarquia.frades_p2") }}</p>
        </div>
      </div>

      <ArticleSubheading id="ministerios-leigos" class="clear-both md:clear-right" :text="$t('hierarquia.leigos_ministerios_titulo')" />

      <RichText keypath="hierarquia.leigos_ministerios_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2"
      />
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.leigos_ministerios_p2") }}</p>

      <div class="md:border-l-4 md:border-[#D4AF37]/40 md:pl-8 md:mt-8 md:space-y-8">
        <div class="mt-8 md:mt-0">
          <h4 id="leitores" class="text-xl font-bold text-[#041122] font-serif mb-4 scroll-mt-24">{{ $t("hierarquia.leitores_titulo") }}</h4>
          <ImageFigure class="w-32 md:w-36 float-left mr-4 md:mr-7 mb-2 md:mb-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmlNh-Cs8tgPiMlkoyDF_WIMsXT-qht3mfapiMSfNRj5BbUsOhU6HUNkQ&amp;s=10" :alt="$t('hierarquia.imagem_leitores')" caption-key="hierarquia.imagem_leitores" image-class="aspect-square rounded-md object-cover object-center" />
          <RichText keypath="hierarquia.leitores_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2"
      />
          <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.leitores_p2") }}</p>
        </div>

        <div class="mt-8 md:mt-0">
          <h4 id="acolitos" class="clear-both md:clear-left text-xl font-bold text-[#041122] font-serif mb-4 scroll-mt-24">{{ $t("hierarquia.acolitos_titulo") }}</h4>
          <ImageFigure class="w-32 md:w-32 float-right ml-4 md:ml-7 mb-2 md:mb-3 md:-mt-10" src="https://www.paieterno.com.br/wp-content/uploads/2014/10/DESTAQUE_FIQUE_POR_DENTRO_14_10_2014.png" :alt="$t('hierarquia.imagem_acolitos')" caption-key="hierarquia.imagem_acolitos" image-class="aspect-square rounded-md object-cover object-center" />
          <RichText keypath="hierarquia.acolitos_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2"
      />
          <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.acolitos_p2") }}</p>
        </div>

        <div class="mt-8 md:mt-0">
          <h4 id="coroinhas" class="clear-both md:clear-right text-xl font-bold text-[#041122] font-serif mb-4 scroll-mt-24">{{ $t("hierarquia.coroinhas_titulo") }}</h4>
          <ImageFigure class="w-32 md:w-36 float-left mr-4 md:mr-7 mb-2 md:mb-4" src="https://dj.org.br/wp-content/uploads/2021/05/acolitos.jpg" :alt="$t('hierarquia.imagem_coroinhas')" caption-key="hierarquia.imagem_coroinhas" image-class="aspect-square rounded-md object-cover object-center" />
          <RichText keypath="hierarquia.coroinhas_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2"
        :links='{"cruz_processional":{"to":"/artigos-religiosos"}}'
      />
          <RichText keypath="hierarquia.coroinhas_p2" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2"
      />
          <RichText keypath="hierarquia.coroinhas_p3" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2"
      />
        </div>

        <div class="mt-8 md:mt-0">
          <h4 id="ministros-comunhao" class="clear-both md:clear-left text-xl font-bold text-[#041122] font-serif mb-4 scroll-mt-24">{{ $t("hierarquia.ministros_comunhao_titulo") }}</h4>
          <ImageFigure class="w-32 md:w-32 float-right ml-4 md:ml-7 mb-2 md:mb-3 md:-mt-10" src="https://images.a12.com/source/files/c/304016/ministros_da_sagrada_comunhao_-_3_feira_Santa_2023-705181_4227-3170-0-0.jpg" :alt="$t('hierarquia.imagem_ministros_comunhao')" caption-key="hierarquia.imagem_ministros_comunhao" image-class="aspect-square rounded-md object-cover object-center" />
          <RichText keypath="hierarquia.ministros_comunhao_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2"
      />
          <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.ministros_comunhao_p2") }}</p>
        </div>

        <div class="mt-8 md:mt-0">
          <h4 id="fieis-leigos" class="clear-both md:clear-right text-xl font-bold text-[#041122] font-serif mb-4 scroll-mt-24">{{ $t("hierarquia.fieis_leigos_titulo") }}</h4>
          <ImageFigure class="w-32 md:w-36 float-left mr-4 md:mr-7 mb-2 md:mb-4" src="https://www.centroloyola.org.br/images/outras-palavras/espiritualidade/2095075.jpg" :alt="$t('hierarquia.imagem_fieis_leigos')" caption-key="hierarquia.imagem_fieis_leigos" image-class="aspect-square rounded-md object-cover object-center" />
          <RichText keypath="hierarquia.fieis_leigos_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2"
      />
          <RichText keypath="hierarquia.fieis_leigos_p2" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2"
      />
          <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.fieis_leigos_p3") }}</p>
          <RichText keypath="hierarquia.fieis_leigos_p4" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2"
      />
          <RichText keypath="hierarquia.fieis_leigos_p5" tag="p" class="text-gray-600 leading-relaxed text-justify"
      />
        </div>
      </div>
    </section>

    <section id="organizacao-territorial" class="clear-both max-w-7xl mx-auto pb-20 px-6 scroll-mt-24">
      <ArticleSectionTitle :text="$t('hierarquia.organizacao_titulo')" />

      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.organizacao_intro") }}</p>

      <ArticleSubheading id="igreja-universal" class="clear-both" :text="$t('hierarquia.igreja_universal_titulo')" />
      <ImageFigure class="w-32 md:w-44 float-left mr-4 md:mr-7 mb-2 md:mb-4" src="https://s2-valor.glbimg.com/uByfWSz1WaJFCccwwnZary_bKAs=/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2019/q/r/ibVDIwSBiQWB9RoDBayQ/vaticano-papa-bento-xvi-praca-sao-pedro-multidao-despedida0.jpg" :alt="$t('hierarquia.imagem_igreja_universal')" caption-key="hierarquia.imagem_igreja_universal" image-class="h-auto rounded-md object-contain" />
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.igreja_universal_p1") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("hierarquia.igreja_universal_p2") }}</p>

      <ArticleSubheading id="diocese" class="clear-both" :text="$t('hierarquia.diocese_organizacao_titulo')" />
      <ImageFigure class="w-32 md:w-44 float-right ml-4 md:ml-7 mb-2 md:mb-4 md:-mt-10" src="https://www.arquidioceseolindarecife.org/wp-content/uploads/2025/01/drai-1080x675.jpg" :alt="$t('hierarquia.imagem_diocese')" caption-key="hierarquia.imagem_diocese" image-class="h-auto rounded-md object-contain" />
      <RichText keypath="hierarquia.diocese_organizacao_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2"
        :links='{"eucaristia":{"to":"/missa#liturgia-eucaristica"}}'
      />
      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("hierarquia.diocese_organizacao_p2") }}</p>

      <ArticleSubheading id="arquidiocese" class="clear-both" :text="$t('hierarquia.arquidiocese_organizacao_titulo')" />
      <ImageFigure class="w-32 md:w-44 float-left mr-4 md:mr-7 mb-2 md:mb-4" src="https://cdn.prod.website-files.com/6581f201a6c472f90b0fd34f/6a3254df7ceaf9d84aba3229_66c5d6ebedf3d4f1a0b47308_2_.webp" :alt="$t('hierarquia.imagem_arquidiocese')" caption-key="hierarquia.imagem_arquidiocese" image-class="h-auto rounded-md object-contain" />
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.arquidiocese_organizacao_p1") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("hierarquia.arquidiocese_organizacao_p2") }}</p>

      <ArticleSubheading id="provincia-eclesiastica" class="clear-both" :text="$t('hierarquia.provincia_titulo')" />
      <ImageFigure class="w-32 md:w-40 float-right ml-4 md:ml-7 mb-2 md:mb-4 md:-mt-10" src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Ecclesiastical_Province_of_Los_Angeles_map.png" :alt="$t('hierarquia.imagem_provincia')" caption-key="hierarquia.imagem_provincia" image-class="h-auto rounded-md object-contain" />
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.provincia_p1") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("hierarquia.provincia_p2") }}</p>

      <ArticleSubheading id="conferencia-episcopal" class="clear-both md:clear-none" :text="$t('hierarquia.conferencia_titulo')" />
      <ImageFigure class="w-32 md:w-44 float-left mr-4 md:mr-7 mb-2 md:mb-4" src="https://www.cnbb.org.br/wp-content/uploads/2024/04/Celebracao-final-scaled.jpeg" :alt="$t('hierarquia.imagem_conferencia')" caption-key="hierarquia.imagem_conferencia" image-class="h-auto rounded-md object-contain" />
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.conferencia_p1") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("hierarquia.conferencia_p2") }}</p>

      <ArticleSubheading id="paroquia" class="clear-both" :text="$t('hierarquia.paroquia_organizacao_titulo')" />
      <ImageFigure class="w-32 md:w-44 float-right ml-4 md:ml-7 mb-2 md:mb-4" src="https://ourladyofpentecost.org.au/wp-content/uploads/2020/10/01_OLGC_Parish_2019-3-600x400-c-default.jpg" :alt="$t('hierarquia.imagem_paroquia')" caption-key="hierarquia.imagem_paroquia" image-class="h-auto rounded-md object-contain" />
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.paroquia_organizacao_p1") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.paroquia_organizacao_p2") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("hierarquia.paroquia_organizacao_p3") }}</p>

      <ArticleSubheading id="comunidade" class="clear-both" :text="$t('hierarquia.comunidade_titulo')" />
      <ImageFigure class="w-32 md:w-44 float-left mr-4 md:mr-7 mb-2 md:mb-4" src="https://comshalom.org/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-05-at-15.53.01-840x636.jpeg" :alt="$t('hierarquia.imagem_comunidade')" caption-key="hierarquia.imagem_comunidade" image-class="h-auto rounded-md object-contain" />
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.comunidade_p1") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("hierarquia.comunidade_p2") }}</p>

      <ImageFigure class="hidden md:block md:w-44 md:float-right md:ml-7 md:mb-4" src="https://diocesedebarretos.com.br/wp-content/uploads/2025/08/Site-Capa-fotos-materias-1-1.png.webp" :alt="$t('hierarquia.imagem_quase_paroquia')" caption-key="hierarquia.imagem_quase_paroquia" image-class="h-auto rounded-md object-contain" />

      <ArticleSubheading id="quase-paroquia" compact class="clear-both mt-12 md:mt-4 md:clear-left" :text="$t('hierarquia.quase_paroquia_titulo')" />
      <ImageFigure class="w-32 float-right ml-4 mb-2 md:hidden" src="https://diocesedebarretos.com.br/wp-content/uploads/2025/08/Site-Capa-fotos-materias-1-1.png.webp" :alt="$t('hierarquia.imagem_quase_paroquia')" caption-key="hierarquia.imagem_quase_paroquia" image-class="h-auto rounded-md object-contain" />
      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("hierarquia.quase_paroquia_p1") }}</p>

      <ArticleSubheading id="missao" compact class="clear-both mt-12 md:mt-4" :text="$t('hierarquia.missao_titulo')" />
      <ImageFigure class="w-32 md:w-44 float-left mr-4 md:mr-7 mb-2 md:mb-4" src="https://www.cnbb.org.br/wp-content/uploads/2020/02/Visita-missionaria-sul2.jpg" :alt="$t('hierarquia.imagem_missao')" caption-key="hierarquia.imagem_missao" image-class="h-auto rounded-md object-contain" />
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.missao_p1") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("hierarquia.missao_p2") }}</p>
    </section>

    <section id="lugares-sagrados" class="clear-both max-w-7xl mx-auto pb-20 px-6 scroll-mt-24">
      <ArticleSectionTitle :text="$t('hierarquia.lugares_sagrados_titulo')" />

      <div class="flow-root">
      <ImageFigure class="w-32 md:w-44 float-left mr-4 md:mr-7 mb-2 md:mb-4" src="https://pbs.twimg.com/media/G_zupo9aUAEzFz8?format=jpg&amp;name=large" :alt="$t('hierarquia.imagem_missa_ar_livre')" caption-key="hierarquia.imagem_missa_ar_livre" image-class="h-auto rounded-md object-contain" />
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.lugares_sagrados_p1") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.lugares_sagrados_p2") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("hierarquia.lugares_sagrados_p3") }}</p>

      <RichText keypath="hierarquia.lugares_sagrados_obs" tag="p" class="text-sm text-gray-500 italic leading-relaxed text-justify mt-4"
      />
      </div>

      <ArticleSubheading id="igreja-edificio" class="clear-both" :text="$t('hierarquia.igreja_edificio_titulo')" />
      <ImageFigure class="w-32 md:w-44 float-right ml-4 md:ml-7 mb-2 md:mb-4 md:-mt-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXHltRyXI6mR2ETj5-rs3V4itzoaqcRj5cTvZ-uNIJmHsmoW33xMdPml8&amp;s=10" :alt="$t('hierarquia.imagem_igreja_edificio')" caption-key="hierarquia.imagem_igreja_edificio" image-class="h-auto rounded-md object-contain" />
      <RichText keypath="hierarquia.igreja_edificio_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2"
      />
      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("hierarquia.igreja_edificio_p2") }}</p>

      <ArticleSubheading id="igreja-paroquial" class="clear-both" :text="$t('hierarquia.igreja_paroquial_titulo')" />
      <ImageFigure class="w-32 md:w-44 float-left mr-4 md:mr-7 mb-2 md:mb-4" src="https://www.prarch.com/wp-content/uploads/2023/01/St.-Clare-Assisi-Monroe-Exterior-Church.jpg" :alt="$t('hierarquia.imagem_igreja_paroquial')" caption-key="hierarquia.imagem_igreja_paroquial" image-class="h-auto rounded-md object-contain" />
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.igreja_paroquial_p1") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("hierarquia.igreja_paroquial_p2") }}</p>

      <ArticleSubheading id="catedral" class="clear-both" :text="$t('hierarquia.catedral_titulo')" />
      <ImageFigure class="w-32 md:w-44 float-right ml-4 md:ml-7 mb-2 md:mb-4 md:-mt-10" src="https://images.unsplash.com/photo-1666623710701-b420de55416d?fm=jpg&amp;q=60&amp;w=3000&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0ZWRyYWwlMjBkZSUyMGNvbCVDMyVCNG5pYXxlbnwwfHwwfHx8MA%3D%3D" :alt="$t('hierarquia.imagem_catedral')" caption-key="hierarquia.imagem_catedral" image-class="h-auto rounded-md object-contain" />
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.catedral_p1") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("hierarquia.catedral_p2") }}</p>

      <ArticleSubheading id="basilica" compact class="clear-both mt-12 md:mt-4 md:clear-none" :text="$t('hierarquia.basilica_titulo')" />
      <ImageFigure class="w-32 float-left mr-4 mb-2 md:hidden" src="https://www.infoescola.com/wp-content/uploads/2012/01/basilica-de-sao-pedro.jpg" :alt="$t('hierarquia.imagem_basilica')" caption-key="hierarquia.imagem_basilica" image-class="h-auto rounded-md object-contain" />
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.basilica_p1") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.basilica_p2") }}</p>
      <ImageFigure class="hidden md:block md:w-44 md:float-left md:mr-7 md:mb-4" src="https://www.infoescola.com/wp-content/uploads/2012/01/basilica-de-sao-pedro.jpg" :alt="$t('hierarquia.imagem_basilica')" caption-key="hierarquia.imagem_basilica" image-class="h-auto rounded-md object-contain" />
      <p class="text-gray-600 leading-relaxed text-justify mb-3">{{ $t("hierarquia.basilica_lista_intro") }}</p>
      <ul class="list-disc pl-7 space-y-1 text-gray-600 leading-relaxed">
        <li>{{ $t("hierarquia.basilica_lista_1") }}</li>
        <li>{{ $t("hierarquia.basilica_lista_2") }}</li>
        <li>{{ $t("hierarquia.basilica_lista_3") }}</li>
        <li>{{ $t("hierarquia.basilica_lista_4") }}</li>
      </ul>

      <ArticleSubheading id="santuario" class="clear-both" :text="$t('hierarquia.santuario_titulo')" />
      <ImageFigure class="w-32 md:w-44 float-right ml-4 md:ml-7 mb-2 md:mb-4 md:-mt-10" src="https://arquidiocesebh.org.br/wp-content/uploads/2019/07/schoenstatt2019-1-850x567.jpg" :alt="$t('hierarquia.imagem_santuario')" caption-key="hierarquia.imagem_santuario" image-class="h-auto rounded-md object-contain" />
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.santuario_p1") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.santuario_p2") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("hierarquia.santuario_p3") }}</p>

      <ArticleSubheading id="capela" class="clear-both" :text="$t('hierarquia.capela_titulo')" />
      <ImageFigure class="w-32 md:w-44 float-left mr-4 md:mr-7 mb-2 md:mb-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMCNoUuYJX-OsDu5GskmoKRoqm4fewKGZeHSiZFCMq84PVhx6aA6oTsMgG&amp;s=10" :alt="$t('hierarquia.imagem_capela')" caption-key="hierarquia.imagem_capela" image-class="aspect-square rounded-md object-cover object-center" />
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.capela_p1") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.capela_p2") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("hierarquia.capela_p3") }}</p>

      <ArticleSubheading id="oratorio" class="clear-both" :text="$t('hierarquia.oratorio_titulo')" />
      <ImageFigure class="w-32 md:w-44 float-right ml-4 md:ml-7 mb-2 md:mb-4 md:-mt-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3KTrQM-lTnEESHn9mWLi2vtb8noBZZJ2h3Dov_DD7hTxH5Ni3LbaoRz3Y&amp;s=10" :alt="$t('hierarquia.imagem_oratorio')" caption-key="hierarquia.imagem_oratorio" image-class="h-auto rounded-md object-contain" />
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.oratorio_p1") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("hierarquia.oratorio_p2") }}</p>

      <ArticleSubheading id="mosteiro" compact class="clear-both mt-12 md:mt-4 md:clear-left" :text="$t('hierarquia.mosteiro_titulo')" />
      <ImageFigure class="w-32 md:w-44 float-left mr-4 md:mr-7 mb-2 md:mb-4" src="https://www.dooid.it/wp-content/uploads/2020/11/Sacro-Speco-Subiaco-monastero-dooid.jpg" :alt="$t('hierarquia.imagem_mosteiro')" caption-key="hierarquia.imagem_mosteiro" image-class="h-auto rounded-md object-contain" />
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.mosteiro_p1") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("hierarquia.mosteiro_p2") }}</p>

      <ArticleSubheading id="convento" class="clear-both" :text="$t('hierarquia.convento_titulo')" />
      <ImageFigure class="w-32 md:w-44 float-right ml-4 md:ml-7 mb-2 md:mb-4 md:-mt-10" src="https://www.gardatrentino.it/website_images/POI/Poi_Cultura/image-thumb__10683__ds-maxwidth1920/POI_cultura_Comano_CoventoCampo_S.Besti_TNMK.webp" :alt="$t('hierarquia.imagem_convento')" caption-key="hierarquia.imagem_convento" image-class="h-auto rounded-md object-contain" />
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.convento_p1") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.convento_p2") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("hierarquia.convento_p3") }}</p>

      <ArticleSubheading id="abadia" class="clear-both" :text="$t('hierarquia.abadia_titulo')" />
      <ImageFigure class="w-32 md:w-44 float-left mr-4 md:mr-7 mb-2 md:mb-4" src="https://www.infoescola.com/wp-content/uploads/2012/05/abadia-de-westminster_723925570.jpg" :alt="$t('hierarquia.imagem_abadia')" caption-key="hierarquia.imagem_abadia" image-class="h-auto rounded-md object-contain" />
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.abadia_p1") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("hierarquia.abadia_p2") }}</p>

      <ArticleSubheading id="seminario" class="clear-both" :text="$t('hierarquia.seminario_titulo')" />
      <ImageFigure class="w-32 md:w-44 float-right ml-4 md:ml-7 mb-2 md:mb-4 md:-mt-10" src="https://www.ncronline.org/files/20200918T1130-CHARLOTTE-COLLEGE-SEMINARY-1005459.JPG" :alt="$t('hierarquia.imagem_seminario')" caption-key="hierarquia.imagem_seminario" image-class="h-auto rounded-md object-contain" />
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.seminario_p1") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("hierarquia.seminario_p2") }}</p>

      <ArticleSubheading id="cemiterio" class="clear-both" :text="$t('hierarquia.cemiterio_titulo')" />
      <ImageFigure class="w-32 md:w-44 float-left mr-4 md:mr-7 mb-2 md:mb-4" src="https://dioceseofraleigh.org/sites/default/files/styles/bp_featured_image/public/2022-11/all-souls-mass-ng-2022-860e.jpg?h=56d53079&amp;itok=X65EcogY" :alt="$t('hierarquia.imagem_cemiterio')" caption-key="hierarquia.imagem_cemiterio" image-class="h-auto rounded-md object-contain" />
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.cemiterio_p1") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.cemiterio_p2") }}</p>
      <p class="text-gray-600 leading-relaxed text-justify">{{ $t("hierarquia.cemiterio_p3") }}</p>
    </section>

  </main>
</template>

<script setup>
const mongesImageUrl = "https://storage.canalblog.com/65/29/1470675/124154883.jpg";
</script>
