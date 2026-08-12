import type { ArticleCategory, ArticleDocument } from "~/content/articleTypes";

const paragraph = (keypath: string, className = "leading-relaxed text-justify mb-2") => ({
  type: "paragraph" as const,
  keypath,
  class: className,
});

export const religiousArticleCategories: ArticleCategory[] = [
  {
    id: "artigos-liturgicos",
    titleKey: "artigos_religiosos.artigos_liturgicos_titulo",
    textKey: "artigos_religiosos.artigos_liturgicos_p1",
    articleIds: [],
  },
  {
    id: "artigos-devocionais",
    titleKey: "artigos_religiosos.artigos_devocionais_titulo",
    textKey: "artigos_religiosos.artigos_devocionais_p1",
    articleIds: ["crucifixo", "terco"],
  },
  {
    id: "simbolos-cristaos",
    titleKey: "artigos_religiosos.simbolos_cristaos_titulo",
    textKey: "artigos_religiosos.simbolos_cristaos_p1",
    articleIds: ["cruz_petrina"],
  },
];

// Este documento descreve o conteúdo; o componente decide como cada bloco é exibido.
export const religiousArticles: ArticleDocument[] = [
  {
    id: "crucifixo",
    titleKey: "artigos_religiosos.cruxifixo",
    containerClass: "clearfix text-gray-700",
    blocks: [
      {
        type: "image",
        src: "https://m.media-amazon.com/images/I/81XLIpDnoLL._AC_SX679_.jpg",
        alt: "Crucifixo",
        captionKey: "imagens.cristo_crucificado",
        class: "float-right ml-6 mb-2 w-1/3 md:w-1/4 max-w-sm",
      },
      paragraph("artigos_religiosos.cruxifixo_p1"),
      {
        ...paragraph("artigos_religiosos.cruxifixo_p2"),
        links: { pascoa: { to: "/ano-liturgico" } },
      },
      paragraph("artigos_religiosos.cruxifixo_p3"),
      paragraph("artigos_religiosos.cruxifixo_p4", "leading-relaxed text-justify"),
    ],
  },
  {
    id: "cruz_petrina",
    titleKey: "artigos_religiosos.cruz_petrina",
    containerClass: "flow-root text-gray-700",
    blocks: [
      {
        type: "image",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Peter%27s_Cross.svg/250px-Peter%27s_Cross.svg.png",
        alt: "Cruz Petrina",
        captionKey: "imagens.cruz_petrina",
        class: "float-right ml-6 mb-2 w-24 md:w-32",
        imageClass: "h-auto bg-white p-3",
      },
      paragraph("artigos_religiosos.cruz_petrina_p1"),
      paragraph("artigos_religiosos.cruz_petrina_p2"),
      paragraph("artigos_religiosos.cruz_petrina_p3", "leading-relaxed text-justify mb-4 italic border-l-4 border-[#D4AF37] pl-4 text-gray-500"),
      {
        type: "image",
        src: "/sjpii.jpeg",
        alt: "São João Paulo II",
        captionKey: "imagens.catedra_papal",
        class: "float-left mr-6 mb-2 w-48",
      },
      paragraph("artigos_religiosos.cruz_petrina_p4"),
      paragraph("artigos_religiosos.cruz_petrina_p5", "leading-relaxed text-justify"),
    ],
  },
  {
    id: "terco",
    titleKey: "artigos_religiosos.terco",
    containerClass: "flow-root text-gray-700",
    blocks: [
      {
        type: "image",
        src: "https://historicenterprises.com/bmz_cache/4/4575ffb7a838189fa7b0b04961b2e692.image.400x450.jpeg",
        alt: "Medieval paternoster",
        captionKey: "imagens.paternosters",
        class: "float-left mr-6 mb-2 w-32 md:w-48",
      },
      paragraph("artigos_religiosos.terco_p1"),
      paragraph("artigos_religiosos.terco_p2"),
      paragraph("artigos_religiosos.terco_p3"),
      {
        type: "image",
        src: "https://www.arsvalue.com/Upl/Auctions/2370/4234/572314/223-795840.jpg",
        alt: "Madonna del Rosario San Domenico dipinto",
        captionKey: "imagens.madonna_do_rosário",
        class: "float-right ml-6 mb-2 w-48",
      },
      paragraph("artigos_religiosos.terco_p4"),
      paragraph("artigos_religiosos.terco_p5", "leading-relaxed text-justify"),
      paragraph("artigos_religiosos.terco_p6"),
      paragraph("artigos_religiosos.terco_p7", "leading-relaxed text-justify"),
    ],
  },
];
