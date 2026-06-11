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

  i18n: {
    locales: [
      { code: 'pt', file: 'pt.json', name: 'Português' },
      { code: 'la', file: 'la.json', name: 'Latim' },
      { code: 'en', file: 'en.json', name: 'Inglês' }
    ],
    lazy: true,
    langDir: 'locales/',
    defaultLocale: 'en',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    }
  }
})