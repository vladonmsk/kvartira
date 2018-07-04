<?php

/* @var $this \yii\web\View */
/* @var $content string */


use yii\helpers\Html;
use app\assets\AppAsset;

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">

    <?= Html::csrfMetaTags() ?>
    <title>Умный дом</title>
    <?php $this->head() ?>
</head>
<body>
<?php $this->beginBody() ?>

<canvas id="canvas"></canvas>


<div class="open_vibor">
    <button class="open"></button>
</div>

<div class="vibor">
    <button class="close"></button>
    <div class="vibor_komnat">
        <form id="form1">
            <p>Выберете количетво комнат:</p>
            <input type="radio" id="1komnata" name="komnata" value="1"><label for="1komnata"> 1 комната</label><br>
            <input type="radio" id="2komnata" name="komnata" value="2"><label for="2komnata"> 2 комнаты</label><br>
            <input type="radio" id="3komnata" name="komnata" value="3"><label for="3komnata"> 3 комнаты</label><br>
            <input type="radio" id="4komnata" name="komnata" value="4"><label for="4komnata"> 4 комнаты</label><br>
            <input type="submit" id="submit" name="submit" value="Применить">

        </form>
    </div>
    <div class="parametr_komnat">
        <!--<form id="form2">-->
        <p>Первая комната:</p>
        <input type="text" class="parametr" id="width1" name="width1" value="300" placeholder="Ширина в см"><br>
        <input type="text" class="parametr" id="height1" name="height1" value="200" placeholder="Длинна в см">
        <input type="submit" id="show" value="Применить" name="submit"><br>
        <button id="clear">Очистить</button>
        <button id="back">Назад</button>
        <!--</form>-->
    </div>
</div>
<div class="openD">
    <button class="open_datchik"></button>
</div>
<div class="datchik">
    <button class="close-datchik"></button>
    <div class="vibor_datchik">
        <p>Выберете датчики:</p>
        <div class="datchiki"><p>Датчики света</p></div>
        <div class="datchili_vibor">
            <div class="datchik_position"><img class="img_datchik"><p class="name-datchik">Датчик света</p></div>
            <div class="datchik_position"><img class="img_datchik"><p class="name-datchik">Датчик света</p></div>
            <div class="datchik_position"><img class="img_datchik"><p class="name-datchik">Датчик света</p></div>
            <div class="datchik_position"><img class="img_datchik"><p class="name-datchik">Датчик света</p></div>

        </div>


    </div>
</div>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
