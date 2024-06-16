import {createRouter} from 'vue-router'

const routes = [
  {
    path: '/SQNCR/',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('../pages/IndexPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('../pages/ErrorNotFound.vue')
  }
]
export default function (history) {
  return createRouter({
    history,
    routes
  })
}



