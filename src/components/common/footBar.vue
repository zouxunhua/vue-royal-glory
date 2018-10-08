<template>
  <div class="footBar">
     <div class="interactiveEntertainment">
            <a href="http://ieg.tencent.com/"><img src="../../assets/img/txyl.png"/></a>
            <a href="http://timi.qq.com/"><img src="../../assets/img/timi.png"/></a>
     </div>
     <div class="copyright">
        <div class="ageOfGame">
            <h2>温馨提示：本游戏适合16岁(含)以上玩家娱乐</h2>
            <ul>
                <li>抵制不良游戏</li>
                <li>拒绝盗版游戏</li>
                <li>注意自我保护</li>
                <li>谨防受骗上当</li>
                <li>适度游戏益脑</li>
                <li>沉迷游戏伤身</li>
                <li>合理安排时间</li>
                <li>享受健康生活</li>
            </ul>
            <p>《王者荣耀》全部背景故事发生于架空世界“王者大陆”中。相关人物、地理、事件均为艺术创作，并非正史。若因观看王者故事对相关历史人物产生兴趣，建议查阅正史记载。</p>
        </div>
        <div class="termsOfService">
            <ul>
                <li v-for="item in navs">
                    <a :href="item.sourceUrl" class="nav-name" target="_blank">{{item.name}}</a>
                    <span class="nav-separate" v-show="item.name !== '网站导航'">|</span>
                </li>
            </ul>
            <p class="guangdongArticle"><span>COPYRIGHT © 1998 - 2018 TENCENT. ALL RIGHTS RESERVED.</span><span class="fl">腾讯公司版权所有</span></p>
            <p><a href="http://www.qq.com/culture.shtml">粤网文[2017]6138-1456号|新出网证（粤）字010号</a></p>
            <p><a href="http://sq.ccm.gov.cn/ccnt/sczr/service/business/emark/gameNetTag/4028c08b51af781b0151ecc723d77cc7"><img src="../../assets/img/wenwang.png"/>文网游备字[2016]M-CSG 0059 号|新广出审<a class="blueColor" href="javaScript:void;">[2017] 6712</a>号|ISBN 978-7-7979-8408-9</a></p>
            <p>全国文化市场统一举报电话：12318</p>
           
        </div>
     </div>
  </div>
</template>

<script>
export default {
  data (){
      return{
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
  components: {
     
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    /*页面底部*/
    .footBar{
        height:375px;
        padding:70px 20px;
        .fl{
            float:right;
        }
        .interactiveEntertainment{
            width:100%;
            height:90px;
            
            border-bottom:1px solid #d4d4d4;
            a{
                img{
                    height:100%;
                }
            }
        }
        .copyright{
            width:100%;
            height:160px;
            display:flex;
             a{
                 color:#000;
             }
            .ageOfGame{
                width:500px;
                height:160px;
                
                padding-top:15px;
                ul{
                    margin-top:5px;
                    li{
                        float:left;
                        margin-right:15px;
                    }
                }
                p{
                    padding-top:20px;
                }
            }
            .termsOfService{
                width:723px;
                height:160px;
                padding-top:35px;
                padding-left:50px;
                ul{
                    li{
                        float:left;
                        .nav-separate{
                            margin:0 5px;
                        }
                    }
                }
                .guangdongArticle{
                    margin:10px 0;
                    display:flex;
                    justify-content:space-between;
                }
                p{
                    display:flex;
                    align-items:center;
                    vertical-align:middle;
                    img{
                        height:15px;
                    }
                    .blueColor{
                        color:#53bdf9;
                    }
                }
            }
        }
    }
  
</style>
