<template>
  <header>
    <div class="logo-main">
      Deck<span class="main-logo-dot-highlighter">.</span>
    </div>
    <nav-bar />
    <expanding-burger-menu />
  </header>
</template>

<script>
import NavBar from "./NavBar.vue";
import ExpandingBurgerMenu from "./ExpandingBurgerMenu.vue";
export default {
  components: {
    NavBar,
    ExpandingBurgerMenu
  }
};
</script>

<style scoped>
header {
  padding: 2.4306% 2.7778%;
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 2px 0px 0px #ebebeb;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.logo-main {
  /* position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 2.7778%; */
  font-family: "Lato", sans-serif;
  font-weight: bold;
  font-size: 24px;
  height: 24px;
}
.main-logo-dot-highlighter {
  color: #ff565c;
  position: absolute;
  font-size: 40px;
  transform: translateY(-32%);
}
</style>
