<template>
  <section class="max-w-7xl mx-auto py-8 px-6 mb-8">
    <h3
      class="text-3xl font-bold text-[#041122] mb-8 font-serif border-b-2 border-[#D4AF37] pb-3 inline-block"
    >
      {{ $t(titleKey) }}
    </h3>

    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div
        v-for="book in books"
        :key="book.tituloKey"
        class="border-b border-gray-200/70 last:border-0"
      >
        <button
          @click="toggleBook(book.tituloKey)"
          class="group w-full flex items-center p-5 md:p-6 hover:bg-gray-50 transition-all text-left"
        >
          <svg
            class="w-6 h-6 text-[#D4AF37] mr-5 md:mr-6 shrink-0 transition-transform duration-300"
            :class="isOpen(book.tituloKey) ? 'rotate-0' : 'rotate-90'"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              d="m9 18 6-6-6-6"
            />
          </svg>

          <div class="flex-grow grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
            <span
              class="text-base md:text-lg font-bold text-[#041122] group-hover:text-[#D4AF37] transition-colors"
            >
              {{ $t(book.tituloKey) }}
            </span>
            <span
              v-if="book.secondaryKey"
              class="text-gray-500 font-medium md:text-right"
            >
              {{ $t(book.secondaryKey) }}
            </span>
          </div>
        </button>

        <div
          v-show="isOpen(book.tituloKey)"
          class="bg-gray-50 px-5 pt-4 pb-5 md:px-6 md:pt-4 md:pb-6 border-t border-gray-200/70"
        >
          <div
            class="grid gap-6 md:pl-12"
            :class="book.meta?.length ? 'lg:grid-cols-[minmax(0,1fr)_14rem]' : ''"
          >
            <div class="grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:gap-5">
              <div
                v-for="(img, i) in book.capas"
                :key="i"
                class="w-full sm:w-32 aspect-square bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <img
                  :src="img"
                  class="w-full h-full object-contain p-2"
                  :alt="$t('livro.capa_alt', { titulo: $t(book.tituloKey) })"
                />
              </div>
            </div>

            <dl
              v-if="book.meta?.length"
              class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 content-start"
            >
              <div
                v-for="item in book.meta"
                :key="item.labelKey"
                class="bg-white rounded-xl border border-gray-200/80 p-4 shadow-sm"
              >
                <dt class="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-1">
                  {{ $t(item.labelKey) }}
                </dt>
                <dd class="text-sm md:text-base font-semibold text-[#041122] leading-snug">
                  {{ $t(item.valueKey) }}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  titleKey: {
    type: String,
    required: true,
  },
  books: {
    type: Array,
    required: true,
  },
});

const openBooks = ref({});

const isOpen = (key) => Boolean(openBooks.value[key]);

const toggleBook = (key) => {
  openBooks.value[key] = !openBooks.value[key];
};
</script>
