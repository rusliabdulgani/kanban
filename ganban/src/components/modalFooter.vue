<template lang="html">
  <div>
    <div id="kiri" class="col-sm-4 col-md-4" v-if="prevStatus !== ''">
      <button type="button" :class="buttonClassPrev" data-dismiss="modal" @click="moveTo(detail['.key'], detail.title, detail.description, detail.point, detail.assign_to, prevStatus)">{{ prevStatus }}</button>
    </div>
    <div class="col-sm-4 col-md-4">
      <span id="tengah"><button type="button" class="btn btn-danger" data-dismiss="modal" @click="deleteTask(detail['.key'])">delete</button></span>
    </div>
    <div class="col-sm-4 col-md-4" v-if="nextStatus !== ''">
        <button type="button" :class="buttonClassNext" data-dismiss="modal" @click="moveTo(detail['.key'], detail.title, detail.description, detail.point, detail.assign_to, nextStatus)">{{ nextStatus }}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['detail', 'status'],
  data () {
    return {
      nextStatus: '',
      prevStatus: '',
      buttonClassPrev: '',
      buttonClassNext: ''
    }
  },
  methods: {
    deleteTask (id) {
      console.log(this.status)
      this.$db.ref(`task/${this.status}/` + id).remove()
    },
    moveTo (id, title, description, point, assignTo, status) {
      this.$db.ref(`task/${status}/`).push({
        title: title,
        description: description,
        point: point,
        assign_to: assignTo,
        status: status
      })
      this.$db.ref(`task/${this.status}/` + id).remove()
    },
    next () {
      if (this.status === 'backlog') {
        this.nextStatus = 'todo'
        this.buttonClassNext = 'btn btn-warning'
      } else if (this.status === 'todo') {
        this.nextStatus = 'doing'
        this.prevStatus = 'backlog'
        this.buttonClassPrev = 'btn btn-info'
        this.buttonClassNext = 'btn btn-primary'
      } else if (this.status === 'doing') {
        this.nextStatus = 'done'
        this.prevStatus = 'todo'
        this.buttonClassPrev = 'btn btn-warning'
        this.buttonClassNext = 'btn btn-success'
      } else {
        this.prevStatus = 'doing'
        this.buttonClassPrev = 'btn btn-primary'
      }
    }
  },
  created () {
    this.next()
  }
}
</script>

<style lang="css" scoped>
  #kiri {
    text-align: left;
  }
</style>
