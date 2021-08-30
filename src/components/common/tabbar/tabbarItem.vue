<template>
  <li @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="styleColor"><slot name="item-text"></slot></div>
  </li>
</template>

<script>
export default {
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    styleColor() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "#FF8E97",
    },
  },
  methods: {
    itemClick() {
      this.$router.push(this.path).catch((err) => err);
    },
  },
};
</script>

<style>
.tabbar li {
  flex: 1;
  list-style: none;
}

.tabbar li img {
  width: 20px;
  margin-top: 5px;
  vertical-align: middle;
}

.active {
  color: #ff8e97;
}
</style>