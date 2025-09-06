import Vue from 'vue'
import Router from 'vue-router'
import SearchLayout from '@/layout/SearchLayout.vue'
import ListLayout from '@/layout/ListLayout.vue'
import BookLayout from '@/layout/BookLayout.vue'
import ExtractLayout from '@/layout/ExtractLayout.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/s',
      redirect: 'search',
      component: SearchLayout,
      children: [
        {
          path: '/search',
          name: 'search',
          component: () => import('@/views/Search.vue')
        }
      ]
    },
    {
      path: '/',
      redirect: 'covid-list',
      component: ListLayout,
      children: [
        {
          path: '/covid-list',
          name: 'covid-list',
          component: () => import('@/views/Covid-List.vue'),
          props: true
        }
      ]
    },
    {
      path: '/covid-extract',
      redirect: 'covid-extract',
      component:  ExtractLayout,
      children: [
        {
          path: '/covid-extract',
          name: 'covid-extract',
          component: () => import('@/views/Covid-Extract.vue'),
          props: true
        }
      ]
    },
    {
      path: '/ukraine-list',
      redirect: 'ukraine-list',
      component: ListLayout,
      children: [
        {
          path: '/ukraine-list',
          name: 'ukraine-list',
          component: () => import('@/views/Ukraine-List.vue'),
          props: true
        }
      ]
    },
    {
      path: '/ukraine-list-new',
      redirect: 'ukraine-list-new',
      component: ListLayout,
      children: [
        {
          path: '/ukraine-list-new',
          name: 'ukraine-list-new',
          component: () => import('@/views/Ukraine-New-List.vue'),
          props: true
        }
      ]
    },
    {
      path: '/ukraine-extract',
      redirect: 'ukraine-extract',
      component:  ExtractLayout,
      children: [
        {
          path: '/ukraine-extract',
          name: 'ukraine-extract',
          component: () => import('@/views/Ukraine-Extract.vue'),
          props: true
        }
      ]
    },
    {
      path: '/smartbook',
      redirect: 'smartbook',
      component:  BookLayout,
      children: [
        {
          path: '/smartbook',
          name: 'smartbook',
          component: () => import('@/views/Book.vue'),
          props: true
        }
      ]
    },
    {
      path: '/smartbook-turkey-syria-earthquake',
      redirect: 'smartbook-turkey-syria-earthquake',
      component:  BookLayout,
      children: [
        {
          path: '/smartbook-turkey-syria-earthquake',
          name: 'smartbook-turkey-syria-earthquake',
          component: () => import('@/views/Book-turkey-syria-earthquake.vue'),
          props: true
        }
      ]
    },
    {
      path: '/analysis-pages',
      redirect: 'analysis-pages',
      component: ListLayout,
      children: [
        {
          path: '/analysis-pages',
          name: 'analysis-pages',
          component: () => import('@/views/AnalysisPages.vue'),
          props: true
        }
      ]
    }
  ]
})
