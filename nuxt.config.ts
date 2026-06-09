export default defineNuxtConfig({
  compatibilityDate: '2026-06-08',
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n'
  ],

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