<template lang="html">
  <div>
    <div class="panel panel-default" v-for="task in tasks">
      <div class="panel-heading">{{ task.title }}</div>
      <div class="panel-body">
        <p>Point : {{ task.point }}</p>
        <p>Assign to : {{task.assign_to }}</p>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-info" data-toggle="modal" :data-target="idModal" @click="getDetail(task['.key'])">
          detail
        </button>
        <Modal :detail="detail" :id="idModal" :status="status"></Modal>
      </div>
    </div>
</div>
</template>

<script>
import Modal from '@/components/modal'
export default {
  props: ['tasks', 'status', 'idModal'],
  components: {
    Modal
  },
  data () {
    return {
      detail: {}
    }
  },
  methods: {
    getDetail (id) {
      for (let i = 0; i < this.tasks.length; i++) {
        if (id === this.tasks[i]['.key']) {
          this.detail = this.tasks[i]
        }
      }
    }
  },
  created () {
    this.getHeader()
  }
}
</script>

<style lang="css">
</style>
