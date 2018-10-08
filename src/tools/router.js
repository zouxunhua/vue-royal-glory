// Vue.use
import Vue from "vue";
// 引入路由模块
import VueRouter from "vue-router";

// 引入自己写的组件组件
import index from "../components/index.vue";
import gameData from "../components/gameData.vue";
import contentCenter from "../components/contentCenter.vue";
import racecenter from "../components/racecenter.vue";
import shopMall from "../components/shopMall.vue";
import topic from "../components/topic.vue";





// 使用路由中间件 $route
Vue.use(VueRouter);



const router = new VueRouter({
    routes: [
      // 访问的是 / 打到(重定向)  growthGuardian
      {
        path: "/",
        redirect: "/index"
      },
      //-------------------------------顶部导航链接----------------------------------
      // index 都显示 index这个组件
      {
        path: "/index",
        component: index,
      },
      {
        path: "/gameData",
        component: gameData
      },
      {
        path: "/contentCenter",
        component: contentCenter
      },
      {
        path: "/racecenter",
        component: racecenter
      },
      {
        path: "/shopMall",
        component: shopMall
      },
      //-------------------------------index.vue内部链接----------------------------------
      {
        path: "/topic",
        component: topic
      },

    
    ]
  });


  export default router;