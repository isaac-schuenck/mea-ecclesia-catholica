<template>
  <div ref="container" class="relative max-w-2xl mx-auto mb-14">
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
        :aria-expanded="isOpen"
        aria-haspopup="dialog"
        @click="toggleCalendar"
      >
        <span class="block text-xs uppercase tracking-[0.18em] text-[#9B7322] mb-0.5">
          {{ isToday ? $t("santo_do_dia.hoje") : weekDayLabel }}
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
      v-if="isOpen"
      role="dialog"
      :aria-label="$t('santo_do_dia.escolher_data')"
      class="absolute z-30 top-full left-1/2 -translate-x-1/2 mt-3 w-[min(22rem,calc(100vw-2rem))] rounded-xl bg-[#041122] text-white shadow-2xl border border-[#D4AF37]/30 p-4"
    >
      <div class="flex items-center justify-between gap-2 mb-4">
        <button type="button" class="calendar-control" :aria-label="$t('santo_do_dia.ano_anterior')" @click="changeYear(-1)">«</button>
        <button type="button" class="calendar-control" :aria-label="$t('santo_do_dia.mes_anterior')" @click="changeMonth(-1)">‹</button>
        <p class="flex-1 text-center font-semibold capitalize text-sm">
          {{ calendarMonthLabel }}
        </p>
        <button type="button" class="calendar-control" :aria-label="$t('santo_do_dia.proximo_mes')" @click="changeMonth(1)">›</button>
        <button type="button" class="calendar-control" :aria-label="$t('santo_do_dia.proximo_ano')" @click="changeYear(1)">»</button>
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
          @click="selectDay(day)"
        >
          {{ day }}
          <span
            v-if="hasSaint(day)"
            class="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
            :class="isSelectedDay(day) ? 'bg-[#041122]' : 'bg-[#D4AF37]'"
          ></span>
        </button>
      </div>

      <button
        type="button"
        class="block mx-auto mt-4 text-xs text-[#E4C45B] hover:text-white hover:underline transition-colors"
        @click="selectDate(today)"
      >
        {{ $t("santo_do_dia.ir_para_hoje") }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";

const props = defineProps({
  selectedDate: { type: Date, required: true },
  today: { type: Date, required: true },
  locale: { type: String, required: true },
  saintDateKeys: { type: Array, default: () => [] },
});

const emit = defineEmits(["select-date"]);
const container = ref(null);
const isOpen = ref(false);
const calendarView = ref(new Date(props.selectedDate));
const availableDates = computed(() => new Set(props.saintDateKeys));

// Meio-dia evita que a data pule um dia por causa de timezone/horário de verão.
const atMidday = (date) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12);
const pad = (value) => String(value).padStart(2, "0");
const fixedDateKey = (date) => `${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
const fullDateKey = (date) =>
  `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;

const selectedDateLabel = computed(() =>
  new Intl.DateTimeFormat(props.locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(props.selectedDate),
);

const weekDayLabel = computed(() =>
  new Intl.DateTimeFormat(props.locale, { weekday: "long" }).format(props.selectedDate),
);

const isToday = computed(
  () => fullDateKey(props.selectedDate) === fullDateKey(props.today),
);

const weekDays = computed(() =>
  Array.from({ length: 7 }, (_, index) => {
    // 4 jan. 2026 foi domingo; usamos essa semana fixa só para montar os rótulos.
    const label = new Intl.DateTimeFormat(props.locale, { weekday: "short" })
      .format(new Date(2026, 0, 4 + index, 12))
      .replace(".", "");
    return label.charAt(0).toUpperCase() + label.slice(1);
  }),
);

const calendarMonthLabel = computed(() =>
  new Intl.DateTimeFormat(props.locale, { month: "long", year: "numeric" }).format(
    calendarView.value,
  ),
);

const daysInCalendarMonth = computed(() =>
  new Date(calendarView.value.getFullYear(), calendarView.value.getMonth() + 1, 0).getDate(),
);

const calendarStartOffset = computed(() =>
  new Date(calendarView.value.getFullYear(), calendarView.value.getMonth(), 1).getDay(),
);

const calendarDateForDay = (day) =>
  new Date(calendarView.value.getFullYear(), calendarView.value.getMonth(), day, 12);
const isSelectedDay = (day) =>
  fullDateKey(calendarDateForDay(day)) === fullDateKey(props.selectedDate);
const isTodayDay = (day) =>
  fullDateKey(calendarDateForDay(day)) === fullDateKey(props.today);
const hasSaint = (day) => availableDates.value.has(fixedDateKey(calendarDateForDay(day)));

const dayClasses = (day) => ({
  "bg-[#D4AF37] text-[#041122] font-bold": isSelectedDay(day),
  "ring-1 ring-[#D4AF37]": isTodayDay(day) && !isSelectedDay(day),
  "bg-[#173B64]": hasSaint(day) && !isSelectedDay(day),
});

const calendarDayAriaLabel = (day) =>
  new Intl.DateTimeFormat(props.locale, { dateStyle: "full" }).format(calendarDateForDay(day));

const selectDate = (date) => {
  isOpen.value = false;
  emit("select-date", atMidday(date));
};

const changeDay = (amount) => {
  const date = atMidday(props.selectedDate);
  date.setDate(date.getDate() + amount);
  selectDate(date);
};

const selectDay = (day) => selectDate(calendarDateForDay(day));

const toggleCalendar = () => {
  calendarView.value = atMidday(props.selectedDate);
  isOpen.value = !isOpen.value;
};

const changeMonth = (amount) => {
  calendarView.value = new Date(
    calendarView.value.getFullYear(),
    calendarView.value.getMonth() + amount,
    1,
    12,
  );
};

const changeYear = (amount) => {
  calendarView.value = new Date(
    calendarView.value.getFullYear() + amount,
    calendarView.value.getMonth(),
    1,
    12,
  );
};

// O calendário fecha sozinho quando a pessoa clica fora ou aperta Esc.
const handleOutsideClick = (event) => {
  if (container.value && !container.value.contains(event.target)) isOpen.value = false;
};
const handleEscape = (event) => {
  if (event.key === "Escape") isOpen.value = false;
};

watch(
  () => props.selectedDate,
  (date) => { calendarView.value = atMidday(date); },
);

onMounted(() => {
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
</style>
