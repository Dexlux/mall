<template>
  <ul class="swiper">
    <li v-for="(item, index) in banners" :key="index" v-show="index === n">
      <a :href="item.link"
        ><img
          :src="item.image"
          alt=""
          @touchstart="touchstart"
          @touchend="touchend"
      /></a>
    </li>
    <div class="circle">
      <a
        href=""
        v-for="(item, index) in banners"
        :key="index"
        :class="{ active: index === n }"
        @click.prevent="circleClick(index)"
      ></a>
    </div>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      n: 0,
      timer: null,
    };
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    changeN() {
      this.timer = setInterval(() => {
        if (this.n >= this.banners.length - 1) {
          this.n = 0;
        } else {
          this.n++;
        }
      }, 3000);
    },
    circleClick(index) {
      this.n = index;
    },
    touchstart() {
      clearInterval(this.timer);
    },
    touchend() {
      this.changeN();
    },
  },
  computed: {},
  mounted() {
    this.changeN();
  },
  beforeDestroy() {
    //页面关闭前关闭定时器
    clearInterval(this.timer);
  },
};
</script>

<style>
.swiper {
  position: relative;
}
.swiper img {
  width: 100%;
}
.swiper .circle {
  position: absolute;
  bottom: 0;
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper .circle a {
  display: inline-block;
  margin-right: 5px;
  background: rgba(255, 255, 255, 0.5);
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.active {
  color: #fff;
  background: #fff !important;
}
</style>