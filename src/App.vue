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
  },
  data() {
    return {
    };
  }
};
</script>

<style>
@font-face {
  font-family: "Oswald Semibold Normal";
  src: url("./assets/fonts/Oswald-SemiBold.ttf");
}
@font-face {
  font-family: "Oswald Medium Normal";
  src: url('./assets/fonts/Oswald-Medium.ttf');
}
@font-face {
  font-family: "Lato Regular Normal";
  src: url('./assets/fonts/Lato-Regular.ttf');
}
@font-face {
  font-family: "Lato Bold Normal";
  src: url('./assets/fonts/Lato-Bold.ttf');
}
@font-face {
  font-family: "Lato";
  font-weight: black;
  font-style: italic;
  src: url('./assets/fonts/Lato-BlackItalic.ttf');
}
@font-face {
  font-family: "Lato";
  font-weight: black;
  font-style: normal;
  src: url('./assets/fonts/Lato-Black.ttf'); 
}
body {
  margin: 0;
}
.app {
  width: 100%;
  margin: 0 auto;
}

.cards-wrapper {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
.ie-min-content {
  display: -ms-grid;
  -ms-grid-columns: min-content;
}

@media screen and (max-width: 980px) {
  section.card {
    width: 355px !important;
    margin: 5.7292% 1.1068% !important;
  }
  .cards-wrapper {
    padding: 5.0781% 0.3906% 13.7370% 0.3906%;
  }
}

</style>
