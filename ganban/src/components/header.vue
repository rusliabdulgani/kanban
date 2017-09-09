<template lang="html">
    <div class="container" id="kepala">
      <div class="row">
        <div class="col-sm-3 col-md-3">
          <img id="logo" src="../assets/logo.png" alt="">
          <h2 id="titel">Gan-Ban</h2>
        </div>
        <div class="col-sm-7 col-md-7">
        </div>
        <div class="col-sm-2 col-md-2">
          <Tombol id="tombol"></Tombol>
        </div>
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
    height: 60px;
    width: auto;
    float: left;
    margin-top: 5px;
  }
  
  #titel {
    text-align: left;
    padding-left: 80px;
    font-family: 'Lobster', cursive;
  }
  
  #tombol {
    display: block;
    text-align: right;
  }
  
  #kepala {
    margin-top: 30px;
  }
  
  font-family: 'Yanone Kaffeesatz', sans-serif;

  
</style>
