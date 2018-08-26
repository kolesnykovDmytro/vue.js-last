<template>
  <div class="layout-container">
    <header class="my-header">
      <div class="wrapper">
        <div class="wrapper-content">
          <div class="header-content">
            <!-- begin header logo -->
            <div class="logo">
              <router-link to="/home">
                <img src="../assets/logo.png" class="img-responsive" alt="Whey Protein">
              </router-link>
            </div>
            <!-- end header logo -->
            <nav class="header__nav">
              <ul>
                <li><router-link class="nav__item" to="/home">Home</router-link></li>
                <li><router-link class="nav__item" to="/catalog">Catalog</router-link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
    <slot></slot>
    <footer class="my-footer">
      <div class="wrapper">
        <div class="wrapper-content">
          <div class="footer-content">
            <div class="logo">
              <a href="#">
                <img src="../assets/logo.png" class="img-responsive" alt="Whey Protein">
              </a>
            </div>
            <div class="footer-social">
              <div class="social-title">Ми в соціальних мережах</div>
              <div class="footer-links">
                <a class="link__item" href="#"><facebook fillColor="red" /></a>
                <a class="link__item" href="#"><instagram title="this is an icon!" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'Layout'
}

</script>

<style lang="sass" scoped>
.layout-container
  min-height: calc(100vh - 100px)
  position: relative
  // margin-bottom: 50px
.my-header
  top: 0
  left: 0
  width: 100%
  padding: 10px 0
  background: #000
  margin-bottom: 2%
  .wrapper
    background: #000
  .header-content
    display: flex
    align-items: center
    justify-content: space-between
.header__nav
  display: table-cell
  vertical-align: middle
  text-align: center
  li
    display: inline-block
    padding: 0 10px
  .nav__item
    cursor: pointer
    position: relative
    display: block
    cursor: pointer
    padding: 8px 0
    color: #fff
    text-decoration: none
    &:before, &:after
      content: ''
      position: absolute
      width: 0%
      height: 2px
      bottom: -2px
      background: #fff
    &:before
      left: 0
    &:after
      right: 0
      background: #45aae0
      transition: width 0.8s cubic-bezier(0.22, 0.61, 0.36, 1)
    &:hover
      &:before
        width: 50%
        background: #45aae0
        width: 100%
        transition: width 0.5s cubic-bezier(0.22, 0.61, 0.36, 1)
      &:after
        background: transparent
        width: 100%
        transition: 0s

.my-footer
  background: #000
  padding: 10px 0
  position: fixed
  bottom: 0
  left: 0
  width: 100%
  z-index: 100
  .wrapper
    background: #000
  .footer-links
    display: flex
  .social-title
    font-size: 20px
    color: #fff
    margin-bottom: 5px
.footer-links
  .link__item
    color: #45aae0
    font-size: 34px
.footer-content
  display: flex
  justify-content: space-between
  align-items: center
.logo
  flex-basis: 10%
</style>
