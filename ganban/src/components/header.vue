<template lang="html">
  <div>
    <div class="col-md-3">
      <div class="col-md-3">
        <img id="logo" src="../assets/logo.jpg" alt="">
      </div>
      <div class="col-md-9">
        <h2 id="titel">Gan-Ban</h2>
      </div>
    </div>
    <div class="col-md-8">
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
    float: left;
  }
  
  #titel {
    text-align: left;
    float: left;
    font-family: 'Lobster', cursive;
  }
  
  font-family: 'Yanone Kaffeesatz', sans-serif;

  
</style>
