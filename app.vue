<template>
  <section class="hero">
    <div class="hero-header">
      <div class="top-bar"></div>

        <div class="container mt-6 super-skinny">
          <div class="has-text-centered">
            <img alt="Shortcuts Directory Logo" src="@/assets/images/logo.svg" />
          </div>
        </div>

    </div><!-- /hero-header -->

    <div class="hero-body">
      <div class="container super-skinny has-text-centered">
        <h1 class="title is-size-1 has-text-white mb-3">
          Curated collections of the best links about Shortcuts
        </h1>
        <div class="subtitle has-text-info is-size-5 mb-5">
          Apple’s Shortcuts app (aka Siri Shortcuts) is an exciting platform for automating tasks. This directory is my attempt to collect all the best Shortcuts resources. I hope it helps you find and create shortcuts to make your life better.
        </div>
      </div>
    </div><!-- /hero-body -->
  </section>

  <transition name="fade" appear>
    <main>
      <div class="ph">
        <a href="https://www.producthunt.com/posts/shortcuts-directory?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-shortcuts-directory" target="_blank">
          <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=210803&theme=light" alt="Shortcuts Directory - Curated collections of the best links about Siri Shortcuts | Product Hunt Embed" />
        </a>
      </div>

      <slot/>
    </main>
  </transition>

  <footer>
    <p class="has-text-centered">
      <small>
        <a target="_blank" href="https://creativecommons.org/licenses/by-nc-sa/3.0/">CC BY-NC-SA 3.0</a> | Made by
        <a target="_blank" href="https://bradsiefert.com" title="Brad Siefert's Design Portfolio" rel="noreferrer">Brad Siefert</a>
        <a target="_blank" href="https://twitter.com/bksiefert" title="Brad Siefert's Twitter" rel="noreferrer">
        <font-awesome :icon="['fab', 'twitter']" class="ml-3"/></a>
      </small>
    </p>
  </footer>
</template>
