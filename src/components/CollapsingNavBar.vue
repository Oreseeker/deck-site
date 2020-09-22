<template>
  <div class="collapsing-menu">
    <nav-bar v-show="toggleNavBar" />
    <burger-menu-sign @toggle-menu="toggleNavBar = !toggleNavBar" />
  </div>
</template>

<script>
import BurgerMenuSign from "./BurgerMenuSign.vue";
import NavBar from "./NavBar.vue";
export default {
  components: {
    BurgerMenuSign,
    NavBar
  },
  data() {
    return {
      toggleNavBar: true
    };
  }
};
</script>

<style scoped>
.collapsing-menu {
  overflow: hidden;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
}
</style>

<style>
.collapsing-menu {
  position: relative;
}
.collapsing-menu {
  box-sizing: border-box;
}
.nav-bar {
  width: 60.58%;
  margin-right: 390px;
}
</style>
