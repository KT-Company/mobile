<template>
  <div id="app">
    <header>
      <img src="./assets/img/nav.jpg" alt="" @click="tab(1)">
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
            <a v-for="(item,index) in caseList" :class="{'active-case':index===activeCase}" href="javascript:;"
               @click="jumpLink(item.video || item.link, !!item.video)"
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
    <section class="zhan"></section>
    <footer>
      <div class="wechat active" @click="tab(0)" ref="telNumber" data-clipboard-target="#tel_num">
        <i class="iconfont">&#xe62b;</i>
        <span>微信</span>
      </div>
      <div class="tel" @click="tab(1)">
        <i class="iconfont">&#xe969;</i>
        <span>电话</span>
      </div>
    </footer>

    <input type="text" value="15826089334" id="tel_num" style="visibility: hidden;width:10vh;">

    <van-overlay :show="showVideoMask" z-index="2147483647" @click="showVideoMask=false">
      <div class="video-box" @click.stop>
        <video class="video" :src="videoSrc" controls></video>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import Vue from 'vue';
import {Swipe, SwipeItem, Overlay} from 'vant';
import ClipboardJS from 'clipboard'

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Overlay)

export default {
  name: 'App',
  data() {
    return {
      flag: true,
      caseList: [
        {
          link: 'https://kantu3d.com/demo/2109/demoAll/dist/pages/september21/logistics/',
          img: require('./assets/img/example8.jpg'),
          name: '智慧物流'
        }, {
          link: 'https://kantu3d.com/demo/2109/demoAll/dist/pages/september21/mercuryStation/',
          img: require('./assets/img/example5.jpg'),
          name: '水汞站'
        },
        {
          link: 'https://kantu3d.com/demo/2110/generator/',
          img: require('./assets/img/example12.png'),
          name: '发电机'
        },
        {
          video: 'https://kantu3d.com/videos/smartPark.mp4',
          img: require('./assets/img/example1.jpg'),
          name: '智慧园区'
        },
        {
          video: 'https://kantu3d.com/videos/factory.mp4',
          img: require('./assets/img/example2.jpg'),
          name: '智慧工厂'
        },
        {
          video: 'https://kantu3d.com/videos/dataCenter.mp4',

          img: require('./assets/img/example16.png'),
          name: '机房可视化'
        },
        {
          video: 'https://kantu3d.com/videos/energy.mp4',
          img: require('./assets/img/example7.jpg'),
          name: '风力发电'
        },
        {
          video: 'https://kantu3d.com/videos/IntelligentBuilding.mp4',

          img: require('./assets/img/example13.png'),
          name: '智慧楼宇'
        },
        {
          video: 'https://kantu3d.com/videos/substation.mp4',
          img: require('./assets/img/example4.jpg'),
          name: '变电站'
        }],
      activeCase: 0,
      caseTimer: null,
      showVideoMask: false,
      videoSrc: ''
    };
  },
  mounted() {
    let clip = new ClipboardJS(this.$refs.telNumber)
    clip.on('success', () => {
      alert('复制成功微信 15826089334 成功')
      window.open('weixin://', '_self')
    })

    this.caseTimer = setInterval(() => {
      this.activeCase === this.caseList.length - 1 ? this.activeCase = 0 : this.activeCase++
    }, 1000)
  },
  methods: {
    tab(index) {
      switch (index) {
        case 0:
          break
        case 1:
          window.open('tel:18983920157', '_self')
      }
    },
    // eslint-disable-next-line no-unused-vars
    jumpLink(link, isVideo) {
      if (isVideo) {
        this.videoSrc = link;
        this.showVideoMask = true
      } else {
        // 跳转链接
        window.open(link,'_self')
      }
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
  /*height: 1300px;*/
}

.case .showcase {
  width: 690px;
  height: 874px;
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
  /*height: 110px;*/
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
  height: 80px;
  border-radius: 40px;
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

.video-box {
  box-sizing: border-box;
  position: relative;
  top: 50%;
  left: 50%;
  width: 80vw;
  padding: 15px 10px;
  transform: translate(-50%,-70%);
  background: #FFF;
}

.video {
  width: 100%;
  vertical-align: bottom;
}
</style>
