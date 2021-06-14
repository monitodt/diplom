<template>
  <footer id="Footer" class="flex-rw">
    <ul class="footer-list-top ubr-foot">
      <li></li>
      <li>
        <a
          href="#"
          class="generic-anchor footer-list-anchor"
          itemprop="significantLink"
          >Главная</a
        >
      </li>
      <li>
        <a
          href="#Card2"
          class="generic-anchor footer-list-anchor"
          itemprop="significantLink"
          >Особенности</a
        >
      </li>
      <li>
        <a
          href="#Card3"
          class="generic-anchor footer-list-anchor"
          itemprop="significantLink"
          >Стейкхолдеры</a
        >
      </li>

      <li>
        <a
          href="#Card6"
          itemprop="significantLink"
          class="generic-anchor footer-list-anchor"
          >Сотрудничество</a
        >
      </li>
    </ul>
    <ul class="footer-list-top logo-foot ubr-foot">
      <v-img class="logo-foot" :src="require('../assets/лого.png')" />
    </ul>
    <ul class="footer-list-top">
      <li id="help"></li>
      <li>
        <a
          href="tel:+79505010598"
          class="generic-anchor footer-list-anchor foot-num"
          itemprop="significantLink"
          >+7(950) 501-05-98</a
        >
      </li>
      <li>
        <a
          href="#"
          class="generic-anchor footer-list-anchor foot-num"
          itemprop="significantLink"
          >bambar@bk.ru</a
        >
      </li>
      <li id="find-a-store">
        <a
          href="#"
          class="generic-anchor footer-list-anchor foot-span"
          itemprop="significantLink"
          ><span>Татьянкин Виталий</span> <span>Михайлович</span></a
        >
      </li>
    </ul>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$primary-light-blue: #ffffff;
$primary-line-color: #FFC350;
* {
  box-sizing: border-box;
}
.foot-span{
  display: flex;
  flex-direction: column;
}
.logo-foot{
  padding: 0 10px; 
}
body {
  font: 11px "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: auto;
  display: flex;
  flex-flow: column nowrap;
  //This justify-content is essentially unnecessary in Firefox and Chrome due to the flex: 1 1 auto on the main.  However, it's needed to push the footer down on IE11
  justify-content: space-between;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
.generic-anchor {
  color: $primary-light-blue;
  &:visited {
    color: $primary-light-blue;
  }
  &:hover {
    color: $primary-line-color;
  }
}
.flex-rw {
  display: flex;
  flex-flow: row wrap;
}
//This main is mostly to push the footer to the bottom and for demo purposes.
main {
  flex: 1 1 auto; //For IE11
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}
footer {
  background: #202020;
  margin-top: auto;
  width: 100%;
  height: 250px;
  align-items: center;
}
.footer-list-top {
  width: 33.333%;
}
.footer-list-top > li {
  text-align: center;
  padding-bottom: 10px;
}
.footer-list-header {
  padding: 10px 0 5px 0;
  color: #fff;
  font: 18px "Gilroy", sans-serif;
}
.footer-list-anchor {
  font: 18px "Gilroy", sans-serif;
}
.footer-social-section {
  width: 100%;
  align-items: center;
  justify-content: space-around;
  position: relative;
  margin-top: 5px;
}
.footer-social-section::after {
  content: "";
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 10px;
  border-top: 1px solid $primary-line-color;
  width: calc(100% - 20px);
}
.footer-social-overlap {
  position: relative;
  z-index: 2;
  background: #202020;
  padding: 0 20px;
}
.footer-social-connect {
  display: flex;
  align-items: center;
  font: 3.5em "Gilroy", sans-serif;
  color: #fff;
}
.footer-social-small {
  font-size: 0.6em;
  padding: 0px 20px;
}
.footer-social-overlap > a {
  font-size: 3em;
}
.footer-social-overlap > a:not(:first-child) {
  margin-left: 0.38em;
}
.footer-bottom-section {
  width: 100%;
  padding: 10px;
  border-top: 1px solid $primary-line-color;
  margin-top: 10px;
}
.footer-bottom-section > div:first-child {
  margin-right: auto;
}
.footer-bottom-wrapper {
  font-size: 1.5em;
  color: #fff;
}
.footer-address {
  display: inline;
  font-style: normal;
}
@media only screen and (max-width: 768px) {
  .footer-list-header {
    font-size: 2em;
  }
  .footer-list-anchor {
    font-size: 1.1em;
  }
  .footer-social-connect {
    font-size: 2.5em;
  }
  .footer-social-overlap > a {
    font-size: 2.24em;
  }
  .footer-bottom-wrapper {
    font-size: 1.3em;
  }
}
@media screen and (max-width: 568px) {
  main {
    font-size: 5em;
  }
  .footer-list-top > li {
  text-align: left;
  padding-left: 30%;
  padding-bottom: 10px;
}
  .ubr-foot{
    display: none;
  }
  .footer {
  max-height: 100px;
}
  .footer-list-top {
    width: 100%;
  }
  .footer-list-header {
    font-size: 3em;
  }
  .footer-list-anchor {
    font-size: 1.5em;
  }
  .footer-social-section {
    justify-content: center;
  }
  .footer-social-section::after {
    top: 25%;
  }
  .footer-social-connect {
    margin-bottom: 10px;
    padding: 0 10px;
  }
  .footer-social-overlap {
    display: flex;
    justify-content: center;
  }
  .footer-social-icons-wrapper {
    width: 100%;
    padding: 0;
  }
  .footer-social-overlap > a:not(:first-child) {
    margin-left: 20px;
  }
  .footer-bottom-section {
    padding: 0 5px 10px 5px;
  }
  .footer-bottom-wrapper {
    text-align: center;
    width: 100%;
    margin-top: 10px;
  }
}
@media only screen and (max-width: 480px) {
  .footer-social-overlap > a {
    margin: auto;
  }
  .footer-social-overlap > a:not(:first-child) {
    margin-left: 0;
  }
  .footer-bottom-rights {
    display: block;
  }
}
@media only screen and (max-width: 430px) {
  .footer-list-top > li {
  text-align: left;
  padding-left: 25%;
  padding-bottom: 10px;
}
}
@media only screen and (max-width: 320px) {
  .footer-list-header {
    font-size: 2.2em;
  }
  .footer-list-anchor {
    font-size: 1.2em;
  }
  .footer-social-connect {
    font-size: 2.4em;
  }
  .footer-social-overlap > a {
    font-size: 2.24em;
  }
  .footer-bottom-wrapper {
    font-size: 1.3em;
  }
}
.foot-num {
  font-size: 20px;
  font-weight: 700;
}
</style>
