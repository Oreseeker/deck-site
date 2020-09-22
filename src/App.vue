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
  font-family: "Oswald";
  font-weight: bold;
  src: url('./assets/fonts/Oswald-Bold.ttf');
}
@font-face {
  font-family: "Oswald";
  font-weight: extralight;
  src: url('./assets/fonts/Oswald-ExtraLight.ttf');
}
@font-face {
  font-family: "Oswald";
  font-weight: light;
  src: url('./assets/fonts/Oswald-Light.ttf');
}
@font-face {
  font-family: "Oswald";
  font-weight: medium;
  src: url('./assets/fonts/Oswald-Medium.ttf');
}
@font-face {
  font-family: "Oswald";
  font-weight: regular;
  src: url('./assets/fonts/Oswald-Regular.ttf');
}
@font-face {
  font-family: "Oswald";
  font-weight: semibold;
  src: url('./assets/fonts/Oswald-SemiBold.ttf');
}
@font-face {
  font-family: "Lato";
  font-weight: semibold;
  font-style: italic;
  src: url('./assets/fonts/Lato-SemiboldItalic.ttf');
}
@font-face {
  font-family: "Lato";
  font-weight: semibold;
  font-style: normal;
  src: url('./assets/fonts/Lato-Semibold.ttf');
}
@font-face {
  font-family: "Lato";
  font-weight: regular;
  font-style: normal;
  src: url('./assets/fonts/Lato-Regular.ttf');
}
@font-face {
  font-family: "Lato";
  font-weight: medium;
  font-style: italic;
  src: url('./assets/fonts/Lato-MediumItalic.ttf');
}
@font-face {
  font-family: "Lato";
  font-weight: medium;
  font-style: normal;
  src: url('./assets/fonts/Lato-Medium.ttf');
}
@font-face {
  font-family: "Lato";
  font-weight: light;
  font-style: italic;
  src: url('./assets/fonts/Lato-LightItalic.ttf');
}
@font-face {
  font-family: "Lato";
  font-weight: light;
  font-style: normal;
  src: url('./assets/fonts/Lato-Light.ttf');
}
@font-face {
  font-family: "Lato";
  font-weight: normal;
  font-style: italic;
  src: url('./assets/fonts/Lato-Italic.ttf');
}
@font-face {
  font-family: "Lato";
  font-weight: bold;
  font-style: italic;
  src: url('./assets/fonts/Lato-BoldItalic.ttf');
}
@font-face {
  font-family: "Lato";
  font-weight: bold;
  font-style: normal;
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
</style>
