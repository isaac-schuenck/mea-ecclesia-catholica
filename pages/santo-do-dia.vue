<template>
  <main class="flex-grow">
    <section class="max-w-7xl mx-auto pt-16 md:pt-20 pb-20 px-6">
      <h1
        class="text-3xl font-bold text-[#041122] mb-10 font-serif border-b-2 border-[#D4AF37] pb-3 inline-block"
      >
        {{ $t("santo_do_dia.titulo") }}
      </h1>

      <SaintDatePicker
        :selected-date="selectedDate"
        :today="today"
        :locale="intlLocale"
        :saint-date-keys="saintDateKeys"
        @select-date="setSelectedDate"
      />

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
        <SaintCard
          v-for="(saint, saintIndex) in saintsForSelectedDate"
          :key="saint.id"
          :saint="saint"
          :separated="saintIndex > 0"
          @open-biography="openSaintBiography"
        />
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

    <SaintBiographyModal
      :saint="selectedBiography"
      @close="closeSaintBiography"
    />
  </main>
</template>

<script setup>
import SaintBiographyModal from "~/components/saints/SaintBiographyModal.vue";
import SaintCard from "~/components/saints/SaintCard.vue";
import SaintDatePicker from "~/components/saints/SaintDatePicker.vue";

const {
  closeSaintBiography,
  intlLocale,
  openSaintBiography,
  saintDateKeys,
  saintsForSelectedDate,
  scrollToSaint,
  selectedBiography,
  selectedDate,
  setSelectedDate,
  today,
} = useSaintOfDay();
</script>
