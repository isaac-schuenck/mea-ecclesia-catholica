import type { ArticleContentBlock, ArticleDocument } from "~/content/articleTypes";

const about = "text-sm text-gray-500 italic leading-relaxed text-justify";
const prayer = "border-l-4 border-[#D4AF37] pl-5 md:pl-6 py-1 text-gray-600 leading-relaxed whitespace-pre-line";
const intro = "text-gray-600 leading-relaxed text-justify";

const section = (textKey: string): ArticleContentBlock => ({ type: "section-title", textKey });
const sub = (id: string, textKey: string): ArticleContentBlock => ({ type: "subheading", id, textKey });
const text = (keypath: string, className = intro): ArticleContentBlock => ({ type: "text", keypath, class: className });
const rich = (keypath: string, className = `${about} mb-2`, links?: Record<string, { to: string }>): ArticleContentBlock => ({ type: "paragraph", keypath, class: className, links });
const quote = (keypath: string, richText = false): ArticleContentBlock => richText
  ? { type: "paragraph", keypath, tag: "blockquote", class: prayer }
  : { type: "quote", keypath, class: prayer };

export const faithProfessionsDocument: ArticleDocument = {
  id: "profissoes-de-fe",
  blocks: [
    section("oracoes.profissoes_titulo"),
    rich("oracoes.profissoes_intro", intro),
    sub("credo-dos-apostolos", "oracoes.credo_apostolos_titulo"),
    rich("oracoes.credo_apostolos_sobre_p1"),
    rich("oracoes.credo_apostolos_sobre_p2", `${about} mb-6`),
    quote("oracoes.credo_apostolos_texto"),
    sub("credo-niceno-constantinopolitano", "oracoes.credo_niceno_titulo"),
    rich("oracoes.credo_niceno_sobre_p1"),
    rich("oracoes.credo_niceno_sobre_p2"),
    rich("oracoes.credo_niceno_sobre_p3", `${about} mb-6`),
    quote("oracoes.credo_niceno_texto", true),
    sub("profissao-de-fe-batismal", "oracoes.profissao_batismal_titulo"),
    rich("oracoes.profissao_batismal_sobre_p1"),
    rich("oracoes.profissao_batismal_sobre_p2"),
    rich("oracoes.profissao_batismal_sobre_p3", `${about} mb-6`),
    { type: "text", tag: "h4", keypath: "oracoes.profissao_batismal_renuncias_titulo", class: "text-xl font-bold text-[#041122] font-serif mt-8 mb-4" },
    quote("oracoes.profissao_batismal_renuncias", true),
    { type: "text", tag: "h4", keypath: "oracoes.profissao_batismal_fe_titulo", class: "text-xl font-bold text-[#041122] font-serif mt-8 mb-4" },
    quote("oracoes.profissao_batismal_fe", true),
  ],
};

export const eucharisticPrayersDocument: ArticleDocument = {
  id: "oracoes-diante-da-eucaristia",
  blocks: [
    section("oracoes.eucaristia_titulo"),
    rich("oracoes.eucaristia_intro", intro, { sagrada_comunhao: { to: "/missa#liturgia-eucaristica" } }),
    sub("alma-de-cristo", "oracoes.alma_cristo_titulo"),
    rich("oracoes.alma_cristo_sobre_p1"),
    text("oracoes.alma_cristo_sobre_p2", `${about} mb-6`),
    quote("oracoes.alma_cristo_texto"),
    sub("comunhao-espiritual", "oracoes.comunhao_espiritual_titulo"),
    rich("oracoes.comunhao_espiritual_sobre_p1"),
    rich("oracoes.comunhao_espiritual_sobre_p2", `${about} mb-6`),
    quote("oracoes.comunhao_espiritual_texto", true),
  ],
};

export const hymnsDocument: ArticleDocument = {
  id: "hinos-e-canticos",
  blocks: [
    section("oracoes.hinos_titulo"), text("oracoes.hinos_intro"),
    sub("gloria-a-deus-nas-alturas", "oracoes.gloria_maior_titulo"),
    rich("oracoes.gloria_maior_sobre_p1"), rich("oracoes.gloria_maior_sobre_p2"),
    rich("oracoes.gloria_maior_sobre_p3", `${about} mb-6`, { santa_missa: { to: "/missa#estrutura-da-santa-missa" } }),
    quote("oracoes.gloria_maior_texto"),
    sub("santo", "oracoes.santo_titulo"), rich("oracoes.santo_sobre_p1"),
    text("oracoes.santo_sobre_p2", `${about} mb-6`), quote("oracoes.santo_texto"),
    rich("oracoes.santo_obs", `${about} mt-6`),
    sub("a-vos-o-deus-louvamos", "oracoes.te_deum_titulo"),
    rich("oracoes.te_deum_sobre_p1"), rich("oracoes.te_deum_sobre_p2"),
    rich("oracoes.te_deum_sobre_p3", `${about} mb-2`, { anjos: { to: "/santo-do-dia" }, apostolos: { to: "/estrutura#episcopado" }, martires: { to: "/santo-do-dia" } }),
    rich("oracoes.te_deum_sobre_p4", `${about} mb-6`), quote("oracoes.te_deum_texto"),
    sub("vinde-espirito-criador", "oracoes.veni_creator_titulo"), rich("oracoes.veni_creator_sobre_p1"),
    rich("oracoes.veni_creator_sobre_p2", `${about} mb-2`, { conclave: { to: "/estrutura#cardeais" } }),
    text("oracoes.veni_creator_sobre_p3", `${about} mb-6`), quote("oracoes.veni_creator_texto"),
  ],
};

export const liturgicalSequencesDocument: ArticleDocument = {
  id: "sequencias-liturgicas",
  blocks: [
    section("oracoes.sequencias_titulo"),
    rich("oracoes.sequencias_intro_p1", `${intro} mb-2`, { aleluia: { to: "/missa#liturgia-da-palavra" } }),
    rich("oracoes.sequencias_intro_p2", intro),
    sub("sequencia-de-pascoa", "oracoes.sequencia_pascoa_titulo"),
    rich("oracoes.sequencia_pascoa_sobre_p1"), rich("oracoes.sequencia_pascoa_sobre_p2", `${about} mb-6`),
    quote("oracoes.sequencia_pascoa_texto"),
  ],
};

export const devotionalPrayersDocument: ArticleDocument = {
  id: "oracoes-devocionais",
  blocks: [
    section("oracoes.devocionais_titulo"), text("oracoes.devocionais_intro"),
    sub("oracao-de-fatima", "oracoes.fatima_titulo"), rich("oracoes.fatima_sobre_p1"),
    rich("oracoes.fatima_sobre_p2", `${about} mb-6`), quote("oracoes.fatima_texto"),
    sub("oracao-a-sao-miguel-arcanjo", "oracoes.sao_miguel_titulo"),
    rich("oracoes.sao_miguel_sobre", `${about} mb-6`), quote("oracoes.sao_miguel_texto"),
    sub("oracao-de-sao-bento", "oracoes.sao_bento_titulo"), rich("oracoes.sao_bento_sobre_p1"),
    rich("oracoes.sao_bento_sobre_p2", `${about} mb-6`), quote("oracoes.sao_bento_texto"),
  ],
};

export const ancientChurchPrayersDocument: ArticleDocument = {
  id: "oracoes-da-igreja-antiga",
  blocks: [
    section("oracoes.igreja_antiga_titulo"), text("oracoes.igreja_antiga_intro"),
    sub("a-vossa-protecao", "oracoes.sub_tuum_titulo"), rich("oracoes.sub_tuum_sobre_p1"),
    rich("oracoes.sub_tuum_sobre_p2", `${about} mb-6`, { maria: { to: "/dogmas-marianos" } }),
    quote("oracoes.sub_tuum_texto"),
    sub("oracao-de-sao-policarpo", "oracoes.sao_policarpo_titulo"),
    rich("oracoes.sao_policarpo_sobre_p1", `${about} mb-2`, { sao_joao: { to: "/santo-do-dia?data=2026-12-27" }, apostolos: { to: "/estrutura#episcopado" } }),
    rich("oracoes.sao_policarpo_sobre_p2", `${about} mb-6`), quote("oracoes.sao_policarpo_texto"),
  ],
};
