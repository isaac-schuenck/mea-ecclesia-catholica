// nuxt.config.ts
export default defineNuxtConfig({
  // Ativa os módulos do projeto
  modules: [
    '@nuxtjs/tailwindcss'
  ],

  // Resolve aquele aviso amarelo do terminal
  compatibilityDate: '2026-06-08',

  // Ferramentas de desenvolvimento ativadas (Shift + Alt + D no navegador)
  devtools: { enabled: true }
})