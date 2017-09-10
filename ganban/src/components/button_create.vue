<template lang="html">
  <div>
    <!-- Trigger the modal with a button -->
    <button id="create" type="button" class="btn btn-danger" data-toggle="modal" data-target="#myModal">create task</button>
    <!-- Modal -->
    <div id="myModal" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 id="judul-modal" class="modal-title">New Task</h4>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label class="control-label" for="focusedInput">Input title</label>
              <input class="form-control" id="focusedInput" type="text" placeholder="title" v-model="title">
            </div>
            <div class="form-group">
              <label for="textArea" class="control-label">Description</label>
              <div>
                <textarea class="form-control" id="textArea" v-model="description"></textarea>
              </div>
            </div>
            <div class="form-group">
              <label class="control-label" for="focusedInput">Point</label>
              <input class="form-control" id="focusedInput" type="text" v-model="point">
            </div>
            <div class="form-group">
              <label class="control-label" for="focusedInput">Assign To</label>
              <input class="form-control" id="focusedInput" type="text" placeholder="assign to" v-model="assign_to">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-success" data-dismiss="modal" @click="addTask">Save</button>
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
      title: '',
      description: '',
      point: 0,
      assign_to: ''
    }
  },
  methods: {
    addTask () {
      this.$db.ref('task/backlog/').push({
        title: this.title,
        description: this.description,
        point: this.point,
        assign_to: this.assign_to,
        status: 'backlog'
      })
      this.title = ''
      this.description = ''
      this.point = 0
      this.assign_to = ''
    }
  }
}
</script>

<style lang="css" scoped>
#create {
  padding: 5px;
  margin-top: 20px;
  font-family: 'Philosopher', sans-serif;
  font-family: 'Handlee', cursive;
}

.form-group {
  text-align: left;
}

.modal-header {
  text-align: left;
}

#judul-modal {
  font-family: 'Lobster', cursive;
}
</style>
