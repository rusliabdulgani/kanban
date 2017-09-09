<template lang="html">
  <div>
    <div class="col-md-2">
      <img id="logo" src="../assets/logo.jpg" alt="">
    </div>
    <div class="col-md-9">
    </div>
    <div class="col-md-1">
      <Tombol></Tombol>
    </div>
  </div>
</template>

<script>
import Tombol from '@/components/button_create'
export default {
  components: {
    Tombol
  }
}
</script>

<style lang="css" scoped>
  #logo {
    height: 70px;
    width: auto;
  }
  
  #create {
    text-align: right;
  }

  
</style>
