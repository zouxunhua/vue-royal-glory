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
                    <p>周免英雄（10月1日-10月7日）</p>
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
                <div class="path" v-for="(item,index) in theme" :key="item.themeName" v-show="currentTab==item.type">
                    <Icon type="ios-home" />&nbsp;
                    <router-link to="/index">王者荣耀首页</router-link>
                    <span class="">&nbsp; >&nbsp; {{item.themeName}} </span>
                </div>
                <div class="heroIntroduction">
                    <div class="title" v-for="(item,index) in theme" :key="item.themeName" v-show="currentTab==item.type">
                        <img src="//game.gtimg.cn/images/yxzj/web201605/page/icon_hero.png"/>&nbsp;
                        {{item.themeName}}
                    </div>

                    <ul class="tabtitle">
                        <li v-for="tab in tabTitle" @click="currentTab=tab" :class="{active:currentTab==tab}"><a>{{tab}}</a></li>
                    </ul>
                    <!--英雄-->
                    <div v-show="currentTab=='英雄'" class="tabitems1">
                        <div class="integratedPositioning">
                            <div class="nav-left">
                                综合<br/>
                                定位
                            </div>
                            <div class="nav-right">
                                  <!--单选框思路:
                                           用animal传递单选框的选项信息,再进行数组过滤
                                  -->
                                <RadioGroup v-model="animal">
                                  <Radio label="本周免费"></Radio>&nbsp;
                                  <Radio label="新手推荐"></Radio>
                                </RadioGroup>
                                <br/>
                                  <RadioGroup v-model="animal">
                                    <Radio label="全部"></Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Radio label="坦克"></Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Radio label="战士"></Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Radio label="刺客"></Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Radio label="法师"></Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Radio label="射手"></Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Radio label="辅助"></Radio>
                                </RadioGroup>
                              <!--搜索框逻辑:
                                        判断输入值是否存在于数组中,如果存在就展示,如果不存在,就什么都不做
                                        准备2个li,一个显示,单选状态的图像,一个显示搜索状态的图像
                                        使用一个值来设置这两个li的显示隐藏
                                        按下enter键前第一个li为显示状态
                                        按下enter键进行数组过滤
                                        过滤后展示结果
                                        此时,第二个li为显示状态
                              -->
                              <div class="searchbar">
                                    <input type="text" class="form-control" value="请输入你想要搜索的英雄名" v-model="searContent" @keyup.32="submit">
                                    <span class="el-icon-search"></span>
                              </div>
                            </div>
                        </div>
                        <ul class="heroList">
                            <li v-show="(animal===item.isFree || animal===item.isrecommend || animal===item.isAll || animal===item.istank || animal===item.isSoldier || animal===item.isAssassin || animal===item.isMages || animal===item.isMarksmen || animal===item.isAssist) && isShow" 
                            v-for="(item, index) in heroes" :key="index">
                                <a>
                                    <img :src="item.imgUrl"/>
                                    <p>{{item.nickname}}</p>
                                </a>
                            </li>
                            <li v-show="!isShow" v-for="(item, index) in res" :key="item.nickname">
                                 <a>
                                    <img :src="item.imgUrl"/>
                                    <p>{{item.nickname}}</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <!--局内道具-->
                    <div v-show="currentTab=='局内道具'" class="tabitems2">
                        <div class="integratedPositioning">
                            <div class="nav-right">
                                  <!--单选框思路:
                                           当点击常规模式的"全部"时,显示全部的常规模式道具
                                           当点击常规模式的"攻击"时,显示攻击的常规模式道具
                                           .......................
                                           当点击边境突围模式的"全部"时,显示全部的边境突围模式道具
                                           当点击边境突围模式的"装备"时,显示装备的边境突围模式道具
                                           ........................
                                           当道具的conventional属性与单选按钮的conventionalPatterns相等时
                                           当道具的borderBreakout属性与单选按钮的borderBreakoutMode相等时
                                  -->
                                <RadioGroup v-model="patterns">
                                  <Radio label="常规模式"></Radio>&nbsp;
                                  <Radio label="边境突围模式"></Radio>
                                </RadioGroup>
                                <br/>
                                  <RadioGroup v-model="conventionalPatterns" v-show="patterns==='常规模式'">
                                    <Radio label="全部"></Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Radio label="攻击"></Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Radio label="法术"></Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Radio label="防御"></Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Radio label="移动"></Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Radio label="打野"></Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Radio label="辅助"></Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </RadioGroup>
                                  <RadioGroup v-model="borderBreakoutMode" v-show="patterns==='边境突围模式'">
                                    <Radio label="全部"></Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Radio label="装备"></Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Radio label="道具"></Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Radio label="额外技能"></Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </RadioGroup>
                              <!--搜索框逻辑:
                                        判断输入值是否存在于数组中,如果存在就展示,如果不存在,就什么都不做
                                        准备2个li,一个显示,单选状态的图像,一个显示搜索状态的图像
                                        使用一个值来设置这两个li的显示隐藏
                                        按下enter键前第一个li为显示状态
                                        按下enter键进行数组过滤
                                        过滤后展示结果
                                        此时,第二个li为显示状态
                              -->
                              <div class="searchbar">
                                    <input type="text" class="form-control" value="请输入你想要搜索的道具名" v-model="searContent2" @keyup.32="submit2">
                                    <span class="el-icon-search"></span>
                              </div>
                            </div>
                        </div>
                        <ul class="heroList">
                            <li v-show="(((conventionalPatterns===item.conventionalAll || conventionalPatterns===item.conventionalAttack || conventionalPatterns===item.conventionalFormulas
                             || conventionalPatterns===item.conventionalDefense || conventionalPatterns===item.conventionalMove || conventionalPatterns===item.conventionalJungling || 
                             conventionalPatterns===item.conventionalAssist) && patterns==='常规模式') || ((borderBreakoutMode===item.borderBreakoutAll || borderBreakoutMode===item.borderBreakoutEquipment ||
                              borderBreakoutMode===item.borderBreakoutProp || borderBreakoutMode===item.borderBreakoutSkill) && patterns==='边境突围模式')) && isShow2" 
                            v-for="(item, index) in localProps" :key="index" @mouseenter="showPropPanel=item.prop" @mouseleave="showPropPanel=false">
                                <a>
                                    <img :src="item.imgUrl"/>
                                    <p>{{item.prop}}</p>
                                </a>
                                  <!--道具图片hover时,出现的面板     -->
                                  <div class="propPanel" v-show="showPropPanel===item.prop">
                                      <div class="introduces">
                                            <img :src="item.imgUrl"/>
                                            <div class="propPrice"><h2>{{item.prop}}</h2>售价:150<br/>总价:250</div>
                                      </div>
                                      <p>+20物理攻击</p>
                                      <p>福建省建设基地饿哦为己任解放军烦死了发咯日偶然看见风的季节都上来了积分是连接方式连接方式垃圾分类顺顺利利酸辣粉姐姐你</p>
                                  </div>
                            </li>
                            <li v-show="!isShow2" v-for="(item, index) in res2" :key="item.prop" @mouseenter="showPropPanel=item.prop" @mouseleave="showPropPanel=false">
                                 <a>
                                    <img :src="item.imgUrl"/>
                                    <p>{{item.prop}}</p>
                                </a>
                                <!--道具图片hover时,出现的面板     -->
                                  <div class="propPanel" v-show="showPropPanel===item.prop">
                                      <div class="introduces">
                                            <img :src="item.imgUrl"/>
                                            <div class="propPrice"><h2>{{item.prop}}</h2>售价:150<br/>总价:250</div>
                                      </div>
                                      <p>+20物理攻击</p>
                                      <p>福建省建设基地饿哦为己任解放军烦死了发咯日偶然看见风的季节都上来了积分是连接方式连接方式垃圾分类顺顺利利酸辣粉姐姐你</p>
                                  </div>
                            </li>
                        </ul>
                      
                    </div>
                    <!--召唤师技能
                           点击不同的图片,显示不同的召唤师技能信息
                           收集所有召唤师技能信息,并贴上标签
                           如果召唤师技能信息的标签与图片标签一致,则显示对应信息
                           1.布置静态页
                           2.设置中间量
                    -->
                    <div v-show="currentTab=='召唤师技能'" class="tabitems3">
                        <div class="heroList">
                            <ul class="summoner">
                                <li v-for="(item, index) in summonerList" :key="index" @click="currentSkill=item.summonerName" :class="{active:currentSkill===item.summonerName}">
                                     <a>
                                        <img :src="item.imgUrl"/>
                                        <p>{{item.summonerName}}</p>
                                     </a>
                                </li>
                            </ul>
                            <div class="skill" v-for="(item, index) in skillList" :key="index" v-show="currentSkill===item.skillName">
                                <img :src="item.skillUrl"/>
                                <h2>{{item.skillName}}</h2>
                                <p class="unblocking">{{item.unlocking}}</p>
                                <br/>
                                <p>{{item.skillDetail}}</p>
                            </div>
                        </div>
                    </div>
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
          animal: '全部',
          patterns:'常规模式',
          conventionalPatterns:'全部',
          borderBreakoutMode:'全部',
          currentHeroName:'孙膑',
          //召唤师的当前技能
          currentSkill:'惩击',
          //搜索框的文本值
          searContent:'请输入你想要搜索的英雄名',
          searContent2:'请输入你想要搜索的道具名',
          isShow:true,
          isShow2:true,
          //面板展示的条件
          showPropPanel:'',
          res:[],
          res2:[],
          //周免英雄（10月1日-10月7日）
          heroList:[
              {id:'a1',heroName:'孙膑',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/118/118.jpg',activeUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/118/118-freehover.png'},
              {id:'a2',heroName:'典韦',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/129/129.jpg',activeUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/129/129-freehover.png'},
              {id:'a3',heroName:'老夫子',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/139/139.jpg',activeUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/139/139-freehover.png'},
              {id:'a4',heroName:'刘邦',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/149/149.jpg',activeUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/149/149-freehover.png'},
              {id:'a5',heroName:'王昭君',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/152/152.jpg',activeUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/152/152-freehover.png'},
              {id:'a6',heroName:'成吉思汗',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/177/177.jpg',activeUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/177/177-freehover.png'},
              {id:'a7',heroName:'米莱狄',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/504/504.jpg',activeUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/504/504-freehover.png'},
          ],
          theme:[
              {type:'英雄',themeName:'英雄介绍'},
              {type:'局内道具',themeName:'局内道具'},
              {type:'召唤师技能',themeName:'召唤师技能'},
          ],
          tabTitle:["英雄","局内道具","召唤师技能"],
          currentTab:'英雄',
          //英雄
          heroes:[
              {isAll:'全部',nickname:'伽罗',isMarksmen:'射手',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/508/508.jpg'},
              {isAll:'全部',nickname:'盾山',isAssist:'辅助',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/509/509.jpg'},
              {isAll:'全部',nickname:'司马懿',isAssassin:'刺客',isMages:'法师',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/137/137.jpg'},
              {isAll:'全部',nickname:'孙策',istank:'坦克',isSoldier:'战士',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/510/510.jpg'},
              {isAll:'全部',nickname:'元歌',isAssassin:'刺客',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/125/125.jpg'},
              {isAll:'全部',nickname:'米莱狄',isFree:'本周免费',isMages:'法师',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/504/504.jpg'},
              {isAll:'全部',nickname:'狂铁',isSoldier:'战士',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/503/503.jpg'},
              {isAll:'全部',nickname:'弈星',isMages:'法师',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/197/197.jpg'},
              {isAll:'全部',nickname:'裴擒虎',isSoldier:'战士',isAssassin:'刺客',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/502/502.jpg'},
              {isAll:'全部',nickname:'杨玉环',isMages:'法师',isAssist:'辅助',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/176/176.jpg'},
              {isAll:'全部',nickname:'公孙离',isMarksmen:'射手',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/199/199.jpg'},
              {isAll:'全部',nickname:'明世隐',isAssist:'辅助',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/501/501.jpg'},
              {isAll:'全部',nickname:'女娲',isMages:'法师',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/179/179.jpg'},
              {isAll:'全部',nickname:'梦奇',istank:'坦克',isMages:'法师',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/198/198.jpg'},
              {isAll:'全部',nickname:'苏烈',isSoldier:'战士',istank:'坦克',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/194/194.jpg'},
              {isAll:'全部',nickname:'百里玄策',isAssassin:'刺客',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/195/195.jpg'},
              {isAll:'全部',nickname:'百里守约',isAssassin:'刺客',isMarksmen:'射手',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg'},
              {isAll:'全部',nickname:'铠',istank:'坦克',isSoldier:'战士',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/193/193.jpg'},
              {isAll:'全部',nickname:'鬼谷子',isAssist:'辅助',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/189/189.jpg'},
              {isAll:'全部',nickname:'干将莫邪',isMages:'法师',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/182/182.jpg'},
              {isAll:'全部',nickname:'东皇太一',istank:'坦克',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/187/187.jpg'},
              {isAll:'全部',nickname:'大乔',isAssist:'辅助',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/191/191.jpg'},
              {isAll:'全部',nickname:'黄忠',isMarksmen:'射手',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/192/192.jpg'},
              {isAll:'全部',nickname:'诸葛亮',isMages:'法师',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/190/190.jpg'},
              {isAll:'全部',nickname:'哪吒',isSoldier:'战士',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/180/180.jpg'},
              {isAll:'全部',nickname:'太乙真人',istank:'坦克',isAssist:'辅助',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/186/186.jpg'},
              {isAll:'全部',nickname:'蔡文姬',isAssist:'辅助',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/184/184.jpg'},
              {isAll:'全部',nickname:'雅典娜',isSoldier:'战士',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/183/183.jpg'},
              {isAll:'全部',nickname:'杨戬',isSoldier:'战士',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/178/178.jpg'},
              {isAll:'全部',nickname:'成吉思汗',isFree:'本周免费',isMarksmen:'射手',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/177/177.jpg'},
              {isAll:'全部',nickname:'钟馗',isSoldier:'战士',isMages:'法师',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/175/175.jpg'},
              {isAll:'全部',nickname:'虞姬',isMarksmen:'射手',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/174/174.jpg'},
              {isAll:'全部',nickname:'李元芳',isMarksmen:'射手',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/173/173.jpg'},
              {isAll:'全部',nickname:'张飞',isAssist:'辅助',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/171/171.jpg'},
              {isAll:'全部',nickname:'刘备',isSoldier:'战士',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/170/170.jpg'},
              {isAll:'全部',nickname:'后羿',isMarksmen:'射手',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg'},
              {isAll:'全部',nickname:'牛魔',isAssist:'辅助',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/168/168.jpg'},
              {isAll:'全部',nickname:'孙悟空',isSoldier:'战士',isAssassin:'刺客',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg'},
              {isAll:'全部',nickname:'亚瑟',isSoldier:'战士',isrecommend:'新手推荐',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg'},
              {isAll:'全部',nickname:'橘右京',isSoldier:'战士',isAssassin:'刺客',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/163/163.jpg'},
              {isAll:'全部',nickname:'娜可露露',isAssassin:'刺客',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/162/162.jpg'},
              {isAll:'全部',nickname:'不知火舞',isAssassin:'刺客',isMages:'法师',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/157/157.jpg'},
              {isAll:'全部',nickname:'张良',isMages:'法师',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/156/156.jpg'},
              {isAll:'全部',nickname:'花木兰',isSoldier:'战士',isAssassin:'刺客',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/154/154.jpg'},
              {isAll:'全部',nickname:'兰陵王',isAssassin:'刺客',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/153/153.jpg'},
              {isAll:'全部',nickname:'王昭君',isFree:'本周免费',isMages:'法师',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/152/152.jpg'},
              {isAll:'全部',nickname:'韩信',isSoldier:'战士',isAssassin:'刺客',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/150/150.jpg'},
              {isAll:'全部',nickname:'刘邦',isFree:'本周免费',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/149/149.jpg'},
              {isAll:'全部',nickname:'姜子牙',isMages:'法师',isAssist:'辅助',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/148/148.jpg'},
              {isAll:'全部',nickname:'露娜',isSoldier:'战士',isMages:'法师',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/146/146.jpg'},
              {isAll:'全部',nickname:'程咬金',isSoldier:'战士',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg'},
              {isAll:'全部',nickname:'安其拉',isMages:'法师',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/142/142.jpg'},
              {isAll:'全部',nickname:'貂蝉',isAssassin:'刺客',isMages:'法师',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/141/141.jpg'},
              {isAll:'全部',nickname:'关羽',istank:'坦克',isSoldier:'战士',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/140/140.jpg'},
              {isAll:'全部',nickname:'老夫子',isFree:'本周免费',isSoldier:'战士',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/139/139.jpg'},
              {isAll:'全部',nickname:'武则天',isMages:'法师',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/136/136.jpg'},
              {isAll:'全部',nickname:'项羽',istank:'坦克',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/135/135.jpg'},
              {isAll:'全部',nickname:'达摩',istank:'坦克',isSoldier:'战士',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/134/134.jpg'},
              {isAll:'全部',nickname:'狄仁杰',isrecommend:'新手推荐',isMarksmen:'射手',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/133/133.jpg'},
              {isAll:'全部',nickname:'马可波罗',isMarksmen:'射手',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/132/132.jpg'},
              {isAll:'全部',nickname:'李白',isSoldier:'战士',isAssassin:'刺客',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/131/131.jpg'},
              {isAll:'全部',nickname:'宫本武藏',isSoldier:'战士',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/130/130.jpg'},
              {isAll:'全部',nickname:'典韦',isFree:'本周免费',isSoldier:'战士',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/129/129.jpg'},
              {isAll:'全部',nickname:'曹操',isSoldier:'战士',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/128/128.jpg'},
              {isAll:'全部',nickname:'甄姬',isMages:'法师',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/127/127.jpg'},
              {isAll:'全部',nickname:'夏侯惇',istank:'坦克',isSoldier:'战士',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/126/126.jpg'},
              {isAll:'全部',nickname:'周瑜',isMages:'法师',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/124/124.jpg'},
              {isAll:'全部',nickname:'吕布',istank:'坦克',isSoldier:'战士',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/123/123.jpg'},
              {isAll:'全部',nickname:'芈月',istank:'坦克',isMages:'法师',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/121/121.jpg'},
              {isAll:'全部',nickname:'白起',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/120/120.jpg'},
              {isAll:'全部',nickname:'扁鹊',isMages:'法师',isAssist:'辅助',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/119/119.jpg'},
              {isAll:'全部',nickname:'孙膑',isFree:'本周免费',isAssist:'辅助',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/118/118.jpg'},
              {isAll:'全部',nickname:'钟无艳',isSoldier:'战士',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/117/117.jpg'},
              {isAll:'全部',nickname:'阿轲',isAssassin:'刺客',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/116/116.jpg'},
              {isAll:'全部',nickname:'高渐离',isMages:'法师',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/115/115.jpg'},
              {isAll:'全部',nickname:'刘禅',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/114/114.jpg'},
              {isAll:'全部',nickname:'庄周',isAssist:'辅助',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/113/113.jpg'},
              {isAll:'全部',nickname:'鲁班七号',isrecommend:'新手推荐',isMarksmen:'射手',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/112/112.jpg'},
              {isAll:'全部',nickname:'孙尚香',isMarksmen:'射手',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/111/111.jpg'},
              {isAll:'全部',nickname:'嬴政',isMages:'法师',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/110/110.jpg'},
              {isAll:'全部',nickname:'妲己',isrecommend:'新手推荐',isMages:'法师',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/109/109.jpg'},
              {isAll:'全部',nickname:'墨子',istank:'坦克',isMages:'法师',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/108/108.jpg'},
              {isAll:'全部',nickname:'赵云',isSoldier:'战士',isAssassin:'刺客',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/107/107.jpg'},
              {isAll:'全部',nickname:'小乔',isMages:'法师',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/106/106.jpg'},
              {isAll:'全部',nickname:'廉颇',istank:'坦克',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/105/105.jpg'}
          ],
          //局内道具
          localProps:[
              {prop:'砂之破军',borderBreakoutAll:'全部',borderBreakoutEquipment:'装备',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/2000.jpg'},
              {prop:'贤者之书',borderBreakoutAll:'全部',borderBreakoutEquipment:'装备',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/2001.jpg'},
              {prop:'砂之破晓',borderBreakoutAll:'全部',borderBreakoutEquipment:'装备',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/2003.jpg'},
              {prop:'隐匿胄甲',borderBreakoutAll:'全部',borderBreakoutEquipment:'装备',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/2006.jpg'},
              {prop:'砂之守卫',borderBreakoutAll:'全部',borderBreakoutEquipment:'装备',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/2007.jpg'},
              {prop:'恢复药剂',borderBreakoutAll:'全部',borderBreakoutEquipment:'装备',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/2008.jpg'},
              {prop:'小药瓶',borderBreakoutAll:'全部',borderBreakoutEquipment:'装备',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/2009.jpg'},
              {prop:'大药箱',borderBreakoutAll:'全部',borderBreakoutEquipment:'装备',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/2010.jpg'},
              {prop:'砂之重装',borderBreakoutAll:'全部',borderBreakoutEquipment:'装备',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/2011.jpg'},
              {prop:'奥术法杖',borderBreakoutAll:'全部',borderBreakoutEquipment:'装备',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/2012.jpg'},
              {prop:'碎骨之锤',borderBreakoutAll:'全部',borderBreakoutEquipment:'装备',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/2014.jpg'},
              {prop:'砂之监视',borderBreakoutAll:'全部',borderBreakoutProp:'道具',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/2016.jpg'},
              {prop:'狩猎陷阱',borderBreakoutAll:'全部',borderBreakoutProp:'道具',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/2017.jpg'},
              {prop:'视野药剂',borderBreakoutAll:'全部',borderBreakoutProp:'道具',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/2018.jpg'},
              {prop:'安琪拉：混沌火种',borderBreakoutAll:'全部',borderBreakoutSkill:'额外技能',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/2020.jpg'},
              {prop:'鬼谷子：万物有灵',borderBreakoutAll:'全部',borderBreakoutSkill:'额外技能',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/2021.jpg'},
              {prop:'孙膑：时光流逝',borderBreakoutAll:'全部',borderBreakoutSkill:'额外技能',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/2022.jpg'},
              {prop:'钟馗：湮灭之锁',borderBreakoutAll:'全部',borderBreakoutSkill:'额外技能',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/2023.jpg'},
              {prop:'弈星：天元',borderBreakoutAll:'全部',borderBreakoutSkill:'额外技能',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/2024.jpg'},
              {prop:'夏侯惇：龙卷闪',borderBreakoutAll:'全部',borderBreakoutSkill:'额外技能',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/2025.jpg'},
              {prop:'芈月：暗影之月',borderBreakoutAll:'全部',borderBreakoutSkill:'额外技能',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/2026.jpg'},
              {prop:'庄周：天人合一',borderBreakoutAll:'全部',borderBreakoutSkill:'额外技能',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/2027.jpg'},
              {prop:'阿轲：幻舞',borderBreakoutAll:'全部',borderBreakoutSkill:'额外技能',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/2028.jpg'},
              {prop:'程咬金：正义潜能',borderBreakoutAll:'全部',borderBreakoutSkill:'额外技能',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/2029.jpg'},
              {prop:'张良：言灵·命数',borderBreakoutAll:'全部',borderBreakoutSkill:'额外技能',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/2031.jpg'},
              {prop:'守约：狂风之息',borderBreakoutAll:'全部',borderBreakoutSkill:'额外技能',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/2032.jpg'},
              {prop:'墨子：机关重炮',borderBreakoutAll:'全部',borderBreakoutSkill:'额外技能',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/2033.jpg'},
              {prop:'妲己：女王崇拜',borderBreakoutAll:'全部',borderBreakoutSkill:'额外技能',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/2034.jpg'},
              {prop:'芈月：痛苦冲击',borderBreakoutAll:'全部',borderBreakoutSkill:'额外技能',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/2035.jpg'},
              {prop:'女娲：指令迁跃',borderBreakoutAll:'全部',borderBreakoutSkill:'额外技能',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/2036.jpg'},
              {prop:'铁剑',conventionalAll:'全部',conventionalAttack:'攻击',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1111.jpg'},
              {prop:'匕首',conventionalAll:'全部',conventionalAttack:'攻击',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1112.jpg'},
              {prop:'搏击拳套',conventionalAll:'全部',conventionalAttack:'攻击',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1113.jpg'},
              {prop:'吸血之镰',conventionalAll:'全部',conventionalAttack:'攻击',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1114.jpg'},
              {prop:'雷鸣刃',conventionalAll:'全部',conventionalAttack:'攻击',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1116.jpg'},
              {prop:'冲能拳套',conventionalAll:'全部',conventionalAttack:'攻击',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1117.jpg'},
              {prop:'风暴巨剑',conventionalAll:'全部',conventionalAttack:'攻击',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1121.jpg'},
              {prop:'日冕',conventionalAll:'全部',conventionalAttack:'攻击',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1122.jpg'},
              {prop:'狂暴双刃',conventionalAll:'全部',conventionalAttack:'攻击',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1123.jpg'},
              {prop:'陨星',conventionalAll:'全部',conventionalAttack:'攻击',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1124.jpg'},
              {prop:'碎星锤',conventionalAll:'全部',conventionalAttack:'攻击',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1131.jpg'},
              {prop:'末世',conventionalAll:'全部',conventionalAttack:'攻击',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1126.jpg'},
              {prop:'名刀·司命',conventionalAll:'全部',conventionalAttack:'攻击',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1127.jpg'},
              {prop:'冰霜长矛',conventionalAll:'全部',conventionalAttack:'攻击',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1128.jpg'},
              {prop:'速击之枪',conventionalAll:'全部',conventionalAttack:'攻击',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1129.jpg'},
              {prop:'制裁之刃',conventionalAll:'全部',conventionalAttack:'攻击',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/11210.jpg'},
              {prop:'泣血之刃',conventionalAll:'全部',conventionalAttack:'攻击',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1132.jpg'},
              {prop:'无尽战刃',conventionalAll:'全部',conventionalAttack:'攻击',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1133.jpg'},
              {prop:'宗师之力',conventionalAll:'全部',conventionalAttack:'攻击',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1134.jpg'},
              {prop:'闪电匕首',conventionalAll:'全部',conventionalAttack:'攻击',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1135.jpg'},
              {prop:'影刃',conventionalAll:'全部',conventionalAttack:'攻击',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1136.jpg'},
              {prop:'暗影战斧',conventionalAll:'全部',conventionalAttack:'攻击',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1137.jpg'},
              {prop:'破军',conventionalAll:'全部',conventionalAttack:'攻击',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1138.jpg'},
              {prop:'纯净苍穹',conventionalAll:'全部',conventionalAttack:'攻击',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/11311.jpg'},
              {prop:'逐日之弓',conventionalAll:'全部',conventionalAttack:'攻击',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/91040.jpg'},
              {prop:'破魔刀',conventionalAll:'全部',conventionalAttack:'攻击',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1125.jpg'},
              {prop:'穿云弓',conventionalAll:'全部',conventionalAttack:'攻击',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1154.jpg'},
              {prop:'破晓',conventionalAll:'全部',conventionalAttack:'攻击',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1155.jpg'},
              {prop:'咒术典籍',conventionalAll:'全部',conventionalFormulas:'法术',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1211.jpg'},
              {prop:'蓝宝石',conventionalAll:'全部',conventionalFormulas:'法术',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1212.jpg'},
              {prop:'炼金护符',conventionalAll:'全部',conventionalFormulas:'法术',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1213.jpg'},
              {prop:'圣者法典',conventionalAll:'全部',conventionalFormulas:'法术',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1214.jpg'},
              {prop:'元素杖',conventionalAll:'全部',conventionalFormulas:'法术',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1216.jpg'},
              {prop:'大棒',conventionalAll:'全部',conventionalFormulas:'法术',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1221.jpg'},
              {prop:'破碎圣杯',conventionalAll:'全部',conventionalFormulas:'法术',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1229.jpg'},
              {prop:'光辉之剑',conventionalAll:'全部',conventionalFormulas:'法术',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1223.jpg'},
              {prop:'魅影面罩',conventionalAll:'全部',conventionalFormulas:'法术',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1224.jpg'},
              {prop:'进化水晶',conventionalAll:'全部',conventionalFormulas:'法术',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1225.jpg'},
              {prop:'血族之书',conventionalAll:'全部',conventionalFormulas:'法术',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1222.jpg'},
              {prop:'炽热支配者',conventionalAll:'全部',conventionalFormulas:'法术',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1227.jpg'},
              {prop:'梦魇之牙',conventionalAll:'全部',conventionalFormulas:'法术',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/12211.jpg'},
              {prop:'虚无法杖',conventionalAll:'全部',conventionalFormulas:'法术',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1231.jpg'},
              {prop:'博学者之怒',conventionalAll:'全部',conventionalFormulas:'法术',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1232.jpg'},
              {prop:'辉月',conventionalAll:'全部',conventionalFormulas:'法术',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1239.jpg'},
              {prop:'回响之杖',conventionalAll:'全部',conventionalFormulas:'法术',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1233.jpg'},
              {prop:'冰霜法杖',conventionalAll:'全部',conventionalFormulas:'法术',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1234.jpg'},
              {prop:'痛苦面具',conventionalAll:'全部',conventionalFormulas:'法术',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1235.jpg'},
              {prop:'巫术法杖',conventionalAll:'全部',conventionalFormulas:'法术',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1236.jpg'},
              {prop:'圣杯',conventionalAll:'全部',conventionalFormulas:'法术',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1226.jpg'},
              {prop:'时之预言',conventionalAll:'全部',conventionalFormulas:'法术',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1237.jpg'},
              {prop:'贤者之书',conventionalAll:'全部',conventionalFormulas:'法术',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1238.jpg'},
              {prop:'噬神之书',conventionalAll:'全部',conventionalFormulas:'法术',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1240.jpg'},
              {prop:'红玛瑙',conventionalAll:'全部',conventionalDefense:'防御',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1311.jpg'},
              {prop:'布甲',conventionalAll:'全部',conventionalDefense:'防御',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1312.jpg'},
              {prop:'抗魔披风',conventionalAll:'全部',conventionalDefense:'防御',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1313.jpg'},
              {prop:'提神水晶',conventionalAll:'全部',conventionalDefense:'防御',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1314.jpg'},
              {prop:'力量腰带',conventionalAll:'全部',conventionalDefense:'防御',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1321.jpg'},
              {prop:'熔炼之心',conventionalAll:'全部',conventionalDefense:'防御',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1322.jpg'},
              {prop:'神隐斗篷',conventionalAll:'全部',conventionalDefense:'防御',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1323.jpg'},
              {prop:'雪山圆盾',conventionalAll:'全部',conventionalDefense:'防御',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1324.jpg'},
              {prop:'守护者之铠',conventionalAll:'全部',conventionalDefense:'防御',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1325.jpg'},
              {prop:'近卫荣耀',conventionalAll:'全部',conventionalAssist:'辅助',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1724.jpg'},
              {prop:'奔狼纹章',conventionalAll:'全部',conventionalAssist:'辅助',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1723.jpg'},
              {prop:'反伤刺甲',conventionalAll:'全部',conventionalDefense:'防御',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1327.jpg'},
              {prop:'血魔之怒',conventionalAll:'全部',conventionalDefense:'防御',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1328.jpg'},
              {prop:'红莲斗篷',conventionalAll:'全部',conventionalDefense:'防御',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1331.jpg'},
              {prop:'霸者重装',conventionalAll:'全部',conventionalDefense:'防御',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1332.jpg'},
              {prop:'不祥征兆',conventionalAll:'全部',conventionalDefense:'防御',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1333.jpg'},
              {prop:'不死鸟之眼',conventionalAll:'全部',conventionalDefense:'防御',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1334.jpg'},
              {prop:'魔女斗篷',conventionalAll:'全部',conventionalDefense:'防御',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1335.jpg'},
              {prop:'极寒风暴',conventionalAll:'全部',conventionalDefense:'防御',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1336.jpg'},
              {prop:'冰痕之握',conventionalAll:'全部',conventionalDefense:'防御',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/13310.jpg'},
              {prop:'贤者的庇护',conventionalAll:'全部',conventionalDefense:'防御',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1337.jpg'},
              {prop:'暴烈之甲',conventionalAll:'全部',conventionalDefense:'防御',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1338.jpg'},
              {prop:'神速之靴',conventionalAll:'全部',conventionalMove:'移动',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1411.jpg'},
              {prop:'影忍之足',conventionalAll:'全部',conventionalMove:'移动',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1421.jpg'},
              {prop:'抵抗之靴',conventionalAll:'全部',conventionalMove:'移动',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1422.jpg'},
              {prop:'冷静之靴',conventionalAll:'全部',conventionalMove:'移动',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1423.jpg'},
              {prop:'秘法之靴',conventionalAll:'全部',conventionalMove:'移动',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1424.jpg'},
              {prop:'急速战靴',conventionalAll:'全部',conventionalMove:'移动',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1425.jpg'},
              {prop:'疾步之靴',conventionalAll:'全部',conventionalMove:'移动',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1426.jpg'},
              {prop:'狩猎宽刃',conventionalAll:'全部',conventionalJungling:'打野',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1511.jpg'},
              {prop:'游击弯刀',conventionalAll:'全部',conventionalJungling:'打野',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1521.jpg'},
              {prop:'巡守利斧',conventionalAll:'全部',conventionalJungling:'打野',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1522.jpg'},
              {prop:'追击刀锋',conventionalAll:'全部',conventionalJungling:'打野',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1523.jpg'},
              {prop:'符文大剑',conventionalAll:'全部',conventionalJungling:'打野',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1531.jpg'},
              {prop:'巨人之握',conventionalAll:'全部',conventionalJungling:'打野',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1532.jpg'},
              {prop:'贪婪之噬',conventionalAll:'全部',conventionalJungling:'打野',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1533.jpg'},
              {prop:'鼓舞之盾',conventionalAll:'全部',conventionalAssist:'辅助',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1714.jpg'},
              {prop:'风灵纹章',conventionalAll:'全部',conventionalAssist:'辅助',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1713.jpg'},
              {prop:'救赎之翼',conventionalAll:'全部',conventionalAssist:'辅助',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1722.jpg'},
              {prop:'风之轻语',conventionalAll:'全部',conventionalAssist:'辅助',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1712.jpg'},
              {prop:'极影',conventionalAll:'全部',conventionalAssist:'辅助',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1721.jpg'},
              {prop:'凤鸣指环',conventionalAll:'全部',conventionalAssist:'辅助',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1711.jpg'},
              {prop:'学识宝石',conventionalAll:'全部',conventionalAssist:'辅助',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/itemimg/1701.jpg'}
          ],
          //召唤师
          summonerList:[
              {summonerName:'惩击',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/summoner/80104.jpg'},
              {summonerName:'终结',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/summoner/80108.jpg'},
              {summonerName:'狂暴',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/summoner/80110.jpg'},
              {summonerName:'疾跑',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/summoner/80109.jpg'},
              {summonerName:'治疗术',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/summoner/80102.jpg'},
              {summonerName:'干扰',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/summoner/80105.jpg'},
              {summonerName:'晕眩',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/summoner/80103.jpg'},
              {summonerName:'净化',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/summoner/80107.jpg'},
              {summonerName:'弱化',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/summoner/80121.jpg'},
              {summonerName:'闪现',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/summoner/80115.jpg'}
          ],
        //召唤师的技能
          skillList:[
              {skillUrl:'//game.gtimg.cn/images/yxzj/img201606/summoner/80104-big.jpg',skillName:'惩击',unlocking:'LV.1解锁',skillDetail:'30秒CD：对身边的野怪和小兵造成真实伤害并眩晕1秒'},
              {skillUrl:'//game.gtimg.cn/images/yxzj/img201606/summoner/80108-big.jpg',skillName:'终结',unlocking:'LV.3解锁',skillDetail:'90秒CD：立即对身边敌军英雄造成其已损失生命值14%的真实伤害'},
              {skillUrl:'//game.gtimg.cn/images/yxzj/img201606/summoner/80110-big.jpg',skillName:'狂暴',unlocking:'LV.5解锁',skillDetail:'60秒CD：增加攻击速度60%，并增加物理攻击力10%持续5秒'},
              {skillUrl:'//game.gtimg.cn/images/yxzj/img201606/summoner/80109-big.jpg',skillName:'疾跑',unlocking:'LV.7解锁',skillDetail:'100秒CD：增加30%移动速度持续10秒'},
              {skillUrl:'//game.gtimg.cn/images/yxzj/img201606/summoner/80102-big.jpg',skillName:'治疗术',unlocking:'LV.9解锁',skillDetail:'120秒CD：回复自己与附近队友15%生命值，提高附近友军移动速度15%持续2秒'},
              {skillUrl:'//game.gtimg.cn/images/yxzj/img201606/summoner/80105-big.jpg',skillName:'干扰',unlocking:'LV.11解锁',skillDetail:'60秒CD：沉默机关持续5秒'},
              {skillUrl:'//game.gtimg.cn/images/yxzj/img201606/summoner/80103-big.jpg',skillName:'晕眩',unlocking:'LV.13解锁',skillDetail:'90秒CD：晕眩身边所有敌人0.75秒，并附带持续1秒的减速效果'},
              {skillUrl:'//game.gtimg.cn/images/yxzj/img201606/summoner/80107-big.jpg',skillName:'净化',unlocking:'LV.15解锁',skillDetail:'120秒CD：解除自身所有负面和控制效果并免疫控制持续1.5秒'},
              {skillUrl:'//game.gtimg.cn/images/yxzj/img201606/summoner/80121-big.jpg',skillName:'弱化',unlocking:'LV.17解锁',skillDetail:'90秒CD：减少身边敌人伤害输出50%持续3秒。'},
              {skillUrl:'//game.gtimg.cn/images/yxzj/img201606/summoner/80115-big.jpg',skillName:'闪现',unlocking:'LV.19解锁',skillDetail:'120秒CD：向指定方向位移一段距离'}
          ]
     }
  },
  created() {
  },
  watch: {
    //监听搜索框的文本值
    //搜索英雄文本值
    searContent: function (newContent, oldContent) {
       if(this.searContent===''){
             this.isShow=true;
        }
    },
    //搜索道具文本值
    searContent2: function (newContent, oldContent) {
       if(this.searContent2===''){
             this.isShow2=true;
        }
    }
  },
  mounted() {
    this.focusAndBlur();
  },
  beforeUpdate(){
      this.follow();
      if(this.patterns!='常规模式' || this.conventionalPatterns!='全部' || this.borderBreakoutMode!='全部'){
          this.isShow2=true; 
          this.searContent2='请输入你想要搜索的道具名';
      }
  },
  methods:{
    //   提交英雄
      submit(){
          let searText=this.searContent;
          this.res = this.heroes.filter(function(item,index,array){
              //元素值，元素的索引，原数组。
              if(item.nickname===searText){
                return (item);
              }
          });
          this.isShow=false;
      },
    //   提交道具
      submit2(){
          let searText2=this.searContent2;
          this.res2 = this.localProps.filter(function(item,index,array){
              //元素值，元素的索引，原数组。
              if(item.prop===searText2){
                  return (item);
              }
          });
          this.isShow2=false;
          this.patterns='常规模式';
          this.conventionalPatterns='全部';
          this.borderBreakoutMode='全部';
      },
      follow() {
          //面板随鼠标移动事件逻辑:
          //先获取鼠标的坐标值
          //赋值给该元素
          $('.tabitems2 .heroList li').mousemove(function(e){
              var x=e.pageX-$(this).offset().left+50;
              var y=e.pageY-$(this).offset().top-55;
              let screenWidth=$(document.body).width()
              if(e.pageX+310>screenWidth){
                  $('.tabitems2 .heroList li .propPanel').css({
                      "left":(x-360)+"px",
                      "top":y+"px"
                  });
              }else{
                  $('.tabitems2 .heroList li .propPanel').css({
                      "left":x+"px",
                      "top":y+"px"
                  });
              }
          });
      },
      focusAndBlur(){
          //2.给这个文本框设置一个获得焦点事件
          $('.searchbar .form-control').focus (function () {
              //如果文本框里面的内容是默认内容的话,获得焦点才应该变为空.
              if(this.value == this.defaultValue){   
                  this.value = "";
              }
          });

          //3.给这个文本框设置一个失去焦点事件
          $('.searchbar .form-control').blur (function () {
              //如果文本框里面的内容为空,失去焦点才应该变为默认内容
              if(this.value == "" || (this.patterns!='常规模式' || this.conventionalPatterns!='全部' || this.borderBreakoutMode!='全部')){
                  this.value = this.defaultValue;
              }
          });
      }
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
            /*英雄介绍*/
            .heroIntroduction{
                width:100%;
                height:auto;
                color:#000;
                .title{
                    width:100%;
                    height:60px;
                    font-size:20px;
                    vertical-align:middle;
                }
                .tabtitle{
                    width:100%;
                    height:65px;
                    li{
                        float:left;
                        width:33.33333%;
                        height:35px;
                        text-align:center;
                        border-bottom:3px solid #d4d4d4;
                        line-height:30px;
                        a{
                            width:100%;
                            height:100%;
                            color:#000;
                            font-size:15px;
                        }
                        &.active{
                            border-bottom:3px solid #2c88e2;
                            a{
                                color:#2c88e2;
                            }
                        }
                    }
                }
                /*英雄*/
                .tabitems1{
                    width:100%;
                    height:auto;
                    background-color:#fafafa;
                    .integratedPositioning{
                        font-size:14px;
                        width:100%;
                        height:110px;
                        display:flex;
                        padding:0 30px;
                        .nav-left{
                            width:7%;
                            height:100%;
                            background-color:#2c88e2;
                            padding:19px;
                            text-align:center;
                            color:#fff;
                            line-height:40px;
                            border-top-left-radius:7px;
                            border-bottom-left-radius:7px;
                        }
                        .nav-right{
                            width:93%;
                            height:100%;
                            background-color:#efefef;
                            border-top-right-radius:7px;
                            border-bottom-right-radius:7px;
                            line-height:45px;
                            padding:10px;
                            position:relative;
                            .searchbar{
                                position:absolute;
                                background-color:#fff;
                                border:1px solid #ccc;
                                top:55px;
                                right:20px;
                                width:300px;
                                height:42px;
                                display:flex;
                                .form-control{
                                    display:inline-block;
                                    height:40px;
                                    width:261px;
                                    margin-bottom:10px;
                                    border:none;
                                    outline:none;
                                    padding-left:10px;
                                }
                                span{
                                    display:inline-block;
                                    width:40px;
                                    height:30px;
                                    text-align:center;
                                    line-height:30px;
                                    color:#999;
                                    margin-top:5px;
                                    margin-left:10px;
                                    border-left:1px solid #ccc;
                                }
                            }
                        }
                    }
                    .heroList{
                        width:100%;
                        height:auto;
                        padding-top:50px;
                        padding-left:30px;
                        border:1px solid #e8e8e8;
                        border-top:none;
                        li{
                            width:100px;
                            height:110px;
                            float:left;
                            margin-right:11.999999px;
                            margin-bottom:50px;
                            a{
                                color:#000;
                                img{
                                    width:85%;
                                    height:80%;
                                    margin-left:7px;
                                    border:3px solid #258df2;
                                    border-top-left-radius:10px;
                                    border-bottom-right-radius:10px;
                                }
                                p{
                                    text-align:center;
                                }
                            }
                        }
                    }
                }
                /*局内道具*/
                .tabitems2{
                    width:100%;
                    height:auto;
                    background-color:#fafafa;
                    .integratedPositioning{
                        font-size:14px;
                        width:100%;
                        height:110px;
                        display:flex;
                        padding:0 30px;
                        .nav-right{
                            width:100%;
                            height:100%;
                            border-top-right-radius:7px;
                            border-bottom-right-radius:7px;
                            line-height:45px;
                            padding:10px 10px 10px 30px;
                            position:relative;
                            .searchbar{
                                position:absolute;
                                background-color:#fff;
                                border:1px solid #ccc;
                                top:12px;
                                right:20px;
                                width:300px;
                                height:42px;
                                display:flex;
                                .form-control{
                                    display:inline-block;
                                    height:40px;
                                    width:261px;
                                    margin-bottom:10px;
                                    border:none;
                                    outline:none;
                                    padding-left:10px;
                                }
                                span{
                                    display:inline-block;
                                    width:40px;
                                    height:30px;
                                    text-align:center;
                                    line-height:30px;
                                    color:#999;
                                    margin-top:5px;
                                    margin-left:10px;
                                    border-left:1px solid #ccc;
                                }
                            }
                        }
                    }
                    .heroList{
                        width:100%;
                        height:auto;
                        padding-top:50px;
                        padding-left:30px;
                        border:1px solid #e8e8e8;
                        border-top:none;
                        li{
                            width:100px;
                            height:110px;
                            float:left;
                            margin-right:11.999999px;
                            margin-bottom:50px;
                            position:relative;
                            a{
                                color:#000;
                                img{
                                    width:85%;
                                    height:80%;
                                    margin-left:7px;
                                    border:3px solid #258df2;
                                    border-top-left-radius:10px;
                                    border-bottom-right-radius:10px;
                                }
                                p{
                                    text-align:center;
                                }
                            }
                            .propPanel{
                                width:260px;
                                height:auto;
                                background-color:#2e2e2f;
                                position:absolute;
                                top:55px;
                                left:50px;
                                z-index:99;
                                border:1px solid #1e94f9;
                                padding:20px 30px 40px;
                                font-size:14px;
                                opacity:.9;
                                .introduces{
                                    display:flex;
                                    height:90px;
                                    img{
                                        border-radius:5px;
                                    }
                                    .propPrice{
                                        color:#c89431;
                                        padding-left:20px;
                                        padding-top:9px;
                                        line-height:30px;
                                        h2{
                                            color:#2cf030;
                                            font-size:17px;
                                        }
                                    }

                                }
                                p{
                                    padding-top:15px;
                                    color:#1e94f9;
                                }
                            }
                        }
                    }
                }
                /*召唤师技能*/
                .tabitems3{
                    width:100%;
                    height:auto;
                    background-color:#fafafa;
                    .heroList{
                        width:100%;
                        height:auto;
                        margin-top:0px;
                        padding:0 30px 40px;
                        border:1px solid #e8e8e8;
                        border-top:none;
                        display:flex;
                        .summoner{
                            width:43%;
                            height:450px;
                            border-right:1px solid #f0f0f0;
                            li{
                               width:100px;
                               height:110px;
                               float:left;
                               margin-right:11.999999px;
                               margin-bottom:40px;
                               position:relative;
                               a{
                                   color:#000;
                                   img{
                                       width:85%;
                                       height:80%;
                                       margin-left:7px;
                                       border:3px solid #258df2;
                                       border-top-left-radius:10px;
                                       border-bottom-right-radius:10px;
                                   }
                                   p{
                                       text-align:center;
                                   }
                                }
                                &.active{
                                    img{
                                        border:3px solid #00a383;
                                    }
                                    p{
                                        color:#00a383;
                                    }
                                }
                             }
                           
                        }
                        .skill{
                            width:58%;
                            height:470px;
                            padding-left:55px;
                            color:#000;
                            font-size:14px;
                            h2{
                                font-size:15px;
                                color:#00a383;
                                padding-bottom:10px;
                            }
                            .unblocking{
                                color:#b7c8dd;
                            }
                        }
                    }
                }
            }
        }
    }
   
</style>
