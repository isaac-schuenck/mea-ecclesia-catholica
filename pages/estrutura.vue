<template>
  <main class="flex-grow">
    <section
      id="estrutura-da-igreja"
      class="max-w-7xl mx-auto pt-20 pb-20 px-6 scroll-mt-24"
    >
      <nav
        aria-label="Sumário da página"
        class="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 mb-12 text-sm md:text-base text-center"
      >
        <a href="#estrutura-da-igreja" class="font-semibold text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">
          {{ $t("hierarquia.sumario_estrutura") }}
        </a>
        <span class="text-gray-400" aria-hidden="true">•</span>
        <a href="#hierarquia" class="font-semibold text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">
          {{ $t("hierarquia.sumario_hierarquia") }}
        </a>
      </nav>

      <h1
        class="text-3xl font-bold text-[#041122] mb-12 font-serif border-b-2 border-[#D4AF37] pb-3 inline-block"
      >
        {{ $t("hierarquia.titulo") }}
      </h1>

      <i18n-t
        keypath="hierarquia.p1"
        tag="p"
        class="text-gray-600 leading-relaxed text-justify mb-2"
      >
        <template #papa>
          <NuxtLink to="/papado" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">
            {{ $t("palavras_chave.papa") }}
          </NuxtLink>
        </template>
        <template #missa>
          <NuxtLink to="/missa" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">
            {{ $t("palavras_chave.missa") }}
          </NuxtLink>
        </template>
        <template #batismo>
          <NuxtLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">
            {{ $t("palavras_chave.batismo") }}
          </NuxtLink>
        </template>
      </i18n-t>

      <i18n-t
        keypath="hierarquia.p2"
        tag="p"
        class="text-gray-600 leading-relaxed text-justify mb-2"
      >
        <template #sacramento_ordem>
          <NuxtLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">
            {{ $t("palavras_chave.sacramento_ordem") }}
          </NuxtLink>
        </template>
        <template #vida_consagrada>
          <NuxtLink to="/estrutura#vida-consagrada" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">
            {{ $t("palavras_chave.vida_consagrada") }}
          </NuxtLink>
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
          <NuxtLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">
            {{ $t("palavras_chave.sacramento_ordem") }}
          </NuxtLink>
        </template>
        <template #sucessao_apostolica>
          <NuxtLink to="/sucessao-apostolica" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">
            {{ $t("palavras_chave.sucessao_apostolica") }}
          </NuxtLink>
        </template>
      </i18n-t>

      <i18n-t keypath="hierarquia.h_intro2" tag="p" class="text-gray-600 leading-relaxed text-justify mb-3">
        <template #papa>
          <NuxtLink to="/papado" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">
            {{ $t("palavras_chave.papa") }}
          </NuxtLink>
        </template>
      </i18n-t>

      <ol class="list-decimal marker:text-[#9B7322] pl-8 space-y-1 text-gray-600 leading-relaxed mb-4">
        <li>{{ $t("hierarquia.grau_episcopado") }}</li>
        <li>{{ $t("hierarquia.grau_presbiterado") }}</li>
        <li>{{ $t("hierarquia.grau_diaconato") }}</li>
      </ol>

      <i18n-t keypath="hierarquia.h_intro3" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #papa>
          <NuxtLink to="/papado" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">
            {{ $t("palavras_chave.papa") }}
          </NuxtLink>
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
        <template #sacramento_ordem><NuxtLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sacramento_ordem") }}</NuxtLink></template>
        <template #apostolos><NuxtLink to="/sucessao-apostolica" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.apostolos") }}</NuxtLink></template>
        <template #papa><NuxtLink to="/papado" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.papa") }}</NuxtLink></template>
      </i18n-t>

      <i18n-t keypath="hierarquia.episcopado_orientais" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #igrejas_orientais_catolicas><NuxtLink to="/igrejas-orientais" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.igrejas_orientais_catolicas") }}</NuxtLink></template>
        <template #sacramentos><NuxtLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sacramentos") }}</NuxtLink></template>
        <template #igrejas_orientais><NuxtLink to="/igrejas-orientais" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.igrejas_orientais") }}</NuxtLink></template>
        <template #patriarcas><NuxtLink to="/igrejas-orientais" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.patriarcas") }}</NuxtLink></template>
        <template #arcebispos_maiores><NuxtLink to="/igrejas-orientais" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.arcebispos_maiores") }}</NuxtLink></template>
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
        <template #papa><NuxtLink to="/papado" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.papa") }}</NuxtLink></template>
        <template #sao_pedro><NuxtLink to="/santo-do-dia?data=2026-06-29#sao-pedro" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sao_pedro") }}</NuxtLink></template>
      </i18n-t>
      <i18n-t keypath="hierarquia.papa_p2" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #ordem><NuxtLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.ordem") }}</NuxtLink></template>
        <template #papa><NuxtLink to="/papado" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.papa") }}</NuxtLink></template>
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
        <template #papa><NuxtLink to="/papado" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.papa") }}</NuxtLink></template>
        <template #dioceses><NuxtLink to="/estrutura#bispos-diocesanos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.dioceses") }}</NuxtLink></template>
      </i18n-t>
      <i18n-t keypath="hierarquia.cardeais_p2" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #sacramento_ordem><NuxtLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sacramento_ordem") }}</NuxtLink></template>
      </i18n-t>
      <i18n-t keypath="hierarquia.cardeais_p3" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #conclave><NuxtLink to="/papado" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.conclave") }}</NuxtLink></template>
      </i18n-t>
      </div>

      <div class="mt-8 md:mt-0">
      <h4 id="bispos-diocesanos" class="clear-both text-xl font-bold text-[#041122] font-serif mb-4 scroll-mt-24">{{ $t("hierarquia.bispos_titulo") }}</h4>
      <figure class="w-32 md:w-40 float-right ml-4 md:ml-7 mb-2 md:mb-4 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO9WAhEIE3e1xnDH0nxGEMh6qI_6JWu-V4a3K0G_O8Jm9CVfaarvCNoxmE&s=10" :alt="$t('hierarquia.imagem_dom_walmor')" class="w-full aspect-square rounded-md object-cover object-top cursor-zoom-in" @click.stop="openImageFromEvent" />
        <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("hierarquia.imagem_dom_walmor") }}</figcaption>
      </figure>
      <i18n-t keypath="hierarquia.bispos_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #diocese><NuxtLink to="/estrutura#bispos-diocesanos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.diocese") }}</NuxtLink></template>
        <template #paroquias><NuxtLink to="/estrutura#paroco" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.paroquias") }}</NuxtLink></template>
      </i18n-t>
      <i18n-t keypath="hierarquia.bispos_p2" tag="p" class="text-gray-600 leading-relaxed text-justify mb-3">
        <template #diocese><NuxtLink to="/estrutura#bispos-diocesanos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.diocese") }}</NuxtLink></template>
        <template #papa><NuxtLink to="/papado" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.papa") }}</NuxtLink></template>
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
        <template #arquidiocese><NuxtLink to="/estrutura#arcebispos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.arquidiocese") }}</NuxtLink></template>
      </i18n-t>
      <i18n-t keypath="hierarquia.arcebispos_p2" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #arquidioceses><NuxtLink to="/estrutura#arcebispos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.arquidioceses") }}</NuxtLink></template>
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
        <template #papa><NuxtLink to="/papado" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.papa") }}</NuxtLink></template>
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
        <template #missa><NuxtLink to="/missa" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.missa") }}</NuxtLink></template>
        <template #confissao><NuxtLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.confissao") }}</NuxtLink></template>
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
        <template #homens_celibatarios><NuxtLink to="/catecismo" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.homens_celibatarios") }}</NuxtLink></template>
      </i18n-t>
      <i18n-t keypath="hierarquia.padre_p2" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #sacramento_ordem><NuxtLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sacramento_ordem") }}</NuxtLink></template>
      </i18n-t>
      </div>

      <div class="mt-8 md:mt-0">
      <h4 id="paroco" class="clear-both md:clear-left text-xl font-bold text-[#041122] font-serif mb-4 scroll-mt-24">{{ $t("hierarquia.paroco_titulo") }}</h4>
      <figure class="w-32 md:w-32 float-right ml-4 md:ml-7 mb-2 md:mb-3 md:-mt-10 bg-white border border-gray-200 rounded-lg p-2 shadow-md">
        <img src="https://s2-g1.glbimg.com/uMbgrhDHVqPeWqeJEIko5QglWDI=/0x0:960x720/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/t/N/OzxORgReGufzrsXXVqcQ/missa-itu.jpeg" :alt="$t('hierarquia.imagem_paroco')" class="w-full aspect-square rounded-md object-cover object-center cursor-zoom-in" @click.stop="openImageFromEvent" />
        <figcaption class="mt-2 text-center text-xs italic text-gray-500">{{ $t("hierarquia.imagem_paroco") }}</figcaption>
      </figure>
      <i18n-t keypath="hierarquia.paroco_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #paroquia><NuxtLink to="/estrutura#paroco" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.paroquia") }}</NuxtLink></template>
        <template #sacramentos><NuxtLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sacramentos") }}</NuxtLink></template>
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
        <template #missas><NuxtLink to="/missa" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.missas") }}</NuxtLink></template>
        <template #confissoes><NuxtLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.confissoes") }}</NuxtLink></template>
        <template #visitas_enfermos><NuxtLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.visitas_enfermos") }}</NuxtLink></template>
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
        <template #sacramento_ordem><NuxtLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sacramento_ordem") }}</NuxtLink></template>
        <template #diakonos><em>{{ $t("palavras_chave.diakonos") }}</em></template>
      </i18n-t>

      <i18n-t keypath="hierarquia.diaconato_p2" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #proclamar_evangelho><NuxtLink to="/missa#evangelho" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.proclamar_evangelho") }}</NuxtLink></template>
        <template #batismo><NuxtLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.batismo") }}</NuxtLink></template>
        <template #comunhao><NuxtLink to="/missa#comunhao" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.comunhao") }}</NuxtLink></template>
        <template #matrimonio><NuxtLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.matrimonio") }}</NuxtLink></template>
      </i18n-t>

      <i18n-t keypath="hierarquia.diaconato_p3" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #missa><NuxtLink to="/missa" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.missa") }}</NuxtLink></template>
        <template #consagrar_eucaristia><NuxtLink to="/missa#consagracao" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.consagrar_eucaristia") }}</NuxtLink></template>
        <template #pecados><NuxtLink to="/catecismo" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.pecados") }}</NuxtLink></template>
        <template #confissao><NuxtLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.confissao") }}</NuxtLink></template>
        <template #uncao_enfermos><NuxtLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.uncao_enfermos") }}</NuxtLink></template>
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
            <template #celibato><NuxtLink to="/catecismo" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.celibato") }}</NuxtLink></template>
            <template #matrimonio><NuxtLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.matrimonio") }}</NuxtLink></template>
          </i18n-t>
        </div>
      </div>

      <h3 id="vida-consagrada" class="clear-both md:clear-right text-2xl font-bold text-[#041122] font-serif mt-12 mb-5 scroll-mt-24">
        {{ $t("hierarquia.consagrada_titulo") }}
      </h3>

      <i18n-t keypath="hierarquia.consagrada_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
        <template #vida_consagrada><NuxtLink to="/estrutura#vida-consagrada" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.vida_consagrada") }}</NuxtLink></template>
        <template #sacramento_ordem><NuxtLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sacramento_ordem") }}</NuxtLink></template>
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
            <template #sacramento_ordem><NuxtLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sacramento_ordem") }}</NuxtLink></template>
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
        <template #liturgia><NuxtLink to="/missa" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.liturgia") }}</NuxtLink></template>
      </i18n-t>
      <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.leigos_ministerios_p2") }}</p>

      <div class="md:border-l-4 md:border-[#D4AF37]/40 md:pl-8 md:mt-8 md:space-y-8">
        <div class="mt-8 md:mt-0">
          <h4 id="leitores" class="text-xl font-bold text-[#041122] font-serif mb-4 scroll-mt-24">{{ $t("hierarquia.leitores_titulo") }}</h4>
          <i18n-t keypath="hierarquia.leitores_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
            <template #leituras><NuxtLink to="/missa#ciclo-das-leituras" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.leituras") }}</NuxtLink></template>
            <template #sagrada_escritura><NuxtLink to="/escritura" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sagrada_escritura") }}</NuxtLink></template>
            <template #liturgia><NuxtLink to="/missa" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.liturgia") }}</NuxtLink></template>
            <template #evangelho><NuxtLink to="/missa#evangelho" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.evangelho") }}</NuxtLink></template>
          </i18n-t>
          <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.leitores_p2") }}</p>
        </div>

        <div class="mt-8 md:mt-0">
          <h4 id="acolitos" class="text-xl font-bold text-[#041122] font-serif mb-4 scroll-mt-24">{{ $t("hierarquia.acolitos_titulo") }}</h4>
          <i18n-t keypath="hierarquia.acolitos_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
            <template #altar><NuxtLink to="/missa" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.altar") }}</NuxtLink></template>
            <template #comunhao><NuxtLink to="/missa#comunhao" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.comunhao") }}</NuxtLink></template>
          </i18n-t>
          <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.acolitos_p2") }}</p>
        </div>

        <div class="mt-8 md:mt-0">
          <h4 id="coroinhas" class="text-xl font-bold text-[#041122] font-serif mb-4 scroll-mt-24">{{ $t("hierarquia.coroinhas_titulo") }}</h4>
          <i18n-t keypath="hierarquia.coroinhas_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
            <template #celebracoes><NuxtLink to="/missa" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.celebracoes") }}</NuxtLink></template>
            <template #cruz_processional><NuxtLink to="/artigos-religiosos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.cruz_processional") }}</NuxtLink></template>
            <template #velas><NuxtLink to="/artigos-religiosos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.velas") }}</NuxtLink></template>
            <template #turibulo><NuxtLink to="/artigos-religiosos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.turibulo") }}</NuxtLink></template>
            <template #missal><NuxtLink to="/ritos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.missal") }}</NuxtLink></template>
            <template #objetos><NuxtLink to="/artigos-religiosos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.objetos") }}</NuxtLink></template>
            <template #liturgia><NuxtLink to="/missa" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.liturgia") }}</NuxtLink></template>
          </i18n-t>
          <i18n-t keypath="hierarquia.coroinhas_p2" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
            <template #celebracao><NuxtLink to="/missa" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.celebracao") }}</NuxtLink></template>
            <template #liturgias><NuxtLink to="/missa" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.liturgias") }}</NuxtLink></template>
          </i18n-t>
          <i18n-t keypath="hierarquia.coroinhas_p3" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
            <template #ordem><NuxtLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.ordem") }}</NuxtLink></template>
          </i18n-t>
        </div>

        <div class="mt-8 md:mt-0">
          <h4 id="ministros-comunhao" class="text-xl font-bold text-[#041122] font-serif mb-4 scroll-mt-24">{{ $t("hierarquia.ministros_comunhao_titulo") }}</h4>
          <i18n-t keypath="hierarquia.ministros_comunhao_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
            <template #sagrada_comunhao><NuxtLink to="/missa#comunhao" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sagrada_comunhao") }}</NuxtLink></template>
          </i18n-t>
          <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.ministros_comunhao_p2") }}</p>
        </div>

        <div class="mt-8 md:mt-0">
          <h4 id="fieis-leigos" class="text-xl font-bold text-[#041122] font-serif mb-4 scroll-mt-24">{{ $t("hierarquia.fieis_leigos_titulo") }}</h4>
          <i18n-t keypath="hierarquia.fieis_leigos_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
            <template #batizados><NuxtLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.batizados") }}</NuxtLink></template>
            <template #sacramento_ordem><NuxtLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sacramento_ordem") }}</NuxtLink></template>
          </i18n-t>
          <i18n-t keypath="hierarquia.fieis_leigos_p2" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
            <template #evangelho><NuxtLink to="/missa#evangelho" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.evangelho") }}</NuxtLink></template>
          </i18n-t>
          <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("hierarquia.fieis_leigos_p3") }}</p>
          <i18n-t keypath="hierarquia.fieis_leigos_p4" tag="p" class="text-gray-600 leading-relaxed text-justify mb-2">
            <template #batismo><NuxtLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.batismo") }}</NuxtLink></template>
          </i18n-t>
          <i18n-t keypath="hierarquia.fieis_leigos_p5" tag="p" class="text-gray-600 leading-relaxed text-justify">
            <template #sacramentos><NuxtLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.sacramentos") }}</NuxtLink></template>
            <template #apostolica><NuxtLink to="/sucessao-apostolica" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.apostolica") }}</NuxtLink></template>
            <template #batizado><NuxtLink to="/sacramentos" class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors">{{ $t("palavras_chave.batizado") }}</NuxtLink></template>
          </i18n-t>
        </div>
      </div>
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

const closeLightboxWithEscape = (event) => {
  if (event.key === "Escape") closeLightbox();
};

const openLightbox = (imageUrl, caption) => {
  if (lightboxOpen.value) return;

  lightboxImageUrl.value = imageUrl;
  lightboxCaption.value = caption;
  lightboxOpen.value = true;
  if (import.meta.client) {
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
};

const handleHistoryBack = () => {
  if (!lightboxOpen.value) return;
  lightboxHistoryActive.value = false;
  lightboxOpen.value = false;
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
});
</script>
