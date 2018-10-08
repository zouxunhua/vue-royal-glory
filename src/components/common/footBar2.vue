<template>
  <div class="footbar">
      <ul class="routers">
          <li v-for="item in navs">
              <a :href="item.sourceUrl" class="nav-name" target="_blank">{{item.name}}</a>
              <span class="nav-separate" v-show="item.name !== '网站导航'">|</span>
          </li>
      </ul>
      <p>COPYRIGHT © 1998 – 2018 TENCENT. ALL RIGHTS RESERVED.</p>
      <a href="https://www.tencent.com/law/mo_law.shtml?/law/copyright.htm">腾讯公司 版权所有</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navs: [
			{name: '腾讯互动娱乐', sourceUrl: 'http://ieg.tencent.com/'},
			{name: '服务条款', sourceUrl: 'http://game.qq.com/contract.shtml'},
			{name: '隐私政策', sourceUrl: 'http://privacy.qq.com/'},
			{name: '腾讯游戏招聘', sourceUrl: 'http://game.qq.com/hr/'},
			{name: '腾讯游戏客服', sourceUrl: 'http://kf.qq.com/'},
			{name: '游戏地图', sourceUrl: 'http://game.qq.com/gnav/'},
			{name: '商务合作', sourceUrl: 'http://game.qq.com/portal2010/business.htm'},
			{name: '腾讯网', sourceUrl: 'http://www.qq.com/'},
			{name: '网站导航', sourceUrl: 'http://www.qq.com/map/'}
		],
    }
  },
  methods: {
       
  },
  created () {
   
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .footbar{
        width:100%;
        height:130px;
        background-color:#1f1814;
        margin-top:-4px;
        color:#4b3e32;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-around;
        padding:32px 0;
        a{
            color:#4b3e32;
         }
        .routers{
            li{
                float:left;
             
                .nav-separate{
                     color:#4b3e32;
                     margin:0 5px;
                }
            }
        }
    }
</style>
