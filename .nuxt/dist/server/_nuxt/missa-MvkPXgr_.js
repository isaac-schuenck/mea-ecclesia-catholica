import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import "/mnt/Dados/Dev/VSCODE/mea-ecclesia-catholic/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/mnt/Dados/Dev/VSCODE/mea-ecclesia-catholic/node_modules/hookable/dist/index.mjs";
import "/mnt/Dados/Dev/VSCODE/mea-ecclesia-catholic/node_modules/unctx/dist/index.mjs";
import "/mnt/Dados/Dev/VSCODE/mea-ecclesia-catholic/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/mnt/Dados/Dev/VSCODE/mea-ecclesia-catholic/node_modules/defu/dist/defu.mjs";
import "/mnt/Dados/Dev/VSCODE/mea-ecclesia-catholic/node_modules/ufo/dist/index.mjs";
import "/mnt/Dados/Dev/VSCODE/mea-ecclesia-catholic/node_modules/klona/dist/index.mjs";
import "/mnt/Dados/Dev/VSCODE/mea-ecclesia-catholic/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/mnt/Dados/Dev/VSCODE/mea-ecclesia-catholic/node_modules/destr/dist/index.mjs";
import "/mnt/Dados/Dev/VSCODE/mea-ecclesia-catholic/node_modules/ohash/dist/index.mjs";
import "/mnt/Dados/Dev/VSCODE/mea-ecclesia-catholic/node_modules/@unhead/vue/dist/index.mjs";
import "@vue/devtools-api";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1>Página da Missa em construção...</h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/missa.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const missa = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  missa as default
};
//# sourceMappingURL=missa-MvkPXgr_.js.map
