import { legacyRouteRules, localizedPages } from './config/routes'

export default defineNuxtConfig({
  compatibilityDate: '2026-06-08',
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n'
  ],

  app: {
    head: {
      title: 'Mea Ecclesia Catholica',
      link: [
        { rel: 'icon', type: 'image/png', href: '/logosfundo.png' } 
      ]
    }
  },

  // Deixa os links antigos funcionando mesmo depois da tradução das URLs.
  routeRules: legacyRouteRules,

  i18n: {
    // Se o navegador estiver em uma língua que o site ainda não tem, cai no inglês.
    fallbackLocale: 'en',
    locales: [
      { code: 'pt', file: 'pt.json', name: 'Português' },
      { code: 'la', file: 'la.json', name: 'Latim' },
      { code: 'en', file: 'en.json', name: 'Inglês' }
    ],
    lazy: true,
    langDir: 'locales/',
    // Inglês é o porto seguro: se o aparelho estiver em uma língua que o site
    // ainda não oferece, o visitante cai em EN em vez de ver conteúdo misturado.
    defaultLocale: 'en',
    strategy: 'prefix',
    customRoutes: 'config',
    pages: localizedPages,
    bundle: {
      optimizeTranslationDirective: false,
    },
    detectBrowserLanguage: {
      // Detecta a língua na primeira visita e guarda a escolha. Se a pessoa
      // trocar manualmente depois, o site respeita a escolha dela.
      useCookie: true,
      cookieKey: 'i18n_redirected',
      fallbackLocale: 'en',
      redirectOn: 'root',
    }
  }
})
