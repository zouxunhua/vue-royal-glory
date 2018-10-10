<template>
<div>
        <div class="top-bar">
          <div class="nav-left">
            <!--腾讯游戏-->
            <a href="http://game.qq.com/?ADTAG=IED.InnerCop.gameWeb.topNav%20target="><img class="txlogo" src="../../assets/img/txlogo.png" /></a>
            <span class="nav-separate"></span>
            <!--超时空穿梭者-->
            <a href=""><img @mouseenter="showCar" @mouseleave="hideCar" class="cskcsz" :class="{hide: isShow}" src="../../assets/img/cskcsz.png" /></a>
          </div>
          <!--成长守护平台     腾讯游戏排行榜-->
          <div class="nav-right">
            <a href="https://jiazhang.qq.com/jz/home.html?ADTAG=gamepcbanner" class="growth" :class="{ active: isActive===1 }" @mouseenter="highlight" @mouseleave="notBright"><img class="lq" src="../../assets/img/lq.png" />成长守护平台</a>
            <div class="game" :class="{ active: isActive===2 }" @mouseenter="light" @mouseleave="notBright">腾讯游戏排行榜<span class="el-icon-message"></span></div>
          </div>
        </div>
         <!--超时空穿梭者hover时显示的图片-->
        <a href="http://ac.o2.qq.com/php/click.php?loc_id=119_0d8e2b9df01ce2966bb5d8dd52e865e1&info_data=2wxcQRbnHp-J1_yd_t4KwSiCuwXOUxeV5OtOENROJ_Oqh-l094Dl2CRTZiCix81aqJxIsfgutETohTNePFsPqxZAtLdbnapXC1DtIKxGXrIodIWdpCOZlalzoUzJ7Re5fuKoNOxzhgxKgFyi4w1KUCKfbJlL0KtJzWnGsmcyI2Noz-c7X-9GKQfBOHEHtqG29kjSnJJiv20F8rMzmfpvo9OBSpodO6_u55D9YQgfKck2wt569V86_4TUX7tTteL5BrpmKLDbxHWBUfGBoK4sZguuYkaoCjqDu8eRwdVktzlEj-dZfWWLHgwRXSKQHfAoDDTX-rbYAzaZfgTVxr27BWAMelBzNsMuXwWP8vqMHlyakgmaOaoMBxa63dmrfxZM7tiJJhAoFP1Jex87kvv8knVkBacHFGfWX5YqrGK3mUY">
            <img class="qqfc" @mouseenter="showCar" @mouseleave="hideCar" src="../../assets/img/qqfc.jpg" v-show="isShow" />
        </a>
         <!--腾讯游戏排行榜hover时显示的面板-->
       <div class="gameList" v-show="gamelistShow" @mouseenter="longShow" @mouseleave="hideGameList">
            <div class="xinYou" v-for="(item, index) in gameOne" :key="item.title">
                  <div class="header"><b>{{item.title}}</b><span class="more">更多>></span></div>
                  <hr/>
                  <div class="subtitle">排名 &nbsp;&nbsp;&nbsp;游戏</div>
                  <ul>
                    <li class="nameOfGame wipeOffMargin" v-for="(itemSon, i) in item.gameList" :key="itemSon.id" @mouseenter="strut">
                         <span class="serialNumber" :class="{  redness: i+1===1 || i+1===2 || i+1===3 }">{{i+1}}</span><span class="listname">{{itemSon.nameOfGame}}</span>
                        <div class="officialWebsite" :class="{ initActive: i+1===1 }">
                              <img class="gameads" :src="itemSon.gamebarUrl"/>
                              <div class="fooBar">
                                  <span class="entergw"><Icon type="md-home" /><span>进入官网</span></span>
                                  <span class="entergw"><Icon type="md-download" /><span>下载游戏</span></span>
                              </div>
                        </div>
                    </li>
                  </ul>
            </div> 
            <div class="xinYou" v-for="(item, index) in gameTwo" :key="item.title">
                  <div class="header"><b>{{item.title}}</b><span class="more">更多>></span></div>
                  <hr/>
                  <div class="subtitle">排名 &nbsp;&nbsp;&nbsp;游戏</div>
                  <ul>
                    <li class="nameOfGame wipeOffMargin" v-for="(itemSon, i) in item.gameList" :key="itemSon.id" @mouseenter="strut">
                         <span class="serialNumber" :class="{  redness: i+1===1 || i+1===2 || i+1===3 }">{{i+1}}</span><span class="listname">{{itemSon.nameOfGame}}</span>
                        <div class="officialWebsite" :class="{ initActive: i+1===1 }">
                              <img class="gameads" :src="itemSon.gamebarUrl"/>
                              <div class="fooBar">
                                  <span class="entergw"><Icon type="md-home" /><span>进入官网</span></span>
                                  <span class="entergw"><Icon type="md-download" /><span>下载游戏</span></span>
                              </div>
                        </div>
                        
                    </li>
                  </ul>
            </div> 
            <!--第三列-->
            <div class="thirdcolumn">
                <div class="xinYou xyth" v-for="(item, index) in gameThree" :key="item.title">
                      <div class="header"><b>{{item.title}}</b><span class="more">更多>></span></div>
                      <hr/>
                      <div class="subtitle">排名 &nbsp;&nbsp;&nbsp;游戏</div>
                      <ul>
                        <li class="nameOfGame" v-for="(itemSon, i) in item.gameList" :key="itemSon.id">
                            <span class="serialNumber" :class="{  redness: i+1===1 || i+1===2 || i+1===3 }">{{i+1}}</span><span class="listname">{{itemSon.nameOfGame}}</span>
                            <div class="officialWebsite">
                                  <img class="gameads" :src="itemSon.gamebarUrl"/>
                                  <div class="fooBar">
                                      <Icon type="md-home" />
                                      <Icon type="logo-apple" />
                                      <Icon type="logo-android" />
                                  </div>
                            </div>
                            
                        </li>
                      </ul>
                </div> 
                  <div class="xinYou xyth" v-for="(item, index) in gameFour" :key="item.title">
                      <div class="header fhead"><b>{{item.title}}</b><span class="more">更多>></span></div>
                      <ul>
                        <li class="nameOfGame" v-for="(itemSon, i) in item.gameList" :key="itemSon.id">
                            <span class="serialNumber" :class="{  redness: i+1===1 || i+1===2 || i+1===3 }">{{i+1}}</span><span class="listname">{{itemSon.nameOfGame}}</span>
                            <div class="officialWebsite" :class="{ initActive: i+1===1 }">
                                  <div class="fooBar">
                                      <Icon type="md-home" />
                                      <Icon type="logo-apple" />
                                      <Icon type="logo-android" />
                                  </div>
                                  <img class="gameads" :src="itemSon.gamebarUrl"/>
                            </div>
                            
                        </li>
                      </ul>
                </div> 
            </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import $ from "jquery";
  export default {
    data () {
        return {
          isShow:null,
          isActive:null,
          isHover:null,
          gamelistShow:false,
          //腾讯游戏排行榜hover时显示的面板的数据
          gameOne:[{
            title:'新游排行榜',
            gameList:[
              {id:'a1',nameOfGame:'NBA2KOL2',gamebarUrl:'//ossweb-img.qq.com/images/NBA2KOL2.jpg'},
              {id:'a2',nameOfGame:'FLFA Online 4',gamebarUrl:'//ossweb-img.qq.com/images/FIFAOL4-KV194_82.jpg'},
              {id:'a3',nameOfGame:'灵山奇缘',gamebarUrl:'//ossweb-img.qq.com/images/lsqy.jpg'},
              {id:'a4',nameOfGame:'流放之路',gamebarUrl:'//ossweb-img.qq.com/images/chanpin/game/title/gamerank/lfzl-2.jpg'},
              {id:'a5',nameOfGame:'冒险岛2',gamebarUrl:'//ossweb-img.qq.com/images/chanpin/game/title/gamerank/mxd2-2.jpg'},
              {id:'a6',nameOfGame:'使命召唤OL',gamebarUrl:'//ossweb-img.qq.com/images/chanpin/game/title/gamerank/cod-2.jpg'},
              {id:'a7',nameOfGame:'极品飞车ONLINE',gamebarUrl:'//ossweb-img.qq.com/images/chanpin/game/title/gamerank/jpfcol-2.jpg'},
              {id:'a8',nameOfGame:'穿越火线',gamebarUrl:'//ossweb-img.qq.com/images/chanpin/game/title/gamerank/cf-2.jpg'},
              {id:'a9',nameOfGame:'QQ炫舞',gamebarUrl:'//ossweb-img.qq.com/images/chanpin/game/title/gamerank/x5-2.jpg'},
              {id:'a10',nameOfGame:'御龙在天',gamebarUrl:'//ossweb-img.qq.com/images/chanpin/game/title/gamerank/yl-2.jpg'}
            ]
          }],
          gameTwo:[{
              title:'热门排行榜',
              gameList:[
                {id:'f1',nameOfGame:'英雄联盟',gamebarUrl:'//ossweb-img.qq.com/images/chanpin/game/title/gamerank/lol-2.jpg'},
                {id:'f2',nameOfGame:'穿越火线',gamebarUrl:'//ossweb-img.qq.com/images/chanpin/game/title/gamerank/cf-2.jpg'},
                {id:'f3',nameOfGame:'地下城与勇士',gamebarUrl:'//ossweb-img.qq.com/images/chanpin/game/title/gamerank/dnf-2.jpg'},
                {id:'f4',nameOfGame:'逆战',gamebarUrl:'//ossweb-img.qq.com/images/chanpin/game/title/gamerank/nz-2.jpg'},
                {id:'f5',nameOfGame:'使命召唤OL',gamebarUrl:'//ossweb-img.qq.com/images/chanpin/game/title/gamerank/cod-2.jpg'},
                {id:'f6',nameOfGame:'QQ炫舞',gamebarUrl:'//ossweb-img.qq.com/images/chanpin/game/title/gamerank/x5-2.jpg'},
                {id:'f7',nameOfGame:'QQ飞车',gamebarUrl:'//ossweb-img.qq.com/images/chanpin/game/title/gamerank/speed-2.jpg'},
                {id:'f8',nameOfGame:'炫舞时代',gamebarUrl:'//ossweb-img.qq.com/images/chanpin/game/title/gamerank/5s-2.jpg'},
                {id:'f9',nameOfGame:'天涯明月刀',gamebarUrl:'//ossweb-img.qq.com/images/chanpin/game/title/gamerank/wuxia-2.jpg'},
                {id:'f10',nameOfGame:'FLFA Online 3',gamebarUrl:'//ossweb-img.qq.com/images/chanpin/game/title/gamerank/fifa-2.jpg'}
              ]
          }],
          gameThree:[{
                title:'新品手游排行榜',
                gameList:[
                  {id:'t1',nameOfGame:'圣斗士星矢',gamebarUrl:'//game.gtimg.cn/images/game/act/qmgjzq/KV194_82-sdsxs.jpg'},
                  {id:'t2',nameOfGame:'全民冠军足球',gamebarUrl:'//game.gtimg.cn/images/game/act/qmgjzq/qmgjzq-KV1.jpg'},
                  {id:'t3',nameOfGame:'我叫MT4',gamebarUrl:'//ossweb-img.qq.com/images/wjmt4.jpg'},
                  {id:'t4',nameOfGame:'FIFA足球世界',gamebarUrl:'//ossweb-img.qq.com/images/FIFAMobile-KV194_82.jpg'},
                  {id:'t5',nameOfGame:'拳皇命运手游',gamebarUrl:'//ossweb-img.qq.com/images/KV19482.jpg'},
                ]
          }],
          gameFour:[{
                  title:'热门手游排行榜',
                  gameList:[
                    {id:'s1',nameOfGame:'王者荣耀',gamebarUrl:'//ossweb-img.qq.com/images/chanpin/game/title/gamerank/sgame-22.jpg'},
                    {id:'s2',nameOfGame:'穿越火线之枪战王者',gamebarUrl:'//ossweb-img.qq.com/images/chanpin/game/title/gamerank/cfsy-2.jpg'},
                    {id:'s3',nameOfGame:'奇迹暖暖',gamebarUrl:'//ossweb-img.qq.com/images/chanpin/game/title/gamerank/qjnn-2.jpg'},
                    {id:'s4',nameOfGame:'天天爱消除',gamebarUrl:'//ossweb-img.qq.com/images/chanpin/game/title/gamerank/peng-2.jpg'},
                    {id:'s5',nameOfGame:'火影忍者手游',gamebarUrl:'//ossweb-img.qq.com/images/chanpin/game/title/gamerank/hyrz-2.jpg'},
                  ]
          }]
        }
    },
    mounted() {
      //控制面板li的显示隐藏
      $('.gameList li').mouseenter(function () {
          $(this).children('div').show().parent().siblings('li').children('div').hide();
          $(this).parent().parent().siblings('.xyth').children().children('li').children('div').hide();
      });
    },
    methods: {
      showCar(){
        this.isShow=true;
      },
      hideCar(){
        this.isShow=false;
      },
      highlight(){
        this.isActive=1
      },
      light(){
        this.isActive=2;
        this.gamelistShow=true;
        $('.wipeOffMargin .listname:eq(0)').hide();
        $('.wipeOffMargin .listname:eq(10)').hide();
      },
      notBright(){
        this.isActive=null;
        this.gamelistShow=false;
      },
      strut(e){
        $(e.target).children('div').show().parent().siblings('li').children('div').hide();
        $(e.target).children('.listname').hide().parent().siblings('li').children('.listname').show();
      },
      longShow(){
        this.gamelistShow=true;
      },
      hideGameList(){
        this.gamelistShow=false;
        $('.gameList li').children('div').hide();
        $('.gameList li .officialWebsite:eq(0)').show();
        $('.gameList li .officialWebsite:eq(10)').show();
        $('.gameList li .officialWebsite:eq(25)').show();
        console.log($('.gameList li .officialWebsite'));
      }

    },
    components: {
  	}
  };
</script>
<style lang="scss" scoped>
 @import '../../assets/style/reset.scss';
  .top-bar{
      width:100%;
      height:50px;
      padding:0 170px;
      border:2px solid #f5f5f5;
      background-color:#fff;
      display:flex;
      justify-content:space-around;
      .nav-left{
        width:100%;
        display:flex;
        align-items:center;

        .txlogo{
          width:200px;
          z-index:9999;
        }
        .cskcsz{
          display:block;
          width:200px;
          height:100%;
          z-index:999;
        }
        .hide{
          display:block;
          opacity:0;
          width:200px;
          z-index:999;
        }
        .nav-separate {
          height:30px;
          width:1px;
          margin:0 7px;
          z-index:999;
          background-color:#eaeaea;
          display: inline-block;
        }
      }
      .nav-right{
        width:300px;
        display:flex;
        align-items:center;
        justify-content:space-around;
        .active{
          color:red;
        }
        .growth{
          height:100%;
          display:flex;
          align-items:center;
          .lq{
            width:20px;
          }
        }
        .game{
          height:100%;
          line-height:47px;
          text-align:center;
        }
      }
    }
.qqfc{
  height:228px;
  width:930px;
  position:absolute;
  margin-left:175px;
  margin-top:-50px;
  z-index:200;
}
/*腾讯游戏排行榜*/
.gameList{
    width:700px;
    height:460px;
    padding:10px;
    border:1px solid #ccc;
    position:absolute;
    left:400px;
    background-color:#fff;
    z-index:999;
    display:flex;
    .xinYou{
          width:30%;
          margin-right:25px;
          .header{
            padding-bottom:3px;
            display:flex;
            justify-content:space-between;
            .more:hover{
              color:red;
              text-decoration:underline;
              cursor:pointer;
            }
          }
          .fhead{
            margin-top:10px;
            margin-bottom:13px;
          }
          .subtitle{
            padding:8px 0 10px;
          }
          .nameOfGame{
             width:100%;
             margin:5px 0;
            .serialNumber{
              width:17px;
              height:17px;
              text-align:center;
              margin-right:20px;
              display:inline-block;
              border:1px solid #000;
              z-index:9999;
              position:absolute;
             
            }
            .redness{
              background-color:red;
              color:#fff;
              border:none;
            }
             .listname{
                padding-left:37px;
             }
             /*腾讯游戏排行榜中鼠标悬停时出现的图片*/
            .officialWebsite{
               width:100%;
               height:100px;
               border:1px solid #000;
               display:none;
               position:relative;
               .gameads{
                 width:100%;
                  height:100%;
                  display:inline-block;
               }
               .fooBar{
                 height:40px;
                 width:100%;
                 background-color:#404040;
                 color:#fff;
                 margin-top:-45px;
                 display:flex;
                 justify-content:space-around;
                 z-index:9999;
                 position:absolute;
                 bottom:0;
                 .entergw{
                   display:flex;
                   align-items:center;
                  .ivu-icon{
                      font-size:20px;
                      margin-right:3px;
                   }
                   &:hover{
                     .ivu-icon{
                       color:red;
                     }
                     span{
                       color:red;
                       text-decoration:underline;
                     }
                   }
                 }
               }
            }
            .initActive{
             display:inline-block;
             
            }
          }
    }
    /*新品手游排行榜   热门手游排行榜*/
    .thirdcolumn{
        width:30%;
        .xyth{
            width:100%;
            .officialWebsite{
              margin-top:-17px;
            }
        }
        .xinYou{
          margin-right:25px;
          .header{
            padding-bottom:3px;
            display:flex;
            justify-content:space-between;
            .more:hover{
              color:red;
              text-decoration:underline;
              cursor:pointer;
            }
          }
          .fhead{
            margin-top:10px;
            margin-bottom:13px;
          }
          .subtitle{
            padding:8px 0 10px;
          }
          .nameOfGame{
             width:100%;
             margin:5px 0;
            .serialNumber{
              width:17px;
              height:17px;
              text-align:center;
              margin-right:20px;
              display:inline-block;
              border:1px solid #000;
              z-index:9999;
              position:absolute;
             
            }
            .redness{
              background-color:red;
              color:#fff;
              border:none;
            }
             .listname{
                padding-left:37px;
             }
             /*腾讯游戏排行榜中鼠标悬停时出现的图片*/
            .officialWebsite{
               width:100%;
               height:100px;
               border:1px solid #000;
               display:none;
               position:relative;
               .gameads{
                 width:100%;
                  height:100%;
                  display:inline-block;
               }
               .fooBar{
                 height:40px;
                 width:100%;
                 background-color:#404040;
                 color:#fff;
                 margin-top:-45px;
                 display:flex;
                 justify-content:space-around;
                 z-index:9999;
                 position:absolute;
                 font-size:22px;
                 bottom:0;
                 .ivu-icon{
                   width:33.3333333%;
                   height:100%;
                   line-height:40px;
                   border-left:1px solid #707070;
                   text-align:center;
                   &:hover{
                     color:red;
                   }
                 }
            
               }
            }
            .initActive{
             display:inline-block;
             
            }
          }
    }
    }
   
  }
  
</style>