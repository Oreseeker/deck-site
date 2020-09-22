<template>
  <footer>
    <div class="footer-left">
      <div class="logo">Deck<span class="highlighted-dot">.</span></div>
      <div class="copyright">
        © 2018 Deck <br />
        Component based UI kit
      </div>
    </div>
    <div class="footer-middle">
      <a href="#" v-for="item in footerMenuElements" :key="item.name">
        {{ item.name }}</a
      >
    </div>
    <div class="footer-right">
      <div class="follow-links">
        Follow us:
        <a href="#">
        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }"/>  
        </a>
        <a href="#">
        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'pinterest-p' }" />
        </a>
        <a href="#">
        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" /> 
        </a>
        <a href="#">
        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-f' }" />
        </a>
      </div>
      <send-email />
    </div>
  </footer>
</template>

<script>
import SendEmail from "./SendEmail.vue";
export default {
  components: {
    SendEmail
  },
  data() {
    return {
      footerMenuElements: [
        {
          name: "TECHNOLOGY"
        },
        {
          name: "IDEAS"
        },
        {
          name: "LEADERSHIP"
        },
        {
          name: "VIDEO"
        },
        {
          name: "NEWS"
        },
        {
          name: "FINANCE"
        }
      ]
    };
  }
};
</script>

<style scoped>
footer {
  background-color: #1d1f24;
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  border: 1px solid white;
  border-top: 0;
}
.footer-middle {
  width: 53.4722%; /* 770px */
  box-sizing: border-box;
  padding-top: 3%;
  padding-bottom: 2.7778%;
}
.footer-middle a {
  display: inline-block;
  font-family: "Oswald Medium Normal", sans-serif;
  font-size: 14px;
  color: white;
  text-decoration: none;
  margin: 1.2987% 7.7922%;
}
.footer-left {
  padding: 2.7778% 5.5556% 3.3333% 2.7778%;
  box-sizing: border-box;
  width: 19.85%; /* 270px + delta */
  font-family: "Lato Regular Normal", sans-serif;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}
.footer-right {
  padding: 3.4722% 2.7778% 4.1667% 4.5%;
  width: 300px;
  box-sizing: content-box;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
}
.highlighted-dot {
  color: #ff565c;
  font-size: 24px;
}
.logo {
  font-size: 24px;
  font-weight: bold;
  color: #494b4f;
  font-family: "Lato Bold Normal";
}
.copyright {
  font-size: 14px;
  font-weight: normal;
  color: #bbbbbd;
  margin-top: 6.9259%;
}
.follow-links {
  color: #a5a6a8;
  margin-bottom: 4%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: start;
  font-family: "Lato Regular Normal";
}
.follow-links a {
  display: block;
  margin: 0 5px;
  text-decoration: none;
  color: #616366;
}
.send-email {
  width: 300px;
  height: 37px;
}

@media screen and (max-width: 980px){
  footer {
    flex-wrap: wrap;
  }
  .footer-left {
    width: 35%;
    padding-left: 4.5%;
  }
  .footer-middle {
    width: 65%;
  }
  .footer-right {
    flex-flow: row-reverse nowrap;
    width: 100%;
    align-items: center;
  }
  .follow-links {
    margin-left: 32px;
    margin-bottom: 0;
  }
  .follow-links a {
    margin: 0;
    margin-left: 20px;
  }
}
</style>
