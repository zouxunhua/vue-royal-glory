<template>
  <div id="app">
      <top-bar></top-bar>
      
       <!-- 路由的出口 -->
      <router-view></router-view>
      
  </div>
</template>

<script>
require('./assets/style/reset.scss')
import topBar from './components/common/topBar.vue'

export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  created:function(){
      if(this.$route.name == undefined)
        return this.$router.push('index')
      
  },
  components: {
     'top-bar':topBar,
      
  }
}
</script>

<style>
 
</style>
