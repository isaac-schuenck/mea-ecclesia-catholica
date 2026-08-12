import type { ArticleContentBlock, ArticleDocument } from "~/content/articleTypes";

const paragraphClass = "text-gray-600 leading-relaxed text-justify mb-2";
const finalParagraphClass = "text-gray-600 leading-relaxed text-justify";

const p = (keypath: string, options: Partial<ArticleContentBlock> = {}) => ({
  type: "paragraph" as const,
  keypath,
  class: paragraphClass,
  ...options,
}) as ArticleContentBlock;

const image = (
  src: string,
  captionKey: string,
  className: string,
  imageClass = "block h-auto rounded-md",
): ArticleContentBlock => ({
  type: "image",
  src,
  alt: "",
  altKey: captionKey,
  captionKey,
  class: className,
  imageClass,
});

const subheading = (textKey: string, id?: string, className?: string): ArticleContentBlock => ({
  type: "subheading",
  textKey,
  id,
  class: className,
});

const document = (
  id: string,
  titleKey: string,
  blocks: ArticleContentBlock[],
  containerClass?: string,
): ArticleDocument => ({ id, titleKey, blocks, containerClass });

export const liturgicalYearSections: ArticleDocument[] = [
  document("o-ano-liturgico", "ano_liturgico.titulo", [
    p("ano_liturgico.p1"),
    p("ano_liturgico.p2"),
    p("ano_liturgico.p3", { class: finalParagraphClass }),
  ]),

  document("advento", "ano_liturgico.advento_titulo", [
    image(
      "https://www.padreeustaquio.com.br/wp-content/uploads/2022/12/coroa-do-advento.jpeg",
      "ano_liturgico.advento_imagem",
      "w-32 md:w-64 float-right ml-4 md:ml-7 mb-2 md:mb-4",
    ),
    p("ano_liturgico.advento_p1"),
    p("ano_liturgico.advento_p2", { class: "text-gray-600 leading-relaxed text-justify mb-3" }),
    {
      type: "group",
      class: "border-l-4 border-[#D4AF37]/60 pl-5 mb-4 space-y-2 text-gray-600",
      blocks: [
        p("ano_liturgico.advento_expectativa_1", { class: "leading-relaxed text-justify" }),
        p("ano_liturgico.advento_expectativa_2", { class: "leading-relaxed text-justify" }),
      ],
    },
    p("ano_liturgico.advento_p3"),
    p("ano_liturgico.advento_p4", {
      formats: { quaresma: { tag: "span", translationKey: "palavras_chave.quaresma" } },
    }),
    p("ano_liturgico.advento_p5"),
    {
      type: "group",
      id: "gaudete",
      class: "scroll-mt-24",
      blocks: [
        p("ano_liturgico.advento_gaudete_intro", { class: "text-gray-600 leading-relaxed text-justify mb-3" }),
        {
          type: "group",
          tag: "blockquote",
          class: "border-l-4 border-[#D4AF37] bg-[#D4AF37]/5 px-4 py-3 my-4 text-gray-600 leading-relaxed",
          blocks: [
            { type: "text", keypath: "ano_liturgico.advento_gaudete_latim", class: "italic mb-1" },
            p("ano_liturgico.advento_gaudete_traducao", { class: "" }),
          ],
        },
        p("ano_liturgico.advento_p6", { class: finalParagraphClass }),
      ],
    },
  ], "flow-root"),

  document("tempo-natal", "ano_liturgico.natal_titulo", [
    image(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Botticelli_-_Adoration_of_the_Magi_%28Zanobi_Altar%29_-_Uffizi.jpg/330px-Botticelli_-_Adoration_of_the_Magi_%28Zanobi_Altar%29_-_Uffizi.jpg",
      "ano_liturgico.natal_imagem_adoracao_magos",
      "w-36 md:w-72 float-left mr-4 md:mr-7 mb-2 md:mb-4",
    ),
    p("ano_liturgico.natal_p1"), p("ano_liturgico.natal_p2"), p("ano_liturgico.natal_p3"),
    p("ano_liturgico.natal_p4"), p("ano_liturgico.natal_p5"),
    image(
      "https://upload.wikimedia.org/wikipedia/commons/7/70/Girolamo_Donnini_Matanza_de_los_Inocentes_Fondazione_Pietro_Manodori.jpg",
      "ano_liturgico.natal_imagem_santos_inocentes",
      "w-36 md:w-72 float-right ml-4 md:ml-7 mb-2 md:mb-4",
    ),
    p("ano_liturgico.natal_p6"), p("ano_liturgico.natal_p7"), p("ano_liturgico.natal_p8"),
    p("ano_liturgico.natal_p9"), p("ano_liturgico.natal_p10"),
    { type: "note", keypath: "ano_liturgico.natal_obs", class: "mb-2" },
    p("ano_liturgico.natal_p11", { class: finalParagraphClass }),
  ], "flow-root"),

  document("tempo-comum-primeira-parte", "ano_liturgico.tempo_comum_1_titulo", [
    p("ano_liturgico.tempo_comum_1_p1", { links: { pascoa: { to: "/ano-liturgico#pascoa" } } }),
    p("ano_liturgico.tempo_comum_1_p2"), p("ano_liturgico.tempo_comum_1_p3"),
    image(
      "https://img.cancaonova.com/cnimages/canais/uploads/sites/11/2025/06/padre-com-paramentos-verdes-tempo-comum-_-foto-mart-production-de-pexels.png",
      "ano_liturgico.tempo_comum_1_imagem",
      "w-36 md:w-64 float-left mr-4 md:mr-7 mb-2 md:mb-4",
    ),
    p("ano_liturgico.tempo_comum_1_p4"), p("ano_liturgico.tempo_comum_1_p5"),
    p("ano_liturgico.tempo_comum_1_p6"),
    p("ano_liturgico.tempo_comum_1_p7", { class: finalParagraphClass }),
  ], "flow-root"),

  document("quaresma", "ano_liturgico.quaresma_titulo", [
    p("ano_liturgico.quaresma_p1", { links: { pascoa: { to: "/ano-liturgico#pascoa" } } }),
    p("ano_liturgico.quaresma_p2"), p("ano_liturgico.quaresma_p3"),
    image(
      "https://upload.wikimedia.org/wikipedia/commons/1/17/Christ_in_the_Wilderness_-_Ivan_Kramskoy_-_Google_Cultural_Institute.jpg",
      "ano_liturgico.quaresma_imagem_deserto",
      "w-32 md:w-56 float-right ml-4 md:ml-7 mb-2 md:mb-4",
      "h-auto rounded-md object-contain",
    ),
    p("ano_liturgico.quaresma_p4"), p("ano_liturgico.quaresma_p5"),
    image(
      "https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2010/02/formacao_qual-o-sentido-da-quarta-feira-de-cinzas-1.jpg",
      "ano_liturgico.quaresma_imagem_cinzas",
      "w-32 md:w-56 float-left mr-4 md:mr-7 mb-2 md:mb-4",
      "aspect-square rounded-md object-cover",
    ),
    p("ano_liturgico.quaresma_p6"), p("ano_liturgico.quaresma_p7"),
    p("ano_liturgico.quaresma_p8", { id: "laetare", class: `${paragraphClass} scroll-mt-24` }),
    subheading("ano_liturgico.semana_santa_titulo", "semana-santa"),
    image(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrVSkPXIbr426nRsdMu0uvBFhGa1KDlKiGvrV8DM86qJ-lcoocRirMgs4&s=10",
      "ano_liturgico.semana_santa_imagem_ramos",
      "w-32 md:w-56 float-left mr-4 md:mr-7 mb-2 md:mb-4",
      "aspect-square rounded-md object-cover",
    ),
    p("ano_liturgico.semana_santa_p1"), p("ano_liturgico.semana_santa_p2"),
    p("ano_liturgico.semana_santa_p3"), p("ano_liturgico.semana_santa_p4"),
    image(
      "https://istoe.com.br/wp-content/uploads/2021/05/ceia-2-1280x720-1-1200x630.jpg",
      "ano_liturgico.semana_santa_imagem_ultima_ceia",
      "w-32 md:w-56 float-right ml-4 md:ml-7 mb-2 md:mb-4",
      "h-auto rounded-md object-contain",
    ),
    p("ano_liturgico.semana_santa_p5"),
    p("ano_liturgico.semana_santa_p6", {
      class: finalParagraphClass,
      links: { eucaristia: { to: "/missa#liturgia-eucaristica" } },
    }),
  ]),

  document("triduo-pascal", "ano_liturgico.triduo_titulo", [
    p("ano_liturgico.triduo_p1"),
    image(
      "https://upload.wikimedia.org/wikipedia/commons/9/95/Peter_Paul_Rubens_-_Christ_on_the_Cross_between_the_Two_Thieves_-_WGA20235.jpg",
      "ano_liturgico.triduo_imagem_crucificacao",
      "w-32 md:w-56 float-left mr-4 md:mr-7 mb-2 md:mb-4",
      "h-auto rounded-md object-contain",
    ),
    p("ano_liturgico.triduo_p2"), p("ano_liturgico.triduo_p3"), p("ano_liturgico.triduo_p4"),
    image(
      "https://i.ytimg.com/vi/ofwhhzIksxo/maxresdefault.jpg",
      "ano_liturgico.triduo_imagem_tumulo_vazio",
      "w-32 md:w-72 float-right ml-4 md:ml-7 mb-2 md:mb-4",
      "aspect-video rounded-md object-cover",
    ),
    p("ano_liturgico.triduo_p5"),
    p("ano_liturgico.triduo_p6", { class: finalParagraphClass }),
  ]),

  document("tempo-pascal", "ano_liturgico.tempo_pascal_titulo", [
    image(
      "https://comshalom.org/wp-content/uploads/2015/07/22/redacao/Santa-Maria-Madalena.jpg",
      "ano_liturgico.tempo_pascal_imagem_madalena",
      "w-32 md:w-56 float-left mr-4 md:mr-7 mb-2 md:mb-4",
      "h-auto rounded-md object-contain",
    ),
    p("ano_liturgico.tempo_pascal_p1"), p("ano_liturgico.tempo_pascal_p2"),
    p("ano_liturgico.tempo_pascal_p3"),
    p("ano_liturgico.tempo_pascal_p4", { links: { exequias: { to: "/missa#preto" } } }),
    p("ano_liturgico.tempo_pascal_p5"), p("ano_liturgico.tempo_pascal_p6"),
    image(
      "https://cdn.diocesedecrato.org/wp-content/uploads/2022/05/A5C6B997-E00B-4EF3-8AD5-018601E07146.jpeg",
      "ano_liturgico.tempo_pascal_imagem_ascensao",
      "w-32 md:w-56 float-right ml-4 md:ml-7 mb-2 md:mb-4",
      "h-auto rounded-md object-contain",
    ),
    p("ano_liturgico.tempo_pascal_p7"),
    p("ano_liturgico.tempo_pascal_p8", { links: { virgem_maria: { to: "/intercessao-mediacao" } } }),
    p("ano_liturgico.tempo_pascal_p9", { class: finalParagraphClass }),
  ]),

  document("pentecostes", "ano_liturgico.pentecostes_titulo", [
    p("ano_liturgico.pentecostes_p1"), p("ano_liturgico.pentecostes_p2"),
    image(
      "https://static.wixstatic.com/media/d70eaf_7a97ba56a9a74dc88c5f67f43a5b0046~mv2.jpg/v1/fill/w_421,h_719,al_c,lg_1,q_80/d70eaf_7a97ba56a9a74dc88c5f67f43a5b0046~mv2.jpg",
      "ano_liturgico.pentecostes_imagem",
      "w-32 md:w-56 float-left mr-4 md:mr-7 mb-2 md:mb-4",
      "h-auto rounded-md object-contain",
    ),
    p("ano_liturgico.pentecostes_p3", { links: { virgem_maria: { to: "/intercessao-mediacao" } } }),
    p("ano_liturgico.pentecostes_p4"), p("ano_liturgico.pentecostes_p5"),
    p("ano_liturgico.pentecostes_p6"),
    p("ano_liturgico.pentecostes_p7", { links: { exequias: { to: "/missa#preto" } } }),
    p("ano_liturgico.pentecostes_p8", { class: finalParagraphClass }),
  ]),

  document("tempo-comum-segunda-parte", "ano_liturgico.tempo_comum_2_titulo", [
    p("ano_liturgico.tempo_comum_2_p1"), p("ano_liturgico.tempo_comum_2_p2"),
    p("ano_liturgico.tempo_comum_2_p3"), p("ano_liturgico.tempo_comum_2_p4"),
    p("ano_liturgico.tempo_comum_2_p5"),
    image(
      "https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2019/06/formacao_a-solenidade-de-corpus-christi-sacramento-do-amor-e-da-proximidade.jpg",
      "ano_liturgico.tempo_comum_2_imagem_corpus_christi",
      "w-32 md:w-56 float-right ml-4 md:ml-7 mb-2 md:mb-4",
      "aspect-square rounded-md object-cover",
    ),
    p("ano_liturgico.tempo_comum_2_p6", { links: { eucaristia: { to: "/missa#liturgia-eucaristica" } } }),
    p("ano_liturgico.tempo_comum_2_p7"),
    image(
      "https://comshalom.org/wp-content/uploads/2020/08/assuncao-de-nossa-senhora-2020-ano-a-01.png",
      "ano_liturgico.tempo_comum_2_imagem_assuncao",
      "w-32 md:w-56 float-left mr-4 md:mr-7 mb-2 md:mb-4",
      "h-auto rounded-md object-contain",
    ),
    p("ano_liturgico.tempo_comum_2_p8", {
      id: "finados",
      class: `${paragraphClass} scroll-mt-24`,
      links: { virgem_maria: { to: "/intercessao-mediacao" } },
    }),
    subheading("ano_liturgico.cristo_rei_titulo", undefined, "clear-both"),
    image(
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Spas_vsederzhitel_sinay.jpg",
      "ano_liturgico.cristo_rei_imagem",
      "w-32 md:w-40 float-right ml-4 md:ml-7 mb-2 md:mb-4",
      "h-auto rounded-md object-contain",
    ),
    p("ano_liturgico.cristo_rei_p1"), p("ano_liturgico.cristo_rei_p2"),
    p("ano_liturgico.cristo_rei_p3"), p("ano_liturgico.cristo_rei_p4"),
    subheading("ano_liturgico.ciclo_recomeca_titulo", undefined, "clear-both"),
    p("ano_liturgico.ciclo_recomeca_p1"), p("ano_liturgico.ciclo_recomeca_p2"),
    p("ano_liturgico.ciclo_recomeca_p3"),
    p("ano_liturgico.ciclo_recomeca_p4", { class: finalParagraphClass }),
  ]),

  document("datas-principais", "ano_liturgico.datas_titulo", [
    { type: "text", keypath: "ano_liturgico.datas_intro", class: "text-gray-600 leading-relaxed text-justify mb-8" },
    { type: "subheading", id: "datas-fixas", compact: true, textKey: "ano_liturgico.datas_fixas_titulo" },
    {
      type: "list",
      keypath: "ano_liturgico.datas_fixas",
      itemKeyPrefix: "data-fixa",
      class: "list-disc marker:text-[#D4AF37] pl-6 space-y-2 text-gray-600 leading-relaxed mb-12",
    },
    { type: "subheading", compact: true, textKey: "ano_liturgico.datas_moveis_titulo" },
    {
      type: "list",
      keypath: "ano_liturgico.datas_moveis",
      itemKeyPrefix: "data-movel",
      class: "list-disc marker:text-[#D4AF37] pl-6 space-y-2 text-gray-600 leading-relaxed",
    },
  ]),
];
