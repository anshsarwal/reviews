<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

import reviews from './components/reviews'

export default {
  name: 'App'
}
</script>

<style>
#app {
  margin-top: 350px;
  margin-bottom: 50px;
}
</style>