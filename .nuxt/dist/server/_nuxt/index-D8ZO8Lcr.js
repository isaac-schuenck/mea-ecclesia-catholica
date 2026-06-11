import { _ as __nuxt_component_0 } from "./nuxt-link-CTNVGgpg.js";
import { ref, computed, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import "/mnt/Dados/Dev/VSCODE/mea-ecclesia-catholic/node_modules/hookable/dist/index.mjs";
import { a as useI18n } from "../server.mjs";
import "/mnt/Dados/Dev/VSCODE/mea-ecclesia-catholic/node_modules/ufo/dist/index.mjs";
import "/mnt/Dados/Dev/VSCODE/mea-ecclesia-catholic/node_modules/defu/dist/defu.mjs";
import "/mnt/Dados/Dev/VSCODE/mea-ecclesia-catholic/node_modules/ofetch/dist/node.mjs";
import "/mnt/Dados/Dev/VSCODE/mea-ecclesia-catholic/node_modules/unctx/dist/index.mjs";
import "/mnt/Dados/Dev/VSCODE/mea-ecclesia-catholic/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/mnt/Dados/Dev/VSCODE/mea-ecclesia-catholic/node_modules/klona/dist/index.mjs";
import "/mnt/Dados/Dev/VSCODE/mea-ecclesia-catholic/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/mnt/Dados/Dev/VSCODE/mea-ecclesia-catholic/node_modules/destr/dist/index.mjs";
import "/mnt/Dados/Dev/VSCODE/mea-ecclesia-catholic/node_modules/ohash/dist/index.mjs";
import "/mnt/Dados/Dev/VSCODE/mea-ecclesia-catholic/node_modules/@unhead/vue/dist/index.mjs";
import "@vue/devtools-api";
const _imports_0 = publicAssetsURL("/jesus.jpeg");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const currentSlide = ref(0);
    ref(null);
    const mapUrl = ref(
      "https://maps.google.com/maps?q=igrejas+catolicas&z=13&output=embed"
    );
    const slides = computed(() => [
      {
        title: t("home.carousel.slide1_title"),
        subtitle: t("home.carousel.slide1_sub"),
        description: t("home.carousel.slide1_desc"),
        buttonText: t("home.carousel.slide1_btn"),
        link: "/sobre",
        image: "/basilica1.jpg",
        logo: "/logosfundo.png",
        overlayClass: "bg-gradient-to-t from-[#041122] via-[#041122]/90 to-transparent md:bg-gradient-to-r md:from-[#041122] md:via-[#041122]/95 md:via-65% md:to-[#041122]/40",
        positionClass: "md:object-[center_60%]"
      },
      {
        title: t("home.carousel.slide2_title"),
        subtitle: t("home.carousel.slide2_sub"),
        description: t("home.carousel.slide2_desc"),
        buttonText: t("home.carousel.slide2_btn"),
        link: "/patristica",
        image: "/patristica.png",
        positionClass: "md:object-[center_50%]"
      },
      {
        title: t("home.carousel.slide3_title"),
        subtitle: t("home.carousel.slide3_sub"),
        description: t("home.carousel.slide3_desc"),
        buttonText: t("home.carousel.slide3_btn"),
        link: "/missa",
        image: "/mass.jpg",
        positionClass: "md:object-[center_60%]"
      },
      {
        title: t("home.carousel.slide4_title"),
        subtitle: t("home.carousel.slide4_sub"),
        description: t("home.carousel.slide4_desc"),
        buttonText: t("home.carousel.slide4_btn"),
        link: "/santos",
        image: "/santo.png",
        positionClass: "md:object-[center_40%]"
      },
      {
        title: t("home.carousel.slide5_title"),
        subtitle: t("home.carousel.slide5_sub"),
        description: t("home.carousel.slide5_desc"),
        buttonText: t("home.carousel.slide5_btn"),
        link: "/homilias",
        image: "/PeMario.png",
        positionClass: "object-[right_80%] md:object-[center_40%]"
      }
    ]);
    const topics = computed(() => [
      {
        name: t("home.topics.trindade"),
        image: "https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2013/05/formacao_santissima-trindade-misterio-de-comunhao.jpg",
        link: "/trindade"
      },
      {
        name: t("home.topics.sacramentos"),
        image: "http://blog.cancaonova.com/felipeaquino/files/2007/12/Os-Sete-Sacramentos.jpg",
        link: "/sacramentos"
      },
      { name: t("home.topics.missa"), image: "/mass.jpg", link: "/missa" },
      {
        name: t("home.topics.milagres"),
        image: "/Eucaristia.jpg",
        link: "/milagres"
      },
      {
        name: t("home.topics.escritura"),
        image: "/biblia.png",
        link: "/escritura"
      },
      {
        name: t("home.topics.sucessao"),
        image: "https://i0.wp.com/nossasagradafamilia.com.br/wp-content/uploads/2025/04/57686-hist25c325b3ria-de-s25c325a3o-pedro-ap25c325b3stolo.jpg?fit=1200%2C800&ssl=1",
        link: "/sucessao-apostolica"
      },
      {
        name: t("home.topics.tradicao"),
        image: "https://upload.wikimedia.org/wikipedia/commons/6/61/Disputa_del_Sacramento_%28Rafael%29.jpg",
        link: "/tradicao-e-magisterio"
      },
      {
        name: t("home.topics.papado"),
        image: "https://www.stfrancisraleigh.org/wp-content/uploads/2025/06/Pope_Resized.png",
        link: "/papado"
      },
      {
        name: t("home.topics.orientais"),
        image: "https://upload.wikimedia.org/wikipedia/commons/5/52/Jesus-Christ-from-Hagia-Sophia.jpg",
        link: "/igrejas-orientais"
      },
      {
        name: t("home.topics.concilios"),
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Pasquale_Cati_-_Concile_de_Trente.jpg",
        link: "/concilios-e-ritos"
      },
      {
        name: t("home.topics.historia"),
        image: "https://osaopaulo.org.br/wp-content/uploads/2025/10/Entrega_de_las_llaves_a_San_Pedro_Perugino-1024x618.jpg",
        link: "/historia"
      },
      {
        name: t("home.topics.patristica"),
        image: "/patristica.png",
        link: "/patristica"
      },
      {
        name: t("home.topics.escolastica"),
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Laurentius_de_Voltolina_Vorlesung_vor_Studenten_-_Min_1233_-_Kupferstichkabinett_Berlin.jpg",
        link: "/escolastica"
      },
      { name: t("home.topics.ciencia"), image: "/lemaitre.jpg", link: "/ciencia" },
      {
        name: t("home.topics.apologetica"),
        image: "https://cdn.royalacademy.org.uk/images/00tajd9lkku7nota.jpg?format=auto&width=1200",
        link: "/apologetica"
      },
      {
        name: t("home.topics.dogmas"),
        image: "https://content.ngv.vic.gov.au/retrieve.php?size=1280&type=image&vernonID=4202",
        link: "/dogmas-marianos"
      },
      {
        name: t("home.topics.intercessao"),
        image: "https://upload.wikimedia.org/wikipedia/commons/7/75/Titian_-_Madonna_of_Mercy%2C_1573.jpg",
        link: "/intercessao-e-mediacao"
      },
      {
        name: t("home.topics.imagens"),
        image: "https://thumbs.dreamstime.com/b/close-up-michelangelo-s-iconic-marble-sculpture-masterpiece-pieta-vatican-city-rome-italy-august-close-up-400884422.jpg",
        link: "/imagens-e-idolatria"
      },
      {
        name: t("home.topics.catecismo"),
        image: "/catecismo.png",
        link: "/catecismo"
      },
      { name: t("home.topics.oracoes"), image: "/oracao.jpg", link: "/oracoes" },
      { name: t("home.topics.rosario"), image: "/rosario.jpg", link: "/rosario" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "flex-grow" }, _attrs))}><section class="relative w-full h-[60vh] md:h-[75vh] bg-[#041122] overflow-hidden group"><img${ssrRenderAttr("src", slides.value[currentSlide.value].image)} class="${ssrRenderClass([slides.value[currentSlide.value].positionClass || "object-center", "absolute inset-0 w-full h-full object-cover"])}" alt="Banner Principal"><div class="${ssrRenderClass([
        slides.value[currentSlide.value].overlayClass || "bg-gradient-to-t from-[#041122] via-[#041122]/60 to-transparent md:bg-gradient-to-r md:from-[#041122] md:via-[#041122]/85 md:to-transparent",
        "absolute inset-0 z-10 transition-all duration-700"
      ])}"></div>`);
      if (slides.value[currentSlide.value].logo) {
        _push(`<div class="absolute inset-0 z-20 pointer-events-none"><div class="w-full flex justify-center pt-8 md:hidden"><img${ssrRenderAttr("src", slides.value[currentSlide.value].logo)} class="h-28 w-auto object-contain drop-shadow-2xl"></div><div class="hidden md:flex absolute right-0 top-0 w-1/2 h-full items-center justify-center p-12"><img${ssrRenderAttr("src", slides.value[currentSlide.value].logo)} class="max-h-[50vh] w-auto object-contain drop-shadow-2xl"></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="relative z-30 w-full h-full flex flex-col justify-end items-center text-center pb-20 px-6 md:justify-center md:items-start md:text-left md:pl-24 md:pb-0 md:w-1/2"><div class="max-w-xl drop-shadow-lg"><h2 class="text-xs font-bold text-[#D4AF37] mb-2 uppercase tracking-widest">${ssrInterpolate(slides.value[currentSlide.value].subtitle)}</h2><h1 class="text-3xl md:text-6xl font-bold font-serif text-white mb-4 md:mb-6 leading-tight">${ssrInterpolate(slides.value[currentSlide.value].title)}</h1><p class="text-sm md:text-lg text-gray-300 mb-6 md:mb-8 leading-relaxed max-w-md md:max-w-none">${ssrInterpolate(slides.value[currentSlide.value].description)}</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: slides.value[currentSlide.value].link,
        class: "inline-block bg-white text-[#041122] px-8 py-2.5 md:py-3 rounded-full font-bold hover:bg-[#D4AF37] hover:text-white transition-all duration-300 shadow-xl pointer-events-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(slides.value[currentSlide.value].buttonText)}`);
          } else {
            return [
              createTextVNode(toDisplayString(slides.value[currentSlide.value].buttonText), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><button class="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white/40 md:text-white/60 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 z-40"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 md:w-14 md:h-14 drop-shadow-lg"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg></button><button class="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white/40 md:text-white/60 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 z-40"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 md:w-14 md:h-14 drop-shadow-lg"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg></button><div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-40"><!--[-->`);
      ssrRenderList(slides.value, (_, index) => {
        _push(`<button class="${ssrRenderClass([currentSlide.value === index ? "bg-white w-7" : "bg-white/40", "w-2.5 h-2.5 rounded-full transition-all"])}"></button>`);
      });
      _push(`<!--]--></div></section><section class="max-w-7xl mx-auto py-20 px-6"><h3 class="text-3xl font-bold text-[#041122] mb-12 font-serif border-b-2 border-[#D4AF37] pb-3 inline-block">${ssrInterpolate(_ctx.$t("home.explore_title"))}</h3><div class="flex flex-wrap justify-center gap-4 lg:gap-6"><!--[-->`);
      ssrRenderList(topics.value, (item, index) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: index,
          to: item.link,
          class: "bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 p-3 lg:p-4 flex flex-col items-center text-center border border-gray-100 group cursor-pointer w-[calc(50%-0.5rem)] md:w-[calc(33.33%-0.66rem)] lg:w-[calc(100%/7-1.2857rem)]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="w-full aspect-square mb-3 lg:mb-4 rounded-xl overflow-hidden bg-gray-100 relative"${_scopeId}><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.name)} class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"${_scopeId}></div><span class="font-bold text-[#041122] tracking-wide text-xs lg:text-sm leading-tight"${_scopeId}>${ssrInterpolate(item.name)}</span>`);
            } else {
              return [
                createVNode("div", { class: "w-full aspect-square mb-3 lg:mb-4 rounded-xl overflow-hidden bg-gray-100 relative" }, [
                  createVNode("img", {
                    src: item.image,
                    alt: item.name,
                    class: "w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  }, null, 8, ["src", "alt"])
                ]),
                createVNode("span", { class: "font-bold text-[#041122] tracking-wide text-xs lg:text-sm leading-tight" }, toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="w-full flex justify-center mt-12">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/faq",
        class: "group relative inline-flex items-center justify-center px-8 py-4 font-bold text-[#041122] bg-white border-2 border-[#D4AF37] rounded-full shadow-md hover:bg-[#D4AF37] hover:text-white transition-all duration-300 w-full md:w-auto md:min-w-[400px] overflow-hidden"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6 mr-3 text-[#D4AF37] group-hover:text-white transition-colors"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"${_scopeId}></path></svg><span class="tracking-wide"${_scopeId}>${ssrInterpolate(_ctx.$t("home.faq_btn"))}</span>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                "stroke-width": "2.5",
                stroke: "currentColor",
                class: "w-6 h-6 mr-3 text-[#D4AF37] group-hover:text-white transition-colors"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  d: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                })
              ])),
              createVNode("span", { class: "tracking-wide" }, toDisplayString(_ctx.$t("home.faq_btn")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section class="max-w-7xl mx-auto py-12 px-6 mb-20"><div class="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 gap-4"><h3 class="text-3xl font-bold text-[#041122] font-serif border-b-2 border-[#D4AF37] pb-3 inline-block">${ssrInterpolate(_ctx.$t("home.map_title"))}</h3><p class="text-gray-500 text-sm max-w-sm text-left md:text-right">${ssrInterpolate(_ctx.$t("home.map_desc"))}</p></div><div class="w-full h-[500px] md:h-[600px] bg-gray-200 rounded-3xl shadow-2xl relative overflow-hidden group"><iframe${ssrRenderAttr("src", mapUrl.value)} class="absolute inset-0 w-full h-full" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><div class="absolute inset-0 pointer-events-none rounded-3xl border-2 border-transparent group-hover:border-[#D4AF37]/50 transition-colors duration-500 z-10"></div></div></section><section class="max-w-7xl mx-auto py-12 px-6 mb-20"><h3 class="text-3xl font-bold text-[#041122] mb-12 font-serif border-b-2 border-[#D4AF37] pb-3 inline-block">${ssrInterpolate(_ctx.$t("home.sobre_nos"))}</h3><div class="bg-[#041122] rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row items-stretch border border-white/10"><div class="w-full md:w-1/3 min-h-[250px] relative bg-[#D4AF37]"><img${ssrRenderAttr("src", _imports_0)} alt="Sobre o MEC" class="absolute inset-0 w-full h-full object-cover opacity-90"></div><div class="w-full md:w-2/3 p-8 md:p-12 text-center md:text-left"><h4 class="text-[#D4AF37] font-bold text-sm uppercase tracking-widest mb-2">${ssrInterpolate(_ctx.$t("home.sobre.badge"))}</h4><h3 class="text-3xl font-bold text-white font-serif mb-4">${ssrInterpolate(_ctx.$t("home.sobre.title"))}</h3><p class="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">${ssrInterpolate(_ctx.$t("home.sobre.desc"))}</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/sobre",
        class: "inline-flex items-center space-x-2 text-white hover:text-[#D4AF37] transition-colors font-medium group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("home.sobre.btn"))}</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 transform group-hover:translate-x-1 transition-transform"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"${_scopeId}></path></svg>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(_ctx.$t("home.sobre.btn")), 1),
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                "stroke-width": "2",
                stroke: "currentColor",
                class: "w-5 h-5 transform group-hover:translate-x-1 transition-transform"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  d: "M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-D8ZO8Lcr.js.map
