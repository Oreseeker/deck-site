<template>
  <section class="card">
    <img :src="cardImageSrcComputed" />
    <div class="ie-min-content">  <!-- Forcing min-content to work in IE -->
      <div class="category">
        <slot name="category"></slot>
      </div>
    </div> <!-- Forcing min-content to work in IE -->
    <h2>
      <slot name="header"></slot>
    </h2>
    <p>
      <slot name="text"></slot>
    </p>
  </section>
</template>

<script>
export default {
  props: {
    cardImageSrc: {
      type: String,
      required: true
    }
  },
  computed: {
    cardImageSrcComputed() {
      return require(`../assets/images/${this.cardImageSrc}`);
    }
  }
};
</script>

<style scoped>
section.card {
  font-family: "Lato Regular Normal", sans-serif;
  font-size: 14px;
  width: 432px;
  display: inline-block;
  margin: 18px;
  vertical-align: top;
}
section.card img {
  max-width: 100%;
}
h2 {
  font-weight: bold;
  font-size: 1.8571em; /*26 px*/
  color: #1d1f24;
  font-family: "Lato Bold Normal";
}
p {
  font-size: 1.2857em; /*18 px*/
  color: #6a6b6f;
  font-weight: normal;
}
.category {
  position: relative;
  background-color: #ff565c;
  padding: 10px 28px;
  color: white;
  margin-top: -60px;
  margin-left: -4px;
  margin-bottom: 52px;
  z-index: 20;
  width: min-content;
  font-family: "Oswald Semibold Normal", sans-serif;
}

img {
  position: relative;
  z-index: 1;
}
</style>
