<template>
  <tabbar>
    <tabbarItem path="/index" activeColor="#FF8E97">
      <img src="~assets/img/tabbar/index/index.svg" alt="" slot="item-icon" />
      <img
        src="~assets/img/tabbar/index/indexa.svg"
        alt=""
        slot="item-icon-active"
      />
      <div slot="item-text">首页</div>
    </tabbarItem>
    <tabbarItem path="/fenlei" activeColor="#FF8E97">
      <img src="~assets/img/tabbar/fenlei/fenlei.svg" alt="" slot="item-icon" />
      <img
        src="~assets/img/tabbar/fenlei/fenleia.svg"
        alt=""
        slot="item-icon-active"
      />
      <div slot="item-text">分类</div>
    </tabbarItem>
    <tabbarItem path="/shopping">
      <img
        src="~assets/img/tabbar/shopping/shopping.svg"
        alt=""
        slot="item-icon"
      />
      <img
        src="~assets/img/tabbar/shopping/shoppinga.svg"
        alt=""
        slot="item-icon-active"
      />
      <div slot="item-text">购物车</div>
    </tabbarItem>
    <tabbarItem path="/me">
      <img src="~assets/img/tabbar/me/me.svg" alt="" slot="item-icon" />
      <img src="~assets/img/tabbar/me/mea.svg" alt="" slot="item-icon-active" />
      <div slot="item-text">我的</div>
    </tabbarItem>
  </tabbar>
</template>

<script>
import tabbar from "components/common/tabbar/tabbar.vue";
import tabbarItem from "components/common/tabbar/tabbarItem.vue";
export default {
  components: {
    tabbar,
    tabbarItem,
  },
};
</script>

<style>
</style>