import { createRouter, createWebHashHistory } from "vue-router"
import Home from './Home'
import Movie from './Movie'
import About from './About'

export default createRouter({
  //Hash, History 크게 2가지 모드
  //Hash 모드로 작업 (예시: https://google.com/#/search)
  history: createWebHashHistory(),

  //pages
  //https://google.com/
  routes:[
    {
      path:'/',
      component: Home
    },
    {
      path: '/movie/:id',
      component: Movie
    },
    {
      path: '/about',
      component: About
    }
  ]
})