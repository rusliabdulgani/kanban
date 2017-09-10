<template lang="html">
  <div>
    <div class="panel panel-info">
  <div class="panel-heading">
    <h3 id="judul-panel" class="panel-title">Todo</h3>
  </div>
  <div class="panel-body">
    <div class="panel panel-default" v-for="td in todo">
      <div class="panel-heading">{{ td.title }}</div>
      <div class="panel-body">
        <p>Point : {{ td.point }}</p>
        <p>Assign to : {{td.assign_to }}</p>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-info" data-toggle="modal" data-target="#myModal3" @click="getDetail(td['.key'])">
          detail
        </button>

        <!-- Modal -->
        <div class="modal fade" id="myModal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                  <button id="kiri" type="button" class="btn btn-primary" data-dismiss="modal" @click="moveToBacklog(detail['.key'], detail.title, detail.description, detail.point, detail.assign_to)">back log</button>
                </div>
                <div class="col-sm-4 col-md-4">
                  <span id="tengah"><button type="button" class="btn btn-danger" data-dismiss="modal" @click="deleteTask(detail['.key'])">delete</button></span>
                </div>
                <div class="col-sm-4 col-md-4">
                  <button type="button" class="btn btn-success" data-dismiss="modal" @click="moveToDoing(detail['.key'], detail.title, detail.description, detail.point, detail.assign_to)">doing</button>
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
      todo: this.$db.ref('task/todo/')
    }
  },
  methods: {
    show () {
      console.log('===============', this.todo)
    },
    getDetail (id) {
      for (let i = 0; i < this.todo.length; i++) {
        if (id === this.todo[i]['.key']) {
          this.detail = this.todo[i]
        }
      }
    },
    deleteTask (id) {
      this.$db.ref('task/todo/' + id).remove()
    },
    moveToBacklog (id, title, description, point, assignTo) {
      this.$db.ref('task/backlog/').push({
        title: title,
        description: description,
        point: point,
        assign_to: assignTo,
        status: 'backlog'
      })
      this.$db.ref('task/todo/' + id).remove()
    },
    moveToDoing (id, title, description, point, assignTo) {
      this.$db.ref('task/doing/').push({
        title: title,
        description: description,
        point: point,
        assign_to: assignTo,
        status: 'doing'
      })
      this.$db.ref('task/todo/' + id).remove()
    }
  },
  created () {
    this.show()
  }
}
</script>

<style lang="css" scoped>
  #kiri {
    text-align: left;
  }
  
  #judul-panel {
    font-family: 'Lobster', cursive;
  }
  
  #tengah {
    display:block;
	  text-align:center;
  }
</style>
