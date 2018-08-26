<template>
  <div id="app">
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App'
}

</script>

<style lang="sass">
@import './styles/reset.sass'
@import './styles/default.sass'

</style>
