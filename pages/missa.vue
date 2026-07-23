<template>
  <main class="flex-grow">
    <section
      id="o-que-e-missa"
      class="max-w-7xl mx-auto pt-20 pb-12 px-6 scroll-mt-24"
    >
      <nav
        aria-label="Sumário da página"
        class="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 mb-12 text-sm md:text-base text-center"
      >
        <a
          href="#o-que-e-missa"
          class="font-semibold text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors"
          >{{ $t("missa.titulo") }}</a
        >
        <span class="text-gray-400" aria-hidden="true">•</span>
        <a
          href="#ciclo-das-leituras"
          class="font-semibold text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors"
          >{{ $t("missa.ciclo_leituras_titulo") }}</a
        >
        <span class="text-gray-400" aria-hidden="true">•</span>
        <a
          href="#cores-liturgicas"
          class="font-semibold text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors"
          >{{ $t("missa.cores_liturgicas_titulo") }}</a
        >
        <span class="text-gray-400" aria-hidden="true">•</span>
        <a
          href="#estrutura-da-santa-missa"
          class="font-semibold text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors"
          >{{ $t("missa.estrutura_titulo") }}</a
        >
        <span class="text-gray-400" aria-hidden="true">•</span>
        <a
          href="#respostas-liturgicas"
          class="font-semibold text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors"
          >{{ $t("missa.respostas_liturgicas_titulo") }}</a
        >
      </nav>

      <SectionTitle :text="$t('missa.titulo')" />

      <i18n-t
        keypath="missa.p1"
        tag="p"
        class="text-gray-600 leading-relaxed text-justify mb-2"
      >
        <template #dever
          ><TextLink to="/catecismo" :text="$t('palavras_chave.dever')"
        /></template>
        <template #catecismo2180_2181>
          <a
            href="https://www.vatican.va/archive/cathechism_po/index_new/p3s2cap1_2083-2195_po.html#2180"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200"
            >{{ $t("palavras_chave.catecismo2180_2181") }}</a
          >
        </template>
      </i18n-t>
      <i18n-t
        keypath="missa.p2"
        tag="p"
        class="text-gray-600 leading-relaxed text-justify mb-2"
      >
        <template #rito
          ><TextLink to="/ritos" :text="$t('palavras_chave.rito')"
        /></template>
      </i18n-t>
      <p class="text-gray-600 leading-relaxed text-justify">
        {{ $t("missa.p3") }}
      </p>
    </section>

    <section
      id="ciclo-das-leituras"
      class="max-w-7xl mx-auto pb-20 px-6 scroll-mt-24"
    >
      <SectionTitle :text="$t('missa.ciclo_leituras_titulo')" />

      <i18n-t
        keypath="missa.ciclo_leituras_p1"
        tag="p"
        class="text-gray-600 leading-relaxed text-justify mb-2"
      >
        <template #sagrada_escritura
          ><TextLink
            to="/escritura"
            :text="$t('palavras_chave.sagrada_escritura')"
        /></template>
        <template #calendario_liturgico_maiusculo
          ><TextLink
            to="/ano-liturgico"
            :text="$t('palavras_chave.calendario_liturgico_maiusculo')"
        /></template>
        <template #lecionario_romano
          ><TextLink to="/ritos" :text="$t('palavras_chave.lecionario_romano')"
        /></template>
        <template #calendario_liturgico
          ><TextLink
            to="/ano-liturgico"
            :text="$t('palavras_chave.calendario_liturgico')"
        /></template>
      </i18n-t>
      <i18n-t
        keypath="missa.ciclo_leituras_p2"
        tag="p"
        class="text-gray-600 leading-relaxed text-justify mb-2"
      >
        <template #e_por_que
          ><strong class="font-bold text-gray-600">{{
            $t("missa.e_por_que")
          }}</strong></template
        >
      </i18n-t>
      <p class="text-gray-600 leading-relaxed text-justify mb-8">
        {{ $t("missa.ciclo_leituras_p3") }}
      </p>

      <h4 class="text-2xl font-bold text-[#041122] font-serif mb-4">
        {{ $t("missa.missa_dominical_titulo") }}
      </h4>
      <i18n-t
        keypath="missa.missa_dominical_p1"
        tag="p"
        class="text-gray-600 leading-relaxed text-justify mb-5"
      >
        <template #sabado
          ><TextLink to="/ano-liturgico" :text="$t('palavras_chave.sabado')"
        /></template>
      </i18n-t>

      <div
        class="border-l-4 border-[#D4AF37] pl-5 mb-5 space-y-2 text-gray-600"
      >
        <i18n-t keypath="missa.ano_a" tag="p"
          ><template #sao_mateus
            ><TextLink
              to="/santos"
              :text="$t('palavras_chave.sao_mateus')" /></template
        ></i18n-t>
        <i18n-t keypath="missa.ano_b" tag="p"
          ><template #sao_marcos
            ><TextLink
              to="/santos"
              :text="$t('palavras_chave.sao_marcos')" /></template
        ></i18n-t>
        <i18n-t keypath="missa.ano_c" tag="p"
          ><template #sao_lucas
            ><TextLink
              to="/santos"
              :text="$t('palavras_chave.sao_lucas')" /></template
        ></i18n-t>
      </div>

      <i18n-t
        keypath="missa.evangelho_joao"
        tag="p"
        class="text-gray-600 leading-relaxed text-justify mb-2"
      >
        <template #sao_joao
          ><TextLink to="/santos" :text="$t('palavras_chave.sao_joao')"
        /></template>
        <template #quaresma
          ><TextLink to="/ano-liturgico" :text="$t('palavras_chave.quaresma')"
        /></template>
        <template #tempo_pascal
          ><TextLink
            to="/ano-liturgico"
            :text="$t('palavras_chave.tempo_pascal')"
        /></template>
      </i18n-t>
      <i18n-t
        keypath="missa.observacao_ano_liturgico"
        tag="p"
        class="text-sm text-gray-500 italic leading-relaxed mb-8"
      >
        <template #ano_liturgico
          ><TextLink
            to="/ano-liturgico"
            :text="$t('palavras_chave.ano_liturgico')"
        /></template>
      </i18n-t>

      <h4 class="text-2xl font-bold text-[#041122] font-serif mb-4">
        {{ $t("missa.missa_semanal_titulo") }}
      </h4>
      <p class="text-gray-600 leading-relaxed text-justify mb-4">
        {{ $t("missa.missa_semanal_p1") }}
      </p>
      <div
        class="border-l-4 border-[#D4AF37] pl-5 mb-4 space-y-2 text-gray-600"
      >
        <p>{{ $t("missa.ano_i") }}</p>
        <p>{{ $t("missa.ano_ii") }}</p>
      </div>
      <p class="text-gray-600 leading-relaxed text-justify">
        {{ $t("missa.missa_semanal_p2") }}
      </p>
    </section>

    <section
      id="cores-liturgicas"
      class="max-w-7xl mx-auto pb-20 px-6 scroll-mt-24"
    >
      <SectionTitle :text="$t('missa.cores_liturgicas_titulo')" />

      <i18n-t
        keypath="missa.cores_liturgicas_p1"
        tag="p"
        class="text-gray-600 leading-relaxed text-justify mb-2"
      >
        <template #vestes_liturgicas
          ><TextLink
            to="/ritos"
            :text="$t('palavras_chave.vestes_liturgicas')"
            bold
        /></template>
        <template #calendario_liturgico
          ><TextLink
            to="/ano-liturgico"
            :text="$t('palavras_chave.calendario_liturgico')"
            bold
        /></template>
      </i18n-t>
      <p class="text-gray-600 leading-relaxed text-justify mb-10">
        {{ $t("missa.cores_liturgicas_p2") }}
      </p>

      <div class="divide-y divide-[#D4AF37]/25">
        <article
          v-for="(cor, index) in coresLiturgicas"
          :key="cor.id"
          class="flex flex-col md:flex-row items-center gap-5 md:gap-8 py-8 first:pt-0"
          :class="index % 2 ? 'md:flex-row-reverse' : ''"
        >
          <h4
            class="md:hidden w-full text-2xl font-bold font-serif text-center"
            :style="{ color: cor.color }"
          >
            {{ $t(cor.nomeKey) }}
          </h4>

          <img
            :src="cor.image"
            :alt="$t(cor.nomeKey)"
            class="w-40 h-40 md:w-48 md:h-48 flex-shrink-0 rounded-lg object-cover shadow-sm"
          />
          <div class="flex-1 w-full">
            <h4
              class="hidden md:block text-2xl font-bold font-serif mb-1"
              :style="{ color: cor.color }"
            >
              {{ $t(cor.nomeKey) }}
            </h4>

            <i18n-t
              :keypath="cor.usoKey"
              tag="p"
              class="text-lg font-semibold text-[#041122] mb-3"
            >
              <template #tempo_comum
                ><TextLink
                  to="/ano-liturgico"
                  :text="$t('palavras_chave.tempo_comum')"
              /></template>
              <template #advento
                ><TextLink
                  to="/ano-liturgico"
                  :text="$t('palavras_chave.advento')"
              /></template>
              <template #quaresma
                ><TextLink
                  to="/ano-liturgico"
                  :text="$t('palavras_chave.quaresma')"
              /></template>
              <template #natal
                ><TextLink
                  to="/ano-liturgico"
                  :text="$t('palavras_chave.natal')"
              /></template>
              <template #tempo_pascal
                ><TextLink
                  to="/ano-liturgico"
                  :text="$t('palavras_chave.tempo_pascal')"
              /></template>
              <template #grandes_solenidades
                ><TextLink
                  to="/ano-liturgico"
                  :text="$t('palavras_chave.grandes_solenidades')"
              /></template>
              <template #santos
                ><TextLink to="/santos" :text="$t('palavras_chave.santos')"
              /></template>
              <template #martires
                ><TextLink to="/santos" :text="$t('palavras_chave.martires')"
              /></template>
              <template #pentecostes
                ><TextLink
                  to="/ano-liturgico"
                  :text="$t('palavras_chave.pentecostes')"
              /></template>
              <template #domingo_ramos
                ><TextLink
                  to="/ano-liturgico"
                  :text="$t('palavras_chave.domingo_ramos')"
              /></template>
              <template #sexta_feira_santa
                ><TextLink
                  to="/ano-liturgico"
                  :text="$t('palavras_chave.sexta_feira_santa')"
              /></template>
              <template #gaudete
                ><TextLink
                  to="/ano-liturgico"
                  :text="$t('palavras_chave.gaudete')"
              /></template>
              <template #laetare
                ><TextLink
                  to="/ano-liturgico"
                  :text="$t('palavras_chave.laetare')"
              /></template>
              <template #finados
                ><TextLink
                  to="/ano-liturgico"
                  :text="$t('palavras_chave.finados')"
              /></template>
              <template #exequias
                ><TextLink to="/ritos" :text="$t('palavras_chave.exequias')"
              /></template>
            </i18n-t>

            <i18n-t
              :keypath="cor.textoKey"
              tag="p"
              class="text-gray-600 leading-relaxed text-justify"
            >
              <template #advento
                ><TextLink
                  to="/ano-liturgico"
                  :text="$t('palavras_chave.advento')"
              /></template>
              <template #quaresma
                ><TextLink
                  to="/ano-liturgico"
                  :text="$t('palavras_chave.quaresma')"
              /></template>
              <template #pascoa
                ><TextLink
                  to="/ano-liturgico"
                  :text="$t('palavras_chave.pascoa')"
              /></template>
              <template #natal
                ><TextLink
                  to="/ano-liturgico"
                  :text="$t('palavras_chave.natal')"
              /></template>
              <template #solenidades
                ><TextLink
                  to="/ano-liturgico"
                  :text="$t('palavras_chave.solenidades')"
              /></template>
              <template #virgem_maria
                ><TextLink
                  to="/dogmas-marianos"
                  :text="$t('palavras_chave.virgem_maria')"
              /></template>
              <template #santos
                ><TextLink to="/santos" :text="$t('palavras_chave.santos')"
              /></template>
              <template #martirio
                ><TextLink to="/santos" :text="$t('palavras_chave.martirio')"
              /></template>
              <template #espirito_santo
                ><TextLink
                  to="/trindade"
                  :text="$t('palavras_chave.espirito_santo')"
              /></template>
              <template #martires
                ><TextLink to="/santos" :text="$t('palavras_chave.martires')"
              /></template>
            </i18n-t>
            <p
              v-if="cor.obsKey"
              class="mt-3 text-sm text-gray-500 italic leading-relaxed text-justify"
            >
              {{ $t(cor.obsKey) }}
            </p>
          </div>
        </article>
      </div>
    </section>

    <section
      id="estrutura-da-santa-missa"
      class="max-w-7xl mx-auto pb-20 px-6 scroll-mt-24"
    >
      <SectionTitle :text="$t('missa.estrutura_titulo')" />

      <i18n-t
        keypath="missa.estrutura_p1"
        tag="p"
        class="text-gray-600 leading-relaxed text-justify"
      >
        <template #rito_romano
          ><TextLink to="/ritos" :text="$t('palavras_chave.rito_romano')"
        /></template>
        <template #missal_sao_paulo_vi
          ><TextLink
            to="/ritos"
            :text="$t('palavras_chave.missal_sao_paulo_vi')"
        /></template>
        <template #novus_ordo
          ><TextLink to="/ritos" :text="$t('palavras_chave.novus_ordo')"
        /></template>
      </i18n-t>

      <div class="mt-10">
        <h4 class="text-2xl font-bold text-[#041122] font-serif mb-3">
          {{ $t("missa.ritos_iniciais_titulo") }}
        </h4>
        <p class="text-gray-600 leading-relaxed text-justify mb-4">
          {{ $t("missa.ritos_iniciais_intro") }}
        </p>
        <div
          class="md:border-l-4 md:border-[#D4AF37]/40 md:pl-8 space-y-6 mt-8"
        >
          <div>
            <h5 class="text-xl font-bold text-[#041122] font-serif mb-3">
              {{ $t("missa.procissao_entrada_titulo") }}
            </h5>
            <div class="flow-root">
              <figure
                class="float-left w-1/3 max-w-40 mr-4 md:mr-6 mb-2 bg-white rounded-lg shadow-md border border-gray-200 p-2 m-0"
              >
                <img
                  src="https://paroquiadasaude.com.br/wp-content/uploads/2022/06/procissao.jpg"
                  :alt="$t('missa.imagem_procissao')"
                  class="w-full aspect-square rounded object-cover"
                />
                <figcaption
                  class="text-xs text-gray-500 text-center mt-2 mb-1 px-1 italic leading-relaxed"
                >
                  {{ $t("missa.imagem_procissao") }}
                </figcaption>
              </figure>
              <RichText
                keypath="missa.procissao_entrada_p1"
                tag="p"
                class="text-gray-600 leading-relaxed text-justify mb-2"
              />
              <figure
                class="float-right w-1/3 max-w-40 ml-4 md:ml-6 mb-2 bg-white rounded-lg shadow-md border border-gray-200 p-2 m-0"
              >
                <img
                  src="https://media.istockphoto.com/id/2241178328/pt/foto/priest-incenses-the-altar-with-incense-during-holy-mass.jpg?s=612x612&w=0&k=20&c=h9086YILm0cIRQ2Tk7f1MDba2pPK8ruNT8VJzOoERAc="
                  :alt="$t('missa.imagem_incenso')"
                  class="w-full aspect-square rounded object-cover"
                />
                <figcaption
                  class="text-xs text-gray-500 text-center mt-2 mb-1 px-1 italic leading-relaxed"
                >
                  {{ $t("missa.imagem_incenso") }}
                </figcaption>
              </figure>
              <RichText
                keypath="missa.procissao_entrada_p2"
                tag="p"
                class="text-gray-600 leading-relaxed text-justify mb-2"
              />
              <RichText
                keypath="missa.procissao_entrada_p3"
                tag="p"
                class="text-gray-600 leading-relaxed text-justify"
              />
            </div>
          </div>

          <div>
            <RichText
              keypath="missa.veneracao_altar_titulo"
              tag="h5"
              class="text-xl font-bold text-[#041122] font-serif mb-3"
            />
            <div class="flow-root">
              <figure
                class="float-right w-1/3 max-w-40 ml-4 md:ml-6 mb-2 bg-white rounded-lg shadow-md border border-gray-200 p-2 m-0"
              >
                <img
                  src="https://images.a12.com/source/files/c/315456/Papa_Francisco_beija_o_altar-628170_1280-931-0-0.jpg"
                  :alt="$t('missa.imagem_veneracao_altar')"
                  class="w-full aspect-square rounded object-cover"
                />
                <figcaption
                  class="text-xs text-gray-500 text-center mt-2 mb-1 px-1 italic leading-relaxed"
                >
                  {{ $t("missa.imagem_veneracao_altar") }}
                </figcaption>
              </figure>
              <RichText
                keypath="missa.veneracao_altar_p1"
                tag="p"
                class="text-gray-600 leading-relaxed text-justify"
              />
              <RichText
                keypath="missa.veneracao_altar_obs"
                tag="p"
                class="mt-3 text-sm text-gray-500 italic leading-relaxed text-justify"
              />
            </div>
          </div>

          <div>
            <h5 class="text-xl font-bold text-[#041122] font-serif mb-3">
              {{ $t("missa.sinal_cruz_saudacao_titulo") }}
            </h5>
            <div class="flow-root">
              <figure
                class="float-left w-1/3 max-w-40 mr-4 md:mr-6 mb-2 bg-white rounded-lg shadow-md border border-gray-200 p-2 m-0"
              >
                <div class="w-full aspect-square rounded overflow-hidden">
                  <img
                    src="https://i.ytimg.com/vi/Bs6fer3Ur6I/sddefault.jpg"
                    :alt="$t('missa.imagem_sinal_cruz')"
                    class="w-full h-full object-cover scale-125"
                  />
                </div>
                <figcaption
                  class="text-xs text-gray-500 text-center mt-2 mb-1 px-1 italic leading-relaxed"
                >
                  {{ $t("missa.imagem_sinal_cruz") }}
                </figcaption>
              </figure>
              <RichText
                keypath="missa.sinal_cruz_saudacao_p1"
                tag="p"
                class="text-gray-600 leading-relaxed text-justify mb-3"
              />
              <div
                class="border-l-2 border-[#041122]/25 pl-4 my-4 space-y-1 text-gray-600 italic"
              >
                <p>
                  <strong class="not-italic text-[#A52A2A]"
                    >{{ $t("missa.sacerdote_label") }}:</strong
                  >
                  {{ $t("missa.saudacao_sacerdote") }}
                </p>
                <p>
                  <strong class="not-italic text-[#A52A2A]"
                    >{{ $t("missa.assembleia_label") }}:</strong
                  >
                  {{ $t("missa.saudacao_assembleia") }}
                </p>
              </div>
              <p class="text-gray-600 leading-relaxed text-justify">
                {{ $t("missa.sinal_cruz_saudacao_p2") }}
              </p>
            </div>
          </div>

          <div>
            <h5 class="text-xl font-bold text-[#041122] font-serif mb-3">
              {{ $t("missa.ato_penitencial_titulo") }}
            </h5>
            <p class="text-gray-600 leading-relaxed text-justify mb-2">
              {{ $t("missa.ato_penitencial_p1") }}
            </p>
            <RichText
              keypath="missa.ato_penitencial_p2"
              tag="p"
              class="text-gray-600 leading-relaxed text-justify"
            />
            <RichText
              keypath="missa.ato_penitencial_obs"
              tag="p"
              class="mt-3 text-sm text-gray-500 italic leading-relaxed text-justify"
            />
            <p class="text-gray-600 leading-relaxed mt-3">
              {{ $t("missa.ato_penitencial_final") }}
            </p>
            <div
              class="border-l-2 border-[#041122]/25 pl-4 my-4 space-y-1 text-gray-600 italic"
            >
              <p>
                <strong class="not-italic text-[#A52A2A]"
                  >{{ $t("missa.sacerdote_label") }}:</strong
                >
                {{ $t("missa.absolvicao_sacerdote") }}
              </p>
              <p>
                <strong class="not-italic text-[#A52A2A]"
                  >{{ $t("missa.assembleia_label") }}:</strong
                >
                {{ $t("missa.amem") }}
              </p>
            </div>
          </div>

          <div>
            <h5 class="text-xl font-bold text-[#041122] font-serif mb-3">
              {{ $t("missa.kyrie_titulo") }}
            </h5>
            <p class="text-gray-600 leading-relaxed text-justify mb-3">
              {{ $t("missa.kyrie_p1") }}
            </p>
            <div
              class="border-l-2 border-[#041122]/25 pl-4 space-y-1 text-gray-600 italic"
            >
              <p>{{ $t("missa.kyrie_linha1") }}</p>
              <p>{{ $t("missa.kyrie_linha2") }}</p>
              <p>{{ $t("missa.kyrie_linha3") }}</p>
            </div>
          </div>

          <div>
            <h5 class="text-xl font-bold text-[#041122] font-serif mb-3">
              {{ $t("missa.gloria_titulo") }}
            </h5>
            <RichText
              keypath="missa.gloria_p1"
              tag="p"
              class="text-gray-600 leading-relaxed text-justify mb-2"
            />
            <RichText
              keypath="missa.gloria_p2"
              tag="p"
              class="text-gray-600 leading-relaxed text-justify mb-2"
            />
            <RichText
              keypath="missa.gloria_p3"
              tag="p"
              class="text-gray-600 leading-relaxed text-justify"
            />
          </div>

          <div>
            <h5 class="text-xl font-bold text-[#041122] font-serif mb-3">
              {{ $t("missa.coleta_titulo") }}
            </h5>
            <p class="text-gray-600 leading-relaxed text-justify mb-3">
              {{ $t("missa.coleta_p1") }}
            </p>
            <div
              class="border-l-2 border-[#041122]/25 pl-4 my-4 text-gray-600 italic"
            >
              <p>
                <strong class="not-italic text-[#A52A2A]"
                  >{{ $t("missa.sacerdote_label") }}:</strong
                >
                {{ $t("missa.oremos") }}
              </p>
            </div>
            <RichText
              keypath="missa.coleta_p2"
              tag="p"
              class="text-gray-600 leading-relaxed text-justify mb-2"
            />
            <RichText
              keypath="missa.coleta_p3"
              tag="p"
              class="text-gray-600 leading-relaxed text-justify mb-3"
            />
            <div
              class="border-l-2 border-[#041122]/25 pl-4 my-4 text-gray-600 italic"
            >
              <p>
                <strong class="not-italic text-[#A52A2A]"
                  >{{ $t("missa.assembleia_label") }}:</strong
                >
                {{ $t("missa.amem") }}
              </p>
            </div>
            <p class="text-gray-600 leading-relaxed text-justify">
              {{ $t("missa.coleta_encerramento") }}
            </p>
          </div>
        </div>
      </div>

      <div id="liturgia-da-palavra" class="mt-16 scroll-mt-24">
        <h4 class="text-2xl font-bold text-[#041122] font-serif mb-3">
          {{ $t("missa.liturgia_palavra_titulo") }}
        </h4>
        <RichText
          keypath="missa.liturgia_palavra_intro1"
          tag="p"
          class="text-gray-600 leading-relaxed text-justify mb-2"
        />
        <p class="text-gray-600 leading-relaxed text-justify mb-8">
          {{ $t("missa.liturgia_palavra_intro2") }}
        </p>

        <div class="md:border-l-4 md:border-[#D4AF37]/40 md:pl-8 space-y-8">
          <div>
            <h5 class="text-xl font-bold text-[#041122] font-serif mb-3">
              {{ $t("missa.primeira_leitura_titulo") }}
            </h5>
            <RichText
              keypath="missa.primeira_leitura_p1"
              tag="p"
              class="text-gray-600 leading-relaxed text-justify mb-2"
            />
            <p class="text-gray-600 leading-relaxed text-justify mb-2">
              {{ $t("missa.primeira_leitura_p2") }}
            </p>
            <p
              class="text-sm text-gray-500 italic leading-relaxed text-justify mt-3"
            >
              {{ $t("missa.primeira_leitura_obs") }}
            </p>
            <p class="text-gray-600 leading-relaxed mt-3">
              {{ $t("missa.leitor_final") }}
            </p>
            <div
              class="border-l-2 border-[#041122]/25 pl-4 my-4 space-y-1 text-gray-600 italic"
            >
              <p>
                <strong class="not-italic text-[#A52A2A]"
                  >{{ $t("missa.leitor_label") }}:</strong
                >
                {{ $t("missa.palavra_senhor") }}
              </p>
              <p>
                <strong class="not-italic text-[#A52A2A]"
                  >{{ $t("missa.assembleia_label") }}:</strong
                >
                {{ $t("missa.gracas_deus") }}
              </p>
            </div>
          </div>

          <div>
            <h5 class="text-xl font-bold text-[#041122] font-serif mb-3">
              {{ $t("missa.salmo_responsorial_titulo") }}
            </h5>
            <RichText
              keypath="missa.salmo_responsorial_p1"
              tag="p"
              class="text-gray-600 leading-relaxed text-justify mb-2"
            />
            <p class="text-gray-600 leading-relaxed text-justify">
              {{ $t("missa.salmo_responsorial_p2") }}
            </p>
          </div>

          <div>
            <h5 class="text-xl font-bold text-[#041122] font-serif mb-3">
              {{ $t("missa.segunda_leitura_titulo") }}
            </h5>
            <RichText
              keypath="missa.segunda_leitura_p1"
              tag="p"
              class="text-gray-600 leading-relaxed text-justify mb-2"
            />
            <p class="text-gray-600 leading-relaxed text-justify">
              {{ $t("missa.segunda_leitura_p2") }}
            </p>
            <p class="text-gray-600 leading-relaxed mt-3">
              {{ $t("missa.leitor_final") }}
            </p>
            <div
              class="border-l-2 border-[#041122]/25 pl-4 my-4 space-y-1 text-gray-600 italic"
            >
              <p>
                <strong class="not-italic text-[#A52A2A]"
                  >{{ $t("missa.leitor_label") }}:</strong
                >
                {{ $t("missa.palavra_senhor") }}
              </p>
              <p>
                <strong class="not-italic text-[#A52A2A]"
                  >{{ $t("missa.assembleia_label") }}:</strong
                >
                {{ $t("missa.gracas_deus") }}
              </p>
            </div>
          </div>

          <div>
            <h5 class="text-xl font-bold text-[#041122] font-serif mb-3">
              {{ $t("missa.aclamacao_titulo") }}
            </h5>
            <p class="text-gray-600 leading-relaxed text-justify mb-2">
              {{ $t("missa.aclamacao_p1") }}
            </p>
            <RichText
              keypath="missa.aclamacao_p2"
              tag="p"
              class="text-gray-600 leading-relaxed text-justify"
            />
          </div>

          <div>
            <h5 class="text-xl font-bold text-[#041122] font-serif mb-3">
              {{ $t("missa.evangelho_titulo") }}
            </h5>
            <RichText
              keypath="missa.evangelho_p1"
              tag="p"
              class="text-gray-600 leading-relaxed text-justify mb-3"
            />
            <div
              class="border-l-2 border-[#041122]/25 pl-4 my-4 space-y-1 text-gray-600 italic"
            >
              <p>
                <strong class="not-italic text-[#A52A2A]"
                  >{{ $t("missa.sacerdote_diacono_label") }}:</strong
                >
                {{ $t("missa.evangelho_saudacao") }}
              </p>
              <p>
                <strong class="not-italic text-[#A52A2A]"
                  >{{ $t("missa.assembleia_label") }}:</strong
                >
                {{ $t("missa.evangelho_resposta1") }}
              </p>
              <p class="pt-2">
                <strong class="not-italic text-[#A52A2A]"
                  >{{ $t("missa.sacerdote_diacono_label") }}:</strong
                >
                <RichText keypath="missa.evangelho_proclamacao" tag="span" />
              </p>
              <p>
                <strong class="not-italic text-[#A52A2A]"
                  >{{ $t("missa.assembleia_label") }}:</strong
                >
                {{ $t("missa.evangelho_resposta2") }}
              </p>
            </div>
            <div class="mb-3">
              <p class="text-gray-600 leading-relaxed text-justify mb-3">
                {{ $t("missa.evangelho_gesto_p1") }}
              </p>
              <figure
                class="w-full max-w-lg mx-auto my-6 bg-white rounded-lg shadow-md border border-gray-200 p-2"
              >
                <img
                  src="/proclamacao_eva.png"
                  :alt="$t('missa.imagem_proclamacao_evangelho')"
                  class="block w-full h-auto rounded"
                />
                <figcaption
                  class="text-xs text-gray-500 text-center mt-2 mb-1 px-1 italic leading-relaxed"
                >
                  {{ $t("missa.imagem_proclamacao_evangelho") }}
                </figcaption>
              </figure>
              <p
                class="text-sm text-gray-500 italic leading-relaxed text-justify mt-3 mb-3"
              >
                {{ $t("missa.evangelho_sinais_obs_inicio") }}
                <strong class="font-bold text-gray-500">
                  {{ $t("missa.evangelho_sinais_obs_destaque_inicio") }}
                  <NuxtLink
                    to="/ritos"
                    class="text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200"
                  >
                    {{ $t("palavras_chave.sinal_da_cruz") }}
                  </NuxtLink>
                  {{ $t("missa.evangelho_sinais_obs_destaque_fim") }}
                </strong>
                {{ $t("missa.evangelho_sinais_obs_fim") }}
              </p>
              <p class="text-gray-600 leading-relaxed text-justify">
                {{ $t("missa.evangelho_gesto_p2") }}
              </p>
            </div>
            <div class="flow-root">
              <figure
                class="float-right w-32 sm:w-36 ml-4 md:ml-6 mb-2 bg-white rounded-lg shadow-md border border-gray-200 p-2"
              >
                <img
                  src="https://wp.pt.aleteia.org/wp-content/uploads/sites/5/2020/01/web3-gospel-kissing-godong-fr563144b.jpg"
                  :alt="$t('missa.imagem_beijo_evangeliario')"
                  class="block w-full aspect-square rounded object-cover"
                />
                <figcaption
                  class="text-xs text-gray-500 text-center mt-2 mb-1 px-1 italic leading-relaxed"
                >
                  {{ $t("missa.imagem_beijo_evangeliario") }}
                </figcaption>
              </figure>
              <p class="text-gray-600 leading-relaxed mb-2">
                {{ $t("missa.evangelho_final_intro") }}
              </p>
              <div
                class="border-l-2 border-[#041122]/25 pl-4 my-4 space-y-1 text-gray-600 italic"
              >
                <p>
                  <strong class="not-italic text-[#A52A2A]"
                    >{{ $t("missa.sacerdote_diacono_label") }}:</strong
                  >
                  {{ $t("missa.palavra_salvacao") }}
                </p>
                <p>
                  <strong class="not-italic text-[#A52A2A]"
                    >{{ $t("missa.assembleia_label") }}:</strong
                  >
                  {{ $t("missa.evangelho_resposta2") }}
                </p>
              </div>
              <RichText
                keypath="missa.evangelho_beijo"
                tag="p"
                class="text-gray-600 leading-relaxed text-justify"
              />
            </div>
          </div>

          <div>
            <h5 class="text-xl font-bold text-[#041122] font-serif mb-3">
              {{ $t("missa.homilia_titulo") }}
            </h5>
            <p class="text-gray-600 leading-relaxed text-justify mb-2">
              {{ $t("missa.homilia_p1") }}
            </p>
            <p class="text-gray-600 leading-relaxed text-justify">
              {{ $t("missa.homilia_p2") }}
            </p>
          </div>

          <div>
            <h5 class="text-xl font-bold text-[#041122] font-serif mb-3">
              {{ $t("missa.profissao_fe_titulo") }}
            </h5>
            <RichText
              keypath="missa.profissao_fe_p1"
              tag="p"
              class="text-gray-600 leading-relaxed text-justify mb-2"
            />
            <RichText
              keypath="missa.profissao_fe_p2"
              tag="p"
              class="text-gray-600 leading-relaxed text-justify"
            />
          </div>

          <div>
            <h5 class="text-xl font-bold text-[#041122] font-serif mb-3">
              {{ $t("missa.oracao_fieis_titulo") }}
            </h5>
            <p class="text-gray-600 leading-relaxed text-justify mb-2">
              {{ $t("missa.oracao_fieis_p1") }}
            </p>
            <p class="text-gray-600 leading-relaxed text-justify">
              {{ $t("missa.oracao_fieis_p2") }}
            </p>
          </div>
        </div>
      </div>

      <div id="liturgia-eucaristica" class="mt-16 scroll-mt-24">
        <h4 class="text-2xl font-bold text-[#041122] font-serif mb-3">
          {{ $t("missa.liturgia_eucaristica_titulo") }}
        </h4>
        <p class="text-gray-600 leading-relaxed text-justify mb-2">
          {{ $t("missa.liturgia_eucaristica_intro1") }}
        </p>
        <p class="text-gray-600 leading-relaxed text-justify mb-8">
          {{ $t("missa.liturgia_eucaristica_intro2") }}
        </p>

        <div class="md:border-l-4 md:border-[#D4AF37]/40 md:pl-8 space-y-8">
          <div>
            <h5 class="text-xl font-bold text-[#041122] font-serif mb-3">{{ $t("missa.preparacao_oferendas_titulo") }}</h5>
            <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("missa.preparacao_oferendas_p1") }}</p>
            <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("missa.preparacao_oferendas_p2") }}</p>
            <p class="text-sm text-gray-500 italic leading-relaxed text-justify mt-3 mb-3">{{ $t("missa.preparacao_oferendas_obs") }}</p>
            <p class="text-gray-600 leading-relaxed text-justify mb-3">{{ $t("missa.preparacao_oferendas_p3") }}</p>
            <p class="text-gray-600 leading-relaxed">{{ $t("missa.preparacao_oferendas_convite") }}</p>
            <div class="border-l-2 border-[#041122]/25 pl-4 my-4 space-y-2 text-gray-600 italic">
              <p><strong class="not-italic text-[#A52A2A]">{{ $t("missa.sacerdote_label") }}:</strong> {{ $t("missa.orai_irmaos") }}</p>
              <p><strong class="not-italic text-[#A52A2A]">{{ $t("missa.assembleia_label") }}:</strong> {{ $t("missa.receba_senhor") }}</p>
            </div>
            <p class="text-gray-600 leading-relaxed">{{ $t("missa.oracao_oferendas_intro") }}</p>
            <div class="border-l-2 border-[#041122]/25 pl-4 my-4 text-gray-600 italic">
              <p><strong class="not-italic text-[#A52A2A]">{{ $t("missa.assembleia_label") }}:</strong> {{ $t("missa.amem") }}</p>
            </div>
          </div>

          <div>
            <h5 class="text-xl font-bold text-[#041122] font-serif mb-3">{{ $t("missa.oracao_eucaristica_titulo") }}</h5>
            <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("missa.oracao_eucaristica_p1") }}</p>
            <RichText keypath="missa.oracao_eucaristica_p2" tag="p" class="text-gray-600 leading-relaxed text-justify mb-3" />
            <p class="text-gray-600 leading-relaxed">{{ $t("missa.prefacio_intro") }}</p>
            <div class="border-l-2 border-[#041122]/25 pl-4 my-4 space-y-2 text-gray-600 italic">
              <p><strong class="not-italic text-[#A52A2A]">{{ $t("missa.sacerdote_label") }}:</strong> {{ $t("missa.prefacio_saudacao") }}</p>
              <p><strong class="not-italic text-[#A52A2A]">{{ $t("missa.assembleia_label") }}:</strong> {{ $t("missa.prefacio_resposta1") }}</p>
              <p class="pt-1"><strong class="not-italic text-[#A52A2A]">{{ $t("missa.sacerdote_label") }}:</strong> {{ $t("missa.prefacio_coracoes") }}</p>
              <p><strong class="not-italic text-[#A52A2A]">{{ $t("missa.assembleia_label") }}:</strong> {{ $t("missa.prefacio_resposta2") }}</p>
              <p class="pt-1"><strong class="not-italic text-[#A52A2A]">{{ $t("missa.sacerdote_label") }}:</strong> {{ $t("missa.prefacio_gracas") }}</p>
              <p><strong class="not-italic text-[#A52A2A]">{{ $t("missa.assembleia_label") }}:</strong> {{ $t("missa.prefacio_resposta3") }}</p>
            </div>
            <p class="text-gray-600 leading-relaxed text-justify">{{ $t("missa.prefacio_p") }}</p>
          </div>

          <div>
            <h5 class="text-xl font-bold text-[#041122] font-serif mb-3">{{ $t("missa.santo_titulo") }}</h5>
            <RichText keypath="missa.santo_intro" tag="p" class="text-gray-600 leading-relaxed mb-3" />
            <div class="border-l-2 border-[#041122]/25 pl-4 my-4 text-gray-600 italic">
              <p><strong class="not-italic text-[#A52A2A]">{{ $t("missa.assembleia_label") }}:</strong> {{ $t("missa.santo_texto") }}</p>
            </div>
            <p class="text-sm text-gray-500 italic leading-relaxed text-justify mb-3">{{ $t("missa.santo_obs") }}</p>
            <p class="text-gray-600 leading-relaxed text-justify">{{ $t("missa.santo_p") }}</p>
          </div>

          <div>
            <h5 class="text-xl font-bold text-[#041122] font-serif mb-3">{{ $t("missa.epiclese_consagracao_titulo") }}</h5>
            <RichText keypath="missa.epiclese_consagracao_p1" tag="p" class="text-gray-600 leading-relaxed text-justify" />
            <div class="border-l-2 border-[#041122]/25 pl-4 my-4 space-y-1 text-gray-600 italic">
              <p><strong class="not-italic text-[#A52A2A]">{{ $t("missa.sacerdote_label") }}:</strong> {{ $t("missa.epiclese_sacerdote") }}</p>
              <p v-if="$t('missa.epiclese_assembleia').trim()"><strong class="not-italic text-[#A52A2A]">{{ $t("missa.assembleia_label") }}:</strong> {{ $t("missa.epiclese_assembleia") }}</p>
            </div>
            <p class="text-gray-600 leading-relaxed mb-3">{{ $t("missa.consagracao_intro") }}</p>
            <div class="flow-root mb-5">
              <figure class="float-left w-1/3 max-w-40 mr-4 md:mr-6 mb-2 bg-white rounded-lg shadow-md border border-gray-200 p-2">
                <img
                  src="https://img.cancaonova.com/cnimages/canais/uploads/sites/11/2025/05/papa-leao-xiv-consagracao-hostia-missa-31-maio-05-2025-_-foto-reuters-yara-nardi.png"
                  :alt="$t('missa.imagem_elevacao_hostia')"
                  class="w-full aspect-square rounded object-cover"
                />
                <figcaption class="text-xs text-gray-500 text-center mt-2 mb-1 px-1 italic leading-relaxed">
                  {{ $t("missa.imagem_elevacao_hostia") }}
                </figcaption>
              </figure>
              <blockquote class="overflow-hidden border-l-4 border-[#D4AF37] bg-[#D4AF37]/5 px-4 py-3 my-4 font-semibold text-[#041122] leading-relaxed">
                {{ $t("missa.consagracao_corpo") }}
              </blockquote>
              <RichText keypath="missa.consagracao_corpo_gesto" tag="p" class="text-gray-600 leading-relaxed text-justify" />
            </div>
            <div class="flow-root">
              <figure class="float-right w-1/3 max-w-40 ml-4 md:ml-6 mb-2 bg-white rounded-lg shadow-md border border-gray-200 p-2">
                <img
                  src="https://images.a12.com/source/files/c/368922/papa_leao_xiv_ergue_calice_durante_consagracao_-826549_800-533-0-0.jpg"
                  :alt="$t('missa.imagem_elevacao_calice')"
                  class="w-full aspect-square rounded object-cover"
                />
                <figcaption class="text-xs text-gray-500 text-center mt-2 mb-1 px-1 italic leading-relaxed">
                  {{ $t("missa.imagem_elevacao_calice") }}
                </figcaption>
              </figure>
              <blockquote class="overflow-hidden border-l-4 border-[#D4AF37] bg-[#D4AF37]/5 px-4 py-3 my-4 font-semibold text-[#041122] leading-relaxed">
                {{ $t("missa.consagracao_sangue") }}
              </blockquote>
              <RichText keypath="missa.consagracao_sangue_gesto" tag="p" class="text-gray-600 leading-relaxed text-justify" />
            </div>
            <div class="flow-root mt-4">
              <figure class="float-left w-1/3 max-w-36 mr-4 md:mr-6 mb-2 bg-white rounded-lg shadow-md border border-gray-200 p-2">
                <img
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgNjdVXltq7aC38GQnShyphenhyphenb_Tj5swSyiteNaDakDYiswlJjRMevthswk8PWhXlsArTM3XjZnDb853fVsKzBhRRzOrYi9vVuE9RplYAjzvC9I8PAZ6dUktRsqMZaTF7bx037j64b9BJMFLmRH/s1600/carrilhao-4-sinos-c503-codigo-18487-01.jpg"
                  :alt="$t('missa.imagem_sineta_liturgica')"
                  class="w-full aspect-square rounded object-cover"
                />
                <figcaption class="text-xs text-gray-500 text-center mt-2 mb-1 px-1 italic leading-relaxed">
                  {{ $t("missa.imagem_sineta_liturgica") }}
                </figcaption>
              </figure>
              <p class="text-sm text-gray-500 italic leading-relaxed text-justify mb-3">{{ $t("missa.consagracao_obs") }}</p>
              <RichText keypath="missa.transubstanciacao_p" tag="p" class="text-gray-600 leading-relaxed text-justify" />
            </div>
          </div>

          <div>
            <h5 class="text-xl font-bold text-[#041122] font-serif mb-3">{{ $t("missa.misterio_fe_titulo") }}</h5>
            <p class="text-gray-600 leading-relaxed mb-3">{{ $t("missa.misterio_fe_intro") }}</p>
            <div class="border-l-2 border-[#041122]/25 pl-4 my-4 text-gray-600 italic">
              <p><strong class="not-italic text-[#A52A2A]">{{ $t("missa.sacerdote_label") }}:</strong> <RichText keypath="missa.misterio_fe_sacerdote" tag="span" /></p>
            </div>
            <p class="text-gray-600 leading-relaxed">{{ $t("missa.misterio_fe_resposta_intro") }}</p>
            <div class="border-l-2 border-[#041122]/25 pl-4 my-4 text-gray-600 italic">
              <p><strong class="not-italic text-[#A52A2A]">{{ $t("missa.assembleia_label") }}:</strong> {{ $t("missa.misterio_fe_assembleia") }}</p>
            </div>
          </div>

          <div>
            <h5 class="text-xl font-bold text-[#041122] font-serif mb-3">{{ $t("missa.memorial_oferta_titulo") }}</h5>
            <p class="text-gray-600 leading-relaxed mb-3">{{ $t("missa.memorial_oferta_intro") }}</p>
            <div class="border-l-2 border-[#041122]/25 pl-4 my-4 space-y-2 text-gray-600 italic">
              <p><strong class="not-italic text-[#A52A2A]">{{ $t("missa.sacerdote_label") }}:</strong> {{ $t("missa.memorial_oferta_sacerdote") }}</p>
              <p v-if="$t('missa.memorial_oferta_assembleia').trim()"><strong class="not-italic text-[#A52A2A]">{{ $t("missa.assembleia_label") }}:</strong> {{ $t("missa.memorial_oferta_assembleia") }}</p>
            </div>
          </div>

          <div>
            <h5 class="text-xl font-bold text-[#041122] font-serif mb-3">{{ $t("missa.unidade_igreja_titulo") }}</h5>
            <div class="border-l-2 border-[#041122]/25 pl-4 my-4 space-y-2 text-gray-600 italic">
              <p><strong class="not-italic text-[#A52A2A]">{{ $t("missa.sacerdote_label") }}:</strong> {{ $t("missa.unidade_igreja_sacerdote") }}</p>
              <p v-if="$t('missa.unidade_igreja_assembleia').trim()"><strong class="not-italic text-[#A52A2A]">{{ $t("missa.assembleia_label") }}:</strong> {{ $t("missa.unidade_igreja_assembleia") }}</p>
            </div>
          </div>

          <div>
            <h5 class="text-xl font-bold text-[#041122] font-serif mb-3">{{ $t("missa.intercessao_igreja_titulo") }}</h5>
            <div class="border-l-2 border-[#041122]/25 pl-4 my-4 space-y-2 text-gray-600 italic">
              <p><strong class="not-italic text-[#A52A2A]">{{ $t("missa.sacerdote_label") }}:</strong> {{ $t("missa.intercessao_igreja_sacerdote1") }}</p>
              <p class="text-sm text-gray-500">{{ $t("missa.intercessao_igreja_domingo") }}</p>
              <p>{{ $t("missa.intercessao_igreja_sacerdote2") }}</p>
              <p v-if="$t('missa.intercessao_igreja_assembleia').trim()"><strong class="not-italic text-[#A52A2A]">{{ $t("missa.assembleia_label") }}:</strong> {{ $t("missa.intercessao_igreja_assembleia") }}</p>
            </div>
          </div>

          <div>
            <h5 class="text-xl font-bold text-[#041122] font-serif mb-3">{{ $t("missa.intercessao_falecidos_titulo") }}</h5>
            <div class="border-l-2 border-[#041122]/25 pl-4 my-4 space-y-2 text-gray-600 italic">
              <p><strong class="not-italic text-[#A52A2A]">{{ $t("missa.sacerdote_label") }}:</strong> {{ $t("missa.intercessao_falecidos_sacerdote") }}</p>
              <p v-if="$t('missa.intercessao_falecidos_assembleia').trim()"><strong class="not-italic text-[#A52A2A]">{{ $t("missa.assembleia_label") }}:</strong> {{ $t("missa.intercessao_falecidos_assembleia") }}</p>
            </div>
          </div>

          <div>
            <h5 class="text-xl font-bold text-[#041122] font-serif mb-3">{{ $t("missa.comunhao_santos_titulo") }}</h5>
            <div class="border-l-2 border-[#041122]/25 pl-4 my-4 text-gray-600 italic">
              <p><strong class="not-italic text-[#A52A2A]">{{ $t("missa.sacerdote_label") }}:</strong> {{ $t("missa.comunhao_santos_sacerdote") }}</p>
            </div>
          </div>

          <div>
            <h5 class="text-xl font-bold text-[#041122] font-serif mb-3">{{ $t("missa.doxologia_titulo") }}</h5>
            <p class="text-gray-600 leading-relaxed mb-3">{{ $t("missa.doxologia_intro") }}</p>
            <div class="border-l-2 border-[#041122]/25 pl-4 my-4 space-y-2 text-gray-600 italic">
              <p><strong class="not-italic text-[#A52A2A]">{{ $t("missa.sacerdote_label") }}:</strong> {{ $t("missa.doxologia_sacerdote") }}</p>
              <p><strong class="not-italic text-[#A52A2A]">{{ $t("missa.assembleia_label") }}:</strong> {{ $t("missa.amem") }}</p>
            </div>
            <p class="text-gray-600 leading-relaxed text-justify">{{ $t("missa.doxologia_p") }}</p>
          </div>

          <div>
            <h5 class="text-xl font-bold text-[#041122] font-serif mb-3">{{ $t("missa.pai_nosso_titulo") }}</h5>
            <RichText keypath="missa.pai_nosso_intro" tag="p" class="text-gray-600 leading-relaxed text-justify" />
            <p class="text-sm text-gray-500 italic leading-relaxed text-justify mt-3">
              <template v-for="(trecho, indice) in $t('missa.pai_nosso_obs').split('**')" :key="indice">
                <strong v-if="indice % 2" class="font-bold">{{ trecho }}</strong>
                <template v-else>{{ trecho }}</template>
              </template>
            </p>
            <div class="border-l-2 border-[#041122]/25 pl-4 my-4 space-y-2 text-gray-600 italic">
              <p><strong class="not-italic text-[#A52A2A]">{{ $t("missa.sacerdote_label") }}:</strong> {{ $t("missa.pai_nosso_sacerdote1") }}</p>
              <p><strong class="not-italic text-[#A52A2A]">{{ $t("missa.assembleia_label") }}:</strong> {{ $t("missa.pai_nosso_assembleia1") }}</p>
              <p class="pt-1"><strong class="not-italic text-[#A52A2A]">{{ $t("missa.sacerdote_label") }}:</strong> {{ $t("missa.pai_nosso_sacerdote2") }}</p>
              <p><strong class="not-italic text-[#A52A2A]">{{ $t("missa.assembleia_label") }}:</strong> {{ $t("missa.amem") }}</p>
            </div>
            <p class="text-sm text-gray-500 italic leading-relaxed">{{ $t("missa.pai_nosso_amem_obs") }}</p>
          </div>

          <div>
            <h5 class="text-xl font-bold text-[#041122] font-serif mb-3">{{ $t("missa.rito_paz_titulo") }}</h5>
            <p class="text-gray-600 leading-relaxed mb-3">{{ $t("missa.rito_paz_intro") }}</p>
            <div class="border-l-2 border-[#041122]/25 pl-4 my-4 space-y-2 text-gray-600 italic">
              <p><strong class="not-italic text-[#A52A2A]">{{ $t("missa.sacerdote_label") }}:</strong> {{ $t("missa.rito_paz_sacerdote") }}</p>
              <p><strong class="not-italic text-[#A52A2A]">{{ $t("missa.assembleia_label") }}:</strong> {{ $t("missa.rito_paz_assembleia") }}</p>
            </div>
            <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("missa.rito_paz_p1") }}</p>
            <RichText keypath="missa.rito_paz_p2" tag="p" class="text-gray-600 leading-relaxed text-justify" />
          </div>

          <div>
            <h5 class="text-xl font-bold text-[#041122] font-serif mb-3">{{ $t("missa.convite_comunhao_titulo") }}</h5>
            <p class="text-gray-600 leading-relaxed mb-3">{{ $t("missa.convite_comunhao_intro") }}</p>
            <div class="border-l-2 border-[#041122]/25 pl-4 my-4 space-y-2 text-gray-600 italic">
              <p><strong class="not-italic text-[#A52A2A]">{{ $t("missa.sacerdote_label") }}:</strong> {{ $t("missa.convite_comunhao_sacerdote") }}</p>
              <p><strong class="not-italic text-[#A52A2A]">{{ $t("missa.assembleia_label") }}:</strong> {{ $t("missa.convite_comunhao_assembleia") }}</p>
            </div>
            <p class="text-gray-600 leading-relaxed text-justify">{{ $t("missa.convite_comunhao_p") }}</p>
          </div>

          <div>
            <h5 class="text-xl font-bold text-[#041122] font-serif mb-3">{{ $t("missa.comunhao_titulo") }}</h5>
            <div class="flow-root">
              <figure class="float-right w-1/3 max-w-40 ml-4 md:ml-6 mb-2 bg-white rounded-lg shadow-md border border-gray-200 p-2">
                <img
                  src="https://portalefeso.com.br/storage/2025/05/comungar-de-joelhos.webp"
                  :alt="$t('missa.imagem_comunhao_boca')"
                  class="w-full aspect-square rounded object-cover"
                />
                <figcaption class="text-xs text-gray-500 text-center mt-2 mb-1 px-1 italic leading-relaxed">
                  {{ $t("missa.imagem_comunhao_boca") }}
                </figcaption>
              </figure>
              <RichText keypath="missa.comunhao_p1" tag="p" class="text-gray-600 leading-relaxed text-justify mb-3" />
              <p class="text-gray-600 leading-relaxed">{{ $t("missa.comunhao_ministro_intro") }}</p>
              <div class="border-l-2 border-[#041122]/25 pl-4 my-4 space-y-2 text-gray-600 italic">
                <p><strong class="not-italic text-[#A52A2A]">{{ $t("missa.ministro_label") }}:</strong> {{ $t("missa.corpo_cristo") }}</p>
                <p><strong class="not-italic text-[#A52A2A]">{{ $t("missa.fiel_label") }}:</strong> {{ $t("missa.amem") }}</p>
              </div>
              <p class="text-gray-600 leading-relaxed text-justify mb-3">{{ $t("missa.comunhao_amem_p") }}</p>
              <p class="text-gray-600 leading-relaxed text-justify">{{ $t("missa.comunhao_p2") }}</p>
            </div>
            <p class="text-sm text-gray-500 italic leading-relaxed text-justify mt-3">{{ $t("missa.comunhao_obs") }}</p>
            <div class="mt-5 border-l-4 border-[#D4AF37] bg-[#D4AF37]/5 px-4 py-3">
              <RichText keypath="missa.comunhao_sugestao" tag="p" class="text-sm text-gray-600 italic leading-relaxed text-justify font-medium" />
            </div>
          </div>

          <div>
            <h5 class="text-xl font-bold text-[#041122] font-serif mb-3">{{ $t("missa.oracao_pos_comunhao_titulo") }}</h5>
            <p class="text-gray-600 leading-relaxed mb-3">{{ $t("missa.oracao_pos_comunhao_intro") }}</p>
            <div class="border-l-2 border-[#041122]/25 pl-4 my-4 text-gray-600 italic">
              <p><strong class="not-italic text-[#A52A2A]">{{ $t("missa.sacerdote_label") }}:</strong> {{ $t("missa.oremos") }}</p>
            </div>
            <p class="text-gray-600 leading-relaxed text-justify mb-3">{{ $t("missa.oracao_pos_comunhao_p1") }}</p>
            <div class="border-l-2 border-[#041122]/25 pl-4 my-4 text-gray-600 italic">
              <p><strong class="not-italic text-[#A52A2A]">{{ $t("missa.assembleia_label") }}:</strong> {{ $t("missa.amem") }}</p>
            </div>
            <p class="text-gray-600 leading-relaxed text-justify">{{ $t("missa.oracao_pos_comunhao_p2") }}</p>
          </div>
        </div>
      </div>

      <div id="ritos-finais" class="mt-16 scroll-mt-24">
        <h4 class="text-2xl font-bold text-[#041122] font-serif mb-3">
          {{ $t("missa.ritos_finais_titulo") }}
        </h4>
        <p class="text-gray-600 leading-relaxed text-justify mb-2">
          {{ $t("missa.ritos_finais_intro1") }}
        </p>
        <p class="text-gray-600 leading-relaxed text-justify mb-8">
          {{ $t("missa.ritos_finais_intro2") }}
        </p>

        <div class="md:border-l-4 md:border-[#D4AF37]/40 md:pl-8 space-y-8">
          <div>
            <h5 class="text-xl font-bold text-[#041122] font-serif mb-3">{{ $t("missa.avisos_titulo") }}</h5>
            <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("missa.avisos_p1") }}</p>
            <p class="text-gray-600 leading-relaxed text-justify">{{ $t("missa.avisos_p2") }}</p>
          </div>

          <div>
            <h5 class="text-xl font-bold text-[#041122] font-serif mb-3">{{ $t("missa.bencao_final_titulo") }}</h5>
            <p class="text-gray-600 leading-relaxed mb-3">{{ $t("missa.bencao_final_intro1") }}</p>
            <div class="border-l-2 border-[#041122]/25 pl-4 my-4 space-y-2 text-gray-600 italic">
              <p><strong class="not-italic text-[#A52A2A]">{{ $t("missa.sacerdote_label") }}:</strong> {{ $t("missa.prefacio_saudacao") }}</p>
              <p><strong class="not-italic text-[#A52A2A]">{{ $t("missa.assembleia_label") }}:</strong> {{ $t("missa.prefacio_resposta1") }}</p>
            </div>
            <p class="text-gray-600 leading-relaxed mb-3">{{ $t("missa.bencao_final_intro2") }}</p>
            <div class="border-l-2 border-[#041122]/25 pl-4 my-4 space-y-2 text-gray-600 italic">
              <p><strong class="not-italic text-[#A52A2A]">{{ $t("missa.sacerdote_label") }}:</strong> {{ $t("missa.bencao_final_sacerdote") }}</p>
              <p><strong class="not-italic text-[#A52A2A]">{{ $t("missa.assembleia_label") }}:</strong> {{ $t("missa.amem") }}</p>
            </div>
            <p class="text-gray-600 leading-relaxed text-justify">{{ $t("missa.bencao_final_p") }}</p>
          </div>

          <div>
            <h5 class="text-xl font-bold text-[#041122] font-serif mb-3">{{ $t("missa.envio_titulo") }}</h5>
            <RichText keypath="missa.envio_intro" tag="p" class="text-gray-600 leading-relaxed text-justify mb-3" />
            <div class="border-l-2 border-[#041122]/25 pl-4 my-4 space-y-2 text-gray-600 italic">
              <p><strong class="not-italic text-[#A52A2A]">{{ $t("missa.sacerdote_diacono_label") }}:</strong> {{ $t("missa.envio_sacerdote") }}</p>
              <p><strong class="not-italic text-[#A52A2A]">{{ $t("missa.assembleia_label") }}:</strong> {{ $t("missa.envio_assembleia") }}</p>
            </div>
            <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("missa.envio_p1") }}</p>
            <i18n-t keypath="missa.envio_p2" tag="p" class="text-gray-600 leading-relaxed text-justify">
              <template #ite_missa_est><em>“Ite, missa est”</em></template>
            </i18n-t>
          </div>

          <div>
            <h5 class="text-xl font-bold text-[#041122] font-serif mb-3">{{ $t("missa.procissao_saida_titulo") }}</h5>
            <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("missa.procissao_saida_p1") }}</p>
            <p class="text-gray-600 leading-relaxed text-justify">{{ $t("missa.procissao_saida_p2") }}</p>
            <p class="text-sm text-gray-500 italic leading-relaxed text-justify mt-3 mb-3">{{ $t("missa.procissao_saida_obs") }}</p>
            <p class="text-gray-600 leading-relaxed text-justify mb-2">{{ $t("missa.procissao_saida_p3") }}</p>
            <p class="text-gray-600 leading-relaxed text-justify">{{ $t("missa.procissao_saida_p4") }}</p>
          </div>
        </div>
      </div>

      <p class="mt-16 pt-8 border-t border-[#D4AF37]/40 text-gray-600 leading-relaxed text-justify font-medium">
        {{ $t("missa.estrutura_conclusao") }}
      </p>
    </section>

    <section
      id="respostas-liturgicas"
      class="max-w-7xl mx-auto pb-20 px-6 scroll-mt-24"
    >
      <SectionTitle :text="$t('missa.respostas_liturgicas_titulo')" />

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6">
        <template v-for="resposta in respostasLiturgicas" :key="resposta.proclamacao">
          <div
            v-if="$t(resposta.resposta).trim()"
            class="border-l-2 border-[#D4AF37]/60 pl-4 space-y-2"
          >
            <p class="text-gray-600 leading-relaxed italic">
              <strong class="not-italic text-[#A52A2A]">{{ $t(resposta.proclamante) }}:</strong>
              {{ $t(resposta.proclamacao) }}
            </p>
            <p class="text-gray-600 leading-relaxed italic">
              <strong class="not-italic text-[#A52A2A]">{{ $t(resposta.respondente) }}:</strong>
              {{ $t(resposta.resposta) }}
            </p>
            <p v-if="resposta.observacao" class="text-sm text-gray-500 italic">
              {{ $t(resposta.observacao) }}
            </p>
          </div>
        </template>
      </div>

      <div class="mt-16 pt-8 border-t border-[#D4AF37]/40">
        <h4 class="text-2xl font-bold text-[#041122] font-serif mb-3">
          {{ $t("missa.jaculatorias_titulo") }}
        </h4>
        <p class="text-gray-600 leading-relaxed text-justify mb-8">
          {{ $t("missa.jaculatorias_intro") }}
        </p>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6">
          <div
            v-for="jaculatoria in jaculatorias"
            :key="jaculatoria.proclamacao"
            class="border-l-2 border-[#D4AF37]/60 pl-4 space-y-2"
          >
            <p v-if="jaculatoria.observacao" class="text-sm text-gray-500 italic mb-2">
              {{ $t(jaculatoria.observacao) }}
            </p>
            <p class="text-gray-600 leading-relaxed italic">
              <strong class="not-italic text-[#A52A2A]">{{ $t(jaculatoria.proclamante) }}:</strong>
              <RichText :keypath="jaculatoria.proclamacao" tag="span" />
            </p>
            <p class="text-gray-600 leading-relaxed italic">
              <strong class="not-italic text-[#A52A2A]">{{ $t(jaculatoria.respondente) }}:</strong>
              {{ $t(jaculatoria.resposta) }}
            </p>
            <RichText
              v-if="jaculatoria.complemento"
              :keypath="jaculatoria.complemento"
              tag="p"
              class="text-sm text-gray-500 italic"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { Translation } from "vue-i18n";
import { defineComponent, h, resolveComponent } from "vue";

const SectionTitle = defineComponent({
  props: { text: { type: String, required: true } },
  setup: (props) => () =>
    h(
      "h3",
      {
        class:
          "text-3xl font-bold text-[#041122] mb-12 font-serif border-b-2 border-[#D4AF37] pb-3 inline-block",
      },
      props.text,
    ),
});

const TextLink = defineComponent({
  props: {
    to: { type: String, required: true },
    text: { type: String, required: true },
    bold: Boolean,
  },
  setup: (props) => {
    const NuxtLink = resolveComponent("NuxtLink");
    return () =>
      h(
        NuxtLink,
        {
          to: props.to,
          class: [
            "text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200",
            props.bold && "font-bold",
          ],
        },
        () => props.text,
      );
  },
});

const richTextLinks = {
  ministros: ["/ritos", "ministros"],
  sacerdote: ["/ritos", "sacerdote"],
  diacono: ["/ritos", "diacono"],
  presbiterio: ["/ritos", "presbiterio"],
  incenso: ["/ritos", "incenso"],
  cruz_processional: ["/ritos", "cruz_processional"],
  velas_processionais: ["/ritos", "velas_processionais"],
  evangeliario: ["/escritura", "evangeliario"],
  altar: ["/missa", "altar"],
  velas_liturgicas: ["/ritos", "velas_liturgicas"],
  missal: ["/ritos", "missal"],
  missal_romano: ["/ritos", "missal_romano"],
  confesso_deus: ["/oracoes", "confesso_deus"],
  pecados_veniais: ["/catecismo", "pecados_veniais"],
  sacramento_reconciliacao: ["/sacramentos", "sacramento_reconciliacao"],
  pecados_mortais: ["/catecismo", "pecados_mortais"],
  kyrie_eleison: ["/oracoes", "kyrie_eleison"],
  gloria: ["/oracoes", "gloria"],
  santissima_trindade: ["/trindade", "santissima_trindade"],
  pai: ["/trindade", "pai"],
  filho: ["/trindade", "filho"],
  advento: ["/ano-liturgico", "advento"],
  quaresma: ["/ano-liturgico", "quaresma"],
  solenidades: ["/ano-liturgico", "solenidades"],
  festas: ["/ano-liturgico", "festas"],
  calendario_liturgico: ["/ano-liturgico", "calendario_liturgico"],
  sagradas_escrituras: ["/escritura", "sagradas_escrituras"],
  antigo_testamento: ["/escritura", "antigo_testamento"],
  tempo_pascal: ["/ano-liturgico", "tempo_pascal"],
  atos_apostolos: ["/escritura", "atos_apostolos"],
  lecionario_romano: ["/ritos", "lecionario_romano"],
  salmo: ["/escritura", "salmo"],
  cartas_apostolicas: ["/escritura", "cartas_apostolicas"],
  apocalipse: ["/escritura", "apocalipse"],
  sao_mateus: ["/santos", "sao_mateus"],
  sao_marcos: ["/santos", "sao_marcos"],
  sao_lucas: ["/santos", "sao_lucas"],
  sao_joao: ["/santos", "sao_joao"],
  profissao_fe: ["/catecismo", "profissao_fe"],
  credo_apostolos: ["/catecismo", "credo_apostolos"],
  credo_niceno: ["/catecismo", "credo_niceno"],
  concilios_ecumenicos: ["/tradicao-e-magisterio", "concilios_ecumenicos"],
  santo: ["/oracoes", "santo"],
  epiclese: ["/ritos", "epiclese"],
  sineta_liturgica: ["/artigos-religiosos", "sineta_liturgica"],
  transubstanciacao: ["/catecismo", "transubstanciacao"],
  sacramento_ordem: ["/sacramentos", "sacramento_ordem"],
  in_persona_christi: ["/ritos", "in_persona_christi"],
  misterio_fe: ["/milagres-eucaristicos", "misterio_fe"],
  pai_nosso: ["/oracoes", "pai_nosso"],
  cordeiro_deus: ["/oracoes", "cordeiro_deus"],
  eucaristia: ["/sacramentos", "eucaristia"],
  nossa_senhora_aparecida: ["/santos", "nossa_senhora_aparecida"],
  maria: ["/santos", "maria"],
  sao_miguel_arcanjo: ["/santos", "sao_miguel_arcanjo"],
  oracao: ["/oracoes", "oracao"],
};

const RichText = defineComponent({
  inheritAttrs: false,
  props: {
    keypath: { type: String, required: true },
    tag: { type: String, default: "p" },
  },
  setup(props, { attrs }) {
    const { t } = useI18n();
    const NuxtLink = resolveComponent("NuxtLink");
    return () => {
      const slots = Object.fromEntries(
        Object.entries(richTextLinks).map(([slot, [to, key]]) => [
          slot,
          () =>
            h(
              NuxtLink,
              {
                to,
                class:
                  "text-[#9B7322] hover:text-[#D4AF37] hover:underline transition-colors duration-200",
              },
              () => t(`palavras_chave.${key}`),
            ),
        ]),
      );
      return h(
        Translation,
        { keypath: props.keypath, tag: props.tag, ...attrs },
        slots,
      );
    };
  },
});

const respostasLiturgicas = [
  { proclamante: "missa.sacerdote_label", proclamacao: "missa.respostas_sinal_cruz_p", respondente: "missa.assembleia_label", resposta: "missa.respostas_sinal_cruz_r" },
  { proclamante: "missa.sacerdote_label", proclamacao: "missa.respostas_saudacao_p", respondente: "missa.assembleia_label", resposta: "missa.respostas_saudacao_r" },
  { proclamante: "missa.sacerdote_label", proclamacao: "missa.respostas_absolvicao_p", respondente: "missa.assembleia_label", resposta: "missa.respostas_absolvicao_r" },
  { proclamante: "missa.leitor_label", proclamacao: "missa.respostas_palavra_senhor_p", respondente: "missa.assembleia_label", resposta: "missa.respostas_palavra_senhor_r" },
  { proclamante: "missa.sacerdote_diacono_label", proclamacao: "missa.respostas_evangelho_p", respondente: "missa.assembleia_label", resposta: "missa.respostas_evangelho_r" },
  { proclamante: "missa.sacerdote_diacono_label", proclamacao: "missa.respostas_palavra_salvacao_p", respondente: "missa.assembleia_label", resposta: "missa.respostas_palavra_salvacao_r" },
  { proclamante: "missa.sacerdote_label", proclamacao: "missa.respostas_oferendas_p", respondente: "missa.assembleia_label", resposta: "missa.respostas_oferendas_r" },
  { proclamante: "missa.sacerdote_label", proclamacao: "missa.respostas_senhor_convosco_p", respondente: "missa.assembleia_label", resposta: "missa.respostas_senhor_convosco_r" },
  { proclamante: "missa.sacerdote_label", proclamacao: "missa.respostas_coracoes_p", respondente: "missa.assembleia_label", resposta: "missa.respostas_coracoes_r" },
  { proclamante: "missa.sacerdote_label", proclamacao: "missa.respostas_demos_gracas_p", respondente: "missa.assembleia_label", resposta: "missa.respostas_demos_gracas_r" },
  { proclamante: "missa.sacerdote_label", proclamacao: "missa.respostas_epiclese_p", respondente: "missa.assembleia_label", resposta: "missa.respostas_epiclese_r" },
  { proclamante: "missa.sacerdote_label", proclamacao: "missa.respostas_misterio_fe_p", respondente: "missa.assembleia_label", resposta: "missa.respostas_misterio_fe_r" },
  { proclamante: "missa.sacerdote_label", proclamacao: "missa.respostas_memorial_p", respondente: "missa.assembleia_label", resposta: "missa.respostas_memorial_r" },
  { proclamante: "missa.sacerdote_label", proclamacao: "missa.respostas_unidade_p", respondente: "missa.assembleia_label", resposta: "missa.respostas_unidade_r" },
  { proclamante: "missa.sacerdote_label", proclamacao: "missa.respostas_igreja_p", respondente: "missa.assembleia_label", resposta: "missa.respostas_igreja_r" },
  { proclamante: "missa.sacerdote_label", proclamacao: "missa.respostas_falecidos_p", respondente: "missa.assembleia_label", resposta: "missa.respostas_falecidos_r" },
  { proclamante: "missa.sacerdote_label", proclamacao: "missa.respostas_doxologia_p", respondente: "missa.assembleia_label", resposta: "missa.respostas_doxologia_r", observacao: "missa.respostas_doxologia_obs" },
  { proclamante: "missa.sacerdote_label", proclamacao: "missa.respostas_embolismo_p", respondente: "missa.assembleia_label", resposta: "missa.respostas_embolismo_r" },
  { proclamante: "missa.sacerdote_label", proclamacao: "missa.respostas_paz_p", respondente: "missa.assembleia_label", resposta: "missa.respostas_paz_r" },
  { proclamante: "missa.sacerdote_label", proclamacao: "missa.respostas_convite_comunhao_p", respondente: "missa.assembleia_label", resposta: "missa.respostas_convite_comunhao_r" },
  { proclamante: "missa.ministro_label", proclamacao: "missa.respostas_corpo_cristo_p", respondente: "missa.fiel_label", resposta: "missa.respostas_corpo_cristo_r" },
  { proclamante: "missa.sacerdote_label", proclamacao: "missa.respostas_bencao_p", respondente: "missa.assembleia_label", resposta: "missa.respostas_bencao_r" },
  { proclamante: "missa.sacerdote_diacono_label", proclamacao: "missa.respostas_envio_p", respondente: "missa.assembleia_label", resposta: "missa.respostas_envio_r" },
];

const jaculatorias = [
  { observacao: "missa.jaculatoria_santissimo_obs", proclamante: "missa.dirigente_label", proclamacao: "missa.jaculatoria_santissimo_p", respondente: "missa.assembleia_label", resposta: "missa.jaculatoria_santissimo_r" },
  { observacao: "missa.jaculatoria_fatima_obs", proclamante: "missa.dirigente_label", proclamacao: "missa.jaculatoria_fatima_p", respondente: "missa.todos_label", resposta: "missa.jaculatoria_fatima_r" },
  { proclamante: "missa.dirigente_label", proclamacao: "missa.jaculatoria_aparecida_p", respondente: "missa.assembleia_label", resposta: "missa.jaculatoria_rogai_r" },
  { proclamante: "missa.dirigente_label", proclamacao: "missa.jaculatoria_maria_p", respondente: "missa.assembleia_label", resposta: "missa.jaculatoria_maria_r" },
  { observacao: "missa.jaculatoria_coracao_obs", proclamante: "missa.dirigente_label", proclamacao: "missa.jaculatoria_coracao_p", respondente: "missa.assembleia_label", resposta: "missa.jaculatoria_coracao_r" },
  { observacao: "missa.jaculatoria_doxologia_obs", proclamante: "missa.dirigente_label", proclamacao: "missa.jaculatoria_doxologia_p", respondente: "missa.assembleia_label", resposta: "missa.jaculatoria_doxologia_r" },
  { observacao: "missa.jaculatoria_miguel_obs", proclamante: "missa.dirigente_label", proclamacao: "missa.jaculatoria_miguel_p", respondente: "missa.assembleia_label", resposta: "missa.jaculatoria_miguel_r", complemento: "missa.jaculatoria_miguel_completa" },
];

const coresLiturgicas = [
  {
    id: "verde",
    nomeKey: "missa.cor_verde",
    usoKey: "missa.cor_verde_uso",
    textoKey: "missa.cor_verde_texto",
    image:
      "https://s2-umsoplaneta.glbimg.com/ZAu3CGuPd_1p4Ua0TOhYuQxg4Wo=/0x0:1024x683/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_7d5b9b5029304d27b7ef8a7f28b4d70f/internal_photos/bs/2025/V/O/vRbJnIRou9t5lH8Z063w/gettyimages-2224238733.jpg",
    color: "#2F6B3B",
  },
  {
    id: "roxo",
    nomeKey: "missa.cor_roxo",
    usoKey: "missa.cor_roxo_uso",
    textoKey: "missa.cor_roxo_texto",
    image:
      "https://anba.com.br/wp-content/uploads/2025/12/papa-em-beirute-foto-giuseppe-cacace-afp-scaled.jpg",
    color: "#6B3C8E",
  },
  {
    id: "branco",
    nomeKey: "missa.cor_branco",
    usoKey: "missa.cor_branco_uso",
    textoKey: "missa.cor_branco_texto",
    obsKey: "missa.cor_branco_obs",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxVk4p-XHm4sdsEs2-RDBa0i7GZzYhOozSem0jYOgA8jh03Yf7O8ThK25N&s=10",
    color: "#7A6A3A",
  },
  {
    id: "vermelho",
    nomeKey: "missa.cor_vermelho",
    usoKey: "missa.cor_vermelho_uso",
    textoKey: "missa.cor_vermelho_texto",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZUematraHpzdlvw-Lm8ihv8BkdC0bfzltjQEQ6uqEN5jEILIam6LEdYQS&s=10",
    color: "#A52A2A",
  },
  {
    id: "rosa",
    nomeKey: "missa.cor_rosa",
    usoKey: "missa.cor_rosa_uso",
    textoKey: "missa.cor_rosa_texto",
    image:
      "https://media.assettype.com/dn/2025-12-17/w9yvj6e9/DOC.20251214.46199763.12591029.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true",
    color: "#B64E75",
  },
  {
    id: "preto",
    nomeKey: "missa.cor_preto",
    usoKey: "missa.cor_preto_uso",
    textoKey: "missa.cor_preto_texto",
    obsKey: "missa.cor_preto_obs",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjCOn97-FPrlwvB6jFAWWPvC9kNxfTfEdhmNOa-JC1FNvrZNfVGsF33QGEOGZstFkEroZa0TYYuCO2kjhZ1PF5CpS_5hW3D7gikiljiwCjhWtXHHpzvpH0IPG6VhyF9HwP9hyG6qTrM1z4/?imgmax=800",
    color: "#222222",
  },
];
</script>
