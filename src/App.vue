<template>
  <div class="app">
    <header-component />
    <div class="cards-wrapper">
      <card cardImageSrc="camera.png">
        <template v-slot:category>TECHNOLOGY</template>
        <template v-slot:header
          >Using Banners Will Increase Trade Show Traffic</template
        >
        <template v-slot:text>
          There is a lot of exciting stuff going on in the stars above us that
          makes astronomy so much fun.
        </template>
      </card>
      <card cardImageSrc="phone.png">
        <template v-slot:category>TECHNOLOGY</template>
        <template v-slot:header
          >Search Engine Optimization And Advertising</template
        >
        <template v-slot:text>
          There is a lot of exciting stuff going on in the stars above us that
          makes astronomy so much fun.
        </template>
      </card>
      <card cardImageSrc="watch.png">
        <template v-slot:category>FINANCE</template>
        <template v-slot:header
          >Search Engine Optimization And Advertising</template
        >
        <template v-slot:text>
          There is a lot of exciting stuff going on in the stars above us that
          makes astronomy so much fun.
        </template>
      </card>
      <card cardImageSrc="watch.png">
        <template v-slot:category>FINANCE</template>
        <template v-slot:header
          >Search Engine Optimization And Advertising</template
        >
        <template v-slot:text>
          There is a lot of exciting stuff going on in the stars above us that
          makes astronomy so much fun.
        </template>
      </card>
      <card cardImageSrc="watch.png">
        <template v-slot:category>FINANCE</template>
        <template v-slot:header
          >Search Engine Optimization And Advertising</template
        >
        <template v-slot:text>
          There is a lot of exciting stuff going on in the stars above us that
          makes astronomy so much fun.
        </template>
      </card>
      <card cardImageSrc="camera.png">
        <template v-slot:category>TECHNOLOGY</template>
        <template v-slot:header
          >Using Banners Will Increase Trade Show Traffic</template
        >
        <template v-slot:text>
          There is a lot of exciting stuff going on in the stars above us that
          makes astronomy so much fun.
        </template>
      </card>
      <card cardImageSrc="camera.png">
        <template v-slot:category>TECHNOLOGY</template>
        <template v-slot:header
          >Using Banners Will Increase Trade Show Traffic</template
        >
        <template v-slot:text>
          There is a lot of exciting stuff going on in the stars above us that
          makes astronomy so much fun.
        </template>
      </card>
    </div>
    <footer-component />
  </div>
</template>

<script>
import Card from "./components/Card.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    Card,
    HeaderComponent,
    FooterComponent
  }
};
</script>

<style>
body {
  margin: 0;
}
.app {
  width: 1440px;
  margin: 0 auto;
}

.cards-wrapper {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
</style>
