<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      :aria-label="caption"
      @click.self="close"
    >
      <figure class="relative flex w-fit max-h-full max-w-full flex-col items-center">
        <button
          type="button"
          class="absolute right-0 top-0 z-[201] flex h-9 w-9 translate-x-1/3 -translate-y-1/3 items-center justify-center rounded-full border border-white/60 bg-black/70 text-2xl leading-none text-white shadow-lg transition hover:bg-black/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] md:h-10 md:w-10"
          aria-label="Fechar imagem ampliada"
          @click="close"
        >
          <span aria-hidden="true">×</span>
        </button>

        <img
          :src="imageUrl"
          :alt="caption"
          class="max-h-[82vh] max-w-[94vw] rounded-lg object-contain shadow-2xl"
        />
        <figcaption v-if="caption" class="mt-3 text-center text-sm italic text-white/85">
          {{ caption }}
        </figcaption>
      </figure>
    </div>
  </Teleport>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from "vue";

const isOpen = ref(false);
const historyActive = ref(false);
const imageUrl = ref("");
const caption = ref("");
let savedScrollPosition = { x: 0, y: 0 };
let previousScrollRestoration = "auto";

const restoreReadingPosition = () => {
  const { x, y } = savedScrollPosition;
  window.scrollTo(x, y);
  window.requestAnimationFrame(() => {
    window.scrollTo(x, y);
    window.setTimeout(() => {
      window.scrollTo(x, y);
      window.history.scrollRestoration = previousScrollRestoration;
    }, 0);
  });
};

const open = (image, figure) => {
  savedScrollPosition = { x: window.scrollX, y: window.scrollY };
  previousScrollRestoration = window.history.scrollRestoration;
  window.history.scrollRestoration = "manual";
  imageUrl.value = image.currentSrc || image.src;
  caption.value = figure?.querySelector("figcaption")?.textContent?.trim() || image.alt || "Imagem ampliada";
  isOpen.value = true;
  window.history.pushState({ ...window.history.state, siteImageLightbox: true }, "");
  historyActive.value = true;
};

const close = () => {
  if (!isOpen.value) return;
  if (historyActive.value) {
    window.history.back();
    return;
  }
  isOpen.value = false;
  window.history.scrollRestoration = previousScrollRestoration;
};

const handleDocumentClick = (event) => {
  if (isOpen.value) return;
  const image = event.target.closest?.("main figure img, [data-lightbox-image]");
  if (!image) return;

  event.preventDefault();
  event.stopPropagation();
  open(image, image.closest("figure"));
};

const handleKeydown = (event) => {
  if (event.key === "Escape" && isOpen.value) close();
};

const handlePopstate = () => {
  if (!isOpen.value) return;
  historyActive.value = false;
  isOpen.value = false;
  restoreReadingPosition();
};

watch(isOpen, (openState) => {
  if (import.meta.client) document.body.style.overflow = openState ? "hidden" : "";
});

onMounted(() => {
  // O ampliador segue a marcação das imagens, não a URL traduzida da página.
  document.body.classList.add("site-lightbox-enabled");
  document.addEventListener("click", handleDocumentClick, true);
  window.addEventListener("keydown", handleKeydown);
  window.addEventListener("popstate", handlePopstate);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleDocumentClick, true);
  window.removeEventListener("keydown", handleKeydown);
  window.removeEventListener("popstate", handlePopstate);
  document.body.classList.remove("site-lightbox-enabled");
  document.body.style.overflow = "";
  window.history.scrollRestoration = previousScrollRestoration;
});
</script>

<style>
body.site-lightbox-enabled main figure img,
body.site-lightbox-enabled [data-lightbox-image] {
  cursor: zoom-in;
}
</style>
