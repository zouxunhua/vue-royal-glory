<template>
  <div>
      <div class="topNav" @mouseenter="showBar" @mouseleave="hideBar">
          <router-link to="http://pvp.qq.com/" class="wzry"><img src="//game.gtimg.cn/images/yxzj/web201605/top_banner/logo.png"/></router-link>
          <!--导航菜单-->
          <ul class="menu">
              <li>
                  <router-link to="/index">
                    <div class="fcolor linkfarm"><div class="fs30">官网首页</div>HOME</div>
                  </router-link>
              </li>
              <li>
                    <router-link to="/gameData">
                        <div class="fcolor linkfarm"><div class="fs30">游戏资料</div>DATA</div>
                    </router-link>
              
              </li>
              <li>
                    <router-link to="/contentCenter">
                        <div class="fcolor linkfarm"><div class="fs30">内容中心</div>RAIDERS</div>
                    </router-link>
              
              </li>
              <li>
                    <router-link to="/racecenter">
                        <div class="fcolor linkfarm"><div class="fs30">赛事中心</div>MATCH</div>
                    </router-link>
              
              </li>
              <li>
                    <router-link to="/shopMall">
                        <div class="fcolor linkfarm"><div class="fs30">商城/合作</div>STORE</div>
                    </router-link>
              
              </li>
              <li>
                  <a>
                    <div class="fcolor linkfarm"><div class="fs30">社区互动</div>COMMUNITY</div>
                  </a>
              </li>
              <li>
                  <a>
                      <div class="fcolor linkfarm"><div class="fs30">玩家支持</div>PLAYER</div>
                  </a>
              </li>
          </ul>

          <!--欢迎登陆部分-->
          <div class="loginarea">
              <div class="logintu"><img src="../../assets/img/unt.png"/></div>
              <div class="VALVAN">
                    <div class="fs30 weclomlogin">欢迎登陆</div>
                    <div class="afterlogin">登陆后查看游戏战绩</div>
              </div>
          </div>

        <!--附导航-->
        <div class="attanavigation" v-show="isShow">
            <ul>
                <li class="" v-for="(item, index) in versionsList" :key="index">
                    <span>{{item}}</span>
                </li>
            </ul>
            <ul>
                <li class="" v-for="(item, index) in strategyList" :key="index"><div class="strip"><span :class="classMap[item.type]"></span>{{item.name}}</div></li>
            </ul>
            <ul>
                <li class="" v-for="(item, index) in kplList" :key="index"><div class="strip">{{item}}</div></li>
            </ul>
            <ul>
                <li class="" v-for="(item, index) in kingList" :key="index"><div class="strip"><span :class="classMap[item.type]"></span>{{item.name}}</div></li>
            </ul>
            <ul>
                <li class="" v-for="(item, index) in assistantList" :key="index"><div class="strip"><span :class="classMap[item.type]"></span>{{item.name}}</div></li>
            </ul>
            <ul>
                <li class="" v-for="(item, index) in grownList" :key="index"><div class="strip"><span :class="classMap[item.type]"></span>{{item.name}}</div></li>
            </ul>
        </div>
      </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data (){
    return {
        isShow:false,
        versionsList:[
          '版本介绍',
          '游戏介绍',
          '英雄资料',
          '爆料站',
          '故事站',
          '游戏壁纸'
        ],
        strategyList:[
          {name:'攻略中心'},
          {name:'英雄攻略'},
          {name:'视频中心'},
          {name:'王者视角',type:0},
          {name:'作者入驻',type:0},
          {name:'媒体入驻',type:0}
        ],
        kplList:[
          'KPL',
          '冠军杯',
          '高校赛',
          '城市赛',
          '全民赛'
          
        ],
        kingList:[
          {name:'王者文化站'},
          {name:'王者音乐听',type:0},
          {name:'万千世界'},
          {name:'百态王者'},
          {name:'王者信用卡'}
        ],
        assistantList:[
          {name:'官方助手',type:1},
          {name:'手Q部落'},
          {name:'微信圈子'},
          {name:'官方微博'},
          {name:'微信公众号'},
          {name:'手Q订阅号'},
          {name:'同人社区',type:0}
        ],
        grownList:[
          {name:'成长守护平台',type:2},
          {name:'健康系统',type:3},
          {name:'客服专区'},
          {name:'补包兑换'},
          {name:'自助服务'}
        
        ]
    }
  },
   created() {
      this.classMap = ['type1', 'type2', 'type3', 'type4'];
  },
  mounted() {
   
  },
  methods:{
    showBar(){
      this.isShow=true;
    },
    hideBar(){
      this.isShow=false;
    }
  },
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .topNav{
      width:100%;
      height:95px;
      background-color:#16242b;
      display:flex;
      padding:0 50px;
      .wzry{
        z-index:99;
      }
      .loginarea{
         display:flex;
         align-items:center;
         .logintu{
           height:60px;
           margin-right:10px;
           cursor:pointer;
           img{
             height:100%;
           }
         }
         .VALVAN{
           .weclomlogin{
             font-size:17px;
             color:#ccc;
             cursor:pointer;
           }
           .afterlogin{
             margin-top:10px;
              color:#ccc;
              font-size:13px;
           }
         }
       }
      /*导航*/
      .menu{
          width:65%;
          display:flex;
          justify-content:space-around;
          li{
            border-bottom:3px solid #16242b;
            a{
              color:#ccc;
            }
            .fcolor{
             
              height:100%;
            }
            .linkfarm{
              display:flex;
              flex-direction:column;
              justify-content:space-around;
              align-items:center;
              padding:10px 18px;

            }
            .fs30{
               font-size:17px;
             }
            /*导航的高亮状态*/
            &:hover{
              border-bottom:3px solid gold;
              background-color:#4f3b21;
              a{
                color:#gold;
              }
            }
           
          }
      }
      /*附属导航*/
      .attanavigation{
        height:290px;
        width:100%;
        position:absolute;
        left:0;
        margin-top:95px;
        background-color:#120d0c;
        opacity:.6;
        display:flex;
        padding:20px 220px 0 380px;
        z-index:70;
        ul{
          height:100%;
          width:19%;
          color:#fff;
          li{
            height:30px;
            display:flex;
            flex-direction:column;
            align-items:center;
             cursor:pointer;
             font-size:13px;
            &:hover{
              color:gold;
              text-decoration:underline
            }
            .strip{
              display:flex;
               align-items:center;
            }
            .type1{
              display:inline-block;
               width:25px;
               height:25px;
               margin-right:5px;
                background:url('../../assets/img/type1.png') 0 0/100% no-repeat;
            }
            .type2{
                display:inline-block;
               width:25px;
               height:25px;
               margin-right:5px;
                background:url('../../assets/img/type2.png') no-repeat;
            }
            .type3{
                display:inline-block;
               width:25px;
               height:25px;
               margin-right:5px;
                background:url('../../assets/img/type3.png') 0 0/100% no-repeat;
            }
            .type4{
                display:inline-block;
               width:25px;
               height:25px;
               margin-right:5px;
                background:url('../../assets/img/type4.png') 0 0/100% no-repeat;
            }
          }
        }
      }
     
    }
</style>

