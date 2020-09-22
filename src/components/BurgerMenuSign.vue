<template>
  <div class="burger-menu-sign" @click="toggleMenu">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      this.$emit("toggle-menu");
    }
  }
};
</script>

<style scoped>
.burger-menu-sign {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  cursor: pointer;
}
.line {
  border-bottom: 3px solid black;
  width: 100%;
  height: 0;
}
</style>
