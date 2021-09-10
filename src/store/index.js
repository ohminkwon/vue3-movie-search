import { createStore } from "vuex"
import movie from './movie.js'
import about from './about.js'

export default createStore({
  modules:{
    movie, // movie: movie 축약 가능
    about
  }
})