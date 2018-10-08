<template>
  <div class="topic">
      <!--背景图-->
        <img class="" src="../assets/img/back1.png"/>
        <img class="mtop1" src="../assets/img/back2.png"/>
        <img class="mtop2" src="../assets/img/back3.png"/>
        <img class="mtop2" src="../assets/img/back4.png"/>
        <img class="mtop2" src="../assets/img/back5.png"/>
        <!--野区添新   战斗特效.............-->
        <div class="wildAreaNew mtop2">
            <div class="wild">
                <div class="addNew"></div>
                <div class="specialEffects"></div>
            </div>
            <div class="monsters">
                <div class="monsterImages">
                    <img src="//game.gtimg.cn/images/yxzj/cp/a20180919group/c1-slider12.jpg"/>
                </div>
                <p>文件夹经济发生了奇偶及南方</p>
                <span>2/2</span>
            </div>
            <div class="assit">
                <div class="equipment"></div>
                <div class="glory"></div>
            </div>
        </div>
        <img class="mtop2" src="../assets/img/back6.png"/>
        <!--个人资料改版   赠礼便捷.............-->
        <div class="personalHomepage mtop2">
            <div class="wild">
                <div class="addNew"></div>
                <div class="specialEffects"></div>
            </div>
            <div class="monsters">
                <div class="monsterImages">
                    <img src="//game.gtimg.cn/images/yxzj/cp/a20180919group/c2-slider11.jpg"/>
                </div>
                <p>文件夹经济发生了奇偶及南方</p>
                <span>2/2</span>
            </div>
            <div class="assit">
                <div class="equipment"></div>
                <div class="glory"></div>
            </div>
        </div>
        <img class="mtop2" src="../assets/img/back7.png"/>
        <!--信誉积分权益规则-->
        <div class="integralRights mtop2">
            <a href="javaScript:void;" class="reputation"></a>
            <div class="integrals">
                <img src="http://game.gtimg.cn/images/yxzj/cp/a20180919group/sbox-pic1.jpg"/>
                <p>信誉积分的上限会根据召唤师的行为进行调整，会根据召唤师长期的表现超过100或者低于100；同时，我们调整了信誉不同信誉积分的权益。您的信誉积分权益与您当前信誉积分相关联。</p>
            </div>
            <div class="optimize">
                <a href="javaScript:void;" class="microEvents"></a>
                <a href="javaScript:void;" class="newGameplay"></a>
                <a href="javaScript:void;" class="borderBreak"></a>
            </div>
        </div>
        <img class="mtop2" src="../assets/img/back8.png"/>
        <foot-bar2></foot-bar2>
  </div>
</template>

<script>
import footBar2 from './common/footBar2.vue' 
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
     'foot-bar2':footBar2
  }
        
}
</script>
//game.gtimg.cn/images/yxzj/cp/a20180919group/person-board.jpg
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import url('../assets/style/reset.css');
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    /*背景图*/
    .topic{
        width:100%;
        height:100%;
        .mtop1{
            margin-top:-3px;
        }
        .mtop2{
            margin-top:-4px;
        }
        img{
            width:1263px;
            height:100%;
        }
        .wildAreaNew{
            height:440px;
            background-color:#1e1613;
            display:flex;
            .wild{
                width:20%;
                height:100%;
                display:flex;
                flex-direction:column;
                justify-content:space-between;
                .addNew{
                    width:100%;
                    height:49.7777%;
                    background:url('../assets/img/wildArea-active.png') center/100% 100% no-repeat;
                }
                .specialEffects{
                    width:100%;
                    height:49.7777%;
                    background:url('../assets/img/combat.png') center/100% 100% no-repeat;
                }
            }
            .monsters{
                width:60%;
                height:100%;
                padding:0 3px;
                color:#fff;
                .monsterImages{
                    width:100%;
                    height:85%;
                    img{
                         width:100%;
                        height:100%;
                    }
                }
                p{
                    width:100%;
                    height:15%;
                    padding:10px 20px;
                    
                }
                span{
                    margin-top:-40px;
                    font-style:italic;
                    position:absolute;
                    left:970px;
                }
            }
            .assit{
                width:20%;
                height:100%;
                display:flex;
                flex-direction:column;
                justify-content:space-between;
                .equipment{
                    width:100%;
                    height:49.7777%;
                    background:url('../assets/img/assit.png') center/100% 100% no-repeat;
                }
                .glory{
                    width:100%;
                    height:49.7777%;
                    background:url('../assets/img/glory.png') center/100% 100% no-repeat;
                }
            }

        }
        .personalHomepage{
            height:440px;
            background-color:#1e1613;
            display:flex;
            .wild{
                width:20%;
                height:100%;
                display:flex;
                flex-direction:column;
                justify-content:space-between;
                .addNew{
                    width:100%;
                    height:49.7777%;
                    background:url('../assets/img/personalData-active.png') center/100% 100% no-repeat;
                }
                .specialEffects{
                    width:100%;
                    height:49.7777%;
                    background:url('../assets/img/send.png') center/100% 100% no-repeat;
                }
            }
            .monsters{
                width:60%;
                height:100%;
                padding:0 3px;
                color:#fff;
                .monsterImages{
                    width:100%;
                    height:85%;
                    img{
                         width:100%;
                        height:100%;
                    }
                }
                p{
                    width:100%;
                    height:15%;
                    padding:10px 20px;
                    
                }
                span{
                    margin-top:-40px;
                    font-style:italic;
                    position:absolute;
                    left:970px;
                }
            }
            .assit{
                width:20%;
                height:100%;
                display:flex;
                flex-direction:column;
                justify-content:space-between;
                .equipment{
                    width:100%;
                    height:49.7777%;
                    background:url('../assets/img/share.png') center/100% 100% no-repeat;
                }
                .glory{
                    width:100%;
                    height:49.7777%;
                    background:url('../assets/img/team.png') center/100% 100% no-repeat;
                }
            }

        }
        .integralRights{
            width:100%;
            height:450px;
            background-color:#332620;
            display:flex;
            .reputation{
                width:9%;
                height:450px;
                background-color:blue;
                background:url('../assets/img/xinyu-active.png') center/100% 100% no-repeat;
            }
            .integrals{
                width:67%;
                height:450px;
                padding:20px 0 0 112px;
                img{
                    width:75%;
                    height:60%;
                }
                p{
                    width:75%;
                    padding-top:30px;
                    color:#cab8a0;
                    font-size:17px;
                }
            }
            .optimize{
                width:27%;
                height:450px;
                a{
                    width:32.333%;
                    height:100%;
                    float:left;
                    margin-left:3px;
                }
                .microEvents{
                    background:url('../assets/img/weirace.png') center/100% 100% no-repeat;
                }
                .newGameplay{
                    background:url('../assets/img/newAnswer.png') center/100% 100% no-repeat;
                }
                .borderBreak{
                    background:url('../assets/img/borders.png') center/100% 100% no-repeat;
                }
            }
        }
    }
   
  
</style>
