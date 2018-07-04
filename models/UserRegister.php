<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "users".
 *
 * @property int $id
 * @property string $name
 * @property string $second_name
 * @property string $password
 * @property string $email
 * @property string $code
 * @property int $active
 * @property int $is_email
 * @property string $auth_key
 */
class UserRegister extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'users';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['name', 'second_name', 'password', 'email', 'code', 'active', 'auth_key'], 'required'],
            ['email', 'email'],
            [['active', 'is_email'], 'integer'],
            [['name', 'second_name', 'password', 'email', 'code', 'auth_key'], 'string', 'max' => 255],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [

            'name' => 'Имя',
            'second_name' => 'Фамилия',
            'password' => 'Пароль',
            'email' => 'Email',


        ];
    }
}
