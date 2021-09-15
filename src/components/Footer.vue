<template>
  <footer>
    <Logo />
    <a
      href="https://github.com/ohminkwon/vue3-movie-search"
      class="footer-letter"
      target="_blank">
      (c) {{ new Date().getFullYear() }} All rights reserved by OHMIN KWON
    </a>
  </footer>
</template>

<script>
import Logo from '~/components/Logo'

export default {
  components:{
    Logo
  }  
}
</script>

<style lang="scss" scoped>


footer{
  padding: 70px 0;
  text-align: center;
  opacity: .3;
    
  .logo{
    display: block;
    margin-bottom: 4px;
  }

  .footer-letter{
    color: $gray-600;
    text-decoration: none;
    cursor: pointer;    
  }
}
</style>