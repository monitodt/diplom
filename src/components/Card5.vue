<template>
  <div class="cardglobal">
    <div class="block1">
      <h1 class="dblock gilroy fs72">
        <h1 class="w dblock gilroy brown fs72">СТЕЙКХОЛДЕР</h1>
        Производитель алкогольной продукции
      </h1>
      <div class="player">
        <a href="#" class="sam-player">
          <img class="play-abs" src="../assets/Video-krug.png" alt="" />
          <img class="play-abs im-play" src="../assets/Video-play.png" alt="" />
        </a>
        <a class="player-main gilroy" href="#">Смотреть видео №4</a>
      </div>
    </div>

    <div class="card3">
      <div class="box1">
        <img class="ultra1" src="../assets/image8.jpg" alt="Bullshit" />
      </div>
      <div class="box2">
        <div class="cardbox1">
          <img class="ultra2" src="../assets/Ellipse1.svg" alt="Bullshit" />
          <h4>С 2021 года ожидается легализация онлайн продаж спиртного.</h4>
        </div>
        <div class="cardbox">
          <img class="ultra2" src="../assets/Ellipse1.svg" alt="Bullshit" />
          <h4>
            С учетом развитой сети I-SmartBox, у вас появляется возможность
            заказывать любимый напиток непосредственно с завода изготовителя до
            двери дома.
          </h4>
        </div>
      </div>
    </div>
    <div class="box100">
        <img class="ultra100" src="../assets/image8.jpg" alt="Bullshit" />
      </div>
  </div>
</template>

<style scoped lang="css">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h4 {
  display: inline-block;
  vertical-align: top;
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
.player {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
.sam-player {
  width: 50px;
  height: 50px;
  position: relative;
}
.play-abs {
  position: absolute;
  top: 0;
  left: -25px;
}
.im-play {
  top: 10px;
  left: -8px;
}
.player-main {
  color: #ffc350;
  font-size: 30px;
  text-decoration: none;
}
.card3 {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card4 {
  display: flex;
  justify-content: center;
  align-items: center;
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
  width: 1085px;
  padding: 30px 146.75px 30px 336px;
}

.ultra2 {
  max-width: 20px;
  max-height: 20px;
  display: inline-block;
  vertical-align: top;
  margin: 10px 0 0 0;
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
  padding: 145px 0 0 0;
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

.fs72 {
  font-size: 72px;
}

.dblock {
  display: inline-block;
  letter-spacing: 0.01em;
}

.block {
  width: 100%;
  text-align: center;
  padding: 200px 0 150px 0;
}

.block1 {
  width: 100%;
  text-align: center;
  padding: 10% 0 10% 0;
}
.ultra100 {
  width: 100%;
    display: none;
    object-fit: cover;
    margin: 40px 0;
  }
.w {
  display: block;
}
@media screen and (max-width: 1050px) {
  .ultra1 {
    display: none;
  }
  .box2 {
    width: 100%;
    max-width: 50%;
    margin: 0 auto;
    position: relative;
  }
  .cardbox,
  .cardbox1 {
    margin-right: 250px;
  }
  .box2 h4 {
    padding-right: 100px;
  }
  .card3 {
    padding-right: 190px;
  }
}
@media screen and (max-width: 950px) {
  .player-main {
    display: none;
  }
  .sam-player {
    margin-left: 50px;
  }
}
@media screen and (max-width: 900px) {
  .ultra100 {
    display: block;
  }
}
@media screen and (max-width: 570px) {
  .fs72 {
    font-size: 42px;
  }
  .card3 h4 {
    font-size: 18px;
    width: 400px;
  }
  .cardbox {
    width: 150px;
  }
  .box2 h4 {
    padding-right: 70px;
  }
  .card3 {
    padding-right: 150px;
  }
}
</style>
