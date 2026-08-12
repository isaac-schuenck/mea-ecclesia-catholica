export type InlineFormat = {
  tag?: string;
  text?: string;
  translationKey?: string;
  class?: string;
};

// Formatações que aparecem dentro dos textos traduzidos. Mantê-las aqui evita
// repetir templates inteiros nas páginas só para aplicar negrito ou itálico.
export const inlineFormats: Record<string, InlineFormat> = {
  e_por_que: { tag: "strong", translationKey: "missa.e_por_que", class: "font-bold text-gray-600" },
  ite_missa_est: { tag: "em", text: "“Ite, missa est”" },
  adventus: { tag: "em", text: "Adventus" },
  quadragesima: { tag: "em", translationKey: "palavras_chave.quadragesima" },
  pentekoste: { tag: "em", translationKey: "palavras_chave.pentekoste" },
  domingo_gaudete: { tag: "strong", translationKey: "palavras_chave.domingo_gaudete" },
  domingo_laetare: { tag: "strong", translationKey: "palavras_chave.domingo_laetare" },
  igreja: { tag: "strong", translationKey: "palavras_chave.igreja" },
  servus_servorum_dei: { tag: "em", translationKey: "palavras_chave.servus_servorum_dei" },
  in_persona_christi_capitis: { tag: "em", translationKey: "palavras_chave.in_persona_christi_capitis" },
  diakonos: { tag: "em", translationKey: "palavras_chave.diakonos" },
  sobre: { tag: "strong", translationKey: "oracoes.sobre_label", class: "not-italic text-gray-600" },
  obs: { tag: "strong", translationKey: "oracoes.obs_label", class: "not-italic text-gray-600" },
  symbolon: { tag: "em", text: "symbolon" },
  celebrante: { tag: "strong", translationKey: "oracoes.celebrante_label", class: "text-red-700" },
  todos: { tag: "strong", translationKey: "oracoes.todos_label", class: "text-red-700" },
  anima_christi: { tag: "em", text: "Anima Christi" },
  exercicios_espirituais: { tag: "em", text: "Exercícios Espirituais" },
  pausa: { tag: "em", translationKey: "oracoes.comunhao_espiritual_pausa" },
  sanctus: { tag: "em", text: "Sanctus" },
  te_deum: { tag: "em", text: "Te Deum" },
  te_deum_laudamus: { tag: "em", text: "Te Deum laudamus" },
  veni_creator: { tag: "em", text: "Veni Creator Spiritus" },
  victimae: { tag: "em", text: "Victimae Paschali Laudes" },
  sub_tuum: { tag: "em", text: "Sub tuum praesidium" },
};
