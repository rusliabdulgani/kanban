<template lang="html">
  <div>
    <div class="panel panel-primary">
  <div class="panel-heading">
    <h3 id="judul-panel" class="panel-title">Back Log</h3>
  </div>
  <div class="panel-body">
    <div class="panel panel-default" v-for="back in backlog">
      <div class="panel-heading">{{ back.title }}</div>
      <div class="panel-body">
        <p>Point : {{ back.point }}</p>
        <p>Assign to : {{back.assign_to }}</p>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-info" data-toggle="modal" data-target="#myModal2" @click="getDetail(back['.key'])">
          detail
        </button>

        <!-- Modal -->
        <div class="modal fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                </div>
                <div class="col-sm-4 col-md-4">
                  <span id="tengah"><button type="button" class="btn btn-danger" data-dismiss="modal" @click="deleteTask(detail['.key'])">delete</button></span>
                </div>
                <div class="col-sm-4 col-md-4">
                  <button type="button" class="btn btn-info" data-dismiss="modal" @click="moveToTodo(detail['.key'], detail.title, detail.description, detail.point, detail.assign_to)">todo</button>
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
      backlog: this.$db.ref('task/backlog/')
    }
  },
  methods: {
    show () {
      console.log('===============', this.backlog)
    },
    getDetail (id) {
      for (let i = 0; i < this.backlog.length; i++) {
        if (id === this.backlog[i]['.key']) {
          this.detail = this.backlog[i]
        }
      }
    },
    deleteTask (id) {
      this.$db.ref('task/backlog/' + id).remove()
    },
    moveToTodo (id, title, description, point, assignTo) {
      this.$db.ref('task/todo/').push({
        title: title,
        description: description,
        point: point,
        assign_to: assignTo,
        status: 'todo'
      })
      this.$db.ref('task/backlog/' + id).remove()
    }
  },
  created () {
    this.show()
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
</style>
