<template>
  <div id="home">
    <layout>
      <div class="wrapper">
        <div class="wrapper-content">
          <div class="home"><h1>HOME</h1></div>
          <agile :infinite="true">
            <div class="slide slide--1"><h3>slide 1</h3></div>
            <div class="slide slide--2"><h3>slide 2</h3></div>
            <div class="slide slide--3"><h3>slide 3</h3></div>
          </agile>
        </div>
      </div>
    </layout>
  </div>
</template>

<script>
import Layout from '@/layout/Layout'

export default {
  name: 'Home',
  components: {
    Layout
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

.agile__dots {
  align-items: center;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  list-style: none;
  margin: 20px 0;
  padding: 0;
  text-align: center;
  white-space: nowrap;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  position: absolute;
  .agile__dot {
    margin: 0 10px;
    button {
      background-color: transparent;
      border-radius: 50%;
      cursor: pointer;
      display: block;
      height: 15px;
      font-size: 0;
      line-height: 0;
      margin: 0;
      transition-duration: .3s;
      width: 10px;
      border: 1px solid #fff;
    }
  }
}
.agile__dots{
  .agile__dot--current button, .agile__dot button:hover {
    background: #fff;
  }
}
.agile__arrow {
    border: none;
    bottom: 10px;
    margin: 0;
    height: 100%;
    padding: 0;
    position: absolute;
    top: 0;
    background: transparent;
    width: 50px;
    transition-duration: .3s;
    cursor: pointer;
    &:hover {
      background: rgba(0,0,0,.5);
      svg {
        fill: #fff;
      }
    }
  svg {
    fill: rgba(#fff, .4);
    height: 25px;
  }
}

.agile__arrow--next {right: 0;}

.slide {
    background: {
        position: center;
        size: cover;
    }
    height: 500px;
    &:before {
        background-color: rgba(#000, .2);
        content: '';
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
    }
    &--1 {
        background-image: url('../assets/slide-1.jpg');
    }
    &--2 {
        background-image: url('../assets/slide-2.jpg');
    }
    &--3 {
        background-image: url('../assets/slide-3.jpg');
    }
}

</style>
