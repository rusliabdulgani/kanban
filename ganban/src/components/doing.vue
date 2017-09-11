<template lang="html">
  <div class="panel panel-primary">
    <div class="panel-heading">
      <h3 id="judul-panel" class="panel-title">Doing</h3>
    </div>
    <div class="panel-body">
      <Panel :tasks="doing" :status="status" :idModal="idModal"></Panel>
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
      status: 'doing',
      idModal: '#modalDoing'
    }
  },
  firebase: function () {
    return {
      doing: this.$db.ref('task/doing/')
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
  
  #kiri {
    display:block;
	  text-align:left;
  }
</style>
