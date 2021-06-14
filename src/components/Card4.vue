<template>
  <div class="cardglobal">
    <div class="block1">
      <h1 class="dblock gilroy fs72">
        <h1 class="w dblock gilroy brown fs72">Стейкхолдер</h1>
        «Транспортные и курьерские компании»
      </h1>
      <div class="player">
          <a href="#" class="sam-player">
            <img class="play-abs" src="../assets/Video-krug.png" alt="">
            <img class="play-abs im-play" src="../assets/Video-play.png" alt="">
          </a>
          <a class="player-main gilroy" href="#">Смотреть видео №2</a>
        </div>
    </div>
    
      <div class="card4">
        <div class="box3">
          <div class="cardbox21">
            <img class="ultra6" src="../assets/001-24-hours.svg" alt="Bullshit"/>
            <h4 class="textcardbox2">Увеличение производительности труда. Доставка 24 часа в сутки. Доставка в ночное время когда нет пробок и машин.</h4>
          </div>
          <div class="cardbox2">
            <img class="ultra6" src="../assets/002-group.svg" alt="Bullshit"/>
            <h4 class="textcardbox2">Лояльность клиентов. Довольный клиент, который сохраняет преданность компании.</h4>
          </div>
        </div>
        <div class="box4">
          <img class="ultra5" src="../assets/image3.svg" alt="Bullshit"/>
        </div>
      </div>
      <div class="box4">
          <img class="ultra500" src="../assets/image3.svg" alt="Bullshit"/>
        </div>
    <div class="block1">
      <h1 class="dblock gilroy fs72">
        <h1 class="w dblock gilroy brown fs72">Стейкхолдер</h1>
        «Микро и Малый бизнес и не только»
      </h1>
      <div class="player">
          <a href="#" class="sam-player">
            <img class="play-abs" src="../assets/Video-krug.png" alt="">
            <img class="play-abs im-play" src="../assets/Video-play.png" alt="">
          </a>
          <a class="player-main gilroy" href="#">Смотреть видео №3</a>
        </div>
    </div>
    <div class="card5">
      <div class="group">
        <h3 class="gilroy fs25 grouptext center mob-est">
          Альтернативный канал сбыта продукции
        </h3>
        <div class="groupimage">
          <img src="../assets/Group23.svg" alt="" />
        </div>
        <div class="groupimage">
          <img src="../assets/Group24.svg" alt="" />
        </div>
        <div class="groupimage">
          <img src="../assets/005-box.svg" alt="" />
        </div>
        <div class="groupimage">
          <img src="../assets/Group22.svg" alt="" />
        </div>
        <h3 class="gilroy fs25 grouptext center mob-net">
          Альтернативный канал сбыта продукции
        </h3>
      </div>

      <div class="group">
        <div class="mob-est">
          <h3 class="gilroy fs25 center">
          Продуктовые маршрутизаторы (Почта, Лента, Ашан, Леруа и тд)
        </h3>
        </div>
        <div class="groupimage">
          <img src="../assets/image4.svg" alt="" />
        </div>
          <div class="">
            <div class="groupimage">
              <img src="../assets/image7.svg" alt="" />
            </div>
            <div class="groupimage">
              <img src="../assets/image5.svg" alt="" />
            </div>
          </div>
          <div class="groupimage abs">
            <img src="../assets/image6.svg" alt="" />
          </div>
        <div class="h3div mob-net">
          <h3 class="gilroy fs25 grouptext center">
          Продуктовые маршрутизаторы (Почта, Лента, Ашан, Леруа и тд)
        </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face {
  font-family: "Bebas";
  src: url("../fonts/bebas.ttf");
}

@font-face {
  font-family: "Gilroy";
  src: url("../fonts/Gilroy-Regular.ttf");
}
.cardglobal {
  background: #e5e5e5;
  overflow: hidden;
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

.card3 {
  display: flex;
  justify-content: center;
}

.card4 {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card5 {
  display: flex;
  justify-content: center;
}

.box1 {
  max-width: 835px;
  max-height: 640px;
}

.box2 {
  width: 1085px;
  padding: 30px 336px 30px 146.75px;
}

.box4 {
  max-width: 835px;
  max-height: 640px;
}

.box3 {
  padding: 30px 0 30px 336px;
}

.ultra2 {
  max-width: 100px;
  max-height: 100px;
}

.ultra3 {
  max-width: 100px;
  max-height: 100px;
}

.ultra4 {
  max-width: 100px;
  max-height: 100px;
}

.ultra6 {
  display: inline-block;
  vertical-align: top;
  max-width: 100px;
  max-height: 100px;
}

img {
  display: inline-block;
  vertical-align: middle;
}

h4 {
  font-family: Gilroy;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0.01em;
  display: inline-block;
  vertical-align: middle;
  width: 479px;
  padding: 0 0 0 30px;
}

.cardbox {
  padding: 60px 0 0 0;
  width: 718px;
  display: inline-block;
}

.cardbox2 {
  padding: 10% 0 0 0;
  width: 718px;
  display: inline-block;
}

.cardbox1 {
  width: 718px;
  display: inline-block;
}

.exc {
  font-family: Gilroy;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0.01em;
  display: inline-block;
  vertical-align: middle;
  width: 400px;
  padding: 0 0 0 30px;
}
.ultra500{
  width: 100%;
  object-fit: cover;
  object-position: center;
  display: none;
}
.textcardbox21 {
  font-family: Gilroy;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0.01em;
  display: inline-block;
  width: 450px;
  padding: 25px 0 0 30px;
}

.textcardbox2 {
  font-family: Gilroy;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0.01em;
  display: inline-block;
  width: 450px;
  padding: 15.5px 0 0 30px;
}

.gilroy {
  font-family: Gilroy;
  font-style: normal;
}

.brown {
  color: saddlebrown;
}

.fs25 {
  font-size: 25px;
}

.fs72 {
  font-size: 72px;
}

.dblock {
  display: inline-block;
  letter-spacing: 0.01em;
}

.center {
  text-align: center;
}

.block {
  width: 100%;
  text-align: center;
  padding: 200px 0 150px 0;
}

.block1 {
  width: 100%;
  text-align: center;
  padding: 12% 0 10% 0;
  background: #e5e5e5;
}

.w {
  display: block;
}

.group {
  width: 629px;
  height: 500px;
  margin: 0 15px 0 15px;
  background: #ffffff;
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  padding: 0 0 45px 0;
  text-align: center;
  position: relative
}
.h3div{
  position: absolute;
  bottom: 70px;
  right: 40px;
}
.abs{
  position: absolute;
  bottom: -35px;
  left: 0px;
}
.group1 {
  width: 629px;
  height: 500px;
  margin: 0 315px 0 15px;
  background: #ffffff;
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  padding: 0 0 45px 0;
}

.imageblock {
  height: 210px;
  width: 519px;
  margin: 0 71px 0 40px;
  display: flex;
}

.groupimage {
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  width: 300px;
  padding: 30px 90px 30px 90px;
}
.grouptext {
  width: 300px;
  display: inline-block;
}

.grouptext1 {
  width: 500px;
  display: inline-block;
}

.groupimage1 {
  padding: 22px 89px 0 197px;
}

.groupimage2 {
  padding: 10px 0 0 0;
  display: inline-flex;
  align-items: flex-start;
}

.groupimage3 {
  padding: 0 0 0 11px;
  display: inline-flex;
}
.mob-est{
  padding: 30px;
  display: none;
}
.groupimage4 {
  width: 100%;
  display: inline-flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 20px 0 0 0;
}
@media screen and (max-width: 1300px) {
  .ultra5{
    display: none;
  }
  .card5{
    flex-direction: column;
    align-items: center;
  }
  .group{
    margin: 20px 0;
  }
  .box3 {
  padding: 30px 146.75px 30px 336px;
}
}
@media screen and (max-width: 950px) {
.player-main{
  display: none;
}
.sam-player{
  margin-left: 50px;
}
}
@media screen and (max-width: 570px) {
  .fs72{
    font-size: 44px;
  }
  .textcardbox2{
    width: 210px;
    font-size: 20px;
  }
  .box3{
    padding: 0 146.75px 30px 520px;
  }
}
@media screen and (max-width: 760px) {
  h4{
    font-size: 20px;
  }
  .ultra500{
    display: block;
    margin: 60px 0;
  }
  .box2{
    margin-left: 80px;
  }
  .ultra2{
    width: 90px;
  top: -10px;
  left: -100px;
}
.group{
  height: auto;
  width: auto;
  max-width: 300px;
}
.mob-net{
  display: none;
}
.mob-est{
  display: block;
}
.abs{
  position: relative;
}
}
@media screen and (max-width: 530px) {
  h4{
    font-size: 16px;
  }
  .ultra2{
    width: 60px;
}
}
</style>
