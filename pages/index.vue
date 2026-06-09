<template>
  <!-- O contêiner principal que pega a tela inteira. bg-[#FFF9EA] é o fundo amarelo pálido (Vaticano) -->
  <div class="min-h-screen bg-[#FFF9EA] flex flex-col font-sans">
    <!-- ========================================== -->
    <!-- HEADER FIXO                                -->
    <!-- ========================================== -->
    <header class="sticky top-0 z-50 bg-[#041122] text-white shadow-xl">
      <div
        class="relative w-full px-4 md:px-12 h-20 flex items-center justify-between"
      >
        <button
          @click="isMobileSearchOpen = !isMobileSearchOpen"
          class="md:hidden p-2 text-[#D4AF37] hover:text-white transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>

        <NuxtLink
          to="/"
          class="flex items-center gap-4 flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105 absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
        >
          <img
            src="/logosfundo.png"
            alt="Logo MEC"
            class="h-12 md:h-14 w-auto object-contain"
          />
          <span
            class="text-[#D4AF37] font-serif font-bold text-2xl tracking-widest hidden lg:block"
            >MEC</span
          >
        </NuxtLink>

        <div
          class="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md lg:max-w-xl px-4"
        >
          <div class="relative w-full group">
            <input
              type="text"
              placeholder="O que você está buscando?"
              class="w-full bg-white/5 text-white placeholder-gray-400 border border-white/10 rounded-full py-2.5 px-6 focus:outline-none focus:border-[#D4AF37] focus:bg-white/10 transition-all"
            />
            <span
              class="absolute right-5 top-2.5 text-gray-400 group-focus-within:text-[#D4AF37] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div
          class="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-200"
        >
          <div class="relative group py-4">
            <button
              class="flex items-center space-x-2 bg-transparent border border-white/20 rounded px-3 py-1.5 text-white group-hover:border-[#D4AF37] transition-all"
            >
              <span class="text-base">{{ currentLang.flag }}</span>
              <span>{{ currentLang.code }}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-3 h-3 text-gray-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>

            <div
              class="absolute top-full right-0 mt-0 w-28 bg-[#0a1e3f] border border-white/10 rounded-lg shadow-2xl z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden"
            >
              <button
                @click="changeLang('PT', '🇧🇷')"
                class="w-full flex items-center space-x-3 px-4 py-3 hover:bg-white/10 transition"
              >
                <span class="text-base">🇧🇷</span>
                <span class="font-bold text-white">PT</span>
              </button>
              <button
                @click="changeLang('LA', '🇻🇦')"
                class="w-full flex items-center space-x-3 px-4 py-3 hover:bg-white/10 transition"
              >
                <span class="text-base">🇻🇦</span>
                <span class="font-bold text-white">LA</span>
              </button>
              <button
                @click="changeLang('EN', '🇬🇧')"
                class="w-full flex items-center space-x-3 px-4 py-3 hover:bg-white/10 transition"
              >
                <span class="text-base">🇬🇧</span>
                <span class="font-bold text-white">EN</span>
              </button>
            </div>
          </div>

          <NuxtLink to="/livros" class="hover:text-[#D4AF37] transition"
            >Livros</NuxtLink
          >
          <NuxtLink
            to="/artigos"
            class="hover:text-[#D4AF37] transition hidden lg:block"
            >Artigos Religiosos</NuxtLink
          >
          <NuxtLink to="/homilias" class="hover:text-[#D4AF37] transition"
            >Homilias</NuxtLink
          >
          <NuxtLink to="/santo-do-dia" class="hover:text-[#D4AF37] transition"
            >Santo do Dia</NuxtLink
          >
        </div>

        <button
          @click="isMobileMenuOpen = true"
          class="md:hidden p-2 text-[#D4AF37] hover:text-white transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      <div
        v-show="isMobileSearchOpen"
        class="md:hidden absolute top-20 left-0 w-full bg-[#041122] border-t border-white/10 p-4 shadow-xl z-40"
      >
        <div class="relative w-full">
          <input
            type="text"
            placeholder="O que você está buscando?"
            class="w-full bg-white/5 text-white placeholder-gray-400 border border-[#D4AF37]/50 rounded-full py-2.5 px-6 focus:outline-none focus:border-[#D4AF37] transition-all"
          />
        </div>
      </div>
    </header>

    <div
      v-if="isMobileMenuOpen"
      class="fixed inset-0 z-[100] flex justify-end md:hidden"
    >
      <div
        @click="isMobileMenuOpen = false"
        class="absolute inset-0 bg-black/80 backdrop-blur-sm"
      ></div>

      <div
        class="relative w-72 bg-[#041122] h-full shadow-2xl flex flex-col pt-6 border-l border-[#D4AF37]/20"
      >
        <div
          class="flex items-center justify-between px-6 pb-6 border-b border-white/10"
        >
          <div class="flex items-center gap-3">
            <img
              src="/logosfundo.png"
              alt="Logo MEC"
              class="h-10 w-auto object-contain"
            />
            <span
              class="text-[#D4AF37] font-serif font-bold text-xl tracking-widest"
              >MEC</span
            >
          </div>
          <button
            @click="isMobileMenuOpen = false"
            class="text-gray-400 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div class="px-6 py-6 border-b border-white/10">
          <p class="text-xs text-gray-500 mb-4 uppercase tracking-widest">
            Idioma Atual: {{ currentLang.code }}
          </p>
          <div class="flex space-x-6">
            <button
              @click="changeLang('PT', '🇧🇷')"
              class="flex flex-col items-center hover:scale-110 transition group"
            >
              <span class="text-3xl mb-1">🇧🇷</span>
              <span class="text-xs text-gray-400 group-hover:text-white"
                >PT</span
              >
            </button>
            <button
              @click="changeLang('LA', '🇻🇦')"
              class="flex flex-col items-center hover:scale-110 transition group"
            >
              <span class="text-3xl mb-1">🇻🇦</span>
              <span class="text-xs text-gray-400 group-hover:text-white"
                >LA</span
              >
            </button>
            <button
              @click="changeLang('EN', '🇬🇧')"
              class="flex flex-col items-center hover:scale-110 transition group"
            >
              <span class="text-3xl mb-1">🇬🇧</span>
              <span class="text-xs text-gray-400 group-hover:text-white"
                >EN</span
              >
            </button>
          </div>
        </div>

        <div class="flex flex-col px-6 py-6 space-y-6 text-lg font-serif">
          <NuxtLink
            to="/"
            @click="isMobileMenuOpen = false"
            class="text-white hover:text-[#D4AF37] transition"
            >Início</NuxtLink
          >
          <NuxtLink
            to="/livros"
            @click="isMobileMenuOpen = false"
            class="text-white hover:text-[#D4AF37] transition"
            >Livros</NuxtLink
          >
          <NuxtLink
            to="/artigos"
            @click="isMobileMenuOpen = false"
            class="text-white hover:text-[#D4AF37] transition"
            >Artigos Religiosos</NuxtLink
          >
          <NuxtLink
            to="/homilias"
            @click="isMobileMenuOpen = false"
            class="text-white hover:text-[#D4AF37] transition"
            >Homilias</NuxtLink
          >
          <NuxtLink
            to="/santo-do-dia"
            @click="isMobileMenuOpen = false"
            class="text-white hover:text-[#D4AF37] transition"
            >Santo do Dia</NuxtLink
          >
        </div>
      </div>
    </div>

    <!-- ========================================== -->
    <!-- CORPO DA PÁGINA                            -->
    <!-- ========================================== -->
    <main class="flex-grow">
      <!-- ========================================== -->
      <!-- CARROSSEL                                  -->
      <!-- ========================================== -->
      <section
        class="relative w-full h-[60vh] md:h-[75vh] bg-[#041122] overflow-hidden group"
      >
        <img
          :src="slides[currentSlide].image"
          class="absolute inset-0 w-full h-full object-cover"
          :class="slides[currentSlide].positionClass || 'object-center'"
          alt="Banner Principal"
        />

        <!-- Degrade -->
        <div
          class="absolute inset-0 z-10 transition-all duration-700"
          :class="
            slides[currentSlide].overlayClass ||
            'bg-gradient-to-t from-[#041122] via-[#041122]/60 to-transparent md:bg-gradient-to-r md:from-[#041122] md:via-[#041122]/85 md:to-transparent'
          "
        ></div>

        <!-- CONTEÚDO (Texto na esquerda) -->
        <!-- pl-16 para o texto não ficar embaixo da seta -->

        <div
          v-if="slides[currentSlide].logo"
          class="absolute inset-0 z-20 pointer-events-none"
        >
          <div class="w-full flex justify-center pt-8 md:hidden">
            <img
              :src="slides[currentSlide].logo"
              class="h-28 w-auto object-contain drop-shadow-2xl"
            />
          </div>
          <div
            class="hidden md:flex absolute right-0 top-0 w-1/2 h-full items-center justify-center p-12"
          >
            <img
              :src="slides[currentSlide].logo"
              class="max-h-[50vh] w-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        <div
          class="relative z-30 w-full h-full flex flex-col justify-end items-center text-center pb-20 px-6 md:justify-center md:items-start md:text-left md:pl-24 md:pb-0 md:w-1/2"
        >
          <div class="max-w-xl drop-shadow-lg">
            <h2
              class="text-xs font-bold text-[#D4AF37] mb-2 uppercase tracking-widest"
            >
              {{ slides[currentSlide].subtitle }}
            </h2>
            <h1
              class="text-3xl md:text-6xl font-bold font-serif text-white mb-4 md:mb-6 leading-tight"
            >
              {{ slides[currentSlide].title }}
            </h1>
            <p
              class="text-sm md:text-lg text-gray-300 mb-6 md:mb-8 leading-relaxed max-w-md md:max-w-none"
            >
              {{ slides[currentSlide].description }}
            </p>

            <NuxtLink
              :to="slides[currentSlide].link"
              class="inline-block bg-white text-[#041122] px-8 py-2.5 md:py-3 rounded-full font-bold hover:bg-[#D4AF37] hover:text-white transition-all duration-300 shadow-xl pointer-events-auto"
            >
              {{ slides[currentSlide].buttonText }}
            </NuxtLink>
          </div>
        </div>

        <!-- SETAS DE NAVEGAÇÃO -->
        <!-- Movi para left-4 para não ficar tão em cima do texto -->
        <button
          @click="prevSlide"
          class="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white/40 md:text-white/60 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 z-40"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-10 h-10 md:w-14 md:h-14 drop-shadow-lg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <button
          @click="nextSlide"
          class="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white/40 md:text-white/60 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 z-40"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-10 h-10 md:w-14 md:h-14 drop-shadow-lg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>

        <!-- BOLINHAS (Centralizadas) -->
        <div
          class="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-40"
        >
          <button
            v-for="(_, index) in slides"
            :key="index"
            @click="currentSlide = index"
            class="w-2.5 h-2.5 rounded-full transition-all"
            :class="currentSlide === index ? 'bg-white w-7' : 'bg-white/40'"
          ></button>
        </div>
      </section>

      <!-- GRID DE TÓPICOS (A "LOJINHA") -->
      <section class="max-w-7xl mx-auto py-20 px-6">
        <h3
          class="text-3xl font-bold text-[#041122] mb-12 font-serif border-b-2 border-[#D4AF37] pb-3 inline-block"
        >
          Explore a Fé
        </h3>

        <div class="flex flex-wrap justify-center gap-4 lg:gap-6">
          <NuxtLink
            v-for="(item, index) in topics"
            :key="index"
            :to="item.link"
            class="bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 p-3 lg:p-4 flex flex-col items-center text-center border border-gray-100 group cursor-pointer w-[calc(50%-0.5rem)] md:w-[calc(33.33%-0.66rem)] lg:w-[calc(100%/7-1.2857rem)]"
          >
            <div
              class="w-full aspect-square mb-3 lg:mb-4 rounded-xl overflow-hidden bg-gray-100 relative"
            >
              <img
                :src="item.image"
                :alt="item.name"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <span
              class="font-bold text-[#041122] tracking-wide text-xs lg:text-sm leading-tight"
            >
              {{ item.name }}
            </span>
          </NuxtLink>
        </div>
      </section>

      <!-- MAPA DE PARÓQUIAS -->
      <section class="max-w-7xl mx-auto py-12 px-6 mb-20">
        <div class="flex flex-col md:flex-row items-end justify-between mb-8">
          <h3
            class="text-3xl font-bold text-[#041122] font-serif border-b-2 border-[#D4AF37] pb-3 inline-block"
          >
            Encontre a Igreja
          </h3>
          <p class="text-gray-500 text-sm max-w-sm text-right hidden md:block">
            Permita o acesso à sua localização para encontrarmos paróquias,
            mosteiros e santuários perto de você.
          </p>
        </div>

        <div class="w-full h-[600px] flex flex-col md:flex-row gap-6 relative">
          <div
            class="flex-1 rounded-3xl shadow-inner border border-gray-300 relative overflow-hidden"
          >
            <ClientOnly>
              <GoogleMap
                :api-key="GOOGLE_API_KEY"
                style="width: 100%; height: 100%"
                :center="mapCenter"
                :zoom="14"
                :disableDefaultUI="true"
              >
                <Marker
                  :options="{ position: mapCenter }"
                  @click="simularCliqueNoMapa"
                />
              </GoogleMap>

              <template #fallback>
                <div
                  class="absolute inset-0 bg-gray-200 flex flex-col items-center justify-center text-gray-400"
                >
                  <p class="font-medium">Carregando mapa...</p>
                </div>
              </template>
            </ClientOnly>
          </div>

          <div
            v-if="selectedPlace"
            class="w-full md:w-[380px] h-full bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-fade-in-right shrink-0"
          ></div>
        </div>
      </section>

      <section class="max-w-7xl mx-auto py-12 px-6 mb-20">
        <h3
          class="text-3xl font-bold text-[#041122] mb-8 font-serif border-b-2 border-[#D4AF37] pb-3 inline-block"
        >
          Sobre nós
        </h3>
        <section class="max-w-5xl mx-auto px-6 mb-24">
          <div
            class="bg-gradient-to-br from-[#041122] to-[#0a1e3f] rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row items-center border border-white/10"
          >
            <div
              class="w-full md:w-1/3 h-64 md:h-auto relative bg-[#D4AF37]/10 flex-shrink-0"
            >
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb046ebf?q=80&w=1000&auto=format&fit=crop"
                alt="Isaac"
                class="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay"
              />
              <div class="absolute inset-0 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  class="w-20 h-20 text-[#D4AF37] opacity-50"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                  />
                </svg>
              </div>
            </div>

            <div class="w-full md:w-2/3 p-8 md:p-12 text-center md:text-left">
              <h4
                class="text-[#D4AF37] font-bold text-sm uppercase tracking-widest mb-2"
              >
                Quem está por trás do M.E.C?
              </h4>
              <h3 class="text-3xl font-bold text-white font-serif mb-4">
                Sobre "nós" (ou só eu mesmo)
              </h3>

              <p
                class="text-gray-300 mb-4 leading-relaxed text-sm md:text-base"
              >
                Para ser sincero, o "Sobre Nós" no menu principal é só para
                deixar o site com cara de portal corporativo. Na verdade, não
                existe uma grande equipe aqui nos bastidores.
              </p>

              <NuxtLink
                to="/sobre"
                class="inline-flex items-center space-x-2 text-white hover:text-[#D4AF37] transition-colors font-medium group"
              >
                <span>Ler história completa, ver fotos e playlist</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </section>
      </section>
    </main>

    <!-- ========================================== -->
    <!-- RODAPÉ (FOOTER) DE PONTA A PONTA           -->
    <!-- ========================================== -->
    <footer class="bg-[#041122] text-gray-300 pt-16 pb-8 px-6 md:px-12 w-full">
      <div
        class="w-full flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 pb-12 mb-8"
      >
        <!-- Links da Esquerda -->
        <div class="flex flex-col space-y-4 mb-8 md:mb-0">
          <a
            href="#"
            class="hover:text-[#D4AF37] transition font-medium tracking-wide"
            >Contato</a
          >
          <a
            href="#"
            class="hover:text-[#D4AF37] transition font-medium tracking-wide"
            >Dúvidas Frequentes</a
          >
          <a
            href="#"
            class="hover:text-[#D4AF37] transition font-medium tracking-wide"
            >Instagram</a
          >
          <span class="text-xs text-gray-500 mt-4"
            >* Homilias disponibilizadas sob licença ao Pe. Mário.</span
          >
        </div>

        <!-- Logo e Lema da Direita (Marcas d'água) -->
        <div class="flex flex-col items-end">
          <img
            src="~/assets/logosfundo.png"
            alt="MEC Logo"
            class="h-32 w-auto opacity-30 hover:opacity-100 transition-opacity duration-500"
          />
          <span
            class="text-[#D4AF37] font-serif font-bold text-xl tracking-widest mt-2 opacity-30"
            >TRADITIO • SCRIPTURA • MAGISTERIUM</span
          >
        </div>
      </div>

      <!-- Direitos Autorais -->
      <div
        class="text-center text-xs text-gray-600 uppercase tracking-widest font-semibold"
      >
        &copy; 2026 Mea Ecclesia Catholica. Todos os direitos reservados.
      </div>
    </footer>
  </div>
</template>

<script setup>
// Importação de funções cruciais do Vue 3
// ref: Cria variáveis reativas (se o valor mudar, a tela atualiza na hora)
// onMounted: Executa código assim que a página termina de carregar
// onUnmounted: Limpa a bagunça quando o usuário sai da página
import { ref, onMounted, onUnmounted } from "vue";
// Importando as ferramentas do mapa
import { GoogleMap, Marker, CustomControl } from 'vue3-google-map'

// VARIÁVEIS DE ESTADO
const currentSlide = ref(0); // Começa no slide índice 0 (primeira imagem)
const slideInterval = ref(null); // Guarda o temporizador do carrossel para podermos pausá-lo depois
const isMobileMenuOpen = ref(false);
const isLangOpen = ref(false);
const isMobileSearchOpen = ref(false);

const currentLang = ref({ code: "PT", flag: "🇧🇷" });


const changeLang = (code, flag) => {
  currentLang.value = { code, flag };
  isMobileMenuOpen.value = false; // Fecha o menu lateral do celular ao escolher o idioma
};

// Substituir pela chave
const GOOGLE_API_KEY = "CHAVE_AQUI"

// Posição inicial do mapa (Ex: Centro de BH)
const mapCenter = { lat: -19.9166813, lng: -43.9344931 }

// Controle do lugar selecionado
const selectedPlace = ref(null)

// BANCO DE DADOS FALSO DO CARROSSEL
const slides = [
  {
    title: "Quem Somos?",
    subtitle: "Mea Ecclesia Catholica",
    description:
      "Um pequeno espaço dedicado a ajudar as pessoas a compreenderem e amarem a Igreja, sua doutrina e sua história.",
    buttonText: "Sobre nós",
    link: "/sobre",
    image: "/basilica1.jpg",
    logo: "/logosfundo.png",
    overlayClass:
      "bg-gradient-to-t from-[#041122] via-[#041122]/90 to-transparent md:bg-gradient-to-r md:from-[#041122] md:via-[#041122]/95 md:via-65% md:to-[#041122]/40",
    positionClass: "md:object-[center_60%]",
  },
  {
    title: "Os Tesouros da Tradição",
    subtitle: "Patrística e Magistério",
    description:
      "Entenda o Catecismo, os escritos dos Padres da Igreja e as verdades eternas guardadas por mais de dois milênios.",
    buttonText: "Aprofundar Estudos",
    link: "/patristica",
    image: "/patristica.png",
    positionClass: "md:object-[center_50%]",
  },
  {
    title: "A Santa Missa",
    subtitle: "Liturgia",
    description:
      "Veja aqui o que acontece no Santo Sacrifício do Altar e compreenda as respostas litúrgicas.",
    buttonText: "Ver aqui",
    link: "/missa",
    image: "/mass.jpg",
    positionClass: "md:object-[center_60%]",
  },
  {
    title: "O Santo do Dia",
    subtitle: "Exemplos de Fé",
    description:
      "Descubra a história de homens e mulheres que doaram suas vidas por Cristo e encontre inspiração para a sua caminhada diária.",
    buttonText: "Veja qual",
    link: "/santos",
    image: "/santo.png",
    positionClass: "md:object-[center_40%]",
  },
  {
    title: "Homilia Diária",
    subtitle: "Formação",
    description:
      "Aprofunde sua fé com a homilia diária, comentada pelo Pe. Mario Sartori.",
    buttonText: "Assistir",
    link: "/homilias",
    image: "/PeMario.png",
    positionClass: "object-[right_80%] md:object-[center_40%]",
  },
];

// BANCO DE DADOS FALSO DA "LOJINHA" (Exploração)
const topics = [
  // --- O NÚCLEO (Deus e Liturgia) ---
  {
    name: "Trindade",
    image:
      "https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2013/05/formacao_santissima-trindade-misterio-de-comunhao.jpg",
    link: "/trindade",
  },
  {
    name: "Sacramentos",
    image:
      "http://blog.cancaonova.com/felipeaquino/files/2007/12/Os-Sete-Sacramentos.jpg",
    link: "/sacramentos",
  },
  {
    name: "Missa",
    image: "/mass.jpg",
    link: "/missa",
  },
  {
    name: "Milagres Eucarísticos",
    image: "/Eucaristia.jpg",
    link: "/milagres",
  },

  // --- A PALAVRA E A AUTORIDADE ---
  {
    name: "Escritura",
    image: "/biblia.png",
    link: "/escritura",
  },
  {
    name: "Sucessão Apostólica",
    image:
      "https://i0.wp.com/nossasagradafamilia.com.br/wp-content/uploads/2025/04/57686-hist25c325b3ria-de-s25c325a3o-pedro-ap25c325b3stolo.jpg?fit=1200%2C800&ssl=1",
    link: "/sucessao-apostolica",
  },
  {
    name: "Tradição e Magistério",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/61/Disputa_del_Sacramento_%28Rafael%29.jpg",
    link: "/tradicao-e-magisterio",
  },
  {
    name: "O Papado",
    image:
      "https://www.stfrancisraleigh.org/wp-content/uploads/2025/06/Pope_Resized.png",
    link: "/papado",
  },

  // --- HISTÓRIA, RITOS E FILOSOFIA ---
  {
    name: "Igrejas Orientais",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/52/Jesus-Christ-from-Hagia-Sophia.jpg",
    link: "/igrejas-orientais",
  },
  {
    name: "Concílios e Ritos",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Pasquale_Cati_-_Concile_de_Trente.jpg",
    link: "/concilios-e-ritos",
  },
  {
    name: "História",
    image:
      "https://osaopaulo.org.br/wp-content/uploads/2025/10/Entrega_de_las_llaves_a_San_Pedro_Perugino-1024x618.jpg",
    link: "/historia",
  },
  {
    name: "Patrística",
    image: "/patristica.png",
    link: "/patristica",
  },
  {
    name: "Escolástica",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c9/Laurentius_de_Voltolina_Vorlesung_vor_Studenten_-_Min_1233_-_Kupferstichkabinett_Berlin.jpg",
    link: "/escolastica",
  },
  {
    name: "Ciência",
    image: "/lemaitre.jpg",
    link: "/ciencia",
  },

  // --- A DEFESA DA FÉ (Apologética) ---
  {
    name: "Apologética",
    image:
      "https://cdn.royalacademy.org.uk/images/00tajd9lkku7nota.jpg?format=auto&amp;width=1200",
    link: "/apologetica",
  },
  {
    name: "Dogmas Marianos",
    image:
      "https://content.ngv.vic.gov.au/retrieve.php?size=1280&type=image&vernonID=4202",
    link: "/dogmas-marianos",
  },
  {
    name: "Intercessão e Mediação",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/75/Titian_-_Madonna_of_Mercy%2C_1573.jpg",
    link: "/intercessao-e-mediacao",
  },
  {
    name: "Imagens e Idolatria",
    image:
      "https://thumbs.dreamstime.com/b/close-up-michelangelo-s-iconic-marble-sculpture-masterpiece-pieta-vatican-city-rome-italy-august-close-up-400884422.jpg",
    link: "/imagens-e-idolatria",
  },

  // --- VIDA PRÁTICA E DEVOÇÃO ---
  {
    name: "Catecismo",
    image: "/catecismo.png",
    link: "/catecismo",
  },
  {
    name: "Orações",
    image: "/oracao.jpg",
    link: "/oracoes",
  },
  {
    name: "Rosário",
    image: "/rosario.jpg",
    link: "/rosario",
  },
];

// FUNÇÕES DO CARROSSEL
// Vai para o próximo slide. O módulo '%' garante que, ao chegar no final, volte para o 0
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length;
  resetTimer(); // Zera o tempo automático pra não passar dois slides de uma vez
};

// Volta um slide. Se estiver no 0, joga para o último slide da lista.
const prevSlide = () => {
  currentSlide.value =
    currentSlide.value === 0 ? slides.length - 1 : currentSlide.value - 1;
  resetTimer();
};

// Inicia a troca de imagem a cada 10000 milissegundos (10 segundos)
const startTimer = () => {
  slideInterval.value = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length;
  }, 10000);
};

// Interrompe o timer atual e começa de novo (usado quando o usuário clica nas setas)
const resetTimer = () => {
  clearInterval(slideInterval.value);
  startTimer();
};

// CICLO DE VIDA DO VUE
// Assim que a página termina de renderizar, liga o carrossel automático
onMounted(() => {
  startTimer();
});

// Quando o usuário for para outra página (como a da Missa), desliga o carrossel
// para não consumir memória do navegador atoa
onUnmounted(() => {
  clearInterval(slideInterval.value);
});
</script>
