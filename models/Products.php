<?php

namespace app\models;

use yii\db\ActiveRecord;

/**
 * This is the model class for table "products".
 *
 * @property int $id
 * @property string $product_name
 * @property string $descriptions
 * @property int $price
 * @property int $category_id
 * @property string $data_create
 * @property string $data_update
 * @property string $image
 */
class Products extends ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'products';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['product_name', 'descriptions', 'price', 'category_id', 'image'], 'required'],
            [['descriptions'], 'string'],
            [['price', 'category_id'], 'integer'],
            [['data_create', 'data_update'], 'safe'],
            [['product_name', 'image'], 'string', 'max' => 255],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'product_name' => 'Название Продукта',
            'descriptions' => 'Описание',
            'price' => 'Цена',
            'category_id' => 'Категория',
            'data_create' => 'Дата создания',
            'data_update' => 'Дата изменения',
            'image' => 'Картинка',
        ];
    }

    public function getCategory(){
        return $this->hasOne(Category::className(), ['id' => 'category_id']);
    }
}
