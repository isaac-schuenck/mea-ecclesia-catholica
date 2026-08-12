import type { KeywordLink } from "~/config/keywordLinks";

// Alguns termos de Artigos Religiosos funcionam como referências bibliográficas
// externas. Eles ficam separados porque, em outras páginas, o mesmo termo pode
// apontar para uma explicação interna do site.
export const religiousArticleLinks: Record<string, KeywordLink> = {
  SC5: {
    to: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19631204_sacrosanctum-concilium_po.html#5",
    external: true,
  },
  padre_gabriele_amorth: {
    to: "https://pt.wikipedia.org/wiki/Gabriele_Amorth",
    external: true,
  },
  sao_pedro: { to: "/santos" },
  eusebio_cesareia: {
    to: "https://pt.wikipedia.org/wiki/Eus%C3%A9bio_de_Cesareia",
    external: true,
  },
  wilhelm: {
    to: "https://en.wikipedia.org/wiki/Wilhelm_Schneemelcher",
    external: true,
  },
  margherita: {
    to: "https://pt.wikipedia.org/wiki/Margherita_Guarducci",
    external: true,
  },
  salmos: {
    to: "https://www.vatican.va/archive/bible/psalms/documents/bible_psalms_po.html",
    external: true,
  },
  biblia: {
    to: "https://www.vatican.va/archive/bible/index_po.htm",
    external: true,
  },
  liturgia_horas: {
    to: "https://www.vatican.va/content/paul-vi/pt/apost_constitutions/documents/hf_p-vi_apc_19701101_laudis-canticum.html",
    external: true,
  },
  paternosters: {
    to: "https://www.newadvent.org/cathen/13184b.htm",
    external: true,
  },
  enciclopedia_catolica: {
    to: "https://www.newadvent.org/cathen/13184b.htm",
    external: true,
  },
  abadia_cluny: {
    to: "https://pt.wikipedia.org/wiki/Abadia_de_Cluny",
    external: true,
  },
  virgem_maria: { to: "/artigos-religiosos" },
  rosario: {
    to: "https://www.vatican.va/special/rosary/documents/misteri_po.html",
    external: true,
  },
  misterios_luminosos: {
    to: "https://www.vatican.va/special/rosary/documents/misteri_luminosi_po.html",
    external: true,
  },
  papa_joao_paulo_ii: {
    to: "https://www.vatican.va/content/john-paul-ii/pt.html",
    external: true,
  },
  fatima: { to: "https://www.fatima.pt/pt/", external: true },
  lourdes: { to: "https://www.lourdes-france.com/pt-pt/", external: true },
};
