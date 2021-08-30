<template>
  <div>
    <NavBar class="index-navabr"> <span slot="center">首页</span> </NavBar>
    <Swiper :banners="banners"> </Swiper>
    <RecommendedView :recommends="recommends"> </RecommendedView>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/navbar";
import { getIndexMultidata } from "network/index";
import Swiper from "views/index/childComps/Swiper.vue";
import RecommendedView from "views/index/childComps/RecommendView.vue";
export default {
  components: {
    NavBar,
    Swiper,
    RecommendedView,
  },
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  created() {
    getIndexMultidata().then((res) => {
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
    });
  },
};
</script>

<style>
.index-navabr {
  background-color: var(--color-tint);
  color: #fff;
}
</style>