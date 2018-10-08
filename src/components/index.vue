<template>
  <div class="shopMall">
     <top-nav></top-nav>
      <!--背景图-->
      <div class="backgroundImg">
            <!--进入专题-->
            <router-link to="/topic" class="enterTopic"></router-link>
            <!-- 出口 -->
            <router-view></router-view>
            <!--猫神再续传奇-->
            <div class="bast">
                  <div class='languagePlanning'>
                      <div class="carousel-wrap" id="carousel">
                       <!--轮播图列表-->
                       <transition-group tag="ul" class='slide-ul' name="list">
                         <li v-for="(list,index) in slideList" :key="index" v-show="index===currentIndex" @mouseenter.stop="stop" @mouseleave="go">
                           <a :href="list.clickUrl" >
                             <img :src="list.image">
                           </a>
                         </li>
                       </transition-group>
                       
                      
                    </div>
                      <ul class='tabBar'>
                          <li v-for="(item,index) in weeklyNewspaper" :class="{'active':index===currentIndex}" @mouseover="change(index)">{{item}}</li>
                      
                      </ul>
                  </div>
                  <div class='theTopOfPeople'>
                      <div class='tabNav'>
                           <ul class='tabNav-left'>
                               <li @mouseenter="currentType=item.type" v-for="(item, index) in tabNav" :key="index" :class="{activeNess:currentType===item.type}">{{item.tabTitle}}</li>                              
                          </ul>
                          <span>...</span>
                      </div>

                      <div class='tablist'>
                          <div class='dunhuangAcademy' v-show="currentType==='all'">【返场攻略】限定皮肤返场阵容</div>
                          <div class='dunhuangAcademy' v-show="currentType==='news'">百万礼包免费送！限定皮肤返场</div>
                          <div class='dunhuangAcademy' v-show="currentType==='announcement'">【返场攻略】限定皮肤返场阵容</div>
                          <div class='dunhuangAcademy' v-show="currentType==='activity'">假日狂欢 玩转王者峡谷</div>
                          <div class='dunhuangAcademy' v-show="currentType==='race'">王者荣耀社团，带你畅玩高校赛</div>
                          <ul class="newsList">
                              <li v-show="currentType==='all'" v-for="(item, index) in allList" :key="item.id"><a href="">{{item.content1}}</a><span>{{item.releaseTime1}}</span></li>
                              <li v-show="currentType==='news'" v-for="(item, index) in newsList" :key="item.id"><a href="">{{item.content2}}</a><span>{{item.releaseTime2}}</span></li>
                              <li v-show="currentType==='announcement'" v-for="(item, index) in announcementList" :key="item.id"><a href="">{{item.content3}}</a><span>{{item.releaseTime3}}</span></li>
                              <li v-show="currentType==='activity'" v-for="(item, index) in activityList" :key="item.id"><a href="">{{item.content4}}</a><span>{{item.releaseTime4}}</span></li>
                              <li v-show="currentType==='race'" v-for="(item, index) in raceList" :key="item.id"><a href="">{{item.content5}}</a><span>{{item.releaseTime5}}</span></li>
                            
                          </ul>
                      </div>
                  </div>
                  <div class='downloadGame'>
                      <div class='xiazaiyouxi'></div>
                      <div class='newZone'></div>
                      <div class='experienceZone'></div>
                  </div>
            </div>
            <!--官方爆料站-->
            <div class="whistle-blowing">
                <div class='official'></div>
                <div class='glory '></div>
                <div class='culture'></div>
                <div class='competition'></div>
            </div>
      </div>
      <!--内容中心-->
      <div class='contentCenter'>
          <!--精彩视频-->
          <div class='wonderfulVideo'>
              <div class='title'>
                  <div class='content-title'><img src="../assets/img/content.png"/>内容中心</div>
                  <div class='content-more'><img src="../assets/img/more.png"/>更多</div>
              </div>
              <ul class='tabTitle'>
                  <li @mouseenter="selectType=item.type" v-for="(item, index) in tabtitle" :key="index" :class="{activeNess:selectType===item.type}">{{item.tabName}}</li>
              </ul>
              <template v-if="selectType==='fineColumns'">
                    <div class="outview">
                        <div class='optionButton'>
                            <button v-show="selectType==='fineColumns'" v-for="(item, index) in buttonList1" :key="item.id">{{item.buttonName}}</button>
                           
                        </div>
                        <div class='vedio1'>  
                            <div class='yangyuhuan' v-for="(item, index) in videoPreview1" :key="index">
                                <div class='videoBrowse'>
                                    <img :src="item.imgUrl"/>
                                    <div class="footBar">
                                        <div class='foot-left'>
                                            <img src="../assets/img/video.png"/>{{item.viewsNumber}}
                                        </div>
                                        <div class='time'>{{item.time}}</div>
                                    </div>
                                </div>
                                <div class='filmReview '>{{item.comments}}</div>
                            </div>
                        </div>
                    
                    </div>
              </template>
              <template v-else-if="selectType==='eventBoutique'">
                    <div class="outview">
                        <div class='optionButton'>
                            <button v-show="selectType==='eventBoutique'" v-for="(item, index) in buttonList2" :key="item.id">{{item.buttonName}}</button>
                        </div>
                        <div class='vedio1'>  
                            <div class='yangyuhuan' v-for="(item, index) in videoPreview2" :key="index">
                                <div class='videoBrowse'>
                                    <img :src="item.imgUrl"/>
                                    <div class="footBar">
                                        <div class='foot-left'>
                                            <img src="../assets/img/video.png"/>{{item.viewsNumber}}
                                        </div>
                                        <div class='time'>{{item.time}}</div>
                                    </div>
                                </div>
                                <div class='filmReview '>{{item.comments}}</div>
                            </div>
                        </div>
                    
                    </div>
              </template>
              <template v-else="selectType==='heroStrategy'">
                    <div class="outview">
                         <div class='chooseHero' @mouseenter="heroChoose=true" @mouseleave="heroChoose=false">
                           <p>选择英雄</p><span class="el-icon-caret-bottom"></span>
                        </div>
                        <!--英雄选项-->
                        <div class="heroOption" v-show="heroChoose" @mouseenter="heroChoose=true" @mouseleave="heroChoose=false">
                            <ul class="option-left">
                                <li v-for="(item, index) in heroLeftOption" :key="item.id" @mouseenter="nowType=item.heroType">
                                    <a href="JavaScript:void;">{{item.heroType}}</a>
                                </li>
                            </ul>
                            <ul class="option-right">
                                <li v-show="nowType==='热门'" v-for="(item, index) in heroRightOption1" :key="item.id">
                                    <a>
                                        <img :src="item.imgUrl"/><p>{{item.heroName}}</p>
                                    </a>
                                </li>
                                <li v-show="nowType==='坦克'" v-for="(item, index) in heroRightOption2" :key="item.id">
                                    <a>
                                        <img :src="item.imgUrl"/><p>{{item.heroName}}</p>
                                    </a>
                                </li>
                                <li v-show="nowType==='战士'" v-for="(item, index) in heroRightOption3" :key="item.id">
                                    <a>
                                        <img :src="item.imgUrl"/><p>{{item.heroName}}</p>
                                    </a>
                                </li>
                                <li v-show="nowType==='刺客'" v-for="(item, index) in heroRightOption4" :key="item.id">
                                    <a>
                                        <img :src="item.imgUrl"/><p>{{item.heroName}}</p>
                                    </a>
                                </li>
                                <li v-show="nowType==='法师'" v-for="(item, index) in heroRightOption5" :key="item.id">
                                    <a>
                                        <img :src="item.imgUrl"/><p>{{item.heroName}}</p>
                                    </a>
                                </li>
                                <li v-show="nowType==='射手'" v-for="(item, index) in heroRightOption6" :key="item.id">
                                    <a>
                                        <img :src="item.imgUrl"/><p>{{item.heroName}}</p>
                                    </a>
                                </li>
                                <li v-show="nowType==='辅助'" v-for="(item, index) in heroRightOption7" :key="item.id">
                                    <a>
                                        <img :src="item.imgUrl"/><p>{{item.heroName}}</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class='vedio1'>  
                            <div class='yangyuhuan' v-for="(item, index) in videoPreview3" :key="index">
                                <div class='videoBrowse'>
                                    <img :src="item.imgUrl"/>
                                    <div class="footBar">
                                        <div class='foot-left'>
                                            <img src="../assets/img/video.png"/>{{item.viewsNumber}}
                                        </div>
                                        <div class='time'>{{item.time}}</div>
                                    </div>
                                </div>
                                <div class='filmReview '>{{item.comments}}</div>
                            </div>
                        </div>
                    
                    </div>
              </template>
          </div>
          <!--英雄皮肤-->
          <div class='heroSkin'>
              <div class="hero-title">
                  <div class='content-title'><img src="../assets/img/skin.png"/>英雄/皮肤</div>
                  <div class='content-more'><img src="../assets/img/more.png"/>更多</div>
              </div>
              <ul class="tab-title">
                  <li v-for="(item, index) in heroSkins" :key="item.id" @mouseenter="heroSkinType=item.skintype" :class="{active:heroSkinType===item.skintype}">
                        <a>{{item.skintype}}</a>
                        <span v-show="item.skintype!='周免英雄'" class="segmentation"></span>
                  </li>
              </ul>
              <div v-show="heroSkinType==='最新英雄'" class="tab-item" v-for="(item, index) in tabItem1" :key="item.id">
                  <div class="kyara">
                      <div class="showKyara">
                            <img :src="item.imgUrl"/>
                      </div>
                      <div class="newHero">
                          <p class="bigWord">{{item.heroDescribe}}</p>
                          <p class="">{{item.onlineTime}}</p>
                      </div>
                  </div>
                  <div class="showHero">
                      <img v-for="(itemSon, i) in item.flatImg" :key="itemSon.id" :src="itemSon.flatUrl" class=""/>
                  </div>
              </div>
              <div v-show="heroSkinType==='最新皮肤'" class="tab-item" v-for="(item, index) in tabItem2" :key="item.id">
                  <div class="kyara">
                      <div class="showKyara">
                            <img :src="item.imgUrl"/>
                      </div>
                      <div class="newHero">
                          <p class="bigWord">{{item.heroDescribe}}</p>
                          <p class="">{{item.onlineTime}}</p>
                      </div>
                  </div>
                  <div class="showHero">
                      <img v-for="(itemSon, i) in item.flatImg" :key="itemSon.id" :src="itemSon.flatUrl" class=""/>
                  </div>
              </div>
              <div v-show="heroSkinType==='周免英雄'" class="tab-item">
                  <ul class="weeksFromHero">
                        <li v-for="(item, index) in tabItem3" :key="item.id">
                            <a>
                                <img :src="item.url"/>
                            </a>
                        </li>
                  </ul>
                  <p class="limitedFreeTime"><img src="../assets/img/clock.png"/>限免时间：2018-10-1至2018-10-7</p>
              </div>
          </div>
      </div>
      <!--赛事中心-->
      <div class='matchCenter'>
          <!--KPL职业联赛-->
          <div class='professionalLeague'>
              <div class='title'>
                  <div class='content-title'><img src="../assets/img/race.png"/>赛事中心</div>
                  <div class='content-more'><img src="../assets/img/more.png"/>更多</div>
              </div>
              <ul class="tab-title">
                  <li v-for="(item, index) in professionalTournament" :key="index" @mouseenter="onlyType=item.tournament" :class="{active:onlyType===item.tournament}">
                        <a>{{item.tournament}}</a><span v-show="item.tournament!='WGC精英赛'" class="split"></span>
                  </li>
            
              </ul>
          
             <div class='tab-items' v-for="(item, index) in raceData" :key="index" v-show="onlyType===item.raceType">
                <div class="kingGlory">
                    <div class="left-view">
                        <img :src="item.imgUrl"/>
                    </div>
                    <div class="massOrganization">
                        <div class="kingtitle">
                            <div>{{item.bigTitle}}</div>
                            <p>{{item.description}}</p>
                        </div>
                        <ul class="commtentList">
                            <li v-for="(itemSon, index) in item.wgcList" :key="index">
                                 <button>{{item.buttonText}}</button>
                                 <span class="content">{{itemSon.content}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="pre-view">
                     <div class='vedio1'>  
                      <div class='yangyuhuan' v-for="(item, index) in item.racePreview" :key="index">
                          <div class='videoBrowse'>
                             <img :src="item.imgUrl"/>
                             <div class="footBar">
                                  <div class='foot-left'>
                                      <img src="../assets/img/video.png"/>{{item.viewsNumber}}
                                  </div>
                                  <div class='time'>{{item.time}}</div>
                             </div>
                          </div>
                          <div class='filmReview '>{{item.comments}}</div>
                      </div>
                    </div>
                </div>
             </div>
        


          </div>
          <!--KPL赛程-->
          <div class='agendaForCompetition'>
              <div class='title'>
                  <div class='content-title'><img src="../assets/img/saicheng.png"/>KPL赛程</div>
                  <div class="buyTicket"><img src="../assets/img/moneybag.png"/>购票</div>
                  <div class='content-more'><img src="../assets/img/more.png"/>更多</div>
              </div>
              <div class="schedule-table">
                  <ul class="tableTitle">
                      <li class="time">时间</li>
                      <li class="ytg">战队</li>
                      <li class="team">战队</li>
                  </ul>
                  <ul class="tableBody">
                      <li v-for="(item, index) in tableData" :key="index">
                          <div class="date">{{item.date}}</div>
                          <div class="blackPineapple"><img :src="item.oneImg"/><p>{{item.name}}</p></div>
                          <div class="vs">VS</div>
                          <div class="ts"><img :src="item.twoImg"/><p>{{item.team}}</p></div>
                      </li>
                     
                  </ul>
              </div>
              <div class="schedule-img">
                  <img src="//ossweb-img.qq.com/upload/webplat/info/yxzj/20180904/314671319816639.jpg"/>
              </div>
          </div>
      </div>
      <foot-bar></foot-bar>
  </div>
</template>

<script>
import topNav from './common/topNav.vue'
import footBar from './common/footBar.vue'
export default {
  data (){
      return{
          currentIndex: 0,
          timer: '',
          currentType:'all',
          selectType:'fineColumns',
          nowType:"热门",
          heroChoose:false,
          heroSkinType:'最新英雄',
          onlyType:'KPL职业联赛',
          //内容中心        精品栏目  赛事精品  英雄攻略
          videoPreview1:[
            {
              imgUrl:'//itea-cdn.qq.com/file/tgl/20180929/0390f8dc3269e6d3fbd21d2ed18a948a.1538227565.7349cdec32978ee236813e8761d3d05b.184x124_14767.jpg',
              viewsNumber:'119',
              time:'2018-10-02',
              comments:'铠的一刀直接砍到了五个人，也顺利的拿到五杀！'
            },
            {
              imgUrl:'//itea-cdn.qq.com/file/tgl/20180930/c4ca4238a0b923820dcc509a6f75849b.1538306843.93f22c61b50ccaf22ea45f992d74100f.184x124_75361.jpg',
              viewsNumber:'372',
              time:'2018-10-02',
              comments:'王者荣耀：雅典娜无限连招，一路冲锋，只管戳戳戳！'
            },
            {
              imgUrl:'//itea-cdn.qq.com/file/tgl/20180930/c81e728d9d4c2f636f067f89cc14862c.1538310133.9da8ed136777103f962c43fc379b9fec.184x124_54263.jpg',
              viewsNumber:'152',
              time:'2018-10-02',
              comments:'王者荣耀：铠在塔边被妲己来回放风筝，状态惨不忍睹'
            },
            {
              imgUrl:'//itea-cdn.qq.com/file/tgl/20180928/c4ca4238a0b923820dcc509a6f75849b.1538134133.6737671317e73800618489340f7e7684.184x124_54639.jpg',
              viewsNumber:'9110',
              time:'2018-10-01',
              comments:'王者荣耀：只为一杀，貂蝉丝血闯塔,网友问：值么？'
            },
            {
              imgUrl:'//itea-cdn.qq.com/file/tgl/20180929/251f448445d77959332f735cb294e2f6.1538193736.49ceff85a19831769e080da3c0d3b50d.184x124_37282.jpg',
              viewsNumber:'2万',
              time:'2018-10-01',
              comments:'王者荣耀：新版廉颇前期教学，出门买学识宝石，孙悟空大呼过瘾！'
            },
            {
              imgUrl:'//itea-cdn.qq.com/file/tgl/20180929/c4ca4238a0b923820dcc509a6f75849b.1538218222.143e63bdbc2d2c67a0c70bf0e94fe900.184x124_34546.png',
              viewsNumber:'1464',
              time:'2018-10-02',
              comments:'王者荣耀：使用百里守约，需要多高到命中率？'
            },
            {
              imgUrl:'//itea-cdn.qq.com/file/tgl/20180929/495cd8210b613960ed4c0c4780c8d1e2.1538214627.2594495ec7b2bd06bc84952c973e96ee.184x124_19385.jpg',
              viewsNumber:'6',
              time:'2018-10-02',
              comments:'国服大乔芸汐集: 大乔一骑当千，快来看看吧'
            },
            {
              imgUrl:'//itea-cdn.qq.com/file/tgl/20180929/263142ac6066aedff04a95242357aa64.1538229205.df4c53616df8264a948f4e15eb424685.184x124_15967.jpg',
              viewsNumber:'822',
              time:'2018-10-02',
              comments:'王者荣耀：教你如何拥有三条？你们能不能放过我'
            },
          ],
          videoPreview2:[
            {
              imgUrl:'//shp.qpic.cn/cfwebcap/3146194188/efab27010d891b27671011b9f061b54f/0/?width=230&height=140',
              viewsNumber:'119',
              time:'2018-10-02',
              comments:'铠的一刀直接砍到了五个人，也顺利的拿到五杀！'
            },
            {
              imgUrl:'//shp.qpic.cn/cfwebcap/3146194188/61abdd1ac65e8ef3a1095e5e3807b9f7/0/?width=230&height=140',
              viewsNumber:'372',
              time:'2018-10-02',
              comments:'王者荣耀：雅典娜无限连招，一路冲锋，只管戳戳戳！'
            },
            {
              imgUrl:'//shp.qpic.cn/cfwebcap/3146194188/61abdd1ac65e8ef3a1095e5e3807b9f7/0/?width=230&height=140',
              viewsNumber:'152',
              time:'2018-10-02',
              comments:'王者荣耀：铠在塔边被妲己来回放风筝，状态惨不忍睹'
            },
            {
              imgUrl:'//shp.qpic.cn/cfwebcap/3146194188/61abdd1ac65e8ef3a1095e5e3807b9f7/0/?width=230&height=140',
              viewsNumber:'9110',
              time:'2018-10-01',
              comments:'王者荣耀：只为一杀，貂蝉丝血闯塔,网友问：值么？'
            },
            {
              imgUrl:'//shp.qpic.cn/cfwebcap/3146194188/61abdd1ac65e8ef3a1095e5e3807b9f7/0/?width=230&height=140',
              viewsNumber:'2万',
              time:'2018-10-01',
              comments:'王者荣耀：新版廉颇前期教学，出门买学识宝石，孙悟空大呼过瘾！'
            },
            {
              imgUrl:'//shp.qpic.cn/cfwebcap/3146194188/61abdd1ac65e8ef3a1095e5e3807b9f7/0/?width=230&height=140',
              viewsNumber:'1464',
              time:'2018-10-02',
              comments:'王者荣耀：使用百里守约，需要多高到命中率？'
            },
            {
              imgUrl:'//shp.qpic.cn/cfwebcap/3146194188/61abdd1ac65e8ef3a1095e5e3807b9f7/0/?width=230&height=140',
              viewsNumber:'6',
              time:'2018-10-02',
              comments:'国服大乔芸汐集: 大乔一骑当千，快来看看吧'
            },
            {
              imgUrl:'//shp.qpic.cn/cfwebcap/3146194188/61abdd1ac65e8ef3a1095e5e3807b9f7/0/?width=230&height=140',
              viewsNumber:'822',
              time:'2018-10-02',
              comments:'王者荣耀：教你如何拥有三条？你们能不能放过我'
            },
          ],
          videoPreview3:[
            {
              imgUrl:'//itea-cdn.qq.com/file/tgl/20181002/82dbbdde1783a256124f77e40941619f.1538476586.9fd581222a9670fe5e6b87866b6d40b8.184x124_70975.png',
              viewsNumber:'119',
              time:'2018-10-02',
              comments:'铠的一刀直接砍到了五个人，也顺利的拿到五杀！'
            },
            {
              imgUrl:'//itea-cdn.qq.com/file/tgl/20181002/c4ca4238a0b923820dcc509a6f75849b.1538485028.4fd38e5c5050c74d5e58fdd3775906ab.184x124_75755.jpg',
              viewsNumber:'372',
              time:'2018-10-02',
              comments:'王者荣耀：雅典娜无限连招，一路冲锋，只管戳戳戳！'
            },
            {
              imgUrl:'//itea-cdn.qq.com/file/tgl/20181002/20099cb446b73a1290b53f0f6ade6c1e.1538486082.26a192e93465da6c0d73705785ab93fc.184x124_17541.jpg',
              viewsNumber:'152',
              time:'2018-10-02',
              comments:'王者荣耀：铠在塔边被妲己来回放风筝，状态惨不忍睹'
            },
            {
              imgUrl:'//itea-cdn.qq.com/file/tgl/20180930/c81e728d9d4c2f636f067f89cc14862c.1538310133.9da8ed136777103f962c43fc379b9fec.184x124_54263.jpg',
              viewsNumber:'9110',
              time:'2018-10-01',
              comments:'王者荣耀：只为一杀，貂蝉丝血闯塔,网友问：值么？'
            },
            {
              imgUrl:'//shp.qpic.cn/cfwebcap/3228631485/3559a548eaecd7786f39d4a70152b9c8/0/?width=230&height=140',
              viewsNumber:'2万',
              time:'2018-10-01',
              comments:'王者荣耀：新版廉颇前期教学，出门买学识宝石，孙悟空大呼过瘾！'
            },
            {
              imgUrl:'//shp.qpic.cn/cfwebcap/3228631485/3559a548eaecd7786f39d4a70152b9c8/0/?width=230&height=140',
              viewsNumber:'1464',
              time:'2018-10-02',
              comments:'王者荣耀：使用百里守约，需要多高到命中率？'
            },
            {
              imgUrl:'//shp.qpic.cn/cfwebcap/3228631485/3559a548eaecd7786f39d4a70152b9c8/0/?width=230&height=140',
              viewsNumber:'6',
              time:'2018-10-02',
              comments:'国服大乔芸汐集: 大乔一骑当千，快来看看吧'
            },
            {
              imgUrl:'//shp.qpic.cn/cfwebcap/3228631485/3559a548eaecd7786f39d4a70152b9c8/0/?width=230&height=140',
              viewsNumber:'822',
              time:'2018-10-02',
              comments:'王者荣耀：教你如何拥有三条？你们能不能放过我'
            },
          ],
        
          //KPL赛程表格数据
          tableData: [{
            date: '10-3 15:00',
            oneImg:'//itea-cdn.qq.com/file/ingame/smoba/php8NY8ts7865986311533024156.png',
            name: 'BA黑凤梨',
            twoImg:'//itea-cdn.qq.com/file/ingame/smoba/phpp0HP2a17893033741536571947.png',
            team: 'Ts'
          }, {
            date: '10-3 17:00',
            oneImg:'//itea-cdn.qq.com/file/ingame/smoba/phpevOGIO3334315001533024118.png',
            name: 'YTG',
            twoImg:'//itea-cdn.qq.com/file/ingame/smoba/phpCJvkmU5918523601533024067.png',
            team: 'JC'
          }, {
            date: '10-3 20:00',
            oneImg:'//itea-cdn.qq.com/file/ingame/smoba/phpms5gtR2472247101537262526.png',
            name: 'GK',
            twoImg:'//itea-cdn.qq.com/file/ingame/smoba/phpEZg75311799363931536572128.png',
            team: 'WE'
          }],
          slideList: [
            {
                "clickUrl": "http://pvp.qq.com/coming/v2/skins/0929-jiezouak.shtml?ADTAG=pvp.skin.pcgw&e_code=442322&idataid=232000",
                "image": "//game.gtimg.cn/upload/adw/image/20181001/bd1eff079af6b673336f3d4ecfbebe8e.jpg"
            },
            {
                "clickUrl": "http://pvp.qq.com/web201605/newsDetail.shtml?G_Biz=18&e_code=442481&idataid=232216&tid=270386",
                "image": "//game.gtimg.cn/upload/adw/image/20181003/01874bd3e3fa4f936b194ae69fbbed38.jpg"
            },
            {
                "clickUrl": "http://pvp.qq.com/web201605/newsDetail.shtml?G_Biz=18&e_code=442437&idataid=232133&tid=270150",
                "image": "//game.gtimg.cn/upload/adw/image/20181002/0ef2d78d5f1b876ca35a617803a9796f.jpg"
            },
            {
                "clickUrl": "http://pvp.qq.com/v/detail.shtml?G_Biz=18&e_code=442451&idataid=232150&tid=434667",
                "image": "//game.gtimg.cn/upload/adw/image/20181002/41509d90e6c8863be3013e764dc9866f.jpg"
            },
            {
                "clickUrl": "http://pvp.qq.com/web201605/newsDetail.shtml?G_Biz=18&e_code=442485&idataid=232220&tid=271017",
                "image": "//game.gtimg.cn/upload/adw/image/20181003/dd9f279260c27ca22a9a64b94345462d.jpg"
            }
          ],
          weeklyNewspaper:[
            "阿轲节奏热浪",
            "英雄周报伽罗",
            "王者开赛季竞猜",
            "西域伽罗破魔箭",
            "五冠王Cat归来"
          ],
          //全部  新闻  公告  活动  赛事
          tabNav:[
              {type:"all",tabTitle:"全部"},
              {type:"news",tabTitle:"新闻"},
              {type:"announcement",tabTitle:"公告"},
              {type:"activity",tabTitle:"活动"},
              {type:"race",tabTitle:"赛事"}
          ],
          allList:[
              {id:'1',content1:"限定皮肤返场投票开启公告及FAQ",releaseTime1:"09/20"},
              {id:'2',content1:"关于“有你才有团”新版本魔法屋暂未开启说明（已开启）",releaseTime1:"09/20"},
              {id:'3',content1:"9月30日体验服停机更新公告",releaseTime1:"09/20"},
              {id:'4',content1:"9月29日体验服停机更新公告",releaseTime1:"09/20"},
              {id:'5',content1:"移动电竞全球化的开始，KRKPL首尔正式启动",releaseTime1:"09/20"},
              {id:'6',content1:"关于云端筑梦师皮肤特效显示异常的说明",releaseTime1:"09/20"},
              {id:'7',content1:"圣斗士联动：赢【伽罗永久英雄】【伽罗永久皮肤】",releaseTime1:"09/20"},
          ],
          newsList:[
              {id:'8',content2:"9月29日体验服停机更新公告",releaseTime2:'09/21'},
              {id:'9',content2:"9月29日体验服停机更新公告",releaseTime2:'08/21'},
              {id:'10',content2:"9月29日体验服停机更新公告",releaseTime2:'06/21'},
              {id:'11',content2:"9月29日体验服停机更新公告",releaseTime2:'09/26'},
              {id:'12',content2:"9月29日体验服停机更新公告",releaseTime2:'10/21'},
              {id:'13',content2:"9月29日体验服停机更新公告",releaseTime2:'09/28'},
              {id:'14',content2:"9月29日体验服停机更新公告",releaseTime2:'07/21'},
          ],
          announcementList:[
              {id:'15',content3:"关于“有你才有团”新版本魔法屋暂未开启说明（已开启）",releaseTime3:'08/22'},
              {id:'16',content3:"关于“有你才有团”新版本魔法屋暂未开启说明（已开启）",releaseTime3:'09/12'},
              {id:'17',content3:"关于“有你才有团”新版本魔法屋暂未开启说明（已开启）",releaseTime3:'09/22'},
              {id:'18',content3:"关于“有你才有团”新版本魔法屋暂未开启说明（已开启）",releaseTime3:'09/02'},
              {id:'19',content3:"关于“有你才有团”新版本魔法屋暂未开启说明（已开启）",releaseTime3:'03/22'},
              {id:'20',content3:"关于“有你才有团”新版本魔法屋暂未开启说明（已开启）",releaseTime3:'09/22'},
              {id:'21',content3:"关于“有你才有团”新版本魔法屋暂未开启说明（已开启）",releaseTime3:'10/22'},
          ],
          activityList:[
              {id:'22',content4:"限定皮肤返场投票开启公告及FAQ",releaseTime4:"10/03"},
              {id:'23',content4:"限定皮肤返场投票开启公告及FAQ",releaseTime4:"10/21"},
              {id:'24',content4:"限定皮肤返场投票开启公告及FAQ",releaseTime4:"10/13"},
              {id:'25',content4:"限定皮肤返场投票开启公告及FAQ",releaseTime4:"10/23"},
              {id:'26',content4:"限定皮肤返场投票开启公告及FAQ",releaseTime4:"10/07"},
              {id:'27',content4:"限定皮肤返场投票开启公告及FAQ",releaseTime4:"09/07"},
              {id:'28',content4:"限定皮肤返场投票开启公告及FAQ",releaseTime4:"09/20"},
          ],
          raceList:[
              {id:'29',content5:"关于云端筑梦师皮肤特效显示异常的说明",releaseTime5:'02/20'},
              {id:'30',content5:"关于云端筑梦师皮肤特效显示异常的说明",releaseTime5:'03/24'},
              {id:'31',content5:"关于云端筑梦师皮肤特效显示异常的说明",releaseTime5:'09/24'},
              {id:'32',content5:"关于云端筑梦师皮肤特效显示异常的说明",releaseTime5:'07/24'},
              {id:'33',content5:"关于云端筑梦师皮肤特效显示异常的说明",releaseTime5:'09/29'},
              {id:'34',content5:"关于云端筑梦师皮肤特效显示异常的说明",releaseTime5:'06/24'},
              {id:'35',content5:"关于云端筑梦师皮肤特效显示异常的说明",releaseTime5:'09/14'},
          ],
          tabtitle:[
              {type:"fineColumns",tabName:"精品栏目"},
              {type:"eventBoutique",tabName:"赛事精品"},
              {type:"heroStrategy",tabName:"英雄攻略"},
           
          ],
          buttonList1:[
              {id:"a1",buttonName:"上分拍档"},
              {id:"a2",buttonName:"天下王者"},
              {id:"a3",buttonName:"荣耀兵器谱"},
              {id:"a4",buttonName:"百星王者带你飞"},
              {id:"a5",buttonName:"零度带你飞"},
              {id:"a6",buttonName:"破冰英雄"},
              {id:"a7",buttonName:"王者克制论"},
              {id:"a8",buttonName:"峡谷情报局"}
          ],
          buttonList2:[
              {id:"a9",buttonName:"王者炸麦了"},
              {id:"a10",buttonName:"KPL观赛指南"},
              {id:"a11",buttonName:"荣耀进行时"},
              {id:"a12",buttonName:"大葱哥聊KPL"},
              {id:"a13",buttonName:"王者职业教学"},
              {id:"a14",buttonName:"QG荣耀学院"},
              {id:"a15",buttonName:"我来carry"}
          ],
          //选择英雄
          heroLeftOption:[
              {id:"b1",heroType:"热门"},
              {id:"b2",heroType:"坦克"},
              {id:"b3",heroType:"战士"},
              {id:"b4",heroType:"刺客"},
              {id:"b5",heroType:"法师"},
              {id:"b6",heroType:"射手"},
              {id:"b7",heroType:"辅助"},
          ],
          heroRightOption1:[
              {id:'b8',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg',heroName:'后羿'},
              {id:'b9',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/112/112.jpg',heroName:'鲁班七号'},
              {id:'b10',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg',heroName:'孙悟空'},
              {id:'b11',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/150/150.jpg',heroName:'韩信'},
              {id:'b12',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/109/109.jpg',heroName:'妲己'},
              {id:'b13',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/129/129.jpg',heroName:'典韦'},
              {id:'b14',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/142/142.jpg',heroName:'安其拉'},
              {id:'b15',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/193/193.jpg',heroName:'铠'},
              {id:'b16',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg',heroName:'亚瑟'},
              {id:'b17',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/508/508.jpg',heroName:'伽罗'},
              {id:'b18',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/134/134.jpg',heroName:'达摩'},
              {id:'b19',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/135/135.jpg',heroName:'项羽'},
              {id:'b20',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/131/131.jpg',heroName:'李白'},
              {id:'b21',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg',heroName:'程咬金'},
              {id:'b22',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/154/154.jpg',heroName:'花木兰'},
              {id:'b23',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/141/141.jpg',heroName:'貂蝉'},
              {id:'b24',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/111/111.jpg',heroName:'孙尚香'},
              {id:'b25',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg',heroName:'百里守约'},
              {id:'b26',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/190/190.jpg',heroName:'诸葛亮'},
              {id:'b27',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/127/127.jpg',heroName:'甄姬'},
          ],
          heroRightOption2:[
              {id:'b28',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/198/198.jpg',heroName:'梦奇'},
              {id:'b29',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/194/194.jpg',heroName:'苏烈'},
              {id:'b30',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/187/187.jpg',heroName:'东皇太一'},
              {id:'b31',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/149/149.jpg',heroName:'刘邦'},
              {id:'b32',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/175/175.jpg',heroName:'钟馗'},
              {id:'b33',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/113/113.jpg',heroName:'庄周'},
              {id:'c1',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/108/108.jpg',heroName:'墨子'},
              {id:'c2',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/114/114.jpg',heroName:'刘禅'},
              {id:'c3',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/105/105.jpg',heroName:'廉颇'},
              {id:'c4',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/120/120.jpg',heroName:'白起'},
              {id:'c5',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/135/135.jpg',heroName:'项羽'},
              {id:'c6',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg',heroName:'程咬金'}
          ],
          heroRightOption3:[
              {id:'b34',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/187/187.jpg',heroName:'东皇太一'},
              {id:'b35',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/187/187.jpg',heroName:'东皇太一'},
              {id:'b36',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/187/187.jpg',heroName:'东皇太一'},
              {id:'b37',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/187/187.jpg',heroName:'东皇太一'},
              {id:'b38',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/187/187.jpg',heroName:'东皇太一'},
              {id:'b39',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/187/187.jpg',heroName:'东皇太一'},
              {id:'b40',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/187/187.jpg',heroName:'东皇太一'},
              {id:'b41',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/187/187.jpg',heroName:'东皇太一'},
              {id:'b42',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/187/187.jpg',heroName:'东皇太一'},
              {id:'b43',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/187/187.jpg',heroName:'东皇太一'},
              {id:'b44',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/187/187.jpg',heroName:'东皇太一'},
              {id:'b45',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/187/187.jpg',heroName:'东皇太一'},
              {id:'b46',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/187/187.jpg',heroName:'东皇太一'},
          ],
          heroRightOption4:[
              {id:'b47',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg',heroName:'百里守约'},
              {id:'b48',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg',heroName:'百里守约'},
              {id:'b49',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg',heroName:'百里守约'},
              {id:'b50',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg',heroName:'百里守约'},
              {id:'b51',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg',heroName:'百里守约'},
              {id:'b52',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg',heroName:'百里守约'},
              {id:'b53',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg',heroName:'百里守约'},
              {id:'b54',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg',heroName:'百里守约'},
              {id:'b55',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg',heroName:'百里守约'},
              {id:'b56',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg',heroName:'百里守约'},
              {id:'b57',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg',heroName:'百里守约'},
              {id:'b58',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg',heroName:'百里守约'},
              {id:'b59',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg',heroName:'百里守约'},
          ],
          heroRightOption5:[
              {id:'b60',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/135/135.jpg',heroName:'项羽'},
              {id:'b61',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/135/135.jpg',heroName:'项羽'},
              {id:'b62',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/135/135.jpg',heroName:'项羽'},
              {id:'b63',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/135/135.jpg',heroName:'项羽'},
              {id:'b64',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/135/135.jpg',heroName:'项羽'},
              {id:'b65',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/135/135.jpg',heroName:'项羽'},
              {id:'b66',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/135/135.jpg',heroName:'项羽'},
              {id:'b67',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/135/135.jpg',heroName:'项羽'},
              {id:'b68',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/135/135.jpg',heroName:'项羽'},
              {id:'b69',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/135/135.jpg',heroName:'项羽'},
              {id:'b70',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/135/135.jpg',heroName:'项羽'},
              {id:'b71',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/135/135.jpg',heroName:'项羽'},
              {id:'b72',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/135/135.jpg',heroName:'项羽'},
          ],
          heroRightOption6:[
              {id:'b73',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/190/190.jpg',heroName:'诸葛亮'},
              {id:'b74',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/190/190.jpg',heroName:'诸葛亮'},
              {id:'b75',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/190/190.jpg',heroName:'诸葛亮'},
              {id:'b76',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/190/190.jpg',heroName:'诸葛亮'},
              {id:'b77',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/190/190.jpg',heroName:'诸葛亮'},
              {id:'b78',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/190/190.jpg',heroName:'诸葛亮'},
              {id:'b79',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/190/190.jpg',heroName:'诸葛亮'},
              {id:'b80',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/190/190.jpg',heroName:'诸葛亮'},
              {id:'b81',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/190/190.jpg',heroName:'诸葛亮'},
              {id:'b82',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/190/190.jpg',heroName:'诸葛亮'},
              {id:'b83',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/190/190.jpg',heroName:'诸葛亮'},
              {id:'b84',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/190/190.jpg',heroName:'诸葛亮'},
              {id:'b85',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/190/190.jpg',heroName:'诸葛亮'},
          ],
          heroRightOption7:[
              {id:'b86',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/152/152.jpg',heroName:'王昭君'},
              {id:'b87',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/152/152.jpg',heroName:'王昭君'},
              {id:'b88',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/152/152.jpg',heroName:'王昭君'},
              {id:'b89',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/152/152.jpg',heroName:'王昭君'},
              {id:'b90',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/152/152.jpg',heroName:'王昭君'},
              {id:'b91',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/152/152.jpg',heroName:'王昭君'},
              {id:'b92',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/152/152.jpg',heroName:'王昭君'},
              {id:'b93',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/152/152.jpg',heroName:'王昭君'},
              {id:'b94',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/152/152.jpg',heroName:'王昭君'},
              {id:'b95',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/152/152.jpg',heroName:'王昭君'},
              {id:'b96',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/152/152.jpg',heroName:'王昭君'},
              {id:'b97',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/152/152.jpg',heroName:'王昭君'},
              {id:'b98',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/152/152.jpg',heroName:'王昭君'},
              {id:'b99',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/152/152.jpg',heroName:'王昭君'},
              {id:'b100',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/heroimg/152/152.jpg',heroName:'王昭君'},
          ],
          //英雄皮肤
          heroSkins:[
              {id:"c20",skintype:"最新英雄"},
              {id:"c21",skintype:"最新皮肤"},
              {id:"c22",skintype:"周免英雄"}
          ],
          tabItem1:[
              {
                  id:'c23',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/freehero/horizontal/508.jpg',heroDescribe:'新英雄：伽罗',onlineTime:'上线时间：2018-09-27',
                  flatImg:[
                    {id:'c26',flatUrl:"//game.gtimg.cn/images/yxzj/img201606/freehero/vertical/509.jpg"},
                    {id:'c27',flatUrl:"//game.gtimg.cn/images/yxzj/img201606/freehero/vertical/137.jpg"},
                    {id:'c28',flatUrl:"//game.gtimg.cn/images/yxzj/img201606/freehero/vertical/510.jpg"},
                    {id:'c29',flatUrl:"//game.gtimg.cn/images/yxzj/img201606/freehero/vertical/125.jpg"}
                  ]
              }
          ],
          tabItem2:[
              {
                  id:'c24',imgUrl:'//game.gtimg.cn/images/yxzj/img201606/freehero/horizontal/198_skin.jpg',heroDescribe:'新皮肤：梦奇-胖达荣荣',onlineTime:'上线时间：2018-09-30',
                  flatImg:[
                      {id:'c30',flatUrl:"//game.gtimg.cn/images/yxzj/img201606/freehero/vertical/503_skin.jpg"},
                      {id:'c31',flatUrl:"//game.gtimg.cn/images/yxzj/img201606/freehero/vertical/508_skin.jpg"},
                      {id:'c32',flatUrl:"//game.gtimg.cn/images/yxzj/img201606/freehero/vertical/120_skin.jpg"},
                      {id:'c33',flatUrl:"//game.gtimg.cn/images/yxzj/img201606/freehero/vertical/144_skin.jpg"}
                  ] 
              }
          ],
          tabItem3:[
                      {id:'c34',url:"//game.gtimg.cn/images/yxzj/img201606/freehero/vertical/177.jpg"},
                      {id:'c35',url:"//game.gtimg.cn/images/yxzj/img201606/freehero/vertical/149.jpg"},
                      {id:'c36',url:"//game.gtimg.cn/images/yxzj/img201606/freehero/vertical/139.jpg"},
                      {id:'c37',url:"//game.gtimg.cn/images/yxzj/img201606/freehero/vertical/118.jpg"},
                      {id:'c38',url:"//game.gtimg.cn/images/yxzj/img201606/freehero/vertical/129.jpg"},
                      {id:'c39',url:"//game.gtimg.cn/images/yxzj/img201606/freehero/vertical/152.jpg"},
                      {id:'c40',url:"//game.gtimg.cn/images/yxzj/img201606/freehero/vertical/504.jpg"},
                      {id:'c41',url:"//game.gtimg.cn/images/yxzj/web201605/new/more_hero.jpg"}
          ],
          //赛事中心tab栏
          professionalTournament:[
              {id:"c60",tournament:"KPL职业联赛"},
              {id:"c61",tournament:"KOC王者城市赛"},
              {id:"c62",tournament:"王者高校联赛"},
              {id:"c63",tournament:"TGA大奖赛"},
              {id:"c64",tournament:"QGC联赛"},
              {id:"c65",tournament:"WGI"},
              {id:"c66",tournament:"WGC精英赛"},
          ],
          raceData:[
              {
                raceType:'KPL职业联赛',
                imgUrl:'//ossweb-img.qq.com/upload/webplat/info/yxzj/20180904/736001041623185.jpg',
                bigTitle:'老帅关键词：队长、冠军、千万身价',
                description:'老帅，本名张宇辰，94年出生的老帅其实并不老，但与现在大多数年轻选手相比，绝对是大哥级别的人物。',
                buttonText:'分析',
                wgcList:[
                     {id:'c71',flashTime:"09/29",content:"KPL全明星突围夜前KPL选手邀请名单揭秘，有你想念的那个Ta吗？"},
                     {id:'c72',flashTime:"09/28",content:"移动电竞全球化的开始，KRKPL首尔正式启动"},
                     {id:'c73',flashTime:"09/28",content:"KPL全明星突围夜投票开启倒计时3天，快来为你喜欢的主播投票打Call"},
                     {id:'c74',flashTime:"09/26",content:"【真王者】电竞老男孩770：用整个青春打职业 为完美结局成“健身达人”"},
                     {id:'c75',flashTime:"09/26",content:"KPL全明星突围夜，投票10月1日开启"},
                     {id:'c76',flashTime:"09/25",content:"秋季赛第二周数据回顾，新军Ts、TOPM领跑东西部"}
                 ],
                 racePreview:[
                       {
                         imgUrl:'//shp.qpic.cn/cfwebcap/2546694651/5e2948ea4455bf2ed71b746d8ac77f9b/0/?width=230&height=140',
                         viewsNumber:'794',
                         time:'2018-10-05',
                         comments:'【壹起黑凤梨】KPL赛场的你侬我侬 一阳指CP出道！'
                       },
                       {
                         imgUrl:'//shp.qpic.cn/cfwebcap/2546694651/f40e61f40022a449e657a8861ad5e646/0/?width=230&height=140',
                         viewsNumber:'520',
                         time:'2018-10-05',
                         comments:'【JC荣耀家族】Ⅱ第3集 健身房魔鬼对抗 纵情倾城机智默契'
                       },
                       {
                         imgUrl:'//shp.qpic.cn/cfwebcap/2546694651/055eac69204054d772dcf804bfba3b4d/0/?width=230&height=140',
                         viewsNumber:'520',
                         time:'2018-10-05',
                         comments:'【E周记】定妆照花絮，无痕当选门面担当'
                       },
                       {
                         imgUrl:'//shp.qpic.cn/cfwebcap/3146194188/ffb62cf10c4527e8beb8fa93bbd82166/0/?width=230&height=140',
                         viewsNumber:'794',
                         time:'2018-10-05',
                         comments:'【壹起黑凤梨】KPL赛场的你侬我侬 一阳指CP出道！'
                       },
                       {
                         imgUrl:'//shp.qpic.cn/cfwebcap/2546694651/055eac69204054d772dcf804bfba3b4d/0/?width=230&height=140',
                         viewsNumber:'520',
                         time:'2018-10-05',
                         comments:'【E周记】定妆照花絮，无痕当选门面担当'
                       },
                       {
                         imgUrl:'//shp.qpic.cn/cfwebcap/3146194188/ffb62cf10c4527e8beb8fa93bbd82166/0/?width=230&height=140',
                         viewsNumber:'794',
                         time:'2018-10-05',
                         comments:'【壹起黑凤梨】KPL赛场的你侬我侬 一阳指CP出道！'
                       },
                       {
                         imgUrl:'//shp.qpic.cn/cfwebcap/2546694651/055eac69204054d772dcf804bfba3b4d/0/?width=230&height=140',
                         viewsNumber:'520',
                         time:'2018-10-05',
                         comments:'【E周记】定妆照花絮，无痕当选门面担当'
                       },
                       {
                         imgUrl:'//shp.qpic.cn/cfwebcap/3146194188/ffb62cf10c4527e8beb8fa93bbd82166/0/?width=230&height=140',
                         viewsNumber:'794',
                         time:'2018-10-05',
                         comments:'【壹起黑凤梨】KPL赛场的你侬我侬 一阳指CP出道！'
                       }
                 ]
              },
              {
                raceType:'KOC王者城市赛',
                imgUrl:'//ossweb-img.qq.com/upload/webplat/info/yxzj/20180912/245721302555343.jpg',
                bigTitle:'城市赛假期火热进行中，全民竞猜海量豪礼等你赢',
                description:'假日来袭，王者荣耀精彩赛事全面开启。家门口的电竞梦，让每个召唤',
                buttonText:'KOC',
                wgcList:[
                     {id:'c71',flashTime:"09/29",content:"王者荣耀假期全面出击，海量赛事与福利邀召唤师峡谷狂欢！"},
                     {id:'c72',flashTime:"09/28",content:"王者荣耀假期全面出击，海量赛事与福利邀召唤师峡谷狂欢！"},
                     {id:'c73',flashTime:"09/28",content:"王者荣耀假期全面出击，海量赛事与福利邀召唤师峡谷狂欢！"},
                     {id:'c74',flashTime:"09/26",content:"王者荣耀假期全面出击，海量赛事与福利邀召唤师峡谷狂欢！"},
                     {id:'c75',flashTime:"09/26",content:"王者荣耀假期全面出击，海量赛事与福利邀召唤师峡谷狂欢！"},
                     {id:'c76',flashTime:"09/25",content:"王者荣耀假期全面出击，海量赛事与福利邀召唤师峡谷狂欢！"}
                 ],
                 racePreview:[
                       {
                         imgUrl:'//shp.qpic.cn/cfwebcap/93818308/8a0a4dbb77f03e78e9b40c93fd0c3a6e/0/?width=230&height=140',
                         viewsNumber:'794',
                         time:'2018-10-05',
                         comments:'【第五届王者荣耀城市赛快闪回顾】城市王者之战 你准备好了吗'
                       },
                       {
                         imgUrl:'//shp.qpic.cn/cfwebcap/93818308/8a0a4dbb77f03e78e9b40c93fd0c3a6e/0/?width=230&height=140',
                         viewsNumber:'794',
                         time:'2018-10-05',
                         comments:'【第五届王者荣耀城市赛快闪回顾】城市王者之战 你准备好了吗'
                       },
                       {
                         imgUrl:'//shp.qpic.cn/cfwebcap/93818308/8a0a4dbb77f03e78e9b40c93fd0c3a6e/0/?width=230&height=140',
                         viewsNumber:'794',
                         time:'2018-10-05',
                         comments:'【第五届王者荣耀城市赛快闪回顾】城市王者之战 你准备好了吗'
                       },
                       {
                         imgUrl:'//shp.qpic.cn/cfwebcap/93818308/8a0a4dbb77f03e78e9b40c93fd0c3a6e/0/?width=230&height=140',
                         viewsNumber:'794',
                         time:'2018-10-05',
                         comments:'【第五届王者荣耀城市赛快闪回顾】城市王者之战 你准备好了吗'
                       },
                       {
                         imgUrl:'//shp.qpic.cn/cfwebcap/93818308/8a0a4dbb77f03e78e9b40c93fd0c3a6e/0/?width=230&height=140',
                         viewsNumber:'794',
                         time:'2018-10-05',
                         comments:'【第五届王者荣耀城市赛快闪回顾】城市王者之战 你准备好了吗'
                       },
                       {
                         imgUrl:'//shp.qpic.cn/cfwebcap/93818308/8a0a4dbb77f03e78e9b40c93fd0c3a6e/0/?width=230&height=140',
                         viewsNumber:'794',
                         time:'2018-10-05',
                         comments:'【第五届王者荣耀城市赛快闪回顾】城市王者之战 你准备好了吗'
                       },
                       {
                         imgUrl:'//shp.qpic.cn/cfwebcap/93818308/8a0a4dbb77f03e78e9b40c93fd0c3a6e/0/?width=230&height=140',
                         viewsNumber:'794',
                         time:'2018-10-05',
                         comments:'【第五届王者荣耀城市赛快闪回顾】城市王者之战 你准备好了吗'
                       },
                       {
                         imgUrl:'//shp.qpic.cn/cfwebcap/93818308/8a0a4dbb77f03e78e9b40c93fd0c3a6e/0/?width=230&height=140',
                         viewsNumber:'794',
                         time:'2018-10-05',
                         comments:'【第五届王者荣耀城市赛快闪回顾】城市王者之战 你准备好了吗'
                       }
                 ]
              },
              {
                raceType:'王者高校联赛',
                imgUrl:'//ossweb-img.qq.com/upload/webplat/info/yxzj/20180829/20267984758454.png',
                bigTitle:'王者荣耀社团，带你畅玩高校赛',
                description:'新学期来临，有不少高校的社团开启纳新了。在热闹的“百团大战”中，有几个特别吸引眼球，他们就是王者荣耀社团。与此同时，王者荣耀高校联赛也正式拉开帷幕，高校开赛季已经在校园里打得火热，热闹的活动还有梦想开学基金，带召唤师们一起嗨玩开赛季。同时，高校联赛也即将火热开启，召唤师们要不考虑加入王者荣耀社团，和组织一起征战高校赛！',
                buttonText:'王者',
                wgcList:[
                     {id:'c71',flashTime:"09/29",content:"【第五届高校联赛预热宣传片】来王者社团 结伴玩转校园"},
                     {id:'c72',flashTime:"09/28",content:"【第五届高校联赛预热宣传片】来王者社团 结伴玩转校园"},
                     {id:'c73',flashTime:"09/28",content:"【第五届王者荣耀高校联赛宣传漫画】赛事资讯早知道"},
                     {id:'c74',flashTime:"09/26",content:"【第五届王者荣耀高校联赛宣传漫画】赛事资讯早知道"},
                     {id:'c75',flashTime:"09/26",content:"【第五届高校联赛预热宣传片】来王者社团 结伴玩转校园"},
                     {id:'c76',flashTime:"09/25",content:"【第五届高校联赛预热宣传片】来王者社团 结伴玩转校园"}
                 ],
                 racePreview:[
                       {
                         imgUrl:'//shp.qpic.cn/cfwebcap/93818308/82eb8bfdd6d65538b78795e513596deb/0/?width=230&height=140',
                         viewsNumber:'794',
                         time:'2018-10-05',
                         comments:'【第五届王者荣耀城市赛快闪回顾】城市王者之战 你准备好了吗'
                       },
                       {
                         imgUrl:'//shp.qpic.cn/cfwebcap/93818308/82eb8bfdd6d65538b78795e513596deb/0/?width=230&height=140',
                         viewsNumber:'794',
                         time:'2018-10-05',
                         comments:'【第五届王者荣耀城市赛快闪回顾】城市王者之战 你准备好了吗'
                       },
                       {
                         imgUrl:'//shp.qpic.cn/cfwebcap/93818308/82eb8bfdd6d65538b78795e513596deb/0/?width=230&height=140',
                         viewsNumber:'794',
                         time:'2018-10-05',
                         comments:'【第五届王者荣耀城市赛快闪回顾】城市王者之战 你准备好了吗'
                       },
                       {
                         imgUrl:'//shp.qpic.cn/cfwebcap/93818308/82eb8bfdd6d65538b78795e513596deb/0/?width=230&height=140',
                         viewsNumber:'794',
                         time:'2018-10-05',
                         comments:'【第五届王者荣耀城市赛快闪回顾】城市王者之战 你准备好了吗'
                       },
                       {
                         imgUrl:'//shp.qpic.cn/cfwebcap/93818308/82eb8bfdd6d65538b78795e513596deb/0/?width=230&height=140',
                         viewsNumber:'794',
                         time:'2018-10-05',
                         comments:'【第五届王者荣耀城市赛快闪回顾】城市王者之战 你准备好了吗'
                       },
                       {
                         imgUrl:'//shp.qpic.cn/cfwebcap/93818308/82eb8bfdd6d65538b78795e513596deb/0/?width=230&height=140',
                         viewsNumber:'794',
                         time:'2018-10-05',
                         comments:'【第五届王者荣耀城市赛快闪回顾】城市王者之战 你准备好了吗'
                       },
                       {
                         imgUrl:'//shp.qpic.cn/cfwebcap/93818308/82eb8bfdd6d65538b78795e513596deb/0/?width=230&height=140',
                         viewsNumber:'794',
                         time:'2018-10-05',
                         comments:'【第五届王者荣耀城市赛快闪回顾】城市王者之战 你准备好了吗'
                       },
                       {
                         imgUrl:'//shp.qpic.cn/cfwebcap/93818308/82eb8bfdd6d65538b78795e513596deb/0/?width=230&height=140',
                         viewsNumber:'794',
                         time:'2018-10-05',
                         comments:'【第五届王者荣耀城市赛快闪回顾】城市王者之战 你准备好了吗'
                       }
                 ]
              },
              {
                raceType:'TGA大奖赛',
                imgUrl:'//ossweb-img.qq.com/upload/webplat/info/yxzj/20180306/906471392751932.jpg',
                bigTitle:'【战报】王者荣耀4月第三周：杨玉环锋芒毕露 HEC碾压取胜',
                description:'【战报】王者荣耀4月第三周：杨玉环锋芒毕露 HEC碾压取胜',
                buttonText:'TGA',
                wgcList:[
                     {id:'c71',flashTime:"09/29",content:"【战报】王者荣耀4月第二周C组：公孙离岑中归月 DC战队顺利登顶"},
                     {id:'c72',flashTime:"09/28",content:"【战报】王者荣耀4月第二周C组：公孙离岑中归月 DC战队顺利登顶"},
                     {id:'c73',flashTime:"09/28",content:"【战报】王者荣耀4月第二周C组：公孙离岑中归月 DC战队顺利登顶"},
                     {id:'c74',flashTime:"09/26",content:"【战报】王者荣耀4月第二周C组：公孙离岑中归月 DC战队顺利登顶"},
                     {id:'c75',flashTime:"09/26",content:"【战报】王者荣耀4月第二周C组：公孙离岑中归月 DC战队顺利登顶"},
                     {id:'c76',flashTime:"09/25",content:"【战报】王者荣耀4月第二周C组：公孙离岑中归月 DC战队顺利登顶"}
                 ],
                 racePreview:[
                       {
                         imgUrl:'//puui.qpic.cn/vpic/0/a0610anh29q.png/0',
                         viewsNumber:'794',
                         time:'2018-10-05',
                         comments:'【第五届王者荣耀城市赛快闪回顾】城市王者之战 你准备好了吗'
                       },
                       {
                         imgUrl:'//puui.qpic.cn/vpic/0/a0610anh29q.png/0',
                         viewsNumber:'794',
                         time:'2018-10-05',
                         comments:'【第五届王者荣耀城市赛快闪回顾】城市王者之战 你准备好了吗'
                       },
                       {
                         imgUrl:'//puui.qpic.cn/vpic/0/a0610anh29q.png/0',
                         viewsNumber:'794',
                         time:'2018-10-05',
                         comments:'【第五届王者荣耀城市赛快闪回顾】城市王者之战 你准备好了吗'
                       },
                       {
                         imgUrl:'//puui.qpic.cn/vpic/0/a0610anh29q.png/0',
                         viewsNumber:'794',
                         time:'2018-10-05',
                         comments:'【第五届王者荣耀城市赛快闪回顾】城市王者之战 你准备好了吗'
                       },
                       {
                         imgUrl:'//puui.qpic.cn/vpic/0/a0610anh29q.png/0',
                         viewsNumber:'794',
                         time:'2018-10-05',
                         comments:'【第五届王者荣耀城市赛快闪回顾】城市王者之战 你准备好了吗'
                       },
                       {
                         imgUrl:'//puui.qpic.cn/vpic/0/a0610anh29q.png/0',
                         viewsNumber:'794',
                         time:'2018-10-05',
                         comments:'【第五届王者荣耀城市赛快闪回顾】城市王者之战 你准备好了吗'
                       },
                       {
                         imgUrl:'//puui.qpic.cn/vpic/0/a0610anh29q.png/0',
                         viewsNumber:'794',
                         time:'2018-10-05',
                         comments:'【第五届王者荣耀城市赛快闪回顾】城市王者之战 你准备好了吗'
                       },
                       {
                         imgUrl:'//puui.qpic.cn/vpic/0/a0610anh29q.png/0',
                         viewsNumber:'794',
                         time:'2018-10-05',
                         comments:'【第五届王者荣耀城市赛快闪回顾】城市王者之战 你准备好了吗'
                       }
                 ]
              },
              {
                raceType:'QGC联赛',
                imgUrl:'//ossweb-img.qq.com/upload/webplat/info/yxzj/20180322/8143522567151.jpg',
                bigTitle:'QGC王者公开组决赛已落幕 FTD鏖战两轮终获冠军！',
                description:'QGC王者荣耀公开组的比赛如火如荼的进行了数月，而最后的决赛在6月18日举行，比赛对阵为TWT对战AS仙阁，FTD对战SDW，最终的决战就是AS仙阁对战FTD，接下来带大家回顾下这三场精彩的赛事吧！',
                buttonText:'QGC',
                wgcList:[
                     {id:'c71',flashTime:"09/29",content:"QGC王者公开组总决赛热燃来临 6月18日邀你见证"},
                     {id:'c72',flashTime:"09/28",content:"QGC王者公开组总决赛热燃来临 6月18日邀你见证"},
                     {id:'c73',flashTime:"09/28",content:"QGC王者公开组总决赛热燃来临 6月18日邀你见证"},
                     {id:'c74',flashTime:"09/26",content:"QGC王者公开组总决赛热燃来临 6月18日邀你见证"},
                     {id:'c75',flashTime:"09/26",content:"QGC王者公开组总决赛热燃来临 6月18日邀你见证"},
                     {id:'c76',flashTime:"09/25",content:"QGC王者公开组总决赛热燃来临 6月18日邀你见证"}
                 ],
                 racePreview:[
                       {
                         imgUrl:'//shp.qpic.cn/cfwebcap/93818308/8a0a4dbb77f03e78e9b40c93fd0c3a6e/0/?width=230&height=140',
                         viewsNumber:'794',
                         time:'2018-10-05',
                         comments:'【第五届王者荣耀城市赛快闪回顾】城市王者之战 你准备好了吗'
                       },
                       {
                         imgUrl:'//shp.qpic.cn/cfwebcap/93818308/8a0a4dbb77f03e78e9b40c93fd0c3a6e/0/?width=230&height=140',
                         viewsNumber:'794',
                         time:'2018-10-05',
                         comments:'【第五届王者荣耀城市赛快闪回顾】城市王者之战 你准备好了吗'
                       },
                       {
                         imgUrl:'//shp.qpic.cn/cfwebcap/93818308/8a0a4dbb77f03e78e9b40c93fd0c3a6e/0/?width=230&height=140',
                         viewsNumber:'794',
                         time:'2018-10-05',
                         comments:'【第五届王者荣耀城市赛快闪回顾】城市王者之战 你准备好了吗'
                       },
                       {
                         imgUrl:'//shp.qpic.cn/cfwebcap/93818308/8a0a4dbb77f03e78e9b40c93fd0c3a6e/0/?width=230&height=140',
                         viewsNumber:'794',
                         time:'2018-10-05',
                         comments:'【第五届王者荣耀城市赛快闪回顾】城市王者之战 你准备好了吗'
                       },
                       {
                         imgUrl:'//shp.qpic.cn/cfwebcap/93818308/8a0a4dbb77f03e78e9b40c93fd0c3a6e/0/?width=230&height=140',
                         viewsNumber:'794',
                         time:'2018-10-05',
                         comments:'【第五届王者荣耀城市赛快闪回顾】城市王者之战 你准备好了吗'
                       },
                       {
                         imgUrl:'//shp.qpic.cn/cfwebcap/93818308/8a0a4dbb77f03e78e9b40c93fd0c3a6e/0/?width=230&height=140',
                         viewsNumber:'794',
                         time:'2018-10-05',
                         comments:'【第五届王者荣耀城市赛快闪回顾】城市王者之战 你准备好了吗'
                       },
                       {
                         imgUrl:'//shp.qpic.cn/cfwebcap/93818308/8a0a4dbb77f03e78e9b40c93fd0c3a6e/0/?width=230&height=140',
                         viewsNumber:'794',
                         time:'2018-10-05',
                         comments:'【第五届王者荣耀城市赛快闪回顾】城市王者之战 你准备好了吗'
                       },
                       {
                         imgUrl:'//shp.qpic.cn/cfwebcap/93818308/8a0a4dbb77f03e78e9b40c93fd0c3a6e/0/?width=230&height=140',
                         viewsNumber:'794',
                         time:'2018-10-05',
                         comments:'【第五届王者荣耀城市赛快闪回顾】城市王者之战 你准备好了吗'
                       }
                 ]
              },
              {
                raceType:'WGI',
                imgUrl:'//ossweb-img.qq.com/upload/webplat/info/yxzj/20180926/597531354623599.jpg',
                bigTitle:'企鹅风导娜可露露梦幻舞步 零度狂秀司马懿',
                description:'9月28日微信游戏邀请赛-伽罗专场 企鹅电竞战队精彩集锦：企鹅风导娜可露露塔下完美单杀，面对敌方围剿，沉着冷静精致走位，成功等到友军支援配合队友完成反杀。杀敌红尘中，脱身白刃里！企鹅零度司马懿暗中观察，垂涎伽罗人头许久，面对敌方支援临危不惧，成功击杀伽罗开启大招潇洒逃生~更多新英雄资讯，请搜一搜“微信电竞”，关注微信游戏邀请赛。',
                buttonText:'WGI',
                wgcList:[
                     {id:'c71',flashTime:"09/29",content:"塑梦伽罗精准站位 打出成吨伤害"},
                     {id:'c72',flashTime:"09/28",content:"塑梦伽罗精准站位 打出成吨伤害"},
                     {id:'c73',flashTime:"09/28",content:"塑梦伽罗精准站位 打出成吨伤害"},
                     {id:'c74',flashTime:"09/26",content:"塑梦伽罗精准站位 打出成吨伤害"},
                     {id:'c75',flashTime:"09/26",content:"塑梦伽罗精准站位 打出成吨伤害"},
                     {id:'c76',flashTime:"09/25",content:"塑梦伽罗精准站位 打出成吨伤害"}
                 ],
                 racePreview:[
                       {
                         imgUrl:'//shp.qpic.cn/cfwebcap/93818308/8a0a4dbb77f03e78e9b40c93fd0c3a6e/0/?width=230&height=140',
                         viewsNumber:'794',
                         time:'2018-10-05',
                         comments:'【第五届王者荣耀城市赛快闪回顾】城市王者之战 你准备好了吗'
                       },
                       {
                         imgUrl:'//shp.qpic.cn/cfwebcap/93818308/8a0a4dbb77f03e78e9b40c93fd0c3a6e/0/?width=230&height=140',
                         viewsNumber:'794',
                         time:'2018-10-05',
                         comments:'【第五届王者荣耀城市赛快闪回顾】城市王者之战 你准备好了吗'
                       },
                       {
                         imgUrl:'//shp.qpic.cn/cfwebcap/93818308/8a0a4dbb77f03e78e9b40c93fd0c3a6e/0/?width=230&height=140',
                         viewsNumber:'794',
                         time:'2018-10-05',
                         comments:'【第五届王者荣耀城市赛快闪回顾】城市王者之战 你准备好了吗'
                       },
                       {
                         imgUrl:'//shp.qpic.cn/cfwebcap/93818308/8a0a4dbb77f03e78e9b40c93fd0c3a6e/0/?width=230&height=140',
                         viewsNumber:'794',
                         time:'2018-10-05',
                         comments:'【第五届王者荣耀城市赛快闪回顾】城市王者之战 你准备好了吗'
                       },
                       {
                         imgUrl:'//shp.qpic.cn/cfwebcap/93818308/8a0a4dbb77f03e78e9b40c93fd0c3a6e/0/?width=230&height=140',
                         viewsNumber:'794',
                         time:'2018-10-05',
                         comments:'【第五届王者荣耀城市赛快闪回顾】城市王者之战 你准备好了吗'
                       },
                       {
                         imgUrl:'//shp.qpic.cn/cfwebcap/93818308/8a0a4dbb77f03e78e9b40c93fd0c3a6e/0/?width=230&height=140',
                         viewsNumber:'794',
                         time:'2018-10-05',
                         comments:'【第五届王者荣耀城市赛快闪回顾】城市王者之战 你准备好了吗'
                       },
                       {
                         imgUrl:'//shp.qpic.cn/cfwebcap/93818308/8a0a4dbb77f03e78e9b40c93fd0c3a6e/0/?width=230&height=140',
                         viewsNumber:'794',
                         time:'2018-10-05',
                         comments:'【第五届王者荣耀城市赛快闪回顾】城市王者之战 你准备好了吗'
                       },
                       {
                         imgUrl:'//shp.qpic.cn/cfwebcap/93818308/8a0a4dbb77f03e78e9b40c93fd0c3a6e/0/?width=230&height=140',
                         viewsNumber:'794',
                         time:'2018-10-05',
                         comments:'【第五届王者荣耀城市赛快闪回顾】城市王者之战 你准备好了吗'
                       }
                 ]
              },
              {
                raceType:'WGC精英赛',
                imgUrl:'//ossweb-img.qq.com/upload/webplat/info/yxzj/20180313/63133182533116.jpg',
                bigTitle:'触手寂然PK斗鱼老回 火热solo“举盾”真男人',
                description:'在王者峡谷的世界里，没有什么是一局solo解决不了的，虽然新英雄盾',
                buttonText:'WGC',
                wgcList:[
                     {id:'c71',flashTime:"09/21",content:"微信游戏邀请赛：触手斗鱼强强联手，实战演绎盾山的花式套路"},
                     {id:'c72',flashTime:"09/21",content:"微信游戏邀请赛：企鹅牵手虎牙，实战演绎奶塔小天使盾山"},
                     {id:'c73',flashTime:"09/24",content:"人气主播拖米秀伽罗 草丛之王有套路"},
                     {id:'c74',flashTime:"09/25",content:"微信游戏邀请赛伽罗专场，斗鱼企鹅阵容抢先看"},
                     {id:'c75',flashTime:"09/07",content:"斗鱼VS触手！微信游戏邀请赛首战来袭"},
                     {id:'c76',flashTime:"09/07",content:"微信游戏邀请赛拉开序幕，触手战队惊艳亮相"}
                 ],
                 racePreview:[
                       {
                         imgUrl:'//puui.qpic.cn/vpic/0/y0781f669ir.png/0',
                         viewsNumber:'213',
                         time:'2018-09-09',
                         comments:'英雄征召 虎牙PR队vs企鹅电竞队 第一局'
                       },
                       {
                         imgUrl:'//puui.qpic.cn/vpic/0/h0711vky6e6.png/0',
                         viewsNumber:'8304',
                         time:'2018-07-11',
                         comments:'2018WGC春季赛总决赛3D MAP开场秀'
                       },
                       {
                         imgUrl:'//puui.qpic.cn/vpic/0/k0704jawnmm.png/0',
                         viewsNumber:'53.6万',
                         time:'2018-07-11',
                         comments:'2018WGC春季赛总决赛观赛指南'
                       },
                       {
                         imgUrl:'//puui.qpic.cn/vpic/0/h0711k9mjb9.png/0',
                         viewsNumber:'4022',
                         time:'2018-07-11',
                         comments:'2018WGC春季赛总决赛现场采访'
                       },
                       {
                         imgUrl:'//puui.qpic.cn/vpic/0/j0711vsme2u.png/0',
                         viewsNumber:'6561',
                         time:'2018-07-11',
                         comments:'2018WGC春季赛总决赛首日回顾'
                       },
                       {
                         imgUrl:'//puui.qpic.cn/vpic/0/j07112a7saq.png/0',
                         viewsNumber:'1763',
                         time:'2018-07-11',
                         comments:'2018WGC春季赛总决赛街舞秀'
                       },
                       {
                         imgUrl:'//puui.qpic.cn/vpic/0/s07137pstkq.png/0',
                         viewsNumber:'29.3万',
                         time:'2018-07-10',
                         comments:'《王者荣耀》WGC播报社第八期：RSG获春季赛冠军'
                       },
                       {
                         imgUrl:'//puui.qpic.cn/vpic/0/v0713viwvqo.png/0',
                         viewsNumber:'5.4万',
                         time:'2018-07-10',
                         comments:'《王者荣耀》WGC暴走镜头 张飞杨玉环完美配合'
                       },
                 ]
              },
          ]
      }
  },
  created() {
     this.$nextTick(() => {
            this.timer = setInterval(() => {
                this.autoPlay()
            }, 4000)
     });
     
  },
  mounted() {
    
  },
  methods:{
    go() {
        this.timer = setInterval(() => {
            this.autoPlay()
        }, 4000)
    },
    stop() {
        clearInterval(this.timer)
        this.timer = null
    },
    change(index) {
        this.currentIndex = index
    },
    autoPlay() {
        this.currentIndex++
        if (this.currentIndex > this.slideList.length - 1) {
            this.currentIndex = 0
        }
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
        /*猫神再续传奇*/
        .bast{
          width:95%;
          height:360px;
          background-color:#080706;
          margin-left:2.3333333%;
          position:absolute;
          bottom:230px;
          display:flex;
          .languagePlanning{
            width:50%;
            height:360px;
            background-color:#f00;
             /*------------轮播图样式------------------*/ 
              .carousel-wrap {
                position: relative;
                height: 315px;
                width: 100%;
                overflow: hidden;
                // 删除
                background-color: #fff;
              }

              .slide-ul {
                width: 100%;
                height: 100%;
                li {
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  img {
                    width: 100%;
                    height: 100%;
                  }
                }
              }

              .carousel-items {
                position: absolute;
                z-index: 10;
                top: 300px;
                width: 100%;
                margin: 0 auto;
                text-align: center;
                font-size: 0;
                z-index:99;
                span {
                  display: inline-block;
                  height: 6px;
                  width: 30px;
                  margin: 0 3px;
                  background-color: #b2b2b2;
                  cursor: pointer;
                }
                .Ness {
                  background-color: yellowgreen;
                }
              }

              .list-enter-to {
                transition: all 1s ease;
                transform: translateX(0);
              }

              .list-leave-active {
                transition: all 1s ease;
                transform: translateX(-100%)
              }

              .list-enter {
                transform: translateX(100%)
              }

              .list-leave {
                transform: translateX(0)
              }
               /*------------轮播图样式------------------*/ 

            
            .tabBar{
               width:100%;
               height:45px;
               background-color:#252329;
               li{
                 float:left;
                 color:#fff;
                 height:45px;
                 line-height:45px;
                 text-align:center;
                 width:20%;
                 &.active{
                   color:#f3c251;
                   background-color:#444247;
                 }
               }
               
            }
          }
          .theTopOfPeople{
            width:30%;
            height:360px;
            background-color:#29262a;
            padding:15px;
            .tabNav{
              width:100%;
              height:45px;
              background-color:#272328;
              .tabNav-left{
                 width:82%;
                  li{
                    width:20%;
                    height:45px;
                    float:left;
                    color:#fff;
                    text-align:center;
                    line-height:45px;
                    border-bottom:3px solid #272328;
                    &.activeNess{
                      color:#f3c258;
                      border-bottom:3px solid #b57b3a;
                    }
                  }

              }
              span{
                display:inline-block;
                width:5%;
                height:45px;
                line-height:38px;
                text-align:center;
                position:absolute;
                color:#fff;
               
              }
            }
            .tablist{
              width:100%;
              height:285px;
              
              border-top:1px solid #000000;
              .dunhuangAcademy{
                 width:100%;
                 height:40px;
                 margin:13px 0 0;
                 color:#e6b555;
                 line-height:40px;
                 text-align:center;
                 font-size:20px;
                 background-color:#414046;
                 &:hover{
                   text-decoration:underline;
                 }
              }
              .newsList{
                width:100%;
                 height:230px;
                 
                 li{
                   width:100%;
                   height:14.33333%;
                   display:flex;
                   color:#fff;
                   font-size:14px;
                   a{
                     display:block;
                     width:90%;
                     padding:10px 20px 10px 0;
                     text-overflow:ellipsis;
                     overflow:hidden; 
                     white-space:nowrap; 
                     color:#fff;
                     &:hover{
                         text-decoration:underline;
                     }
                   }
                   span{
                     line-height:40px;
                   }
                 }
              }
            }
          }
          .downloadGame{
            width:20%;
            height:360px;
            background-color:green;
            .xiazaiyouxi{
              width:100%;
              height:124px;
              background-color:red;
              background:url('../assets/img/downloadGame.png') center/100% 100% no-repeat;
            }
            .newZone{
              width:100%;
              height:118px;
              background-color:blue;
               background:url('../assets/img/newZone.png') center/100% 100% no-repeat;
            }
            .experienceZone{
              width:100%;
              height:118px;
              background-color:yellow;
               background:url('../assets/img/expZone.png') center/100% 100% no-repeat;
            }
          }
        }
        /*官方爆料站*/
        .whistle-blowing{
          width:95%;
          height:160px;
          
          margin-left:2.3333333%;
          position:absolute;
          bottom:50px;
          display:flex;
          justify-content:space-between;
          .official{
            width:24%;
            height:160px;
            background-color:green;
            background:url('//ossweb-img.qq.com/upload/webplat/info/yxzj/20180912/31813383120460.jpg') center/100% 100% no-repeat;
          }
          .glory{
            width:24%;
            height:160px;
            background-color:yellow;
            background:url('//ossweb-img.qq.com/upload/webplat/info/yxzj/20180416/194701268061767.jpg') center/100% 100% no-repeat;
          }
          .culture{
            width:24%;
            height:160px;
            background-color:blue;
            background:url('//ossweb-img.qq.com/upload/webplat/info/yxzj/20180326/322221039690099.jpg') center/100% 100% no-repeat;
          }
          .competition{
            width:24%;
            height:160px;
            background-color:red;
            background:url('//ossweb-img.qq.com/upload/webplat/info/yxzj/20180910/59833394243833.jpg') center/100% 100% no-repeat;
          }
        }
    }
    /*内容中心*/
    .contentCenter{
      width:95%;
      height:490px;
      margin-left:2.3333333%;
      
      display:flex;
      justify-content:space-between;
      /*精彩视频*/
      .wonderfulVideo{
        width:75%;
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        
        .title{
          width:100%;
          height:6%;
          background-color:#fff;
          display:flex;
          justify-content:space-between;
          .content-title{
            width:200px;
            height:100%;
            font-size:20px;
            font-weight:700;
          }
          .content-more{
            width:70px;
            height:100%;
            font-size:15px;
            
          }
          div{
              display:flex;
              align-items:center;
              img{
                 height:80%;
              }
          }
        }
        .tabTitle{
          width:100%;
          height:6%;
          background-color:#f5f5f5;
          display:flex;
          margin-top:0px;
          li{
            width:33.3333333%;
            text-align:center;
            line-height:27px;
            border-bottom:3px solid f5f5f5;
            &.activeNess{
              border-bottom:3px solid orange;
            }
          }
        }
        .outview{
            height:85%;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            position:relative;
            .chooseHero{
              width:10%;
              height:7%;
              font-size:15px;
              display:flex;
              p{
                width:75%;
                height:100%;
                line-height:27px;
                cursor:pointer;
              }
              span{
                  width:7%;
                  height:100%;
                  line-height:27px;
                  cursor:pointer;
                  display:inline-block;
                  color:gold;
              }
            }
            /*英雄选项*/
            .heroOption{
                width:95%;
                height:88%;
                background-color:#fff;
                border:1px solid #ccc;
                //opacity:.3;
                z-index:99;
                display:flex;
                position:absolute;
                top:36px;
                .option-left{
                    width:10%;
                    height:100%;
                    background-color:#f5f5f5;
                    li{
                        width:100%;
                         height:12%;
                         text-align:center;
                         line-height:50px;
                         &:hover{
                             background-color:#f3c258;
                         }
                         a{
                             color:black;
                         }
                    }
                }
                .option-right{
                    width:90%;
                    height:100%;
                    padding:10px 15px;
                    overflow-x:hidden;
                    li{
                        width:12%;
                        height:33.333333%;
                        padding:10px;
                        float:left;
                        img{
                            height:60%;
                            margin-left:5px;
                        }
                        p{
                            text-align:center;
                        }
                    }
                }
            }
            .optionButton{
              width:100%;
              height:7%;
              display:flex;
              justify-content:space-around;
              align-items:center;
              button{
                height:25px;
                padding:0 18px;
                outline:none;
                border-radius:10px;
                border:2px solid #e5e5e5;
                &:hover{
                  border:2px solid #f3c258;
                  background-color:#f3c258;
                }
              }
            }
            .vedio1{
              width:100%;
              height:91%;
              margin-top:-8px;
              flex-wrap:wrap;
              display:flex;
              justify-content:space-between;
             
              div{
                width:24%;
                height:49%;
                
                .videoBrowse{
                  width:100%;
                  height:75%;
                  background-color:purple;
                  position:relative;
                  img{
                    width:100%;
                    height:100%;
                  }
                  .footBar{
                    width:100%;
                    height:20%;
                    background-color:#3e3942;
                    position:absolute;
                    bottom:0px;
                    z-index:3;
                    display:flex;
                    justify-content:space-between;
                    color:#fff;
                    .foot-left{
                      display:flex;
                      width:45%;
                      height:100%;
                      align-items:center;
                      line-height:20px;
                        img{
                          width:22%;
                          height:68%;
                        }
                    }
                    .time{
                      width:33%;
                      
                      line-height:30px;
                    }
                  }
                }
                .filmReview{
                   width:100%;
                  height:25%;
                  padding:5px;
                  
                }
              }
            }
          
        }
      }
      .heroSkin{
        width:23%;
        height:100%;
        
         .hero-title{
          width:100%;
          height:6%;
          background-color:#fff;
          display:flex;
          justify-content:space-between;
          .content-title{
            width:200px;
            height:100%;
            font-size:20px;
            font-weight:700;
          }
          .content-more{
            width:70px;
            height:100%;
            font-size:15px;
            
          }
          div{
              display:flex;
              align-items:center;
              img{
                 height:80%;
              }
          }
        }
        .tab-title{
          width:100%;
          height:6%;
          background-color:#f5f5f5;
          display:flex;
          margin-top:5px;
          li{
            width:33.3333333%;
            text-align:center;
            line-height:27px;
            border-bottom:3px solid f5f5f5;
            &.active{
              border-bottom:3px solid orange;
            }
             .segmentation{
                height:20px;
                width:1px;
                background-color:#e1e1e1;
                margin-top:5px;
                margin-left:20px;
                position:absolute;
             }
          }
        }
        .tab-item{
           width:100%;
           height:85%;
           margin-top:10px;
           display:flex;
           flex-direction:column;
           justify-content:space-between;
           .weeksFromHero{
               height:90%;
               display:flex;
               flex-wrap:wrap;
               justify-content:space-between;
               li{
                   height:47.22222%;
                   width:23%;
                   margin-bottom:20px;
                   a{
                     img{
                         width:100%;
                         height:100%;
                     }
                   }
               }
           }
           .limitedFreeTime{
               height:10%;
               text-align:right;
               line-height:60px;
               img{
                   height:50%;
                   margin-bottom:-5px;
               }
           }
           .kyara{
             width:100%;
             height:50%;
             border:1px solid #ccc;
             .showKyara{
               width:100%;
               height:70%;
               background-color:blue;
               img{
                   width:100%;
                   height:100%;
               }
             }
             .newHero{
               width:100%;
               height:30%;
               
               padding:11px;
               .bigWord{
                 font-size:20px;
                 font-weight:700;
               }
             }
           }
           .showHero{
             width:100%;
             height:47%;
             
             display:flex;
             justify-content:space-between;
             img{
               width:23%;
               height:100%;
             }
           }
        }
      }
    }
    /*赛事中心*/
    .matchCenter{
      width:95%;
      height:855px;
      margin-left:2.3333333%;
      margin-top:40px;
      
      display:flex;
      justify-content:space-between;
      .professionalLeague{
        width:75%;
        height:100%;
        
        .title{
          width:100%;
          height:5%;
          background-color:#fff;
          display:flex;
          justify-content:space-between;
          .content-title{
            width:200px;
            height:100%;
            font-size:20px;
            font-weight:700;
            img{
              margin-right:6px;
            }
          }
          .content-more{
            width:70px;
            height:100%;
            font-size:15px;
            
          }
          div{
              display:flex;
              align-items:center;
              img{
                 height:50%;
              }
          }
        }
        .tab-title{
          width:100%;
          height:4%;
          background-color:#f5f5f5;
          display:flex;
          margin-top:5px;
          
          li{
            width:14.222222222%;
            text-align:center;
            line-height:36px;
            border-bottom:3px solid f5f5f5;
            &.active{
              border-bottom:3px solid orange;
            }
            .split{
                height:20px;
                width:0.1%;
                background-color:#e1e1e1;
                margin-top:8px;
                margin-left:30px;
                position:absolute;
            }
          }
        }
        .tab-items{
          width:100%;
           height:88.777776666%;
           margin-top:15px;
           
           display:flex;
           flex-direction:column;
           justify-content:space-between;
           .kingGlory{
             width:100%;
             height:49%;
             
             display:flex;
             justify-content:space-between;
             .left-view{
                width:24%;
                height:100%;
                img{
                    width:100%;
                    height:100%;
                }
             }
             .massOrganization{
                width:74.6666666%;
                height:100%;
                
                .kingtitle{
                  width:100%;
                  height:20%;
                  padding:5px 0;
                  
                  div{
                    font-size:27px;
                    overflow:hidden;/*超出长度的文字隐藏*/
			        text-overflow:ellipsis;/*文字隐藏以后添加省略号*/
			        white-space:nowrap;/*强制不换行*/
                  }
                  p{
                    margin-top:7px;
                    font-size:15px;
                    overflow:hidden;/*超出长度的文字隐藏*/
			        text-overflow:ellipsis;/*文字隐藏以后添加省略号*/
			        white-space:nowrap;/*强制不换行*/

                  }
                }
                .commtentList{
                  width:100%;
                  height:80%;
                  
                  li{
                    height:16.6666666%;
                    font-size:17px;
                    display:flex;
                    align-items:center;
                    
                    
                    button{
                      height:25px;
                      border:none;
                      outline:none;
                      border-radius:13px;
                      padding:5px 10px;
                      background-color:#e3e3e3;
                    }
                    .content{
                      margin-left:20px;
                      &:hover{
                        text-decoration:underline;
                      }
                    }
                    .flashtime{
                      color:#b8c4db;
                    }
                  }
                }
             }
           }
           .pre-view{
             width:100%;
             height:49%;
             
            .vedio1{
              width:100%;
              height:91%;
              
              flex-wrap:wrap;
              display:flex;
              justify-content:space-between;
             
              div{
                width:24%;
                height:49%;
                
                .videoBrowse{
                  width:100%;
                  height:75%;
                  background-color:purple;
                  position:relative;
                  img{
                    width:100%;
                    height:100%;
                  }
                  .footBar{
                    width:100%;
                    height:20%;
                    background-color:#3e3942;
                    position:absolute;
                    bottom:0px;
                    z-index:3;
                    display:flex;
                    justify-content:space-between;
                    color:#fff;
                    .foot-left{
                      display:flex;
                      width:45%;
                      height:100%;
                      align-items:center;
                      line-height:20px;
                        img{
                          width:22%;
                          height:68%;
                        }
                    }
                    .time{
                      width:33%;
                      
                      line-height:30px;
                    }
                  }
                }
                .filmReview{
                   width:100%;
                  height:25%;
                  padding:5px;
                  
                }
              }
            }
           }
        }
      }
      .agendaForCompetition{
        width:23%;
        height:67%;
        
         .title{
          width:100%;
          height:6%;
          margin-top:4px;
          background-color:#fff;
          display:flex;
          justify-content:space-between;
          align-items:center;
          .content-title{
            width:200px;
            height:100%;
            font-size:20px;
            font-weight:700;
          }
          .buyTicket{
            height:26px;
            width:84px;
            border:2px solid #f3c258;
            border-radius:5px;
            margin-right:20px;
            img{
              margin-right:3px;
            }
          }
          .content-more{
            width:87px;
            height:100%;
            font-size:15px;
            
          }
          div{
              display:flex;
              align-items:center;
              img{
                 height:80%;
              }
          }
        }
        .schedule{
           width:100%;
           height:10%;
           background-color:blue;
        }
        .schedule-table{
           width:100%;
           height:53.55555%;
           
           .tableTitle{
             width:100%;
             height:10%;
             background-color:#f5f5f5;
             display:flex;
             justify-content:space-around;
             .time{
               margin-left:-6px;
             }
             .ytg{
               margin-left:-15px;
             }
             .team{
               margin-right:-7px;
             }
             li{
               height:100%;
               line-height:30px;
             }
           }
           .tableBody{
             width:100%;
             height:90%;
             padding-top:-4px;
             li{
                height:33.333333%;
               display:flex;
               border-bottom:1px solid #e5e5e5;
               padding-top:20px;
               img{
                 height:50%;
               }
               .date{
                 width:30%;
                 height:100%;
                
                 line-height:75px;
                 text-align:center;
               }
               .blackPineapple{
                 width:30%;
                 height:100%;
                 
                 display:flex;
                 flex-direction:column;
                 align-items:center;
               }
               .vs{
                 width:10%;
                 height:100%;
                 padding-left:10px;
                 line-height:75px;
                 text-align:center;
                 color:#fbcf6a;
                 font-size:15px;
               }
               .ts{
                 width:30%;
                 height:100%;
                 
                 display:flex;
                 flex-direction:column;
                 align-items:center;
               }
             }
           }
        }
        .schedule-img{
           width:100%;
           height:40%;
           background-color:yellow;
           img{
             width:100%;
             height:100%;
           }
        }
      }
    }
  
</style>
