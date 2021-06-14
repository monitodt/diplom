<template>
  <div class="cardglobal">
    <div id="Card3" class="block">
      <h1 class="dblock gilroy fs72">
        <h1 class="dblock gilroy brown fs72">СТЕЙКХОЛДЕР <span>«ЖИТЕЛЬ»</span></h1>
        <div class="player gilroy">
          <a href="#" class="sam-player">
            <img class="play-abs" src="../assets/Video-krug.png" alt="">
            <img class="play-abs im-play" src="../assets/Video-play.png" alt="">
          </a>
          <a class="player-main" href="#">Смотреть видео №1</a>
        </div>
      </h1>
    </div>

    <div class="card3">
      <div class="box1">
        <img class="ultra1" src="../assets/img.jpg" alt="Bullshit" />
      </div>
      <div class="box2">
        <div class="cardbox">
          <img
            class="ultra2"
            src="../assets/002-paint-palette.svg"
            alt="Bullshit"
          />
          <h4>
            Цените своё время. Понимаете что вместо похода за посылкой можно
            насладиться своим любимым делом.
          </h4>
        </div>
        <div class="cardbox">
          <img class="ultra2" src="../assets/003-gift-box.svg" alt="Bullshit" />
          <h4>
            Хотите сделать подарок человеку. Теперь можно не волноваться, что
            курьер испортит сюрприз.
          </h4>
        </div>
        <div class="cardbox">
          <img
            class="ultra2"
            src="../assets/001-food-delivery.svg"
            alt="Bullshit"
          />
          <h4>
            Душевное спокойствие. Не нужно отвлекаться на разговоры и ожидание
            курьера.
          </h4>
        </div>
        <div class="cardbox">
          <img class="ultra2" src="../assets/004-key.svg" alt="Bullshit" />
          <h4 class="exc">
            Вы срочно уезжаете и нужно оставить ключи от машины или дома
            родственникам.
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
@font-face {
  font-family: "Bebas";
  src: url("../fonts/bebas.ttf");
}

@font-face {
  font-family: "Gilroy";
  src: url("../fonts/Gilroy-Regular.ttf");
}
.player{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
.sam-player{
  width: 50px;
  height: 50px;
  position: relative;
}
.play-abs{
  position:absolute;
  top: 0;
  left: -25px;
  }
  .im-play{
    top: 10px;
    left: -8px;
  }
.player-main{
  color: #FFC350;
  font-size: 30px;
  text-decoration: none;
}
.cardglobal{
  overflow: hidden;
}
.card3{
  display: flex;
  justify-content: space-around;

}
.box1{
  position: relative;
}
span{
  color: #000;
  }
.ultra1{
  position: absolute;
  top: 0;
  right: -450px;
}
.ultra2{
  position: absolute;
  top: -20px;
  left: -150px;
}
.cardbox{
  position: relative;
  margin-bottom: 20%;
}
.block{
  text-align: center;
  padding: 8% 0;
  max-width: 100%;
  position: relative;
}
h1{
  font-family: "Gilroy", sans-serif;
  font-weight: 700;
  width: 100%;
  display: flex;
}
h4 {
  font-family: "Gilroy", sans-serif;
  font-size: 25px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0.01em;
  display: inline-block;
  vertical-align: middle;
  max-width: 379px;
  padding: 0 10px 0 30px;
}

.textcardbox21 {
  font-family: "Gilroy", sans-serif;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0.01em;
  width: 450px;
  padding: 25px 0 0 30px;
}

.textcardbox2 {
  font-family: "Gilroy", sans-serif;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0.01em;
  width: 450px;
  padding: 15.5px 0 0 30px;
}

.gilroy {
  font-family: "Gilroy", sans-serif;
  font-style: normal;
}

.brown {
  color: saddlebrown;
}

.fs72 {
  font-size: 72px;
}

.dblock {
  display: inline-block;
  letter-spacing: 0.01em;
}
@media screen and (max-width: 1750px) {
  .ultra1{
  position: absolute;
  top: 0;
  right: -400px;
}
.ultra1{
  display: none;
}
.card3{
  display: flex;
  justify-content: center;
}
}
@media screen and (max-width: 950px) {
  .ultra1{
  right: -300px;
}
  .box2{
    margin-left: 50px;
  }
  .ultra2{
    width: 110px;
  top: -10px;
  left: -130px;
}
.player-main{
  display: none;
}
.sam-player{
  margin-left: 50px;
}
}
@media screen and (max-width: 760px) {
  h4{
    font-size: 20px;
  }
  .box2{
    margin-left: 80px;
  }
  .ultra2{
    width: 90px;
  top: -10px;
  left: -100px;
}
}
@media screen and (max-width: 530px) {
  h4{
    font-size: 16px;
  }
  .fs72{
    font-size: 48px;
  }
  .box2{
    margin-left: 80px;
  }
  .ultra2{
    width: 60px;
  top: -2px;
  left: -50px;
}
}
</style>
