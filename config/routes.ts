// Este é o mapa oficial das páginas. Quando uma página nova nascer
// coloca os três endereços dela aqui e o resto do site passa a reconhecê-la.
export const localizedPages = {
  index: {
    pt: "/",
    en: "/",
    la: "/",
  },
  "ano-liturgico": {
    pt: "/ano-liturgico",
    en: "/liturgical-year",
    la: "/annus-liturgicus",
  },
  "artigos-religiosos": {
    pt: "/artigos-religiosos",
    en: "/religious-articles",
    la: "/articuli-religiosi",
  },
  estrutura: {
    pt: "/estrutura-da-igreja",
    en: "/church-structure",
    la: "/structura-ecclesiae",
  },
  livros: {
    pt: "/livros",
    en: "/books",
    la: "/libri",
  },
  missa: {
    pt: "/missa",
    en: "/mass",
    la: "/missa",
  },
  oracoes: {
    pt: "/oracoes",
    en: "/prayers",
    la: "/orationes",
  },
  "santo-do-dia": {
    pt: "/santo-do-dia",
    en: "/saint-of-the-day",
    la: "/sanctus-diei",
  },
} as const;

// Faz os links antigos escritos nos textos encontrarem o nome técnico da rota.
export const existingRouteNames: Record<string, keyof typeof localizedPages> = {
  "/": "index",
  "/ano-liturgico": "ano-liturgico",
  "/artigos-religiosos": "artigos-religiosos",
  "/estrutura": "estrutura",
  "/estrutura-da-igreja": "estrutura",
  "/livros": "livros",
  "/missa": "missa",
  "/oracoes": "oracoes",
  "/santo-do-dia": "santo-do-dia",
};

// Quem tiver um link antigo salvo ainda será levado para a página certa em PT.
export const legacyRouteRules = {
  "/ano-liturgico": { redirect: "/pt/ano-liturgico" },
  "/artigos-religiosos": { redirect: "/pt/artigos-religiosos" },
  "/estrutura": { redirect: "/pt/estrutura-da-igreja" },
  "/livros": { redirect: "/pt/livros" },
  "/missa": { redirect: "/pt/missa" },
  "/oracoes": { redirect: "/pt/oracoes" },
  "/santo-do-dia": { redirect: "/pt/santo-do-dia" },
} as const;
