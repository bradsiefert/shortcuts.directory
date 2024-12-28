const c1 = () => import(/* webpackChunkName: "page--src--pages--training-vue" */ "/Users/bradsiefert/Sites/personal/shortcuts-directory/src/pages/Training.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--submitalink-vue" */ "/Users/bradsiefert/Sites/personal/shortcuts-directory/src/pages/Submitalink.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--success-vue" */ "/Users/bradsiefert/Sites/personal/shortcuts-directory/src/pages/Success.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--podcasts-vue" */ "/Users/bradsiefert/Sites/personal/shortcuts-directory/src/pages/Podcasts.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--powertools-vue" */ "/Users/bradsiefert/Sites/personal/shortcuts-directory/src/pages/Powertools.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--newsandblogs-vue" */ "/Users/bradsiefert/Sites/personal/shortcuts-directory/src/pages/Newsandblogs.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--international-vue" */ "/Users/bradsiefert/Sites/personal/shortcuts-directory/src/pages/International.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--history-vue" */ "/Users/bradsiefert/Sites/personal/shortcuts-directory/src/pages/History.vue")
const c9 = () => import(/* webpackChunkName: "page--src--pages--gallerysites-vue" */ "/Users/bradsiefert/Sites/personal/shortcuts-directory/src/pages/Gallerysites.vue")
const c10 = () => import(/* webpackChunkName: "page--src--pages--enthusiastcreators-vue" */ "/Users/bradsiefert/Sites/personal/shortcuts-directory/src/pages/Enthusiastcreators.vue")
const c11 = () => import(/* webpackChunkName: "page--src--pages--extensionapps-vue" */ "/Users/bradsiefert/Sites/personal/shortcuts-directory/src/pages/Extensionapps.vue")
const c12 = () => import(/* webpackChunkName: "page--src--pages--communities-vue" */ "/Users/bradsiefert/Sites/personal/shortcuts-directory/src/pages/Communities.vue")
const c13 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/bradsiefert/Sites/personal/shortcuts-directory/src/pages/About.vue")
const c14 = () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/bradsiefert/Sites/personal/shortcuts-directory/src/pages/404.vue")
const c15 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/bradsiefert/Sites/personal/shortcuts-directory/src/pages/Index.vue")

export default [
  {
    path: "/training/",
    component: c1
  },
  {
    path: "/submitalink/",
    component: c2
  },
  {
    path: "/success/",
    component: c3
  },
  {
    path: "/podcasts/",
    component: c4
  },
  {
    path: "/powertools/",
    component: c5
  },
  {
    path: "/newsandblogs/",
    component: c6
  },
  {
    path: "/international/",
    component: c7
  },
  {
    path: "/history/",
    component: c8
  },
  {
    path: "/gallerysites/",
    component: c9
  },
  {
    path: "/enthusiastcreators/",
    component: c10
  },
  {
    path: "/extensionapps/",
    component: c11
  },
  {
    path: "/communities/",
    component: c12
  },
  {
    path: "/about/",
    component: c13
  },
  {
    name: "404",
    path: "/404/",
    component: c14
  },
  {
    name: "home",
    path: "/",
    component: c15
  },
  {
    name: "*",
    path: "*",
    component: c14
  }
]
