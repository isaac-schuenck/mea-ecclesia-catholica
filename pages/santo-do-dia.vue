<template>
  <main class="flex-grow">
    <section class="max-w-7xl mx-auto pt-16 md:pt-20 pb-20 px-6">
      <h1
        class="text-3xl font-bold text-[#041122] mb-10 font-serif border-b-2 border-[#D4AF37] pb-3 inline-block"
      >
        {{ $t("santo_do_dia.titulo") }}
      </h1>

      <div class="relative max-w-2xl mx-auto mb-14" ref="calendarContainer">
        <div class="flex items-center justify-center gap-3 sm:gap-6">
          <button
            type="button"
            class="w-11 h-11 rounded-full border border-[#D4AF37]/45 text-[#B78920] hover:bg-[#D4AF37] hover:text-white transition-colors flex items-center justify-center"
            :aria-label="$t('santo_do_dia.dia_anterior')"
            @click="changeDay(-1)"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button
            type="button"
            class="min-w-0 sm:min-w-72 rounded-full border border-[#D4AF37]/45 bg-white px-5 sm:px-8 py-3 shadow-sm hover:border-[#D4AF37] hover:shadow-md transition-all"
            :aria-expanded="isCalendarOpen"
            aria-haspopup="dialog"
            @click="toggleCalendar"
          >
            <span class="block text-xs uppercase tracking-[0.18em] text-[#9B7322] mb-0.5">
              {{ isSelectedToday ? $t("santo_do_dia.hoje") : weekDayLabel }}
            </span>
            <span class="block text-base sm:text-lg font-semibold text-[#041122] capitalize">
              {{ selectedDateLabel }}
            </span>
          </button>

          <button
            type="button"
            class="w-11 h-11 rounded-full border border-[#D4AF37]/45 text-[#B78920] hover:bg-[#D4AF37] hover:text-white transition-colors flex items-center justify-center"
            :aria-label="$t('santo_do_dia.proximo_dia')"
            @click="changeDay(1)"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>

        <div
          v-if="isCalendarOpen"
          role="dialog"
          :aria-label="$t('santo_do_dia.escolher_data')"
          class="absolute z-30 top-full left-1/2 -translate-x-1/2 mt-3 w-[min(22rem,calc(100vw-2rem))] rounded-xl bg-[#041122] text-white shadow-2xl border border-[#D4AF37]/30 p-4"
        >
          <div class="flex items-center justify-between gap-2 mb-4">
            <button type="button" class="calendar-control" :aria-label="$t('santo_do_dia.ano_anterior')" @click="changeCalendarYear(-1)">«</button>
            <button type="button" class="calendar-control" :aria-label="$t('santo_do_dia.mes_anterior')" @click="changeCalendarMonth(-1)">‹</button>
            <p class="flex-1 text-center font-semibold capitalize text-sm">
              {{ calendarMonthLabel }}
            </p>
            <button type="button" class="calendar-control" :aria-label="$t('santo_do_dia.proximo_mes')" @click="changeCalendarMonth(1)">›</button>
            <button type="button" class="calendar-control" :aria-label="$t('santo_do_dia.proximo_ano')" @click="changeCalendarYear(1)">»</button>
          </div>

          <div class="grid grid-cols-7 text-center text-[11px] text-gray-400 mb-1">
            <span v-for="day in weekDays" :key="day" class="py-1">{{ day }}</span>
          </div>

          <div class="grid grid-cols-7 gap-1 text-center">
            <span v-for="blank in calendarStartOffset" :key="`blank-${blank}`" aria-hidden="true"></span>
            <button
              v-for="day in daysInCalendarMonth"
              :key="day"
              type="button"
              class="relative aspect-square rounded-full text-sm hover:bg-[#245487] transition-colors"
              :class="dayClasses(day)"
              :aria-label="calendarDayAriaLabel(day)"
              @click="selectCalendarDay(day)"
            >
              {{ day }}
              <span
                v-if="hasSaintOnCalendarDay(day)"
                class="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                :class="isSelectedCalendarDay(day) ? 'bg-[#041122]' : 'bg-[#D4AF37]'"
              ></span>
            </button>
          </div>

          <button
            type="button"
            class="block mx-auto mt-4 text-xs text-[#E4C45B] hover:text-white hover:underline transition-colors"
            @click="goToToday"
          >
            {{ $t("santo_do_dia.ir_para_hoje") }}
          </button>
        </div>
      </div>

      <nav
        v-if="saintsForSelectedDate.length > 1"
        :aria-label="$t('santo_do_dia.santos_no_dia')"
        class="max-w-3xl mx-auto -mt-5 mb-14 text-center"
      >
        <p class="text-sm text-gray-500 mb-3">
          {{ $t("santo_do_dia.contagem_santos", saintsForSelectedDate.length) }}
        </p>
        <div class="flex flex-wrap justify-center gap-2">
          <button
            v-for="saint in saintsForSelectedDate"
            :key="`shortcut-${saint.id}`"
            type="button"
            class="rounded-full border border-[#D4AF37]/40 px-4 py-1.5 text-sm font-semibold text-[#9B7322] hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-white transition-colors"
            @click="scrollToSaint(saint.id)"
          >
            {{ saint.nome }}
          </button>
        </div>
      </nav>

      <div v-if="saintsForSelectedDate.length" class="space-y-14">
        <article
          v-for="(saint, saintIndex) in saintsForSelectedDate"
          :id="saint.id"
          :key="saint.id"
          class="scroll-mt-28"
          :class="saintIndex > 0 ? 'pt-14 border-t border-[#D4AF37]/30' : ''"
        >
          <header class="mb-6 text-center">
            <h2 class="text-3xl md:text-4xl font-bold font-serif text-[#041122] mb-2">
              {{ saint.nome }}
            </h2>
            <p class="text-lg text-[#9B7322] font-semibold">{{ saint.titulo }}</p>
          </header>

          <div class="saint-biography text-gray-600 leading-relaxed text-justify">
            <figure
              v-if="saint.imagem"
              class="saint-figure mx-auto mb-5 md:float-left md:mr-7 md:mb-4 bg-white border border-gray-200 rounded-lg p-2 shadow-md"
            >
              <img
                :src="saint.imagem"
                :alt="saint.imagem_alt || saint.nome"
                class="block w-full h-auto rounded-md"
              />
              <figcaption
                v-if="saint.imagem_legenda"
                class="px-2 pt-2 text-center text-xs italic text-gray-500"
              >
                {{ saint.imagem_legenda }}
              </figcaption>
            </figure>

            <p v-for="(paragraph, index) in saint.bibliografia" :key="index">
              {{ paragraph }}
            </p>
          </div>
        </article>
      </div>

      <div v-else class="max-w-2xl mx-auto text-center py-12 border-y border-[#D4AF37]/25">
        <p class="text-xl font-serif font-bold text-[#041122] mb-2">
          {{ $t("santo_do_dia.conteudo_preparacao") }}
        </p>
        <p class="text-gray-500">
          {{ $t("santo_do_dia.sem_santo") }}
        </p>
      </div>
    </section>
  </main>
</template>

<script setup>
import calendario from "~/data/santos/calendario.json";

const route = useRoute();
const router = useRouter();
const { locale } = useI18n();

const biographyModules = import.meta.glob(
  "../data/santos/biografias/*/*.json",
  { eager: true, import: "default" },
);

const biographiesByLocale = Object.entries(biographyModules).reduce((registry, [path, saint]) => {
  const language = path.match(/\/biografias\/([^/]+)\//)?.[1];
  if (!language) return registry;
  registry[language] ??= {};
  registry[language][saint.id] = saint;
  return registry;
}, {});

const intlLocale = computed(() => ({
  pt: "pt-BR",
  en: "en-GB",
  la: "la",
}[locale.value] ?? "pt-BR"));

const atMidday = (date) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12);

const today = ref(atMidday(new Date()));
const selectedDate = ref(atMidday(new Date()));
const calendarView = ref(atMidday(new Date()));
const isCalendarOpen = ref(false);
const calendarContainer = ref(null);

const weekDays = computed(() =>
  Array.from({ length: 7 }, (_, index) => {
    const label = new Intl.DateTimeFormat(intlLocale.value, { weekday: "short" })
      .format(new Date(2026, 0, 4 + index, 12))
      .replace(".", "");
    return label.charAt(0).toUpperCase() + label.slice(1);
  }),
);

const pad = (value) => String(value).padStart(2, "0");
const fixedDateKey = (date) => `${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
const fullDateKey = (date) =>
  `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;

const parseRouteDate = (value) => {
  if (typeof value !== "string") return null;

  const fullMatch = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  const fixedMatch = value.match(/^(\d{2})-(\d{2})$/);
  const year = fullMatch ? Number(fullMatch[1]) : today.value.getFullYear();
  const month = Number(fullMatch?.[2] ?? fixedMatch?.[1]);
  const day = Number(fullMatch?.[3] ?? fixedMatch?.[2]);

  if (!month || !day) return null;
  const parsed = new Date(year, month - 1, day, 12);
  if (parsed.getMonth() !== month - 1 || parsed.getDate() !== day) return null;
  return parsed;
};

const applyRouteDate = async () => {
  const parsed = parseRouteDate(route.query.data);
  selectedDate.value = parsed ?? atMidday(new Date());
  today.value = atMidday(new Date());
  calendarView.value = atMidday(selectedDate.value);

  if (route.hash) {
    await nextTick();
    requestAnimationFrame(() => {
      document
        .getElementById(decodeURIComponent(route.hash.slice(1)))
        ?.scrollIntoView({ block: "start" });
    });
  }
};

const selectedDateLabel = computed(() =>
  new Intl.DateTimeFormat(intlLocale.value, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(selectedDate.value),
);

const weekDayLabel = computed(() =>
  new Intl.DateTimeFormat(intlLocale.value, { weekday: "long" }).format(selectedDate.value),
);

const isSelectedToday = computed(
  () => fullDateKey(selectedDate.value) === fullDateKey(today.value),
);

const saintsForSelectedDate = computed(() =>
  (calendario[fixedDateKey(selectedDate.value)] ?? [])
    .map((id) => (biographiesByLocale[locale.value] ?? biographiesByLocale.pt ?? {})[id])
    .filter(Boolean),
);

const calendarMonthLabel = computed(() =>
  new Intl.DateTimeFormat(intlLocale.value, { month: "long", year: "numeric" }).format(
    calendarView.value,
  ),
);

const daysInCalendarMonth = computed(() =>
  new Date(calendarView.value.getFullYear(), calendarView.value.getMonth() + 1, 0).getDate(),
);

const calendarStartOffset = computed(() =>
  new Date(calendarView.value.getFullYear(), calendarView.value.getMonth(), 1).getDay(),
);

const setSelectedDate = async (date, keepCalendarOpen = false) => {
  selectedDate.value = atMidday(date);
  calendarView.value = atMidday(date);
  isCalendarOpen.value = keepCalendarOpen;
  await router.replace({
    path: "/santo-do-dia",
    query: { data: fullDateKey(selectedDate.value) },
  });
};

const changeDay = (amount) => {
  const nextDate = atMidday(selectedDate.value);
  nextDate.setDate(nextDate.getDate() + amount);
  setSelectedDate(nextDate);
};

const toggleCalendar = () => {
  calendarView.value = atMidday(selectedDate.value);
  isCalendarOpen.value = !isCalendarOpen.value;
};

const changeCalendarMonth = (amount) => {
  calendarView.value = new Date(
    calendarView.value.getFullYear(),
    calendarView.value.getMonth() + amount,
    1,
    12,
  );
};

const changeCalendarYear = (amount) => {
  calendarView.value = new Date(
    calendarView.value.getFullYear() + amount,
    calendarView.value.getMonth(),
    1,
    12,
  );
};

const selectCalendarDay = (day) => {
  setSelectedDate(
    new Date(calendarView.value.getFullYear(), calendarView.value.getMonth(), day, 12),
  );
};

const goToToday = () => setSelectedDate(atMidday(new Date()));

const scrollToSaint = async (saintId) => {
  await router.replace({
    path: "/santo-do-dia",
    query: route.query,
    hash: `#${saintId}`,
  });
  await nextTick();
  document.getElementById(saintId)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const calendarDateForDay = (day) =>
  new Date(calendarView.value.getFullYear(), calendarView.value.getMonth(), day, 12);

const isSelectedCalendarDay = (day) =>
  fullDateKey(calendarDateForDay(day)) === fullDateKey(selectedDate.value);

const isTodayCalendarDay = (day) =>
  fullDateKey(calendarDateForDay(day)) === fullDateKey(today.value);

const hasSaintOnCalendarDay = (day) =>
  Boolean(calendario[fixedDateKey(calendarDateForDay(day))]?.length);

const dayClasses = (day) => ({
  "bg-[#D4AF37] text-[#041122] font-bold": isSelectedCalendarDay(day),
  "ring-1 ring-[#D4AF37]": isTodayCalendarDay(day) && !isSelectedCalendarDay(day),
  "bg-[#173B64]": hasSaintOnCalendarDay(day) && !isSelectedCalendarDay(day),
});

const calendarDayAriaLabel = (day) =>
  new Intl.DateTimeFormat(intlLocale.value, { dateStyle: "full" }).format(calendarDateForDay(day));

const handleOutsideClick = (event) => {
  if (calendarContainer.value && !calendarContainer.value.contains(event.target)) {
    isCalendarOpen.value = false;
  }
};

const handleEscape = (event) => {
  if (event.key === "Escape") isCalendarOpen.value = false;
};

watch(() => route.query.data, applyRouteDate);

onMounted(() => {
  applyRouteDate();
  document.addEventListener("click", handleOutsideClick);
  document.addEventListener("keydown", handleEscape);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleOutsideClick);
  document.removeEventListener("keydown", handleEscape);
});
</script>

<style scoped>
.calendar-control {
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 9999px;
  color: #e4c45b;
  transition: color 150ms ease, background-color 150ms ease;
}

.calendar-control:hover {
  color: white;
  background-color: rgba(255, 255, 255, 0.08);
}

.saint-figure {
  width: min(100%, 17rem);
}

.saint-biography::after {
  content: "";
  display: block;
  clear: both;
}

.saint-biography p + p {
  margin-top: 0.75rem;
}
</style>
