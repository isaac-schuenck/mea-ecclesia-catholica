<template>
  <NuxtLink :to="localizedDestination">
    <slot />
  </NuxtLink>
</template>

<script setup>
import { computed } from "vue";
import { existingRouteNames } from "~/config/routes";

const props = defineProps({
  to: {
    type: [String, Object],
    required: true,
  },
});

const localePath = useLocalePath();

// Traduz só as rotas que já existem. As páginas futuras ficam como estão,
// sem inventar um endereço que ainda não funciona.
const localizeString = (destination) => {
  if (
    !destination.startsWith("/") ||
    destination.startsWith("//")
  ) {
    return destination;
  }

  const parsed = new URL(destination, "https://mea-ecclesia.local");
  const routeName = existingRouteNames[parsed.pathname];

  if (!routeName) return destination;

  // Mantém ?data=... e #ancora quando um link antigo vira rota traduzida.
  const query = Object.fromEntries(parsed.searchParams.entries());

  return localePath({
    name: routeName,
    query,
    hash: parsed.hash || undefined,
  });
};

const localizedDestination = computed(() => {
  if (typeof props.to === "string") return localizeString(props.to);
  return props.to;
});
</script>
