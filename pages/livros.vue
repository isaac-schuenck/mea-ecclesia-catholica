<template>
  <main class="flex-grow">
    <section class="max-w-7xl mx-auto pt-20 pb-12 px-6">
      <h3
        class="text-3xl font-bold text-[#041122] mb-12 font-serif border-b-2 border-[#D4AF37] pb-3 inline-block"
      >
        {{ $t("livro.titulo") }}
      </h3>

      <p class="text-gray-600 leading-relaxed text-justify">
        {{ $t("livro.subtitulo") }}
      </p>
    </section>

    <BookSection
      title-key="livro.sagrada_escritura"
      :books="livrosSagradaEscritura"
    />
    <BookSection title-key="livro.patristica" :books="livrosPatristica" />
    <BookSection title-key="livro.historia" :books="livrosHistoria" />
    <BookSection
      title-key="livro.doutrina_apologetica"
      :books="livrosDoutrinaApologetica"
    />
    <BookSection title-key="livro.escolastica" :books="livrosEscolastica" />
    <BookSection
      title-key="livro.formacao_humana"
      :books="livrosFormacaoHumana"
    />
    <BookSection
      title-key="livro.espiritualidade_ascetica"
      :books="livrosEspiritualidadeAscetica"
    />
    <BookSection title-key="livro.biografias" :books="livrosBiografias" />
  </main>
</template>

<script setup>
// --- SAGRADA ESCRITURA ---
const livrosSagradaEscritura = ref([
  {
    tituloKey: "livro.tesouro_tradicao",
    secondaryKey: "livro.minha_biblioteca_catolica",
    capas: [
      "/livros/tesourodatradicao.webp",
      "https://s3.us-east-1.amazonaws.com/static.mbc.prod.minhabibliotecacatolica.com.br/produtos/1779727918_54271471.webp",
      "https://s3.us-east-1.amazonaws.com/static.mbc.prod.minhabibliotecacatolica.com.br/produtos/1779727918_88f6cb55.webp",
    ],
  },
  {
    tituloKey: "livro.biblia_sagrada",
    secondaryKey: "livro.minha_biblioteca_catolica",
    capas: [
      "https://s3.us-east-1.amazonaws.com/static.mbc.prod.minhabibliotecacatolica.com.br/produtos/1764172728_57866d87.webp",
      "https://s3.us-east-1.amazonaws.com/static.mbc.prod.minhabibliotecacatolica.com.br/produtos/1764172728_0fc15aca.webp",
      "https://s3.us-east-1.amazonaws.com/static.mbc.prod.minhabibliotecacatolica.com.br/produtos/1764172728_c6002406.webp",
      "https://s3.us-east-1.amazonaws.com/static.mbc.prod.minhabibliotecacatolica.com.br/produtos/1764763609_cfc0d2a6.webp",
    ],
  },
  {
    tituloKey: "livro.jerusalem",
    secondaryKey: "livro.paulus",
    capas: [
      "https://m.media-amazon.com/images/I/51djhrt+JhL._SY466_.jpg",
      "https://editorapaulus.vtexassets.com/arquivos/ids/166709-1200-auto?v=639166298296870000&width=1200&height=auto&aspect=true",
    ],
  },
  {
    tituloKey: "livro.ave_maria",
    secondaryKey: "livro.editora_ave_maria",
    capas: [
      "https://m.media-amazon.com/images/I/51a0N24RQZL._SY425_.jpg",
      "https://m.media-amazon.com/images/I/51RGpZCSSCL._SY342_.jpg",
      "https://avemariab2c.jetassets.com.br/produto/20240528163507_4858995142_D.jpg",
      "https://ateliecatolico.bwimg.com.br/ateliecatolico/produtos/cod-2136---biblia-sagrada---capa-lantejoulas---cor-branca---editora-ave-maria-1684853717.5486.jpeg",
      "https://editorapaulus.vtexassets.com/arquivos/ids/156303-1200-auto?v=637904601715370000&width=1200&height=auto&aspect=true",
    ],
  },
  {
    tituloKey: "livro.peregrino",
    secondaryKey: "livro.paulus",
    capas: [
      "https://m.media-amazon.com/images/I/61SOUO1NTiL._SY342_.jpg",
      "https://editorapaulus.vtexassets.com/arquivos/ids/156042-1200-auto?v=637903160413170000&width=1200&height=auto&aspect=true",
    ],
  },
  {
    tituloKey: "livro.navarra",
    secondaryKey: "livro.quadrante",
    capas: [
      "https://assets.betalabs.net/fit-in/390x450/filters:fill(white):format(webp)/production/quadranteeditora/item-images/db01ba489235f109b53e08e27d3ebb7a.jpg",
      "https://assets.betalabs.net/fit-in/390x450/filters:fill(white):format(webp)/production/quadranteeditora/item-images/b138dd48367e159118085ea10990a8f8.jpg",
      "https://assets.betalabs.net/fit-in/390x450/filters:fill(white):format(webp)/production/quadranteeditora/item-images/24780c7c3a2631186fc3e0e900ae8202.jpg",
    ],
  },
  {
    tituloKey: "livro.sacra_vulgata",
    secondaryKey: "",
    capas: [
      "https://m.media-amazon.com/images/I/61rPC-SOWZL._SY342_.jpg",
      "https://m.media-amazon.com/images/I/71WTcdsB0cL._SY425_.jpg",
    ],
  },
]);

const makePatristicaMeta = (durationKey, difficultyKey) => [
  { labelKey: "livro.labels.duracao", valueKey: durationKey },
  { labelKey: "livro.labels.dificuldade", valueKey: difficultyKey },
];
// --- PATRISTICA ---
const livrosPatristica = ref([
  {
    tituloKey: "livro.patristica_livros.padres_igreja",
    secondaryKey: "livro.autores.papa_bento_xvi",
    capas: [
      "https://editorapaulus.vtexassets.com/arquivos/ids/158928-1200-auto?v=637909036821800000&width=1200&height=auto&aspect=true",
      "https://m.media-amazon.com/images/I/A1zH6UdqD4L._SY466_.jpg",
    ],
    meta: makePatristicaMeta("livro.duracao.curto", "livro.dificuldade.facil"),
  },
  {
    tituloKey: "livro.patristica_livros.patristica_paulus_1",
    secondaryKey: "livro.autores.padres_apostolicos",
    capas: [
      "https://editorapaulus.vtexassets.com/arquivos/ids/159103-1200-auto?v=637909108929130000&width=1200&height=auto&aspect=true",
      "https://editorapaulus.vtexassets.com/arquivos/ids/159103-1200-auto?v=637909108929130000&width=1200&height=auto&aspect=true",
    ],
    meta: makePatristicaMeta(
      "livro.duracao.medio",
      "livro.dificuldade.facil_media",
    ),
  },
  {
    tituloKey: "livro.patristica_livros.patristica_paulus_32",
    secondaryKey: "livro.autores.santo_agostinho",
    capas: [
      "https://m.media-amazon.com/images/I/81ovXSGPevL._SY466_.jpg",
      "https://editorapaulus.vtexassets.com/arquivos/ids/159082-1200-auto?v=637909108667800000&width=1200&height=auto&aspect=true",
    ],
    meta: makePatristicaMeta("livro.duracao.medio", "livro.dificuldade.media"),
  },
  {
    tituloKey: "livro.patristica_livros.sobre_o_livre_arbitrio",
    secondaryKey: "livro.autores.santo_agostinho",
    capas: ["https://m.media-amazon.com/images/I/41tF7cF0sEL._SY342_.jpg"],
    meta: makePatristicaMeta(
      "livro.duracao.medio",
      "livro.dificuldade.media_dificil",
    ),
  },
  {
    tituloKey: "livro.patristica_livros.enchiridion",
    secondaryKey: "livro.autores.santo_agostinho",
    capas: ["https://m.media-amazon.com/images/I/61ivUI7NZpL._SY425_.jpg"],
    meta: makePatristicaMeta("livro.duracao.curto", "livro.dificuldade.media"),
  },
  {
    tituloKey: "livro.patristica_livros.patristica_paulus_15",
    secondaryKey: "livro.autores.eusebio_cesareia",
    capas: [
      "https://editorapaulus.vtexassets.com/arquivos/ids/159126-1200-auto?v=637909109245100000&width=1200&height=auto&aspect=true",
      "https://m.media-amazon.com/images/I/61Ue55XxmmL._SY342_.jpg",
    ],
    meta: makePatristicaMeta("livro.duracao.longo", "livro.dificuldade.media"),
  },
  {
    tituloKey: "livro.patristica_livros.patristica_paulus_4",
    secondaryKey: "livro.autores.santo_irineu",
    capas: [
      "https://editorapaulus.vtexassets.com/arquivos/ids/160317-1200-auto?v=637925355329970000&width=1200&height=auto&aspect=true",
      "https://static.cedet.com.br/produtos_imagem_principal_large/1769-525x791.jpg?v=1750275325",
    ],
    meta: makePatristicaMeta(
      "livro.duracao.longo",
      "livro.dificuldade.dificil",
    ),
  },
  {
    tituloKey: "livro.patristica_livros.cidade_de_deus",
    secondaryKey: "livro.autores.santo_agostinho",
    capas: [
      "https://m.media-amazon.com/images/I/61DrHrvC6jL._SY522_.jpg",
      "https://m.media-amazon.com/images/I/61dCjx-6KUL._SY522_.jpg",
    ],
    meta: makePatristicaMeta(
      "livro.duracao.muito_longo4",
      "livro.dificuldade.dificil",
    ),
  },
  {
    tituloKey: "livro.patristica_livros.doutrina_crista",
    secondaryKey: "livro.autores.santo_agostinho",
    capas: [
      "https://m.media-amazon.com/images/I/81OrqtUix8L._SY522_.jpg",
      "https://editorapaulus.vtexassets.com/arquivos/ids/166460-1200-auto?v=639162687018230000&width=1200&height=auto&aspect=true",
    ],
    meta: makePatristicaMeta(
      "livro.duracao.medio",
      "livro.dificuldade.media_dificil",
    ),
  },
  {
    tituloKey: "livro.patristica_livros.patristica_paulus_7",
    secondaryKey: "livro.autores.santo_agostinho",
    capas: [
      "https://m.media-amazon.com/images/I/41McZ2u-MjL._SY342_.jpg",
      "https://editorapaulus.vtexassets.com/arquivos/ids/159091-1200-auto?v=637909108780400000&width=1200&height=auto&aspect=true",
    ],
    meta: makePatristicaMeta(
      "livro.duracao.longo",
      "livro.dificuldade.muito_dificil",
    ),
  },
]);
// --- HISTÓRIA ---
const livrosHistoria = ref([
  {
    tituloKey: "livro.historia_livros.civilizacao",
    secondaryKey: "livro.autores.thomas_woods",
    capas: [
      "https://m.media-amazon.com/images/I/91m0m5ghnLL._SY466_.jpg",
      "https://static.cedet.com.br/produtos_imagem_principal_large/25981-525x791.jpg?v=1750276078",
    ],
    meta: [
      { labelKey: "livro.labels.duracao", valueKey: "livro.duracao.medio" },
      {
        labelKey: "livro.labels.dificuldade",
        valueKey: "livro.dificuldade.facil",
      },
    ],
  },
  {
    tituloKey: "livro.historia_livros.luz_sobre_idade_media",
    secondaryKey: "livro.autores.regine_pernoud",
    capas: [
      "https://static.cedet.com.br/produtos_imagem_principal_large/25981-525x791.jpg?v=1750276078",
      "https://assets.betalabs.net/fit-in/390x450/filters:fill(white):format(webp)/production/quadranteeditora/item-images/d864503f02f9ee0499e3394ac8de186e.jpg",
    ],
    meta: [
      {
        labelKey: "livro.labels.duracao",
        valueKey: "livro.duracao.curto",
      },
      {
        labelKey: "livro.labels.dificuldade",
        valueKey: "livro.dificuldade.facil",
      },
    ],
  },
  {
    tituloKey: "livro.historia_livros.as_cruzadas",
    secondaryKey: "livro.autores.thomas_madden",
    capas: [
      "https://m.media-amazon.com/images/I/91BGsFG2HrL._SY385_.jpg",
      "https://m.media-amazon.com/images/I/51FVZYUZ48L.jpg",
    ],
    meta: [
      {
        labelKey: "livro.labels.duracao",
        valueKey: "livro.duracao.medio",
      },
      {
        labelKey: "livro.labels.dificuldade",
        valueKey: "livro.dificuldade.facil",
      },
    ],
  },
  {
    tituloKey: "livro.historia_livros.as_cruzadas_historia",
    secondaryKey: "livro.autores.jonathan_riley_smith",
    capas: [
      "https://static.cedet.com.br/produtos_imagem_principal_large/9833-525x791.jpg?v=1750275654",
    ],
    meta: [
      {
        labelKey: "livro.labels.duracao",
        valueKey: "livro.duracao.medio",
      },
      {
        labelKey: "livro.labels.dificuldade",
        valueKey: "livro.dificuldade.media",
      },
    ],
  },
  {
    tituloKey: "livro.historia_livros.inquisition",
    secondaryKey: "livro.autores.edward_peters",
    capas: [
      "https://m.media-amazon.com/images/I/61GG2zLB3nL._SY466_.jpg",
      "https://m.media-amazon.com/images/I/81Zr1tIHw3L._SY522_.jpg",
    ],
    meta: [
      {
        labelKey: "livro.labels.duracao",
        valueKey: "livro.duracao.longo",
      },
      {
        labelKey: "livro.labels.dificuldade",
        valueKey: "livro.dificuldade.media",
      },
    ],
  },
  {
    tituloKey: "livro.historia_livros.inquisicao_espanhola",
    secondaryKey: "livro.autores.henry_kamen",
    capas: [
      "https://server.knosys.es/_sefarad_wp3/knobj?bd=3B3ED0C5E90&t=1&obj=1966.%20Henry%20Kamen,%20A%20Inquisi%C3%A7%C3%A3o%20na%20Espanha.jpg&id=E863CF501D2416C91915560",
      "https://m.media-amazon.com/images/I/71V8RXFzK6L.jpg",
      "https://m.media-amazon.com/images/I/41TQ7LtLceL._SY445_SX342_ML2_.jpg",
    ],
    meta: [
      {
        labelKey: "livro.labels.duracao",
        valueKey: "livro.duracao.longo",
      },
      {
        labelKey: "livro.labels.dificuldade",
        valueKey: "livro.dificuldade.media",
      },
    ],
  },
  {
    tituloKey: "livro.historia_livros.historia_da_igreja",
    secondaryKey: "livro.autores.giacomo_martina",
    capas: [
      "https://m.media-amazon.com/images/I/91V9IWJjlwL._SY466_.jpg",
      "https://m.media-amazon.com/images/I/81CDQB82TOL._SY466_.jpg",
      "https://m.media-amazon.com/images/I/91q20oeEb+L._SY466_.jpg",
      "https://m.media-amazon.com/images/I/5115+9lCFcL._SY466_.jpg",
    ],
    meta: [
      {
        labelKey: "livro.labels.duracao",
        valueKey: "livro.duracao.muito_longo1",
      },
      {
        labelKey: "livro.labels.dificuldade",
        valueKey: "livro.dificuldade.media",
      },
    ],
  },
  {
    tituloKey: "livro.historia_livros.historia_da_igreja_de_cristo",
    secondaryKey: "livro.autores.daniel_rops",
    capas: [
      "https://assets.betalabs.net/fit-in/390x450/filters:fill(white):format(webp)/production/quadranteeditora/item-images/8dfd3e32b2e2a9a4d8fdf1f0acbdf514.jpg",
      "https://assets.betalabs.net/fit-in/390x450/filters:fill(white):format(webp)/production/quadranteeditora/item-images/5248626241393519a62beac548532282.jpg",
    ],
    meta: [
      {
        labelKey: "livro.labels.duracao",
        valueKey: "livro.duracao.muito_longo3",
      },
      {
        labelKey: "livro.labels.dificuldade",
        valueKey: "livro.dificuldade.media_dificil",
      },
    ],
  },
]);

// --- DOUTRINA E APOLOGÉTICA ---
const livrosDoutrinaApologetica = ref([
  {
    tituloKey: "livro.doutrina_apologetica_livros.youcat",
    secondaryKey: "livro.autores.papa_bento_xvi",
    capas: [
      "https://m.media-amazon.com/images/I/41DswMDOg2L._SX342_SY445_ML2_.jpg",
      "https://editorapaulus.vtexassets.com/arquivos/ids/163568-800-auto?v=638730697142370000&width=800&height=auto&aspect=true",
    ],
    meta: [
      {
        labelKey: "livro.labels.duracao",
        valueKey: "livro.duracao.curto",
      },
      {
        labelKey: "livro.labels.dificuldade",
        valueKey: "livro.dificuldade.facil",
      },
    ],
  },
  {
    tituloKey: "livro.doutrina_apologetica_livros.catecismo_maior_sao_pio_x",
    secondaryKey: "livro.autores.sao_pio_x",
    capas: [
      "https://m.media-amazon.com/images/I/915rhDQzNsL._SY466_.jpg",
      "https://cdn.awsli.com.br/600x450/618/618258/produto/224474630/mockup---01--3--63m84d86r2.jpg",
      "https://m.media-amazon.com/images/I/61WUP44qmuL._SY342_.jpg",
    ],
    meta: [
      { labelKey: "livro.labels.duracao", valueKey: "livro.duracao.curto" },
      {
        labelKey: "livro.labels.dificuldade",
        valueKey: "livro.dificuldade.facil",
      },
    ],
  },
  {
    tituloKey:
      "livro.doutrina_apologetica_livros.todos_os_caminhos_levam_a_roma",
    secondaryKey: "livro.autores.scott_hahn",
    capas: [
      "https://m.media-amazon.com/images/I/619dDNtAdbL._SY466_.jpg",
      "https://static.cedet.com.br/produtos_imagem_principal_large/22530-525x791.jpg?v=1750275998",
    ],
    meta: [
      { labelKey: "livro.labels.duracao", valueKey: "livro.duracao.medio" },
      {
        labelKey: "livro.labels.dificuldade",
        valueKey: "livro.dificuldade.facil",
      },
    ],
  },
  {
    tituloKey: "livro.doutrina_apologetica_livros.a_fé_explicada",
    secondaryKey: "livro.autores.leo_trese",
    capas: [
      "https://assets.betalabs.net/fit-in/390x450/filters:fill(white):format(webp)/production/quadranteeditora/item-images/f183c14457d7ac62b2671457dd82afde.png",
      "https://assets.betalabs.net/fit-in/390x450/filters:fill(white):format(webp)/production/quadranteeditora/item-images/27c821803d0bd10790b5dcbfba69b544.jpg",
      "https://m.media-amazon.com/images/I/61W7DykXeAL._SL1008_.jpg",
    ],
    meta: [
      { labelKey: "livro.labels.duracao", valueKey: "livro.duracao.medio" },
      {
        labelKey: "livro.labels.dificuldade",
        valueKey: "livro.dificuldade.media",
      },
    ],
  },
  {
    tituloKey: "livro.doutrina_apologetica_livros.introducao_ao_cristianismo",
    secondaryKey: "livro.autores.papa_bento_xvi",
    capas: [
      "https://edicoesloyola.f1cdn.com.br/view/false/false/true/false/3923.jpg?MzkyMy0yMDI1LTEwLTIyIDEyOjM5OjI3",
    ],
    meta: [
      { labelKey: "livro.labels.duracao", valueKey: "livro.duracao.medio" },
      {
        labelKey: "livro.labels.dificuldade",
        valueKey: "livro.dificuldade.dificil",
      },
    ],
  },
  {
    tituloKey:
      "livro.doutrina_apologetica_livros.o_amor_que_fez_o_sol_e_as_estrelas",
    secondaryKey: "livro.autores.jose_miguel",
    capas: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_723673-MLA80947185673_112024-F.webp",
    ],
    meta: [
      { labelKey: "livro.labels.duracao", valueKey: "livro.duracao.medio" },
      {
        labelKey: "livro.labels.dificuldade",
        valueKey: "livro.dificuldade.media",
      },
    ],
  },
  {
    tituloKey: "livro.doutrina_apologetica_livros.sintese_da_fe_catolica",
    secondaryKey: "livro.autores.jimenez_yaniz",
    capas: [
      "https://livrarialoyola.fbitsstatic.net/img/p/sintese-da-fe-catolica-a-doutrina-da-igreja-em-36-aulas-320262/515049.jpg?w=800&h=800&v=no-change&qs=ignore",
    ],
    meta: [
      { labelKey: "livro.labels.duracao", valueKey: "livro.duracao.medio" },
      {
        labelKey: "livro.labels.dificuldade",
        valueKey: "livro.dificuldade.media",
      },
    ],
  },
  {
    tituloKey:
      "livro.doutrina_apologetica_livros.o_diabo_lutero_e_o_protestantismo",
    secondaryKey: "livro.autores.julio_maria",
    capas: ["https://m.media-amazon.com/images/I/713VNP-LQgL._SY466_.jpg"],
    meta: [
      { labelKey: "livro.labels.duracao", valueKey: "livro.duracao.medio" },
      {
        labelKey: "livro.labels.dificuldade",
        valueKey: "livro.dificuldade.media",
      },
    ],
  },
  {
    tituloKey:
      "livro.doutrina_apologetica_livros.sao_gabriel_maome_e_o_islamismo",
    secondaryKey: "livro.autores.julio_maria",
    capas: [
      "https://static.cedet.com.br/produtos_imagem_principal_large/11431-525x791.jpg?v=1750275664",
    ],
    meta: [
      { labelKey: "livro.labels.duracao", valueKey: "livro.duracao.medio" },
      {
        labelKey: "livro.labels.dificuldade",
        valueKey: "livro.dificuldade.media",
      },
    ],
  },
  {
    tituloKey: "livro.doutrina_apologetica_livros.o_protestantismo_no_brasil",
    secondaryKey: "livro.autores.leonel_franca",
    capas: [
      "https://static.cedet.com.br/produtos_imagem_principal_large/14176-525x791.jpg?v=1750275751",
    ],
    meta: [
      { labelKey: "livro.labels.duracao", valueKey: "livro.duracao.longo" },
      {
        labelKey: "livro.labels.dificuldade",
        valueKey: "livro.dificuldade.media_dificil",
      },
    ],
  },
  {
    tituloKey: "livro.doutrina_apologetica_livros.historia_das_heresias",
    secondaryKey: "livro.autores.leonel_franca",
    capas: [
      "https://static.cedet.com.br/produtos_imagem_principal_large/14090-525x791.jpg?v=1750275750",
    ],
    meta: [
      {
        labelKey: "livro.labels.duracao",
        valueKey: "livro.duracao.muito_longo",
      },
      {
        labelKey: "livro.labels.dificuldade",
        valueKey: "livro.dificuldade.dificil",
      },
    ],
  },
  {
    tituloKey: "livro.doutrina_apologetica_livros.catecismo_da_igreja_catolica",
    secondaryKey: "livro.autores.sao_joao_paulo_ii",
    capas: [
      "https://www.ctsbooks.org/wp-content/uploads/2025/09/Do916-Catechism-Catholic-Church-3DHardbacktransparent-600x808.png",
      "https://editorapaulus.vtexassets.com/arquivos/ids/161035-800-auto?v=637992061161900000&width=800&height=auto&aspect=true",
      "https://loja.cancaonova.com/upload/produto/imagem/b_livro-catecismo-da-igreja-cat-lica.webp",
    ],
    meta: [
      {
        labelKey: "livro.labels.duracao",
        valueKey: "livro.duracao.muito_longo",
      },
      {
        labelKey: "livro.labels.dificuldade",
        valueKey: "livro.dificuldade.media_dificil",
      },
    ],
  },
]);

// --- ESCOLÁSTICA ---

const livrosEscolastica = ref([
  {
    tituloKey: "livro.escolastica_livros.gk_tomas_aquino",
    secondaryKey: "livro.autores.chesterton",
    capas: [
      "https://static.cedet.com.br/produtos_imagem_principal_large/4247-525x791.jpg?v=1750275487",
    ],
    meta: [
      {
        labelKey: "livro.labels.duracao",
        valueKey: "livro.duracao.medio",
      },
      {
        labelKey: "livro.labels.dificuldade",
        valueKey: "livro.dificuldade.facil_media",
      },
    ],
  },
  {
    tituloKey: "livro.escolastica_livros.compendio_teologia",
    secondaryKey: "livro.autores.santo_tomas",
    capas: [
      "https://m.media-amazon.com/images/I/61b7b6yr-YL._SY466_.jpg",
      "https://static.cedet.com.br/produtos_imagem_principal_large/13530-525x791.jpg?v=1750275745",
    ],
    meta: [
      { labelKey: "livro.labels.duracao", valueKey: "livro.duracao.medio" },
      {
        labelKey: "livro.labels.dificuldade",
        valueKey: "livro.dificuldade.media",
      },
    ],
  },
  {
    tituloKey: "livro.escolastica_livros.suma_teologica",
    secondaryKey: "livro.autores.santo_tomas",
    capas: [
      "https://static.cedet.com.br/produtos_imagem_principal_large/4750-525x791.jpg?v=1750275492",
      "https://editorapaulus.vtexassets.com/arquivos/ids/156505-800-auto?v=637904768557170000&width=800&height=auto&aspect=true",
      "https://livrarialoyola.fbitsstatic.net/img/p/colecao-suma-teologica-411922/606721.jpg?w=800&h=800&v=202506021812&qs=ignore",
    ],
    meta: [
      {
        labelKey: "livro.labels.duracao",
        valueKey: "livro.duracao.muito_longo2",
      },
      {
        labelKey: "livro.labels.dificuldade",
        valueKey: "livro.dificuldade.dificil",
      },
    ],
  },
]);

// --- FORMAÇÃO HUMANA ---
const livrosFormacaoHumana = ref([
  {
    tituloKey: "livro.formacao_livros.a_paciencia",
    secondaryKey: "livro.autores.francisco_faus",
    capas: [
      "https://assets.betalabs.net/production/quadranteeditora/item-images/6d740f6e1d7ac4d5806df5466b5ad9d9.jpg",
      "https://assets.betalabs.net/production/quadranteeditora/item-images/baafad9b86b5633a4a360cd020b74517.jpg",
    ],
    meta: [
      {
        labelKey: "livro.labels.duracao",
        valueKey: "livro.duracao.muito_curto",
      },
      {
        labelKey: "livro.labels.dificuldade",
        valueKey: "livro.dificuldade.facil",
      },
    ],
  },
  {
    tituloKey: "livro.formacao_livros.a_preguiça",
    secondaryKey: "livro.autores.francisco_faus",
    capas: [
      "https://assets.betalabs.net/production/quadranteeditora/item-images/3943773651261d6478e2f885d596c57c.jpg",
      "https://assets.betalabs.net/fit-in/390x450/filters:fill(white):format(webp)/production/quadranteeditora/item-images/d9442f5f56587bab20fc4e317449ce58.jpg",
    ],
    meta: [
      {
        labelKey: "livro.labels.duracao",
        valueKey: "livro.duracao.muito_curto",
      },
      {
        labelKey: "livro.labels.dificuldade",
        valueKey: "livro.dificuldade.facil",
      },
    ],
  },
  {
    tituloKey: "livro.formacao_livros.a_inveja",
    secondaryKey: "livro.autores.francisco_faus",
    capas: [
      "https://assets.betalabs.net/production/quadranteeditora/item-images/987d99ad2e7c7963d064453b898617a5.jpg",
      "https://assets.betalabs.net/production/quadranteeditora/item-images/df39d17b72279a17efeb5684273131c3.jpg",
    ],
    meta: [
      {
        labelKey: "livro.labels.duracao",
        valueKey: "livro.duracao.muito_curto",
      },
      {
        labelKey: "livro.labels.dificuldade",
        valueKey: "livro.dificuldade.facil",
      },
    ],
  },
  {
    tituloKey: "livro.formacao_livros.autodominio",
    secondaryKey: "livro.autores.francisco_faus",
    capas: [
      "https://assets.betalabs.net/fit-in/390x450/filters:fill(white):format(webp)/production/quadranteeditora/item-images/389acbf46d04074ac9f9c830e7087937.jpg",
      "https://assets.betalabs.net/fit-in/390x450/filters:fill(white):format(webp)/production/quadranteeditora/item-images/b6a66b2cd1966b7fbf7a88dbb328b909.jpg",
    ],
    meta: [
      {
        labelKey: "livro.labels.duracao",
        valueKey: "livro.duracao.muito_curto",
      },
      {
        labelKey: "livro.labels.dificuldade",
        valueKey: "livro.dificuldade.facil",
      },
    ],
  },
  {
    tituloKey: "livro.formacao_livros.o_homem_bom",
    secondaryKey: "livro.autores.francisco_faus",
    capas: [
      "https://assets.betalabs.net/fit-in/390x450/filters:fill(white):format(webp)/production/quadranteeditora/item-images/1451fbc59f490b1d4196e0c4c5628846.jpg",
      "https://assets.betalabs.net/fit-in/390x450/filters:fill(white):format(webp)/production/quadranteeditora/item-images/70b8f7545d5ea25660b070a48ba35803.jpg",
    ],
    meta: [
      { labelKey: "livro.labels.duracao", valueKey: "livro.duracao.curto" },
      {
        labelKey: "livro.labels.dificuldade",
        valueKey: "livro.dificuldade.facil",
      },
    ],
  },
  {
    tituloKey: "livro.formacao_livros.a_sabedoria_da_cruz",
    secondaryKey: "livro.autores.francisco_faus",
    capas: [
      "https://assets.betalabs.net/fit-in/390x450/filters:fill(white):format(webp)/production/quadranteeditora/item-images/1b0f8d2665b974193c1615dcf6e8b963.jpg",
    ],
    meta: [
      { labelKey: "livro.labels.duracao", valueKey: "livro.duracao.curto" },
      {
        labelKey: "livro.labels.dificuldade",
        valueKey: "livro.dificuldade.facil",
      },
    ],
  },
  {
    tituloKey: "livro.formacao_livros.o_otimismo",
    secondaryKey: "livro.autores.rafael_llano",
    capas: [
      "https://assets.betalabs.net/fit-in/390x450/filters:fill(white):format(webp)/production/quadranteeditora/item-images/2246f613349a1b5d63303240fbc6f103.jpg",
    ],
    meta: [
      { labelKey: "livro.labels.duracao", valueKey: "livro.duracao.medio" },
      {
        labelKey: "livro.labels.dificuldade",
        valueKey: "livro.dificuldade.facil",
      },
    ],
  },
  {
    tituloKey: "livro.formacao_livros.fortaleza",
    secondaryKey: "livro.autores.rafael_llano",
    capas: [
      "https://assets.betalabs.net/fit-in/390x450/filters:fill(white):format(webp)/production/quadranteeditora/item-images/70affc6f99a17bc6953cc2aaea10fd61.jpg",
      "https://m.media-amazon.com/images/I/41bHAgOgs9L._SY466_.jpg",
    ],
    meta: [
      { labelKey: "livro.labels.duracao", valueKey: "livro.duracao.medio" },
      {
        labelKey: "livro.labels.dificuldade",
        valueKey: "livro.dificuldade.facil",
      },
    ],
  },
  {
    tituloKey: "livro.formacao_livros.a_maturidade",
    secondaryKey: "livro.autores.rafael_llano",
    capas: [
      "https://assets.betalabs.net/fit-in/390x450/filters:fill(white):format(webp)/production/quadranteeditora/item-images/384054e9f41e1db2d996f2db9461ae18.jpg",
    ],
    meta: [
      { labelKey: "livro.labels.duracao", valueKey: "livro.duracao.medio" },
      {
        labelKey: "livro.labels.dificuldade",
        valueKey: "livro.dificuldade.facil",
      },
    ],
  },
  {
    tituloKey: "livro.formacao_livros.para_estar_com_deus",
    secondaryKey: "livro.autores.francisco_faus",
    capas: [
      "https://m.media-amazon.com/images/I/71-gd83Iq2L._SY466_.jpg",
      "https://livrarialoyola.fbitsstatic.net/img/p/para-estar-com-deus-182390/377046.jpg?w=800&h=800&v=no-change&qs=ignore",
    ],
    meta: [
      { labelKey: "livro.labels.duracao", valueKey: "livro.duracao.medio" },
      {
        labelKey: "livro.labels.dificuldade",
        valueKey: "livro.dificuldade.facil",
      },
    ],
  },
]);

// --- VIDA ESPIRITUAL E ASCÉTICA ---
const livrosEspiritualidadeAscetica = ref([
  {
    tituloKey: "livro.espiritualidade_livros.filoteia",
    secondaryKey: "livro.autores.sao_francisco_sales",
    capas: [
      "https://static.cedet.com.br/produtos_imagem_principal_large/13799-525x791.jpg?v=1750275747",
      "https://cdn.awsli.com.br/2500x2500/618/618258/produto/399694934/01-18-0wmtp3emwi.webp",
      "https://m.media-amazon.com/images/I/61W4DkPXAoS._SY425_.jpg",
    ],
    meta: [
      { labelKey: "livro.labels.duracao", valueKey: "livro.duracao.medio" },
      {
        labelKey: "livro.labels.dificuldade",
        valueKey: "livro.dificuldade.facil",
      },
    ],
  },
  {
    tituloKey: "livro.espiritualidade_livros.imitacao_de_cristo",
    secondaryKey: "livro.autores.tomas_kempis",
    capas: [
      "https://m.media-amazon.com/images/I/91FMPAzh5AL._SY385_.jpg",
      "https://m.media-amazon.com/images/I/81c6NkP6C2L._SY425_.jpg",
      "https://m.media-amazon.com/images/I/71hz619E6aL._SY466_.jpg",
      "https://editorapaulus.vtexassets.com/arquivos/ids/157457-800-auto?v=637908129109370000&width=800&height=auto&aspect=true",
    ],
    meta: [
      { labelKey: "livro.labels.duracao", valueKey: "livro.duracao.longo" },
      {
        labelKey: "livro.labels.dificuldade",
        valueKey: "livro.dificuldade.facil",
      },
    ],
  },
  {
    tituloKey: "livro.espiritualidade_livros.o_combate_espiritual",
    secondaryKey: "livro.autores.lorenzo_scupoli",
    capas: [
      "https://m.media-amazon.com/images/I/61i9yiv-C+L._SY466_.jpg",
      "https://images.tcdn.com.br/img/img_prod/431290/o_combate_espiritual_e_o_caminho_do_paraiso_pe_lourenco_scupoli_2651_1_063057935f47e25401515708d7ea708e_20241107150522.jpg",
    ],
    meta: [
      { labelKey: "livro.labels.duracao", valueKey: "livro.duracao.curto" },
      {
        labelKey: "livro.labels.dificuldade",
        valueKey: "livro.dificuldade.media",
      },
    ],
  },
  {
    tituloKey: "livro.espiritualidade_livros.tratado_do_desanimo",
    secondaryKey: "livro.autores.jean_michel",
    capas: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_719206-MLU77445280289_072024-F.webp",
    ],
    meta: [
      { labelKey: "livro.labels.duracao", valueKey: "livro.duracao.curto" },
      {
        labelKey: "livro.labels.dificuldade",
        valueKey: "livro.dificuldade.facil",
      },
    ],
  },
  {
    tituloKey: "livro.espiritualidade_livros.tratado_da_verdadeira_devocao",
    secondaryKey: "livro.autores.grignion_de_montfort",
    capas: [
      "https://m.media-amazon.com/images/I/51tVIuoUpLL._SY466_.jpg",
      "https://cdn.awsli.com.br/2500x2500/618/618258/produto/125724926/839fd54dab.jpg",
    ],
    meta: [
      { labelKey: "livro.labels.duracao", valueKey: "livro.duracao.curto" },
      {
        labelKey: "livro.labels.dificuldade",
        valueKey: "livro.dificuldade.media_dificil",
      },
    ],
  },
  {
    tituloKey: "livro.espiritualidade_livros.ser_ou_nao_ser_santo",
    secondaryKey: "livro.autores.antonio_royo_marin",
    capas: [
      "https://loja.cancaonova.com/upload/produto/imagem/b_livro-ser-ou-n-o-ser-santo-eis-a-quest-o.webp",
    ],
    meta: [
      { labelKey: "livro.labels.duracao", valueKey: "livro.duracao.medio" },
      {
        labelKey: "livro.labels.dificuldade",
        valueKey: "livro.dificuldade.dificil",
      },
    ],
  },
  {
    tituloKey: "livro.espiritualidade_livros.as_3_vias_e_as_3_conversoes",
    secondaryKey: "livro.autores.garrigou_lagrange",
    capas: [
      "https://livrariashalom.org/media/catalog/product/cache/35a2cd48c8c1e1e5901264fe6cfdb389/a/t/atresviaseastresconversoes_capasite.webp",
    ],
    meta: [
      { labelKey: "livro.labels.duracao", valueKey: "livro.duracao.medio" },
      {
        labelKey: "livro.labels.dificuldade",
        valueKey: "livro.dificuldade.dificil",
      },
    ],
  },
  {
    tituloKey: "livro.espiritualidade_livros.castelo_interior",
    secondaryKey: "livro.autores.santa_teresa",
    capas: [
      "https://m.media-amazon.com/images/I/61mrKWh+NLL._SY466_.jpg",
      "https://m.media-amazon.com/images/I/51DqLJOp2xL._SY425_.jpg",
    ],
    meta: [
      { labelKey: "livro.labels.duracao", valueKey: "livro.duracao.medio" },
      {
        labelKey: "livro.labels.dificuldade",
        valueKey: "livro.dificuldade.muito_dificil",
      },
    ],
  },
]);

// --- BIOGRAFIAS ---
const livrosBiografias = ref([
  {
    tituloKey: "livro.biografias_livros.confissoes",
    secondaryKey: "livro.autores.santo_agostinho",
    capas: [
      "https://m.media-amazon.com/images/I/91hlMYSrG7L._SY466_.jpg",
      "https://m.media-amazon.com/images/I/51Z16gRNfuL._SY342_.jpg",
      "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m8f4b8wl747l86@resize_w450_nl.webp",
    ],
    meta: [
      { labelKey: "livro.labels.duracao", valueKey: "livro.duracao.medio" },
      {
        labelKey: "livro.labels.dificuldade",
        valueKey: "livro.dificuldade.media",
      },
    ],
  },
  {
    tituloKey: "livro.biografias_livros.vida_de_santo_antao",
    secondaryKey: "livro.autores.santo_atanasio",
    capas: ["https://m.media-amazon.com/images/I/81URHbOH4jL._SY466_.jpg"],
    meta: [
      { labelKey: "livro.labels.duracao", valueKey: "livro.duracao.curto" },
      {
        labelKey: "livro.labels.dificuldade",
        valueKey: "livro.dificuldade.media",
      },
    ],
  },
  {
    tituloKey: "livro.biografias_livros.vida_de_sao_francisco_de_assis",
    secondaryKey: "livro.autores.chesterton",
    capas: [
      "https://static.cedet.com.br/produtos_imagem_principal_large/3057-525x791.jpg?v=1750275411",
    ],
    meta: [
      { labelKey: "livro.labels.duracao", valueKey: "livro.duracao.medio" },
      {
        labelKey: "livro.labels.dificuldade",
        valueKey: "livro.dificuldade.media",
      },
    ],
  },
  {
    tituloKey: "livro.biografias_livros.historia_alma",
    secondaryKey: "livro.autores.santa_teresinha",
    capas: [
      "https://m.media-amazon.com/images/I/71E1-X1qefL._SY466_.jpg",
      "https://cdn.awsli.com.br/2500x2500/618/618258/produto/398891070/01-16-sluv44hton.webp",
    ],
    meta: [
      { labelKey: "livro.labels.duracao", valueKey: "livro.duracao.medio" },
      {
        labelKey: "livro.labels.dificuldade",
        valueKey: "livro.dificuldade.facil",
      },
    ],
  },
  {
    tituloKey: "livro.biografias_livros.vida_de_santa_teresa_de_jesus",
    secondaryKey: "livro.autores.santa_teresa",
    capas: [
      "https://livrarialoyola.fbitsstatic.net/img/p/vida-de-santa-teresa-de-jesus-193123/387867.jpg?w=800&h=800&v=no-change&qs=ignore",
      "https://loja.cancaonova.com/upload/produto/imagem/b_livro-teresa-de-jesus-vida-mensagem-e-atualidade-da-santa-de-vila-3.webp",
    ],
    meta: [
      { labelKey: "livro.labels.duracao", valueKey: "livro.duracao.medio" },
      {
        labelKey: "livro.labels.dificuldade",
        valueKey: "livro.dificuldade.media_dificil",
      },
    ],
  },
  {
    tituloKey: "livro.biografias_livros.apologia_pro_vita_sua",
    secondaryKey: "livro.autores.sao_john_henry_newman",
    capas: [
      "https://static.cedet.com.br/produtos_imagem_principal_large/28303-525x791.jpg?v=1750276109",
    ],
    meta: [
      { labelKey: "livro.labels.duracao", valueKey: "livro.duracao.longo" },
      {
        labelKey: "livro.labels.dificuldade",
        valueKey: "livro.dificuldade.dificil",
      },
    ],
  },
]);
</script>
