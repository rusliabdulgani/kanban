<template lang="html">
  <div class="panel panel-info">
    <div class="panel-heading">
      <h3 id="judul-panel" class="panel-title">Back Log</h3>
    </div>
    <div class="panel-body">
      <Panel :tasks="backlog" :status="status" :idModal="idModal"></Panel>
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
      status: 'backlog',
      idModal: '#modalBacklog'
    }
  },
  firebase: function () {
    return {
      backlog: this.$db.ref('task/backlog/')
    }
  }
}
</script>

<style lang="css" scoped>
  #tengah {
    display:block;
	  text-align:center;
  }
  
  #judul-panel {
    font-family: 'Lobster', cursive;
  }
  
  #kiri {
    display:block;
	  text-align:left;
  }
</style>
