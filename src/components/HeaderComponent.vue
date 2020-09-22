<template>
  <header>
    <div class="logo-main">
      Deck<span class="main-logo-dot-highlighter">.</span>
    </div>
      <nav-bar :style='{ visibility: menuVisibility }'/>
    <burger-menu-sign @toggle-menu="toggleHandler()"/>
  </header>
</template>

<script>
import NavBar from "./NavBar.vue";
import BurgerMenuSign from "./BurgerMenuSign.vue";
export default {
  components: {
    NavBar,
    BurgerMenuSign
  },
  data() {
    return {
      menuToggled: false,
    };
  },
  methods: {
    toggleHandler() {
      this.menuToggled = !this.menuToggled;
    }
  },
  computed: {
    viewportWidth() {
      return window.innerWidth;
    },
    menuVisibility() {
      return this.menuToggled ? 'visible' : 'hidden';
    }
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
  align-items: center;
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
.nav-bar {
  width: 61%;
  margin-left: -20%;
  z-index: 30;
}

@media screen and (max-width: 1420px) {
  .nav-bar {
    position: absolute;
    right: 2.4306%;
    flex-flow: column nowrap;
    background-color: white;
    width: min-content;
    top: 59px;
    box-shadow: 0 0px 4px 0 black;
    width: auto !important;
  }
}
</style>
<style>
    .nav-bar a {
    padding: 15px 30px !important;
    margin: 0 !important;
  }
</style>
