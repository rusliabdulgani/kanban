<template lang="html">
  <div class="panel panel-success">
    <div class="panel-heading">
      <h3 id="judul-panel" class="panel-title">Done</h3>
    </div>
    <div class="panel-body">
      <Panel :tasks="done" :status="status" :idModal="idModal"></Panel>
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
      status: 'done',
      idModal: '#modalDone'
    }
  },
  firebase: function () {
    return {
      done: this.$db.ref('task/done/')
    }
  }
}
</script>

<style lang="css">
  #judul-panel {
    font-family: 'Lobster', cursive;
  }
  
  #tengah {
    display:block;
	  text-align:center;
  }
</style>
