<template lang="html">
  <div>
    <div class="panel panel-warning">
  <div class="panel-heading">
    <h3 class="panel-title">Done</h3>
  </div>
  <div class="panel-body">
    <div class="panel panel-default" v-for="dn in done">
      <div class="panel-heading">{{ dn.title }}</div>
      <div class="panel-body">
        <p>Point : {{ dn.point }}</p>
        <p>Assign to : {{dn.assign_to }}</p>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-info" data-toggle="modal" data-target="#myModal5" @click="getDetail(dn['.key'])">
          detail
        </button>

        <!-- Modal -->
        <div class="modal fade" id="myModal5" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Detail task <b>"{{detail.title}}"</b> for <b>{{detail.assign_to}}</b></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <b>Task Description:</b>
                {{ detail.description }}
                <br>
                <b>Task Point:</b>
                {{ detail.point }}
                <br>
                <b>Status:</b>
                {{ detail.status}}
              </div>
              <div class="modal-footer">
                <div class="col-md-4">
                  <button id="kiri" type="button" class="btn btn-primary" data-dismiss="modal" @click="moveToDoing(detail['.key'], detail.title, detail.description, detail.point, detail.assign_to)">doing</button>
                </div>
                <div class="col-md-4">
                  <button id="tengah" type="button" class="btn btn-danger" data-dismiss="modal" @click="deleteTask(detail['.key'])">delete</button>
                </div>
                <div class="col-md-4">
                </div>
              </div>
            </div>
          </div>
          </div>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      detail: {}
    }
  },
  firebase: function () {
    return {
      done: this.$db.ref('task/done/')
    }
  },
  methods: {
    show () {
      console.log('===============', this.done)
    },
    getDetail (id) {
      for (let i = 0; i < this.done.length; i++) {
        if (id === this.done[i]['.key']) {
          this.detail = this.done[i]
        }
      }
    },
    deleteTask (id) {
      this.$db.ref('task/done/' + id).remove()
    },
    moveToDoing (id, title, description, point, assignTo) {
      this.$db.ref('task/doing/').push({
        title: title,
        description: description,
        point: point,
        assign_to: assignTo,
        status: 'doing'
      })
      this.$db.ref('task/done/' + id).remove()
    }
  },
  created () {
    this.show()
  }
}
</script>

<style lang="css">
</style>
