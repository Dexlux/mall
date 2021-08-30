<template>
  <div id="app">
    <router-view />
    <TabBar />
  </div>
</template>

<script>
import TabBar from "components/content/maintabbar/mainTabbar";

export default {
  name: "App",
  components: {
    TabBar,
  },
};
</script>

<style>
@import "assets/css/base.css";
</style>
