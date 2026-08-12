import type { ArticleContentBlock, ArticleDocument } from "~/content/articleTypes";

const about = "text-sm text-gray-500 italic leading-relaxed text-justify";
const prayer = "border-l-4 border-[#D4AF37] pl-5 md:pl-6 py-1 text-gray-600 leading-relaxed whitespace-pre-line";

const subheading = (id: string, textKey: string): ArticleContentBlock => ({
  type: "subheading",
  id,
  textKey,
});

const paragraph = (
  keypath: string,
  className = `${about} mb-2`,
  links?: Record<string, { to: string }>,
): ArticleContentBlock => ({ type: "paragraph", keypath, class: className, links });

const quote = (keypath: string): ArticleContentBlock => ({
  type: "quote",
  keypath,
  class: prayer,
});

const note = (keypath: string, className = "mt-5"): ArticleContentBlock => ({
  type: "note",
  keypath,
  labelKey: "oracoes.obs_label",
  class: className,
});

export const principalPrayersDocument: ArticleDocument = {
  id: "oracoes-principais",
  blocks: [
    { type: "section-title", textKey: "oracoes.principais_titulo" },
    { type: "text", keypath: "oracoes.principais_intro", class: "text-gray-600 leading-relaxed text-justify" },

    subheading("sinal-da-cruz", "oracoes.sinal_cruz_titulo"),
    paragraph("oracoes.sinal_cruz_sobre_p1"),
    paragraph("oracoes.sinal_cruz_sobre_p2", `${about} mb-6`),
    quote("oracoes.sinal_cruz_texto"),

    subheading("pai-nosso", "oracoes.pai_nosso_titulo"),
    paragraph("oracoes.pai_nosso_sobre", `${about} mb-6`),
    quote("oracoes.pai_nosso_texto"),

    subheading("ave-maria", "oracoes.ave_maria_titulo"),
    paragraph("oracoes.ave_maria_sobre", `${about} mb-6`, {
      maria: { to: "/dogmas-marianos" },
    }),
    quote("oracoes.ave_maria_texto"),

    subheading("gloria-ao-pai", "oracoes.gloria_pai_titulo"),
    paragraph("oracoes.gloria_pai_sobre_p1"),
    paragraph("oracoes.gloria_pai_sobre_p2", `${about} mb-6`),
    quote("oracoes.gloria_pai_texto"),
    note("oracoes.gloria_pai_obs_intro"),
    { type: "note", keypath: "oracoes.gloria_pai_obs_texto", class: "whitespace-pre-line" },

    subheading("vinde-espirito-santo", "oracoes.vinde_espirito_titulo"),
    paragraph("oracoes.vinde_espirito_sobre_p1"),
    paragraph("oracoes.vinde_espirito_sobre_p2", `${about} mb-6`, {
      salmo: { to: "/livros" },
    }),
    {
      type: "group",
      tag: "blockquote",
      class: prayer.replace(" whitespace-pre-line", ""),
      blocks: [
        { type: "text", keypath: "oracoes.vinde_espirito_texto_1", class: "whitespace-pre-line" },
        { type: "text", keypath: "oracoes.oremos_label", class: "mt-5 mb-1 font-bold text-[#041122]" },
        { type: "text", keypath: "oracoes.vinde_espirito_texto_2", class: "whitespace-pre-line" },
      ],
    },

    subheading("confesso-a-deus", "oracoes.confesso_titulo"),
    paragraph("oracoes.confesso_sobre_p1"),
    paragraph("oracoes.confesso_sobre_p2", `${about} mb-6`, {
      anjos: { to: "/anjos" },
      santos: { to: "/santo-do-dia" },
      kyrie_eleison: { to: "/oracoes#kyrie-eleison" },
    }),
    {
      type: "group",
      tag: "blockquote",
      class: prayer.replace(" whitespace-pre-line", ""),
      blocks: [
        { type: "text", keypath: "oracoes.confesso_texto_1", class: "whitespace-pre-line" },
        { type: "text", keypath: "oracoes.confesso_gesto", class: "italic text-gray-500 mt-5" },
        { type: "text", keypath: "oracoes.confesso_culpa", class: "whitespace-pre-line font-bold text-[#041122]" },
        { type: "text", keypath: "oracoes.confesso_texto_2", class: "whitespace-pre-line mt-5" },
      ],
    },
    note("oracoes.confesso_obs"),

    subheading("ato-de-contricao", "oracoes.ato_contricao_titulo"),
    paragraph("oracoes.ato_contricao_sobre_p1"),
    { type: "text", keypath: "oracoes.ato_contricao_sobre_p2", class: `${about} mb-6` },
    quote("oracoes.ato_contricao_texto"),
    note("oracoes.ato_contricao_obs"),

    subheading("santo-anjo-do-senhor", "oracoes.santo_anjo_titulo"),
    paragraph("oracoes.santo_anjo_sobre_p1"),
    { type: "text", keypath: "oracoes.santo_anjo_sobre_p2", class: `${about} mb-6` },
    quote("oracoes.santo_anjo_texto"),

    subheading("salve-rainha", "oracoes.salve_rainha_titulo"),
    paragraph("oracoes.salve_rainha_sobre_p1"),
    paragraph("oracoes.salve_rainha_sobre_p2", `${about} mb-6`, {
      maria: { to: "/dogmas-marianos" },
    }),
    quote("oracoes.salve_rainha_texto"),
    { type: "text", keypath: "oracoes.salve_rainha_versiculo_intro", class: "font-semibold text-[#041122] mt-7 mb-3" },
    quote("oracoes.salve_rainha_versiculo"),
  ],
};
