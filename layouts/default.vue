<template>
  <div class="min-h-screen bg-[#FFF9EA] flex flex-col font-sans">
    <header class="sticky top-0 z-50 bg-[#041122] text-white shadow-xl">
      <div class="relative w-full px-4 md:px-12 h-20 flex items-center justify-between">
        
        <button
          @click="isMobileSearchOpen = !isMobileSearchOpen"
          class="relative z-50 lg:hidden p-2 text-[#D4AF37] hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </button>

        <NuxtLink
          to="/"
          class="z-50 flex items-center gap-4 flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105 absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0"
        >
          <img src="/assets/logosfundo.png" alt="Logo MEC" class="h-10 md:h-12 w-auto object-contain" />
          <span class="text-[#D4AF37] font-serif font-bold text-xl md:text-2xl tracking-widest hidden xl:block">MEC</span>
        </NuxtLink>

        <div class="hidden lg:block flex-1 max-w-sm xl:max-w-xl px-4 z-40">
          <div class="relative w-full group">
            <input
              type="text"
              :placeholder="$t('header.busca')"
              class="w-full bg-white/5 text-white placeholder-gray-400 border border-white/10 rounded-full py-2.5 px-6 focus:outline-none focus:border-[#D4AF37] transition-all"
            />
            <span class="absolute right-5 top-2.5 text-gray-400 group-focus-within:text-[#D4AF37] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </span>
          </div>
        </div>

        <div class="hidden lg:flex items-center space-x-4 xl:space-x-6 text-sm font-medium text-gray-200 z-50">
          <div class="relative py-4">
            <button
              @click="isLangOpen = !isLangOpen"
              class="flex items-center space-x-2 bg-transparent border border-white/20 rounded px-3 py-1.5 text-white hover:border-[#D4AF37] transition-all"
            >
              <span class="text-base">{{ currentLangDisplay.flag }}</span>
              <span>{{ currentLangDisplay.code }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3 text-gray-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            <div
              v-show="isLangOpen"
              class="absolute top-full right-0 mt-2 w-28 bg-[#0a1e3f] border border-white/10 rounded-lg shadow-2xl z-[9999] overflow-hidden"
            >
              <button @click="changeLang('pt'); isLangOpen = false;" class="w-full flex items-center space-x-3 px-4 py-3 hover:bg-white/10 transition">
                <span class="text-base">🇧🇷</span><span class="font-bold text-white">PT</span>
              </button>
              <button @click="changeLang('la'); isLangOpen = false;" class="w-full flex items-center space-x-3 px-4 py-3 hover:bg-white/10 transition">
                <span class="text-base">🇻🇦</span><span class="font-bold text-white">LA</span>
              </button>
              <button @click="changeLang('en'); isLangOpen = false;" class="w-full flex items-center space-x-3 px-4 py-3 hover:bg-white/10 transition">
                <span class="text-base">🇬🇧</span><span class="font-bold text-white">EN</span>
              </button>
            </div>
          </div>

          <NuxtLink to="/livros" class="hover:text-[#D4AF37] transition">{{ $t("menu.livros") }}</NuxtLink>
          <NuxtLink to="/artigos-religiosos" class="hover:text-[#D4AF37] transition">{{ $t("menu.artigos") }}</NuxtLink>
          <NuxtLink to="/estrutura" class="hover:text-[#D4AF37] transition">{{ $t("menu.hierarquia") }}</NuxtLink>
          <NuxtLink to="/santo-do-dia" class="hover:text-[#D4AF37] transition">{{ $t("menu.santo_dia") }}</NuxtLink>

          <div v-if="!isHome" class="relative py-4 -my-4">
            <button
              type="button"
              class="p-1.5 text-[#D4AF37] hover:text-white transition-colors"
              :aria-expanded="isTopicsOpen"
              aria-label="Abrir todos os temas"
              @click="isTopicsOpen = !isTopicsOpen; isLangOpen = false"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <div
              v-show="isTopicsOpen"
              class="absolute top-full right-0 mt-2 w-[min(56rem,calc(100vw-3rem))] max-h-[70vh] overflow-y-auto rounded-xl border border-white/10 bg-[#0a1e3f] p-5 shadow-2xl z-[70]"
            >
              <p class="mb-4 font-serif text-lg font-bold text-[#D4AF37]">
                {{ $t("home.explore_title") }}
              </p>
              <div class="grid grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-1">
                <NuxtLink
                  v-for="topic in topicLinks"
                  :key="topic.link"
                  :to="topic.link"
                  class="rounded-md px-3 py-2 text-sm text-gray-200 hover:bg-white/10 hover:text-[#D4AF37] transition-colors"
                  @click="isTopicsOpen = false"
                >
                  {{ topic.name }}
                </NuxtLink>
              </div>
              <div class="mt-4 border-t border-white/10 pt-4">
                <NuxtLink
                  to="/faq"
                  class="block rounded-md px-3 py-2 text-sm font-semibold text-[#D4AF37] hover:bg-white/10 hover:text-white transition-colors"
                  @click="isTopicsOpen = false"
                >
                  {{ $t("home.faq_btn") }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <button
          @click="isMobileMenuOpen = true"
          class="relative z-50 lg:hidden p-2 text-[#D4AF37] hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      <div v-show="isMobileSearchOpen" class="lg:hidden w-full px-4 pb-4 bg-[#041122] border-t border-white/5 animate-in slide-in-from-top-2 duration-200">
        <div class="relative w-full group pt-4">
          <input
            type="text"
            :placeholder="$t('header.busca')"
            class="w-full bg-white/5 text-white placeholder-gray-400 border border-white/10 rounded-full py-2.5 px-6 focus:outline-none focus:border-[#D4AF37] transition-all"
          />
          <span class="absolute right-5 top-6 text-gray-400 group-focus-within:text-[#D4AF37] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </span>
        </div>
      </div>
    </header>

    <button
      v-if="isTopicsOpen"
      type="button"
      class="fixed inset-0 z-40 hidden lg:block cursor-default"
      aria-label="Fechar menu de temas"
      @click="isTopicsOpen = false"
    ></button>

    <div v-if="isMobileMenuOpen" class="fixed inset-0 z-[100] flex justify-end lg:hidden">
      <div @click="isMobileMenuOpen = false" class="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

      <div class="relative w-72 bg-[#041122] h-full shadow-2xl flex flex-col pt-6 border-l border-[#D4AF37]/20">
        <div class="flex items-center justify-between px-6 pb-6 border-b border-white/10">
          <div class="flex items-center gap-3">
            <img src="/assets/logosfundo.png" alt="Logo MEC" class="h-10 w-auto object-contain" />
            <span class="text-[#D4AF37] font-serif font-bold text-xl tracking-widest">MEC</span>
          </div>
          <button @click="isMobileMenuOpen = false" class="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="px-6 py-6 border-b border-white/10">
          <p class="text-xs text-gray-500 mb-4 uppercase tracking-widest">
            {{ $t("header.idioma_atual") }}: {{ currentLangDisplay.code }}
          </p>
          <div class="flex space-x-6">
            <button @click="changeLang('pt')" class="flex flex-col items-center hover:scale-110 transition group">
              <span class="text-3xl mb-1">🇧🇷</span><span class="text-xs text-gray-400 group-hover:text-white">PT</span>
            </button>
            <button @click="changeLang('la')" class="flex flex-col items-center hover:scale-110 transition group">
              <span class="text-3xl mb-1">🇻🇦</span><span class="text-xs text-gray-400 group-hover:text-white">LA</span>
            </button>
            <button @click="changeLang('en')" class="flex flex-col items-center hover:scale-110 transition group">
              <span class="text-3xl mb-1">🇬🇧</span><span class="text-xs text-gray-400 group-hover:text-white">EN</span>
            </button>
          </div>
        </div>

        <div class="flex-1 overflow-y-auto flex flex-col px-6 py-6 space-y-6 text-lg font-serif">
          <NuxtLink to="/" @click="isMobileMenuOpen = false" class="text-white hover:text-[#D4AF37] transition">{{ $t("menu.inicio") }}</NuxtLink>
          <NuxtLink to="/livros" @click="isMobileMenuOpen = false" class="text-white hover:text-[#D4AF37] transition">{{ $t("menu.livros") }}</NuxtLink>
          <NuxtLink to="/artigos-religiosos" @click="isMobileMenuOpen = false" class="text-white hover:text-[#D4AF37] transition">{{ $t("menu.artigos") }}</NuxtLink>
          <NuxtLink to="/estrutura" @click="isMobileMenuOpen = false" class="text-white hover:text-[#D4AF37] transition">{{ $t("menu.hierarquia") }}</NuxtLink>
          <NuxtLink to="/santo-do-dia" @click="isMobileMenuOpen = false" class="text-white hover:text-[#D4AF37] transition">{{ $t("menu.santo_dia") }}</NuxtLink>

          <div v-if="!isHome" class="border-t border-white/10 pt-6">
            <p class="mb-4 text-sm font-bold uppercase tracking-widest text-[#D4AF37]">
              {{ $t("home.explore_title") }}
            </p>
            <div class="flex flex-col gap-4 text-base">
              <NuxtLink
                v-for="topic in topicLinks"
                :key="`mobile-${topic.link}`"
                :to="topic.link"
                class="text-gray-200 hover:text-[#D4AF37] transition-colors"
                @click="isMobileMenuOpen = false"
              >
                {{ topic.name }}
              </NuxtLink>
              <NuxtLink
                to="/faq"
                class="border-t border-white/10 pt-4 font-semibold text-[#D4AF37] hover:text-white transition-colors"
                @click="isMobileMenuOpen = false"
              >
                {{ $t("home.faq_btn") }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <slot />
    <SiteImageLightbox />

    <footer class="bg-[#041122] text-gray-300 pt-16 pb-8 px-6 md:px-12 w-full border-t border-white/5">
      <div class="w-full flex flex-col md:flex-row justify-between items-center md:items-end border-b border-white/10 pb-12 mb-8 gap-10 md:gap-0">
        <div class="flex flex-col items-center md:items-start space-y-6 w-full md:w-auto text-center md:text-left">
          <div class="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <NuxtLink to="/sobre" class="hover:text-[#D4AF37] transition font-medium tracking-wide">{{ $t("footer.sobre_projeto") }}</NuxtLink>
            <a href="mailto:seuemail@exemplo.com" class="hover:text-[#D4AF37] transition font-medium tracking-wide">{{ $t("footer.contato") }}</a>
            <a href="https://instagram.com/seu_usuario" target="_blank" class="hover:text-[#D4AF37] transition font-medium tracking-wide">Instagram</a>
            <a href="https://github.com/isaac-schuenck/mea-ecclesia-catholica" target="_blank" class="hover:text-[#D4AF37] transition font-medium tracking-wide">GitHub</a>
          </div>
        </div>
        <div class="flex flex-col items-center md:items-end w-full md:w-auto group">
          <img src="/assets/logosfundo.png" alt="MEC Logo" class="h-24 md:h-32 w-auto opacity-30 group-hover:opacity-100 transition-opacity duration-500 mb-4" />
          <span class="text-[#D4AF37] font-serif font-bold text-[10px] sm:text-xs md:text-xl tracking-[0.2em] md:tracking-widest opacity-30 group-hover:opacity-100 transition-opacity duration-500 text-center md:text-right uppercase">Traditio • Scriptura • Magisterium</span>
        </div>
      </div>
      <div class="flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-gray-500 tracking-wider">
        <p class="mb-4 md:mb-0 text-center md:text-left uppercase">
          {{ $t("footer.direitos") }}
        </p>
        <p class="flex items-center gap-1">
          {{ $t("footer.desenvolvido") }}
          <span class="text-[#D4AF37] mx-1">{{ $t("footer.fe_codigo") }}</span>
          {{ $t("footer.por") }} Isaac
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
const { setLocale, locale, t } = useI18n();
const route = useRoute();

const isMobileMenuOpen = ref(false);
const isMobileSearchOpen = ref(false);
const isLangOpen = ref(false); // <-- Resolvido aqui!
const isTopicsOpen = ref(false);

const isHome = computed(() => route.path === "/");

const topicLinks = computed(() => [
  { name: t("home.topics.trindade"), link: "/trindade" },
  { name: t("home.topics.sacramentos"), link: "/sacramentos" },
  { name: t("home.topics.missa"), link: "/missa" },
  { name: t("home.topics.ano_liturgico"), link: "/ano-liturgico" },
  { name: t("home.topics.milagres"), link: "/milagres" },
  { name: t("home.topics.escritura"), link: "/escritura" },
  { name: t("home.topics.sucessao"), link: "/sucessao-apostolica" },
  { name: t("home.topics.tradicao"), link: "/tradicao-e-magisterio" },
  { name: t("home.topics.papado"), link: "/papado" },
  { name: t("home.topics.orientais"), link: "/igrejas-orientais" },
  { name: t("home.topics.ritos"), link: "/ritos" },
  { name: t("home.topics.personagens_historicos"), link: "/personagens-historicos" },
  { name: t("home.topics.historia"), link: "/historia" },
  { name: t("home.topics.patristica"), link: "/patristica" },
  { name: t("home.topics.escolastica"), link: "/escolastica" },
  { name: t("home.topics.ciencia"), link: "/ciencia" },
  { name: t("home.topics.apologetica"), link: "/apologetica" },
  { name: t("home.topics.termologia_catolica"), link: "/termologia-catolica" },
  { name: t("home.topics.dogmas"), link: "/dogmas-marianos" },
  { name: t("home.topics.intercessao"), link: "/intercessao-e-mediacao" },
  { name: t("home.topics.imagens"), link: "/imagens-e-idolatria" },
  { name: t("home.topics.catecismo"), link: "/catecismo" },
  { name: t("home.topics.oracoes"), link: "/oracoes" },
  { name: t("home.topics.rosario"), link: "/rosario" },
]);

watch(
  () => route.fullPath,
  () => {
    isTopicsOpen.value = false;
    isMobileMenuOpen.value = false;
  },
);

// Descobre qual é a bandeira certa baseada na língua atual
const currentLangDisplay = computed(() => {
  if (locale.value === "pt") return { code: "PT", flag: "🇧🇷" };
  if (locale.value === "la") return { code: "LA", flag: "🇻🇦" };
  if (locale.value === "en") return { code: "EN", flag: "🇬🇧" };
  return { code: "EN", flag: "🇬🇧" };
});

// Troca a língua e fecha as caixinhas
const changeLang = (newLocale) => {
  setLocale(newLocale);
  isMobileMenuOpen.value = false;
  isLangOpen.value = false;
  isTopicsOpen.value = false;
};
</script>
