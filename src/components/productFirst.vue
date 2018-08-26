<template>
  <layout>
    <div class="wrapper">
      <div class="wrapper-content">
        <div class="return">
          <a class="link__item" href="#/catalog"><arrow-left /><span>Повернутись до каталогу</span></a>
        </div>
        <!-- begin product-description -->
        <div class="product-description">
          <!-- begin description-foto -->
          <div class="description-foto">
            <img src="./../assets/products-1.jpg" class="img-responsive" alt="Product Image">
          </div>
          <!-- end description-foto -->

          <!-- begin description-text -->
          <div class="description-text">
            <div class="title">Whey Way Nutrition isolate 92 ваніль</div>
            <div class="text-container">
              <p class="text__item"><span class="sub-title">Whey proteine isolate 92</span> -  ізолят сироваткових білків. Розчинні в молоці протеїни: лактоглобулін, лактоальбумін і імуноглобулін, виділені із сироватки, що виготовляється шляхом створожування молока. Цей набір протеїнів містить безліч амінокислот, необхідних для розвитку організму вцілому, особливо для нарощування м’язової маси і спалювання жирів. Серед інших до складу входить незамінні амінокислоти, які людський організм не здатний виробляти самостійно і має отримувати з харчуванням.</p>
              <p class="text__item">Поживна (харчова) цінність на 100 г продукту: білки - 92г, вуглеводи - 0,1г, жири - 1,3г.</p>
              <p class="text__item">Енергетична цінність (калорійність) на 100 г: 375кКал.</p>
              <p class="text__item">Вага 1кг</p>
              <p class="text__item">Рекомендації щодо споживання сироваткового протеїну:</p>
              <ul class="text-list">
                <li class="list__item">- Дорослим по 1 мірній ложці (35 г) розчинити в 200-250 мл рідини;</li>
                <li class="list__item">- В тренувальні дні: 3 рази на добу через 15-20 хвилин після закінчення фізичних навантажень та в проміжку між основними пройомами їжі;</li>
                <li class="list__item">- В нетренувальні дні: 2 рази на добу.</li>
              </ul>
            </div>
          </div>
          <!-- end description-text -->
        </div>
        <!-- end product-description -->
      </div>
    </div>
  </layout>
</template>

<script>
import Layout from '@/layout/Layout'

export default {
  components: {
    Layout
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import './../styles/product.sass'

</style>
