<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model app\models\UserRegister */

$this->title = $model->name;
$this->params['breadcrumbs'][] = ['label' => 'User Registers', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="user-register-view">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('Update', ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
        <?= Html::a('Delete', ['delete', 'id' => $model->id], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => 'Are you sure you want to delete this item?',
                'method' => 'post',
            ],
        ]) ?>
    </p>

    <?= DetailView::widget([
        'model' => $model,
        'attributes' => [
            'id',
            'name',
            'second_name',
            'password',
            'email:email',
            'code',
            'active',
            'is_email:email',
            'auth_key',
        ],
    ]) ?>

</div>
