<template>
  <div class="shopMall">
     <top-nav></top-nav>
    
      <foot-bar></foot-bar>
  </div>
</template>

<script>
import topNav from './common/topNav.vue'
import footBar from './common/footBar.vue'
export default {
  data (){
      return{
          
      }  
  },
  created() {
    
     
  },
  mounted() {
    
  },
  methods:{
  
  },
  components: {
     'top-nav':topNav,
     'foot-bar':footBar
  }
        
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
