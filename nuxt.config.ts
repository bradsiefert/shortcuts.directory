// https://nuxt.com/docs/api/configuration/nuxt-config
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
          lang: 'en',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Shortcuts Directory',
      meta: [
        { name: 'description', content: 'An occasional newsletter about the goings on around the Siefert family.' },
        { property: "og:image", content: 'https://themaypole.siefertfamily.com/sharing.png' },
      ],
    }
  },
  css: [
    '@/assets/scss/styles.scss'
    // Needed to install sass and bulma to make this work.
  ],

  compatibilityDate: '2024-12-27'
})
