<template>
  <ul class="tabbar">
    <slot></slot>
  </ul>
</template>

<script>
export default {};
</script>

<style>
.tabbar {
  height: 49px;
  display: flex;
  text-align: center;
  background-color: #f6f6f6;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>