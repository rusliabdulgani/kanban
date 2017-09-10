<template>
  <div>
    <Judul></Judul>
    <div id="app">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Judul from '@/components/header'
export default {
  name: 'app',
  components: {
    Judul
  }
}
</script>

<style>
#app {
  font-family: 'Philosopher', sans-serif;
  font-family: 'Handlee', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
  padding-left: 40px;
  padding-right: 40px;
}

#judul {
  padding-top: 30px;
  padding-left: 40px;
  padding-right: 40px;
}
</style>
