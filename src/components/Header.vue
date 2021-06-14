<template>
  <div class="main-temp">
    <MobileMenu class="mobile-menu" />
    <div class="header">
      <div class="logotitle">
        <v-img :src="require('../assets/logoTitle.png')" />
      </div>

      <div class="navbar">
        <div class="navclick">
          <a class="gillroy" href="#Card2">Особенности</a>
        </div>

        <div class="navclick">
          <a class="gillroy" href="#Card3">Стейкхолдеры</a>
        </div>

        <div class="navclick">
          <a class="gillroy" href="#Card6">Сотрудничество</a>
        </div>

        <div class="navclick">
          <a class="gillroy" href="#Footer">Контакты</a>
        </div>
      </div>

      <div class="num">
        <a href="tel:+79505010598" class="number">
          +7(950) 501-05-98
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import MobileMenu from "./MobileMenu.vue";
export default {
  components: {
    MobileMenu,
  },
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");
@font-face {
  font-family: "Gilroy";
  src: url("../fonts/Gilroy-Regular.ttf");
  font-weight: normal;
  font-style: normal;
}

.header {
  padding: 13px 0px;
  height: 60px;
  display: flex;
  justify-content: center;
  position: fixed;
  background-color: white;
  width: 100%;
  z-index: 1000;
}

.logotitle {
  max-width: 200px;
  max-height: 33.03px;
  display: flex;
  align-items: center;
}

.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 50%;
}

.navclick {
  width: calc(616px / 4);
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.num {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-width: 210px;
}

.gillroy {
  font-family: "Gilroy", sans-serif;
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  color: black;
}
.gillroy:hover {
  color: #FFC350;
}

.number {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
  letter-spacing: 0.01em;
  text-decoration: none;
  color: #000000;
}

.mobile-menu {
  display: none;
}

@media screen and (max-width: 1100px) {
  .header {
    display: none;
  }
  .mobile-menu {
    display: block;
  }
}
</style>
