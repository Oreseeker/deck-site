<template>
  <nav class="nav-bar">
    <a href="#" v-for="element in menuElements" :key="element.name">
      {{ element.name }}
    </a>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuElements: [
        {
          name: "Technology"
        },
        {
          name: "Ideas"
        },
        {
          name: "Leadership"
        },
        {
          name: "Video"
        },
        {
          name: "News"
        },
        {
          name: "Finance"
        },
        {
          name: "Entertainment"
        }
      ]
    };
  }
};
</script>
<style scoped>
nav {
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-flow: row nowrap;
  width: 100%;
}
nav a {
  text-decoration: none;
  font-family: "Oswald", sans-serif;
  font-weight: medium;
  color: #d2d2d3;
  margin: 0.5% 4.4444%;
}
</style>
