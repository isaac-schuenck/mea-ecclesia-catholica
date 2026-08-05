import calendario from "~/data/santos/calendario.json";

const biographyModules = import.meta.glob(
  "../data/santos/biografias/*/*.json",
  { eager: true, import: "default" },
);

// Os arquivos continuam separados por idioma, mas chegam à página por um único catálogo.
const biographiesByLocale = Object.entries(biographyModules).reduce(
  (registry, [path, saint]) => {
    const language = path.match(/\/biografias\/([^/]+)\//)?.[1];
    if (!language) return registry;
    registry[language] ??= {};
    registry[language][saint.id] = saint;
    return registry;
  },
  {},
);

// Meio-dia evita aquelas mudanças estranhas de dia causadas por timezone/horário de verão.
const atMidday = (date) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12);
const pad = (value) => String(value).padStart(2, "0");
const fixedDateKey = (date) => `${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
const fullDateKey = (date) =>
  `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;

export const useSaintOfDay = () => {
  const route = useRoute();
  const router = useRouter();
  const localePath = useLocalePath();
  const { locale } = useI18n();

  const today = ref(atMidday(new Date()));
  const selectedDate = ref(atMidday(new Date()));
  const selectedBiography = ref(null);
  const saintDateKeys = Object.keys(calendario);
  let biographyHistoryActive = false;

  const intlLocale = computed(() => ({
    pt: "pt-BR",
    en: "en-GB",
    la: "la",
  })[locale.value] ?? "en-GB");

  const saintsForSelectedDate = computed(() =>
    (calendario[fixedDateKey(selectedDate.value)] ?? [])
      .map((id) =>
        // Enquanto uma biografia ainda não foi traduzida, preservamos o conteúdo em português.
        (biographiesByLocale[locale.value] ?? biographiesByLocale.pt ?? {})[id],
      )
      .filter(Boolean),
  );

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
    selectedDate.value = parseRouteDate(route.query.data) ?? atMidday(new Date());
    today.value = atMidday(new Date());

    if (!route.hash) return;
    await nextTick();
    // Quando a URL já vem com #santo, espera a lista renderizar antes de rolar.
    requestAnimationFrame(() => {
      document
        .getElementById(decodeURIComponent(route.hash.slice(1)))
        ?.scrollIntoView({ block: "start" });
    });
  };

  const setSelectedDate = async (date) => {
    selectedDate.value = atMidday(date);
    await router.replace({
      path: localePath("santo-do-dia"),
      query: { data: fullDateKey(selectedDate.value) },
    });
  };

  const scrollToSaint = async (saintId) => {
    await router.replace({
      path: localePath("santo-do-dia"),
      query: route.query,
      hash: `#${saintId}`,
    });
    await nextTick();
    document.getElementById(saintId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const openSaintBiography = (saint) => {
    selectedBiography.value = saint;
    // O modal entra no histórico para o botão voltar fechar a biografia,
    // em vez de mandar a pessoa embora da página.
    window.history.pushState(
      { ...window.history.state, saintBiography: saint.id },
      "",
    );
    biographyHistoryActive = true;
  };

  const closeSaintBiography = () => {
    if (!selectedBiography.value) return;
    if (biographyHistoryActive) {
      window.history.back();
      return;
    }
    selectedBiography.value = null;
  };

  const handleBiographyPopstate = (event) => {
    if (!selectedBiography.value) return;

    // Fechar uma foto ampliada não deve fechar junto a história completa do santo.
    if (event.state?.saintBiography === selectedBiography.value.id) return;
    biographyHistoryActive = false;
    selectedBiography.value = null;
  };

  const handleEscape = (event) => {
    if (event.key === "Escape" && selectedBiography.value) closeSaintBiography();
  };

  watch(() => route.query.data, applyRouteDate);
  watch(selectedBiography, (saint) => {
    document.body.style.overflow = saint ? "hidden" : "";
  });

  onMounted(() => {
    applyRouteDate();
    document.addEventListener("keydown", handleEscape);
    window.addEventListener("popstate", handleBiographyPopstate);
  });

  onBeforeUnmount(() => {
    document.removeEventListener("keydown", handleEscape);
    window.removeEventListener("popstate", handleBiographyPopstate);
    document.body.style.overflow = "";
  });

  return {
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
  };
};
