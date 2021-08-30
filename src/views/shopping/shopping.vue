<template>
  <div>
    <NavBar class="me-navabr"> <span slot="center">购物车</span> </NavBar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/navbar";
export default {
  components: {
    NavBar,
  },
};
</script>

<style>
.me-navabr {
  background-color: var(--color-tint);
  color: #fff;
}
</style>