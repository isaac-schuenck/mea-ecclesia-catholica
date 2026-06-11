import { ref, mergeProps, useSSRContext, unref } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main$1 = {
  __name: "BookSection",
  __ssrInlineRender: true,
  props: {
    titleKey: {
      type: String,
      required: true
    },
    books: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const openBooks = ref({});
    const isOpen = (key) => Boolean(openBooks.value[key]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "max-w-7xl mx-auto py-8 px-6 mb-8" }, _attrs))}><h3 class="text-3xl font-bold text-[#041122] mb-8 font-serif border-b-2 border-[#D4AF37] pb-3 inline-block">${ssrInterpolate(_ctx.$t(__props.titleKey))}</h3><div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"><!--[-->`);
      ssrRenderList(__props.books, (book) => {
        _push(`<div class="border-b border-gray-200/70 last:border-0"><button class="group w-full flex items-center p-5 md:p-6 hover:bg-gray-50 transition-all text-left"><svg class="${ssrRenderClass([isOpen(book.tituloKey) ? "rotate-0" : "rotate-90", "w-6 h-6 text-[#D4AF37] mr-5 md:mr-6 shrink-0 transition-transform duration-300"])}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m9 18 6-6-6-6"></path></svg><div class="flex-grow grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4"><span class="text-base md:text-lg font-bold text-[#041122] group-hover:text-[#D4AF37] transition-colors">${ssrInterpolate(_ctx.$t(book.tituloKey))}</span>`);
        if (book.secondaryKey) {
          _push(`<span class="text-gray-500 font-medium md:text-right">${ssrInterpolate(_ctx.$t(book.secondaryKey))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></button><div class="bg-gray-50 px-5 pt-4 pb-5 md:px-6 md:pt-4 md:pb-6 border-t border-gray-200/70" style="${ssrRenderStyle(isOpen(book.tituloKey) ? null : { display: "none" })}"><div class="${ssrRenderClass([book.meta?.length ? "lg:grid-cols-[minmax(0,1fr)_14rem]" : "", "grid gap-6 md:pl-12"])}"><div class="grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:gap-5"><!--[-->`);
        ssrRenderList(book.capas, (img, i) => {
          _push(`<div class="w-full sm:w-32 aspect-square bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"><img${ssrRenderAttr("src", img)} class="w-full h-full object-contain p-2"${ssrRenderAttr("alt", _ctx.$t("livro.capa_alt", { titulo: _ctx.$t(book.tituloKey) }))}></div>`);
        });
        _push(`<!--]--></div>`);
        if (book.meta?.length) {
          _push(`<dl class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 content-start"><!--[-->`);
          ssrRenderList(book.meta, (item) => {
            _push(`<div class="bg-white rounded-xl border border-gray-200/80 p-4 shadow-sm"><dt class="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-1">${ssrInterpolate(_ctx.$t(item.labelKey))}</dt><dd class="text-sm md:text-base font-semibold text-[#041122] leading-snug">${ssrInterpolate(_ctx.$t(item.valueKey))}</dd></div>`);
          });
          _push(`<!--]--></dl>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BookSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "livros",
  __ssrInlineRender: true,
  setup(__props) {
    const livrosSagradaEscritura = ref([
      {
        tituloKey: "livro.tesouro_tradicao",
        secondaryKey: "livro.minha_biblioteca_catolica",
        capas: [
          "/livros/tesourodatradicao.webp",
          "https://s3.us-east-1.amazonaws.com/static.mbc.prod.minhabibliotecacatolica.com.br/produtos/1779727918_54271471.webp",
          "https://s3.us-east-1.amazonaws.com/static.mbc.prod.minhabibliotecacatolica.com.br/produtos/1779727918_88f6cb55.webp"
        ]
      },
      {
        tituloKey: "livro.biblia_sagrada",
        secondaryKey: "livro.minha_biblioteca_catolica",
        capas: [
          "https://s3.us-east-1.amazonaws.com/static.mbc.prod.minhabibliotecacatolica.com.br/produtos/1764172728_57866d87.webp",
          "https://s3.us-east-1.amazonaws.com/static.mbc.prod.minhabibliotecacatolica.com.br/produtos/1764172728_0fc15aca.webp",
          "https://s3.us-east-1.amazonaws.com/static.mbc.prod.minhabibliotecacatolica.com.br/produtos/1764172728_c6002406.webp",
          "https://s3.us-east-1.amazonaws.com/static.mbc.prod.minhabibliotecacatolica.com.br/produtos/1764763609_cfc0d2a6.webp"
        ]
      },
      {
        tituloKey: "livro.jerusalem",
        secondaryKey: "livro.paulus",
        capas: [
          "https://m.media-amazon.com/images/I/51djhrt+JhL._SY466_.jpg",
          "https://editorapaulus.vtexassets.com/arquivos/ids/166709-1200-auto?v=639166298296870000&width=1200&height=auto&aspect=true"
        ]
      },
      {
        tituloKey: "livro.ave_maria",
        secondaryKey: "livro.editora_ave_maria",
        capas: [
          "https://m.media-amazon.com/images/I/51a0N24RQZL._SY425_.jpg",
          "https://m.media-amazon.com/images/I/51RGpZCSSCL._SY342_.jpg",
          "https://avemariab2c.jetassets.com.br/produto/20240528163507_4858995142_D.jpg",
          "https://ateliecatolico.bwimg.com.br/ateliecatolico/produtos/cod-2136---biblia-sagrada---capa-lantejoulas---cor-branca---editora-ave-maria-1684853717.5486.jpeg",
          "https://editorapaulus.vtexassets.com/arquivos/ids/156303-1200-auto?v=637904601715370000&width=1200&height=auto&aspect=true"
        ]
      },
      {
        tituloKey: "livro.peregrino",
        secondaryKey: "livro.paulus",
        capas: [
          "https://m.media-amazon.com/images/I/61SOUO1NTiL._SY342_.jpg",
          "https://editorapaulus.vtexassets.com/arquivos/ids/156042-1200-auto?v=637903160413170000&width=1200&height=auto&aspect=true"
        ]
      },
      {
        tituloKey: "livro.navarra",
        secondaryKey: "livro.quadrante",
        capas: [
          "https://assets.betalabs.net/fit-in/390x450/filters:fill(white):format(webp)/production/quadranteeditora/item-images/db01ba489235f109b53e08e27d3ebb7a.jpg",
          "https://assets.betalabs.net/fit-in/390x450/filters:fill(white):format(webp)/production/quadranteeditora/item-images/b138dd48367e159118085ea10990a8f8.jpg",
          "https://assets.betalabs.net/fit-in/390x450/filters:fill(white):format(webp)/production/quadranteeditora/item-images/24780c7c3a2631186fc3e0e900ae8202.jpg"
        ]
      },
      {
        tituloKey: "livro.sacra_vulgata",
        secondaryKey: "",
        capas: [
          "https://m.media-amazon.com/images/I/61rPC-SOWZL._SY342_.jpg",
          "https://m.media-amazon.com/images/I/71WTcdsB0cL._SY425_.jpg"
        ]
      }
    ]);
    const makePatristicaMeta = (durationKey, difficultyKey) => [
      { labelKey: "livro.labels.duracao", valueKey: durationKey },
      { labelKey: "livro.labels.dificuldade", valueKey: difficultyKey }
    ];
    const livrosPatristica = ref([
      {
        tituloKey: "livro.patristica_livros.padres_igreja",
        secondaryKey: "livro.autores.papa_bento_xvi",
        capas: ["/livros/padres-da-igreja.webp"],
        meta: makePatristicaMeta(
          "livro.duracao.curto",
          "livro.dificuldade.facil"
        )
      },
      {
        tituloKey: "livro.patristica_livros.patristica_paulus_1",
        secondaryKey: "livro.autores.padres_apostolicos",
        capas: ["/livros/patristica-paulus-1.webp"],
        meta: makePatristicaMeta(
          "livro.duracao.medio",
          "livro.dificuldade.facil_media"
        )
      },
      {
        tituloKey: "livro.patristica_livros.patristica_paulus_32",
        secondaryKey: "livro.autores.santo_agostinho",
        capas: ["/livros/patristica-paulus-32.webp"],
        meta: makePatristicaMeta(
          "livro.duracao.medio",
          "livro.dificuldade.media"
        )
      },
      {
        tituloKey: "livro.patristica_livros.livre_arbitrio",
        secondaryKey: "livro.autores.santo_agostinho",
        capas: ["/livros/sobre-o-livre-arbitrio.webp"],
        meta: makePatristicaMeta(
          "livro.duracao.medio",
          "livro.dificuldade.media_dificil"
        )
      },
      {
        tituloKey: "livro.patristica_livros.enchiridion",
        secondaryKey: "livro.autores.santo_agostinho",
        capas: ["/livros/enchiridion.webp"],
        meta: makePatristicaMeta(
          "livro.duracao.curto",
          "livro.dificuldade.media"
        )
      },
      {
        tituloKey: "livro.patristica_livros.historia_eclesiastica",
        secondaryKey: "livro.autores.eusebio_cesareia",
        capas: ["/livros/historia-eclesiastica.webp"],
        meta: makePatristicaMeta(
          "livro.duracao.longo",
          "livro.dificuldade.media"
        )
      },
      {
        tituloKey: "livro.patristica_livros.contra_heresias",
        secondaryKey: "livro.autores.santo_irineu",
        capas: ["/livros/contra-as-heresias.webp"],
        meta: makePatristicaMeta(
          "livro.duracao.longo",
          "livro.dificuldade.dificil"
        )
      },
      {
        tituloKey: "livro.patristica_livros.cidade_de_deus",
        secondaryKey: "livro.autores.santo_agostinho",
        capas: ["/livros/a-cidade-de-deus.webp"],
        meta: makePatristicaMeta(
          "livro.duracao.muito_longo",
          "livro.dificuldade.dificil"
        )
      },
      {
        tituloKey: "livro.patristica_livros.doutrina_crista",
        secondaryKey: "livro.autores.santo_agostinho",
        capas: ["/livros/a-doutrina-crista.webp"],
        meta: makePatristicaMeta(
          "livro.duracao.medio",
          "livro.dificuldade.media_dificil"
        )
      },
      {
        tituloKey: "livro.patristica_livros.trindade",
        secondaryKey: "livro.autores.santo_agostinho",
        capas: ["/livros/a-trindade.webp"],
        meta: makePatristicaMeta(
          "livro.duracao.longo",
          "livro.dificuldade.muito_dificil"
        )
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BookSection = _sfc_main$1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "flex-grow" }, _attrs))}><section class="max-w-7xl mx-auto pt-20 pb-12 px-6"><h3 class="text-3xl font-bold text-[#041122] mb-12 font-serif border-b-2 border-[#D4AF37] pb-3 inline-block">${ssrInterpolate(_ctx.$t("livro.titulo"))}</h3><p class="text-gray-600 max-w-3xl leading-relaxed">${ssrInterpolate(_ctx.$t("livro.subtitulo"))}</p></section>`);
      _push(ssrRenderComponent(_component_BookSection, {
        "title-key": "livro.sagrada_escritura",
        books: unref(livrosSagradaEscritura)
      }, null, _parent));
      _push(ssrRenderComponent(_component_BookSection, {
        "title-key": "livro.patristica",
        books: unref(livrosPatristica)
      }, null, _parent));
      _push(`</main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/livros.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=livros-CrCQ3W69.js.map
