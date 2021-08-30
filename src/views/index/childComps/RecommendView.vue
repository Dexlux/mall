<template>
  <div class="recommends">
    <div v-for="(item, index) in recommends" :key="index" class="recommendItem">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  mounted() {
    console.log(this.recommends);
  },
};
</script>

<style>
.recommends {
  display: flex;
  padding-bottom: 10px;
  border-bottom: 10px solid #eee;
}
.recommendItem {
  flex: 1;
  text-align: center;
  padding: 5px;
  font-size: 12px;
}
.recommendItem img {
  width: 100%;
}
.recommendItem a {
  color: #878789;
  text-decoration: none;
}
</style>