<template lang="html">
  <div class="panel panel-warning">
    <div class="panel-heading">
      <h3 id="judul-panel" class="panel-title">Todo</h3>
    </div>
    <div class="panel-body">
      <Panel :tasks="todo" :status="status" :idModal="idModal"></Panel>
    </div>
  </div>
</template>

<script>
import Panel from '@/components/panelTask'
export default {
  components: {
    Panel
  },
  data () {
    return {
      status: 'todo',
      idModal: '#modalTodo'
    }
  },
  firebase: function () {
    return {
      todo: this.$db.ref('task/todo/')
    }
  }
}
</script>

<style lang="css" scoped>
  #judul-panel {
    font-family: 'Lobster', cursive;
  }
  
  #tengah {
    display:block;
	  text-align:center;
  }
</style>
