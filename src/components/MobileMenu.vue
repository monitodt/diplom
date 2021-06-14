<template>
  <div class="mob-header">
    <input id="burger" type="checkbox" />

    <label for="burger">
      <span></span>
      <span></span>
      <span></span>
    </label>

    <span><v-img class="logo" :src="require('../assets/logoTitle.png')" /></span>

    <a href="tel:+79505010598"><v-img class="logo-mob" :src="require('../assets/Vector.png')" /></a>
      <nav>
      <ul>
        <li><a href="#Card2"><label for="burger">Особенности</label></a></li>
        <li><a href="#Card3"><label for="burger">Стейкхолдеры</label></a></li>
        <li><a href="#Card6"><label for="burger">Сотрудничество</label></a></li>
        <li><a href="#Footer"><label for="burger">Контакты</label></a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
$blackColor: #020304;
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");
@font-face {
  font-family: "Gilroy";
  src: url("../fonts/Gilroy-Regular.ttf");
  font-weight: normal;
  font-style: normal;
}
li a:hover {
  color: #FFC350;  
}
.mob-header {
  height: 60px;
}
body {
  background: $blackColor;
  .logo-mob {
    position: fixed;
    top: 47px;
    right: 6%;
    z-index: 6;
    font-size: 20px;
    font-weight: 900;
    font-family: sans-serif;
    text-transform: uppercase;
    > span {
      text-transform: none;
      opacity: 0.5;
      font-weight: 300;
      font-size: 12px;
    }
  }
  .logo {
    position: fixed;
    top: 40px;
    left: 22%;
    z-index: 6;
    font-size: 20px;
    font-weight: 900;
    font-family: sans-serif;
    text-transform: uppercase;
    > span {
      text-transform: none;
      opacity: 0.5;
      font-weight: 300;
      font-size: 12px;
    }
  }
  input + label {
    position: fixed;
    top: 45px;
    left: 30px;
    height: 20px;
    width: 15px;
    z-index: 5;
    span {
      position: absolute;
      width: 100%;
      height: 3px;
      border-radius: 5px;
      top: 50%;
      margin-top: -1px;
      left: 0;
      display: block;
      background: $blackColor;
      transition: 0.5s;
    }
    span:first-child {
      top: 3px;
    }
    span:last-child {
      top: 16px;
    }
  }
  label:hover {
    cursor: pointer;
  }
  input:checked + label {
    span {
      opacity: 0;
      top: 50%;
    }
    span:first-child {
      opacity: 1;
      transform: rotate(405deg);
    }
    span:last-child {
      opacity: 1;
      transform: rotate(-405deg);
    }
  }
  input ~ nav {
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    z-index: 3;
    transition: 0.5s;
    transition-delay: 0.5s;
    overflow: hidden;
    > ul {
      text-align: center;
      position: absolute;
      top: 35%;
      left: 20%;
      right: 20%;
      > li {
        opacity: 0;
        transition: 0.5s;
        transition-delay: 0s;
        list-style: none;
        > a {
          text-decoration: none;
          text-transform: uppercase;
          color: $blackColor;
          font-weight: 700;
          font-family: "Gilroy", sans-serif;
          display: block;
          padding: 30px;
        }
      }
    }
  }
  input:checked ~ nav {
    height: 100%;
    transition-delay: 0s;
    > ul {
      > li {
        opacity: 1;
        transition-delay: 0.5s;
      }
    }
  }
}
</style>
