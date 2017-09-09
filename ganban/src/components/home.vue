<template lang="html">
  <div>
    <div class="container" id="header">
      <div class="row" id="back">
        <div class="col-md-12">
          <Judul></Judul>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <Backlog></Backlog>
        </div>
        <div class="col-md-3">
          <Todo></Todo>
        </div>
        <div class="col-md-3">
          <Doing></Doing>
        </div>
        <div class="col-md-3">
          <Done></Done>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Backlog from '@/components/backlog'
import Todo from '@/components/todo'
import Doing from '@/components/doing'
import Done from '@/components/done'
import Judul from '@/components/header'

export default {
  components: {
    Judul,
    Backlog,
    Todo,
    Doing,
    Done
  }
}
</script>

<style lang="css" scoped>
 #header {
   background-color: #118AB2;
   border-radius: 5px;
   margin-bottom: 20px;
   padding: 5px;
 }
</style>
