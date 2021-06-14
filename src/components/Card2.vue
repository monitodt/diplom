<template>
    <div id="Card2" class="content-block2">
            <div class="textcenter">
                <h2 class="fs72 disi bebas">ОСОБЕННОСТЬ ПЛАТФОРМЫ <h2 class="fs72 disi brown bebas">I-SMARTBOX</h2></h2>
            </div>
            <div class="cardblock2">
                <div class="card2">
                    <img class="card2picture" src="../assets/block2.1.svg" alt="">
                    <h3 class="card2texth3 fs25 gilroy-bold ">Управление I-SmartBox через web-приложение</h3>
                    <h4 class="card2texth4 fs18 gilroy">Открыть, закрыть и передать доступ к своему I-SmartBox другому человеку в любой точке планеты и в любое время при наличие сети интернет</h4>
                </div>
                <div class="card2">
                    <img class="card2picture" src="../assets/block2.2.svg" alt="">
                    <h3 class="card2texth3 fs25 gilroy-bold">I-SmartBox принимает заказы круглые сутки</h3>
                    <div class="card2text2h4"><h4 class="fs18 gilroy">8 часов мы спим, 8 часов работаем, на приём посылок от курьера остаётся 8 часов</h4></div>
                </div>
                <div class="card2">
                    <img class="card2picture" src="../assets/block2.3.svg" alt="">
                    <div class="card2text3h3"><h3 class="fs25 gilroy-bold">Никаких передач из рук в руки</h3></div>
                    <h4 class="card2texth4 fs18 gilroy">Отсутствие физического контакта между курьером и получателем</h4>
                </div>
            </div>
        </div>
</template>


<style scoped lang="scss">
@font-face {
font-family: 'Bebas';
src: url('../fonts/bebas.ttf');
}

@font-face {
font-family: 'Gilroy';
src: url('../fonts/Gilroy-Regular.ttf');
}

.contentcenter {
    display: flex;
    justify-content: center;
    width: 100%;
}


.content-block2 {
    width: 100%;
    padding: 10% 0px 5% 0px;
    background:#E5E5E5;

}

.prevtext {
    width: 950px;
    text-align: left;
    padding: 70px 0 80px 0;
    vertical-align: bottom;
    display: inline-block;
    bottom: 0;
}

.card {
    width: 170px;
    height: 170px;
    background-color:white;
    text-align: center;
    vertical-align: middle;
    display: inline-block;
    padding: 15px 0;
    margin: 50px 50px 0 0;
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
}

.img {
    max-width: 70px;
    max-height: 70px;
    display: inline-block;
}

.cardtext {
    font-family: "Gilroy", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 20px;
    letter-spacing: 0.01em;
    color: #000000;
    width: 100%;
}

.fs18 {
    font-size: 18px;
    line-height: 20px;
    letter-spacing: 0.01em;
}

.fs25 {
    font-size: 25px;
    line-height: 30px;
    letter-spacing: 0.01em;
}

.fs72 {
    font-size: 72px;
    line-height: 72px;
    letter-spacing: 0.01em;
    padding: 0 15px;
}

.fs85 {
    font-size: 85px;
    line-height: 85px;
    letter-spacing: 0.01em;
}

.fs170 {
    font-size: 170px;
    line-height: 170px;
    letter-spacing: 0.01em;
}

.brown {
    color: #9B6E50;
    display: flex;
    align-items: flex-start;
}

.bold {
    font-weight: bold;
}

.fs30 {
    font-size: 30px;
    line-height: 35px;
    letter-spacing: 0.01em;
    color: #000000;
}

.bebas {
    font-family: 'Bebas';
    font-style: normal;
    font-weight: normal;

}


.gilroy {
    font-family: 'Gilroy', sans-serif;
    font-style: normal;
    font-weight: 500;

}


.gilroy-bold {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 900;

}

.postam {
    max-width: 262px;
    max-height: 689px;
    display: inline-block;
    padding: 29px 0 0 0;
    text-align: left;
    
}

.textcenter{
    text-align: center;
    vertical-align: middle;
    display: inline-block;
    padding: 0 0 100px 0;
    width: 100%;
}

.disi{
    display: inline-block;
}

.card2 {
    width: 410px;
    height: 500px;
    background: white;
    text-align: center;
    vertical-align: middle;
    display: inline-block;
    margin: 10px 15px;
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
}

.card2picture {
    max-height: 250px;
    max-width: 410px;
}

.card2texth3 {
    padding: 40px 60px 20px 60px;

}

.card2text3h3 {
    padding: 40px 99px 20px 99px;

}

.card2texth4 {
    padding: 0 35px 46px 36px;
}

.card2text2h4 {
    padding: 0 35px 67px 38px;

}

.cardblock2 {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
@media screen and (max-width: 444px) {
    .card2 {
    width: 300px;
    height: 500px;
}

.card2picture {
    max-height: 250px;
    max-width: 300px;
}
.fs18.gilroy{
    font-size: 14px;
}
}
</style>