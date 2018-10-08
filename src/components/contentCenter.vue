<template>
   <!--游戏中心       游戏中心       游戏中心       游戏中心       游戏中心       游戏中心       游戏中心       游戏中心       游戏中心       游戏中心-->
  <div class="shopMall">
     <top-nav></top-nav>
      <!--背景图-->
      <div class="backgroundImg">
            <!--进入专题-->
            <router-link to="/topic" class="enterTopic"></router-link>
            <!-- 出口 -->
            <router-view></router-view>
            <div class="weeksFromHero">
                <!--手风琴思路:
                        用currentHeroName判断,是否为当前英雄的active状态    英雄介绍
                -->
                <div class="reflux">
                    <p>周免英雄（10月8日-10月14日）</p>
                    <ul>
                        <li :class="{active:currentHeroName===item.heroName}" v-for="(item, index) in heroList" :key="item.id">
                            <a>
                                <img v-show="currentHeroName===item.heroName" :src="item.activeUrl" class="sunBin"/>
                                <img v-show="currentHeroName!=item.heroName"  @mouseenter="currentHeroName=item.heroName" :src="item.imgUrl" class="sunBin"/>
                            </a>
                        </li>
                    </ul>
                    <a class="more">更<br/>多<br/>英<br/>雄</a>
                </div>
                <div class="summoner"></div>
            </div>
            <div class="back">
                <div class="path">
                    <Icon type="ios-home" />&nbsp;
                    <router-link to="/index">王者荣耀首页</router-link>
                    <span>&nbsp; >&nbsp;  攻略中心</span>
                </div>
             
            </div>
      </div>
    
      <foot-bar></foot-bar>
  </div>
</template>


<script>
import topNav from './common/topNav.vue'
import footBar from './common/footBar.vue'
import $ from "jquery";
export default {
  data (){
     return{
          currentHeroName:'孙膑',
          //周免英雄（10月1日-10月7日）
          heroList:[
              {id:'a1',heroName:'小乔',imgUrl:'http://game.gtimg.cn/images/yxzj/img201606/heroimg/106/106.jpg',activeUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/106/106-freehover.png'},
              {id:'a2',heroName:'刘禅',imgUrl:'http://game.gtimg.cn/images/yxzj/img201606/heroimg/114/114.jpg',activeUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/114/114-freehover.png'},
              {id:'a3',heroName:'张飞',imgUrl:'http://game.gtimg.cn/images/yxzj/img201606/heroimg/171/171.jpg',activeUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/171/171-freehover.png'},
              {id:'a4',heroName:'黄忠',imgUrl:'http://game.gtimg.cn/images/yxzj/img201606/heroimg/192/192.jpg',activeUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/192/192-freehover.png'},
              {id:'a5',heroName:'百里玄策',imgUrl:'http://game.gtimg.cn/images/yxzj/img201606/heroimg/195/195.jpg',activeUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/195/195-freehover.png'},
              {id:'a6',heroName:'弈星',imgUrl:'http://game.gtimg.cn/images/yxzj/img201606/heroimg/197/197.jpg',activeUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/197/197-freehover.png'},
              {id:'a7',heroName:'狂铁',imgUrl:'http://game.gtimg.cn/images/yxzj/img201606/heroimg/503/503.jpg',activeUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/503/503-freehover.png'},
          ],
        
     }
  },
  created() {
  },
  watch: {
  },
  mounted() {
  },
  beforeUpdate(){
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
@import url('../assets/style/reset.css');
    /*背景图*/
    .backgroundImg{
        width:1263px;
        height:1130px;
        position:relative;
        display:table;
        background:url('//ossweb-img.qq.com/upload/webplat/info/yxzj/20180922/32111763642470.jpg') top center/150% no-repeat;
        /*进入专题*/
         .enterTopic{
             width:230px;
             height:62px;
             display:block;
             opacity:.3;
             position:absolute;
             left:50%;
             margin-left:-115px;
             top:434px;
         }
        .weeksFromHero{
            width:1190px;
            height:120px;
            background-color:yellowgreen;
            position:absolute;
            left:50%;
            margin-left:-580px;
            top:550px;
            display:flex;
            .reflux{
                width:775px;
                height:120px;
                background-color:#13395b;
                padding:10px 15px;
                position:relative;
                p{
                    color:#ddd;
                    font-weight:700;
                    font-size:13px;
                    height:27px;
                }
                ul{
                    width:720px;
                    height:74px;
                    li{
                        width:71.444444px;
                        height:74px;
                        float:left;
                        margin-right:10px;
                        &.active{
                            width:220px;
                            height:74px;

                        }
                        a{
                            width:100%;
                            height:100%;
                            .sunBin{
                                width:100%;
                                height:100%;
                            }
                        }
                    }
                }
                .more{
                    position:absolute;
                    right:20px;
                    color:#626067;
                    &:hover{
                        color:#6595a7;
                    }
                }
            }
            .summoner{
                width:415px;
                height:120px;
                background-color:red;
                background:url("../assets/img/zhaohuan.png") center/100% 100% no-repeat;
            }
        }
        .back{
            width:1263.2222px;
            height:auto;
            padding:35px 50px;
            background-color:#fafafa;
            margin-top:670px;
            .path{
                width:100%;
                height:80px;
                font-size:15px;
                a{
                    color:#000;
                    text-decoration:underline
                }
            }
            
        }
    }
   
</style>
