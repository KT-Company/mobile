<template>
  <div id="app">
    <header>
      <img src="./assets/img/nav.jpg" alt="">
    </header>
    <section>
      <!-- 轮播1 -->
      <el-carousel :indicator="false" height="315px">
        <el-carousel-item>
          <img src="./assets/img/swipe1 (1).jpg" alt="">
        </el-carousel-item>
        <el-carousel-item>
          <img src="./assets/img/swipe1 (2).jpg" alt="">
        </el-carousel-item>
        <el-carousel-item>
          <img src="./assets/img/swipe1 (3).jpg" alt="">
        </el-carousel-item>
        <el-carousel-item>
          <img src="./assets/img/swipe1 (4).jpg" alt="">
        </el-carousel-item>
      </el-carousel>
      <img src="./assets/img/main-area.jpg" alt="">
      <el-carousel :indicator="false" height="550px">
        <el-carousel-item>
          <img src="./assets/img/main-swiper1.jpg" height="550" alt="">
        </el-carousel-item>
        <el-carousel-item>
          <img src="./assets/img/main-swiper2.jpg" height="550" alt="">
        </el-carousel-item>
        <el-carousel-item>
          <img src="./assets/img/main-swiper3.jpg" height="550" alt="">
        </el-carousel-item>
        <el-carousel-item>
          <img src="./assets/img/main-swiper4.jpg" height="550" alt="">
        </el-carousel-item>
      </el-carousel>
      <!-- 案例 -->
      <div class="case">
        <img src="./assets/img/case2.png" alt="">
        <div class="content">
          <div class="showcase">
            <a v-for="(item,index) in caseList" :class="{'active-case':index===activeCase}" :href="item.link"
               :key="item.name">
              <img :src="item.img" alt="">
              <div>{{ item.name }}</div>
            </a>
          </div>
        </div>
      </div>
      <!-- 详情 -->
      <div class="detail">
        <img src="./assets/img/detail_1.jpg" alt="">
        <img src="./assets/img/detail_2.jpg" alt="">
        <img src="./assets/img/detail_3.jpg" alt="">
      </div>
      <!-- 详情 卡片轮播2 -->
      <div class="swipe2">
        <el-carousel :indicator="false" height="429px">
          <el-carousel-item>
            <img src="./assets/img/swipe2 (1).jpg" alt="">
          </el-carousel-item>
          <el-carousel-item>
            <img src="./assets/img/swipe2 (2).jpg" alt="">
          </el-carousel-item>
          <el-carousel-item>
            <img src="./assets/img/swipe2 (3).jpg" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 流程 -->
      <div class="process">
        <img src="./assets/img/process.jpg" alt="">
        <img src="./assets/img/process1.jpg" alt="">
      </div>
      <!-- 流程轮播3 -->
      <div class="swipe3">
        <el-carousel :indicator="false" height="540px">
          <el-carousel-item>
            <img src="./assets/img/swipe3 (1).jpg" alt="">
          </el-carousel-item>
          <el-carousel-item>
            <img src="./assets/img/swipe3 (2).jpg" alt="">
          </el-carousel-item>
          <el-carousel-item>
            <img src="./assets/img/swipe3 (4).jpg" alt="">
          </el-carousel-item>
          <el-carousel-item>
            <img src="./assets/img/swipe3 (3).jpg" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 领域 -->
      <div class="area">
        <img src="./assets/img/area1.jpg" alt="">
      </div>
      <!-- 轮播4 -->
      <div class="swipe4">
        <el-carousel :indicator="false" height="562px">
          <el-carousel-item>
            <img src="./assets/img/swipe4 (1).jpg" alt="">
          </el-carousel-item>
          <el-carousel-item>
            <img src="./assets/img/swipe4 (2).jpg" alt="">
          </el-carousel-item>
          <el-carousel-item>
            <img src="./assets/img/swipe4 (3).jpg" alt="">
          </el-carousel-item>
          <el-carousel-item>
            <img src="./assets/img/swipe4 (4).jpg" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 伙伴 -->
      <div class="partner">
        <img src="./assets/img/partner.jpg" alt="">
        <img src="./assets/img/partner2.jpg" alt="">
        <img src="./assets/img/kantu.jpg" alt="">
        <div class="copy">重庆瞰图科技有限公司</div>
      </div>
    </section>
    <!--      <section class="zhan"></section>-->
    <!--      <footer>-->
    <!--        <div :class="flag?'wechat active':'wechat'" @click="tab()">-->
    <!--          <i class="iconfont">&#xe62b;</i>-->
    <!--          <span>微信</span>-->
    <!--        </div>-->
    <!--        <div  :class="flag?'tel':'tel active'" @click="tab()">-->
    <!--          <i class="iconfont">&#xe969;</i>-->
    <!--          <span>电话</span>-->
    <!--        </div>-->
    <!--      </footer>-->
  </div>
</template>

<script>
import Vue from 'vue';
import {Swipe, SwipeItem} from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);

export default {
  name: 'App',
  data() {
    return {
      flag: true,
      caseList: [{
        link: 'https://kantu3d.com/demo/2109/demoAll/dist/pages/september21/mercuryStation/',
        img: require('./assets/img/example5.jpg'),
        name: '水汞站'
      },
        {
          link: 'https://kantu3d.com/demo/2109/demoAll/dist/pages/september21/photovoltaic/',
          img: require('./assets/img/example6.jpg'),
          name: '光伏园区'
        },
        {
          link: 'https://kantu3d.com/demo/2109/demoAll/dist/pages/september21/energy/',
          img: require('./assets/img/example7.jpg'),
          name: '风力发电'
        },
        {
          link: 'https://kantu3d.com/demo/2109/demoAll/dist/pages/september21/logistics/',
          img: require('./assets/img/example8.jpg'),
          name: '智慧物流'
        },
        {
          link: 'https://kantu3d.com/demo/2109/demoAll/dist/pages/september21/equipment/',
          img: require('./assets/img/example9.jpg'),
          name: '智能设备'
        },
        {
          link: 'https://kantu3d.com/demo/2109/demoAll/dist/pages/september21/gas/',
          img: require('./assets/img/example10.jpg'),
          name: '智能加油站'
        }],
      activeCase: 0,
      caseTimer: null
    };
  },
  mounted() {
    this.caseTimer = setInterval(() => {
      this.activeCase === this.caseList.length - 1 ? this.activeCase = 0 : this.activeCase++
    }, 1000)
  },
  methods: {
    tab() {
      this.flag = !this.flag
    }
  },
  beforeDestroy() {
    clearInterval(this.caseTimer)
  }
}
</script>

<style>
img {
  width: 750px;
}

* {
  margin: 0;
  padding: 0;
}

header img {
  height: 116px;
}

.case {
  height: 1300px;
}

.case .showcase {
  width: 690px;
  height: 554px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.showcase a {
  display: block;
  width: 221px;
  height: 265px;
  flex-direction: column;
  text-decoration: none;
    box-sizing: border-box;
}

.showcase a img {
  width: 221px;
  height: 191px;
}

.showcase > .active-case > img {
  /*box-shadow: 0 0 5px 5px rgb(50, 199, 164);*/
  border: 5px solid #3cb3ff;
}


.showcase a div {
  width: 221px;
  height: 73px;
  text-align: center;
  line-height: 73px;
  font-family: PingFangSC-Regular;
  outline: none;
  color: #000;
  font-size: 26px;
}

.swipe2 {
  height: 900px;
}

.swipe2 .el-carousel__item img {
  height: 893px;
}

.swipe3 {
  height: 1200px;
}

.swipe4 {
  height: 1250px;
}

.partner {
  width: 750px;
  background: #f0f0f0;
}

.partner .copy {
  text-align: center;
  width: 100%;
  line-height: 1.01902174rem;
  font-weight: normal;
  font-family: PingFangSC-Regular;
  color: #999;
  opacity: .8;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 20px;
}

/* 底部 */
.zhan {
  height: 110px;
}

footer {
  width: 750px;
  height: 110px;
  display: flex;
  justify-content: space-around;
  background: #fefefe;
  align-items: center;
  position: fixed;
  z-index: 10;
  bottom: 0;
}

.wechat, .tel {
  width: 333px;
  height: 68px;
  border-radius: 34px;
  border: 1px solid #fe7235;
  font-size: 28px;
  color: #fe7235;
  display: flex;
  justify-content: center;
  align-items: center;
}

.active {
  background: #fe7235;
  color: #fefefe;
}

.wechat .iconfont, .tel .iconfont {
  font-size: 33px;
}

.wechat span, .tel span {
  margin-left: 10px;
}
</style>
