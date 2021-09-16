<template>
  <header>
    <Logo />
    <div class="nav nav-pills">
      <div 
        v-for="nav in navigations"
        :key="nav.name"
        class="nav-item">
        <RouterLink
          :to="nav.href"
          active-class="active"
          :class="{active: isMatch(nav.path)}"
          class="nav-link">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
    <div
      class="user"
      @click="toAbout">
      <img
        :src="image"
        :alt="name" />
    </div>
  </header>
</template>

<script>
import Logo from '~/components/Logo'
import {mapState} from 'vuex'

export default {
  components:{
    Logo
  },
  data() {
    return{
      navigations: [
        {
          name:'Search',
          href: '/'
        },
        {
          name: 'Movie',
          href:'/movie/tt4520988',
          path: /^\/movie/ //movie 경로 일치를 위한 정규표현식
        },
        {
          name: 'About',
          href: '/about'
        }
      ]
    }
  },
  computed:{    
    ...mapState('about', [
      'image',
      'name',      
    ])  
    // image(){
    //   return this.$store.state.about.image
    // },
    // name(){
    //   return this.$store.state.about.name
    // },
  },
  methods: {
    isMatch(path){
      if(!path){
        return false
      }      
      return path.test(this.$route.fullPath)
    },
    toAbout(){
      this.$router.push('/about')
    }
  }
}
</script>

<style lang="scss" scoped>

header{
  height: 70px;
  padding: 0 40px;  
  display: flex;
  align-items: center;
  position: relative;

  .logo{
    margin-right: 40px;
  }
  .nav-item{
    margin-right: 10px;
    background-color: $gray-100;
    border-radius: 6px;
    transition: .6s;
    font-weight: bold;
    &:hover{      
      background-color: $gray-300;
    }
  }
  
  .user{
    width: 40px;
    height: 40px;
    padding: 6px;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: $gray-200;
    cursor: pointer;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 40px;
    margin: auto;
    transition: .4s;
    &:hover{
      background-color: darken($gray-200, 10%);
    }
    img{
      width: 100%;
      border-radius: 10px;
    }
  }
  // .nav-item{
  //   margin-left: 20px;
  // }
  // &:last-child{
  //   margin-left: 0;
  // }
  @include media-breakpoint-down(sm){
    .nav{
      display: none;
    }
  }
}
</style>