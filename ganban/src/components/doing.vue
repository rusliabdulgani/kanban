<template lang="html">
  <div>
    <div class="panel panel-success">
  <div class="panel-heading">
    <h3 class="panel-title">Doing</h3>
  </div>
  <div class="panel-body">
    <div class="panel panel-default" v-for="doi in doing">
      <div class="panel-heading">{{ doi.title }}</div>
      <div class="panel-body">
        <p>Point : {{ doi.point }}</p>
        <p>Assign to : {{doi.assign_to }}</p>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-info" data-toggle="modal" data-target="#myModal4" @click="getDetail(doi['.key'])">
          detail
        </button>

        <!-- Modal -->
        <div class="modal fade" id="myModal4" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                <div class="col-sm-4 col-md-4">
                  <button id="kiri" type="button" class="btn btn-info" data-dismiss="modal" @click="moveToTodo(detail['.key'], detail.title, detail.description, detail.point, detail.assign_to)">todo</button>
                </div>
                <div class="col-sm-4 col-md-4">
                  <button id="tengah" type="button" class="btn btn-danger" data-dismiss="modal" @click="deleteTask(detail['.key'])">delete</button>
                </div>
                <div class="col-sm-4 col-md-4">
                  <button type="button" class="btn btn-warning" data-dismiss="modal" @click="moveToDone(detail['.key'], detail.title, detail.description, detail.point, detail.assign_to)">done</button>
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
      doing: this.$db.ref('task/doing/')
    }
  },
  methods: {
    show () {
      console.log('===============', this.doing)
    },
    getDetail (id) {
      for (let i = 0; i < this.doing.length; i++) {
        if (id === this.doing[i]['.key']) {
          this.detail = this.doing[i]
        }
      }
    },
    deleteTask (id) {
      this.$db.ref('task/doing/' + id).remove()
    },
    moveToTodo (id, title, description, point, assignTo) {
      this.$db.ref('task/todo/').push({
        title: title,
        description: description,
        point: point,
        assign_to: assignTo,
        status: 'todo'
      })
      this.$db.ref('task/doing/' + id).remove()
    },
    moveToDone (id, title, description, point, assignTo) {
      this.$db.ref('task/done/').push({
        title: title,
        description: description,
        point: point,
        assign_to: assignTo,
        status: 'done'
      })
      this.$db.ref('task/doing/' + id).remove()
    }
  },
  created () {
    this.show()
  }
}
</script>

<style lang="css">
</style>
