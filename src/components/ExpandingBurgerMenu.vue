<template>
  <div class="expanding-burger-menu">
      <burger-menu-sign @toggle-menu="menuToggled=!menuToggled"/>
  </div>
</template>

<script>
import BurgerMenuSign from "./BurgerMenuSign.vue";
export default {
    components: {
        BurgerMenuSign
    },
    data() {
        return {
            menuItems: ['Contacts', 'About us'],
            menuToggled: false
        }
    }
}
</script>

<style scoped>
.expanding-burger-menu {
    position: relative;
}
.burger-menu-content {
    position: absolute;
    background-color: white;
    z-index: 10;
    right: 0;
}
.burger-menu-content a {
    padding: 20px 50px;
    display: block;
    width: max-content;
    text-decoration: none;
    color: #6a6b6f;
    font-family: "Lato", sans-serif;
}
</style>